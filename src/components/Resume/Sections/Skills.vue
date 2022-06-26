<template>
  <!-- Skills -->
  <section>
    <h2>{{ skills.title }}</h2>

    <div v-for="(skill, i) in skills.items" class="mt-3" :key="i">
      <p class="flex flex-wrap">
        {{ skill.title }}:
        <code v-for="(item, j) in skill.items" :key="j">
          {{ item.skill }}
        </code>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});

const skills = props.items;
</script>

<style scoped>
</style>
