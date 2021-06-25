<template>
 <div class="container">
  <Header 
  @toggle-add-task="toggleAddTask"
  title="Task Tracker"
  :showAddTask = "showAddTask"
  />  
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
    tasks: [],
    shoAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
   this.showAddTask = !this.showAddTask
    },
   addTask(task) {
     this.tasks = [...this.tasks, task]
   },
   deleteTask(id) {
     if (confirm('Are you sure?')){
       this.tasks = this.tasks.filter((task) => task.id !== id)
     }
   },
   async fetchTasks() {
     const res = await fetch('api/tasks');
     const data = await res.json()

     return data
   },
     async fetchTask(id) {
     const res = await fetch(`api/task/${id}`);
     const data = await res.json()

     return data
   }
  },
  async created() {
    this.tasks = await this.fetchTasks()
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
