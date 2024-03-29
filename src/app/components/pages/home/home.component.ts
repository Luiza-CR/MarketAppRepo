import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const par = this.activatedRoute.snapshot.paramMap.get('parametro');
        console.log(par);
  }

  goToLogin() {
      this.router.navigate(['../pages/login']);
  }

}
