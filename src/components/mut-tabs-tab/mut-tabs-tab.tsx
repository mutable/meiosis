import { Component, h, Prop, Element } from '@stencil/core';
import { HTMLMutTabElement } from '../mut-tabs/mut-tabs';

@Component({
  tag: 'mut-tabs-tab',
  styleUrl: 'mut-tabs-tab.css',
  shadow: true,
})
export class MutTabsTab {

  @Prop() panel = '';
  @Prop() active = false;

  @Element() host: HTMLMutTabElement;

  onClick () {
    (async () => {
      const foundTabs = document.querySelector('mut-tabs');
      await foundTabs && foundTabs.tabClicked(this.panel);
    })();
  }

  render() {
    return (
      <button class={this.active ? "active" : "inactive"} onClick={() => this.onClick()}>
        <slot />
      </button>
    );
  }

}
