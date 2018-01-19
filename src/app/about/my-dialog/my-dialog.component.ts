import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'underscore';
import { FormGroup, FormControl, Validators } from '@angular/forms';



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
  
    constructor(public thisDialogRef: MatDialogRef<MyNewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    public arr1: any;
    public flag: boolean;
    public dialogForm: FormGroup;
    


    
  
    ngOnInit() {
      this.flag = false;
      // console.log(this.data);
      this.createForm();
    }

    createForm() {
      console.log(this.data);
      this.dialogForm = new FormGroup({
        name: new FormControl(this.data.name, Validators.minLength(3)),
        progress: new FormControl(this.data.progress)
      });
    }
  
    save(dialogForm: FormGroup) {
      // console.log(dialogForm.value);
      this.data.name = dialogForm.value.name;
      this.data.progress = dialogForm.value.progress;
      
      console.log(this.data);
      this.thisDialogRef.close('Confirm');
      // this.thisDialogRef.close(this.data);
    }
    onCloseCancel() {
      this.thisDialogRef.close('Cancel');
    }
  
  }
