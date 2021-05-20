<template>
  <div :class="theme">
    <a class="visually-hidden" href="#main">Skip to content</a>

    <div
      id="wrapper"
      class="wrapper content-wrapper md:pb-0 flex flex-col relative min-h-screen bg-background-primary text-copy-primary"
    >
      <HeaderPartial>
        <li class="level-1 mb-4 md:mr-4 md:mb-0" @click.prevent="changeTheme()">
          <font-awesome-icon
            v-if="theme == 'theme-light'"
            :icon="['fas', 'moon']"
            class="inline-flex hover:text-blue-500"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'sun']"
            class="inline-flex hover:text-blue-500"
          />
        </li>
      </HeaderPartial>

      <main id="main" class="main flex flex-1 flex-col mt-32 py-10 lg:py-20">
        <slot />
      </main>

      <FooterPartial />
    </div>

    <ClientOnly>
      <ResponsiveNav>
        <li
          class="block py-2 px-5 text-white text-3xl"
          @click.prevent="changeTheme()"
        >
          <font-awesome-icon
            v-if="theme == 'theme-light'"
            :icon="['fas', 'moon']"
            class="inline-flex hover:text-copy-nav-item"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'sun']"
            class="inline-flex hover:text-copy-nav-item"
          />
        </li>
      </ResponsiveNav>
    </ClientOnly>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from "~/layouts/partials/Header.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";
import ResponsiveNav from "~/layouts/partials/ResponsiveNav.vue";

export default {
  data() {
    return {
      theme: "theme-light",
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "theme-light";
  },
  components: {
    HeaderPartial,
    FooterPartial,
    ResponsiveNav,
  },
  methods: {
    changeTheme() {
      this.theme = this.theme == "theme-light" ? "theme-dark" : "theme-light";
      localStorage.setItem("theme", this.theme);
    },
  },
};
</script>