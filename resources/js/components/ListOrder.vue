<template>
    <div class="listOrder">
        <div v-for="(item, index) in items": key="index">
            
        </div>
    </div>
</template>

<script>
import orderDetail from './OrderDetail.vue'
export default {
    props: ['items'],
    components:{
        orderDetail
    }

}
</script>