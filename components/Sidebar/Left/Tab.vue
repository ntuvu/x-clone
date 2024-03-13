<template>
  <nuxt-link
    to="#"
    class="text-black flex items-center p-3 w-min hover:bg-gray-200 rounded-full dark:hover:bg-dim-200 dark:text-white"
    :class="defaultTransition"
  >
    <div class="w-6 h-6 text-dark" :class="defaultTransition">
      <slot name="icon"></slot>
    </div>
    <div class="hidden ml-4 text-xl xl:block" :class="textClasses">
      <slot name="name"></slot>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const { defaultTransition } = useTailwindConfig();

const textClasses = computed(() => {
  return props.active ? "font-semibold" : "font-normal";
});
</script>
