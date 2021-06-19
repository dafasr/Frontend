<template>
  <div>
    <h1>User List</h1>
    <ul>
    <li v-for="item in todos" :key="item.Hal">{{ item.Hal }} <button @click="hapus(item.Hal)">X</button></li>
    </ul>
    <input v-model="username"/>
    <input v-model="password"/>
    <button @click="tambah">Add</button>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      users: [],
      username: '',
      password: ''
    }
  },
  created: function() {
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')
    axios.get('http://localhost:2205/user', { headers: {username, password}})
    .then(result => {
      this.users = result.data
    })
  },
  methods: {
    tambah: function () {
      const username = localStorage.getItem('username')
      const password = localStorage.getItem('password')
      const newItem = { username : this.username, password : this.password }
      axios.post('http://localhost:2205/user', newItem, { headers: {username: username, password: password}})
      this.users.push(newItem)
    },
    hapus: function (Id) {
      const username = localStorage.getItem('username')
      const password = localStorage.getItem('password')
      axios.delete(`http://localhost:2205/todo/${Id}`, { headers: {username, password}})
    }
  }
}
</script>