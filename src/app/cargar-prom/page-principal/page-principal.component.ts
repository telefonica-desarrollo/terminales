import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.css']
})
export class PagePrincipalComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  ruta(){
    this.router.navigate(["cargar/comisiones"])
  }

}
