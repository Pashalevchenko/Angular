import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-react',
  templateUrl: './user-react.component.html',
  styleUrls: ['./user-react.component.scss']
})
export class UserReactComponent implements OnInit {

  user: any
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation()?.extras.state as any
    })
  }

  ngOnInit(): void {
  }

}
