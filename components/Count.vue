<template>
  <div>Count: {{ count }}</div>
  <p>
    Requests to this page will increase a <code>count</code> variable.
    This is a reproduction of how you can share or leak state across requests.
    Open the browser console, <a :href="route.fullPath">reload</a>, and view the original response to this html page.
  </p>
</template>
<script setup>
import { useLeakyCount } from "~/composables/useLeakyCount";
const count = useLeakyCount();
const route = useRoute();
</script>

