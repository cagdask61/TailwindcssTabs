import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  set<T = any>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get<T = any>(key: string) {
    return <T>JSON.parse(<string>localStorage.getItem(key));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

}