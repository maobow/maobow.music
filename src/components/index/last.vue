<template>
	<div id="mylike">
		<div class="centera">
			<div class="circlea">
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-bofang"></use>
				</svg>
				<span>随机播放全部</span>
			</div>
		</div>
		<img id="likeimg" src="../../common/image/logo_ch.svg" />
		<p id="txt">你还没有听过歌曲</p>
		<router-view></router-view>
	</div>
</template>

<script>
</script>



<style>
	.centera{
		width: 100%;
		height: 50px;
		/* background-color: burlywood; */
		margin-top: 15px;
	}
	.circlea{
		width: 40%;
		height: 40px;
		/* background: cadetblue; */
		margin: 0 auto;
		text-align: center;
		border-radius: 20px;
		border: 1px solid lightgray;
		color: grey;
	}
	.circlea svg{
		width: 20px;
		height: 20px;
		margin-top:10px;
	}
	#mylike img{
		opacity: .3;
		width: 50%;
		position: absolute;
		top: 55%;
		left: 25%;
	}
	#txt{
		/* position: absolute; */
		margin-top: 85%;
		text-align: center;
		color: grey;
	}
</style>
