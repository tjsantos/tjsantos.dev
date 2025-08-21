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
    socialLinks: [
      { platform: 'github', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'instagram', url: '#' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    profileUrl: '',
  },
}

export const MissingLinks: Story = {
  args: {
    ...Default.args,
    socialLinks: [
      { platform: 'github', url: '#' },
      { platform: 'instagram', url: '#' },
    ],
  },
}

export const EmptyUrls: Story = {
  args: {
    ...Default.args,
    socialLinks: [{ platform: 'github', url: '' }],
  },
}

export const NoLinks: Story = {
  args: {
    ...Default.args,
    socialLinks: [],
  },
}

export const TextOverflow: Story = {
  args: {
    ...Default.args,
    name: 'SarahDoleWithAVeryLongNameThatMightNotFitInTheCard',
    description:
      "This text has VeryLongWordsThatMightNotFitInTheCard but should wrap correctly. Here'sAnotherLongWordThatMightCauseIssuesIfNotHandledProperly.",
  },
}

export const NoImage: Story = {
  args: {
    ...Default.args,
    name: TextOverflow.args.name,
    profileImageUrl: 'no image',
  },
}
