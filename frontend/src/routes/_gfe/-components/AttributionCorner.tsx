import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

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

const AttributionThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
} | null>(null)

export const AttributionThemeProvider = ({
  children,
  initialTheme,
}: {
  children: ReactNode
  initialTheme: Theme
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const contextValue = useMemo(() => {
    return { theme, setTheme }
  }, [theme, setTheme])

  return (
    <AttributionThemeContext.Provider value={contextValue}>
      {children}
    </AttributionThemeContext.Provider>
  )
}

export const useAttributionTheme = () => {
  return useContext(AttributionThemeContext)
}

type AttributionCornerProps = {
  theme?: Theme
}
export const AttributionCorner = ({
  theme: propTheme,
}: AttributionCornerProps) => {
  const themeContext = useAttributionTheme()
  const theme = propTheme ?? themeContext?.theme ?? 'light'

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
