<template>
  <div class="w-screen h-screen" style="-webkit-overflow-scrolling: touch; overflow: auto;">
    <iframe
      scrolling="auto"
      src="/JLDigitalMenu.pdf#view=fitH"
      type='application/pdf'
      title="Julie's Launja Menu"
      class="h-full w-full"
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
          content:
            "View Julie's Launja Menu and pick from a variety delicious food options",
        },
      ],
    };
  },
};
</script>
