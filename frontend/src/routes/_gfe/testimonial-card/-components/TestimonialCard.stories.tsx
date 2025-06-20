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
// - fix imageUrl
// - fix name overflow

export const Default: Story = {
  args: {
    name: 'Sarah Dole',
    username: '@sarahdole',
    imageUrl: 'imageUrl',
    text: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
}

export const VeryLongName: Story = {
  args: {
    name: 'Someone with a very long name',
    username: '@sarahdole',
    imageUrl: 'imageUrl',
    text: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
}

export const ImageAltText: Story = {
  args: {
    name: 'Someone with a very long name',
    username: '@sarahdole',
    imageUrl: 'no image alt text',
    text: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
}
