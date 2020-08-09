<template>
<div class="module-one">
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('moduleOneStore', ['list'])
  },
  created () {
    Vue.ajax({
      url: '../../mock/find/city.json',
      type: 'get',
      dataType: 'json'
    }).then(res => {
      this.cityList = res.data.cities
      console.log(res.data.cities)
    })
  }

}
</script>
<style lang="scss" scoped>
.module-one{
  flex:1;
}
</style>
