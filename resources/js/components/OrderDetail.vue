<template>
    <div class="orderDetailPage">
            <router-link :to="{name: 'ordermanagement'}">
                <button class = "goBackButton">
                    <font-awesome-icon
                        icon = "arrow-circle-left"
                        class = "goBackIcon"
                    />
                </button>
            </router-link>
            <h1><strong>Order Detail </strong></h1>
            <div class = "orderForm">
                <div class="orderInfo">
                    <div class="orderfield">
                        <p><strong>Order ID:</strong></p>
                        <p><strong>Customer:</strong></p>
                        <p><strong>Addresss:</strong></p>
                        <p><strong>Order status:</strong></p>
                    </div>
                    <div class="orderdetail">
                        <p>{{order.order_id}}</p>
                        <p>{{customer.username}}</p>
                        <p>{{customer.address}}</p>
                        <select v-model="selected" class="order_statusBox" v-bind:id="order.order_status" @change="updateorder_status(selected)">
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="PROCESSING">PROCESSING</option>
                            <option value="CANCELLED">CANCELLED</option>
                        </select>
                    </div>
                </div>
                <div class="itemTable">
                    <table class = "table table-striped list-book">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Book</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            <tr v-for="item in items" :key="item.id" >
                                <td>{{item.book_id}}</td>
                                <td>{{item.title}}</td>
                                <td>{{item.amount}}</td>
                                <td>{{item.selling_price}}</td>
                            </tr>
                            <tr>
                                <td> </td>
                                <td> </td>
                                <td class = "Total"><strong> Total: </strong></td>
                                <td class = "Total"><strong>{{total_cost}}</strong> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="bottomOrderDetail">
                <div class="delivery">
                    <strong>Delivery Status:</strong>
                    <div class="deliveryStatus" v-bind:id="order.delivery">{{order.delivery}}</div>
                </div>
                <div class="deleteOrder">
                    <router-link :to="{name: 'ordermanagement'}">
                        <button class="delete-button" @click="removeOrder(order.order_id)">Delete</button>
                    </router-link>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return{
            order: {},
            customer:{},
            id: this.$route.params.orderID,
            selected: '',
            current_cus_id: 0,
            items: [],
            total_cost: 0
        }
    },
    methods:{
        getOrderByID: async function(id) {
            try{
                const res = await axios.get('/api/order/' + id);
                this.order = res.data[0];
                this.selected = this.order.order_status;
                const res2 = await axios.get('/api/user/' + this.order.cus_id);
                this.customer = res2.data[0];
                const res3 = await axios.get('/api/order_book/' + this.order.order_id);
                if (res3.data == 'Order List is empty.'){
                    return;
                }
                this.items = res3.data;
                for (let i = 0; i < this.items.length; i++){
                    let item = this.items[i];
                    this.total_cost += item.selling_price * item.amount;
                }
            }
            catch (error){
                console.log(error);
            }
        },
        removeOrder(id){
            axios.delete('/api/order/' + id)
            
            .catch(error => {
                console.log(error);
            })
        },
        updateorder_status(status){
            this.order.order_status = status;
            // console.log(this.order.order_status)
            axios.put(`/api/order/${this.id}`,{
                order:{
                    order_status: status
                }
            })
            
            .catch(error => {
                console.log(error);
            })
        }
    },
    async created(){
        this.getOrderByID(this.id);
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>
<style scoped>
.orderDetailPage{
    padding: 30px;
}
.goBackButton{
    color: #00ACED;
    border-style: none;
    background: none;
}
.goBackIcon{
    width: 25px;
    height: 25px;
}
h1{
    color:  #00ACED;
    display: inline-block;
    text-align: center;
    width: 80%;
}
.orderForm{
    margin-left: 20px;
    margin-right: 200px;
    margin-top: 30px;
}
.orderInfo{
    display: flex;
    background: #C0DEED;
    font-size: 20px;
    padding-left: 75px;
}
.orderfield{
    margin: 20px 0px 0px 30px;
    text-align: left;
}
.orderdetail{
    margin: 20px 0px 0px 30px;
    text-align: left;
}

.order_statusBox{
    background: #00ACED;
    color: white;
    border-radius: 10px;
    padding: 2px;
}

#COMPLETED {
  background-color: #00a410;
}

#CANCELLED {
  background-color: #fe0000;
}

#PROCESSING {
  background-color: #fec400;
}

.itemTable{
    margin-top: 30px;
}
.Total{
    color: #00ACED
}
.bottomOrderDetail{
    margin-left: 20px;
    display: flex;
}
.delivery{
    font-size: 20px;
    display: flex;
}
.deliveryStatus{
    margin-left: 20px;
    background: #cacccf;
    padding-left: 7px;
    padding-right: 7px;
    height: 35px;
    border-radius: 10px;
    color: white;
}
.deleteOrder{
    margin-left: 40vw;
}
/*.deleteOrderButton{
    border-style: none;
    background: red;
    color:white;
    font-size: 20px;
    padding: 8px 20px;
} */
.delete-button {
    background-color: red;
    border: none ;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
    margin-right: 140px;
}

.delete-button:hover {
    background-color: rgb(214, 2, 2);
}

.delete-button:focus {
    box-shadow: 0 0 0 0.2rem red;
}
</style>