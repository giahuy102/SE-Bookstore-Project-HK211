<template>
    <div>
        <table class="table table-hover">
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


            <tr v-for="item in items" :key="item.id" >
                <td>{{item.id}}</td>
                <td>{{item.customer}}</td>
                <td>{{item.create_at}}</td>
                <td>{{item.total}}</td>
                <td>{{item.orderStatus | capitalize}}</td>
                <td>{{item.delivery | capitalize}}</td>
                <td>
                    <input type="checkbox"/>
                    /
                    <router-link :to ="{name : 'orderDetail', params: { orderID: item.id }}"> 
                        <font-awesome-icon
                            icon = "info-circle"
                        />
                    </router-link>
                    /
                    <button @click ="removeOrder(item.id)" class = "removeButton">
                        <font-awesome-icon
                            icon = "trash"
                        />
                    </button>
                </td>
            </tr>
        </tbody></table>
    </div>
</template>

<script>
import orderDetail from './OrderDetail.vue'
export default {
    props: ['items'],
    components:{
        orderDetail
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
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
    
}
</script>
<style scoped>
.item{
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
.removeButton{
    border-style: none;
    background: none;
}
</style>