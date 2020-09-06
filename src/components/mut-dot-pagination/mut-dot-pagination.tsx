import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mut-dot-pagination',
  styleUrl: 'mut-dot-pagination.css',
  shadow: true,
})
export class MutDotPagination {
  @Prop() href = '';

  render() {
    return (
      <Host>
        <a href={this.href}><slot /></a>
      </Host>
    );
  }

}
