import { ComponentRef, Directive, Input, Type, ViewContainerRef, inject } from '@angular/core';
import { TabsService } from '../services/tabs.service';
import { TabModel } from '../models/tabs-model/tab.model';

@Directive({
  selector: '[loadTab]',
  standalone: true
})
export class LoadTabDirective {

  private readonly _viewContainerRef = inject(ViewContainerRef);
  private readonly tabsService = inject(TabsService);

  private _createdComponent: ComponentRef<any>;

  @Input({ alias: 'componentName', required: true })
  set setComponentName(value: string) {
    this.createComponent((<TabModel>this.tabsService.get(value)).component);
  }

  @Input({ alias: 'data' })
  set setData(value: any) {
    this._createdComponent.instance.data = value;
  }

  createComponent(component: Type<any>) {
    this._createdComponent = this._viewContainerRef.createComponent(component);
  }



}