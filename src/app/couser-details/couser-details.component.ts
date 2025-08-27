import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-couser-details',
  templateUrl: './couser-details.component.html',
  styleUrls: ['./couser-details.component.css']
})
export class CouserDetailsComponent {
  name: string = '';
  id: string = '';
  price: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name = params['coursename'];
      this.id = params['id'];
      this.price = params['courseprice'];
    })
  }
}
