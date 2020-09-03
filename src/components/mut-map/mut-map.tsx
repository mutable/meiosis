import { Component, h, Prop} from '@stencil/core';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  tag: 'mut-map',
  styleUrl: 'mut-map.css',
  shadow: true,
})
export class MutMap {
  @Prop() id = '';
  componentDidLoad() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYW5hcmltIiwiYSI6ImNrZW40NGNtZDF1YmMydHBjM3NlaXh3Mm0ifQ.rjQG6u15a0C3HCcbzNAzmg';
    var map = new mapboxgl.Map({
      container: this.id,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  }

  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }

}
