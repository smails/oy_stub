<template>
  <div>
    <div class="oy-group w-half">
      <input type="text" class="oy-field" placeholder="E-mail">
    </div>
    <div class="oy-group w-half" data-error="Некорректный e-mail">
      <input type="text" class="oy-field" placeholder="E-mail">
    </div>
    <div class="oy-group w-half" data-sign="Пароль должен содержать цифры, буквы латиницы и спец. символы">
      <input type="text" class="oy-field" placeholder="E-mail">
      <div class="oy-group-control">
        <a href="#" class="oy-link">Забыли пароль?</a>
        <div class="oy-view-close-pass" :class="{ open: viewPassword }" @click="viewPassword = !viewPassword"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Theme input',
  data() {
    return {
      viewPassword: true,
    }
  },
}
</script>


<style lang="scss">
.oy-group {
  position: relative;
  transition: margin .5s ease;

  &[data-error] {
    margin-bottom: 20px;

    &:after {
      content: attr(data-error);
      font-size: 14px;
      margin-top: 5px;
      color: var(--red);
      letter-spacing: 0.28px;
    }
  }

  &[data-sign] {
    margin-bottom: 20px;

    &:after {
      content: attr(data-sign);
      font-size: 14px;
      margin-top: 5px;
      color: var(--black-70);
      letter-spacing: 0.28px;

    }

  }

}

.oy-field {
  border-radius: var(--border-radius-15);
  border: 1px solid var(--black-20-solid);
  padding: 15px 25px;
  font-size: 18px;
  box-sizing: border-box;
  font-family: var(--font);
  outline: none;
  transition: border .5s ease;
  width: 100%;

  &::placeholder {
    color: var(--black-40);
  }

  &:hover {
    border: 1px solid var(--black-40)
  }

  &:focus {
    border: 1px solid var(--black-40)
  }

}

.oy-group-control {
  position: absolute;
  right: 25px;
  top: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.oy-view-close-pass {
  width: 26px;
  height: 26px;
  background-image: url(~@/assets/icon/icon-pass-view-close.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  user-select: none;
  cursor: pointer;

  &.open {
    background-image: url(~@/assets/icon/icon-pass-view-open.svg)
  }

}
</style>