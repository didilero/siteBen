import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../service/post-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simple-post',
  templateUrl: './simple-post.component.html',
  styleUrls: ['./simple-post.component.scss']
})
export class SimplePostComponent implements OnInit {

  key: string;
  lePost: Observable<any[]>;

  constructor(private service: PostServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.key = this.route.snapshot.params['id'];
    this.lePost = this.service.getUniquePost(this.key);
    console.log(this.lePost);
  }

}
