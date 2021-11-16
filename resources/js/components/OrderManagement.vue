<template>
    <div class="orderManagement">
        <div class="ordersBox">
            <form class="filter" >
                <input type="text" class="filterBar" placeholder="Order ID"/>
                <button class="searchButton">Search</button>
            </form>
            
            <div class="optionField">
                <button class="removeButton">Remove selected </button>
                <button class = "exportButton"> Export </button>
            </div>

            <div class="listOrder">
                <list-order 
                :items="items"
                v-on:orderchanged="getList()"
                />
            </div>
        </div>
    </div>
</template>

<script>
import listOrder from './ListOrder.vue'
export default {
    components:{
        listOrder
    },
    data: function() {
        return{
            items: []
        }
    },
    methods:{
        getList() {
            axios.get('/api/orders')
            .then (response => {
                this.items = response.data
                // console.log(this.items)
            })
            .catch (error => {
                console.log(error)
            })
        }
    },
    created(){
        this.getList();
    },
    
}
</script>

<style scoped>
.orderManagement{
    background-color: white;
    margin-left: 50px;
    margin-top: 75px;
    margin-right: 30px;
    display: flex;
}
.ordersBox{
    margin: 20px;
    width: 95%;
}
.listOrder{
    margin-top: 20px;
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

.searchButton{
    border: none;
    color: white;
    padding: 8px 32px;
    text-align: center;
    text-decoration: none;
    /* display: inline-block; */
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    background: #00ACED;
}

.removeButton{
    margin-top: 30px;
    padding: 5px 7px;
    border: none;
    color: white;
    background: red;
    font-size: 16px;
    text-align: center;
}

.exportButton{
    margin-top: 30px;
    margin-left: 20px;
    padding: 5px 7px;
    border: none;
    color: white;
    background: #1DCAFF;
    font-size: 16px;
    text-align: center;
}
</style>
