import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [

  ]
})
export default class HomeComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log("Created");
  }

  ngOnDestroy(): void {
    console.log("Closed");
  }

}