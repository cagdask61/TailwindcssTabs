import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import DataComponent from '../common/data-component';
import { JsonPipe } from '@angular/common';
import { ProductModel } from 'src/app/models/product-models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [
    JsonPipe
  ],
})
export default class ProductDetailComponent implements DataComponent<ProductModel | undefined>, OnInit, OnDestroy {

  @Input()
  data: ProductModel | undefined;


  ngOnInit(): void {
    console.log("Created");
  }

  ngOnDestroy(): void {
    console.log("Closed");
  }


}
