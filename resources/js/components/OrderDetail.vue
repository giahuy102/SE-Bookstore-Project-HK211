<template>
    <div class="orderDetailPage">
        <div class="mainOrderDetail">
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
                        <p>{{order.cus_id}}</p>
                        <p>abc</p>
                        <select v-model="selected" class="order_statusBox" @change="updateorder_status(selected)">
                            <option value="completed">Completed</option>
                            <option value="processing">Processing</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>
                </div>
                <div class="itemTable">
                    <table class = "table hover">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Book</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>The Alchemist</td>
                                <td>1</td>
                                <td>4.00</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>The God Father</td>
                                <td>1</td>
                                <td>13.52</td>
                            </tr>
                            <tr>
                                <td> </td>
                                <td> </td>
                                <td class = "Total"><strong> Total: </strong></td>
                                <td class = "Total"><strong>13.52</strong> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="bottomOrderDetail">
                <div class="delivery">
                    <strong>Delivery Status:</strong>
                    <div class="deliveryStatus">{{order.delivery | capitalize}}</div>
                </div>
                <div class="deleteOrder">
                    <router-link :to="{name: 'ordermanagement'}">
                        <button class="deleteOrderButton" @click="removeOrder(order.order_id)">Delete</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return{
            order: {},
            id: this.$route.params.orderID,
            selected: 'completed'
        }
    },
    methods:{
        getOrderByID(id) {
            axios.get('/api/order/' + id)
            .then (response => {
                this.order = response.data
                this.selected = this.order.order_status;

                // console.log(this.item)
            })
            .catch (error => {
                console.log(error)
            })
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
    created(){
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
    background-color: white;
    margin-left: 50px;
    margin-top: 75px;
    margin-right: 30px;
}
.mainOrderDetail{
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
}
.orderfield{
    margin: 20px 0px 0px 30px;
}
.orderdetail{
    margin: 20px 0px 0px 30px;
}

.order_statusBox{
    background: #00ACED;
    color: white;
    border-radius: 10px;
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
}
.deleteOrder{
    margin-left: 65%;
}
.deleteOrderButton{
    border-style: none;
    background: red;
    color:white;
    font-size: 20px;
    padding: 8px 20px;
}
</style>