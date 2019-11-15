<template>
	<view>
		<view class="switch-box" :style="{'background':isChecked?bgColorActive:bgColorDefault,'border-color':isChecked?bgColorActive:bgColorDefault,'width':width,'height':height}" @click="checkSwitch()">
			<text class="text-true" v-if="textTrue&&isChecked" :style="{color:textColor,'font-size':textSize}">{{textTrue}}</text>
			<text class="text-false" v-if="textFalse&&!isChecked" :style="{color:textColor,'font-size':textSize}">{{textFalse}}</text>
			<view :class="['switch-button']" :style="{'background-color':buttonColor,'width':buttonSize,'height':buttonSize,'left':isChecked?('calc(100% - '+buttonSize+')'):'0'}"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'switchComponent',
		props: {
			'checked':{//是否被选中
				type:Boolean,
				default:false
			},
			bgColorActive:{//激活态背景色
				type:String,
				default:'#1AAD19'
			},
			bgColorDefault:{//关闭态背景色
				type:String,
				default:'#eeeeee'
			},
			textFalse:{//取消状态文字
				type:String,
				default:'OFF'
			},
			textTrue:{//开启状态文字
				type:String,
				default:'ON'
			},
			textColor:{//文字颜色
				type:String,
				default:'#ffffff'
			},
			textSize:{
				type:String,
				default:'22rpx'
			},
			width:{//开启状态文字
				type:String,
				default:'88rpx'
			},
			height:{//开启状态文字
				type:String,
				default:'40rpx'
			},
			buttonColor:{//按钮颜色
				type:String,
				default:'#ffffff'
			},
			buttonSize:{//按钮大小
				type:String,
				default:'36rpx'
			}
		},
		data() {
			return {
				isChecked:''
			}
		},
		// #ifdef H5
		mounted() {
			this.ready()
		},
		// #endif
		// #ifndef H5
		onReady() {
			this.ready()
		},
		// #endif
		methods: {
			ready(){
				this.isChecked=this.checked;
			},
			checkSwitch(isChecked){//如果调用次方法时候，给了明确的true/false，则使用
				if(isChecked!=undefined){
					this.isChecked=isChecked
				}else{
					this.isChecked=!this.isChecked;
				}
				this.$emit('change', this.isChecked);
			},
		}
	}
</script>

<style lang="scss" scoped='scoped'>
	view{
		transition: all 300ms;
	}
	.switch-box{
		border-radius: 200rpx;
		border:1px solid;
		position: relative;
	}
	.switch-button{
		border-radius: 50%;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	.text-true{
		position:absolute;
		top:0;
		bottom:0;
		margin:auto;
		left:10rpx;
		right:50%;
		height: 1.2em;
		text-align:center;
	}
	.text-false{
		position:absolute;
		top:0;
		bottom:0;
		margin:auto;
		left:50%;
		right:10rpx;
		height: 1.2em;
		text-align:center;
	}
</style>
