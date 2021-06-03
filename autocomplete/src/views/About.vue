<template>
  <div class="about">
   <input type="text" autocomplete="off" v-model="state"  @focus="modal = true" >
   <div v-if="filteredStates && modal">
     <ul>
       <li v-for="filteredState in filteredStates" :key="filteredState.index" @click="setState(filteredState)">{{filteredState}}</li>
     </ul>
   </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      state:'',
      modal: false,
      states: [
        'Flodira', 'Alaska', 'texas'
      ],
      filteredStates:[],
    }
  },
  mounted() {
   this.filterStates();
  },
  methods: {
    filterStates() {
      if (this.state.length == 0) {
        this.filteredStates = this.state;
      }

    this.filteredStates = this.states.filter(state => {
      return state.toLowerCase().startsWith(this.state.toLowerCase());
    });
    },
    setState(state) {
    this.state = state;
    this.modal = false;
    }
  },
  watch: {
    state() {
      this.filterStates();
    }
  }
}
</script>