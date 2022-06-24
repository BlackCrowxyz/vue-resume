<template>
  <a
    class="flex items-center rounded-full bg-primary h-10 px-9 text-gray-0 text-base font-bold cursor-pointer hover:scale-110 ease-in-out duration-300"
    :class="{ 'px-5 cursor-not-allowed text-gray-200': loading }"
  >
    <slot></slot>
    <template v-if="loading">
      <IconLoading />
    </template>
  </a>
</template>

<script setup lang="ts">
import IconLoading from "../icons/IconLoading.vue";

defineProps<{
  loading?: boolean;
}>();
</script>

<style lang="scss" scoped></style>
