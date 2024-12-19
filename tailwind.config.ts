import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  // safelist: [
  //   {
  //     pattern: /.*/,
  //   },
  // ],
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      // create a configuration for z-index
      zIndex: {
        '1': '1',
        '5': '5',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
      },
      // create a configuration for text size
      fontSize: {
        '2xl': '1.125rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      // create a configuration for text line height
      lineHeight: {
        '2xl': '1.25',
        '3xl': '1.5',
        '4xl': '1.75',
        '5xl': '2',
        '6xl': '2.25',
        '7xl': '2.5',
        '8xl': '2.75',
      },
      // create a configuration for gap sizes
      gap: {
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
      },
    },
  }
}
