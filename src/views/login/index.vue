<template>
    <!-- login页面 -->
    <div class="continer">
        <div class="content">
            <div class="login-title" :class="[isPc ? 'isPc' : 'isMobile']">登录</div>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="content-form">
                <el-form-item prop="userName">
                    <el-input v-model="ruleForm.userName" type="text" placeholder="请输入用户名" autocomplete="off" />
                </el-form-item>
                <el-form-item prop="password" style="margin-top:40px;position: relative;">
                    <el-input v-model="ruleForm.password" :type="passwordType" autocomplete="off" placeholder="请输入密码"
                        maxlength="60" />
                    <el-icon :size="18" class="check_password" @click="setPasswordType">
                        <Hide v-if="passwordType == 'password'" />
                        <View v-else />
                    </el-icon>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)" class="content-btn">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import { login } from '@/api/user'
import { userStore } from '@/store/user'
import { useRouter } from 'vue-router';
const store = userStore()
const ruleFormRef = ref<FormInstance>()
const router = useRouter()
const isPc = ref(true)
const validateUser = (rule: Object, value: string, callback: any) => {
    if (value === '') {
        callback(new Error('用户名不能为空'))
    } else {
        if (ruleForm.userName !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}
const validatePassword = (rule: Object, value: string, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else if (value.length < 6) {
        callback(new Error("密码不能小于6位"))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    userName: '',
    password: '',
})
const rules = reactive({
    userName: [{ validator: validateUser, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }],
})
const passwordType = ref('password')


const setPasswordType = () => {
    passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            //开始执行登陆
            login(ruleForm).then((res: any) => {
                const data = res
                if (data.code == 200) {
                    store.setUserInfo(data.data)
                    ElMessage.success(data.message)
                    router.push({ path: '/' })
                } else {
                    ElMessage.error(data.message)
                }
            })
        } else {
            return false
        }
    })
}

const keyDown = (e: any) => {
    if (e.keyCode == 13) {
        submitForm(ruleFormRef.value)
    }
}

onMounted(() => {
    window.addEventListener('keydown', keyDown)
    if (document.body.clientWidth < 500) {
        isPc.value = false
    }
    window.onresize = () => (() => {
        if (document.body.clientWidth < 500) {
            isPc.value = false
        } else {
            isPc.value = true
        }
    })()
})

onUnmounted(() => {
    window.removeEventListener('keydown', keyDown, false)
})
</script>
<style scoped lang="scss">
$bg: #2d3a4b;

* {
    padding: 0;
    margin: 0;
}

.continer {
    min-width: 100%;
    height: 100%;
    background-color: $bg;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../../assets/bg.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .content {
        height: 400px;
        background-color: #fff;
        border-radius: 10px;

        .login-title {
            text-align: center;
            padding: 30px;
            font-size: 32px;
            font-weight: 800;
        }

        .content-form {
            width: 80%;
            position: relative;
            margin: 0 auto;

            .content-btn {
                width: 100px;
                height: 40px;
                position: relative;
                top: 50px;
                margin: auto;
            }

            .check_password {
                position: absolute;
                right: 10px;
                cursor: pointer;
            }
        }
    }
}

.el-input {
    height: 47px;
}

.isPc {
    width: 400px;
}

.isMobile {
    width: 300px;
}
</style>