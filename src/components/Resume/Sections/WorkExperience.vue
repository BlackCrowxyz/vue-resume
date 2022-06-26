<template>
  <!-- Work experience -->
  <section>
    <h2>Work experience</h2>
    <!-- latest job -->
    <div v-for="(job, i) in list" class="mt-3" :key="i">
      <div class="flex place-content-between items-center">
        <h3>{{ job.company }}</h3>
        <p>
          <small>
            {{ job.location }}
          </small>
        </p>
      </div>
      <div class="flex place-content-between items-center">
        <p>
          <strong> {{ job.title }} </strong>
        </p>
        <p>
          <small>
            <em> {{ job.period }} </em> · <span>{{ job.months }}</span>
          </small>
        </p>
      </div>

      <template v-for="(project, n) in job.projects" :key="n">
        <p>
          <a :href="project.link">
            {{ project.title }}
          </a>
          -
          {{ project.detail }}
        </p>
        <ul>
          <template v-for="(x, j) in project.items" :key="j">
            <li>{{ x.text }}</li>
          </template>
        </ul>
        <p class="flex flex-wrap">
          Skills:
          <template v-for="(skill, k) in project.skills" :key="k">
            <code>
              {{ skill }}
            </code>
          </template>
        </p>
      </template>
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

const list = props.items;
</script>

<style scoped>
</style>
