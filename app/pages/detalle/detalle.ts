import { Component , OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetallePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/detalle/detalle.html',
})
export class DetallePage implements OnInit{

	img : string |number;
	titl : string;
	desc : string;
	dat = [];

	ngOnInit(){
		this.dat = this.navP.get('data');
		console.log(JSON.stringify(this.dat));
		this.img = this.dat[0].i;
		this.titl = this.dat[0].t;
		this.desc = this.dat[0].d;
/*
		this.img= this.navP.get('data.i');
		this.titl = this.navP.get('data.t');
		this.desc = this.navP.get('data.');
*/
	}

	constructor(private nav: NavController, private navP : NavParams) {

  }



}
