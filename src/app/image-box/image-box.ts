import { Component, computed, inject, input, PLATFORM_ID } from '@angular/core';
import { Side } from '../deck/side';
import { BoxNumber } from '../deck/Box';
import { AppUIState } from '../app-uistate';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { encode } from "base64-arraybuffer"
import { MatDialog } from '@angular/material/dialog';
import { ConvertingImageFormatDialog } from '../converting-image-format-dialog/converting-image-format-dialog';

@Component({
  selector: 'fc-image-box',
  imports: [
    MatIconModule,
    MatButtonModule
],
  templateUrl: './image-box.html',
  styleUrl: './image-box.scss',
})
export class ImageBox {

  constructor(private dialog: MatDialog) {}

  platformId = inject(PLATFORM_ID)

  side = input(Side.FRONT)

  boxNumber = input<BoxNumber>("1")

  #appState = inject(AppUIState)

  imageContents = computed(() => this.#appState.getImageBase64CurrentCard(this.boxNumber()))

  async onFileSelected(event: Event) {
    

    const input = event.target as HTMLInputElement
    
    if (!input.files?.length) {
      return
    }

    const imageFile = input.files[0]

    
    
    if (imageFile.type === "image/heic") {
      const dialogRef = this.dialog.open(ConvertingImageFormatDialog, {
        data: {
          fromFormat: imageFile.type.slice(imageFile.type.indexOf("/") + 1),
          toFormat: "png"
        }
      })
      this.#appState.setImageCurrentCard(this.boxNumber(), await heicToPngBase64(imageFile))
      dialogRef.close()
    } else {
      const reader = new FileReader()
      reader.onload = (e) => {
        const image = e.target!.result as string
        input.value = ""
        this.#appState.setImageCurrentCard(this.boxNumber(), image)
      }
      reader.readAsArrayBuffer(imageFile)
    }
    
  }

}

const heicToPngBase64 = (heicFile: File): Promise<string> => {

  return new Promise(async(resolve, reject) => {
    const reader = new FileReader()
    const convert = (await import("heic-convert/browser")).default
    reader.onload = async(e) => {
      const buffer = e.target!.result as ArrayBuffer
      const pngBuffer = await convert({
        buffer: new Uint8Array(buffer) as any,
        format: "PNG"
      })
      resolve(`data:image/png;base64,${encode(pngBuffer)}`)
    }
    reader.onerror = (error) => {
      reject(error)
    }

    reader.readAsArrayBuffer(heicFile)
  })  
}
