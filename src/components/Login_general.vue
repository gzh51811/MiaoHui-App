<template>
    <div class="Login_general">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="0" class="demo-ruleForm">
            <el-form-item  prop="username">
                <el-input v-model.number="ruleForm2.username"  placeholder="用户名/手机号"></el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <el-input type="password" v-model="ruleForm2.password" autocomplete="off"  placeholder="密码" ></el-input>
            </el-form-item>
            <el-form-item  prop="validCode">
                <el-input type="text" v-model="ruleForm2.validCode" autocomplete="off" placeholder="验证码"></el-input>
            </el-form-item>
            <a class="validCodeImg">
                <img src="../assets/image/code (1).jpg" />
            </a>
            <!-- <el-form-item> -->
                <el-button type="warning" @click="login('ruleForm2')" id="btn" >提交</el-button>
            <!-- </el-form-item> -->
            <!-- <button type="warning" @click="login('ruleForm2')" id="btn"></button> -->
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        var validateUsername = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名/手机号不能为空'));
            }else if ((value.length < 3) && (value.length > 18)) {
                return callback(new Error('用户名/手机号应该大于3个字符小于18个字符'))
            }
            setTimeout(() => {
                callback();
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
            if (this.ruleForm2.checkPass !== '') {
                this.$refs.ruleForm2.validateField('password');
            }
            callback();
            }
        };
        var validCode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入验证码'));
            }else {
                callback();
            }
        };
        return {
            ruleForm2: {
                username: '',
                password: '',
                validCode: ''
            },
            rules2: {
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                validCode: [
                    { validator: validCode, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    // console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}

</script>

<style scoped lang="scss">
    .Login_general{
        padding:.4rem;
        .validCodeImg{
            display:block;
            width:2.666667rem;
            height:1.6rem;
            margin-bottom:.533333rem;
            img{
                width:100%;
                height:100%;
            }
        }
        #btn{
            background-color:#E6A23C;
            width:9.333333rem;
            height:1.2rem;
        }
    }
    // // #E6A23C

</style>
