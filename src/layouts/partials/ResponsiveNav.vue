<template>
  <div>
    <nav
      id="mobile-nav"
      class="mobile-nav content-wrapper fixed left-0 top-0 h-screen container  flex  justify-between px-4 pt-12 bg-background-nav-menu z-50 md:hidden"
      :class="toggleNav ? 'menu-visible' : ''"
    >
      <ul>
        <li class="mb-6 md:mb-0">
          <search-input />
        </li>
        <li
          class="level-1 mb-4 md:mr-4 md:mb-0"
          v-for="element in $static.metadata.menu"
          :key="element.name"
        >
          <g-link
            :to="$t(element.link)"
            class="link block py-2 px-5 text-white text-3xl hover:text-copy-nav-item"
            active-class="is-active-link "
            exact-active-class="active text-copy-nav-item"
            >{{ $t(element.text) }}</g-link
          >
        </li>
        <idiom-select
          classText="block py-2 px-5 text-white text-3xl bg-background-nav-menu"
        ></idiom-select>

        <slot></slot>
      </ul>
    </nav>

    <button
      id="mobile-nav-toggle"
      class="mobile-nav-toggle content-wrapper block fixed h-16 w-full bottom-0 flex items-center justify-center font-bold border-none bg-background-nav-menu text-white z-50 focus:outline-none md:hidden"
      :class="toggleNav ? 'menu-toggle-active' : ''"
      aria-expanded="false"
      aria-controls="mobile-nav"
      @click="toggle"
    >
      <span class="mobile-nav-label mr-2 font-medium">Menu</span>

      <span class="mobile-nav-icon" aria-hidden="true">
        <span
          class="mobile-nav-icon-line bg-white w-6 block transition mb-1"
        ></span>
        <span
          class="mobile-nav-icon-line bg-white w-6 block transition mb-1"
        ></span>
        <span class="mobile-nav-icon-line bg-white w-6 block transition"></span>
      </span>
    </button>
  </div>
</template>

<static-query>
query {
  metadata {
    menu {
      name
      link
      text
    }
  }
}
</static-query>

<script>
import SearchInput from "../partials/SearchInput";
import IdiomSelect from "../partials/IdiomSelect";
export default {
  data() {
    return {
      toggleNav: false,
      idiom: null,
    };
  },
  components: {
    IdiomSelect,
    SearchInput,
  },
  methods: {
    toggle() {
      this.toggleNav = !this.toggleNav;
    },
  },
};
</script>