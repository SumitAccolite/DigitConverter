import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberToWordsPipe } from './number-to-words.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NumberToWordsPipe],
})
export class AppComponent {
  inputNumber!: number;
  convertedResult: string = '';

  constructor(private numberToWordsPipe: NumberToWordsPipe) {}
  convertNumber() {}
}
