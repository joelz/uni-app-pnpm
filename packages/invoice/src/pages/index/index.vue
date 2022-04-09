<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
			<text class="title">{{money}}</text>
        </view>
		<kip-footer />
	</view>
</template>

<script lang="ts">
	// 01-源码引用：使用包名引用
	// 需要先在 root 中运行 pnpm --filter uni-app-pnpm-invoice install uni-app-pnpm-common
    import KipFooter from 'uni-app-pnpm-common/src/components/kip-footer.vue';
	import { formatMoneyThousand } from 'uni-app-pnpm-common/src/utils/';

	// 02-源码引用：使用文件路径引用
    // import KipFooter from '../../../../common/src/components/kip-footer.vue';
	// import { formatMoneyThousand } from '../../../../common/src/utils/';

	import Vue from 'vue';
	export default Vue.extend({
		components: { KipFooter },
		data() {
			return {
				title: 'Hello',
				money: formatMoneyThousand(100989)
			}
		},
		onLoad() {

		},
		methods: {

		}
	});
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
