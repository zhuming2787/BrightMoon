<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import Vditor from 'vditor'
import 'vditor/dist/index.css'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const editorRef = ref(null)
let vditor = null

onMounted(() => {
  vditor = new Vditor(editorRef.value, {
    height: 500,
    mode: 'ir',
    cache: { enable: false },
    value: props.modelValue,
    input: (value) => {
      emit('update:modelValue', value)
    }
  })
})

watch(
  () => props.modelValue,
  (val) => {
    if (!vditor) return

    if (val !== vditor.getValue()) {
      vditor.setValue(val)
    }
  }
)

onBeforeUnmount(() => {
  vditor?.destroy()
})
</script>

<template>
  <div ref="editorRef" />
</template>
