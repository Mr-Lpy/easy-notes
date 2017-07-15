<template>
    <div class="login">
        <div class="login-wrapper">
            <div class="head-wrapper">
                <easy-head vwidth="90px" vheight="90px"></easy-head>
            </div>
            <div class="edit-form">
                <el-input placeholder="请输入用户名" v-model="username"></el-input>
                <el-input placeholder="请输入密码" v-model="password"></el-input>
            </div>
            <div class="btn-wrapper">
                <el-button type="primary" class="btn" @click="login" v-loading.fullscreen.lock="fullscreenLoading" :element-loading-text="loadingText">登  录</el-button>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Head from '../Common/Head.vue';
    export default {
        components: {
            'easy-head' : Head
        },
        data() {
            return {
                username: '',
                password: '',
                fullscreenLoading: false,
                loadingText: '登录中...',
                users: []
            };
        },
        methods: {
            login() {
                console.log('in login');
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                    this.check()

                },3000);
            },
            check() {
                this.users.forEach((v, i, a) => {
                    console.log(v.name === this.username);
                    if (v.name === this.username && v.password === this.password) {
                        this.$router.push({path: 'Main'});
                    }
                });
            }
        },
        created() {
            console.log('in login created');
            this.$http.get('/api/user').then((response) => {
                response = response.body;
                if (response.errno === 0) {
                    this.users = response.data;
                    console.log(this.users);
                }
            });
        }
    }
</script>

<style>
    .login {
        text-align: center;
        background-color: #22a3f7;
        width: 100%;
        height: 100%;
    }

    .login-wrapper {
        position: absolute;
        text-align: center;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 280px;
        height: 330px;
        background-color: #e3f0f7;
        box-shadow: 0.3px 0.3px 18px #777777;
        border-radius: 4px;
    }

    .login-wrapper .head-wrapper {

        margin: 20px auto;
        height: 90px;
        width: 90px;
        border-radius: 50%;
        box-shadow: 0.3px 0.3px 8px #22a3f7;
    }

    .edit-form {
        width: 240px;
        margin: auto;
    }

    .btn-wrapper {
        margin: 20px auto;
        width: 240px;
    }
    .btn {
        width: 240px;
    }
</style>