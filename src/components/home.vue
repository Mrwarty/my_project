<template>
	<div class="">
		<el-button type="primary" @click="getUrlTest">主要按钮</el-button>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your element-ui App',
				input:'',
			}
		},
		methods: {
			init() {
				console.log(1);
			},
			getUrlTest(){
				const _=this;
				_.HttpAjax('post','get/user',{id:'1123'},(res)=>{
					
				});
			}
		},
		created() {
			const _ = this;
			_.init();
		},
		mounted() {

		}
	}
</script>

<!-- 添加 "scoped"属性  表示当前的css只会再当前template执行 -->
<style scoped lang="less">

</style>