<script setup>
import { ElMessage } from 'element-plus';

const props = defineProps({
    modelValue:Boolean,
    src:{
        type:String,
        required: true
    }
})

const emit = defineEmits([
    'update:modelValue',
    'upload'
])

const close = () => {
    emit('update:modelValue',false);
}
const copy = async() => {
    try{
        await navigator.clipboard.writeText(props.src);
        ElMessage.success('头像链接已复制');
    }catch{
        ElMessage.error('复制失败');
    }
}

const beforeUpload = (file) => {
    emit('upload',file)
    close();
    return false; //阻止el-upload默认上传
}

</script>

<template>
    <Teleport to="body">
        <div v-if="modelValue" class="mask" @click="close">
            <div class="viewer" @click.stop>
                <!-- 头像预览 -->
                <img :src="src" class="avatar"/>

                <!-- 操作区 -->
                 <div class="actions">
                    <el-button size="small" @click="copy">
                        复制链接
                    </el-button>

                    <el-upload 
                        :show-file-list="false"
                        :before-upload="beforeUpload"
                    >
                        <el-button size="small" type="primary">
                            上传头像
                        </el-button>
                    </el-upload>
                 </div>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
.mask{
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;
}

.viewer{
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.actions {
  margin-top: 16px;
  display: flex;
  gap: 12px;
  justify-content: center;
}
</style>
