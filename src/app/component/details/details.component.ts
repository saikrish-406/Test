import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userData = [];
  errorMessage: string;
  status: boolean = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((res) => {
      if (res.name) {
        this.userData.push(res);
      }
      else {
        this.status = true;
        this.errorMessage = "LogIn First";
      }
    }, (err) => {
      console.log(err);
    })
  }

}
