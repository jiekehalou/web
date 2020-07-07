<template>
<div>
    {{msg}}
</div>
</template>
<script>
export default {
//   name: '',
  components: {
  },
  props: {
     propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
  },
  data () {
    return {
        msg: "template"
    }
  },
  computed: {
  },
  methods: {

  },
  beforeDestroy(){
    
  }
}
</script>

<style   lang="scss"   scoped>
</style>

