<template>
  <div>
    <!-- <modal></modal> -->
    <countdowmB @send="test"></countdowmB>
  </div>
</template>

<script>
import modal from '@/components/modal'
import countdowmB from '@/components/countdowmB'

export default {
  components: {
    modal,
    countdowmB
  },
  methods: {
    test () {
      alert('d')
    }
  }
}
</script>
