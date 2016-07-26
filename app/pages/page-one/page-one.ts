import { Component , OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestProvider } from '../test-provider/test-provider';
import {KkService} from '../../providers/kk-service/kk-service';
import {DetallePage} from '../detalle/detalle';

@Component({
  templateUrl: 'build/pages/page-one/page-one.html',
providers: []
})
export class PageOnePage implements OnInit {

numRandom;
content : Array<{title : string, desc : string, img : string | number}> =[];

   countries = [
        {country: "Ireland", continent: "Europe", language: "English"},
        {country: "Spain", continent: "Europe", language: "Spanish"},
        {country: "United Kingdom", continent: "Europe", language: "English"},
        {country: "France", continent: "Europe", language: "French"},
        {country: "Germany", continent: "Europe", language: "(other)"},
        {country: "Sweden", continent: "Europe", language: "(other)"},
        {country: "Norway", continent: "Europe", language: "(other)"},
        {country: "Italy", continent: "Europe", language: "(other)"},
        {country: "Greece", continent: "Europe", language: "(other)"},
        {country: "Iceland", continent: "Europe", language: "(other)"},
        {country: "Portugal", continent: "Europe", language: "Portuguese"},
        {country: "Malta", continent: "Europe", language: "(other)"},
        {country: "Brazil", continent: "South America", language: "Portuguese"},
        {country: "Argentina", continent: "South America", language: "Spanish"},
        {country: "Colombia", continent: "South America", language: "Spanish"},
        {country: "Peru", continent: "South America", language: "Spanish"},
        {country: "Venezuela", continent: "South America", language: "Spanish"},
        {country: "Uruguay", continent: "South America", language: "Spanish"}
    ];


ngOnInit() {

for (let i=0; i < 18; i++){

  this.numRandom = Math.floor(Math.random() * 499);
  
  this.content.push({
  	title: this.countries[i].country,
  	desc : this.countries[i].continent,
  	img : this.numRandom
  });
  console.log( this.numRandom);


}
 
}

constructor(private nav: NavController,
	private testProvider: TestProvider, private kkService : KkService) {

 }

detalle(id : string, title : string, desc : string){
	console.log(`click detalle ${id}`);
	let datos =[];
	datos.push({i :id, t: title, d : desc});
	this.nav.push(DetallePage,{data: datos});
}


changeMessage(){
    this.testProvider.setMessage("Page one rocks!");
 }

}
