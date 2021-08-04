import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // @Input()
  user: any

  constructor(private router: Router,  private acrivatedRoute: ActivatedRoute) {
    this.acrivatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation()?.extras.state as any;
    })
  }

  ngOnInit(): void {
  }

}
