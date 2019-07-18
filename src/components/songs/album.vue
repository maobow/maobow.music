<template>
	<div>
		<div class="headd">
			<mt-header title="专辑">
				<router-link to="" slot="left">
					<mt-button icon="back" @click.native="$router.back(-1)"></mt-button>
				</router-link>
			</mt-header>
			<img id="headdimg" src="../../assets/img/songslist/album.jpg" />
			<h2>Watch Me</h2>
			<h2>陈慧琳</h2>
			<p id="play">播放量: 68.3 万</p>

			<router-link :to="'songs'">
				<div id="plays">
					<svg class="icon iconback" aria-hidden="true"><use xlink:href="#icon-bofang"></use></svg>
				</div>
			</router-link>
			
			<div id="centers">
				<div id="cenl">
					<span class="centerspan">专辑歌曲</span>
					<span class="centerspan"> 共8首</span>
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
			<mt-cell title="尾站天国" label="陈慧琳">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="花见小路" label="陈慧琳">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="Be With You" label="陈慧琳">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="冷淡" label="陈慧琳">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="打字机" label="陈慧琳">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="答应你会幸福的" label="陈慧琳">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="做自己的太阳" label="陈慧琳">
				 <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-xiazai"></use>
				</svg>
			</mt-cell>
			</router-link>
		</div>
		<div id="uldiv">
			<router-link :to="'songs'">
			<mt-cell title="也许我一直不懂爱情" label="陈慧琳">
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
