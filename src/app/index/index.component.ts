import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../service/post-service.service';
import { Post } from '../post';
import { Observable } from 'rxjs';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class IndexComponent implements OnInit {
  items: Observable<any[]>;
  titre = new FormControl('');

  constructor(private service: PostServiceService,
    private modalService: NgbModal

  ) { }

  ngOnInit(): void {
    this.items = this.service.getPosts();
  }

  delete(key:string){
    this.service.delete(key);
  }

  updateTitre(key: string) {

    this.service.updateTitre(key, this.titre.value);
  }

  open(content) {
    this.modalService.open(content);
  }

}
