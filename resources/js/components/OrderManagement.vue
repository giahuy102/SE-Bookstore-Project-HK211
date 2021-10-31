<template>
    <div class="orderManagement">
        <div class="filterBar">
            <input type="text"/>
        </div>
        <div class="listOrder">
            <list-order />
        </div>
    </div>
</template>

<script>
import listOrder from './ListOrder.vue'
export default {
    components:{
        listOrder
    }
}
</script>

<style scoped>
.orderManagement{
    margin-left: 20%;
    margin-top: 5%;
}
.listOrder{
    background-color: yellow;
    /* height: 700px; */
    /* margin-bottom: 20px; */
}
input{
    border: 0px;
    outline-style: solid;
    outline-color: gray;
    outline-width: 2px;
    padding: 5px;
    margin-right: 10px;
    width: 400px;
}
</style>
