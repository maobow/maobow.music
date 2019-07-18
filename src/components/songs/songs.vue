<template>
	<div>
		<mt-header title="歌曲">
			<router-link to="" slot="left"><mt-button icon="back" @click.native="$router.back(-1)"></mt-button></router-link>
		</mt-header>
		<div id="songbg" @click="change()">
			<audio src="./src/common/audio/notebook.mp3" id="music" controls="controls" preload hidden></audio>
			<img id="bgimg" src="../../assets/img/songslist/T002R300x300M000002ugSOe1kQxlB.jpg" />
			<transition enter-actve-class="animated fadeIn" leave-active-class="animated fadeOut">
				<img v-bind:class="roundp" v-if="show" id="roundimg" src="../../assets/img/songslist/T002R300x300M000002ugSOe1kQxlB.jpg" />
			</transition>
			<div id="lyric" v-if="lyric" >
				<ul v-for="(item,index) in list">
					<li>{{item.title}}</li>
				</ul>
			</div>
		</div>
		<div id="iconp">
			<svg class="icon icona" aria-hidden="true" @click="play()">
				<use xlink:href="#icon-bofang" v-show="iconplay"></use>
				<use xlink:href="#icon-plus-pause" v-show="!iconplay"></use>
			</svg>
			<svg class="icon icona" aria-hidden="true"><use xlink:href="#icon-shoucang"></use></svg>
		</div>
		<div id="downloads"><span>免费下载歌曲</span></div>
		<p id="songa">歌手与专辑</p>
		<router-link :to="'singerdetails'">
			<mt-cell title="歌手 陈慧琳" is-link><img class="cellimg" slot="icon" src="../../assets/img/songslist/T001R150x150M000000ynT3J1Hrdp1.jpg" /></mt-cell>
		</router-link>
		<router-link :to="'album'">
			<mt-cell title="专辑 Grace(日本版)" is-link><img class="cellimg" slot="icon" src="../../assets/img/songslist/T002R300x300M000002ugSOe1kQxlB.jpg" /></mt-cell>
		</router-link>
		<p id="songa">最新评论</p>
		<mt-cell title="丿 2018-09-09 18:24">
			<img class="cellimg1" slot="icon" src="../../assets/img/songslist/g.jpg" />
			<span>
				12
				<svg class="icon iconzan" aria-hidden="true"><use xlink:href="#icon-zan"></use></svg>
			</span>
		</mt-cell>
		<p id="comment">数到三就不哭</p>
		<div id="more">
			<span>
				查看更多评论
				<svg class="icon incom" aria-hidden="true"><use xlink:href="#icon-gengduo"></use></svg>
			</span>
		</div>
		<div id="morem"><span>更多精彩内容 尽在QQ音乐</span></div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			iconplay: true,
			roundp: '',
			show: true,
			lyric: false,
			list:[
				{
					title:'记事本'
				},
				{
					title:'陈慧琳'
				},
				{
					title:'翻开随身携带的记事本'
				},
				{
					title:'写着许多事都是关於你'
				},
				{
					title:'你讨厌被冷落'
				},
				{
					title:'习惯被守候'
				},
				{
					title:'寂寞才找我'
				},
				{
					title:'我看见自己写下的心情'
				}
			]
		};
	},
	methods: {
		play() {
			//根据iconplay判断此时的排序是升序还是降序
			//排序方式
			//对iconplay对状态进行取反
			this.iconplay = !this.iconplay;
			if (this.roundp == 'Rotation') {
				this.roundp = '';
				music.pause();
			} else {
				this.roundp = 'Rotation';
				music.play();
				//从0开始播放
				// music.currentTime=0 
			}
		},
		change() {
			this.show = !this.show;
			this.lyric = !this.lyric;
		}
	}
};
</script>

<style>
a {
	text-decoration: none;
}
.mint-header {
	background-color: #22d59c;
	height: 45px;
	font-size: 16px;
}
#songbg {
	width: 100%;
}
#bgimg {
	width: 100%;
	opacity: 0.06;
}
#roundimg {
	position: absolute;
	top: 15%;
	left: 15%;
	width: 70%;
	border-radius: 50%;
}
#iconp {
	text-align: center;
	/* background-color: antiquewhite; */
	font-size: 35px;
	letter-spacing: 20px;
	margin: 15px 0;
}
#downloads {
	margin: 20px auto;
	width: 60%;
	height: 40px;
	line-height: 40px;
	border-radius: 32px;
	/* box-shadow: 0 6px 32px rgba(24, 213, 156, 0.5); */
	background-color: #22d59c;
	color: white;
	font-size: 18px;
	text-align: center;
	/* border: 1px solid lightgrey; */
}
#more {
	margin: 20px auto;
	width: 60%;
	height: 40px;
	line-height: 40px;
	border-radius: 32px;
	/* box-shadow: 0 6px 32px rgba(24, 213, 156, 0.5); */
	/* background-color: #22d59c; */
	color: darkgrey;
	font-size: 14px;
	text-align: center;
	border: 1px solid lightgrey;
}
#songa {
	text-align: center;
	margin-bottom: 20px;
}
.cellimg {
	width: 20%;
	margin: 10px;
}
.mint-cell-wrapper {
	font-size: 14px;
	color: gray;
}
.cellimg1 {
	width: 10%;
}
#comment {
	margin-left: 15%;
	color: gray;
}
.iconzan {
	font-size: 28px;
}
.incom {
	color: darkgrey;
}
#morem {
	margin: 35px auto;
	width: 75%;
	height: 40px;
	line-height: 40px;
	border-radius: 32px;
	/* box-shadow: 0 6px 32px rgba(24, 213, 156, 0.5); */
	background-color: #22d59c;
	color: white;
	font-size: 18px;
	text-align: center;
	/* border: 1px solid lightgrey; */
}
#lyric {
	position: absolute;
	top: 12%;
	/* height: 40%; */
	width: 100%;
	text-align: center;
	/* background-color: antiquewhite; */
	line-height: 40px;
	color: gray;
}
@-webkit-keyframes rotation {
	from {
		-webkit-transform: rotate(0deg);
	}

	to {
		-webkit-transform: rotate(360deg);
	}
}

.Rotation {
	-webkit-transform: rotate(360deg);
	animation: rotation 15s linear infinite;
	-moz-animation: rotation 15s linear infinite;
	-webkit-animation: rotation 15s linear infinite;
	-o-animation: rotation 15s linear infinite;
}
</style>
