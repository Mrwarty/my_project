<template>
	<div class="home">
		<div class="nav-menu">
			<div class="nav-menu1">
				<el-menu
						default-active="1-1" 
						unique-opened
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
					<el-submenu index="4">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>系统管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="4-1">选项1</el-menu-item>
							<el-menu-item index="4-2">选项2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</div>
		</div>
		<!-- 这个是主题内容 -->
		<div class="content-body">
			<!-- 头部导航 -->
			<div class="nav-header">
				这个是头部哈哈哈哈
			</div>
			<!-- 主体内容 -->
			<div class="content-item">
				<el-tabs type="card" value="1">
					<el-tab-pane label="首页" name="1">
					</el-tab-pane>
					<el-tab-pane label="系统管理" closable name="2">
					</el-tab-pane>
				</el-tabs>
				<!-- 二级路由展示位置 -->
				<keep-alive>
					<router-view/>
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				
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
	.home{
		height: 100%;
		display: flex;
		align-items: flex-start;
		.nav-menu{
			width: 200px;
			height: 100%;
			flex: 0 0 auto;	
			overflow: hidden;
			.el-menu{
				height: 100%;
			}
			.nav-menu1{
				height: 100%;
				width:217px;
				overflow-y:scroll;
			}
		}
		.content-body{
			flex: 1 1 auto;
			height: 100%;
			.nav-header{
				height: 70px;
				border-bottom: solid 1px red;
			}
			.content-item{
				height: calc(100% - 70px  - 20px - 2px);
				padding: 10px; 
				border-bottom:solid 1px red;
			}
		}
	}
</style>