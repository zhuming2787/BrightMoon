<script setup>
import { ref, onMounted, onBeforeUnmount, watch, reactive } from 'vue'
import Vditor from 'vditor'
import 'vditor/dist/index.css'
// 引入Element Plus表单相关组件
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElMessage, ElSwitch } from 'element-plus'
import { filterRichText } from '@/utils/xssFilter'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const editorRef = ref(null)
let vditor = null
const visibleForm = ref(false);
// 补充表单Ref用于验证
const formRef = ref(null)

const form = reactive({
  title: '', // 标题
  summary: '', // 总结
  content: '', // 内容（关联编辑器内容）
  category_id: '', // 分类id
  status: '' // 状态 发布/草稿
})

// 初始化默认值就可以了
const ruleForm = reactive({
  title: '默认标题',
  category: '默认类型',
  tags: ['Java'],
  status: 'draft',
  delivery: false, // 补充发布开关的初始值
  content: '默认内容' // 内容字段
})

const formRules = reactive({
  title:[
    { required: true, message: '请输入标题', trigger: 'blur' },
    { min: 2, max: 50, message: '标题长度在2-50个字符', trigger: 'blur' }
  ],
  category:[
    { required: true, message: '请选择分类', trigger: 'change' }
  ],
  tags:[
    { required: true, message: '请至少选择一个标签', trigger: 'change' },
    { type: 'array', min: 1, message: '请至少选择一个标签', trigger: 'change' }
  ],
  status:[
    { required: true, message: '请选择状态', trigger: 'change' }
  ],
  content: [
    { required: true, message: '请输入内容', trigger: 'blur' }
  ]
})

onMounted(() => {
  const safeInitValue = filterRichText(props.modelValue || '');

  // 初始化Vditor
  vditor = new Vditor(editorRef.value, {
    mode: 'ir',
    height: 600,
    width: 800,
    cache: { enable: true, id: "notes" },
    value: safeInitValue,
    xss:{
      enable:true,
      // 自定义白名单：只保留业务必需的标签/属性，最小化风险
      whiteList: {
        p: ['style', 'class'],
        h1: ['style'],
        h2: ['style'],
        h3: ['style'],
        img: ['src', 'alt', 'width', 'height'], // 仅允许合法图片属性，禁止onerror等
        a: ['href', 'target', 'rel'], // 禁止a标签的onclick等事件
        code: ['class'],
        pre: ['class'],
        br: [],
        ul: ['class'],
        li: ['class'],
        blockquote: ['style'],
      },
      cssFilter: (css) => css.replace(/expression\(.*?\)|javascript:/gi, ''),
    },
    input: (value) => {
      const safeValue = filterRichText(value);
      emit('update:modelValue', safeValue);
      ruleForm.content = safeValue;
    },
    render:(html) => {
      return filterRichText(html);
    }
  });
});
// 监视
watch(
  () => props.modelValue,
  (val) => {
    if (!vditor) return
    if (val !== vditor.getValue()) {
      vditor.setValue(val)
      form.content = val // 同步到表单
      ruleForm.content = val
    }
  }
)

// 摧毁vditor
onBeforeUnmount(() => {
  vditor?.destroy()
})

// 打开表单
const openForm = () => {
  visibleForm.value = true;
  // 打开表单时同步编辑器最新内容到表单
  ruleForm.content = vditor?.getValue() || ''
}

// 提交表单
const handleForm = async () => {
  if (!formRef.value) return
  try{
    await formRef.value.validate()
    // 表单验证通过，执行提交逻辑
    console.log('提交的数据：', ruleForm)
    ElMessage.success('文章提交成功！')
    visibleForm.value = false // 关闭弹窗
    // 重置表单
    formRef.value.resetFields()
  }catch(err){
    ElMessage.error('表单填写不完整，请检查！')
    console.error('表单验证失败：', err)
  }
}

// 关闭表单弹窗
const closeForm = () => {
  visibleForm.value = false
  formRef.value?.resetFields() // 重置表单
}


// 恢复到默认值
const handleReset = () => {
	if (!formRef.value) return;
	// 核心：调用resetFields，自动恢复到表单初始化时的默认值
	formRef.value.resetFields();
	ElMessage.success('表单已重置为默认值');
}


// 打开草稿箱
const openNotes = () => {
	// 1、从本地存储中获取列表，然后渲染一个列表
	// 2、然后选择一个列表后，将这个列表渲染到目前正在修改的地方
	// 3、如果
}
</script>

<template>
  <div class="editor-container">
	<div class="editor-button">
		<el-button plain class="submit-btn" @click="openForm">
      		提交文章
		</el-button>
		<el-button plain class="submit-btn" @click="openNotes">
			草稿箱
		</el-button>
	</div>
    <div class="editor-wrapper">
      <div class="editor" ref="editorRef" />
    </div>
  </div>

  <!-- 表单弹窗：优化结构+交互 -->
  <Teleport to="body">
    <div v-if="visibleForm" class="modal-overlay" @dblclick="closeForm">
      <div class="modal-content" @dblclick.stop> <!-- 阻止点击内容区关闭弹窗 -->
        <!-- 弹窗头部：标题+关闭按钮 -->
        <div class="modal-header">
          <h3 class="modal-title">发布文章</h3>
          <el-button 
            icon="el-icon-close" 
            circle 
            plain 
            class="close-btn"
            @click="closeForm"
          />
        </div>
        
        <el-form
          ref="formRef"
          :model="ruleForm"
          :rules="formRules"
          label-width="80px"
          class="article-form"
        >
          <!-- 标题 -->
          <el-form-item label="标题" prop="title">
            <el-input 
              v-model="ruleForm.title" 
              placeholder="请输入文章标题（2-50字）"
              class="form-input"
            />
          </el-form-item>

          <!-- 分类 -->
          <el-form-item label="分类" prop="category">
            <el-select 
              v-model="ruleForm.category" 
              placeholder="请选择文章分类"
              class="form-select"
            >
              <el-option label="前端" value="前端"/>
              <el-option label="后端" value="后端"/>
            </el-select>
          </el-form-item>

          <!-- 标签 -->
          <el-form-item label="标签" prop="tags">
            <el-select
              v-model="ruleForm.tags"
              multiple
              placeholder="请选择标签（可多选）"
              class="form-select"
              style="width: 100%"
            >
              <el-option label="Vue" value="Vue" />
              <el-option label="React" value="React" />
              <el-option label="Node.js" value="Node.js" />
              <el-option label="Java" value="Java" />
              <el-option label="Python" value="Python" />
            </el-select>
          </el-form-item>

          <!-- 发布状态开关 -->
          <el-form-item label="发布" prop="delivery">
            <el-switch 
              v-model="ruleForm.delivery" 
              active-text="已发布" 
              inactive-text="未发布"
              active-color="#67c23a"
              inactive-color="#909399"
            />
          </el-form-item>

          <!-- 内容 -->
          <el-form-item label="内容" prop="content">
            <el-input 
              v-model="ruleForm.content" 
              type="textarea"
              placeholder="请输入文章内容（同步编辑器内容）"
              rows="6"
              class="form-textarea"
            />
          </el-form-item>

          <!-- 表单操作按钮 -->
          <el-form-item class="form-actions">
			<el-button type="danger"  @click="handleReset">重置</el-button>
            <el-button type="default" @click="closeForm">取消</el-button>
            <el-button type="primary" @click="handleForm">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>

// 编辑器容器整体样式
.editor-container { 
  height: 100%;
  width: 100%;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .editor-button{
	display: flex;
	align-items: center;
	justify-content: center;
  }
  // 提交按钮样式优化
  .submit-btn {
    width: 80%;
    align-self: center;
    height: 44px;
    font-size: 16px;
    margin-bottom: 24px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    background-color: var(--primary-light);
    transition: var(--transition-base);

    &:hover {
      background-color: var(--primary-color);
      color: var(--bg-primary);
      transform: translateY(-2px);
      box-shadow: var(--shadow-light);
    }
  }

  // 编辑器容器
  .editor-wrapper {
    width: 80% !important;
    align-self: center;
    box-sizing: border-box;
  }

  .editor {
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    width: 100% !important;
    background-color: var(--bg-primary);
    box-shadow: var(--shadow-light);
    transition: var(--transition-base);

    &:hover {
      box-shadow: var(--shadow-medium);
    }
  }
}

// 弹窗遮罩层
.modal-overlay {
  position: fixed;
  z-index: 999;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

// 弹窗内容区
.modal-content {
  width: 100%;
  max-width: 600px;
  background-color: var(--bg-primary);
  border-radius: 10px;
  box-shadow: var(--shadow-medium);
  overflow: hidden;
  animation: slideUp 0.3s ease;
  padding-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  // 弹窗头部
  .modal-header {
	width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid var(--bg-tertiary);
    background-color: var(--primary-light);


	&::before{
		content: '';
	}

    .modal-title {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-color);
    }

    .close-btn {
      width: 16px;
      height: 16px;
      padding: 0;
      color: var(--text-secondary);
      transition: var(--transition-base);

      &:hover {
        color: var(--primary-color);
        background-color: var(--bg-secondary);
      }
    }
  }
}

// 文章表单样式
.article-form {
  width: 100%;
  padding: 24px 20px;
  color: var(--text-primary);
  background-color: var(--bg-primary);

  // 表单项间距
  :deep(.el-form-item) {
    margin-bottom: 20px;

    &.form-actions {
      margin-bottom: 0;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }
  }

  // 标签文本样式
  :deep(.el-form-item__label) {
    font-weight: 500;
    color: var(--text-secondary);
  }

  // 输入框样式
  .form-input,
  .form-select {
    :deep(.el-input__wrapper) {
      border-radius: var(--radius-sm);
      border-color: var(--border-color);
      transition: var(--transition-base);

      &:hover {
        border-color: var(--primary-color);
      }

      &:focus-within {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
      }
    }

    :deep(.el-input__placeholder) {
      color: var(--text-placeholder);
    }
  }

  // 文本域样式
  .form-textarea {
    :deep(.el-textarea__wrapper) {
      border-radius: var(--radius-sm);
      border-color: var(--border-color);
      transition: var(--transition-base);

      &:hover {
        border-color: var(--primary-color);
      }

      &:focus-within {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
      }
    }
  }

  // 开关样式
  :deep(.el-switch) {
    margin-top: 4px;

    :deep(.el-switch__label) {
      font-size: 12px;
    }
  }

  // 按钮样式
  :deep(.el-button) {
    padding: 10px 20px;
    border-radius: var(--radius-sm);
    transition: var(--transition-base);

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-light);
    }
  }
}

// 动画效果
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 响应式适配
@media (max-width: 768px) {
  .editor-container .editor-wrapper,
  .editor-container .submit-btn {
    width: 95% !important;
  }

  .modal-content {
    width: 95%;
  }

  .article-form {
    padding: 16px 12px;
  }

  :deep(.el-form-item) {
    margin-bottom: 16px;
  }
}
</style>