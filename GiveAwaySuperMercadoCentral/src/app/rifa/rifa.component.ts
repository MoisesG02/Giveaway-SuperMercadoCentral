import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SorteoPremiosComponent } from '../sorteo-premios/sorteo-premios.component';
import * as XLSX from "xlsx";


@Component({
  selector: 'app-rifa',
  templateUrl: './rifa.component.html',
  styleUrls: ['./rifa.component.scss']
})
export class RifaComponent implements OnInit {
  arrayPremios: any = []
  arrayRank: any = []
  numero: any;
  ganador: any;
  data: any;
  id: any;  
  x:any;
  ExcelData : any = []
  constructor(private route: ActivatedRoute) { 
    this.premios()

  }

  ngOnInit(): void {
   
  }
  premios(){
    this.arrayPremios = JSON.parse(localStorage.getItem("Premios")!)
    const ganador = this.arrayPremios[Math.floor(Math.random() * this.arrayPremios.length)];
    console.log(this.arrayPremios)
    console.log(ganador)
  }
  sorteo(item:any){
    let ganadores : any = []
    const chosenElements =  this.ExcelData.sort(() => Math.random() - 0.5).slice(0,item);
    
    if(ganadores)
    
    // for(let i = 0; i<ganadores.length;i++){

    //     if(ganadores[i].Cedula == ganadores[i+1].Cedula){

    //       console.log(ganadores[i])
    //     }


    // }


    console.log(chosenElements)
  }

  ReadExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;

      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
      console.log(this.ExcelData)

    }
  }

  
}