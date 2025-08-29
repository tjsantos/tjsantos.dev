import { twJoin } from 'tailwind-merge'
import { RiStarLine } from 'react-icons/ri'
import { tw } from '@/utils'

type ButtonProps = {
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'primaryLink'
    | 'secondaryLink'
  size: 'md' | 'lg' | 'xl' | '2xl'
  children: React.ReactNode
}

const variantStyles = {
  primary: tw`bg-indigo-700-v3 text-white hover:bg-indigo-800-v3`,
  secondary: tw`bg-white text-neutral-700 shadow-sm`,
  tertiary: tw``,
  primaryLink: tw``,
  secondaryLink: tw``,
} as const satisfies Record<ButtonProps['variant'], string>

const sizeStyles = {
  md: tw`px-4 py-2 text-sm [&_svg]:size-4`,
  lg: tw`px-5 py-3 text-base`,
  xl: tw`px-6 py-4 text-lg`,
  '2xl': tw`px-7 py-5 text-xl`,
} as const satisfies Record<ButtonProps['size'], string>

export function Button({ variant, size, children }: ButtonProps) {
  return (
    <button
      className={twJoin(
        'flex items-center gap-2',
        variantStyles[variant],
        sizeStyles[size],
      )}
    >
      {children}
    </button>
  )
}

export function ButtonShowcase() {
  return (
    <div className="pt-50">
      <main className="mx-auto flex w-200 flex-col gap-8">
        <ul className="flex flex-wrap gap-4">
          <li>
            <Button variant="primary" size="md">
              <RiStarLine /> Hello
            </Button>
          </li>
        </ul>
        <ul className="flex flex-wrap gap-4">
          <li>
            <Button variant="secondary" size="md">
              Hello
            </Button>
          </li>
        </ul>
        <ul className="flex flex-wrap gap-4"></ul>
        <ul className="flex flex-wrap gap-4"></ul>
        <ul className="flex flex-wrap gap-4"></ul>
      </main>
    </div>
  )
}
