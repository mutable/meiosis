import { Component, h, State, Element} from '@stencil/core';
import ResizeObserver from 'resize-observer-polyfill';

@Component({
  tag: 'mut-carousel',
  styleUrl: 'mut-carousel.css',
  shadow: true,
})
export class MutCarousel {
  resizeObserver: any;
  @State() canScrollHorizontally = false;
  @Element() host: HTMLElement;

  componentDidLoad() {
    this.resizeObserver = new ResizeObserver(() => this.syncHorizontalScroll());
    this.resizeObserver.observe(this.host);
  }

  disconnectedCallback() {
    this.resizeObserver.unobserve(this.host);
  }

  syncHorizontalScroll() {
    this.canScrollHorizontally = this.host.scrollWidth > this.host.clientWidth;
  }

  render() {
    return (
      <div class='carousel'>
        <div class="slides">
          <slot name='slide'/>
        </div>
        <div class="dots">
          <slot name='dot' />
        </div>
      </div>
    );
  }

}
