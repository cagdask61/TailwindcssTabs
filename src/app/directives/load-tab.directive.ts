import { Directive, Input, Type, ViewContainerRef, inject } from '@angular/core';
import { TabsService } from '../services/tabs.service';
import { TabModel } from '../models/tabs-model/tab.model';

@Directive({
  selector: '[loadTab]',
  standalone: true
})
export class LoadTabDirective {

  private readonly _viewContainerRef = inject(ViewContainerRef);
  private readonly tabsService = inject(TabsService);

  @Input({ alias: 'componentName', required: true })
  set setComponent(value: string) {
    this.createComponent((<TabModel>this.tabsService.get(value)).component);
  }

  createComponent(component: Type<any>) {
    return this._viewContainerRef.createComponent(component);
  }

}