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
import Btn from '@/components/theme/theme_btn.vue'
import Input from '@/components/theme/theme_input.vue'
import DoubleBtn from '@/components/theme/theme_double_btn.vue'
import userField from '@/components/theme/theme_field.vue'
import userAssociated from '@/components/theme/theme_user_associated.vue'
import systemSwitch from '@/components/theme/theme_system_switch.vue'
import optionBtn from '@/components/theme/theme_option_btn.vue'
import dropList from '@/components/theme/theme_dropdown.vue'
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
