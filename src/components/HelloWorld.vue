<template>
  <div>
    <div>Selamat Datang</div>
    <ul>
    <li v-for="item in todos" :key="item.Hal">{{ item.Hal }} <button @click="hapus(item.Hal)">X</button></li>
    </ul>
    <input v-model="myText"/>
    <button @click="tambah">Add</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      todos: [],
      myText: 'Isi Kegiatan...'
    }
  },
  created: function() {
    axios.get('http://localhost:2205/todo').then(result => {
      this.todos = result.data
    })
  },
  methods: {
    tambah: function () {
      const newItem = { Hal : this.myText }
      axios.post('http://localhost:2205/todo', newItem)
      this.todos.push(newItem)
    },
    hapus: function (Id) {
      axios.delete(`http://localhost:2205/todo/${Id}`)
    }
  }
}
</script>