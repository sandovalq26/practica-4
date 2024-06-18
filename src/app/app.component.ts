import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EstructuraModule} from "./components/estructura.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EstructuraModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practica-4';
}
