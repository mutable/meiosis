import { Component, h, Prop, Element } from '@stencil/core';
import { HTMLMutTabPanelElement } from '../mut-tabs/mut-tabs';

@Component({
  tag: 'mut-tabs-panel',
  styleUrl: 'mut-tabs-panel.css',
  shadow: true,
})
export class MutTabsPanel {
  @Prop() active = false;

  @Element() host: HTMLMutTabPanelElement;

  render() {
    return (
      <div class={this.active ? "visible" : "invisible"}>
        <slot />
      </div>
    );
  }

}
