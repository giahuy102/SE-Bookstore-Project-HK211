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
      </div>
      <empty-cart v-if="mycart.length == 0" />
      <div class="cart" v-else>
        <div class="headerCart">
          <div class="select" style="text-align: left">Select</div>
          <div class="product">Product</div>
          <div class="unitPrice">Unit Price</div>
          <div class="amount">Amount</div>
          <div class="price">Price(USD)</div>
        </div>

        <div class="mycart" v-for="(item, index) in mycart" :key="index">
          <input
            class="select"
            type="checkbox"
            v-model="selected"
            :value="item.book_id"
            number
          />
          <div class="product">
            <img class="image" :src="'/images/' + item.image" alt="" />
            <div class="title-rating">
              <p>{{ item.title }} ------- {{ item.book_id }}</p>
              <!-- <div class="rating">
              <i class="fas fa-star"></i>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div> -->
            </div>
          </div>
          <div class="unitPrice">{{ item.cost_price }}</div>
          <div class="amount">
            <i
              class="fas fa-minus-circle button minus"
              @click="changeAmount(index, -1)"
            ></i>
            <span class="amount">{{ item.amount }}</span>
            <i
              class="fas fa-plus-circle button plus"
              @click="changeAmount(index, 1)"
            ></i>
          </div>
          <div class="price">
            {{ parseFloat(item.amount * item.cost_price).toFixed(2) }}
          </div>
        </div>

        <div class="footerCart">
          <input class="select" type="checkbox" v-model="selectAll" />
          <button class="selectAll" @click="toggleSelect">Select all</button>
          <button class="delete" @click="deleteSelect">Delete</button>
          <div class="total">
            <p class="totalPayment">Total Payment</p>
            <p class="totalPrice">{{ totalCal() }}</p>
          </div>
        </div>

        <div class="purchases">
          <button class="blueButton">Purchases</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmptyCart from "./EmptyCart.vue";
export default {
  props: ["mycart"],
  components: { EmptyCart },
  data: function () {
    return {
      // mycart: {},
      selected: [],
    };
  },

  methods: {
    // getdata() {
    //   axios
    //     .get("/api/cart")
    //     .then((response) => {
    //       this.mycart = response.data;
    //       console.log(this.mycart);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

    changeAmount: function (index, x) {
      if (x == -1 && this.mycart[index].amount == 1)
        this.deleteId(this.mycart[index].book_id);
      else {
        this.mycart[index].amount += x;

        console.log(this.mycart);

        axios({
          method: "put",
          url: "api/cart/" + this.mycart[index].book_id,
          data: {
            amount: this.mycart[index].amount,
          },
          headers: {"X-CSRFToken": csrf_token},
        })
          // .put("api/cart/" + this.mycart[index].book_id, {
          //   amount: this.mycart[index].amount,
          // })
          .then((responde) => {
            if (responde.status == 200) {
              console.log("changeeeeeeeee!");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    totalCal: function () {
      var res = this.mycart.reduce(
        (x, y) =>
          this.selected.includes(y.book_id) ? x + y.amount * y.cost_price : x,
        0
      );
      return parseFloat(res).toFixed(2);
    },
    toggleSelect: function () {
      var select = this.selectAll;
      this.mycart.forEach(function (item) {
        item.checked = !select;
      });
      this.selectAll = !select;
    },
    deleteSelect: function () {
      console.log("start delete", this.mycart, this.selected);
      while (this.selected.length != 0) {
        this.deleteId(this.selected[0]);
        this.selected.splice(0, 1);
      }
      console.log("end delete", this.mycart, this.selected);
    },
    deleteId: function (id) {
      for (var i = 0; i < this.mycart.length; i++) {
        if (this.mycart[i].book_id === id) {
          this.mycart.splice(i, 1);
          return true;
        }
      }
      return false;
    },
  },
  computed: {
    selectAll: {
      get: function () {
        return this.mycart ? this.selected.length == this.mycart.length : false;
      },
      set: function (value) {
        var selected = [];

        if (value) {
          this.mycart.forEach(function (item) {
            selected.push(item.book_id);
          });
        }

        this.selected = selected;
      },
    },
  },
  created() {
    // this.getData();
    // this.mycart = mycart;
    // console.log("carrtIemmmm =  ", mycart);
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
.mycart,
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
.mycart .product {
  width: 45%;
}

.mycart .select,
.footerCart .select {
  width: 5%;
}

.mycart {
  height: 100px;
  /* background-color: white; */
  font-weight: bold;
  background-color: #ebedef;
}

.product img {
  width: 80px;
  height: 80px;
}
.product .title-rating {
  padding-left: 10px;
  font-weight: normal;
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