<template>
  <li class="level-1 mb-4 md:mr-4 md:mb-0">
    <select
      @change="changeLocale()"
      v-model="idiom"
      class="content-wrapper"
      :class="classText"
    >
      <option
        v-for="element in $static.metadata.idioms"
        :key="element.title"
        :value="element.language"
        :selected="verifySelected(element)"
      >
        {{ $t(element.title) }}
      </option>
    </select>
  </li>
</template>

<script>
import { linkPTBR, linkENUS } from "../../i18n/link";
export default {
  name: "idiom-select",
  data() {
    return {
      idiom: null,
    };
  },
  props: {
    classText: String,
  },
  methods: {
    changeLocale() {
      document.documentElement.lang = this.idiom;
      let link = this.findPath(this.$i18n.messages[this.$i18n.locale].link);
      this.$i18n.locale = this.idiom;
      this.$router.push(this.$t("link." + link));
    },
    verifySelected(element) {
      let routerSplit = this.$router.history.current.path.split("/");
      if (this.$i18n.fallbackLocale.includes(routerSplit[1])) {
        this.idiom = routerSplit[1];
        document.documentElement.lang = routerSplit[1];
        this.$i18n.locale = routerSplit[1];
      } else if (this.$i18n.locale == element.language) {
        this.idiom = element.language;
        document.documentElement.lang = element.language;
      }
    },
    findPath(linkObservable) {
      let jsonLinkString = JSON.stringify(linkObservable);
      let jsonLink = JSON.parse(jsonLinkString);
      let routerSplit = this.$router.history.current.path.split("/");
      let currentPath = routerSplit[routerSplit.length - 1];
      let regex = new RegExp("/" + currentPath + "(?![^ ])");

      return Object.keys(jsonLink).find((key) => jsonLink[key].match(regex));
    },
  },
};
</script>
<static-query>
query {
  metadata {   
    idioms {
        language
        title
    }
    }
}
</static-query>