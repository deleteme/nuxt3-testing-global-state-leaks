<template>
  <div>Count: {{ count }}</div>
</template>
<script setup>
import { useLeakyCount } from "~/composables/useLeakyCount";
const count = useLeakyCount();
</script>

