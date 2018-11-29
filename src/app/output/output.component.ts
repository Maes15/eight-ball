import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Response} from '../../models/response';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
    @Input() responses: Array<Response>;
    @Output() borrarTarea = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  eliminar(index) {
      this.borrarTarea.emit(index);
      localStorage.setItem('response', JSON.stringify(this.responses));
  }

}
