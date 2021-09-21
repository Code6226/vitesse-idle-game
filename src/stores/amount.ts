import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

const STORE_NAME = 'amount'
const DEFAULT_STATE = {
  amount: 0,
  perSecond: 0,
  costAddPerSecond: 2,
  previousTime: Date.now(),
}

export const useAmountStore = defineStore(STORE_NAME, {
  state: () => useLocalStorage(STORE_NAME, DEFAULT_STATE),
  getters: {
    addPerClick(): number {
      return Math.max(Math.floor(this.perSecond / 2), 1)
    },
    addPerSecond() {
      return Math.max(Math.floor(this.addPerClick / 2), 1)
    },
    canBuyAddPerSecond() {
      return this.amount >= this.costAddPerSecond
    },
  },
  actions: {
    onClickAddOnce() {
      this.amount += this.addPerClick
    },
    onClickAddPerSec() {
      if (this.canBuyAddPerSecond) {
        this.amount -= this.costAddPerSecond
        this.perSecond += this.addPerSecond
        this.costAddPerSecond *= 2
      }
    },
    // runs every sec when game is loaded, but will catch up for lost time if game closed for a while
    tick() {
      const now = Date.now()
      if (!Number.isFinite(this.previousTime))
        this.previousTime = now

      const secElapsed = Math.round((now - this.previousTime) / 1000)
      this.previousTime = now
      console.log('secElapsed', secElapsed)

      this.amount += this.perSecond * secElapsed
    },
    // $reset won't do anything since it'll just reset it to the localStorage, which is already what it is
    reset() {
      Object.assign(this, DEFAULT_STATE)
    },
  },
})
