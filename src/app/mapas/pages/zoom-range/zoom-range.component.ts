import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
  
  .mapa-container {
    height: 100%; 
    width: 100%; 
  }

  .row {
    background-color: white;
    border-radius: 5px; 
    bottom: 50px; 
    left: 50px;
    padding: 10px;
    position: fixed; 
    z-index: 999; 
  }

  `
  ]
})
export class ZoomRangeComponent implements OnInit {

  mapa!: mapboxgl.Map; 

  constructor() { }

  ngOnInit(): void {

    this.mapa = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: [11.755939922338264, 47.71440393818242],
      zoom: 17 
    });

  }

  zoomOut() {
    console.log("zoom out"); 
    this.mapa.zoomOut();
  }

  zoomIn() {
    console.log("zoom In"); 
    this.mapa.zoomIn();
  }


}
