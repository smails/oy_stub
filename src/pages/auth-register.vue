<template>
  <div class="oy-auth">
    <aside class="oy-auth-aside">
      <a href="/">
        <img src="@/assets/icon/icon-logo.svg" alt="Logo" class="oy-auth-logo">
      </a>
    </aside>
    <main class="oy-auth-main" v-if="step == 1">
      <p class="oy-auth-subtitle">Личный кабинет</p>
      <div class="oy-auth-full-height">
        <div class="oy-auth-box">
          <h1 class="oy-auth-title">Регистрация</h1>
          <p class="oy-auth-sign">
            Если вы заинтересованы в сотрудничестве, заполните заявку и мы свяжемся с вами, чтобы
            рассказать о дальнейших действиях.</p>
          <div class="oy-group w-full">
            <input type="text" class="oy-field" placeholder="Идентификатор партнера">
          </div>
          <div class="oy-group w-full">
            <input type="text" class="oy-field" placeholder="Корпоративный еmail">
          </div>
        </div>
        <button class="oy-btn oy-btn--arrow w-full" @click="step++">
          <span>Отправить код подтверждения</span>
          <svg width="7" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m1 1 4.327 5.048a3 3 0 0 1 0 3.904L1 15" stroke="#E4E4E4" stroke-width="1.6" />
          </svg>
        </button>
      </div>
      <router-link to="/auth/login" class="oy-auth-register oy-btn oy-btn--arrow oy-btn--transparent">
        <span>Авторизоваться</span>
        <svg width="7" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m1 1 4.327 5.048a3 3 0 0 1 0 3.904L1 15" stroke="#272B32" stroke-width="1.6" />
        </svg>
      </router-link>
    </main>
    <main class="oy-auth-main" v-if="step == 2">
      <p class="oy-auth-subtitle">Личный кабинет</p>
      <div class="oy-auth-full-height">
        <div class="oy-auth-box">
          <h1 class="oy-auth-title">Регистрация</h1>
          <p class="oy-auth-sign">На mail@mail.com выслан код подтверждения</p>
          <div class="oy-auth-code">
            <v-otp-input ref="otpInput" input-classes="oy-auth-code-field" :num-inputs="6" :separator="false"
              :should-auto-focus="true" :is-input-num="true" :placeholder="['0', '0', '0', '0', '0', '0']" />
            <span class="oy-error-code">Некорректный код</span>
          </div>
          <div class="oy-auth-resend">Выслать код повторно</div>
        </div>
        <button class="oy-btn oy-btn--arrow w-full" @click="step++">
          <span>Подтвердить</span>
          <svg width="7" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m1 1 4.327 5.048a3 3 0 0 1 0 3.904L1 15" stroke="#E4E4E4" stroke-width="1.6" />
          </svg>
        </button>
      </div>
    </main>
    <main class="oy-auth-main" v-if="step == 3">
      <p class="oy-auth-subtitle">Личный кабинет</p>
      <div class="oy-auth-full-height">
        <div class="oy-auth-box">
          <h1 class="oy-auth-title">Регистрация</h1>
          <div class="oy-group w-full">
            <input type="text" class="oy-field" placeholder="Придумайте пароль">
            <div class="oy-group-control">
              <div class="oy-view-close-pass" :class="{ open: viewPassword }" @click="viewPassword = !viewPassword"></div>
            </div>
          </div>
          <div class="oy-group w-full">
            <input type="text" class="oy-field" placeholder="Повторите пароль">
            <div class="oy-group-control">
              <div class="oy-view-close-pass" :class="{ open: viewPassword }" @click="viewPassword = !viewPassword"></div>
            </div>
          </div>
        </div>
        <button class="oy-btn oy-btn--arrow w-full" @click="step++">
          <span>Зарегистрироваться</span>
          <svg width="7" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m1 1 4.327 5.048a3 3 0 0 1 0 3.904L1 15" stroke="#E4E4E4" stroke-width="1.6" />
          </svg>
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import VOtpInput from 'vue3-otp-input';
export default {
  name: 'auth',
  data() {
    return {
      viewPassword: true,
      step: 1,
    }
  },
  components: {
    VOtpInput,
  },
}
</script>

