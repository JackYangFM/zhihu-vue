<template>
  <full-page-slide :data="items" @finish="finish"></full-page-slide>
</template>

<script >
  import FullPageSlide from '../components/full-page-slide/full-page-slide.vue'
  import spring from '../assets/spring.jpeg'
  import summer from '../assets/summer.jpeg'
  import fall from '../assets/fall.jpeg'
  import winter from '../assets/winter.jpeg'
  
  export default {
    data() {
      return {
        items: [
          spring,
          summer,
          fall,
          winter
        ]
      }
    },
    components: {
      FullPageSlide
    },
    methods: {
      finish() {
        this.$router.push({name:'index'})
      }
    }
  }
</script>


