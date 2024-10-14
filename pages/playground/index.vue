<template>
  <gh-body>
    <gh-layout direction="col" gap="2" align="center" justify="center">
      <h1>WELCOM TO NUXT JS</h1>

      <gh-layout gap="2" align="center" justify="center">
        <gh-button @click="decrement">
          -
        </gh-button>
        <gh-text>{{ getCounter }}</gh-text>
        <gh-button @click="increment">
          +
        </gh-button>
      </gh-layout>

      <gh-layout direction="col" gap="2" custom-class="w-[400px]">
        <gh-text size="lg">FORM INPUT</gh-text>
        <gh-layout v-for="(item, i) in getItems" :key="i" gap="2" justify="between">
          <gh-text>{{ item }}</gh-text>
          <gh-button size="sm" variant="outline" @click="removeItem(i)">
            Delete
          </gh-button>
        </gh-layout>
        <gh-text v-if="getItems.length === 0">No items</gh-text>
        <gh-layout direction="col" gap="2" custom-class="mt-2">
          <gh-layout gap="2" justify="between">
            <gh-text>Is can field data</gh-text>
            <UToggle v-model="isCanField" />
          </gh-layout>
          <gh-layout gap="2" justify="between">
            <UInput v-model="formText" size="lg" class="flex-1" placeholder="Enter text" :disabled="!isCanField" />
            <gh-button size="md" :disabled="!isCanSubmitItem" @click="addItem">
              Add item
            </gh-button>
          </gh-layout>
        </gh-layout>
      </gh-layout>

      <gh-layout direction="col" gap="2" custom-class="w-[400px]">
        <gh-text size="lg">FETCH QUESTION</gh-text>
        <gh-text>Ask a yes/no question:</gh-text>
        <UInput v-model="question" size="lg" class="flex-1" placeholder="Enter question" />
        <gh-text>{{ answer }}</gh-text>
      </gh-layout>
    </gh-layout>
  </gh-body>
</template>
<script setup lang="ts">
const formText = ref('')
const isCanField = ref(true)

const data = reactive({
  nested: {
    count: 0
  },
  items: ['item 1', 'item 2', 'item 3']
})

const getItems = computed(() => data.items)
const isCanSubmitItem = computed(() => formText.value)

function addItem() {
  if (!formText.value) return

  data.items.push(formText.value)
  formText.value = ''
}

function removeItem(i: number) {
  data.items.splice(i, 1)
}

const getCounter = computed(() => data.nested.count)

function decrement() {
  data.nested.count--
}

function increment() {
  data.nested.count++
}

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})
</script>

