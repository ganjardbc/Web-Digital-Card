<template>
  <gh-container class="sticky top-0 left-0 w-full h-[84px] bg-white dark:bg-black border-b border-solid dark:border-gray-700">
    <gh-layout 
      align="center"
      justify="between"
      custom-class="container mx-auto h-full"
    >
      <nuxt-link to="/" class="flex items-center">
        <img src="/assets/img/logo.png" alt="" style="height: 44px;">
      </nuxt-link>
      <gh-layout 
        align="center"
        justify="end"
        gap="3"
        custom-class="flex-1 !w-auto"
      >
        <gh-layout 
          align="center"
          justify="end"
          gap="2"
          custom-class="flex-1 flex items-center mr-4"
        >
          <gh-text>MENU 1</gh-text>
          <gh-text>MENU 2</gh-text>
          <gh-text>MENU 3</gh-text>
        </gh-layout>
        <gh-layout 
          align="center"
          justify="end"
          gap="2"
          custom-class="!w-auto flex items-center"
        >
          <u-button 
            variant="ghost" 
            color="gray"
            size="xl"
            :ui="{ rounded: 'rounded-full', padding: { xl: 'px-6 py-2.5' } }"
            @click="toLogin"
          >
            <Icon name="mdi:login" /> Login
          </u-button>
          <u-button
            size="xl"
            :ui="{ rounded: 'rounded-full', padding: { xl: 'px-6 py-2.5' } }"
            @click="toRegister"
          >
            Create an Account
          </u-button>
        </gh-layout>
      </gh-layout>
    </gh-layout>
  </gh-container>
</template>
<script setup lang="ts">
const router = useRouter()

function toLogin() {
  router.push('/login')
}

function toRegister() {
  router.push('/register')
}
</script>
