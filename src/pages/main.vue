<template>
  <div class="oy-main">
    <sidebar />
    <main class="oy-main-container">
      <main_nav />
      <update />
      <contacts />
    </main>
  </div>
</template>

<script>
import sidebar from '@/components/part/sidebar'
import update from '@/components/part/update'
import contacts from '@/components/part/contacts'
import main_nav from '@/components/part/main-nav'

export default {

  components: {
    sidebar,
    main_nav,
    update,
    contacts
  }
}
</script>