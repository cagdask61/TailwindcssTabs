import { Component, OnDestroy, OnInit } from '@angular/core';

import { TableModule } from "primeng/table";

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [
    TableModule
  ],
})
export default class ProductsComponent implements OnInit, OnDestroy {

  products = [
    { id: 1, name: "Hp Laptop", price: 20_000, category: 'Teknoloji' },
    { id: 2, name: "Çorap", price: 10_00, category: 'Giyim' },
    { id: 3, name: "Kitap", price: 50_00, category: 'Kitaplar' },
    { id: 4, name: "Televizyon", price: 15_000, category: 'Teknoloji' },
    { id: 5, name: "Tencere", price: 200_00, category: 'Mutfak' },
  ];

  ngOnInit(): void {
    console.log("Created");
  }

  ngOnDestroy(): void {
    console.log("Closed");
  }

}