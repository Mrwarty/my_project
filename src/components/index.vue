<template>
	<div class="hello">
		<el-row>
			<el-col :span="3">
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
			</el-col>
			<el-col :span="21">
				<el-button type="primary" @click="getUrlTest">主要按钮</el-button>
				<el-input v-model="input" placeholder="请输入内容"></el-input>
				<el-switch v-model="switch1" active-text="按月付费" inactive-text="按年付费"></el-switch>
			</el-col>
		</el-row>
	
		
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

</style>