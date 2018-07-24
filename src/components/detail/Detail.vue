<template>
  <div>
    123
  </div>
</template>

<script>
  export default {
    name: 'detail',
    mounted(){
      console.log(this.$router.history.current.params.id)
    }
  }
</script>