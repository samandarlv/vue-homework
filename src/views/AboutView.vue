<template>
  <div class="about">
    <About />
    <img src="../assets/Rectangle17.png" alt="image" />
  </div>
</template>
<script setup>
  import About from "@/components/About.vue";
</script>
<style scoped>
  .about {
    display: flex;
    gap: 138px;
  }
  .about img {
    width: 40%;
    object-fit: cover;
    height: 100%;
  }
</style>
