import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SorteoPremiosComponent } from '../sorteo-premios/sorteo-premios.component';

@Component({
  selector: 'app-rifa',
  templateUrl: './rifa.component.html',
  styleUrls: ['./rifa.component.scss']
})
export class RifaComponent implements OnInit {
  arrayPremios: any = []
  Clasificacion = {a: "1ro", b: "2do" ,c: "3ro",d: "4to",e: "5to"};
  arrayRank: any = []
  numero: any;
  ganador: any;
  data: any;
  id: any;  
  x:any;
  @Input() public ExcelData: any;
  constructor(private route: ActivatedRoute) { 
    this.premios()
    this.sorteo()
    console.log(this.ExcelData)
  }

  ngOnInit(): void {
   
  }
  premios(){
    this.arrayPremios = JSON.parse(localStorage.getItem("Premios")!)
    localStorage.setItem('Rank', JSON.stringify(this.Clasificacion));

    //const ganador = this.arrayPremios[Math.floor(Math.random() * this.arrayPremios.length)];
    //console.log(this.arrayPremios)
    //console.log(ganador)
  }
  sorteo(){
  
  }

  
}