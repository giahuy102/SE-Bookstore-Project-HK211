<template>
    <div class="small-box rounded pt-2" :style="cardStyle">
          <div class="inner text-center pb-2 text-white">
            <h5>{{this.text}}</h5>
            <h3>{{this.number}}</h3>
          </div>
        </div>
</template>
<script>
export default {
    props: ['text', 'number', 'bg'],
    computed: {
        cardStyle() {
            return {
                'background-color': (this.bg)
            }     
        }
    }
}
</script>
<style scoped>

</style>