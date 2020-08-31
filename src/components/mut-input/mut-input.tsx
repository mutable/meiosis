import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

let id = 0;

@Component({
  tag: 'mut-input',
  styleUrl: 'mut-input.css',
  shadow: true,
})
export class MutInput {
  input: HTMLInputElement;
  inputId = `input-${++id}`;
  labelId = `input-label-${id}`;
  helpTextId = `input-help-text-${id}`;
  @Prop() label = '';
  @Prop({ mutable: true }) value: string = '';
  @Prop() placeholder = '';
  @Prop() valid = false;
  @Prop() invalid = false;
  @Prop() disabled = false;
  @Prop() readonly = false;
  @Prop() minlength: number;
  @Prop() maxlength: number;
  @Prop() min: number;
  @Prop() max: number;
  @Prop() required: boolean;
  @Prop() type: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' = 'text';

  handleChange() {
    this.value = this.input.value;
    this.mutChange.emit();
  }

  @Event() mutChange: EventEmitter;

  render() {
    return (
      <div
        class={{
          'form-control-has-label': this.label.length > 0,
          'form-control-valid': this.valid,
          'form-control-invalid': this.invalid
        }}
      >
        <label
          part="label"
          class={{
            'label': true,
            'label-valid': this.valid,
            'label-invalid': this.invalid
          }}
        >
          {this.label}
        </label>

        <div
          class={{
            'input': true,
            'input-disabled': this.disabled,
            'input-valid': this.valid,
            'input-invalid': this.invalid
          }}
        >
          <input
            part="input"
            ref={el => (this.input = el)}
            id={this.inputId}
            class="input__control"
            type={this.type === 'password' ? 'text' : this.type}
            placeholder={this.placeholder}
            disabled={this.disabled}
            readonly={this.readonly}
            minLength={this.minlength}
            maxLength={this.maxlength}
            min={this.min}
            max={this.max}
            value={this.value}
            required={this.required}
            onChange={this.handleChange}
          />
        </div>
        <div
          id={this.helpTextId}
          class={{
            'help-text': true,
            'help-text-valid': this.valid,
            'help-text-invalid': this.invalid
          }}
        >
          <slot name="help-text" />
        </div>
      </div>
    );
  }

}
