import { ProfileCard, ProfileCardPage } from './ProfileCard'
import profileImg from './profile.png'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'GreatFrontEnd/ProfileCard',
  component: ProfileCard,
  decorators: [
    (Story) => {
      return (
        <ProfileCardPage>
          <Story />
        </ProfileCardPage>
      )
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Sarah Dole',
    title: 'Front End Engineer @ Microsoft',
    description:
      'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.',
    profileUrl: '#',
    profileImageUrl: profileImg,
    socialLinks: {
      github: '#',
      linkedin: '#',
      instagram: '#',
      twitter: '#',
    },
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    profileUrl: '',
  },
}

export const NoImage: Story = {
  args: {
    ...Default.args,
    profileImageUrl: 'no image',
  },
}

export const MissingLinks: Story = {
  args: {
    ...Default.args,
    socialLinks: {
      github: '#',
      instagram: '#',
    },
  },
}
