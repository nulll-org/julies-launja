<template>
  <div class="bg-grey-600 overflow-hidden">
    <div
      class="w-screen h-screen flex items-center justify-center"
      v-if="currentPage < pageCount"
    >
      <div class="w-16 h-16">
        <img class="object-contain" src="/loader.svg" />
      </div>
    </div>
    <div>
      <pdf
        src="/JLDigitalMenu.pdf"
        class="mb-4"
        v-for="i in 8"
        :key="i"
        :page="i"
        @num-pages="pageCount = $event"
        @page-loaded="currentPage = $event"
      ></pdf>
    </div>
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
  data() {
    return {
      pageCount: 0,
      currentPage: null,
    };
  },
  methods: {
    load(event) {
      console.log(`${event * 100}%`);
    },
    page(event) {
      console.log(event);
    },
  },
};
</script>
