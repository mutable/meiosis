import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mut-tabs-tab',
  styleUrl: 'mut-tabs-tab.css',
  shadow: true,
})
export class MutTabsTab {
  
  @Prop() title = '';
  @Prop() active = false;

  render() {
    return (
        <button style={{color: this.active ? 'red':'blue'}}>{this.title}</button>
    );
  }

}
