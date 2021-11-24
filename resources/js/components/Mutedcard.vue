<template>
  <div class="card">
        <div class="card-header text-center">
          <span class="text-muted p-0">{{this.title}}</span>
        </div>
        <div class="card-body text-dark text-center"><b>{{this.value}}</b></div>
      </div>
</template>

<script>
export default {
    props: ['title', 'value']
}
</script>

<style scoped>

</style>