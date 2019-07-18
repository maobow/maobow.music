<template>
	<div id="rbox">
		<!-- 轮播图 -->
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,index) in roundList">
				<img v-bind:src="item.imgurl"/>
			</mt-swipe-item>
		</mt-swipe>
		<!-- 电台 -->
		<div class="list_s1">
			<p class="list_s_p">电台</p>
			<router-link :to="'songslist'">
				<div class="list_s_i" v-for="(item,index) in picList">
					<img v-bind:src="item.imgurl"/>
					<p>{{item.title}}</p>
				</div>
			</router-link>
		</div>
		<!-- 歌单 -->
		<div class="list_s2">
			<p class="list_s_p">热门歌单</p>
			<router-link :to="'songslist'">
				<div class="list_s_i" v-for="(item,index) in songList">
					<img v-bind:src="item.imgurl"/>
					<p>{{item.title}}</p>
				</div>
			</router-link>
		</div>
		<!-- 底部信息 -->
		<div class="rbottom">
			<p id="p_two">查看电脑版网页</p>
			<img id="bimg" src="../../common/image/logo_ch.svg" />
			<p class="p_one">Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
			<p class="p_one">联系电话：0755-86013388 QQ群：55209235</p>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				roundList:[
					{
						imgurl:require('../../assets/img/recommend/picRound1.jpg')
					},
					{
						imgurl:require('../../assets/img/recommend/picRound2.jpg')
					},
					{
						imgurl:require('../../assets/img/recommend/picRound3.jpg')
					},
					{
						imgurl:require('../../assets/img/recommend/picRound4.jpg')
					},
					{
						imgurl:require('../../assets/img/recommend/picRound5.jpg')
					}
				],
				picList:[
					{
						imgurl:require('../../assets/img/recommend/hot_radio1.jpg'),
						title:'热歌'
					},
					{
						imgurl:require('../../assets/img/recommend/signature_music.jpg'),
						title:'一人一首招牌曲'
					}
				],
				songList:[
					{
						imgurl:require('../../assets/img/recommend/hot_music1.jpg'),
						title:'催泪大杀器！盘点演唱会经典万人大合唱'
					},
					{
						imgurl:require('../../assets/img/recommend/hot_music2.jpg'),
						title:'纳尼？这些华语歌手竟然会唱日语歌！'
					},
					{
						imgurl:require('../../assets/img/recommend/hot_music3.jpg'),
						title:'精选内地十大民谣歌手代表作'
					},
					{
						imgurl:require('../../assets/img/recommend/hot_music4.jpg'),
						title:'2016billboard嘻哈榜'
					},
					{
						imgurl:require('../../assets/img/recommend/hot_music5.jpg'),
						title:'浮光掠影：ACG纯音乐赏析合辑'
					},
					{
						imgurl:require('../../assets/img/recommend/hot_music6.jpg'),
						title:'trip-hop单曲大推荐'
					}
				]
			}
		}
	}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
a {
	color: black;
	text-decoration: none;
}
.rbox {
	width: 100%;
	height: 150px;
	/* background-color: burlywood; */
}
.rbox img {
	width: 100%;
	height: auto;
}
.mint-swipe{
	height: 150px;
}
.mint-swipe img{
	width: 100%;
}
.list_s1 {
	/* margin: 10px; */
	/* background-color: cornsilk; */
	height: 250px;
	width: auto;
	margin: 10px 10px;
}
.list_s2 {
	/* margin: 10px; */
	/* background-color: skyblue; */
	height: 755px;
	width: auto;
	margin: 10px 10px;
}
.list_s_p {
	margin: 10px 0;
}
.list_s1 img {
	width: 100%;
	float: left;
}
.list_s2 img {
	width: 100%;
	float: left;
}
.list_s_i {
	width: 48.5%;
	height: 228px;
	float: left;
	margin: 2px;
	margin-bottom: 12px;
	background-color: white;
}
.list_s_i img {
	margin-bottom: 8px;
}
.list_s_i p {
	font-size: 15px;
}
.rbottom {
	width: 100%;
	height: 140px;
	background-color: #f2f2f2;
	text-align: center;
	padding-top: 25px;
}
.p_one {
	font-size: 10px;
}
#p_two {
	font-size: 14px;
	/* padding-top: 20px; */
}
#bimg {
	width: 84px;
	height: auto;
	margin: 15px auto;
}
</style>
