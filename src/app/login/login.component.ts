import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'
import { BackendService } from '../services/backend.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private be_servide: BackendService) { }

  usuario= {user: 'Jesus', password: '123'}
  nusuario= {user: "", password: ""}
  
  ngOnInit() {
  }

  nLogin(){
    this.be_servide.login(this.nusuario).subscribe((data) => {
      if(data){
        this.router.navigate(["/home/prepago"])
      }else{
        alert("Usuario no encontrado")
      }
    })
  }

  Login() {
    if(this.usuario.user == "admin" && this.usuario.password == "123"){
      this.router.navigate(["/cargar/terminales"])
      return
    }
    if(this.usuario.user =="Jesus" && this.usuario.password == "123"){
      this.router.navigate(["/home/prepago"])
      return
    }

      Swal.fire({
        text: 'El usuario o contraseña son incorrectos',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      })
    
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
