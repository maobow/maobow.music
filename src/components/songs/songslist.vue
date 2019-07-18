<template>
	<div>
		<div class="headd">
			<mt-header title="歌单">
				<router-link to="" slot="left">
					<mt-button icon="back" @click.native="$router.back(-1)"></mt-button>
				</router-link>
			</mt-header>
			<img id="headdimg" src="../../assets/img/recommend/hot_music2.jpg" />
			<h2>纳尼？这些华语歌手竟然会唱日语歌！</h2>
			<!-- <div class="author"> -->
				<img id="aimg" src="../../assets/img/songslist/g.gif" />
				<span>风吹草地</span>
			<!-- </div> -->
			<p id="play">播放量: 68.3 万</p>

			<router-link :to="'songs'">
				<div id="plays">
					<svg class="icon iconback" aria-hidden="true"><use xlink:href="#icon-bofang"></use></svg>
				</div>
			</router-link>
			
			<div id="centers">
				<div id="cenl">
					<span class="centerspan">歌单</span>
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
			<mt-cell title="Mr Lonely (孤独先生) (Live)" label="陈奕迅· DUO 陈奕迅2010演唱会">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="曖昧" label="杨丞琳· 暧昧（日本版）">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="遙かなる夢に～far away～ (遥远的梦 Far away)" label="BEYOND· 海阔天空">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="時の流れに身をまかせ (任时光从身边流逝) (日语)" label="邓丽君· 再见我的爱人 精选8">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="枯木" label="程璧· 诗遇上歌">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="あなたに赠る" label="林忆莲· Simple">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="月の夜 (月夜)" label="刘亦菲· All My Words">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="ファンタシ" label="谭咏麟· Fantasy">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="Wherever You Are" label="周渝民· 深情痞子 周渝民 仔仔精选 2001-2009">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="让我快乐" label="陈慧娴· BTB-千年恋人">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="bottom">
			<h3>歌单简介</h3>
			<p>歌单里都是我们所熟知的华语歌手，也许你听他们唱过很多中文歌，但唱起日文歌，也是如此地好听！</p>
		</div>
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
	font-size: 18px;
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
</style>
