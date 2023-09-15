<template>
  <div class="container">
    <Btn />
    <Input />
    <DoubleBtn />
    <userField />
    <userAssociated />
    <systemSwitch />
    <optionBtn />
    <dropList />
  </div>
</template>

<script>
import Btn from './components/theme_btn.vue'
import Input from './components/theme_input.vue'
import DoubleBtn from './components/theme_double_btn.vue'
import userField from './components/theme_field.vue'
import userAssociated from './components/theme_user_associated.vue'
import systemSwitch from './components/theme_system_switch.vue'
import optionBtn from './components/theme_option_btn.vue'
import dropList from './components/theme_dropdown.vue'
export default {
  name: 'App',
  components: {
    Btn,
    Input,
    DoubleBtn,
    userField,
    userAssociated,
    systemSwitch,
    optionBtn,
    dropList,
  }
}
</script>
