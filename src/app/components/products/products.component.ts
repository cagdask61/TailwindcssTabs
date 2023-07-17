import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [

  ],
})
export default class ProductsComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log("Created");
  }

  ngOnDestroy(): void {
    console.log("Closed");
  }

}