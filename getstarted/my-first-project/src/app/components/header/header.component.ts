import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string ="Recreacion y Deportes";
  email:string = "jefedeareaparque@cofrem.com";
  phone:string = "6 81 83 22 ext 3922 / 300 912 51 45 ";

  constructor() { }

  ngOnInit(): void {
  }

}
