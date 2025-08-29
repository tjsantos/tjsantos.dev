export const tw = (strings: TemplateStringsArray, ...args: Array<any>) =>
  String.raw(strings, ...args)
