<template>
  <div>
    <div class="oy-system-switch w-half">
      <div class="oy-system-switch-name">Системные e-mail уведомления</div>
      <InputSwitch v-model="checked" />
    </div>
  </div>
</template>

<script>
import InputSwitch from 'primevue/inputswitch';
export default {
  name: 'Theme system switch',
  data() {
    return {
      checked: false
    }
  },
  components: {
    InputSwitch
  }
}
</script>

<style lang="scss">
.oy-system-switch {
  border-radius: var(--border-radius-15);
  border: 1px solid var(--black-20-solid);
  padding: 30px 25px;
  font-size: 18px;
  box-sizing: border-box;
  font-family: var(--font);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  .oy-system-switch-name {
    font-size: 18px;
    line-height: 1.3;
  }
}
</style>