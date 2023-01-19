<template>
  <div>
    <h2>Converter</h2>
    <div class="container-fluid p-2 d-flex justify-content-center">
      <dollar-converter v-bind="data"></dollar-converter>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        dollar: 1,
        euro: 0.92,
        kuna: 6.96,
        startedDateAt: new Date().toLocaleDateString("hr-HR"),
        startedTimeAt: new Date().toLocaleTimeString("hr-HR"),
      }
    };
  }
}
</script>