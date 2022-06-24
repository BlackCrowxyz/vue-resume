<template>
  <!-- Work experience -->
  <section>
    <h2>Work experience</h2>
    <!-- latest job -->
    <div v-for="(job, i) in list" class="mt-3" :key="i">
      <div class="flex place-content-between items-center">
        <h3>{{ job.company }}</h3>
        <p>{{ job.location }}</p>
      </div>
      <div class="flex place-content-between items-center">
        <p>
          <strong> {{ job.title }} </strong>
        </p>
        <p>
          <em> {{ job.period }} </em>
        </p>
      </div>
      <ul v-for="(x, j) in job.items" :key="j">
        <li>{{ x.text }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {
    type: Object,
    required: true
  },
})

const list = props.items
</script>

<style scoped>
</style>
