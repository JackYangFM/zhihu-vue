<template>
	<div>
		<header>
			<span>消息</span>
			<span></span>
		</header>	
	</div>
</template>

<script>
export default {
  name: 'news'
}
</script>

<style lang="scss" scoped>
	header{
		width:100%;
		height:0.44rem;
		background:#fff;
		@include border()
		span:nth-child(1){
			text-align:center;
			line-height:0.44rem;
		}
	}
</style>
