<template>
    <div class="customerDetailPage">
        <div class="mainCustomerDetail">
            <h1><strong>Customer Detail </strong></h1>
            <div class = "customerForm">
                <div class="customerInfo">
                    <form class="customerdetail">
                        <div class="form-group">
                            <label for="Name" class="textLabel">Name:</label>
                            <input type="text" id="name" name="name" value="Ola Norman" class="textInput"/>
                        </div>
                        <div class="form-group">
                            <label for="Phone" class="textLabel">Phone:</label>
                            <input type="text" id="phone" name="phone" value="091*******" class="textInput"/>
                        </div>
                        <div class="form-group">
                            <label for="Email" class="textLabel">Email:</label>
                            <input type="text" id="email" name="email" value="abc@xyz.cde" class="textInput"/>
                        </div>
                        <div class="form-group">
                            <label for="Address" class="textLabel">Address:</label>
                            <input type="text" id="address" name="address" value="365, ABC street, Y city" class="textInput"/>
                        </div>
                        <div class="form-group">
                            <input type="radio" id="sex" name="sex" value="Male" class = "radioInput">
                            <label for="sex" class="radioLabel">Male</label>
                            <input type="radio" id="sex" name="sex" value="Female" class = "radioInput">
                            <label for="sex" class="radioLabel">Female</label><br>
                        </div>
                        <button class = "updateButton">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.customerDetailPage{
    background-color: white;
    margin-left: 50px;
    margin-top: 75px;
    margin-right: 30px;
}
.mainCustomerDetail{
    padding: 30px;
    margin: 30px 30px 30px 80px;
    width: 1400px;
}
h1{
    color:  #00ACED;
    display: inline-block;
    text-align: center;
    width: 80%;
}
.customerForm{
    margin-left: 20px;
    margin-right: 200px;
    margin-top: 30px;
}
.customerInfo{
    display: flex;
    background: #C0DEED;
}
.customerdetail{
    margin: 20px 0px 0px 300px;
}

.customerForm#label.sex{
    color: red;
}
.textLabel {
    font-size: 18px;
    color: #333;
    height: 20px;
    width: 100px;
    margin-top: 10px;
    margin-left: 10px;
    text-align: left;
    margin-right:15px;
    float:left;
}
.textInput {
    background: #C0DEED;
    height: 25px;
    width: 300px;
    border: 2px solid #00ACED;
    margin-top: 10px;
}
.updateButton{
    border-style: none;
    background: #00ACED;
    color: white;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 125px;
    margin-bottom: 20px;
    padding: 6px 32px;
}
.radioInput{
    margin-top: 10px;
    margin-left: 125px;
}
.radionLabel{
    margin-right: 10px;
}
</style>