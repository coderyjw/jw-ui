<preview>图标</preview>
<template>
  <jw-button theme="primary" icon-placement="right">
    <template #icon>
      <jw-icon size="20">
        <VehicleBicycle24Filled />
      </jw-icon>
    </template>
    默认按钮
  </jw-button>
  <jw-button theme="primary">
    <template #icon>
      <jw-icon size="20">
        <VehicleBicycle24Filled />
      </jw-icon>
    </template>
    默认按钮
  </jw-button>
</template>
<script setup lanng="scss">
import { VehicleBicycle24Filled } from "@vicons/fluent";
</script>
