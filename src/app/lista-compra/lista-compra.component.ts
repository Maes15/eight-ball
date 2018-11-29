import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {

  @Input() data;

    ngOnInit(): void {
    }

}
