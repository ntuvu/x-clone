<template>
  <div class="ml-16">
    <TweetItemHeader :tweet="props.tweet" />
    <div class="flex-shrink font-medium text-gray-800 w-auto dark:text-white">
      <p class="ml-16">{{ props.tweet.text }}</p>
      <div
        v-for="image in tweet.mediaFile"
        :key="image.id"
        :class="twitterBorderColor"
        class="flex my-3 mr-2 border-2 rounded-2xl"
      >
        <img :alt="image.id" :src="image.url" class="w-full rounded-2xl" />
      </div>

      <div class="mt-2 @apply w-fit">
        <TweetItemAction />
      </div>
    </div>
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig();

const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
});
</script>
