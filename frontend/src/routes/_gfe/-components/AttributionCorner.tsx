type Theme = 'light' | 'dark' | 'neutral'
const textColors: Record<Theme, string> = {
  light: 'text-neutral-600',
  dark: 'text-neutral-500',
  neutral: 'text-neutral-200',
}
const linkColors: Record<Theme, string> = {
  light: 'text-sky-600',
  dark: 'text-sky-600',
  neutral: 'text-sky-200',
}

type AttributionCornerProps = {
  theme?: Theme
}
export const AttributionCorner = ({
  theme = 'light',
}: AttributionCornerProps) => {
  return (
    <div
      className={`fixed right-4 bottom-4 text-xs ${textColors[theme]}`}
      data-gfe-screenshot-exclude="true"
    >
      Designed by{' '}
      <a
        href="https://www.greatfrontend.com/projects?ref=challenges"
        target="_blank"
        className={`underline ${linkColors[theme]}`}
      >
        GreatFrontEnd
      </a>
      . Built by{' '}
      <a
        href="https://github.com/tjsantos/tjsantos.dev"
        target="_blank"
        className={`underline ${linkColors[theme]}`}
      >
        TJ Santos
      </a>
      .
    </div>
  )
}
