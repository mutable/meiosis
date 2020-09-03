import { Component, h } from '@stencil/core';

@Component({
  tag: 'mut-carousel-item',
  styleUrl: 'mut-carousel-item.css',
  shadow: true,
})
export class MutCarouselItem {

  render() {
    return (
      <div class='item'>
        <slot></slot>
      </div>
    );
  }

}
