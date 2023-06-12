<template>
  <div>
    <HeaderCont attr="header__wrap cafe5 bg-blue" />
    <router-view />
    <FooterCont attr="footer__wrap cafe5 section bg-blue" />
  </div>
</template>

<script>
import HeaderCont from '@/components/HeaderCont.vue'
import FooterCont from '@/components/FooterCont.vue'
export default ({
  components: {
    HeaderCont,
    FooterCont
  }
})
</script>

<style lang="scss">
  @import "index.scss"
</style>
