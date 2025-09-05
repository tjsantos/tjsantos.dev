// Identity function for tailwind intellisense.
// See https://github.com/tailwindlabs/prettier-plugin-tailwindcss?#sorting-classes-in-template-literals
export function tw<T>(
  x: T,
  ...args: Array<any>
): T extends TemplateStringsArray ? string : T {
  if (Array.isArray(x) && 'raw' in x) {
    // Used as a tag function, so returns a string
    return String.raw({ raw: x }, ...args) as any
  }

  return x as any
}
