<template>
  <Dropdown v-model="state" :options="stateList" optionLabel="name" placeholder="Выбрать">
    <template #value="slotProps">
      <div v-if="slotProps.value">
        <div class="drop-item"><span :style="`background-color: ${slotProps.value.color}`"></span> {{ slotProps.value.name
        }}</div>
      </div>
      <span v-else>
        {{ slotProps.placeholder }}
      </span>
    </template>
    <template #option="slotProps">
      <div class="drop-item"><span :style="`background-color: ${slotProps.option.color}`"></span> {{ slotProps.option.name
      }}</div>
    </template>
    <template #dropdownicon>
      <svg width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1L7.87409 3.50073C6.77843 4.37726 5.22157 4.37726 4.12591 3.50073L1 1" stroke="#272B32"
          stroke-width="1.6" />
      </svg>

    </template>
  </Dropdown>
</template>

<script>
import Dropdown from 'primevue/dropdown';
export default {
  name: 'dropList',
  data() {
    return {
      state: null,
      stateList: [
        { color: '#F6BA14', name: 'в работе' },
        { color: '#D57CFF', name: 'готовый' },
        { color: '#61C23E', name: 'в заказе' },
        { color: 'rgba(39, 43, 50, 0.40)', name: 'архив' },
      ]
    }
  },
  components: {
    Dropdown
  }
}

</script>
<style lang="scss">
.p-dropdown {
  border-color: var(--black-20-solid);
  border-radius: var(--border-radius-15);

  &:not(.p-disabled) {
    &:hover {
      border-color: var(--black-70);
    }

    &.p-focus {
      box-shadow: none;
    }
  }

}

.drop-item {
  font-family: var(--font);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;

  span {
    width: 7px;
    height: 7px;
    border-radius: 100%;
  }
}

.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  padding: 17px 25px;
}

.p-dropdown-panel .p-dropdown-items {
  padding: 10px 0;
}
</style>