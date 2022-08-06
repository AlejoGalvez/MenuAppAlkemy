import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      if(localStorage.getItem('token')){
        this.router.navigateByUrl('/carta');
      } else { this.router.navigateByUrl('/login');}
  }, 5000);
  }

  get logeado() : boolean{
    return localStorage.getItem('token') ? true : false;

  }

}
