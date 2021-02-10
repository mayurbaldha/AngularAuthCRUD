import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApirequestService } from 'src/app/common/apirequest.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddEventComponent>, private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: [], private apirequestService: ApirequestService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      eventName: ['', [Validators.required]],
      eventInfo: ['', Validators.required]
    });
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  onEventAdd() {
    if (this.form.valid) {
      const eventName = this.form.get('eventName').value;
      const eventInfo = this.form.get('eventInfo').value;
      const requestData = { eventName, eventInfo }
      this.apirequestService.handleAddEvents(requestData).then((data) => {
        this.dialogRef.close(data);
      });
    }
  }

}
