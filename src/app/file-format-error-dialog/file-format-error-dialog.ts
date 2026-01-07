import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button"

@Component({
  selector: 'app-file-format-error-dialog',
  imports: [ MatDialogModule, MatButtonModule ],
  templateUrl: './file-format-error-dialog.html',
  styleUrl: './file-format-error-dialog.scss',
})
export class FileFormatErrorDialog {
  
  constructor(public dialogRef: MatDialogRef<FileFormatErrorDialog>) { }

  closeDialog() {
    this.dialogRef.close()
  }

}
