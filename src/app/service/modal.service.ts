import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: any[] = [];

  constructor() { }

  show(header: string, body: string) {
    this.modal.push({ header, body });
  }
  remove(toast) {
    this.modal = this.modal.filter(t => t != toast);
  }
}
