<template>
  <p class="oy-main-title">Обновления</p>
  <div class="oy-update">
    <div class="oy-update-box">
      <p class="oy-update-title">Новости</p>
      <ul class="oy-update-list">
        <li class="oy-update-item"
          v-for="item in ['Появились новые патчи', 'Вышла новая версия', 'Обновили решение', 'Пофиксили баги']"
          :key="item">
          <div class="oy-update-info">
            <p class="oy-update-caption">{{ item }}</p>
            <div class="oy-update-meta">
              <span>02.08.2023</span>
              <span>Раздел</span>
              <span>Тэг</span>
            </div>
          </div>
          <router-link class="oy-btn-change" to="#"><span>перейти</span>
            <svg width="6" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m1 1 3.204 3.125a2.606 2.606 0 0 1 0 3.75L1 11" stroke="#272B32" stroke-linejoin="round" />
            </svg>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="oy-update-box">
      <p class="oy-update-title">Последние опубликованные файлы </p>
      <ul class="oy-update-list">
        <li class="oy-update-item" v-for="item in ['Configuration.config', 'Document.doc', 'Image.svg', 'Archive.rar']"
          :key="item">
          <div class="oy-update-info">
            <p class="oy-update-caption">{{ item }}</p>
            <div class="oy-update-meta">
              <span>02.08.2023</span>
              <span>2.6 мб</span>
            </div>
          </div>
          <router-link class="oy-btn-change" to="#"><span>скачать</span>
            <svg width="13" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 9.25-3.735 2.717a3 3 0 0 1-3.53 0L1 9.25m5.5-.5v-8" stroke="#272B32" />
            </svg>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>