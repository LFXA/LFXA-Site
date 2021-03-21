<template>
  <div class="footer-wrapper">
    <footer
      id="footer"
      class="footer content-wrapper items-center p-8 mb-10 md:mb-0 sm:flex-col bg-background-secondary"
      role="contentinfo"
    >
      <div
        class="footer-inner container mx-auto flex sm:space-y-6 justify-between flex-col lg:flex-row items-center py-8"
      >
        <p class="text-white mb-6 lg:mb-0">
          {{ $t("footerMsg1") }}
          <span class="italic font-semibold">Lucas Felix Aquino,</span>
          {{ $t("footerMsg2") }}
          <a href="https://www.gridsome.org" target="_blank">Gridsome </a>
          {{ $t("footerMsg3") }}
          <a href="https://tailwindcss.com/" target="_blank">TailwindCSS. </a>
        </p>

        <ul class="flex items-center space-x-8">
          <li
            class="mr-4"
            v-for="element in $static.metadata.social"
            :key="element.link"
          >
            <a
              :href="element.link"
              class="block text-white hover:text-blue-900"
              :aria-label="element.icon"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', element.icon]" size="lg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<static-query>
query {
  metadata {
    social {
      icon
      link
    }
  }
}
</static-query>