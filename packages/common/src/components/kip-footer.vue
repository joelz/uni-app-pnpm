<template>
  <view class="footer">
    <image class="logo" src="../icons/logo-bottom.svg" />
    <view class="copyright">
      <text>{{ getLangRes('pages.login.copyright--') }}</text>
    </view>
  </view>
</template>

<script lang="ts">
// TODO 没法用 @/utils 了
import { formatPhoneNumber2 } from '../utils';
import Vue from 'vue';
export default Vue.extend({
  name: 'KipFooter',
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    getLangRes: function (
      key: string
    ) {
      return formatPhoneNumber2('13800138001');
    },
  },
});
</script>

<style scoped lang="scss">
.footer {
  position: absolute;
  left: calc(50% - 52px);
  bottom: 15px;
  margin: 86px auto 0;
  font-size: 14px;
  text-align: center;

  .logo {
    width: 100px;
    height: 100px;
  }
}
</style>
