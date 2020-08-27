import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mut-tabs',
  styleUrl: 'mut-tabs.css',
  shadow: true,
})
export class MutTabs {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
