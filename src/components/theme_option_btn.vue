<template>
  <div>
    <div class="oy-download-btn">
      <div class="oy-download-head">
        <div class="oy-download-sign">Сохранить</div>
        <div class="oy-download-toogle" @click="openDrop = !openDrop">
          <span>Скачать</span>
          <svg width="13" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m12 9.25-3.735 2.717a3 3 0 0 1-3.53 0L1 9.25m5.5-.5v-8" stroke="#272B32" stroke-width="1.6" />
          </svg>
        </div>
      </div>
      <div class="oy-download-list" v-if="openDrop">
        <a href="#" download="" class="oy-download-item">
          <span>Скачать в Excel</span>
          <svg width="13" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m12 9.25-3.735 2.717a3 3 0 0 1-3.53 0L1 9.25m5.5-.5v-8" stroke="#272B32" stroke-width="1.6" />
          </svg>
        </a>
        <a href="#" download="" class="oy-download-item">
          <span>Скачать в PDF</span>
          <svg width="13" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m12 9.25-3.735 2.717a3 3 0 0 1-3.53 0L1 9.25m5.5-.5v-8" stroke="#272B32" stroke-width="1.6" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Theme btn option',
  data() {
    return {
      openDrop: false,
    }
  },
}
</script>

<style lang="scss">
.oy-download-btn {
  max-width: 390px;

  .oy-download-head {
    display: flex;
    background: var(--black);
    border-radius: calc(var(--border-radius) * 3);
    border: 1px solid var(--black);
  }

  .oy-download-toogle {
    padding: 30px 40px;
    border-radius: calc(var(--border-radius) * 3);
    color: var(--black);
    background: var(--white);
    text-align: center;
    display: block;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    cursor: pointer;
    transition: background .3s linear;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;

    &:hover {
      background: var(--light);
    }
  }

  .oy-download-sign {
    padding: 30px 40px;
    color: var(--white);
    background: var(--black);
    text-align: center;
    border-radius: calc(var(--border-radius) * 3);
    display: block;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    width: 100%;
  }

  .oy-download-list {
    border-radius: calc(var(--border-radius) * 3);
    border: 1px solid var(--black);
    background: var(--white);
    padding: 20px 0;
  }

  .oy-download-item {
    display: block;
    padding: 30px 25px;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: var(--black);
    transition: .5s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &:hover {
      background: var(--light);
    }
  }
}
</style>