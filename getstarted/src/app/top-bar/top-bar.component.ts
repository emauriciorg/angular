import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})

export class TopBarComponent implements OnInit {
  @Input('name') store_name: string ;
  //= "Camello lunar";

  constructor() {
    this.store_name="";
  }

  ngOnInit(){
    this.store_name = "Camello Lunar";
  }
}
