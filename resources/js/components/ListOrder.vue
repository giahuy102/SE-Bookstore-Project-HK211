<template>
    <div>
        <div class="row optionField">
            <button class="remove-button" @click="deleteSelected">Delete</button>
            <export-excel
                :data   = "items"
                name    = "OrderList.xls">
                <button class="export-button">Export</button>
            </export-excel>
        </div>
        <table class="table table-striped list-book">
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Create Time</th>
                    <th>Total(USD)</th>
                    <th>Order Status</th>
                    <th>Delivery</th>
                    <th> </th>
                </tr>


                <tr v-for="item in itemsFilter" :key="item.id" >
                    <td>{{item.order_id}}</td>
                    <td>{{cusNames[item.order_id]}}</td>
                    <td>{{item.create_at}}</td>
                    <td>{{ (totals[item.order_id] == null) ? 0 : totals[item.order_id]}}</td>
                    <td>{{item.order_status | capitalize}}</td>
                    <td>{{item.delivery | capitalize}}</td>
                    <td>
                        <div class = "btn icon"> <input type="checkbox" v-model="selected" v-bind:value="item.order_id"> </div>
                        <button @click ="removeOrder(item.order_id)" class = "btn icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>  
                        </button>
                        <router-link :to ="{name : 'orderDetail', params: { orderID: item.order_id }}"> 
                            <button class="btn icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import orderDetail from './OrderDetail.vue'
export default {
    props: ['items', 'search_str'],
    components:{
        orderDetail
    },
    data: function(){
        return{
            selected: [],
            cusNames: {},
            totals: {}
        }
    },
    computed:{
        itemsFilter(){
            if (this.search_str == '') return this.items;
            return this.items.filter(item => item.order_id.toString() == this.search_str || this.cusNames[item.order_id].includes(this.search_str));
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    methods:{
        removeOrder(id){
            axios.delete('/api/order/' + id)
            .then (response =>{
                if (response.status == 200){
                    this.$emit('orderchanged');
                    this.getAllOrderInfo();
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
        deleteSelected(){
            for(let i = 0; i < this.selected.length; i++){
                let id = this.selected[i];
                axios.delete('/api/order/' + id)
                .then (response =>{
                    if (response.status == 200){
                        console.log('Delete order ', id);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
            }
            this.selected = [];
            this.$emit('orderchanged');
            this.getAllOrderInfo();
        },
        getAllCusName: async function(){
            try{
                const res = await axios.get(`/api/orders/cusName`);
                let output = {};
                for(let i = 0; i < res.data.length; i++){
                    let key = res.data[i]['order_id'];
                    let value = res.data[i]['username'];
                    output[key] = value;
                }
                this.cusNames = output;
                console.log(this.cusNames);
            }
            catch(error) {
                console.log(error);
            }
        },
        getAllOrderTotal:  async function(){
            try{
                const res = await axios.get(`/api/orders/total`);
                let output = {};
                for(let i = 0; i < res.data.length; i++){
                    let key = res.data[i]['order_id'];
                    let value = res.data[i]['total_price'];
                    output[key] = value;
                }
                this.totals = output;
                console.log(this.totals);
            }
            catch(error) {
                console.log(error);
            }
        },
        getAllOrderInfo(){
            this.getAllCusName();
            this.getAllOrderTotal();
        }
    },
    async created(){
        this.getAllOrderInfo();
    }
    
}
</script>
<style scoped>
.item{
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
.optionField{
    margin-left: 35px;
    margin-top: 20px;
    margin-bottom: 25px;
}
.removeButton{
    border-style: none;
    background: none;
}

.remove-button {
    background-color: rgb(204, 5, 5);
    border: none ;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
}

.remove-button:hover {
    background-color: red;
}

.export-button:hover {
    background-color: #0084B4;
}

.export-button {
    background-color: #1DCAFF;
    border: none ;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
    margin-left: 20px;
}
</style>