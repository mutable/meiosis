import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'mut-button',
  styleUrl: 'mut-button.css',
  shadow: true,
})
export class MutButton {
  @Prop() type: 'default' | 'primary';
  @Prop({ reflect: true }) disabled = false;

  connectedCallback() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  render() {
    return (
      <button
        class={{
          'button-default': this.type === 'default',
          'button-primary': this.type === 'primary',
          'button-disabled': this.disabled,
        }}
        disabled={this.disabled}
      >
        <slot />
      </button>
    );
  }

}
