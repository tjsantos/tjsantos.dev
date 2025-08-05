import { BlogCard, BlogCardPage } from './BlogCard'
import cardImage from './spacejoy-YqFz7UMm8qE-unsplash.jpg'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'GreatFrontEnd/BlogCard',
  component: BlogCard,
  decorators: [
    (Story) => {
      return (
        <BlogCardPage>
          <Story />
        </BlogCardPage>
      )
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof BlogCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Top 5 Living Room Inspirations',
    description:
      'Curated vibrants colors for your living, make it pop & calm in the same time.',
    tags: ['Interior'],
    imageUrl: cardImage,
  },
}
