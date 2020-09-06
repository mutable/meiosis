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

// Maybe have two versions of carousel separately as 
// components - one for mobile view and one for the desktop

  componentDidLoad() {
    this.resizeObserver = new ResizeObserver(() => this.syncHorizontalScroll());
    this.resizeObserver.observe(this.host);
  }

  disconnectedCallback() {
    this.resizeObserver.unobserve(this.host);
  }

  syncHorizontalScroll() {
    console.log('qwe', this.host.scrollWidth , this.host.clientWidth)
    this.canScrollHorizontally = this.host.scrollWidth > this.host.clientWidth;
  }

  mobile() {
    return (
      <div class='slides-wrapper'>
        <div class="slides">
          <slot />
        </div>
      </div>
    );
  }

  desktop() {
    return (
      <div class='griding-wrapper'>
        <slot />
      </div>
    );
  }

  render() {
    return this.canScrollHorizontally ? <div class='wrap'>{this.mobile()}</div> : <div class='wrap'>{this.desktop()}</div>
  }

}
