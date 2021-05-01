<template>
  <section id="container-centre" class="column inner centre flex-1">
    <h1 class="page-title">Bem vindo!</h1>
    <div class="content">
      <p>MEU SITE</p>
    </div>
    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-primary p-1 content-wrapper rounded-lg">
        <section
          id="container-centre"
          class="container-inner mx-auto text-xl pb-4"
        >
          <h1 class="page-title">{{ $t("home.titleContact") }}</h1>
          <div class="content">
            <p>{{ $t("home.subContact") }}</p>
            <form class="form">
              <div class="flex flex-wrap mb-6 -mx-4">
                <div class="row required w-full md:w-1/3 mb-6 md:mb-0 px-4" >
                  <label for="name" :data-after="$t('home.formRequired')">{{ $t("home.inputName") }}</label>
                  <input
                    class="input bg-background-form"
                    id="name"
                    type="text"
                    name="name"
                    autocomplete="name"
                    required
                    aria-required="true"
                  />
                </div>
                <div class="row required w-full md:w-1/3 mb-6 md:mb-0 px-4">
                  <label for="email" :data-after="$t('home.formRequired')">{{ $t("home.inputEmail") }}</label>
                  <input
                    class="input bg-background-form"
                    id="email"
                    type="text"
                    name="email"
                    autocorrect="off"
                    autocapitalize="off"
                    autocomplete="email"
                    required
                    aria-required="true"
                  />
                </div>
                <div class="row w-full md:w-1/3 mb-6 md:mb-0 px-4">
                  <label for="phone" :data-after="$t('home.formOptional')">{{ $t("home.inputPhone") }}</label>
                  <input
                    class="input bg-background-form"
                    id="phone"
                    type="text"
                    name="phone"
                    autocomplete="tel"
                  />
                </div>
              </div>
              <div class="row">
                <label for="message" :data-after="$t('home.formOptional')">{{ $t("home.inputMessage") }}</label>
                <textarea
                  class="textarea bg-background-form"
                  id="message"
                  name="message"
                ></textarea>
              </div>
              &nbsp;
              <div class="row">
                <button
                  class="inline-block rounded py-4 px-6 text-white font-bold hover:bg-blue-500 bg-background-nav-menu"
                  type="submit"
                >
                  {{ $t("home.btnFormContact") }}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "index",
};
</script>
<style>
</style>