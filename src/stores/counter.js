import { defineStore } from 'pinia'
export const useMediaStore = defineStore('MediaSize', {
  state: () => ({ 
    MediaWidth:window.innerWidth 
  }),
   actions: {
   }

})


