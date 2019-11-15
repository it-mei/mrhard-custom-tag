<template>
	<view class="content">
		<view class="line-navigation">
			<view class="line-item">
				<view class="line-text">自定义导航栏名称及返回文字</view>
				<mrhardNavigate fontColor="#000000" navigateTitle='修改名称' navigateBackText="返回"></mrhardNavigate>
			</view>
			<view class="line-item">
				<view class="line-text">自定义导航栏颜色</view>
				<mrhardNavigate fontColor="#ffffff" bgColor="#000000"></mrhardNavigate>
			</view>
			<view class="line-item">
				<view class="line-text">自定义返回事件并强制展示返回按钮</view>
				<mrhardNavigate fontColor="#000000" bgColor="#fefefe" @navigateBackCallback="navigateBackCallback" :showBackBtn='true' :costomBackFunction='true'></mrhardNavigate>
			</view>
			<view class="line-item">
				<view class="line-text">点击标题事件</view>
				<mrhardNavigate fontColor="#000000" bgColor="#fefefe" @navigateClickCallback="navigateClick"></mrhardNavigate>
			</view>
			<view class="line-item">
				<view class="line-text">综合修改</view>
				<mrhardNavigate fontColor="#ffffff" bgColor="#000000" navigateTitle='修改名称' navigateBackText="返回"  @navigateBackCallback="navigateBackCallback" :showBackBtn='true' :costomBackFunction='true'  @navigateClickCallback="navigateClick"></mrhardNavigate>
			</view>
		</view>
		
		<view class="line">
			<view class="line-item">
				<view class="line-text">自定义开关</view>
				<mrhardSwitch></mrhardSwitch>
			</view>
			<view class="line-item">
				<view class="line-text">默认选中状态</view>
				<mrhardSwitch :checked='checked'></mrhardSwitch>
			</view>
			<view class="line-item">
				<view class="line-text">修改激活颜色与默认颜色与文字颜色</view>
				<mrhardSwitch bgColorActive="#327cc0" bgColorDefault="#bbbbbb" textColor="#bfffc2"></mrhardSwitch>
			</view>
			<view class="line-item">
				<view class="line-text">修改激活文字与默认文字</view>
				<mrhardSwitch textFalse="NO" textTrue="YES"></mrhardSwitch>
			</view>
			<view class="line-item">
				<view class="line-text">组件宽度/高度/按钮大小/文字大小</view>
				<mrhardSwitch width="200rpx" height="100rpx" buttonSize='100rpx' textSize="36rpx"></mrhardSwitch>
			</view>
			<view class="line-item">
				<view class="line-text">切换事件</view>
				<mrhardSwitch @change="changeSwitch"></mrhardSwitch>
			</view>
		</view>
		<mrhardTabbar></mrhardTabbar>
	</view>
</template>

<script>
	import mrhardNavigate from "@/components/mrhard-navigate/mrhard-navigate.vue";
	import mrhardSwitch from "@/components/mrhard-switch/mrhard-switch.vue";
	import mrhardTabbar from "@/components/mrhard-tabbar/mrhard-tabbar.nvue";
	export default {
		data() {
			return {
				checked:true
			}
		},
		onLoad() {

		},
		components:{
			mrhardNavigate,mrhardSwitch,mrhardTabbar
		},
		methods: {
			changeSwitch(e){//切换开关事件
				uni.showToast({
					title:String(e)
				})
			},
			navigateBackCallback(e){//点击返回事件
				uni.showToast({
					title:"点击了返回事件"
				})
			},
			navigateClick(){
				uni.showToast({
					title:"点击了标题事件"
				})
			},
		}
	}
</script>

<style>
	.content{
		padding-top: 48rpx;
		padding-bottom: 160rpx;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.line-item{
		margin-bottom: 20rpx;
	}
	.line{
		padding: 20rpx;
	}
	.line-text{
		font-size: 24rpx;
		margin-bottom: 10rpx;
		vertical-align: super;
	}
</style>
