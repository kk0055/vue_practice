var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch() {
    let todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach( (todo, index) => {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    options: [
      { value: -1, label: 'すべて' },
      { value: 0,  label: '作業中' },
      { value: 1,  label: '完了' }
    ],
    current : -1,
  },
  methods: {
    doAdd(event, value) {
      let comment = this.$refs.comment
      if (!comment.value.length) {
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })
      comment.value = ''
    },
    doChangeState(item) {
      item.state = item.state ? 0 : 1
    },
    doRemove(item) {
      const index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }
  },
  created() {
      // インスタンス作成時に自動的に fetch() する
   this.todos = todoStorage.fetch()
  },
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos)
      },
      // deep オプションでネストしているデータも監視できる
      deep: true
    }
  },
  computed: {
    computedTodos: function() {
      return this.todos.filter((el) => {
        return this.current < 0 ? true: this.current == el.state
      }, this)
    },
    labels() {
      return this.options.reduce((a,b) => {
        return Object.assign(a, {[b.value]: b.label})
      }, {})
    }
    
  }
})