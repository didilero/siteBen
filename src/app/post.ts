export class Post {
  private id: string;
  public texte: string;
  private date: any;

  constructor(id, texte){
    this.id = id;
    this.texte = texte;
    this.date = new Date();
  }

  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }
  getDate(){
    return this.date;
  }
}
