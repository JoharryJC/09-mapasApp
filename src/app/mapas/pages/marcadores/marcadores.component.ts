import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
  
  .mapa-container {
    height: 100%; 
    width: 100%; 
  }

  `]
})
export class MarcadoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
