import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rifa',
  templateUrl: './rifa.component.html',
  styleUrls: ['./rifa.component.scss']
})
export class RifaComponent implements OnInit {
  arrayPremios: any = []
  numero: any;
  constructor() { 
    this.premios()
  }

  ngOnInit(): void {
  }


  premios(){
    
    this.arrayPremios = JSON.parse(localStorage.getItem("Premios")!)
    console.log(this.arrayPremios)
    

  }

}
