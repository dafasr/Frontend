<template>
    <div>
        <div>
            <label>username</label>
            <input type="text" v-model="username"/>
        </div>
        <div>
            <label>password</label>
            <input type="password" v-model="password"/>
        </div>
        <button @click="simpan">SAVE</button>
        <button @click="hapus">HAPUS</button>

    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    created() {
        this.username = localStorage.getItem('username')
        this.password = localStorage.getItem('password')
    },
    methods: {
        simpan: function() {
            localStorage.setItem('usr', this.username)
            localStorage.setItem('pwd', this.password)
        },
        hapus: function() {
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            this.username = ''
            this.password = ''
        }
    },
}
</script>