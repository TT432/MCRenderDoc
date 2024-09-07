import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Key of The Minecraft Render",
  description: "A tutorial of Minecraft Render",
  base: '/MCRenderDoc/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TT432' }
    ],
    sidebar: [
      {
          items:[
            {text: "Start", link: "/start"},
            {text: "Generated Model", link: "/generated_model"}
          ]
      }
    ]
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en',
    }
  }
})
