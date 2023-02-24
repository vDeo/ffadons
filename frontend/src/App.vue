<template>
  <div class="bg-black h-screen px-8">
    <div class="flex items-center py-10">
      <img class="float-left" src="/src/assets/firefox.svg">
      <p class="text-white text-3xl font-bold pl-6">Top 10 Firefox Addons</p>
    </div>
    <div class="flex justify-end w-full py-10">
      <sort-dropdown></sort-dropdown>
    </div>
    <data-table></data-table>
    
  </div>
  
</template>

<script>
  import DataTable from './components/table.vue'
  import SortDropdown from './components/sort.vue'
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {}
    },

    created() {
      document.documentElement.classList.add('dark');
      this.fetchAddOns()
    },

    components: {
      DataTable,
      SortDropdown
    },

    methods: {
      ...mapActions(['fetchAddOns']),
    }
  }
</script>