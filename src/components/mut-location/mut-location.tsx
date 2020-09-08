import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';

const accessKey = 'pk.eyJ1IjoiYW5uYW5hcmltIiwiYSI6ImNrZW40NGNtZDF1YmMydHBjM3NlaXh3Mm0ifQ.rjQG6u15a0C3HCcbzNAzmg';

@Component({
  tag: 'mut-location',
  styleUrl: 'mut-location.css',
  shadow: true,
})
export class MutLocation {
  input: HTMLInputElement;
  @Prop() buttonType;
  @Prop() placeholder = 'Location';
  @Prop({ mutable: true }) value: string = '';

  @State() locations = [];
  @State() lngLat = [];

  componentDidLoad() {
    const mapControl = document.getElementsByClassName('mapboxgl-control-container');

    if(mapControl.length) {
      mapControl[0].remove()
    }
  }

  @Event() mutChange: EventEmitter;

  handleChange = () => {
    if(this.input) {
      this.value = this.input.value;
      this.mutChange.emit();
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.value}.json?access_token=${accessKey}`)
        .then(response => response.json())
        .then(data => this.locations = data.features)
        .catch(err => console.error(err))
    }
  }

  handleClick() {
  }

  markLocation(item) {
    this.lngLat = item.center
  }

  showList() {
    return (
      <ul>
        {this.locations && this.locations.map((item) => {
          return <li onClick={() => this.markLocation(item)}>{item.place_name}</li>
        })}
      </ul>
    );
  }

  render() {
    return (
      <div class='wrapper'>
        <div class='search'>
          <div>
            <input
              ref={el => (this.input = el)}
              id='map-input'
              class={{
                'input': true
              }}
              placeholder={this.placeholder}
              value={this.value}
              onInput={this.handleChange}
            />
            {this.locations && this.locations.length && this.showList() || null}
          </div>
          <mut-button disabled={!this.value} id='map-button' slot='input' onClick={() => this.handleClick()} type={this.buttonType}>Primary</mut-button>
        </div>
        <div class='map'>
          <mut-map lngLat={this.lngLat} id='mut-map'></mut-map>
          <slot name='map' />
        </div>
      </div>
    );
  }

}
