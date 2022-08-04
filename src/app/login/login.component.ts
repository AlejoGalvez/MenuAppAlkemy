import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './service/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: [ , [ Validators.required, Validators.minLength(1) ] ],
    password: [ , [Validators.required, Validators.minLength(1) ]]
  })

  clicked: boolean = false;

  constructor( private fb:FormBuilder,
               private loginService: LoginService,
               private router: Router) { }

  ngOnInit(): void {
  }

  
  logear() {

    if(this.miFormulario.invalid){
      //mostrar mensaje de campos vacios
      return;
    }
    this.clicked= true;
    this.loginService.logear(this.miFormulario.controls['email'].value,this.miFormulario.controls['password'].value)
      .subscribe( info => {
        localStorage.setItem('token', info.token);
        this.clicked= false;
        this.router.navigate(['./carta']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Datos incorrectos',
          footer: 'Email o contraseña invalidos'})
        this.clicked= false;
    })
  }

}
