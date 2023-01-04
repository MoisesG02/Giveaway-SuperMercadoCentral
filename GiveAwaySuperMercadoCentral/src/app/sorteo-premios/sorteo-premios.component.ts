import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from "xlsx";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-sorteo-premios',
  templateUrl: './sorteo-premios.component.html',
  styleUrls: ['./sorteo-premios.component.scss']
})
export class SorteoPremiosComponent implements OnInit {
 public ExcelData: any;
 Clasificacion = {a: "1ro", b: "2do" ,c: "3ro",d: "4to",e: "5to"};



  constructor( public router : Router ) { }

  ngOnInit(): void {
  }

  
  ReadExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;
    return  this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
      


    }
  }

  setData(item:any) {
    item = this.ExcelData;
  }
  getData() {
    return this.ExcelData;
  }
  IR(a: any){
    let x = this.ExcelData
    console.log(this.ExcelData)
    if(a == 1){
      console.log(this.ExcelData)
      this.router.navigate(['/rifa', x]);
    }
  
  }
  SorteosFinal(){
    this.router.navigate(['/mant-premios']);
    localStorage.setItem('Rank', JSON.stringify(this.Clasificacion));
  }
}
