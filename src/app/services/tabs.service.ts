import { Injectable, effect, inject, signal } from '@angular/core';
import { TabModel } from '../models/tabs-model/tab.model';
import { LocalStorageService } from './local-storage.service';
import { PROVIDE_TABS_NAME } from '../app.tabs';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  private readonly localStorageService = inject(LocalStorageService);
  private readonly tabs = inject(PROVIDE_TABS_NAME);

  data = signal<Array<TabModel>>(this.localStorageService.get('tabs') ?? []);

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
    return this.tabs.find((value) => value.name === name);
  }

}