<template>
    <div class="Login_tel">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="0" class="demo-ruleForm">
            <el-form-item  prop="username">
                <el-input v-model.number="ruleForm2.username"  placeholder="输入手机号码"></el-input>
            </el-form-item>
            <el-form-item  prop="validCode">
                <el-input type="text" v-model="ruleForm2.validCode" autocomplete="off"  placeholder="输入短信验证码" ></el-input>
            </el-form-item>
            <el-form-item  prop="RecommendCode">
                <el-input type="text" v-model="ruleForm2.RecommendCode" autocomplete="off" placeholder="妙汇推荐码（选填）"></el-input>
            </el-form-item>
            <!-- <el-form-item> -->
                <el-button type="warning" @click="login('ruleForm2')" id="btn" >登录</el-button>
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
        var validCode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入验证码'));
            }else {
                callback();
            }
        };
        var RecommendCode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入验证码'));
            }else {
                callback();
            }
        };
        return {
            ruleForm2: {
                username: '',
                RecommendCode: '',
                validCode: ''
            },
            rules2: {
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                RecommendCode: [
                    { validator: RecommendCode, trigger: 'blur' }
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
        // resetForm(formName) {
        //     this.$refs[formName].resetFields();
        // }
    }   
}
</script>

<style scoped lang="scss">
    .Login_tel{
        padding:.4rem;
        
        #btn{
            background-color:#E6A23C;
            width:9.333333rem;
            height:1.2rem;
        }
    }
</style>

