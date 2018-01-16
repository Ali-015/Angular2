import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'underscore';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  public arr: any;
  public flag: boolean;

  ngOnInit() {
    this.flag = true;
    this.arr = _.values(this.data);  // Converting object into array
    console.log(this.arr);
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}

@Component({
  selector: 'app-my-dialog1',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})

export class MyNewDialogComponent implements OnInit {
  
    constructor(public thisDialogRef: MatDialogRef<MyNewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  
    public arr1: any;
    public flag: boolean;
  
    ngOnInit() {
      this.flag = false;
      this.arr1 = _.values(this.data);  // Converting object into array
      console.log(this.arr1);
    }
  
    onCloseConfirm() {
      this.thisDialogRef.close('Confirm');
    }
    onCloseCancel() {
      this.thisDialogRef.close('Cancel');
    }
  
  }
