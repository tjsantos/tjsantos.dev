import { TestimonialCard, TestimonialCardPage } from './TestimonialCard'
import profileThumbnail from './profile-thumbnail.png'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'GreatFrontEnd/TestimonialCard',
  component: TestimonialCard,
  decorators: [
    (Story) => {
      return (
        <TestimonialCardPage>
          <Story />
        </TestimonialCardPage>
      )
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof TestimonialCard>

export default meta

type Story = StoryObj<typeof meta>

// TODO: make long name and image alt text more accessible

export const Default: Story = {
  args: {
    name: 'Sarah Dole',
    username: '@sarahdole',
    imageUrl: profileThumbnail,
    text: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
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
