<preview>为 Alert 设置图标</preview>
<template>
  <jw-alert title="Default 类型">
    <template #icon>
      <jw-icon class="jw-alert-icon" :size="22">
        <IosAirplane />
      </jw-icon>
    </template>
  </jw-alert>
  <jw-alert title="Info 类型" type="info" show-icon />
  <jw-alert title="Success 类型" type="success" show-icon />
  <jw-alert title="Warning 类型" type="warning" show-icon />
  <jw-alert title="Error 类型" type="error" show-icon />
</template>
<script setup lang="ts">
import { IosAirplane } from "@vicons/ionicons4";
</script>
