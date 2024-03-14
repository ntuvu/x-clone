<template>
  <div class="flex items-center text-gray-400 cursor-pointer group">
    <div
      :class="`p-2 rounded-full group-hover:bg-blue-100 group-hover:text-blue-400p dark:group-hover:bg-opacity ${defaultTransition}`"
    >
      <ChatIcon class="w-5 h-5" />
    </div>

    <span class="ml-1 group-hover:text-blue-400"> 5 </span>
  </div>
</template>

<script setup>
import { ChatIcon } from "@heroicons/vue/solid";

const { defaultTransition } = useTailwindConfig();
</script>
