import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  selectedValue= 'Sales/Request Demo';
  // businessValue = 'Select';
  public aboutForm: FormGroup;
  public dialogRef: any;
  public dialogResult: any;
  

    options = [
      {value: 'Sales/Request Demo', viewValue: 'Sales/Request Demo'},
      {value: 'Customer Support', viewValue: 'Customer Support'},
      {value: 'Media/Analyst Inquiry', viewValue: 'Media/Analyst Inquiry'},
      {value: 'Reseller/Partner Program', viewValue: 'Reseller/Partner Program'}
    ];

    businessOptions = [
      {value: 'Buy Here Pay Here Dealership', viewValue: 'Buy Here Pay Here Dealership'},
      {value: 'Lender/Bank/Credit Union', viewValue: 'Lender/Bank/Credit Union'},
      {value: 'Rental Agencies', viewValue: 'Rental Agencies'},
      {value: 'New/Used Car Dealership', viewValue: 'New/Used Car Dealership'},
      {value: 'Fleet Management 1-299 Vehicles', viewValue: 'Fleet Management 1-299 Vehicles'},
      {value: 'Fleet Management 300+ Vehicles', viewValue: 'Fleet Management 300+ Vehicles'},
      {value: 'Trailer/Asset Management 300+ Trailers', viewValue: 'Trailer/Asset Management 300+ Trailers'}
    ];

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.aboutForm = new FormGroup({
      option: new FormControl(''),
      firstname: new FormControl('', Validators.minLength(3)),
      lastname: new FormControl('', Validators.minLength(3)),
      companyname: new FormControl('', Validators.minLength(3)),
      email: new FormControl('', Validators.minLength(3)),
      phone: new FormControl('', Validators.minLength(3)),
      businessOption: new FormControl('', Validators.required),
    });
  }


  openDialog(aboutForm) {
    

    this.dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: aboutForm.value
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });

  }
 
}
