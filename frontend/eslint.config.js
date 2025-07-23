// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { tanstackConfig } from '@tanstack/eslint-config'

export default [...tanstackConfig, // global ignores
{ ignores: ['**/*.gen.ts'] }, ...storybook.configs["flat/recommended"]];
