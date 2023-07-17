import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import TabsComponent from './components/tabs/tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    TabsComponent
  ],
})
export default class AppComponent { }