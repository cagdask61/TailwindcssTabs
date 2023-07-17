import { Injectable, effect, inject, signal } from '@angular/core';
import { TabModel } from '../models/tabs-model/tab.model';
import { Tabs } from '../constants/tabs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  private readonly localStorageService = inject(LocalStorageService);

  data = signal<Array<TabModel>>(this.localStorageService.get('tabs'));

  constructor() {
    effect(() => {
      this.localStorageService.set('tabs', this.data());
    });
  }

  add(model: TabModel) {
    this.data.update((value) => {
      this.data().push(model);
      return value;
    });
  }

  delete(index: number) {
    this.data.update((value) => {
      this.data().splice(index, 1);
      return value;
    });
  }

  get(name: string): TabModel | undefined {
    return Tabs.find((value) => value.name === name);
  }

}