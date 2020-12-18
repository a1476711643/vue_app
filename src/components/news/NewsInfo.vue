<template>
    <div>
        <h1>123-----{{this.$route.params.id}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 获取地址值上传的id
            id: this.$route.params.id
        }
    },
    created() {
        
    },
    methods: {
        
    },
}
</script>

<style lang="scss" scoped>
    
</style>