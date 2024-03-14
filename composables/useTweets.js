export default () => {
  const postTweet = (formData) => {
    const form = new FormData();

    form.append("text", formData.text);

    formData.mediaFiles.forEach((mediaFile, index) => {
      form.append("media_file_" + index, mediaFile);
    });

    return useFetchApi("/api/user/tweets", {
      method: "POST",
      body: form,
    });
  };

  const getHomeTweets = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi("/api/user/tweets", {
          method: "GET",
        });

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };

  return {
    postTweet,
    getHomeTweets,
  };
};
