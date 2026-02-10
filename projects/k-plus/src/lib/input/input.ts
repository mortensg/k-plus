import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'number';

let nextUniqueId = 0;

@Component({
  selector: 'kplus-input',
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KPlusInput),
      multi: true,
    },
  ],
})
export class KPlusInput implements ControlValueAccessor {
  @ViewChild('input', { static: true }) private readonly inputEl?: ElementRef<HTMLInputElement>;

  /**
   * Prefer passing an explicit id from the consuming form field/label.
   * If you don't, an auto-generated id is used so labels can still reference it.
   */
  @Input() id = `kplus-input-${++nextUniqueId}`;

  @Input() name?: string;
  @Input() type: InputType = 'text';
  @Input() placeholder?: string;
  @Input() autocomplete?: string;
  @Input() inputmode?: string;

  @Input() readonly = false;
  @Input() required = false;

  /**
   * Use aria-label for icon-only/visually-hidden labels.
   * When you have a visible <label for>, prefer aria-labelledby via the label.
   */
  @Input('aria-label') ariaLabel?: string;

  /**
   * Space-separated list of element ids that describe the input.
   * Hook this up to hint + error text from a future <kplus-form-field>.
   */
  @Input('aria-describedby') ariaDescribedby?: string;

  /**
   * Emits whenever the user changes the value.
   * For forms integration, prefer ControlValueAccessor.
   */
  @Output() valueChange = new EventEmitter<string>();

  private _value = '';
  private _disabled = false;

  @Input()
  get value(): string {
    return this._value;
  }
  set value(v: string) {
    this._value = v ?? '';
    this._syncNativeValue();
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(v: boolean) {
    this._disabled = !!v;
  }

  @HostBinding('attr.data-disabled') get dataDisabled() {
    return this.disabled ? '' : null;
  }

  @HostBinding('attr.data-readonly') get dataReadonly() {
    return this.readonly ? '' : null;
  }

  // ControlValueAccessor
  private onChange: (value: string) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  writeValue(value: unknown): void {
    this._value = (value ?? '') as string;
    this._syncNativeValue();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // UI events
  protected handleInput(value: string) {
    this._value = value;
    this.onChange(this._value);
    this.valueChange.emit(this._value);
  }

  protected handleBlur() {
    this.onTouched();
  }

  focus() {
    this.inputEl?.nativeElement.focus();
  }

  private _syncNativeValue() {
    const el = this.inputEl?.nativeElement;
    if (!el) return;

    // Avoid moving the caret in some browsers when not needed.
    if (el.value !== this._value) {
      el.value = this._value;
    }
  }
}
