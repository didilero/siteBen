import { Injectable } from '@angular/core';
import { Post } from '../post';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  postRef: AngularFireList<any>;;

  constructor(private db: AngularFireDatabase) {
    this.postRef = db.list('post',ref => ref.orderByChild('datePublication'));
  }

  getPosts() {
    return this.postRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ); // Méthode par https://github.com/angular/angularfire/blob/master/docs/rtdb/lists.md
  }

  createNewPost(texte: string) {
    var titre = this.recupTitre(texte);
    var laDate = Date.now();
    var leTexte = this.recupTexte(texte);
    var sousTitre = this.recupSousTitre(texte);
    this.postRef.push({
      titre: titre,
      texte: leTexte,
      datePublication: laDate,
      sousTitre: sousTitre
    });
  }

  recupTitre(texte: string){
    if(texte.indexOf("</h1>") != -1){
      var i = texte.indexOf("</h1>");
      return texte.substring(4,i);
    }
    return null;
  }

  recupTexte(texte:string){
    if(texte.indexOf("</h1>") != -1){
      var i = texte.indexOf("</h1>");
      return texte.substring(i+5);
    }
    return texte;
  }

  recupSousTitre(texte:string){
    if(texte.indexOf("</h2>") != -1 && texte.indexOf("<h2>") != -1){
      var j = texte.indexOf("</h2>");
      var i = texte.indexOf("<h2>");
      return texte.substring(i+4,j);
    }
    return texte;
  }

  delete(key: string){
    this.postRef.remove(key);
  }
  updateTitre(key: string, newTitre:string) {
    this.postRef.update(key, { titre: newTitre });
  }

  getUniquePost(index: string){
    return this.db.list('post', ref => ref.orderByChild('titre').equalTo(index)).valueChanges();
  }

}
