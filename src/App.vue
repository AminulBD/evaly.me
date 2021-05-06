<template>
  <Header></Header>
  <Content>
    <DefaultView></DefaultView>
  </Content>
  <Footer></Footer>
</template>

<script>
import Header from '@/layouts/Header.vue'
import Content from '@/layouts/Content.vue'
import Footer from '@/layouts/Footer.vue'
import DefaultView from '@/layouts/DefaultView.vue'

export default {
  components: {
    Header, Content, Footer, DefaultView
  },
  data () {
    return {

    }
  }
}
</script>
