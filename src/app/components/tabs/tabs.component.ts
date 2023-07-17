import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';

import { LoadTabDirective } from 'src/app/directives/load-tab.directive';
import { TabsService } from 'src/app/services/tabs.service';
import { TabModel } from 'src/app/models/tabs-model/tab.model';

import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [
    NgFor,
    NgIf,
    LoadTabDirective,
    TabViewModule,
  ],
})
export default class TabsComponent {

  readonly tabsService = inject(TabsService);

  close(index: number) {
    this.tabsService.delete(index);
  }

  loadHomeComponent() {
    this.tabsService.add(<TabModel>this.tabsService.get('home_component'));
  }

  loadProductsComponent() {
    this.tabsService.add(<TabModel>this.tabsService.get('products_component'));
  }


}