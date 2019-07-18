<template>
	<div>
		<div class="headd">
			<mt-header title="歌手">
				<router-link to="" slot="left">
					<mt-button icon="back" @click.native="$router.back(-1)"></mt-button>
				</router-link>
			</mt-header>
			<img id="headdimg" src="../../assets/img/songslist/T002R300x300M000002ugSOe1kQxlB.jpg" />
			<h2>陈慧琳</h2>
			
			<p id="play">播放量: 68.3 万</p>
 
			<router-link :to="'songs'">
				<div id="plays">
					<svg class="icon iconback" aria-hidden="true"><use xlink:href="#icon-bofang"></use></svg>
				</div>
			</router-link>
			
			<div id="centers">
				<div id="cenl">
					<span class="centerspan">热门</span>
					<span class="centerspan"> 共10首</span>
				</div>
				<div id="cenr">
					<span class="centerspan">收藏</span>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-xin"></use>
					</svg>
				</div>
			</div>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="记事本" label="陈慧琳 · 爱我不爱">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="花花宇宙" label="陈慧琳 · BPM DANCE COLLECTION">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="Love Paradise" label="陈慧琳 · sylish index">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="都是你的错" label="陈慧琳 · 继续爱我">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="不如跳舞" label="陈慧琳 · 飞吧">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="哆啦A梦" label="陈慧琳 · In The Party">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="制造浪漫" label="陈慧琳/郑中基 · 体会">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="希望(国语)" label="陈慧琳 · 我是阳光的">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="不得了" label="陈慧琳 · 闪亮每一天Shining">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="今生你作伴" label="陈慧娴 · 我是阳光的">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="morem"><span>更多精彩内容 尽在QQ音乐</span></div>
		<router-view></router-view>
	</div>
</template>

<script></script>

<style>
a{
	text-decoration: none;
	color: black;
}
.mint-header{
	background-color: #22D59C;
	height: 45px;
	font-size:16px;
}
.headd {
	text-align: center;
	
}
#headdimg {
	width: 50%;
	border-radius: 18px;
	margin-top: 30px;
	box-shadow: 0 7px 13px rgba(0, 0, 0, 0.21);
}
.headd h2 {
	margin: 1.12rem 0rem;
	font-size: 20px;
	color: #121212;
	font-weight: normal;
}
#aimg {
	width: 6%;
	border-radius: 50%;
}
#play {
	font-size: 14px;
	color: gray;
	margin: 10px 0;
}
#plays {
	margin: 0 auto;
	width: 50%;
	height: 40px;
	line-height: 40px;
	border-radius: 32px;
	box-shadow: 0 6px 32px rgba(24, 213, 156, 0.5);
	background-color: #22d59c;
	color: white;
	font-size: 21px;
}
.iconback{
	font-size: 25px;
	line-height: 20px;
}
#cenl{
	float: left;
}
#cenr{
	float: right;
}
.centerspan{
	font-size: 14px;
	color: gray;
}
#centers{
	width: 95%;
	/* height: 100px; */
	/* background-color: burlywood; */
	margin: 20px 10px;
	overflow: hidden;
}
.mint-cell-text{
	font-size: 14px;
}
.mint-cell{
	min-height: 55px;
}
.mint-cell-label{
	margin-top: 10px;
}
#bottom{
	margin: 30px 10px;
}
#bottom h3{
	font-weight: normal;
	font-size: 18px;
	color: #121212;
}
#bottom p{
	font-size: 14px;
	color: #808080;
	margin: 10px 0px;
	line-height: 20px;
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
</style>
