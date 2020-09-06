import { Component, h, Prop, State } from '@stencil/core';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  tag: 'mut-map',
  styleUrl: 'mut-map.css',
  shadow: true,
})
export class MutMap {
  @Prop() id = '';
  @Prop() searchId = '';
  @Prop() lngLat = [];

  @State() map;

  componentWillRender() {
    console.log('new marker',this.lngLat);
    if(this.lngLat.length) {
      const _lngLat = {lon: this.lngLat[0], lat: this.lngLat[1]};
      new mapboxgl.Marker()
        .setLngLat(_lngLat)
        .addTo(this.map);
    }
  }

  componentWillLoad() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYW5hcmltIiwiYSI6ImNrZW40NGNtZDF1YmMydHBjM3NlaXh3Mm0ifQ.rjQG6u15a0C3HCcbzNAzmg';
    this.map = new mapboxgl.Map({
      container: this.id,
      style: 'mapbox://styles/annanarim/ckeo8hxcl2z5319o2837wa8pe',
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    if(this.lngLat.length) {
      // const _lngLat = new mapboxgl.LngLat(this.lngLat[0], this.lngLat[1]);
      const _lngLat = {lon: this.lngLat[0], lat: this.lngLat[1]};
      new mapboxgl.Marker()
        .setLngLat(_lngLat)
        .addTo(this.map);
    }
  }

  render() {
    return (
      <div class='map-wrapper'></div>
    );
  }

}
