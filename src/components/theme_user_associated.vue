<template>
  <div>
    <div class="oy-user-associated w-half">
      <div class="oy-user-name">Константинопольский</div>
      <div class="oy-user-email">konstantinopol.i@mail.com</div>
      <div class="oy-btn-change">
        <span>изменить</span>
        <svg width="13" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M.686 1.343 4.222 4.88a3 3 0 0 1 0 4.242L.686 12.657M12 12.657 8.464 9.12a3 3 0 0 1 0-4.242L12 1.343"
            stroke="#272B32" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Theme user associated',
}
</script>

<style lang="scss">
.oy-user-associated {
  border-radius: var(--border-radius-15);
  border: 1px solid var(--black-20-solid);
  padding: 17px 25px;
  font-size: 18px;
  box-sizing: border-box;
  font-family: var(--font);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  .oy-user-name {
    font-size: 18px;
    line-height: 1.3;
  }
}
</style>