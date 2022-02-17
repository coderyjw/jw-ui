<preview>可以关闭</preview>
<template>
  <jw-alert title="Default 类型" closeable>
    <template #icon>
      <jw-icon class="jw-alert-icon" :size="22">
        <IosAirplane />
      </jw-icon>
    </template>
  </jw-alert>
  <jw-alert title="Info 类型" type="info" show-icon closeable />
  <jw-alert title="Success 类型" type="success" show-icon closeable />
  <jw-alert title="Warning 类型" type="warning" show-icon closeable />
  <jw-alert title="Error 类型" type="error" show-icon closeable />
</template>
<script setup lang="ts">
import { IosAirplane } from "@vicons/ionicons4";
</script>
