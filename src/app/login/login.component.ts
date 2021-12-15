import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  usuario= {user: 'Jesus', password: '123'}
  
  ngOnInit() {
  }

  Login() {
    alert("hola")
    
    // this.service.obtenerLogin(this.usuario).subscribe(
    //   res => {
    //     const data: any = res;
    //     if (data.usuarioExiste) {
    //       localStorage.setItem("idUsuario", data.idUsuario)
    //       this.router.navigateByUrl("inicio")  
    //     } else {
    //       alertify.notify("Usuario o contraseña incorrectos.")
    //     }
    //   },
    //   err => { }
    // )
  }
}
