<template>
  <Header></Header>
  <Content>
    <DefaultView></DefaultView>
  </Content>
  <Footer></Footer>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Header from '@/layouts/Header.vue'
import Content from '@/layouts/Content.vue'
import Footer from '@/layouts/Footer.vue'
import DefaultView from '@/layouts/DefaultView.vue'

const Auth = createNamespacedHelpers('auth')

export default {
  components: {
    Header, Content, Footer, DefaultView
  },
  data () {
    return {

    }
  },

  computed: {
    ...Auth.mapGetters({
      refreshToken: 'refreshToken',
      tokenValidity: 'tokenValidity'
    })
  },

  mounted () {
    setInterval(() => {
      const currentTime = (new Date()).getTime()
      const tokenValidity = parseInt(this.tokenValidity)

      if (currentTime > tokenValidity) {
        this.refreshSession(this.refreshToken)
      }
    }, 5000)
  },

  methods: {
    ...Auth.mapActions({
      refreshSession: 'refreshToken'
    })
  }
}
</script>
