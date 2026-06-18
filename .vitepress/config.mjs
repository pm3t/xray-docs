import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'X-Ray Offline System',
  description: 'Panduan Pengguna X-Ray Offline System — Technohub X-Ray Solution',
  lang: 'id-ID',
  ignoreDeadLinks: [
    /^http:\/\/localhost/,
  ],

  themeConfig: {
    logo: '/images/logo.png',

    nav: [
      { text: 'Beranda', link: '/' },
      { text: 'Panduan', link: '/guide/input-data' },
      { text: 'Pemeliharaan', link: '/maintenance' },
      { text: 'Pemecahan Masalah', link: '/troubleshooting' },
    ],

    sidebar: [
      {
        text: 'Dasar',
        items: [
          { text: 'Pendahuluan', link: '/' },
          { text: 'Persyaratan & Instalasi', link: '/getting-started' },
          { text: 'Login', link: '/login' },
        ],
      },
      {
        text: 'Panduan Fitur',
        items: [
          { text: 'Input Data Manifest', link: '/guide/input-data' },
          { text: 'Screening X-Ray', link: '/guide/screening' },
          { text: 'Riwayat Scan', link: '/guide/repository' },
          { text: 'Customs Dashboard', link: '/guide/customs-dashboard' },
          { text: 'Manajemen Pengguna', link: '/guide/user-management' },
          { text: 'Pengaturan Sistem', link: '/guide/settings' },
        ],
      },
      {
        text: 'Lainnya',
        items: [
          { text: 'Pemeliharaan Sistem', link: '/maintenance' },
          { text: 'Pemecahan Masalah', link: '/troubleshooting' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pm3t/xray-docs' },
    ],

    footer: {
      message: 'Technohub X-Ray Solution v2.4',
      copyright: 'Hak Cipta © 2026 Technohub',
    },

    search: {
      provider: 'local',
    },
  },
})
