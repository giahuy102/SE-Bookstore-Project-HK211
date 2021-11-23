<template>
    <div class="orderManagement">
        <div class="container search">
            <div class="row">
                <div class="col-5 text-start"> <input class="search-typing" type="text" placeholder="Order ID, Customer" size="50"> </div>
                <div class="col text-left"><button class="search-button">Search</button></div>
            </div>
            
        </div>
        
        <div class="listOrder">
            <list-order 
            :items="items"
            v-on:orderchanged="getList()"
            />
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
            items: [],
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
        },
        
    },
    created(){
        this.getList();
    },
    
}
</script>

<style scoped>

.search {
    margin-top: 10px;
    margin-left: 20px;
}

.search-typing {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
    text-indent: 30px;
    /* background: url(../assets/hcmut1.png) no-repeat;
    background-size: 10px 10px; */
    background: url(../../../public/images/warehouse/search-icon.png) no-repeat scroll 5px 5px; 
    background-size: 15px 15px;
}


.search-button {
    background-color: #00ACED;
    border: none ;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
    margin-right: 100px;
}

.search-button:hover {
    background-color: #0084B4;
}


</style>
