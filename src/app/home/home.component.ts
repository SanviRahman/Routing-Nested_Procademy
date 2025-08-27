import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users = [
    {
      id: 1,
      name: "Shanto"
    },
    {
      id: 2,
      name: "Sanvi"
    },
    {
      id: 3,
      name: "Shanta"
    },
    {
      id: 4,
      name: "Oboni"
    },

  ]
}
