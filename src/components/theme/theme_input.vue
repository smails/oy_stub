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
}
</script>
