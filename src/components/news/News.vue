<template>
	<div>
		<header>
			<span>消息</span>
			<span>&#xe8c0;</span>
		</header>	
	</div>
</template>

<script>
export default {
  name: 'news'
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
		@include border(0 0 1px 0,#ececec,solid)
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
</style>
