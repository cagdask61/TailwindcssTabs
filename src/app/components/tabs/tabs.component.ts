import { NgFor, NgIf } from '@angular/common';
import { Component, Type, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadTabDirective } from 'src/app/directives/load-tab.directive';
import { TabsService } from 'src/app/services/tabs.service';
import { TabModel } from 'src/app/models/tabs-model/tab.model';

import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { PROVIDE_TABS } from 'src/app/app.tabs';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [
    NgFor,
    NgIf,
    ReactiveFormsModule,
    FormsModule,

    LoadTabDirective,


    TabViewModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    DropdownModule,
  ],
})
export default class TabsComponent {

  readonly tabs = inject(PROVIDE_TABS);

  readonly tabsService = inject(TabsService);

  tabForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    title: new FormControl(""),
    description: new FormControl(""),
    closable: new FormControl(true),
  });


  close(index: number) {
    this.tabsService.delete(index);
  }

  addToTabs(componentName: string) {
    this.tabsService.add(<TabModel>this.tabsService.get(componentName));
  }

  add() {
    if (this.tabForm.valid) {
      const { name, title, description, closable } = this.tabForm.value;
      const component = <Type<any>>this.tabsService.get(name)?.component;
      this.tabsService.add({
        name, title, description, closable, component
      });
    }
  }
}