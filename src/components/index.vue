<template>
	<div class="home">
		<div class="nav-menu">
			<el-menu
					default-active="1-1"
				>
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>系统管理</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="1-1">选项1</el-menu-item>
				<el-menu-item index="1-2">选项2</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>系统管理</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>系统管理</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="3-1">选项1</el-menu-item>
				<el-menu-item index="3-2">选项2</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</div>
		<div class="content-body">
			<el-button type="primary" @click="getUrlTest">主要按钮</el-button>
			<el-input v-model="input" placeholder="请输入内容"></el-input>
			<el-switch v-model="switch1" active-text="按月付费" inactive-text="按年付费"></el-switch>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your element-ui App',
				input:'',
				switch1:false
			}
		},
		methods: {
			init() {
				console.log(1)
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
	.home{
		height: 100%;
		display: flex;
		align-items: flex-start;
		.nav-menu{
			width: 200px;
			height: 100%;
			flex: 0 0 auto;	
			.el-menu{
				height: 100%;
			}
		}
		.content-body{
			flex: 1 1 auto;
			height: 100%;
		}
	}
</style>