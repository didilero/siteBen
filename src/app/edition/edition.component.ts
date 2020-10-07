import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { PostServiceService } from '../service/post-service.service';
import { Post } from '../post';
import { ToastService } from '../service/toast.service';


@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {
  @ViewChild('editor') editor;

  editorForm: FormGroup;

  editorStyle = {
     height: '300px'
  };

  modules = {
    toolbar: [
      [{ 'header': [1,2,3, false] }],
      ['bold','italic','underline'],
      ['blockquote'],

      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['link', 'image', 'video']
    ]
  }
  aBesoin = false;

  postService:any;
  toastService: any;

  constructor(service: PostServiceService, ts:ToastService) {
    this.postService = service;
    this.toastService = ts;
  }

  ngOnInit(): void {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    });
  }

  aBesoinInspi() {
    if (this.aBesoin){
      this.aBesoin = false;
    }else {
      this.aBesoin = true;
    }
  }

  onSubmit(){
    //console.log(this.editorForm.get('editor').value);
    if(this.editorForm.get('editor').value == null){
      var header = "Wesh !";
      var body = "Abuse pas tu as rien ecris.";
      this.toastService.show(header,body);
    }else {
      this.postService.createNewPost(this.editorForm.get('editor').value);
      var header = "Super !";
      var body = "Ton post a été ajouté a la base de donnée. Tu peux verifier directement depuis l'accueil.";
      this.toastService.show(header,body);
    }
  }

}
