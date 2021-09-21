<script setup lang="ts">
import { useUserStore } from '~/stores/user'

import { useAmountStore } from '~/stores/amount'
const amountStore = useAmountStore()

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  router.push('/game')
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div class="text-4xl">
      <!-- Look up icons here: https://icones.netlify.app/collection/bx     -->
      <bx-bxs-right-arrow class="inline-block" @click="go" />
      <div>
        <button
          class="m-3 text-sm btn"
          @click="go"
        >
          Play
        </button>
      </div>
    </div>

    <div class="py-4" />
    <button
      v-if="amountStore.amount > 0"
      class="mt-3 text-sm btn bg-red-400/50"
      @click="amountStore.reset()"
    >
      Reset
    </button>
    <div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
