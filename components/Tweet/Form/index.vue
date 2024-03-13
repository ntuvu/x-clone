<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>
    <div v-else>
      <TweetFormInput :user="props.user" @onSubmit="handleFormSubmit" />
    </div>
  </div>
</template>

<script setup>
const loading = ref(false);

const { postTweet } = useTweets();

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const handleFormSubmit = async (data) => {
  loading.value = true;
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
};
</script>
