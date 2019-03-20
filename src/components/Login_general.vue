<template>
    <div class="Login_general">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
            <el-form-item  prop="username">
                <el-input v-model.number="ruleForm.username"  placeholder="用户名/手机号"></el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"  placeholder="密码"  show-password></el-input>
            </el-form-item>
            <!-- <el-form-item  prop="validCode">
                <el-input type="text" v-model="ruleForm.validCode" autocomplete="off" placeholder="验证码"></el-input>
            </el-form-item>
            <a class="validCodeImg">
                <img src="../assets/image/code (1).jpg" />
            </a> -->

            <el-button type="warning" @click="login" class="btn" >登录</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        var validateUsername = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名/手机号不能为空'));
            }else if (!(/^.{6,18}$/.test(value))) {
                return callback(new Error('用户名/手机号为6到18个字符'))
            }
            setTimeout(() => {
                callback();
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (value.trim() === '') {
                callback(new Error('密码不能为空格'));
            }else {
                // if (this.ruleForm.password !== '') {
                //     this.$refs.ruleForm.validateField('password');
                // }
                callback();
            }
        };
        // var validCode = (rule, value, callback) => {
        //     if (value.trim() === '') {
        //         callback(new Error('请输入验证码'));
        //     }else {
        //         callback();
        //     }
        // };
        return {
            ruleForm: {
                username: '',
                password: '',
                // validCode: ''
            },
            rules: {
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                // validCode: [
                //     { validator: validCode, trigger: 'blur' }
                // ]
            }
        };
    },
    methods: {
        
        login(){
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {  
                    let param = {"username":this.ruleForm.username,"password":this.ruleForm.password};
                    console.log(param);
                    this.$axios.post("http://localhost:12580/login", this.$qs.stringify(param))
                        //成功返回
                        .then(response => {
                            if(response.data.code === 200){
                                localStorage.setItem('username',JSON.stringify(response.data.username));
                                sessionStorage.setItem('username',JSON.stringify(response.data.username));
                                localStorage.setItem('id',JSON.stringify(response.data._id));
                                sessionStorage.setItem('id',JSON.stringify(response.data._id));
                                this.$router.push({name:'Home_mine'})
                            }else {
                                alert("登录失败")
                            }
                            // console.log(response);
                            
                        })
                        //失败返回
                        .catch(error => {
                            console.log(error);
                        })

                //    let param = {"good_id":"80011","user_id":"5c8b9c9a5308f6d83c1667ae"};
                //    this.$ajax.post("http://localhost:12580/cart/delete", this.$qs.stringify(param))
                //     //成功返回
                //     .then(response => {
                //         console.log(response);// 后台返回数据
                //     })
                //     //失败返回
                //     .catch(error => {
                //         console.log(error);
                //     })

                } else {
                    return false;
                }
            });
        }
    }
}

</script>

<style scoped lang="scss">
    .Login_general{
        padding:.4rem;
        /deep/ .el-input__inner{
            height:1.333333rem;
        }
        // .validCodeImg{
        //     display:block;
        //     width:2.666667rem;
        //     height:1.6rem;
        //     margin-bottom:.533333rem;
           
        //     img{
        //         width:100%;
        //         height:100%;
        //          border: .013333rem solid #E6A23C;
        //     border-radius: .066667rem;
        //     }
        // }
        /deep/ .btn{
            background-color:#E6A23C;
            width:9.333333rem;
            height:1.2rem;
        }
        /deep/ .el-form-item,/deep/ .is-error,/deep/  .el-input__inner{
            border-color: #E6A23C;
        }
        /deep/ .el-form-item__error {
            color: #E6A23C;
        }
    }

</style>
