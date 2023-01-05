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
  Clasificacion = { a: "1ro", b: "2do", c: "3ro", d: "4to", e: "5to" };



  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  setData(item: any) {
    item = this.ExcelData;
  }
  getData() {
    return this.ExcelData;
  }
  IR() {
    this.router.navigateByUrl('/rifa')

  }
  SorteosFinal() {
    this.router.navigate(['/mant-premios']);
    localStorage.setItem('Rank', JSON.stringify(this.Clasificacion));
  }
}
