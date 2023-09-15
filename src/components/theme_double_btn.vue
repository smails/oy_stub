<template>
  <div>
    <div class="oy-double-btns">
      <label class="oy-double-btn">
        <input type="radio" name="type" checked>
        <span>Заказчик</span>
      </label>
      <label class="oy-double-btn">
        <input type="radio" name="type">
        <span>Партнёр</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Theme double btn',
}
</script>

<style lang="sass">
.oy-double-btns
  display: flex
  width: 700px
  background: var(--black)
  border: 1px solid var(--black)
  border-radius: calc(var(--border-radius) * 3)

.oy-double-btn
  width: 50%
  input
    display: none
    &:checked + span
      background: var(--white)
      color: var(--black)
  span
    padding: 30px 40px
    color: var(--white)
    text-align: center
    border-radius: calc(var(--border-radius) * 3)
    display: block
    font-size: 20px
    font-weight: 500
    line-height: 1.2
    cursor: pointer
    transition: background .3s linear
</style>