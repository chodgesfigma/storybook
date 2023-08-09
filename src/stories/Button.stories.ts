import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    style: 'primary',
    label: 'Button',
    state: 'active',
    showBeforeIcon: true,
    showAfterIcon: true,
    showLabel: true,
  },
};

export const Secondary: Story = {
  args: {
    style: 'secondary',
    label: 'Button',
    state: 'active',
    showBeforeIcon: true,
    showAfterIcon: true,
    showLabel: true,
  },
};

export const Success: Story = {
  args: {
    style: 'success',
    label: 'Button',
    state: 'active',
    showBeforeIcon: true,
    showAfterIcon: true,
    showLabel: true,
  },
};

export const Warning: Story = {
  args: {
    style: 'warning',
    label: 'Button',
    state: 'active',
    showBeforeIcon: true,
    showAfterIcon: true,
    showLabel: true,
  },
};

export const Danger: Story = {
  args: {
    style: 'danger',
    label: 'Button',
    state: 'active',
    showBeforeIcon: true,
    showAfterIcon: true,
    showLabel: true,
  },
};

