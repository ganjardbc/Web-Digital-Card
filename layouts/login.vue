<template>
  <gh-layout class="h-[100vh] w-full">
    <gh-layout 
      direction="col" 
      justify="center" 
      align="center"
      custom-class="flex-1 w-full h-full">
      <div class="relative w-[70%] h-[70%] bg-[url('/assets/img/login-2.jpg')] bg-no-repeat bg-center bg-contain" />
    </gh-layout>
    <gh-layout 
      direction="col"
      justify="center"
      custom-class="flex-1 layout-login-main-container bg-white"
    >
      <gh-layout direction="col" custom-class="layout-login-main-container-inner">
        <slot />
      </gh-layout>
    </gh-layout>
  </gh-layout>
</template>
<style>
.layout-login-main-container {
  /* height: calc(100vh - 48px);
  width: calc(100vw - 48px);
  margin: 24px; */
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.layout-login-main-container-inner {
  max-width: 400px;
  margin: 0 auto;
}
</style>