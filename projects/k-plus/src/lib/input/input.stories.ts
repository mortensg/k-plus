import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import type { Meta, StoryObj } from '@storybook/angular';

import { KPlusInput } from './input';

const meta: Meta<KPlusInput> = {
  title: 'K-Plus/Input',
  component: KPlusInput,
  decorators: [
    (story) => ({
      ...story(),
      moduleMetadata: {
        imports: [FormsModule, ReactiveFormsModule],
      },
    }),
  ],
  args: {
    type: 'text',
    placeholder: 'Type here…',
    disabled: false,
    readonly: false,
    required: false,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <div style="max-width: 320px; display: grid; gap: 8px;">
        <label [for]="id" style="font: 500 12px/1.2 system-ui; color: #334155;">Label</label>
        <kplus-input
          [id]="id"
          [type]="type"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [readonly]="readonly"
          [required]="required"
          [formControl]="control"
        />
        <div style="font: 12px/1.2 system-ui; color: #64748b;">Value: {{ control.value }}</div>
      </div>
    `,
  }),
};

export default meta;

type Story = StoryObj<KPlusInput>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Password: Story = {
  args: { type: 'password', placeholder: '••••••••' },
};
