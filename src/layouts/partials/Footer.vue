<template>
  <div class="footer-wrapper">
    <footer
      id="footer"
      class="footer content-wrapper  bg-background-secondary"
      role="contentinfo"
    >
      <div
        class="footer-inner container m-auto md:flex mb-12 md:mb-0  justify-between items-center   px-6 py-10"
      >
        <p class="text-white pb-8 md:pb-0">
          {{ $t("footerMsg1") }}
          <span class="italic font-semibold">Lucas Felix Aquino,</span>
          {{ $t("footerMsg2") }}
          <a href="https://www.gridsome.org" target="_blank">Gridsome </a>
          {{ $t("footerMsg3") }}
          <a href="https://tailwindcss.com/" target="_blank">TailwindCSS. </a>
        </p>

        <ul class="flex justify-center">
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