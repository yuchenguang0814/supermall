<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 3px rgba(100, 100, 100, 0.3);
}
</style>
