<template>
 <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />
    <router-view :showAddTask="showAddTask"></router-view>
   <Footer />
 </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import AddTask from './components/AddTask'

export default {
  name: 'App',
  components: {
    Header,
    AddTask,
    Footer
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
   async addTask(task) {
     const res = await fetch('api/tasks', {
           method:'POST',
           headers: {
             'Content-type' : 'application/json',
           
           },
             body: JSON.stringify(task)
     })
     const data  = await res.json()

     this.tasks = [...this.tasks, task, data]
   },
   async deleteTask(id) {
     if (confirm('Are you sure?')){
       const res = await fetch(`api/tasks/${id}`,
       {
         method: 'DELETE'
       })
       res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')
       
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
