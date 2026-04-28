<template>
  <div class="dh-banner">
    <div class="dh-banner-container">
      <p class="dh-banner-text">
        We are live on DevHunt: tool of the week contest
      </p>
      <a
        href="https://devhunt.org/tool/chaterm"
        target="_blank"
        rel="noopener"
        class="dh-banner-btn"
      >
        check it out
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
        >
          <path
            fill-rule="evenodd"
            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.dh-banner {
  display: flex;
  justify-content: center;
}

.dh-banner-container {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 20px;
  background: linear-gradient(to right, #f97316, #f59e0b);
  border-radius: 9999px;
}

.dh-banner-text {
  margin: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.dh-banner-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff !important;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none !important;
  transition: background 0.2s ease;
}

.dh-banner-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.dh-banner-btn svg {
  flex-shrink: 0;
}
</style>
