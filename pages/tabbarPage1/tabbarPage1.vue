<template>
	<view>
		<mrhardNavigate fontColor="#ffffff" bgColor="#000000"></mrhardNavigate>
		<mrhardCount></mrhardCount>
		<mrhardTabbar></mrhardTabbar>
	</view>
</template>

<script>
	import mrhardNavigate from "@/components/mrhard-navigate/mrhard-navigate.vue";
	import mrhardTabbar from "@/components/mrhard-tabbar/mrhard-tabbar.nvue";
	import mrhardCount from "@/components/mrhard-count/mrhard-count.vue";
	export default {
		data() {
			return {
				
			}
		},
		components:{
			mrhardNavigate,
			mrhardTabbar,
			mrhardCount
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
