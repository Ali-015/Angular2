import { CommunicateService } from './../../communicate.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-industry-detail',
  templateUrl: './industry-detail.component.html',
  styleUrls: ['./industry-detail.component.css']
})
export class IndustryDetailComponent implements OnInit {

  public showData: any;


  constructor(private route: ActivatedRoute, private service: CommunicateService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
      }
   );
   this.service.get().fromLogin === true ? this.showData = this.service.get().rowData : this.showData = this.service.get();
   
  }

}
