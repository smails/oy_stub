<template>
  <div>
    <div class="oy-user-group w-half">
      <div class="oy-user-info">
        <span class="oy-user-sign">Фамилия</span>
        <div class="oy-user-name">Константинопольский</div>
      </div>
      <div class="oy-btn-change">
        <span>изменить</span>
        <svg width="6" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m1 1 3.204 3.125a2.606 2.606 0 0 1 0 3.75L1 11" stroke="#272B32" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Theme user field',
}
</script>

<style lang="scss">
.oy-user-group {
  border-radius: var(--border-radius-15);
  border: 1px solid var(--black-20-solid);
  padding: 17px 25px;
  font-size: 18px;
  box-sizing: border-box;
  font-family: var(--font);
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  .oy-user-sign {
    font-size: 14px;
    letter-spacing: 0.28px;
    color: var(--black-70);
    line-height: 1.5;
    margin-bottom: 2px;
    display: inline-block;
  }

  .oy-user-name {
    font-size: 18px;
    line-height: 1.3;
  }
}
</style>