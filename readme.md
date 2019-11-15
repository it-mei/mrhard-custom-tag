v1.0.0

h5的demo(请用手机模式查看):

[点击查看http://www.bwapi.cn/file/h5/uniapp/components/custom_tag/index.html](http://www.bwapi.cn/file/h5/uniapp/components/custom_tag/index.html)

1.更新了自定义导航栏组件（可自定义标题，文字颜色，背景颜色，点击返回键触发的事件），支付宝小程序不支持自定义导航栏，故不支持
	暴露参数如下
	
```
	'navigateTitle',//标题名
	'fontColor',//文字颜色
	'bgColor',//背景颜色
	'navigateClickCallback',//点击标题事件后，触发的事件
	'showBackBtn',//是否展示返回按钮
	'costomBackFunction',//是否自定义返回事件
	'navigateBackText',//自定义返回文字
	'navigateBackCallback',//点击返回按钮后，触发的事件，优先取这个事件，未传入，则显示返回键
```
	
```
	<template>
		<mrhardNavigate fontColor="#ffffff" bgColor="#000000" navigateTitle='修改名称' navigateBackText="返回"  @navigateBackCallback="navigateBackCallback" :showBackBtn='true' :costomBackFunction='true'  @navigateClickCallback="navigateClick"></mrhardNavigate>
	</template>
	//引入导航栏组件
	<script>
		import mrhardNavigate from "@/components/mrhard-navigate/mrhard-navigate.vue";
		export default {
			data() {
				return {
					
				}
			},
			onLoad() {
	
			},
			components:{
				mrhardNavigate
			},
			methods: {
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
```


2.增加自定义开关
	暴露参数如下，可以自由搭配修改
```
	checked,//是否被选中
	bgColorActive,//激活态背景色，默认#1AAD19
	bgColorDefault,//关闭态背景色，默认#EEEEEE
	textFalse,//取消状态文字，默认OFF
	textTrue,//开启状态文字，默认ON
	textColor,//文字颜色，默认#FFFFFF
	textSize,//文字大小，默认22rpx
	width,//组件宽度，默认88rpx
	height,//组件高度，默认40rpx
	buttonColor,//按钮颜色，默认#FFFFFF
	buttonSize,//按钮大小，默认36rpx
```
	
	
```
	<template>
		<mrhardSwitch :checked='true' bgColorActive="@327cc0" bgColorDefault="@bbbbbb" textColor="@bfffc2"  textFalse="NO" textTrue="YES"  width="200prx" height="100rpx" buttonSize='100rpx' textSize="36rpx"  @change="changeSwitch"></mrhardSwitch>
	</template>
	//引入导航栏组件
	<script>
		import mrhardSwitch from "@/components/mrhard-switch/mrhard-switch.vue";
		export default {
			data() {
				return {
					
				}
			},
			onLoad() {
	
			},
			components:{
				mrhardSwitch
			},
			methods: {
				changeSwitch(e){//切换开关事件
					uni.showToast({
						title:String(e)
					})
				},
			}
		}
	</script>
```	
	
3.增加自定义tabbar
需要在tabbar组件内修改如下配置，可以自由搭配，每个按钮是使用switch跳转还是使用navigate跳转，方式自定，如果不满意，可以自行修改css，因为基本上tabbar是全局共用的，所以配置写在组件里了，也可以写在vuex里，组件里使用计算属性来映射vuex里的数据

☆☆☆☆☆因为使用了flex布局，如果不用五个tab，可能会导致showBig的元素变宽，如果过大的话，可以给.tabbar-item.big这个class加一个flex: none;width: xxx自定义的宽度; 就可以设置宽度了

```
	
		tabBar: {
			color: '#C1C0C9',//文字默认颜色
			selectedColor: '#FE8B1E',//文字激活颜色
			showType:"img",//img/图片模式,iconfont/字体图标模式
			borderColor:"#bbbbbb",//边框颜色
			bgColor:"#ffffff",//tabbar背景颜色
			list: [{
					pagePath: "/pages/tabbarPage3/tabbarPage3",//页面路径，最前放需要/，绝对路径
					navigateType: "navigateTo",//跳转方式，switchTab的话，需要在pages.json中，配置tabbar页面
					showBig:false,//是否展示成大图形式，选择时的话，会向上移动半个tabbar的高度，详见demo
					fontClass:"icontab_bar_optional_se",//如果使用iconfont模式的话，这里是fontclass，可以根据此项修改展示的图标（showType为"iconfont"时生效）
					iconPath: '/static/img/icon1.png',//未激活状态下的图片路径（showType为"img"时生效）
					selectedIconPath: '/static/img/icon1_1.png',//激活状态下的图片路径（showType为"img"时生效）
					text: 'tabbarPage1',//tabbar选项的标题
					num: 0,//tabbar的角标内容
				},
				{
					pagePath: "/pages/tabbarPage1/tabbarPage1",
					navigateType: "switchTab",
					showBig:false,
					fontClass:"icontab_bar_market_sele",
					iconPath: '/static/img/icon3.png',
					selectedIconPath: '/static/img/icon3_3.png',
					text: 'tabbarPage3',
					num: "新"
				},
				{
					pagePath: "/pages/demo/demo",
					navigateType: "switchTab",
					showBig:true,
					fontClass:"icontab_bar",
					iconPath: '/static/img/icon4.png',
					selectedIconPath: '/static/img/icon4_4.png',
					text: 'demo',
					num: 0
				},
				{
					pagePath: "/pages/tabbarPage2/tabbarPage2",
					navigateType: "switchTab",
					showBig:false,
					fontClass:"icontab_bar_mine_select",
					iconPath: '/static/img/icon2.png',
					selectedIconPath: '/static/img/icon2_2.png',
					text: 'tabbarPage2',
					num: 10
				},
				{
					pagePath: "/pages/tabbarPage3/tabbarPage3",
					navigateType: "navigateTo",
					showBig:false,
					fontClass:"icontab_bar_market_sele",
					iconPath: '/static/img/icon3.png',
					selectedIconPath: '/static/img/icon3_3.png',
					text: 'tabbarPage3',
					num: "新"
				}
			]
		}
```