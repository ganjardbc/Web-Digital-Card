<template>
  <gh-container auto-center custom-class="w-full">
    <gh-layout direction="col" gap="2">
      <u-button 
        variant="soft" 
        color="gray"
        size="md" 
        :ui="{ rounded: 'rounded-full' }"
        @click="toBack">
        <Icon name="mdi:arrow-left" /> Back
      </u-button>

      <gh-layout direction="col" gap="3" custom-class="pb-8">
        <gh-text size="2xl" weight="semibold">Forgot Password</gh-text>
        <div class="w-[50px] h-[4px] bg-primary rounded-md"></div>
        <gh-text size="sm" color="gray">Enter your email address and we'll send you a link to reset your password.</gh-text>
      </gh-layout>
      
      <gh-layout direction="col" gap="3" custom-class="py-2">
        <gh-layout direction="col" gap="1">
          <gh-text>Your Email</gh-text>
          <u-input 
            v-model="form.email" 
            size="xl" 
            class="w-full" 
            icon="mdi-light:email"
            :ui="{ rounded: 'rounded-full' }" />
        </gh-layout>
      </gh-layout>

      <gh-layout direction="col" gap="3" custom-class="py-2">
        <u-button 
          block 
          size="xl"
          :ui="{ rounded: 'rounded-full' }"
        >
        Send Reset Link
        </u-button>
      </gh-layout>

      <gh-layout gap="1" custom-class="pt-8">
        <gh-text>
          Remember your password?
        </gh-text>
        <nuxt-link to="/login">
          <gh-text align="center" weight="semibold">
            Login
          </gh-text>
        </nuxt-link>
      </gh-layout>
    </gh-layout>
  </gh-container>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'login',
})

const form = ref({
  email: '',
})

const router = useRouter()
function toBack() {
  const urlHistory = window.history.state.back
  if (urlHistory) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>