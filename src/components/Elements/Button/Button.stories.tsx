import type { Meta, StoryObj } from '@storybook/react';

import { Button , ButtonProps} from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Elements/Button',
  component: Button,
  parameters: {
    controls: { expanded: true}
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  //render: () => <Button isLoading={false} variant='solid'>Primary</Button>
  args: {
    children: 'Primary',
    variant: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary'
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const Small: Story = {
  args: {
    size: 'xs',
    children: 'Small',
  },
};
