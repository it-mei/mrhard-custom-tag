<template>
	<view>
		<input type="text" :value="form.username" />
		<input type="password" :value="form.password" />
		<button type="primary" @click="submit">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					username:"",
					password:"",
				}
			}
		},
		methods: {
			submit(){
				if(this.form.username.length==0){//这里可以加正则等等的验证
					uni.showModal({
						content:'请填写用户名',
						showCancel:false
					})
					return false
				}
				if(this.form.password.length<6){//这里可以加正则等等的验证
					uni.showModal({
						content:'请输入六位以上密码',
						showCancel:false
					})
					return false
				}
				uni.request({
					url:"提交给后台"
				})
			}
		}
	}
</script>

<style>

</style>
