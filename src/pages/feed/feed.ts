import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {

  public lista_filmes = new Array<any>();

  public nome_usuario: string = "Jailsvs do Código";
  public objeto_feed = {
    titulo: "Jailson Volnei dos Santos",
    data: "November 5, 1955",
    descricao: "Estou criando um app incrível...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider) {
  }

  public somaDoisNumeros(x: number, y: number): void{
    alert('Soma: '+(x+y));
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(2, 8);
    this.movieProvider.getLatestMovies().subscribe(
      data=>{//=> declaracao de function simplificada
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
        this.lista_filmes = objeto_retorno.results;
    },error=>{
      console.log(error);
    })
  }

}
