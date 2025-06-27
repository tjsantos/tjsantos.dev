import { defaultCard } from './TestimonialCardPage'
import { TestimonialCard } from './TestimonialCard'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'GreatFrontEnd/TestimonialCard',
  component: TestimonialCard,
  tags: ['autodocs'],
} satisfies Meta<typeof TestimonialCard>

export default meta

type Story = StoryObj<typeof meta>

// TODO
// - fix image alt text
// - fix name overflow

export const Default: Story = {
  args: defaultCard,
}

export const VeryLongName: Story = {
  args: {
    ...Default.args,
    name: 'Someone with a very long name',
  },
}

export const ImageAltText: Story = {
  args: {
    ...VeryLongName.args,
    imageUrl: 'no image alt text',
  },
}
