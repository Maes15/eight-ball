import { Component } from '@angular/core';
import { Response } from '../models/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentQuestion = '';

   responses: Array<Response> = [];
    private tarea: string;
    newQuestion() {
        const currentQuestion = this.currentQuestion.trim();
        console.log(currentQuestion);
        if (currentQuestion !== '') {
            const nuevaTarea: Response = {
                tarea: this.currentQuestion,
                newTarea: this.tarea
            };
            this.responses.unshift(nuevaTarea)
            this.currentQuestion = '';
        } else {
            console.error('pregunta que no preguntas');
        }

    }

}
