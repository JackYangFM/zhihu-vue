<template>
	<ul
	  v-infinite-scroll="loadMore"
	  infinite-scroll-disabled="loading"
	  infinite-scroll-distance="10">
	  <li v-for="item in list">{{ item }}</li>
	</ul>
</template>

<script>
	import { InfiniteScroll } from 'mint-ui';
	import Vue from 'vue'
	Vue.use(InfiniteScroll);
export default {
	name: 'index',
	components: {
	},
	data(){
		return{
			list: []
		}
	},
	methods: {
		loadMore() {
		  this.loading = true;
		  setTimeout(() => {
		    let last = this.list[this.list.length - 1];
		    for (let i = 1; i <= 10; i++) {
		      this.list.push(last + i);
		    }
		    this.loading = false;
		  }, 2500);
		}
	}
}
</script>
