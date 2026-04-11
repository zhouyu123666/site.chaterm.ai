# Downloads

Chaterm is available for all major operating systems with native installation packages.

<div id="smart-download-section" class="smart-download-container">
  <a id="smart-download-btn" href="/download/" class="smart-download-btn" style="display: none;">
    <span class="download-icon">⤓</span>
    <span id="download-btn-text">Download Chaterm</span>
  </a>
</div>

## Windows

- Windows 10 and above
- Native installer (.exe)

## macOS

- macOS 10.15 (Catalina) and later
- Native package (.dmg)
- Supports both Apple Silicon and Intel

## Linux

### Debian/Ubuntu (Recommended)

For Debian, Ubuntu, and other Debian-based distributions.

1. Download the `.deb` file from the [download page](/download/)
2. Run the installation command:

```bash
sudo apt install ./chaterm-*.deb
```

### AppImage (Portable)

For all Linux distributions, runs without installation.

1. Download the `.AppImage` file from the [download page](/download/)
2. Grant executable permissions and run:

```bash
chmod +x chaterm-*.AppImage
./chaterm-*.AppImage
```

<Note>
  The .deb package is recommended over AppImage. It provides desktop icons, system integration, and command-line tools that AppImage does not include.
</Note>

## iOS

- iPhone and iPad
- Available on the App Store

1. Visit the [App Store](https://apps.apple.com/app/6754307456) to download Chaterm
2. Or search for "Chaterm" in the App Store app

## Android

- Android devices
- Available on Google Play

1. Visit [Google Play](https://play.google.com/store/apps/details?id=com.intsig.chaterm.global) to download Chaterm
2. Or search for "Chaterm" in the Google Play Store app

<script>
(function() {
  const URLS = {
    win: 'https://static-download.chaterm.net/chaterm-latest-setup-x64.exe',
    mac_arm: 'https://static-download.chaterm.net/chaterm-latest-macos-arm64.dmg',
    mac_x64: 'https://static-download.chaterm.net/chaterm-latest-macos-x64.dmg',
    linux_deb: 'https://static-download.chaterm.net/chaterm-latest-linux-amd64.deb',
    linux_universal: 'https://static-download.chaterm.net/chaterm-latest-linux-x86_64.AppImage',
    ios: 'https://apps.apple.com/app/6754307456',
    android: 'https://play.google.com/store/apps/details?id=com.intsig.chaterm.global',
  }

  function detectOS() {
    if (typeof window === 'undefined') return null
    
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
    if (typeof window === 'undefined') return 'arm64'
    
    if (navigator.userAgentData?.getHighEntropyValues) {
      try {
        const { architecture } = await navigator.userAgentData.getHighEntropyValues(['architecture'])
        if (architecture === 'arm') return 'arm64'
        if (architecture) return 'x64'
      } catch {}
    }

    const ua = navigator.userAgent.toLowerCase()
    if (ua.includes('arm') || ua.includes('aarch64')) return 'arm64'
    if (ua.includes('x86_64') || ua.includes('amd64') || ua.includes('intel')) return 'x64'

    return 'arm64'
  }

  async function updateSmartDownload() {
    if (typeof window === 'undefined') return
    
    const os = detectOS()
    const downloadBtn = document.getElementById('smart-download-btn')
    const downloadBtnText = document.getElementById('download-btn-text')

    if (!os) {
      if (downloadBtn) downloadBtn.style.display = 'none'
      return
    }

    let label = os
    let url = null

    if (os === 'Windows') {
      label = 'Windows'
      url = URLS.win
    } else if (os === 'macOS') {
      const arch = await detectMacArch()
      if (arch === 'x64') {
        label = 'macOS (Intel)'
        url = URLS.mac_x64
      } else {
        label = 'macOS (Apple Silicon)'
        url = URLS.mac_arm
      }
    } else if (os === 'Linux') {
      label = 'Linux'
      url = URLS.linux_deb
    } else if (os === 'iOS') {
      label = 'iOS'
      url = URLS.ios
    } else if (os === 'Android') {
      label = 'Android'
      url = URLS.android
    } else {
      // Unknown platform - redirect to download pagegit
      label = os
      url = '/download/'
    }

    if (downloadBtn && url) {
      downloadBtn.href = url
      downloadBtn.target = '_blank'
      downloadBtn.style.display = 'inline-flex'
    }
    if (downloadBtnText) {
      downloadBtnText.textContent = 'Download ' + label + ' Version'
    }
  }

  // Initialize when DOM is ready
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(updateSmartDownload, 100)
      })
    } else {
      setTimeout(updateSmartDownload, 100)
    }
  }
})()
</script>

<style>
.smart-download-container {
  text-align: left;
  margin: 1rem 0;
}

.smart-download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: #374151;
  color: #ffffff !important;
  border-radius: 6px;
  text-decoration: none !important;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.smart-download-btn:hover {
  background: #1f2937;
  color: #ffffff !important;
  transform: translateY(-1px);
}

.smart-download-btn span {
  color: #ffffff !important;
}

.download-icon {
  font-size: 1rem;
  line-height: 1;
  color: #ffffff !important;
}

@media (max-width: 768px) {
  .smart-download-btn {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
