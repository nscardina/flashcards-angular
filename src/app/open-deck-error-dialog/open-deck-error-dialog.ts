import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button"

@Component({
  selector: 'fc-open-deck-error-dialog',
  imports: [ MatDialogModule, MatButtonModule ],
  templateUrl: './open-deck-error-dialog.html',
  styleUrl: './open-deck-error-dialog.scss',
})
export class FileFormatErrorDialog {
  
  constructor(public dialogRef: MatDialogRef<FileFormatErrorDialog>) { }

  closeDialog() {
    this.dialogRef.close()
  }

}
