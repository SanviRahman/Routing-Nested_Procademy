import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses =[
    {
      id:1,
      coursename:"Mechine learning",
      courseprice:"8k",
    },
    {
      id:2,
      coursename:"Data Structure",
      courseprice:"10k",
    },
    {
      id:3,
      coursename:"Algorithm",
      courseprice:"8k",
    },
    {
      id:4,
      coursename:"Mathemathics",
      courseprice:"6k",
    },
    {
      id:5,
      coursename:"Physics",
      courseprice:"6k",
    },
    {
      id:6,
      coursename:"Database Management",
      courseprice:"7k",
    },

  ]

}
