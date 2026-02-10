import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'kplus-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @HostBinding('attr.data-variant') get dataVariant() {
    return this.variant;
  }

  @HostBinding('attr.data-size') get dataSize() {
    return this.size;
  }

  @HostBinding('attr.data-disabled') get dataDisabled() {
    return this.disabled ? '' : null;
  }

  @HostBinding('attr.data-loading') get dataLoading() {
    return this.loading ? '' : null;
  }
}
