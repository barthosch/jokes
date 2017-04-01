import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input('joke') data: Joke;
  @Output() deleteJoke = new EventEmitter<Joke>();

  delete() {
    this.deleteJoke.emit(this.data);
  }

}
