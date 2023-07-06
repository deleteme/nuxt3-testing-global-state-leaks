<template>
  <div>
    <Count />
    <p>
      Requests to this page will increase a <code>count</code> variable.
      This is a reproduction of how you can share or leak state across requests.
      Open the browser console, <a :href="route.fullPath">reload</a>, and view the original response to this html page.
    </p>
    <p>Source: <a href="https://github.com/deleteme/nuxt3-testing-global-state-leaks">https://github.com/deleteme/nuxt3-testing-global-state-leaks</a></p>
  </div>
</template>
<script setup>
const route = useRoute();
</script>

