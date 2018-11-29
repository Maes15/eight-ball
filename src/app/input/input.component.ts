import { Component, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

    @Output() nuevaTarea = new EventEmitter<string>();
    @Input() eliminaNewTarea = new EventEmitter<string>();
    currentQuestion = '';


    submit() {
        console.log(this.currentQuestion);
        this.nuevaTarea.emit(this.currentQuestion);
        this.currentQuestion = '';
    }

};