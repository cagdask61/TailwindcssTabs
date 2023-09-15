import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";

import { ProductsService } from 'src/app/services/products.service';
import { TabsService } from 'src/app/services/tabs.service';
import { TabModel } from 'src/app/models/tabs-model/tab.model';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [
    TableModule,
    ButtonModule,
  ],
})
export default class ProductsComponent implements OnInit, OnDestroy {

  private tabsService = inject(TabsService);
  readonly productsService = inject(ProductsService);

  ngOnInit(): void {
    console.log("Created");
  }

  ngOnDestroy(): void {
    console.log("Closed");
  }

  openToTabs(id: number) {
    const product = this.productsService.get(id);
    const { closable, component, name } = <TabModel>this.tabsService.get('product_detail');
    this.tabsService.add({
      closable: closable,
      name: name,
      title: `${product?.name}`,
      component: component,
      data: product,
      description: `${product?.name} ismindeki ürün detayı`
    });
  }
}