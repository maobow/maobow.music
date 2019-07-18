import VueRouter from 'vue-router'
import index from '../components/index/index.vue'
import recommend from '../components/index/recommend.vue'
import ranking from '../components/index/ranking.vue'
import search from '../components/index/search.vue'
import mine from '../components/index/mine.vue'
import like from '../components/index/like.vue'
import last from '../components/index/last.vue'
import songslist from '../components/songs/songslist.vue'
import songs from '../components/songs/songs.vue'
import singer from '../components/index/singer.vue'
import singerdetails from '../components/songs/singerdetails.vue'
import album from '../components/songs/album.vue'

export default new VueRouter({
  routes: [
		{
		path:'/index',
		component:index,
		children:[
			{
			path:'/recommend',
			component:recommend
			},
			{
			path:'/ranking',
			component:ranking
			},
			{
			path:'/search',
			component:search
			},
			{
			path:'/singer',
			component:singer
			}
		]
		},
		{
			path:'/mine',
			component:mine,
			children:[
				{
					path:'/like',
					component:like
				},
				{
					path:'/last',
					component:last
				}
				
			]
		},
		{
			path:'/songslist',
			component:songslist,
		},
		{
			path:'/songs',
			component:songs,
		},
		{
			path:'/singerdetails',
			component:singerdetails,
		},
		{
			path:'/album',
			component:album,
		},
		{
			path:'/*',
			redirect:'/recommend'
		}
  ]
})