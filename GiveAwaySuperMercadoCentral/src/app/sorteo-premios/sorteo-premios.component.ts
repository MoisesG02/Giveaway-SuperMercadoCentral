import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-sorteo-premios',
  templateUrl: './sorteo-premios.component.html',
  styleUrls: ['./sorteo-premios.component.scss']
})
export class SorteoPremiosComponent implements OnInit {
  ExcelData: any;


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
      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
      console.log(this.ExcelData)
      localStorage.setItem('Informacion Sorteo',JSON.stringify(this.ExcelData))
    }
  }


  IR(a: any){
    console.log(a)
    if(a == 1){
      this.router.navigateByUrl('/rifa');
    }
  }
}
