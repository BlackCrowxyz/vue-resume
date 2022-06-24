<template>
  <h1>
    {{ name }}
  </h1>

  <article>
    <WorkExperience :items="jobs" />

    <Skills :items="skills" />

    <Education :items="education" />

  </article>


  <hr>

  <footer class="flex-column  md:flex justify-between place-items-center">
    <!-- {{ contact }} -->
    <p class="max-w-xs" v-for="contact, i in contacts" :key="i">
      {{ contact.title }}: <a :href="`${contact.to}${contact.href}`">{{ contact.text }}</a>
    </p>

  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

import data from "@/utils/info.json";

import WorkExperience from "@/components/Resume/Sections/WorkExperience.vue";
import Skills from "../components/Resume/Sections/Skills.vue";
import Education from "../components/Resume/Sections/Education.vue";


const json = ref(data);

const name = json.value['name']
const jobs = json.value['work-experiences']
const skills = json.value['skills']
const education = json.value['education']
const contacts = json.value['contacts']

</script>

<style scoped>
</style>
