<template>
  <button class="oy-btn oy-btn--arrow w-full">
    <span>Подтвердить</span>
    <svg width="7" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m1 1 4.327 5.048a3 3 0 0 1 0 3.904L1 15" stroke="#E4E4E4" stroke-width="1.6" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'Theme btn',
}
</script>


<style lang="scss">
.oy-btn {
  font-family: var(--font);
  padding: 30px 40px;
  border: none;
  background: var(--black);
  position: relative;
  border-radius: var(--border-radius-20);
  color: var(--white);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  transition: .5s ease;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: var(--gray)
  }

  &:disabled {
    background: var(--black-40)
  }

  &--arrow {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>