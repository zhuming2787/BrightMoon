<script setup>
import { Right,Back } from '@element-plus/icons-vue';


</script>

<template>
    <div class="window">
        <header>
            <el-icon><Back></Back></el-icon> 返回
        </header>

        <main>
            <!-- <el-icon><Back /></el-icon> -->
            <el-card class="card" shadow="always">
                <!-- 这里由后端传来数据渲染上去 -->
                <h1>测试文章</h1>
                <!--  -->
                <p>测试内容...</p>
            </el-card>
            <!-- <el-icon><Right /></el-icon> -->
        </main>

        <footer>
            <el-card class="comment">
                这里是评论区
            </el-card>
        </footer>
        
    </div>
</template>

<style lang="scss" scoped>
header{
    width: 80%;
    display: flex;
    justify-content: start;
    align-items: center;
}

main{
    width: 80%;
}

footer{
    width: 80%;
    
    .comment{
        min-height: 300px;
    }
}

.window{
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
}

.card{
    min-height: 100vh;
    margin-bottom : 30px;
}
</style>

