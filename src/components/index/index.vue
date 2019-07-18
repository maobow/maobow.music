<template>
	<div class="head_title">
		<div class="fixed_t">
			<div class="fix_title">
				<router-link :to="'recommend'">
					<img id="headimg" src="../../common/image/logo_ch.svg" />
				</router-link>	
				<router-link :to="'like'">
					<svg class="icon icon_my" aria-hidden="true">
						<use xlink:href="#icon-ziyuan"></use>
					</svg>
				</router-link>
			</div>
		</div>
		<div class="nav">
			<mt-navbar v-model="selected">
				<mt-tab-item id="1" style="margin-bottom:0px"><router-link :to="'recommend'">推荐</router-link></mt-tab-item>
				<mt-tab-item id="2" style="margin-bottom:0px"><router-link :to="'ranking'">排行榜</router-link></mt-tab-item>
				<mt-tab-item id="3" style="margin-bottom:0px"><router-link :to="'singer'">歌手</router-link></mt-tab-item>
				<mt-tab-item id="4" style="margin-bottom:0px"><router-link :to="'search'">搜索</router-link></mt-tab-item>
			</mt-navbar>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data(){
		return {
			selected: '1'
		};
	}
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
.mint-navbar .mint-tab-item.is-selected{
	border-bottom: 3px solid #22D59C;
}
.fixed_t{
	width: 100%;
	height: 80px;
	background-color: white;
}
.fix_title{
	position: fixed;
	top: 0;
	background-color: white;
	width: 100%;
	z-index: 9;
}
.head_title {
	height: 80px;
	width: 100%;
	background-color: white;
}
#headimg {
	width: 33%;
	height: auto;
	margin: 20px 3% 20px;
}
.icon_my {
	float: right;
	font-size: 23px;
	margin-top: 6%;
	margin-right: 5%;
}

.nav a{
	text-decoration: none;
	color: gray;
	font-size: 16px;
}

</style>
