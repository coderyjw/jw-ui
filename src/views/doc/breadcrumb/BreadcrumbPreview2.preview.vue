<preview>图标分隔符</preview>
<template>
  <jw-breadcrumb :separator-icon="ArrowForwardIosSharp">
    <jw-breadcrumb-item :to="{ path: '/' }">homepage</jw-breadcrumb-item>
    <jw-breadcrumb-item
      ><a href="/">promotion management</a></jw-breadcrumb-item
    >
    <jw-breadcrumb-item>promotion list</jw-breadcrumb-item>
    <jw-breadcrumb-item>promotion detail</jw-breadcrumb-item>
  </jw-breadcrumb>
</template>

<script setup lang="ts">
import { ArrowForwardIosSharp } from "@vicons/material";
</script>
