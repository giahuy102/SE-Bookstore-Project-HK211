<template>
  <div>
    <div class="cartPage">
      <!-- <router-link :to="{ name: 'ordermanagement' }">
      <button class="goBackButton">
        <font-awesome-icon icon="arrow-circle-left" class="goBackIcon" />
      </button>
    </router-link> -->

      <div class="bigTitle">
        <div class="box-placeholder"></div>
        <div>
          <h1><strong>Cart</strong></h1>
        </div>
        <div class="search" style="margin-left: auto">
          <input
            class="form-control"
            type="text"
            v-model="searchQuery"
            placeholder="Search"
          />
        </div>
      </div>
      <empty-cart
        v-if="cartItem.length == 0"
        image='/images/emptyCart.jpg'
        message="Your Cart is empty !"
      />
      <div class="cart" v-else>
        <div class="headerCart">
          <div class="select" style="text-align: left">Select</div>
          <div class="product">Product</div>
          <div class="unitPrice">Unit Price</div>
          <div class="amount">Amount</div>
          <div class="price">Price(USD)</div>
        </div>

        <div
          class="cartItem"
          v-for="(item, index) in filteredResources"
          v-bind:key="index"
        >
          <input
            class="select"
            type="checkbox"
            v-model="selectedID"
            :value="item.book_id"
            number
          />
          <div class="product">
            <img class="image" :src="'/images/' + item.image" alt="" />
            <div class="title-rating">
              <p>
                <a :href="'/detail/' + item.book_id"
                  >{{ item.title }}</a
                >
              </p>
              <!-- <div class="rating">
              <i class="fas fa-star"></i>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div> -->
            </div>
          </div>
          <div class="unitPrice">{{ item.selling_price }}</div>
          <div class="amount">
            <i
              class="fas fa-minus-circle button minus"
              @click="changeAmount(item.book_id, -1)"
            ></i>
            <span class="amount">{{ item.amount }}</span>
            <i
              class="fas fa-plus-circle button plus"
              @click="changeAmount(item.book_id, 1)"
            ></i>
          </div>
          <div class="price">
            {{ parseFloat(item.amount * item.selling_price).toFixed(2) }}
          </div>
        </div>

        <div class="footerCart">
          <input class="select" type="checkbox" v-model="selectAll" />
          <button class="selectAll" @click="toggleSelect">Select all</button>
          <button
            class="delete"
            @click="deleteSelect"
            :disabled="selectedID.length <= 0"
          >
            Delete
          </button>
          <div class="total">
            <p class="totalPayment">Total Payment</p>
            <p class="totalPrice">{{ totalCal() }}</p>
          </div>
        </div>

        <div class="purchases">
          <b-button
            class="blueButton"
            v-b-modal.modal-prevent-closing
            :disabled="selectedID.length <= 0"
            >Purchases</b-button
          >
          <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Payment Information"
            centered
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
          >
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                label="CARD NUMBER"
                label-for="cartNumber-input"
                invalid-feedback="Cart Number is required"
              >
                <b-form-input
                  id="cartNumber-input"
                  v-model="cardNumber"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="EXPIRATION DATE"
                label-for="expDate-input"
                invalid-feedback="EXPIRATION DATE is required"
              >
                <b-form-input
                  id="expDate-input"
                  v-model="expDate"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="CV CODE"
                label-for="cvCode-input"
                invalid-feedback="CV CODE is required"
              >
                <b-form-input id="cvCode-input" v-model="cvCode"></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmptyCart from "./EmptyCart.vue";
import swal from "sweetalert";
export default {
  props: ["mycart"],
  components: { EmptyCart },
  data: function () {
    return {
      searchQuery: "",

      cartItem: {},
      selectedID: [],

      cardNumber: "",
      expDate: "",
      cvCode: "",
    };
  },

  methods: {
    changeAmount: function (book_id, x) {
      var index = 0;
      for (; index < this.cartItem.length; index++) {
        if (this.cartItem[index].book_id === book_id) {
          break;
        }
      }

      if (x == -1 && this.cartItem[index].amount == 1) return;
      else {
        if (x == 1 && this.cartItem[index].amount >= this.cartItem[index].quantity) {
          return
        }
        this.cartItem[index].amount += x;
        console.log(this.cartItem);
        axios
          .put("api/cart/" + this.cartItem[index].book_id, {
            data: { amount: this.cartItem[index].amount },
          })
          .then((responde) => {
            if (responde.status == 200) {
              console.log("changeeeeeeeee!");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }

      this.$root.$emit("changeTotalAmount", x);
    },
    totalCal: function () {
      var res = this.cartItem.reduce(
        (x, y) =>
          this.selectedID.includes(y.book_id) ? x + y.amount * y.selling_price : x,
        0
      );
      return parseFloat(res).toFixed(2);
    },
    toggleSelect: function () {
      var select = this.selectAll;
      this.cartItem.forEach(function (item) {
        item.checked = !select;
      });
      this.selectAll = !select;
    },
    deleteSelect: function () {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          //
          console.log("start delete", this.cartItem, this.selectedID);

          while (this.selectedID.length != 0) {
            this.deleteId(this.selectedID[0]);
            this.selectedID.splice(0, 1);
          }
          console.log("end delete", this.cartItem, this.selectedID);
          //
          // swal("Poof! Your imaginary file has been deleted!", {
          //   icon: "success",
          // });
        }
        // else {
        //   swal("Your imaginary file is safe!");
        // }
      });
    },
    deleteId: function (id) {
      axios
        .delete("api/cart/" + id)
        .then((responde) => {
          if (responde.status == 200) {
            console.log("delete done");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      for (var i = 0; i < this.cartItem.length; i++) {
        if (this.cartItem[i].book_id === id) {
          this.$root.$emit("changeTotalAmount", -this.cartItem[i].amount);
          this.cartItem.splice(i, 1);
          return true;
        }
      }
      return false;
    },

    checkFormValidity() {
      if (!this.cardNumber) {
        return 0;
      }
      return 1;
    },
    resetModal() {
      this.cardNumber = "";
      this.expDate = "";
      this.cvCode = "";
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        swal("Unsuccessful!", "Payment failed!", "error");
        return;
      }

      // update table include
      axios
        .post("api/cart/payment/", {
          data: { selectedID: this.selectedID },
        })
        .then((responde) => {
          if (responde.status == 200) {
            console.log("changeeeeeeeee!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      swal("Successful!", "Payment successful!", "success").then(() => {
        window.location.href = "/purchased";
      });
      // update cart
      // this.deleteSelect();
    },
  },
  computed: {
    selectAll: {
      get: function () {
        return this.cartItem
          ? this.selectedID.length == this.cartItem.length
          : false;
      },
      set: function (value) {
        var selectedID = [];

        if (value) {
          this.cartItem.forEach(function (item) {
            selectedID.push(item.book_id);
          });
        }

        this.selectedID = selectedID;
      },
    },
    filteredResources() {
      if (this.searchQuery) {
        return this.cartItem.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.cartItem;
      }
    },
  },
  created() {
    axios
      .get("/api/user")
      .then((response) => console.dir(response.data))
      .catch((error) => console.log(error));

    this.cartItem = this.mycart;
  },
};
</script>
<style scoped>
.cartPage {
  margin: auto;
  width: 1000px;
  font-family: inter, Courier, monospace;
  /* background-color: #ebedef; */
}
.cartPage .emptyCart {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.select {
  width: 10%;
}
input[type="checkbox"] {
  /* Double-sized Checkboxes */
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
  transform: scale(1.5);
  /* padding: 10px; */
}
.product {
  display: flex;
  width: 40%;
}
.unitPrice {
  width: 15%;
}
.amount {
  width: 15%;
}
.price {
  width: 20%;
}

.cart {
  display: flex;
  flex-direction: column;
  /* background-color: #ebedef; */
}

.headerCart,
.cartItem,
.footerCart,
.purchases {
  display: flex;
  align-items: center;
  text-align: center;
  overflow: hidden;
  height: 55px;
  font-size: 20px;
  /* background-color: #c0deed; */
  color: black;
  padding: 0 20px;
  margin: 5px;
}
.headerCart,
.footerCart {
  background-color: #c0deed;
}
.headerCart div {
  color: #0084b4;
  font-weight: bold;
}
.cartItem .product {
  width: 45%;
}

.cartItem .select,
.footerCart .select {
  width: 5%;
}

.cartItem {
  height: 100px;
  /* background-color: white; */
  font-weight: bold;
  background-color: #ebedef;
}

.product img {
  width: 80px;
  height: 80px;
}
.title-rating a {
  padding-left: 10px;
  font-weight: normal;
  color: #000;
  text-decoration: none;
}

.amount {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.amount .button {
  margin: 15%;
  background: none;
}
.amount .button.minus {
  color: red;
  border-color: red;
}
.amount .button.plus {
  color: green;
  border-color: green;
}

.footerCart button {
  margin: 0 30px;
  width: 20%;
  background-color: inherit;
  border: none;
  font-size: 20px;
}

.total {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
}
.total p {
  margin: auto 0;
}
p.totalPrice {
  width: 30%;
  margin-left: 0;
  font-weight: bold;
  color: #0084b4;
  font-size: 30px;
}

.purchases {
  /* background-color: #fff; */
  justify-content: flex-end;
}
.blueButton {
  color: white;
  background-color: #1dcaff;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 20px;
  border: none;
  margin-top: 5px;
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
</style>