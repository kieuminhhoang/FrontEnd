<template>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-body">
                       <div class="panel-body table-responsive">
                            <div class="form-group">
                                <router-link to="/" class="btn btn-success">Back Home</router-link>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading"><h1>LOGIN</h1></div>
                                <div class="panel-body">
                                    <form>
                                        <div class="row">
                                            <div class="col-xs-12 form-group">
                                                <label class="control-label">Email</label>
                                                <input type="text" name="username" v-model="username" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12 form-group">
                                                <label class="control-label">Password</label>
                                                <input type="password" name="password" v-model="password" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12 form-group">
                                                <button @click="login" class="btn btn-success">Login</button>
                                                <router-link :to="{name: 'Register'}" class="btn btn-success">Register</router-link>
                                            </div>
                                        </div>
                                        <br/>
                                        <!--<label class="label label-alert">Login Khong thanh cong</label>-->
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        data: function () {
            return{
                    username: "",
                    password: "",
            };
        },

        methods: {
            login() {
                let data = {
                    username: this.username,
                    password: this.password
                };
                axios.post('/api/v1/login', data)
                    .then(({data}) => {
                        this.$router.push('users');
                    })
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            }
        }
    }
</script>

<style scoped>
    .row{
        margin: auto;
    }
</style>