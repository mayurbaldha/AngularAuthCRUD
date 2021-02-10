import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApirequestService } from 'src/app/common/apirequest.service';
@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.sass']
})
export class DeleteEventComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<DeleteEventComponent>,private apirequestService: ApirequestService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  onDeleteClick() {

      this.apirequestService.handledeleteEvent(this.data).then((data) => {
        this.dialogRef.close(data);
      });
    }
  
}
