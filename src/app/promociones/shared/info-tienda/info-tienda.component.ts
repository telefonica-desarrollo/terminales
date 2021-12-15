import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-info-tienda',
  templateUrl: './info-tienda.component.html',
  styleUrls: ['./info-tienda.component.css']
})
export class InfoTiendaComponent implements OnInit {

  @Input() tienda: any;
  @Input() mostrar: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
