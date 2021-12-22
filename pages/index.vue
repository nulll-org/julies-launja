<template>
  <div class="bg-grey-600">
    <pdf
      src="/JLDigitalMenu.pdf"
      class="mb-4"
      v-for="i in 8"
      :key="i"
      :page="i"
    ></pdf>
  </div>
</template>

<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf,
  },
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
