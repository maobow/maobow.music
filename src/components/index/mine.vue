<template>
	<div id="header">
		<router-link to="/" slot="left">
			<svg class="icon backicon" aria-hidden="true">
				<use xlink:href="#icon-fanhui"></use>
				</svg>
		</router-link>

		<div id="headerc">
			<div class="likeh">
				<router-link :to="'like'">我喜欢的</router-link>
			</div>
			<div class="likeh">
				<router-link :to="'last'">最近听的</router-link>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script></script>

<style>
#header {
	width: 100%;
	height: 42px;
	background-color: #22D59C;
}
#headerc {
	width: 55%;
	height: 42px;
	position: relative;
	top: -20px;
	margin: 0px auto;
	/* background-color: coral; */
	
}
.mint-button--normal {
	padding: 0px 18px;
}
.backicon{
	position: relative;
	top: 10px;
	width: 16px;
	height: 16px;
	left: 10px;
	color: white;
}
.likeh{
	width: 49%;
	height: 42px;
	/* background-color: lightgray; */
	float: left;
	text-align: center;
	line-height: 42px;
}
.likeh a{
	text-decoration: none;
	color: white;
}

</style>
