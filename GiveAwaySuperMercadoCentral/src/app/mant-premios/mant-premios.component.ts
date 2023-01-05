import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mant-premios',
  templateUrl: './mant-premios.component.html',
  styleUrls: ['./mant-premios.component.scss']
})
export class MantPremiosComponent implements OnInit {
  premios: any = []
  premio1: any;
  router: any;
  IDRank: any;
  constructor() {
  }


  ngOnInit(): void {
  }

  agregarpremio() {

    let ID = JSON.parse(localStorage.getItem("ID")!)
    if (ID == undefined || ID == null) {
      this.IDRank = 1;
      localStorage.setItem("ID", JSON.stringify(1));
    } else if (this.IDRank = 1) {
      this.IDRank = ID + 1;
      localStorage.setItem("ID", JSON.stringify(this.IDRank))
      if (this.IDRank == 6) {
      localStorage.removeItem('ID');
      location.reload();
      }
    }

    let premiosactualizado = {
      descripcion: this.premio1,
      numero: this.IDRank
    }
    this.premios.push(premiosactualizado)
    localStorage.setItem("Premios", JSON.stringify(this.premios))
  }

}
