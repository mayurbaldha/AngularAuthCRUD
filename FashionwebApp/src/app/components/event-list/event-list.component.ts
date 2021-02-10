import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApirequestService } from 'src/app/common/apirequest.service';
import { AddEventComponent } from '../add-event/add-event.component';
import { DeleteEventComponent } from '../delete-event/delete-event.component';
import { UpdateEventComponent } from '../update-event/update-event.component';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  displayedColumns: string[] = ['eventId', 'eventName', 'eventInfo','actions'];
  fashionevents:any =[];
  constructor( private apirequestService: ApirequestService,
    public dialog: MatDialog,
    public router:Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
   this.loadEvents();
  }
  loadEvents(){
    this.apirequestService.handleLoadEvents().then((data)=>{
      this.fashionevents = data;
     })
  }
  openAddModal(){
    let dialogRef = this.dialog.open(AddEventComponent, {
      height: '300px',
      width: '600px',
    });
  
      dialogRef.afterClosed().subscribe(result => {
        let snackBarRef = this._snackBar.open('Event Added Successfully');

        setTimeout(() => {
          snackBarRef.dismiss();
          this.loadEvents();
        }, 1000);
      });
  }
  openEditModal(event){
    console.log(event)
    let dialogRef = this.dialog.open(UpdateEventComponent, {
      height: '300px',
      width: '600px',
      data: event
    });
  
      dialogRef.afterClosed().subscribe(result => {
        let snackBarRef = this._snackBar.open('Event updated Successfully');

        setTimeout(() => {
          snackBarRef.dismiss();
          this.loadEvents();
        }, 1000);
      });
    
  }
  openDeleteModal(event){
    console.log(event)
    let dialogRef = this.dialog.open(DeleteEventComponent, {
      height: '200px',
      width: '400px',
      data: event
    });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('Delete Dialog result:',result);
        let snackBarRef = this._snackBar.open(result.message);

        setTimeout(() => {
          snackBarRef.dismiss();
          this.loadEvents();
        }, 1000);
        
      });
    
  }
  logoutuser(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
