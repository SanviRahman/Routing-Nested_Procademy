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
    },
    {
      id:2,
      coursename:"Data Structure",
    },
    {
      id:3,
      coursename:"Algorithm",
    },
    {
      id:4,
      coursename:"Mathemathics",
    },
    {
      id:5,
      coursename:"Physics",
    },
    {
      id:6,
      coursename:"Database Management",
    },

  ]

}
