<template>
  <div class="oy-auth">
    <aside class="oy-auth-aside">
      <a href="/">
        <img src="@/assets/icon/icon-logo.svg" alt="Logo" class="oy-auth-logo">
      </a>
    </aside>
    <main class="oy-auth-main">
      <p class="oy-auth-subtitle">Личный кабинет</p>
      <div class="oy-auth-full-height">
        <div class="oy-auth-box">
          <h1 class="oy-auth-title">Авторизация</h1>
          <div class="oy-group w-full">
            <input type="text" class="oy-field" placeholder="Корпоративный еmail">
          </div>
          <div class="oy-group w-full">
            <input type="text" class="oy-field" placeholder="Пароль">
            <div class="oy-group-control">
              <a href="#" class="oy-link oy-auth-desk">Забыли пароль?</a>
              <div class="oy-view-close-pass" :class="{ open: viewPassword }" @click="viewPassword = !viewPassword"></div>
            </div>
          </div>
        </div>
        <a href="#" class="oy-link oy-auth-mobile">Забыли пароль?</a>
        <button class="oy-btn oy-btn--arrow w-full">
          <span>Войти</span>
          <svg width="7" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m1 1 4.327 5.048a3 3 0 0 1 0 3.904L1 15" stroke="#E4E4E4" stroke-width="1.6" />
          </svg>
        </button>
      </div>
      <router-link to="/auth/register" class="oy-auth-register oy-btn oy-btn--arrow oy-btn--transparent">
        <span>Зарегистрироваться</span>
        <svg width="7" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m1 1 4.327 5.048a3 3 0 0 1 0 3.904L1 15" stroke="#272B32" stroke-width="1.6" />
        </svg>
      </router-link>
    </main>
    <Dialog v-model:visible="visible" modal header="Выберите свою роль" :style="{ width: '740px' }" :pt="styleDialog"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }">
      <template #closebuttonicon>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path opacity="0.4" d="M1 1L21 21M1 21L21 1" stroke="#272B32" />
        </svg>
      </template>
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
    </Dialog>
  </div>
</template>

<script>
import Dialog from 'primevue/dialog';
export default {
  name: 'auth',
  data() {
    return {
      viewPassword: true,
      visible: true,
      styleDialog: {
        header: {
          class: ['oy-dialog-header']
        },
        content: {
          class: ['oy-dialog-content']
        },
      }
    }
  },
  components: {
    Dialog
  }
}
</script>

