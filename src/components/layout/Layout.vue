<template>
	<div class="layout-contain">
		<div class="content-contain">
			<router-view />
		</div>
		<div class="bar-wrap" :class="{isshow:ish}">
			<router-link
			tag="div"  
			v-for="(item) of items"
			:key= "item.id"
			:to="{path: item.path}"
			class="item-wrap" 
			active-class="active"
			>
				<div class="icon" v-html="item.icon"></div>
				<span>{{item.name}}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex' 
export default {
  name: 'layout',
	data(){
		return {
			items:[
				{
					id: 'thome',
					icon: '&#xe7a7;',
					name: '首页',
					path: '/index/home'
				},
				{
					id: 'tuniversity',
					icon:'&#xe602;',
					name:'大学',
					path: '/index/university'
				},
				{
					id: 'tnews',
					icon:'&#xf0017;',
					name:'通知',
					path: '/index/news'
				},
				{
					id: 'tmine',
					icon:'&#xe643;',
					name:'我的',
					path: '/index/mine'
				}
			]
		}
	},
	computed: {
		ish(){
			return this.ishidden
		},
		...mapState(['ishidden'])
	},
	mounted() {
	}
}
</script>

<style lang="scss" scoped>
	@import '@/style/usage/core/reset.scss';
	@font-face {
		font-family: 'yofont';
		src:
			url('../../assets/iconfonts/iconfont.woff') format('woff'),
			url('../../assets/iconfonts/iconfont.ttf') format('truetype');
	}
	.layout-contain{
		height: 100%;
		@include flexbox();
		@include flex-direction(column);
		.content-contain{
			@include flex();
			width: 100%;
			height:100%;
		}
		.bar-wrap {
			position: absolute;
			bottom: 0;
			width: 100%;
			z-index: 100;
			height:.49rem;
			background: #fff;
			transition: all .5s;
			&.isshow{
				bottom: -.49rem;
			}
			@include flexbox();
			.item-wrap{
				@include flex();
				text-align: center;
				color: #999;
				.icon{
					font-family: 'yofont';
					font-size: .24rem;
					padding-top: .04rem;
					line-height: .15rem;
				}
				span{
					display: block;
					line-height: .24rem;
					padding-top: .05rem;
				}
				&.active{
					color: #0084ff;
				}
			}
		}
	}
</style>
