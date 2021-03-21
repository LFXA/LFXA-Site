import Vue from "vue";
import VueI18n from "vue-i18n";
import { menuPTBR, menuENUS } from "../i18n/menu"
import { linkPTBR, linkENUS } from "../i18n/link"
import { skillsPTBR, skillsENUS } from "../i18n/skills"
import { aboutPagePTBR, aboutPageENUS } from "../i18n/about"
import { homePagePTBR, homePageENUS } from "../i18n/home"
Vue.use(VueI18n);

const messages = {
    "en-us": {
        link: linkENUS,
        menu: menuENUS,
        skills: skillsENUS,
        footerMsg1: "Developed in São Paulo-SP, Brazil by ",
        footerMsg2: "using",
        footerMsg3: "and",
        about: aboutPageENUS,
        home: homePageENUS
    },

    "pt-br": {
        link: linkPTBR,
        menu: menuPTBR,
        skills: skillsPTBR,
        footerMsg1: "Desenvolvido em São Paulo-SP, Brasil por ",
        footerMsg2: "usando",
        footerMsg3: "e",
        about: aboutPagePTBR,
        home: homePagePTBR
    },
};

export const i18n = new VueI18n({
    locale: "pt-br",
    fallbackLocale: ["en-us"],
    messages
});

