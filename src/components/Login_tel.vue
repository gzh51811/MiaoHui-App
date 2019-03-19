<template>
    <div class="Login_tel">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
            <el-form-item  prop="username">
                <el-input v-model="ruleForm.username" ref="input1"  placeholder="输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password"  placeholder="密码" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password"  placeholder="确认密码" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-button type="warning" @click="register" class="btn" >登录</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        var validateUsername = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名不能为空'));
            }
            // else if (!(/^\d{6}$/.test(value))) {
            //     return callback(new Error('用户名必须为6位字符'))
            // }
            // setTimeout(() => {
            // callback();
                // console.log(666);
            this.$axios
                .get("http://localhost:12580/register/verification", {
                    params: {
                        "username": value
                    }
                })
                .then(res => {
                    console.log(res);
                    if(res.data.code == 100){
                        callback();
                    }else {
                        alert('用户名已存在');
                        return;
                    }
                    
                });
            
            // }, 1000);
        };

        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if (!(/^\d{6}$/.test(value))) {
                return callback(new Error('密码必须为6位字符'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return {
            ruleForm: {
                username: '',
                pass: '',
                checkPass: ''
            },
            rules: {
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        // 注册账号
        register(){
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    let param = {"username":this.ruleForm.username,"password":this.ruleForm.pass};
                    this.$axios.post("http://localhost:12580/register", this.$qs.stringify(param))
                    //成功返回
                    .then(response => {
                        console.log(response);// 后台返回数据
                        if(response.data.code == 200){
                            localStorage.setItem('username',this.ruleForm.username);
                            sessionStorage.setItem('username',this.ruleForm.username);
                            // location.href = '/Home';
                        }else {
                            alert('注册失败');
                            // return;
                        }
                    })
                    //失败返回
                    .catch(error => {
                        console.log(error);
                    })

                } else {
                    return false;
                }
            });
        },
        // 验证用户名
        // verification(){
        //     this.$refs.ruleForm.validate((valid) => {

        //         // if (valid) {
        //             var username = this.ruleForm.username;
                    
        //             this.$axios
        //                 .get("http://localhost:12580/register/verification", {
        //                     params: {
        //                         "username": username
        //                     }
        //                 })
        //                 .then(res => {
        //                     console.log(res);
        //                     if(res.data.code == 100){

        //                     }
                            
        //                 });

        //         // } else {
        //         //     return false;
        //         // }
        //     });
        // }
       
    }   
}
</script>

<style scoped lang="scss">
    .Login_tel{
        padding:.4rem;
        /deep/ .el-input__inner{
            height:1.333333rem;
        }
        /deep/ .validCode{
            width: 6rem;
        }
        /deep/ .el-form-item__content{
            text-align: left;
        }
        /deep/ .Fyzm{
            background-color:#E6A23C;
            height:1.333333rem;
            width: 2.933333rem;
            float: right;
        }
        /deep/ .el-button{
            color: #fff;
        }
        /deep/ .el-button:hover{
            border-color: #E6A23C;
            color: #fff;
        }
        /deep/ .el-button:active {
            color: #fff;
        }
        /deep/  .btn{
            background-color:#E6A23C;
            width:9.066667rem;
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

