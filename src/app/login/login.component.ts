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

  constructor(private router: Router, private be_service: BackendService) { }

  usuario= {Usuario: 'Luis', Password: '1234'}
  
  ngOnInit() {
  }

  nLogin(){
    if(this.usuario.Usuario == "admin" && this.usuario.Password == "123"){
      this.router.navigate(["/cargar"])
      return
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Cargando"
    })
    Swal.showLoading();

    this.be_service.login(this.usuario).subscribe((data) => {
      if(data){
        Swal.close();
        localStorage.setItem("Usuario", this.usuario.Usuario)
        this.router.navigate(["/home"])
      }else{
        Swal.fire({
          title: "Error al ingresar",
          text: "Ingrese bien los datos",
          icon: "error",
          confirmButtonText: "Ok",
        })
      }
    })
  }

}
