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
                            <div class="panel-heading"><h1>REGISTER</h1></div>
                            <div class="panel-body">
                                <form>
                                    <div class="row">
                                        <div class="col-xs-12 form-group">
                                            <label class="control-label">Full Name</label>
                                            <input type="text" v-model="user.name" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 form-group">
                                            <label class="control-label">Email</label>
                                            <input type="email" v-model="user.email" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 form-group">
                                            <label class="control-label">Password</label>
                                            <input type="password" v-model="user.password" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 form-group">
                                            <button @click="register" class="btn btn-success">Register</button>
                                            <router-link :to="{name: 'LoginAdmin'}" class="btn btn-success">login</router-link>
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
            return {
                user: {
                    name: '',
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            register() {
                event.preventDefault();
                var app = this;
                var newUser = app.user;
                axios.post('/api/v1/users', newUser)
                    .then(function (resp) {
                        app.$router.push({path: '/'});
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your User");
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