import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-principal-com',
  templateUrl: './page-principal-com.component.html',
  styleUrls: ['./page-principal-com.component.css']
})
export class PagePrincipalComComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ruta(){
    this.router.navigate(["cargar/terminales"])
  }
}
