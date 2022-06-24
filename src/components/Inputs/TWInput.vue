<template>
  <div class="group relative flex flex-col h-16">
    <slot name="preicon"></slot>
    <!-- TODO: when having error, consider a border -->
    <input
      v-bind="$attrs"
      :dir="dir"
      :label="label"
      :placeholder="placeholder"
      autocomplete="nope"
      maxlength="11"
      class="bg-gray-0 h-[2.22rem] w-[18rem] sm:w-80 px-3 text-center rounded-xl border border-gray-0 shadow-md focus:border focus:border-alternative-two focus:ring-alternative-two focus:outline-none focus:ring-1 block peer"
      :class="{
        'border-pink focus:border-pink focus:ring-pink': error,
      }"
      :value="modelValue"
      @input="updateValue"
      @keydown.enter="emit('enter')"
    />
    <!-- :invalid="!validation.email(modelValue)" -->
    <!-- @click="$emit('click')"
    @blur="$emit('blur')"
    @click:append="$emit('click:append')"
    
    -->

    <!-- Transition -->
    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <p
        v-if="error"
        class="flex drop-shadow-md items-end text-sm rounded-md text-pink"
      >
        <icon-error-msg />
        <span class="pr-1">
          {{ error }}
        </span>
      </p>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from "vue";
import { replaceDigits } from "@/utils/utils";

import IconErrorMsg from "../icons/IconErrorMsg.vue";

interface Props {
  modelValue?: Object | string;
  error?: Object | string | boolean | null;
  placeholder?: string | undefined;
  label?: string | null;
  dir?: string;
}

withDefaults(defineProps<Props>(), {
  modelValue: "",
  error: false,
  placeholder: undefined,
  label: null,
  dir: "auto",
});

const emit = defineEmits<{
  (event: "update:modelValue", modelValue: Object | string): void;
  (event: "enter"): void;
}>();

const updateValue = function (e: any): void {
  // let v = e.target.value;
  //   const result = String(v)
  //     .replace(/^0+/, "") // Removes zeros before number
  //     .replace(/^$/, "0") // replace spaces with 0
  //     .replace(/\D/g, "") // non-digits to ''
  //     .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
  //       return d.charCodeAt(0) - 1632;
  //     })
  //     .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
  //       return d.charCodeAt(0) - 1776;
  //     });
  //   // .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // comma seperator

  //   emit("update:modelValue", result);

  // console.log(validation.email(e.target.value));
  emit("update:modelValue", replaceDigits(e.target.value));
};
</script>

<style scoped></style>
