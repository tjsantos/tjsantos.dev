import type { Preview, ReactRenderer } from '@storybook/react-vite'

import '../src/styles.css'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    layout: 'fullscreen',

    viewport: {
      options: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '812px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '768px',
          },
        },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    // NOTE: can only have one theme from @storybook/addon-themes, so instead use:
    // https://storybook.js.org/docs/essentials/toolbars-and-globals

    // addon-themes dark mode switcher (tailwind custom variant css class)
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    // font switcher
    (Story, context) => {
      const fontClass = context.globals.font
      return (
        <div className={fontClass}>
          <Story />
        </div>
      )
    },
  ],
  globalTypes: {
    // font switcher (tailwind css class)
    font: {
      description: 'Global font setting',
      toolbar: {
        title: 'Font',
        icon: 'type', // aka @storybook/icons TypeIcon
        items: [
          { value: 'font-noto-sans', title: 'Noto Sans' },
          { value: 'font-sans', title: 'Sans Serif' },
          { value: 'font-serif', title: 'Serif' },
          { value: 'font-mono', title: 'Monospace' },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    font: 'font-noto-sans',
  },
}

export default preview
