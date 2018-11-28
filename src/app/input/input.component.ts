import { Component, EventEmitter, Output } from '@angular/core';

import { InputComponent } from './input.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent  {

    @Output() nuevaTarea = new EventEmitter<string>();
    currentQuestion = '';

    submit() {
        console.log(this.currentQuestion);
        this.nuevaTarea.emit(this.currentQuestion);
        this.currentQuestion = '';
    }
}
