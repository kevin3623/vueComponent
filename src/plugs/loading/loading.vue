<template>
    <div class="loading" v-show="isLoading">
        <div>
            <img src="./loading.gif" alt="">
            <p>加载中</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isLoading: false
        }
    }
}
</script>
<style scoped>
.loading{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.loading img{
    width: 33px;
}
</style>
