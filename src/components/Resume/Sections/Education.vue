<template>
  <!-- Skills -->
  <section>
    <h2>{{ educations.title }}</h2>

    <div v-for="(education, i) in educations.items" class="mt-3" :key="i">
      <div class="flex justify-between place-items-center">
        <h3>
          {{ education["place-name"] }}
        </h3>
        <em>{{ education["years"] }}</em>
      </div>
      <div class="flex justify-between place-items-center">
        <p>
          <strong>
            {{ education["degree"] }}
          </strong>,<em>
            {{ education["location"] }}
          </em>
        </p>
      </div>
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

const educations = props.items
</script>

<style scoped>
</style>
