// https://vitepress.dev/guide/custom-theme
import { VPBTheme } from '@chunge16/vitepress-blogs-theme';
import AdaptiveImage from './AdaptiveImage.vue'
import KbDocIcon from './KbDocIcon.vue'
import FeatureTabs from './FeatureTabs.vue'
import PricingToggle from './PricingToggle.vue'
import './custom.css'

import { watch } from 'vue'

//static-download.chaterm.net 
const URLS = {
  win: 'https://static-download.chaterm.net/chaterm-latest-setup-x64.exe',

  mac_arm: 'https://static-download.chaterm.net/chaterm-latest-macos-arm64.dmg',
  mac_x64: 'https://static-download.chaterm.net/chaterm-latest-macos-x64.dmg',

  linux_deb: 'https://static-download.chaterm.net/chaterm-latest-linux-amd64.deb',
  linux_universal: 'https://static-download.chaterm.net/chaterm-latest-linux-x86_64.AppImage',

  android: 'https://play.google.com/store/apps/details?id=com.intsig.chaterm.global',
  ios: 'https://apps.apple.com/app/6754307456',
}

function detectOS() {
  const uaData = navigator.userAgentData
  const ua = (navigator.userAgent || '').toLowerCase()
  const platform = (navigator.platform || '').toLowerCase()

  if (uaData?.platform) {
    const p = uaData.platform.toLowerCase()
    if (p.includes('android')) return 'Android'
    if (p.includes('ios')) return 'iOS'
  }
  if (/android/i.test(ua)) return 'Android'

  const isIPad =
    platform === 'macintel' && typeof navigator.maxTouchPoints === 'number' && navigator.maxTouchPoints > 1
  if (/iphone|ipod|ipad/i.test(ua) || isIPad) return 'iOS'

  if (/windows|win32|win64|wow64/i.test(ua)) return 'Windows'

  if (!isIPad && (/mac|macintosh|darwin/i.test(ua) || platform.includes('mac'))) return 'macOS'

  if (/linux|x11/i.test(ua) && !/android/i.test(ua)) return 'Linux'

  return null
}

async function detectMacArch() {
  if (navigator.userAgentData?.getHighEntropyValues) {
    try {
      const { architecture } = await navigator.userAgentData.getHighEntropyValues(['architecture'])
      if (architecture === 'arm') return 'arm64'
      if (architecture) return 'x64'
    } catch { }
  }

  const ua = navigator.userAgent.toLowerCase()
  if (ua.includes('arm') || ua.includes('aarch64')) return 'arm64'
  if (ua.includes('x86_64') || ua.includes('amd64') || ua.includes('intel')) return 'x64'

  return 'arm64'
}


async function pickDownloadTarget() {
  const os = detectOS()
  if (!os) return null

  if (os === 'Windows') {
    return { label: 'Windows', url: URLS.win }
  }

  if (os === 'macOS') {
    const arch = await detectMacArch()
    if (arch === 'x64') return { label: 'macOS (Intel)', url: URLS.mac_x64 }
    return { label: 'macOS (Apple Silicon)', url: URLS.mac_arm }
  }

  if (os === 'Android') {
    return { label: 'Android', url: URLS.android }
  }

  if (os === 'iOS') {
    return { label: 'iOS', url: URLS.ios }
  }


  return null
}

function findHeroDownloadLink(heroEl) {
  const links = heroEl.querySelectorAll('a')
  for (const a of links) {
    const href = a.getAttribute('href') || ''
    if (href === '/download/' || href.endsWith('/download/')) return a
  }
  return null
}

async function updateHeroDownload() {
  const hero = document.querySelector('.VPHero')
  if (!hero) return

  const a = findHeroDownloadLink(hero)
  if (!a) return

  const target = await pickDownloadTarget()
  if (!target) return

  const oldText = (a.textContent || '').trim()
  if (oldText === 'Download' || oldText.startsWith('Download for ')) {
    a.textContent = `Download for ${target.label}`
  }

  a.setAttribute('href', target.url)
  a.setAttribute('target', '_blank')

}

export default {
  extends: VPBTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('AdaptiveImage', AdaptiveImage)
    app.component('KbDocIcon', KbDocIcon)
    app.component('FeatureTabs', FeatureTabs)
    app.component('PricingToggle', PricingToggle)

    if (typeof window !== 'undefined') {
      const refresh = () => {
        setTimeout(() => {
          requestAnimationFrame(() => {
            updateHeroDownload()
          })
        }, 100)
      }

      refresh()
      router.onAfterRouteChanged = refresh
      watch(
        () => router.route.data.frontmatter,
        (frontmatter) => {
          if (frontmatter.pageClass?.includes('custom-home-page')) {
            document.body.classList.add('custom-home-page')
          } else {
            document.body.classList.remove('custom-home-page')
          }
        },
        { immediate: true }
      )
    }
  }
};
