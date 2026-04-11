---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Chaterm - Open source AI native terminal and SRE Copilot
pageClass: custom-home-page

hero:
  name: Open source AI native terminal and SRE Copilot
  text:
  tagline: Get years of SRE experience in minutes
  # image:
  #   src: /static/logo.png
  #   alt: Chaterm
  actions:
    - theme: brand
      text: Download
      link: /download/
    - theme: alt
      text: View on GitHub
      link: https://github.com/chaterm/Chaterm
---

<style>

  .VPHero .container {
    text-align: center;
  }

  .VPHero .text,
  .VPHero .tagline {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .VPHero .name {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(45deg, #000000 0%, #4070FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    max-width: 800px !important;
  }

  .dark .VPHero .name {
    background: linear-gradient(45deg, #FFFFFF 0%, #91B4FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .VPHero .actions {
    justify-content: center;
  }

  .action .brand {
    background: linear-gradient(90deg, #91B4FF 0%, #4070FF 100%);
    border: none;
  }

  .img-dark { display: none; border-radius: 1rem;}
  .img-light { border-radius: 1rem; }

  .dark .img-light { display: none; }
  .dark .img-dark  { display: block; }


  /* Global Layout */
  .container {
    max-width: 1280px;
    box-sizing: border-box;
  }

  /* Grid Layouts */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }
  /* Feature Cards */
  .feature-card {
    transition: all 0.3s ease;
    height: 100%;
    text-align: center;
  }

  .feature-card h3 {
      margin-top: 1rem
  }

  .feature-card img {
      width: 100%;
      height: auto;
  }

  .safe-card {
    background: linear-gradient(90deg, #FEF8FE 0%, #FAF0FF 100%);;
    border-radius: 16px;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 1.5rem;
    height: 100%;
    box-sizing: border-box;
  }

  .dark .safe-card {
    background: #0A0F28;
  }

  .safe-card-content {
    flex: 1;
    text-align: left;
    height:100%;
  }

  .safe-card h3 {
    margin: 0 0 0.8rem 0;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .safe-card p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--vp-c-text-2);
    line-height: 1.6;
  }

  .safe-card-icon-box {
    flex-shrink: 0;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .safe-card-icon-box img {
    width: 60px;
    height: 60px;
    opacity: 0.9;
    color: #DCB4FF;
  }

  .text-description {
    color: var(--vp-c-text-2);
    font-size: 0.9rem;
  }

  .card-icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: var(--vp-c-bg);
    width: 64px;
    height: 64px;
    line-height: 64px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }

  /* Section Styles */
  .section-title {
    border-top: 0 !important;
    padding: 0.2em 0;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin: 4rem 0 1rem;
    color: #FFFFFF;
    line-height: 60px;
    background: linear-gradient(45deg, #000000 0%, #4070FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .dark .section-title {
    background: linear-gradient(45deg, #FFFFFF 0%, #91B4FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section-desc {
    text-align: center;
    color: var(--vp-c-text-2);
    font-size: 1.1rem;
    margin: 0 auto 3rem;
  }

  /* Agent Section */
  .agent-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin: 6rem 0;
  }
  .agent-content h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  .agent-content p {
    font-size: 1.1rem;
    color: var(--vp-c-text-2);
    margin-bottom: 2rem;
  }
  .agent-media {
    border-radius: 12px;
    overflow: hidden;
  }

  .agent-media video {
    width: 100%;
    height: auto;
    display: block;
  }

  .env-badges {
    position: relative;
    left: 50%;
    /* bottom: 14px; */
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 12px;
    z-index: 3;
    margin-bottom: 3rem;
  }
  .env-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 12px;
    line-height: 1;
    color: rgba(255, 255, 255, 0.92) !important;
    background: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    text-decoration: none !important;
  }
  .env-badge svg {
    width: 16px;
    height: 16px;
    display: block;
    opacity: 0.95;
    flex: 0 0 auto;
  }

  @media (max-width: 768px) {
    .agent-video::after { height: 64px; }
    .env-badges { gap: 8px; }
    .env-badge { padding: 4px 10px; font-size: 11px; }
    .agent-section {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
      margin: 3rem 0;
    }
  }

  /* Pricing Cards */
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 3rem auto;
  }

  @media (max-width: 960px) {
    .pricing-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  /* Pricing Card Base Styles (Light Mode Default) */
  .pricing-card {
    background: #F8FAFC;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.3s ease;
    box-sizing: border-box;
    color: var(--vp-c-text-1, #1e293b);
  }

  /* Dark Mode Styles */
  .dark .pricing-card {
    background: #0B1221;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
  }

  .pricing-card:hover {
    border-color: #3b82f6;
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    background: linear-gradient(90deg, #F5FAFF 0%, #E1EBFF 100%);
  }
  .dark .pricing-card:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
    background: linear-gradient(90deg, #191E5A 0%, #091128 100%);
  }

  .pricing-title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #3B82F6; 
  }

  .dark .pricing-title {
    color: #91B4FF;
  }

  .pricing-price {
    font-size: 1.3em;
    font-weight: 600;
    margin: 0.5rem 0;
    display: flex;
    align-items: baseline;
    color: var(--vp-c-text-1, #0f172a);
    line-height: 1.2;
  }
  .dark .pricing-price {
    color: #fff;
  }

  .pricing-price span {
    font-size: 1rem;
    font-weight: 400;
    color: var(--vp-c-text-3, #94A3B8);
    margin-left: 6px;
  }
  
  .pricing-subtext {
    font-size: 0.875rem;
    color: var(--vp-c-text-3, #94A3B8);
    margin-bottom: 1.5rem;
    height: 1.25rem;
  }

  .pricing-desc {
    color: var(--vp-c-text-2, #475569);
    margin-bottom: 2rem;
    font-size: 0.95rem;
    line-height: 1.6;
    min-height: 3rem;
  }
  .dark .pricing-desc {
    color: #94A3B8;
  }

  .price-btn {
    display: block;
    text-align: center;
    padding: 0.85rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    text-decoration: none !important;
    transition: all 0.3s ease;
    margin-bottom: 2rem;
    font-size: 1rem;
    cursor: pointer;
    color: #FFFFFF !important;

  }

  .dart .price-btn{
    font-weight: 600;
    font-size: 18px;
  }
  .btn-outline {
    display: block;
    text-align: center;
    padding: 0.85rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    text-decoration: none !important;
    transition: all 0.3s ease;
    margin-bottom: 2rem;
    margin-top: 2rem;
    font-size: 1rem;
    cursor: pointer;
    background: transparent;
    border: 1px solid #96B8FF;
    color: #000;
  }

  .dark .btn-outline {
    background: rgba(255, 255, 255, 0.1);
    color: #fff !important;
  }

  .btn-primary {
    background: linear-gradient(90deg, #91B4FF 0%, #4070FF 100%);
    border: none;
    color: #fff;
    margin-top: 2rem;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  
  /* Gradient Hover Effect */
  .btn-primary::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(90deg, #91B4FF 0%, ##4070FF 100%);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  .btn-primary:hover::before {
    opacity: 1;
  }
  .btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }


  .pricing-features {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
  }

  .pricing-features li {
    margin-bottom: 0.85rem;
    display: flex;
    align-items: flex-start;
    color: var(--vp-c-text-2, #475569);
    font-size: 0.95rem;
    line-height: 1.5;
  }
  .dark .pricing-features li {
    color: #CBD5E1;
  }

  .pricing-features li::before {
    content: "✓";
    color: #3B82F6;
    margin-right: 12px;
    font-weight: bold;
    flex-shrink: 0;
  }

  /* ============ Mobile Responsive Enhancements ============ */
  @media (max-width: 1024px) {
    /* .container { padding: 0 20px; } */
    .section-title { font-size: 2.1rem; margin: 3rem 0 0.8rem; }
  }

  @media (max-width: 768px) {
    .container { padding: 0 }

    .section-title {
      font-size: 1.85rem;
      margin: 2.5rem 0 0.6rem;
      line-height: 1.2;
    }
    .section-desc {
      font-size: 1rem;
      margin: 0 auto 2rem;
      padding: 0 6px;
    }

    .card-grid {
      gap: 1.2rem;
      margin: 1.5rem 0;
    }

    /* 终端示例：避免长命令撑爆 */
    .agent-media > div {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* .feature-card {
      padding: 1.4rem;
      border-radius: 12px;
    } */
    .card-icon {
      width: 56px;
      height: 56px;
      line-height: 56px;
      font-size: 2rem;
      margin-bottom: 1rem;
    }


    .agent-content h2 { font-size: 1.7rem; border-top: 0;}
    .agent-content p {
      font-size: 1rem;
      margin-bottom: 1.2rem;
    }

    .pricing-card {
      padding: 1.6rem;
      border-radius: 14px;
    }
    .pricing-desc {
      margin-bottom: 1.2rem;
      font-size: 0.98rem;
      line-height: 1.6;
    }
    .pricing-features li {
      font-size: 0.98rem;
      line-height: 1.5;
    }
    .price-btn { padding: 0.9rem 1rem; }

    .pricing-card:hover .price-btn { transform: none; }

    /* ============ ✅ Pricing Mobile Horizontal Swipe (1 card per view) ============ */
    .pricing-grid {
      display: flex;
      flex-wrap: nowrap;
      gap: 14px;

      overflow-x: auto;
      -webkit-overflow-scrolling: touch;

      scroll-snap-type: x mandatory;

      padding: 4px 16px 12px;
      margin: 1.5rem -16px 2rem;

      scrollbar-width: none; /* Firefox */
    }
    .pricing-grid::-webkit-scrollbar { display: none; } /* Chrome/Safari */

    .pricing-card {
      flex: 0 0 calc(100% - 8px);
      scroll-snap-align: start;
    }
  }

  @media (max-width: 360px) {
    .section-title { font-size: 1.65rem; }
    .agent-content h2 { font-size: 1.55rem; border-top: 0; }
  }
</style>

<!-- Video / Agent Section -->
<div class="container">
  <br>
  <center>
    <div class="agent-media ">
      <div class="env-badges" aria-hidden="true">
        <a class="env-badge"  href="/download/" >
          <img src="/images/macOS.svg">
          <span>macOS</span>
        </a>
        <a class="env-badge"  href="/download/" >
           <img src="/images/windows.svg">
          <span>Windows</span>
        </a>
        <a class="env-badge"  href="/download/" >
           <img src="/images/linux.svg">
          <span>Linux</span>
        </a>
        <a class="env-badge"  href="https://apps.apple.com/us/app/chaterm/id6754307456" >
           <img src="/images/apple.svg">
          <span>iOS</span>
        </a>
        <a class="env-badge"  href="https://play.google.com/store/apps/details?id=com.intsig.chaterm.global" >
           <img src="/images/android.svg">
          <span>Android</span>
        </a>
      </div>
      <!-- <video
        class="rounded-xl"
        controls
        preload="metadata"
        playsinline
      >
        <source src="/static/demo.mp4" type="video/mp4" />
      </video> -->
      <img class="img-light" src="/images/hero-dark.webp" alt="Global Syntax Highlight" >
      <img class="img-dark" src="/images/hero-dark.webp" alt="Global Syntax Highlight" >
    </div>
  </center>

  <FeatureTabs />

</div>

<!-- Efficiency Section -->
<h2 class="section-title">The Efficiency of Terminal</h2>
<div class="container">
  <div class="card-grid">
    <div class="feature-card">
      <img class="img-light" src="/images/highlight-light.webp" alt="Global Syntax Highlight" >
      <img class="img-dark"  src="/images/highlight-dark.webp" alt="Global Syntax Highlight" >
      <h3>Global Syntax Highlight</h3>
      <p class="text-description">Personalization syntax highlighting on no matter whatever shell you use</p>
    </div>
    <div class="feature-card">
        <img class="img-light" src="/images/vim-light.webp" alt="Visual Vim Editor" >
        <img class="img-dark rounded-xl" src="/images/vim-dark.webp" alt="Visual Vim Editor" >
      <h3>Visual Vim Editor</h3>
      <p class="text-description">Get visual text editor experience in terminal Vim like Sublime Text</p>
    </div>
    <div class="feature-card">
        <img class="img-light" src="/images/zero-trust-light-en.webp" alt="Zero Trust" >
        <img class="img-dark" src="/images/zero-trust-dark-en.webp" alt="Zero Trust" >
      <h3>Zero Trust</h3>
      <p class="text-description">Support enterprise-grade zero trust security authentication and enable session-level seamless security verification</p>
    </div>
  </div>
</div>

<div class="container">
  <div class="card-grid">
    <div class="feature-card">
        <img class="img-light"  src="/images/shortcut-command-light.webp" alt="Shortcut Commands/Aliases" >
        <img class="img-dark" src="/images/shortcut-command-dark.webp" alt="Shortcut Commands/Aliases" >
      <h3>Shortcut Commands/Aliases</h3>
      <p class="text-description">Configure global shortcut commands or aliases to streamline complex commands and batch processing tasks</p>
    </div>
    <div class="feature-card">
        <img class="img-light" src="/images/sso-light.webp" alt="Unified Authorization Management" >
        <img class="img-dark" src="/images/sso-dark.webp" alt="Unified Authorization Management" >
      <h3>Unified Authorization Management</h3>
      <p class="text-description">Manage digital assets across different enterprise organizations via workspace with enterprise unified SSO accounts</p>
    </div>
    <div class="feature-card">
        <img class="img-light" src="/images/mcp-light.webp" alt="MCP Protocol Support" >
        <img class="img-dark" src="/images/mcp-dark.webp" alt="MCP Protocol Support" >
      <h3>MCP Protocol Support</h3>
      <p class="text-description">Low-cost integration with enterprise knowledge bases and tools such as Notion and Github to enable skill and knowledge expansion</p>
    </div>
  </div>
</div>

<!-- Enterprise Security -->
<h2 class="section-title">Enterprise-Grade Security</h2>
<p class="section-desc">We are committed to protecting your data with comprehensive security solutions</p>
<div class="container">
  <div class="card-grid">
    <div class="safe-card">
      <div class="safe-card-content">
        <h3>Data Encryption</h3>
        <p>End-to-end encryption for all data transfers and storage</p>
      </div>
      <div class="safe-card-icon-box">
        <img class="img-light" src="/images/lock-fill-light.svg" alt="Data Encryption">
        <img class="img-dark" src="/images/lock-fill-dark.svg" alt="Data Encryption">
      </div>
    </div>
    
  <div class="safe-card">
      <div class="safe-card-content">
        <h3>Access Control</h3>
        <p>Granular permission management and role-based access</p>
      </div>
      <div class="safe-card-icon-box">
        <img class="img-light" src="/images/permission-management-light.svg" alt="Access Control">
        <img class="img-dark" src="/images/permission-access-dark.svg" alt="Access Control">
      </div>
    </div>
    
  <div class="safe-card">
      <div class="safe-card-content">
        <h3>Security Audit</h3>
        <p>Comprehensive logging and monitoring system</p>
      </div>
      <div class="safe-card-icon-box">
        <img class="img-light" src="/images/security-monitor-light.svg" alt="Security Audit">
        <img class="img-dark" src="/images/security-monitor-dark.svg" alt="Security Audit">
      </div>
    </div>
  </div>
</div>

<h2 class="section-title">Plans that scale with your usage</h2>
<div class="container">
  <PricingToggle />
</div>
