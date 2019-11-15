<template>
	<view>
		<mrhardNavigate fontColor="#ffffff" bgColor="#000000"></mrhardNavigate>
		本页的navigate组件的返回按钮，是根据页面栈计算的
	</view>
</template>

<script>
	import mrhardNavigate from "@/components/mrhard-navigate/mrhard-navigate.vue";
	export default {
		data() {
			return {
				
			}
		},
		components:{
			mrhardNavigate
		},
		onReady() {
			this.$store.state.mrhard.domData.navigateText="这页js改了标题"
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
