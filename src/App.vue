<template>
  <div class="p-6 sm:p-12 max-w-4xl mx-auto bg-gray-50 print:bg-white">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import("./index.css"); // change it dynamically after defining another theme for resume
</script>

<style>
</style>
