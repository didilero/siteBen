import { Component, OnInit } from '@angular/core';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-toast-edit',
  templateUrl: './toast-edit.component.html',
  styleUrls: ['./toast-edit.component.scss']
})
export class ToastEditComponent implements OnInit {

  toastService: any;
  
  constructor(private ts: ToastService) {
    this.toastService = ts;
  }

  ngOnInit(): void {
  }

}
