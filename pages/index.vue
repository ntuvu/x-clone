<template>
  <div>
    <MainSection :loading="loading" title="Home">
      <Head>
        <Title>Home/ Twitter</Title>
      </Head>
      <div :class="twitterBorderColor" class="border-b">
        <TweetForm :user="user" />
      </div>
    </MainSection>
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig();
const loading = ref(false);

const { useAuthUser } = useAuth();
const user = useAuthUser();
</script>
