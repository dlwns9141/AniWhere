<template>
  <v-footer
    id="core-footer"
    absolute
    height="82"
  >
    <div class="footer-items">
      <span
        v-for="link in links"
        :key="link.name"
      >
        <a
          :href="link.Link"
          class="tertiary--text footer-links">{{ link.name }}</a>
      </span>
    </div>
    <v-spacer/>
    <span class="font-weight-light copyright">
      {{ (new Date()).getFullYear() }}
      <a
        href="https://github.com/dlwns9141/AniWhere"
        target="_blank">AniWhere</a> GitHub

    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: '노예1', Link: 'https://github.com/Padack2' },
      { name: '노예2', Link: 'https://github.com/malqoa' },
      { name: '노예3', Link: 'https://github.com/dlwns9141' },
      { name: '노예4', Link: 'https://github.com/crea9813' }
    ]
  })
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
