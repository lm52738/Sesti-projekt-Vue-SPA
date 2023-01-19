<template>
  <div
    class="border rounded border-dark p-3 d-flex align-items-center flex-column"
  >
    <p>{{ startedDateAt }} {{ startedTimeAt }}</p>
    <h3>DOLLAR CONVERTER</h3>
    <br />
    <h3>{{ dollar }} $ = {{ euro }} €</h3>
    <h4>{{ dollar }} $ = {{ kuna }} kn</h4>
  </div>
</template>

<script>
export default {
  props: ["dollar", "euro", "kuna", "startedDateAt", "startedTimeAt"],
};
</script>
