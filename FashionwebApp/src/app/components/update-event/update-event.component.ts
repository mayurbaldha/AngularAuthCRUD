import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApirequestService } from 'src/app/common/apirequest.service';
@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {

  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<UpdateEventComponent>, private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, private apirequestService: ApirequestService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      eventName: [this.data.eventName, [Validators.required]],
      eventInfo: [this.data.eventInfo, Validators.required]
    });
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  onEventUpdate() {
    if (this.form.valid) {
      const eventName = this.form.get('eventName').value;
      const eventInfo = this.form.get('eventInfo').value;
      const eventId= this.data.eventId ;
      const requestData = { eventId ,eventName, eventInfo }
      this.apirequestService.handleupdateEvents(requestData).then((data) => {
        this.dialogRef.close(data);
      });
    }
  }
}
