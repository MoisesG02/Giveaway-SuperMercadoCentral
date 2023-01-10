import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SorteoPremiosComponent } from '../sorteo-premios/sorteo-premios.component';
import * as XLSX from "xlsx";
import Swal from 'sweetalert2';
import { ServiciosService } from '../servicios.service';


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
  chosenElements:any = []
  excelFinal:any = []
  constructor(private route: ActivatedRoute,private Sqlservicio: ServiciosService) { 
    this.premios()

  }

  ngOnInit(): void {
   
  }
  premios(){
    this.arrayPremios = JSON.parse(localStorage.getItem("Premios")!)
    const ganador = this.arrayPremios[Math.floor(Math.random() * this.arrayPremios.length)];
    
  }
  sorteo(item:any){
    
    this.chosenElements =  this.excelFinal.sort(() => Math.random() - 0.5).slice(0,item);
    
  for (let i = 0; i < this.chosenElements.length; i++) {
    
    const objeto = this.chosenElements[i];
    for (let j = 0; j < this.chosenElements.length; j++) {
      if (i !== j && objeto.Cedula === this.chosenElements[j].Cedula) {
        console.log(this.chosenElements)
        console.log(this.chosenElements[j])
        this.chosenElements.splice(j, 1, this.excelFinal.sort(() => Math.random() - 0.5).slice(0,1)[0]);
        console.log(this.chosenElements)

        

      }
      
      
    }
    console.log(this.chosenElements)
    console.log(this.excelFinal)
  }
  const objetosFiltrados = this.excelFinal.filter((objeto : any) => {
    !this.chosenElements.some((o:any) => o.Cedula === objeto.Cedula);
  });
  console.log(objetosFiltrados)
    for(let i =0 ; i<this.chosenElements.length;i++){
      
      this.Sqlservicio.ganadores(this.chosenElements[i]).subscribe((data:any) =>{
        console.log(data)
      })
      this.proximoGanador();

      
    }
    

  
  





}

  ReadExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary', cellText: true });
      var sheetNames = workBook.SheetNames;
    
      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])

      this.ExcelData.forEach((element:any) => {
         let datoFinal =
        {
          Boleta: element.Boleta,
          Cedula: element.Cedula,
          Factura: element.Factura,
          Fecha: element.Fecha,
          Nombre: element.Nombre,
          Telefono: element.Telefono,
          premio:"Saza",
          No1: 0
        }

        this.excelFinal.push(datoFinal)
      });
      console.log(this.excelFinal)
      console.log(this.ExcelData)
    }
  }

  proximoGanador(){
    let indexGanador = 0;
    let self = this;
    function mostrarAlerta(i:any) {
      if(i < self.chosenElements.length) {
        Swal.fire({
          
            title: 'Felicidades !!',
            html: '<h1>'+'<b>Nombre:</b>  '+'<h1>'+ self.chosenElements[i].Nombre+'</h1>' +'<br>' +'<b>Boleta:</b> '+ '<h1>'+self.chosenElements[i].Boleta+'</h1>',
            width: 1200,
            padding: '7em',
            color:'#716add',
            background: '#fff url(../../assets/confetti.gif)',
            backdrop: `
            rgba(0,0,123,0.4)
              url("https://i.gifer.com/W9k1.gif")
            `,
            confirmButtonText: 'Aceptar',
          }).then(() => {
            mostrarAlerta(i+1)
          })
      }
    }
    mostrarAlerta(indexGanador)
  }
}




