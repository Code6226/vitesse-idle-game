<script setup lang="ts">
import { useAmountStore } from '~/stores/amount'
const amountStore = useAmountStore()

watchEffect(() => {
  console.log(`The addPerClick has changed to: ${amountStore.addPerClick}`)
})

let interval
onBeforeMount(() => {
  console.log('beforeMount')
  amountStore.tick()

  interval = setInterval(() => {
    amountStore.tick()
  }, 1000)
})

onMounted(() => {
  console.log('mounted')
})

onBeforeUnmount(() => {
  console.log('unmounted')
  clearInterval(interval)
})

</script>

<template>
  <h1>Amount {{ amountStore.amount }}</h1>
  <h3>+ {{ amountStore.perSecond }}/s</h3>

  <button
    class="m-3 text-sm btn"
    :disabled="false"
    @click="amountStore.onClickAddOnce"
  >
    + {{ amountStore.addPerClick }}
  </button>

  <button
    class="m-3 text-sm btn"
    :disabled="!amountStore.canBuyAddPerSecond"
    @click="amountStore.onClickAddPerSec"
  >
    Buy + {{ amountStore.addPerSecond }}/s for {{ amountStore.costAddPerSecond }}
  </button>

  <div v-if="amountStore.amount === 11">
    Eleven
  </div>
</template>
