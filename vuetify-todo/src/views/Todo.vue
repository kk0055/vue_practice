<template>
  <div class="home">
    <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add a task"
      hide-details
      clearable
      append-icon="mdi-plus"
    ></v-text-field>
    <v-list flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="grey lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      newTaskTitle:'',
      tasks: [
        {
          id: 1,
          title: "wake up",
          done: false,
        },
        {
          id: 2,
          title: "Walking",
          done: false,
        },
        {
          id: 3,
          title: "Work out",
          done: false,
        },
      ],
    };
  },
  methods: {
    addTask(){
     let newTask = {
       id:Date.now(),
       title: this.newTaskTitle,
       done: false
     }
     this.tasks.push(newTask)
    this.newTaskTitle = ''
    },
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>
