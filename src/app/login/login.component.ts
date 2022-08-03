import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './service/login.service';

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
               private loginService: LoginService) { }

  ngOnInit(): void {
  }

  
  logear() {

    if(this.miFormulario.invalid){
      //mostrar mensaje de campos vacios
      return;
    }
    this.clicked= true;
    console.log(this.miFormulario.value);
    this.loginService.logear(this.miFormulario.controls['email'].value,this.miFormulario.controls['password'].value)
      .subscribe( info => {
        console.log(info)
        this.clicked= false;
      }, err => console.log('Datos invalidos'))
  }

}
