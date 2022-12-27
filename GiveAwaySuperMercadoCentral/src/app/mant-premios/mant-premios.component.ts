import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mant-premios',
  templateUrl: './mant-premios.component.html',
  styleUrls: ['./mant-premios.component.scss']
})
export class MantPremiosComponent implements OnInit {
  premios:any = []
  premio1:any;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

agregarpremio(){
  let premiosactualizado = {
    descripcion : this.premio1,
  }
  
  this.premios.push(premiosactualizado)
  
  localStorage.setItem("Premios",JSON.stringify(this.premios))
}

}
