import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'CoVscode',
  description: 'CoVscode使用说明，以及开发过程中的技术细节等',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started'],
  }),

  bundler: webpackBundler(),
  base: '/CoVscode-docs/',
})
