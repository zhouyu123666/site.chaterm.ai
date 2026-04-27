import { defineConfig } from 'vitepress';
import {processData} from "@chunge16/vitepress-blogs-theme/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  appearance: 'dark',
  title: "Chaterm.ai_",
  titleTemplate: false, 
  description: "Chaterm — Open source AI native terminal and SRE Copilot",
  head: [
    ['meta', { name: 'description', content: 'Get years of SRE experience in minutes' }],
    ['meta', { property: 'og:title', content: 'Chaterm - Open source AI native terminal and SRE Copilot' }],
    ['meta', { property: 'og:description', content: 'Get years of SRE experience in minutes' }],
    ['link', { rel: 'icon', href: '/static/logo.ico', type: 'image/x-icon' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-K3CWHYW67E' }
    ],
    [
      'script',
      {},
      `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-K3CWHYW67E');
      `
    ]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Blog', link: '/blog/' },
            { text: 'Docs', link: '/docs/' },
            { text: 'Download', link: '/download/' }
        ],

        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Documentation Home', link: '/docs/' },
              { text: 'Download', link: '/docs/start/downloads/' },
              { text: 'Quick Start', link: '/docs/start/quickstart/' }
            ]
          },
          {
            text: 'Host Management',
            items: [
              { text: 'Host List', link: '/docs/hosts/' },
              { text: 'Add Personal Host', link: '/docs/hosts/add-personal' },
              { text: 'Add Bastion Host', link: '/docs/hosts/add-bastion' },
              { text: 'Add Router', link: '/docs/hosts/add-router' },
              { text: 'Import / Export Hosts', link: '/docs/hosts/import-export' },
              { text: 'Connect to Host', link: '/docs/hosts/connect' },
              { text: 'Edit / Clone / Delete Host', link: '/docs/hosts/edit-clone-delete' }
            ]
          },
          {
            text: 'Management',
            items: [
              { text: 'Key Management', link: '/docs/manage/keys/' },
              { text: 'File Management', link: '/docs/manage/files/' },
              { text: 'Extension Management', link: '/docs/manage/plugin/' }
            ]
          },
          {
            text: 'Terminal',
            items: [
              { text: 'Terminal Management', link: '/docs/terminal/manage/' },
              { text: 'Terminal Operations', link: '/docs/terminal/operations/' },
              { text: 'Command Autocomplete', link: '/docs/terminal/autocomplete/' },
              { text: 'Snippets', link: '/docs/terminal/snippets/' },
              { text: 'Chat to AI', link: '/docs/terminal/chattoai/' }
            ]
          },
          {
            text: 'AI Agent',
            items: [
              { text: 'AI Dialog', link: '/docs/ai/dialogs/' },
              { text: 'AI Settings', link: '/docs/ai/settings/' },
              { text: 'AI Preferences', link: '/docs/ai/preferences/' },
              { text: 'Model List', link: '/docs/ai/llms/' }
            ]
          },
          {
            text: 'Settings',
            items: [
              { text: 'General Settings', link: '/docs/settings/general/' },
              { text: 'Terminal Settings', link: '/docs/settings/terminal/' },
              { text: 'Extension Settings', link: '/docs/settings/extensions/' },
              { text: 'Shortcuts', link: '/docs/settings/shortcuts/' },
              { text: 'Rules', link: '/docs/settings/rules/' },
              { text: 'Billing Overview', link: '/docs/settings/billing/' },
              { text: 'MCP Settings', link: '/docs/settings/mcp/' },
              { text: 'Skills Settings', link: '/docs/settings/skills/' },
              { text: 'About', link: '/docs/settings/about/' }
            ]
          },
          {
            text: 'MCP',
            items: [
              { text: 'MCP Usage Guide', link: '/docs/mcp/usage/' },
              { text: 'MCP Troubleshooting', link: '/docs/mcp/troubleshooting/' }
            ]
          },
          {
            text: 'Skills',
            items: [
              { text: 'Skill Usage Guide', link: '/docs/skills/usage/' },
              { text: 'Skill Best Practices', link: '/docs/skills/troubleshooting/' }
            ]
          },
          {
            text: 'Knowledge Base',
            items: [
              { text: 'Usage Guide', link: '/docs/knowledgebase/' }
            ]
          },
          {
            text: 'User',
            items: [
              { text: 'Profile', link: '/docs/user/profile/' },
              { text: 'Account Management', link: '/docs/user/account/' },
              { text: 'Change Password', link: '/docs/user/edit/' }
            ]
          },
          {
            text: 'Privacy',
            items: [
              { text: 'Privacy Settings', link: '/docs/privacy/settings/' },
              { text: 'Privacy Policy', link: '/docs/privacy/policy/' }
            ]
          },
          {
            text: 'Mobile App',
            items: [
              { text: 'Quick Start', link: '/docs/mobile/quickstart/' },
              { text: 'Asset Management', link: '/docs/mobile/assets/' },
              { text: 'AI Dialog', link: '/docs/mobile/ai-agent/' },
              { text: 'Profile', link: '/docs/mobile/profile/' },
              { text: 'FAQ', link: '/docs/mobile/faq/' }
            ]
          },
          {
            text: 'Development',
            items: [
              { text: 'Contributing Guide', link: '/docs/contributing/' }
            ]
          }
        ],

        footer: {
          message: '<a href="/agreement/user/">Terms of Service</a> ｜ <a href="/agreement/privacy/">Privacy Policy</a> ｜ <a href="https://www.gnu.org/licenses/gpl-3.0.html">License</a> ｜ Contact: <a href="mailto:support@chaterm.ai">support@chaterm.ai</a>',
          copyright: `Copyright © ${new Date().getFullYear()} All rights reserved`
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/chaterm/chaterm' },
          { icon: 'discord', link: 'https://discord.com/invite/45SsUVuh' },
          { icon: 'x', link: 'https://x.com/Chaterm_ai', ariaLabel: 'X' }
        ],

        blog: {
          title: 'Blog',
          description: '',
          defaultAuthor: 'Chaterm',
          categoryIcons: {
            article: 'i-[carbon/notebook]',
            tutorial: 'i-[carbon/book]',
            document: 'i-[carbon/document]',
          },
          tagIcons: {
            github: 'i-[carbon/logo-github]',
            vue: 'i-[logos/vue]',
            javascript: 'i-[logos/javascript]',
            'web development': 'i-[carbon/development]',
            html: 'i-[logos/html-5]',
            git: 'i-[logos/git-icon]',
            vite: 'i-[logos/vitejs]',
            locked: 'i-[twemoji/locked]',
            react: 'i-[logos/react]',
            blog: 'i-[carbon/blog]',
            comment: 'i-[carbon/add-comment]',
          },
          giscus: {
            repo: 'chunge16/vitepress-blogs-theme-template',
            repoId: 'R_kgDOKz3GKg',
            category: 'General',
            categoryId: 'DIC_kwDOKz3GKs4CbySw',
            mapping: 'pathname', // default: `pathname`
            inputPosition: 'top', // default: `top`
            lang: 'zh-CN', // default: `zh-CN`
            lightTheme: 'light', // 默认: `light`
            darkTheme: 'transparent_dark', // 默认: `transparent_dark`
            defaultEnable: true, // 默认： true
          }
        },
      },
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ['@chunge16/vitepress-blogs-theme'],
    },
    ssr: {
      noExternal: ['@chunge16/vitepress-blogs-theme']
    },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
})
