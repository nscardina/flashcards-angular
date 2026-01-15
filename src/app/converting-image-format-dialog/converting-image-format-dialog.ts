import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: 'app-converting-image-format-dialog',
  imports: [MatDialogModule],
  templateUrl: './converting-image-format-dialog.html',
  styleUrl: './converting-image-format-dialog.scss',
})
export class ConvertingImageFormatDialog {

  data: { fromFormat: string, toFormat: string } = inject(MAT_DIALOG_DATA)

}
