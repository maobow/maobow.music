<template>
	<div id="listbox">
		<div class="list_box1">
			<ul>
				<li v-for="(item,index) in rankList">
					<router-link :to="'songslist'">
					<div class="list_img">
						<img v-bind:src="item.rankimg"/>
					</div>
					<div class="list_box2">
						<h3 class="topic_tit">{{item.title}}</h3>
						<svg class="icon list_icon" aria-hidden="true">
							<use xlink:href="#icon-gengduo"></use>
						</svg>
						
						<div class="list_songs" v-for="(i,index) in item.detail_info">
							<p class="list_two">
								{{index+1}}
								<span class="list_one">{{i.song}}</span>
								<span class="list_two"> - {{i.singer}}</span>
							</p>
						</div>
					</div>
					</router-link>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				rankList:[
					{
						rankimg:require('../../assets/img/ranking/popular_music.jpg'),
						title:'巅峰榜 · 流行指数',
						detail_info:[
							
								{
									'song':'我的朋友',
									'singer':'TFBOYS'
								},
								{
									'song':'独角戏 (Live)',
									'singer':'薛之谦'
								},
								{
									'song':'醒来 (Live)',
									'singer':'薛之谦/岳云鹏'
								}
							
						]
					},
					{
						rankimg:require('../../assets/img/ranking/hot_popularmusic.jpg'),
						title:'巅峰榜 · 热歌',
						detail_info:[
							
								{
									'song':'缘分一道桥',
									'singer':'王力宏/谭维维'
								},
								{
									'song':'来自天堂的魔鬼',
									'singer':'G.E.M. 邓紫棋'
								},
								{
									'song':'木偶人',
									'singer':'薛之谦'
								}
							
						]
					},
					{
						rankimg:require('../../assets/img/ranking/young_music.jpg'),
						title:'巅峰榜 · 新歌',
						detail_info:[
							
								{
									'song':'木偶人',
									'singer':'薛之谦'
								},
								{
									'song':'放个大招给你看',
									'singer':'永彬Ryan.B'
								},
								{
									'song':'我的朋友',
									'singer':'薛之谦'
								}
							
						]
					},
					{
						rankimg:require('../../assets/img/ranking/rap_music.jpg'),
						title:'说唱榜',
						detail_info:[
							
								{
									'song':'放个大招给你看',
									'singer':'永彬Ryan.B'
								},
								{
									'song':'心如止水',
									'singer':'Ice paper'
								},
								{
									'song':'Papillon',
									'singer':'王嘉尔'
								}
							
						]
					},
					{
						rankimg:require('../../assets/img/ranking/electronic_music.jpg'),
						title:'电音榜',
						detail_info:[
							
								{
									'song':'Papillon(remix)',
									'singer':'王嘉尔'
								},
								{
									'song':'On My Way (Da Tweekaz Remix)',
									'singer':'Ice paper'
								},
								{
									'song':'归 Way Back Home',
									'singer':'CORSAK'
								}
							
						]
					},
					{
						rankimg:require('../../assets/img/ranking/net_music.jpg'),
						title:'巅峰榜 · 网络歌曲',
						detail_info:[
							
								{
									'song':'爱情错觉',
									'singer':'半吨兄弟'
								},
								{
									'song':'情深深雨濛濛',
									'singer':'杨胖雨'
								},
								{
									'song':'我走后',
									'singer':'小咪'
								}
							
						]
					},
					{
						rankimg:require('../../assets/img/ranking/mainland_music.jpg'),
						title:'巅峰榜 · 内地',
						detail_info:[
							
								{
									'song':'木偶人',
									'singer':'薛之谦'
								},
								{
									'song':'放个大招给你看',
									'singer':'永彬Ryan.B'
								},
								{
									'song':'烽火成书',
									'singer':'毛不易'
								}
							
						]
					},
					{
						rankimg:require('../../assets/img/ranking/HK_music.jpg'),
						title:'香港地区榜',
						detail_info:[
							
								{
									'song':'相信你的人',
									'singer':'陈奕迅'
								},
								{
									'song':'兄弟不怀疑',
									'singer':'刘德华/古天乐'
								},
								{
									'song':'FEEL THE HEAT',
									'singer':'容祖儿/张敬轩'
								}
							
						]
					},
					
					{
						rankimg:require('../../assets/img/ranking/kpop_music.jpg'),
						title:'巅峰榜 · 韩国',
						detail_info:[
							
								{
									'song':'불나방',
									'singer':'殷志源/Blue.D'
								},
								{
									'song':'Snapping',
									'singer':'金请夏'
								},
								{
									'song':'HOOLIGAN',
									'singer':'殷志源/MINO(宋旻浩)'
								}
							
						]
					},
					{
						rankimg:require('../../assets/img/ranking/jpop_music.jpg'),
						title:'巅峰榜 · 日本',
						detail_info:[
							
								{
									'song':'キスだけで',
									'singer':'- 菅田将暉'
								},
								{
									'song':'紅蓮華',
									'singer':'LiSA (織部里沙)'
								},
								{
									'song':'海の幽霊 (海之幽灵)',
									'singer':'米津玄師 (よねづ けんし)'
								}
							
						]
					}
					
				]
			}
		}
	}
</script>
<style>
.list_box1 {
	width: 100%;
	height: 900px;
	margin: 10px 0;
	/* background-color: darkseagreen;/ */
}
.list_box1 ul{
	text-decoration: none;
	list-style: none;
	width: 100%;
	height: 800px;
	
}
.list_box1 ul li {
	margin: 10px 10px;
	/* background-color: coral; */
	width: 97%;
	height: 100px;
}
.list_img {
	width: 30%;
	height: 100px;
	/* background-color: blanchedalmond; */
	float: left;
}
.list_img img {
	height: 100px;
}
.list_box2 {
	width: 70%;
	height: 100px;
	/* background-color: darkgoldenrod; */
	float: left;
	position: relative;
}
.topic_tit {
	font-size: 16px;
	color: #000;
	font-weight: 400;
	margin-bottom: 8px;
}
.list_one{
	font-size: 14px;
	color: #000000;
}
.list_two{
	font-size: 14px;
	color: gray;
}
.list_icon{
	position: absolute;
	right: 8%;
    top: 50%;
    width: 20px;
}
.list_songs{
	width: 85%;
	height: auto;
	margin-top: 5px;
	/* background-color: darkorange; */
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
</style>
