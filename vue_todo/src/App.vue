<template>
 <div class="container">
  <Header title="Task Tracker"/>  
  <AddTask @add-task="addTask"/>
 </div>
</template>

<script>
import Header from './components/Header'
import AddTask from './components/AddTask'

export default {
  name: 'App',
  components: {
    Header,
    AddTask
  },
  data() {
    return {
    tasks: []
    }
  },
  methods: {
   addTask(task) {
     this.tasks = [...tasks, task]
   },
   deleteTask(id) {
     if (confirm('Are you sure?')){
       this.tasks = this.tasks.filter((task) => task.id !== id)
     }
   }
  },
  created() {
    this.tasks = ''
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
