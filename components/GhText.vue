<template>
  <component :is="type" :class="customClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'sm'
  },
  weight: {
    type: String,
    default: 'normal'
  },
  color: {
    type: String,
    default: 'black'
  },
  darkColor: {
    type: String,
    default: 'white'
  },
  align: {
    type: String,
    default: 'left'
  },
  type: {
    type: String,
    default: 'div'
  },
  // Additional font attributes
  letterSpacing: {
    type: String,
    default: ''
  },
  lineHeight: {
    type: String,
    default: ''
  },
  textTransform: {
    type: String,
    default: ''
  },
  textDecoration: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  },
});

const customClass = computed(() => {
  return `text-${props.size} font-${props.weight} text-${props.color} dark:text-${props.darkColor} text-${props.align} ${props.letterSpacing} ${props.lineHeight} ${props.textTransform} ${props.textDecoration} ${props.customClass}`;
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>