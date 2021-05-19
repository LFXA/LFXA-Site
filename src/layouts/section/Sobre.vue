<template>
  <section id="container-centre" class="column inner container-inner">
    <h2 class="page-title">{{ $t("about.title") }}</h2>
    <div class="md:flex py-8">
      <img
        class="w-48 h-48 mb-8 rounded-full mx-auto"
        src="../../assets/perfil_lfxa.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div
        class="lg:text-justify text-left text-2xl leading-snug md:pl-12 text-copy-secondary"
      >
        <p>
          {{ $t("about.text1") }}
          <span class="italic font-extrabold">Lucas Felix Aquino</span>,
          {{ $t("about.text2") }} {{ calculaIdade(idade) }}
          {{ $t("about.text3") }} <g-link :to="$t('about.link')">{{ $t("about.textLink") }}</g-link>
        </p>
        <p class="font-extrabold">
          <br />
          {{ $t("about.text4") }}
        </p>
        <p><br />{{ $t("about.text5") }}</p>
      </div>
    </div>
    <div class="mt-12">
      <ul class="grid md:grid-cols-2 grid-cols-1 gap-6">
        <li v-for="element in skills.skills" :key="element.name">
          {{ element.name }}
          <br />
          <div class="shell inline-flex">
            <div
              class="bar"
              :style="{
                width: element.percent,
                background: element.background,
              }"
            >
              <span :class="element.textColor">{{ element.percent }}</span>
            </div>
          </div>
          <a
            v-for="elementLink in element.links"
            :key="elementLink.link"
            :href="elementLink.link"
            class="inline-flex text-gray-500 hover:text-yellow-500 ml-3"
            :aria-label="elementLink.icon"
            target="_blank"
            :content="$t(elementLink.tooltip)"
            v-tippy
          >
            <font-awesome-icon :icon="['fas', elementLink.icon]" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import skills from "../../../settings/skills.json";
export default {
  name: "sobre",
  data() {
    return {
      idade: new Date(1998, 6, 7, 11, 10),
      skills,
    };
  },
  methods: {
    calculaIdade(dataNasc) {
      let dataAtual = new Date();
      let anoAtual = dataAtual.getFullYear();
      let diaNasc = dataNasc.getDate();
      let mesNasc = dataNasc.getMonth() + 1;
      let anoNasc = dataNasc.getFullYear();
      let idade = anoAtual - anoNasc;
      let mesAtual = dataAtual.getMonth() + 1;

      if (mesAtual < mesNasc) {
        idade--;
      } else {
        if (mesAtual == mesNasc) {
          if (new Date().getDate() < diaNasc) {
            idade--;
          }
        }
      }
      return idade;
    },
  },
};
</script>
<style>
</style>