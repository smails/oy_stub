<template>
  <div class="container">
    <Btn />
    <Input />
    <DoubleBtn />
  </div>
</template>

<script>
import Btn from './components/theme_btn.vue'
import Input from './components/theme_input.vue'
import DoubleBtn from './components/theme_double_btn.vue'
export default {
  name: 'App',
  components: {
    Btn,
    Input,
    DoubleBtn,
  }
}
</script>
