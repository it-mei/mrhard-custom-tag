<template>
	<view class="ticket-num-area">
		<text class="ticket-num-button" @click="cutNum">-</text>
		<view class="ticket-num-box">
			<text class="ticket-num">{{ num }}</text>
		</view>
		<text class="ticket-num-button" @click="addNum">+</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:0
			};
		},
		methods:{
			cutNum(){
				this.num--
			},
			addNum(){
				this.num++
			},
		},
		watch:{
			num(){
				this.$emit('change', this.num);
			}
		}
	}
</script>

<style>
	.ticket-num-button {
		width: 60upx;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		border: 1px solid #bbbbbb;
		border-radius: 4px;
		font-size: 40upx;
		padding: 0;
		display: inline-block;
	}

	.ticket-num {
		color: #000000;
	}

	.ticket-num-area {
		text-align: right;
		padding: 0 72upx;
	}

	.ticket-num-box {
		display: inline-block;
		color: #3f3f3f;
		font-size: 44upx;
		margin: 0 32upx;
	}
</style>
