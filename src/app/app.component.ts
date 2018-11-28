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
    newQuestion(tarea) {
        const currentQuestion = tarea.trim();
        console.log(currentQuestion);
        if (currentQuestion !== '') {
            const nuevaTarea: Response = {
                tarea: currentQuestion,
                newTarea: this.tarea
            };
            this.responses.unshift(nuevaTarea)
            this.currentQuestion = '';
        } else {
            alert('Tienes que introducir un articulo');
        }

    }
    borrarTarea(index) {
        this.responses.splice(index,1);
    }


}
