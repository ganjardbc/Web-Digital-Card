<template>
  <gh-container class="container mx-auto flex flex-col justify-center h-[100vh]">
    <div class="flex flex-col gap-2 items-center py-8">
      <div class="flex flex-col gap-2 items-center pb-8">
        <gh-text weight="semibold" line-height="none" class="text-5xl">
          Create your digital
        </gh-text>
        <div class="py-3 border-2 border-dashed border-black">
          <gh-text weight="semibold" line-height="none" color="black" class="text-6xl bg-primary px-4">
            business cards
          </gh-text>
        </div>
        <gh-text weight="semibold" line-height="none" class="text-5xl">
          and gain more customers.
        </gh-text>
      </div>
      
      <gh-text class="text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </gh-text>

      <div class="flex flex-row gap-2 items-center py-8">
        <u-button
          size="xl"
          :ui="{ rounded: 'rounded-full', padding: { xl: 'px-8 py-4' } }"
          @click="toRegister"
        >
          Get Started
        </u-button>
        <u-button
          color="white"
          size="xl"
          :ui="{ rounded: 'rounded-full', padding: { xl: 'px-8 py-4' } }"
        >
          Contact Us
        </u-button>
      </div>

      <!-- <img :src="ilusSatu" class="w-2/3"> -->
    </div>
  </gh-container>
</template>
<script setup lang="ts">
// import ilusSatu from '@/assets/img/illus-satu.png'
const router = useRouter()

definePageMeta({
  layout: 'home',
})

function toRegister() {
  router.push('/register')
}
</script>
