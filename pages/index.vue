<template>
  <div>
    <iframe
      src="/JLDigitalMenu.pdf"
      frameborder="0"
      class="h-screen w-screen"
    ></iframe>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Menu | Julie's Launja",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "View Julie's Launja Menu and pick from a variety delicious food options",
        },
      ],
    };
  },
};
</script>
