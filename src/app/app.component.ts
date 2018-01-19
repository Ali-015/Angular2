import { CommunicateService } from './communicate.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CommunicateService]  
})
export class AppComponent {




}
