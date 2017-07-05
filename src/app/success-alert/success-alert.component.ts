import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

    onStatusChange=false;

  constructor() {
    setTimeout(() => {
      this.onStatusChange=true;
    }, 7000);


   }

  ngOnInit() {
  }



  onParagraphCreate(){
    console.log("clicked");
  }

}
