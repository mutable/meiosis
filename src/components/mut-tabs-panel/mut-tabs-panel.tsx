import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mut-tabs-panel',
  styleUrl: 'mut-tabs-panel.css',
  shadow: true,
})
export class MutTabsPanel {

  @Prop() title = '';
  @Prop() active = false;
  
  render() {
    return (
      <Host>
        <slot style={{color: this.active ? 'red':'blue'}}></slot>
      </Host>
    );
  }

}
