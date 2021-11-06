<template>
  <div class="paymentPage">
    <!-- <payment-popup-result result:"1"> -->
    <div class="bigTitle">
      <div class="box-placeholder"></div>
      <div>
        <h1><strong>Payment</strong></h1>
      </div>
    </div>

    <div class="formPayment">
      <label for="cardNumber">CARD NUMBER</label>
      <input
        v-model="this.cardNumber"
        type="text"
        size="10"
        class="form-control"
        name="cardNumber"
        placeholder="Valid Card Number"
        autocomplete="cc-number"
        required
        autofocus
      />
      <!-- <span class="input-group-addon"><i class="fa fa-credit-card"></i></span> -->
      <label for="cardExpir">EXPIRATION DATE</label>
      <input
        v-model="cardExpir"
        type="text"
        size="5"
        class="form-control"
        name="cardExpiry"
        placeholder="MM / YY"
        autocomplete="cc-exp"
        required
      />
      <label for="cardCVC">CV CODE</label>
      <input
        v-model="cardCVC"
        type="text"
        size="3"
        class="form-control"
        name="cardCVC"
        placeholder="CVC"
        autocomplete="cc-csc"
        required
      />

      <button class="blueButton" type="submit" @click="checkForm">
        Confirm Payment
      </button>
    </div>
  </div>
</template>

<script>
// import PaymentPopupResult from './PaymentPopupResult.vue';
import swal from "sweetalert";
export default {
  data: {
    cardNumber: null,
    cardExpir: null,
    cardCVC: null,
  },
  components: {
    // PaymentPopupResult,
  },
  methods: {
    checkForm: function () {
      if (!this.cardNumber) {
        swal("Unsuccessful!", "Payment failed!", "error");
      } else {
        swal("Successful!", "Payment successful!", "success").then(() => {
          window.location.href = "/purchase";
        });
      }
    },
  },
};
</script>
<style scoped>
.paymentPage {
  margin: auto;
  width: 1000px;
  font-family: inter, Courier, monospace;
  background-color: #ebedef;
}

.bigTitle {
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
  align-items: center;
}

.box-placeholder {
  height: 60px;
  width: 15px;
  background-color: #00aced;
  margin-right: 20px;
}

.formPayment {
  width: 70%;
  background-color: #fff;
  padding: 40px;
  border-radius: 25px;
  margin: 40px auto;
  padding-bottom: 70px; /*  */
}

.blueButton {
  color: white;
  background-color: #1dcaff;
  font-weight: bold;
  font-size: 15px;
  padding: 5px 20px;
  border: none;
  margin-top: 20px;
  float: right; /*  */
}
</style>