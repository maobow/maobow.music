<template>
	<div id="inp_box">
		<div id="inp_sbox"><mt-search v-model="value" placeholder="搜索歌曲、歌单、专辑"></mt-search></div>
		<div id="tag_box">
			<p>热门搜索</p>
			<div id="btnbox" v-for="(item,index) in list">
				<mt-button plain>{{item.title}}</mt-button>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	data(){
		return{
			value:"",
			list:[
				{
					'title':'乐队的夏天'
				},
				{
					'title':'VALDER FIELDS'
				},
				{
					'title':'我们的爱'
				},
				{
					'title':'EAST OF EDEN'
				},
				{
					'title':'长的丑活得久'
				},
				{
					'title':'周杰伦'
				},
				{
					'title':'乐队的夏天'
				},
				{
					'title':'天下有情人'
				},
				{
					'title':'中国新说唱'
				}
			]
		}
	}
}
</script>

<style>
.mint-searchbar-cancel {
	color: #555555;
}
.mint-searchbar {
	background-color: #f2f2f2;
}
.mint-searchbar-inner .mintui-search {
	font-size: 16px;
}
.mint-search {
	height: auto;
}
#tag_box {
	background-color: white;
	height: 300px;
	width: 100%;
	margin-top: 15px;
}
#tag_box p{
	margin-bottom: 10px;
}
.mint-button--normal {
	padding: 8px 12px;
	border-radius: 20px;
	margin-right: 5px;
	margin-bottom: 10px;
}
.mint-button {
	font-size: 14px;
}
#br {
	
}
#btnbox {
	margin-left: 10px;
	float: left;
}
#tag_box p {
	padding-left: 15px;
}
</style>
