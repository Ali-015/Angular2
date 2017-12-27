import { Router } from '@angular/router';
import { CommunicateService } from './../communicate.service';
import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private service: CommunicateService, private router: Router) { }

  public data: Subscription;
  public data1: any;
  selectedRow = 0;
  @ViewChild('snav') sideNav: ElementRef;


  fillerNav = ['Industries', 'Solutions', 'Products', 'Resources', 'About Us', 'Contact Us'];
  
  // Working with getters and setters
  ngOnInit() {
    this.data = this.service.get();
    console.log(this.data);
    console.log(this.sideNav);
    
  }

  setClickedRow (index: number) {
    this.selectedRow = index;
    this.sideNav.close();
    switch ( index ) {
      case 0:
      this.router.navigate(['home/industry']);
      break;
      case 1:
      this.router.navigate(['home/solutions']);
      break;
      case 2:
      this.router.navigate(['home/products']);
      break;
      case 3:
      this.router.navigate(['home/resources']);
      break;
      case 4:
      this.router.navigate(['home/about']);
      break;
      case 5:
      this.router.navigate(['home/contact']);
      break;
      default:
      this.router.navigate(['home/industry']);
    }
    // this.router.navigate(['home/contact']);
}

      ngOnDestroy() {
        // this.subscription.unsubscribe();
      }

  // ngOnInit() {
  //   this.data = this.service.getMessage().subscribe(data1 => { this.data1 = data1;
  //   });
  //   console.log(this.data1);
  // }

}
