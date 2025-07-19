import { defineStore } from 'pinia'
export const useMediaStore = defineStore('MediaSize', {
  state: () => ({ 
    MediaWidth: '' 
  }),
   actions: {
    setNewMediaWidth(Width) {
      this.MediaWidth = Width;
    }}

})


