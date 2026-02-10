import type { Meta, StoryObj } from '@storybook/angular';

import { Button } from './button';

const meta: Meta<Button> = {
  title: 'K-Plus/Button',
  component: Button,
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    type: 'button',
  },
  render: (args) => ({
    props: args,
    template: `<kplus-button
      [variant]="variant"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      [type]="type"
    >Button</kplus-button>`,
  }),
};

export default meta;

type Story = StoryObj<Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Danger: Story = {
  args: { variant: 'danger' },
};

export const Loading: Story = {
  args: { loading: true },
};
