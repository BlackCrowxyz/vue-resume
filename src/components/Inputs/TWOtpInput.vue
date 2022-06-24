<template>
  <div class="flex flex-col h-16">
    <div
      @click="focus()"
      class="bg-gray-0 flex items-center place-content-center w-[18rem] sm:w-80 rounded-xl shadow-md textfield-like"
      :class="{ 'border-pink border': error }"
    >
      <div dir="auto" class="flex relative">
        <input
          v-bind="$attrs"
          id="input-otp"
          ref="otp"
          maxlength="1"
          class="hidden-input"
          inputmode="numeric"
          autocomplete="one-time-code"
          :style="refs.style"
          v-model="refs.value"
          @keyup="onKeyup"
          @paste="onPaste"
        />

        <template v-for="i in 6" :key="i">
          <div
            class="digit"
            :class="{ fill: refs.digits[i - 1], invalid: refs.isInvalid }"
          >
            {{ refs.digits[i - 1] || "" }}
          </div>
        </template>
      </div>
    </div>
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

<script setup lang="ts">
import { replaceDigits, validation } from "@/utils/utils";
import { ref } from "vue";
import IconErrorMsg from "../icons/IconErrorMsg.vue";

defineProps<{ error?: string | boolean }>();

const otp = ref(null);
const refs = ref({
  // digits: [1, 2, 3, 4, 5, 6],
  digits: [],
  style: { width: "32px", top: 0, bottom: 0, left: 0, opacity: 1 },
  left: 0,
  isInvalid: false,
  v: "",
});

//   watch: {
//     digits() {
//       refs.value.$emit("digits", refs.value.digits.join(""));
//     },
//   },
const emit = defineEmits(["update:modelValue"]);

function onKeyup(event) {
  if (refs.value.isInvalid) refs.value.isInvalid = false;
  let key = event.key;
  if (key == "Backspace") {
    refs.value.digits.pop();
  } else {
    if (refs.value.digits.length >= 6) {
      refs.value.v = "";
      event.preventDefault();
      return;
    }
    // var val = refs.value.$refs.otp.value;
    var val = otp.value.value;
    var d = "";
    if (val.length != 0) d = val[val.length - 1];

    if (
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
        replaceDigits(d)
      ) &&
      refs.value.digits.length <= 6
    ) {
      refs.value.digits.push(replaceDigits(d));
    }
    refs.value.value = "";
  }
  refs.value.left =
    (refs.value.digits.length >= 6 ? 5 : refs.value.digits.length) * 40;
  refs.value.style.left = refs.value.left + "px";

  emit("update:modelValue", refs.value.digits.join(""));
}
function onPaste(event) {
  if (refs.value.isInvalid) refs.value.focusAfterInvalidCode();
  let paste = (event.clipboardData || window.clipboardData).getData("text");
  if (/^\d+$/.test(replaceDigits(paste))) {
    paste = paste.length > 6 ? paste.slice(0, 6) : paste;
    refs.value.v = "";
    refs.value.digits = [...paste];
    // refs.value.digits.push(paste)
    refs.value.left =
      (refs.value.digits.length >= 6 ? 5 : refs.value.digits.length) * 40;
    refs.value.style.left = refs.value.left + "px";
  }
  event.preventDefault();
  return;
}
function focus() {
  if (refs.value.isInvalid) refs.value.focusAfterInvalidCode();
  //   refs.value.$refs.otp.focus();
  otp.value.focus();
  // otp.value.value.focus();
}
//TODO: implement invalid color
function focusAfterInvalidCode() {
  refs.value.isInvalid = false;
  refs.value.digits = [];
  refs.value.left = 0;
  refs.value.style.left = 0;
}
</script>

<style scoped>
.error-input {
  border: 2px solid #f4cf65;
}
.textfield-like {
  background: #ffffff;
  height: 2.22rem;
  /* box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1); */
  /* border-radius: 12px; */
}
.hidden-input {
  color: hsl(0, 0%, 25%);
  border: none;
  height: 24px;
  outline: none;
  z-index: 1;
  position: absolute;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 0;
  background-color: transparent;
}
input#input-otp:focus {
  border-bottom: 1px solid;
  border-bottom: none;
}

.digit {
  color: hsl(0, 0%, 25%);
  width: 32px;
  height: 24px;
  display: flex;
  position: relative;
  font-size: 20px;
  align-items: center;
  font-weight: bold;
  margin-right: 8px;
  justify-content: center;
  border-bottom-color: #455a64;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.focused,
.fill {
  border-bottom-color: hsl(0, 0%, 25%);
}

.invalid {
  color: #f4cf65 !important;
  border-bottom-color: #f4cf65 !important;
}
</style>
