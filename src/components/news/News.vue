<template>
	<div>

		<header>
			<span>消息</span>
			<span>&#xe8c0;</span>
		</header>

		<div class="privateMsg">
			<img src="@/assets/msg.png" alt="">
			<div>
				<p>私信</p>
				<p>知乎读书团队：你订阅的最新一期</p>
			</div>
			<div>></div>
		</div>	
		
		<div class="noticeList">
			<div>
				<span>通知列表</span>
				<span>全部已读</span>
				<span><img src="@/assets/read.png" alt=""></span>
			</div>
			<ul>
				<li>
					<img src="@/assets/invite.png" alt="">
					<div>
						<p>邀请</p>
						<p>蜂蜜柚子 的提问等你来答</p>
						<p>为什么骑车带不动比自己重的人？</p>
						<p class="time">6小时前</p>
					</div>
				</li>
				<li>
					<img src="@/assets/good.png" alt="">
					<div>
						<p>赞与感谢</p>
						<p>松涛... 蜂蜜柚子等 97 人 赞同了你的回答</p>
						<p class="time">6小时前</p>
					</div>
				</li>
				<li>
					<img src="@/assets/focus.png" alt="">
					<div>
						<p>关注</p>
						<p>东方若水 关注了你</p>
						<p class="time">5天前</p>
					</div>
				</li>

				<li v-for="item in newslist" :key="item.id">
					<img :src="item.img" alt="" >
					<div>
						<p id="answerUser">{{item.answerUser}}</p>
						<p id="answerTitle">{{item.answerTitle}}</p>
						<p id="time">{{item.time}}</p>
					</div>
				</li>
			</ul>	
		</div>

	</div>
</template>

<script>
import $ from 'axios'

export default {
  name: 'news',
  data: () => ({
    newslist: []
    
  }),
	mounted () {
		$.get('/api/newslist')
      .then(result => {
				this.newslist.unshift(...result.data.data)
				const newslist = this.newslist
				console.log(newslist)
			})
			.catch(() => {
				
      })
	}
}
</script>

<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';
@font-face {
  font-family: 'yofont';
  src:
    url('../../assets/iconfonts/newsicon/iconfont.woff') format('woff'),
    url('../../assets/iconfonts/newsicon/iconfont.ttf') format('truetype')
}
	header{
		width:100%;
		height:0.44rem;
		background:#fff;
		text-align:center;
		@include border(0 0 1px 0,#d3d3d3,solid);
		span:nth-child(1){
			line-height:0.44rem;
			font-size:.16rem;
			color:#333;
			font-weight:500;
		}
		span:nth-child(2){
				width:.22rem;
				height:.22rem;
				font-family:yofont;
				display:inline-block;
				position: absolute;
		    top: .11rem;
		    right: .2rem;
		    font-size:.18rem;
		    line-height:.22rem;
		    color:#999;
			}
	}
	
	.privateMsg{
		height:.75rem;
		width:100%;
		background:#fff;
		margin:.1rem 0;
		@include flexbox();
		align-items:center;
		img{
			width:.75rem;
			height:.45rem;
			padding:0 .15rem;
		}
		div:nth-child(2){
			@include flex();
			p:nth-child(1){
				font-size:.16rem;
				color:#1a1a1a;
				font-weight:600;
			}
			p:nth-child(2){
				font-size:.16rem;
				color:#646464;
				@include ellipsis();
			}
		}
		div:nth-child(3){
			padding:0 .15rem 0 .25rem;
			color:#d4d4d9;
			font-size:.20rem;
			font-weight:600;
		}
	}

	.noticeList{
		background:#fff;
		height:100%;
		div:nth-child(1){
			@include flexbox();
			height:.47rem;
			@include border(0 0 1px 0,#d3d3d3,solid);
			align-items:center;
			span:nth-child(1){
				padding-left:.15rem;
				color:#999;
				font-size:.16rem;
				font-weight:600;
				@include flex();
			}
			span:nth-child(2){
				color:#999;
				font-size:.16rem;
			}
			span:nth-child(3){
				padding:0 .15rem;
				color:#999;
				font-size:.16rem;
				font-weight:600;
				img{
					width:.17rem;
					height:.1rem;
				}
			}
		}
		ul{
			li{
				@include flexbox();
				padding:.1rem 0 0;
				img{
					width: .45rem;
			    height: .45rem;
			    margin: 0 .15rem;
			    border-radius:50%;
				}
				div{
					font-size:.16rem;
					color:#1a1a1a;
					@include flex();
					@include border(0 0 1px 0,#d3d3d3,solid);
					padding-bottom:.06rem;
					p{
						padding-bottom:.02rem;
					}
					#time{
						color:#808080;
						font-size:.14rem;
					}
					p:nth-child(1){
						font-weight:600;
					}
					p:nth-child(2){
						color:#808080;
					}
					#answerUser{
						color:#808080;
						font-weight: 100;
					}
					#answerTitle{
						color:#1a1a1a;
						font-weight: 600;
						@include ellipsis(100%,2);
						padding-bottom:.06rem;
					}
				}
			}
		}
	}
</style>
