<template>
  <div>
    <header-component />
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
      <empty-cart v-if="itemCart.length === 0" />
      <div class="cart" v-else>
        <div class="headerCart">
          <div class="select" style="text-align: left">Select</div>
          <div class="product">Product</div>
          <div class="unitPrice">Unit Price</div>
          <div class="quantity">Quantity</div>
          <div class="price">Price(USD)</div>
        </div>

        <div class="itemCart" v-for="(item, index) in itemCart" :key="item.id">
          <input
            class="select"
            type="checkbox"
            v-model="selected"
            :value="item.id"
            number
          />
          <div class="product">
            <img class="image" v-bind:src="item.image" />
            <div class="title-rating">
              <p>{{ item.name }}</p>
              <!-- <div class="rating">
              <i class="fas fa-star"></i>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div> -->
            </div>
          </div>
          <div class="unitPrice">{{ item.unitPrice }}</div>
          <div class="quantity">
            <font-awesome-icon
              icon="minus-circle"
              class="button minus"
              v-on:click="changeQuantity(index, -1)"
            />
            <span class="quantity">{{ item.quantity }}</span>
            <font-awesome-icon
              icon="plus-circle"
              class="button plus"
              v-on:click="changeQuantity(index, 1)"
            />
          </div>
          <div class="price">
            {{ parseFloat(item.quantity * item.unitPrice).toFixed(2) }}
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
    <footer-component/>
  </div>
</template>

<script>
import EmptyCart from "./EmptyCart.vue";
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from "./HeaderComponent.vue";
export default {
  components: { EmptyCart, HeaderComponent, FooterComponent },
  data: function () {
    return {
      itemCart: {},
      selected: [],
    };
  },

  methods: {
    getdata() {
      this.itemCart = [
        {
          id: 0,
          name: "Nha gia kim",
          rating: 4.0,
          quantity: 2,
          unitPrice: 3.1,
          image:
            "https://eccthai.com/wp-content/uploads/2021/03/nha-gia-kim.jpg",
        },
        {
          id: 1,
          name: "Cha giau cha ngheo",
          rating: 5.0,
          quantity: 10,
          unitPrice: 36.2,
          image:
            "https://chagiauchangheo.club/wp-content/uploads/2018/11/d%E1%BA%A1y-con-l%C3%A0m-gi%C3%A0u-t%E1%BA%ADp-3-cha-gi%C3%A0u-cha-ngh%C3%A8o.jpg",
        },
        {
          id: 2,
          name: "Đắc nhân tâm",
          rating: 5.0,
          quantity: 2,
          unitPrice: 20.2,
          image:
            "https://eccthai.com/wp-content/uploads/2021/01/sach-dac-nhan-tam-dale-carnegie.jpg",
        },
        {
          id: 3,
          name: "Tôi tài giỏi bạn cũng thế",
          rating: 5.0,
          quantity: 3,
          unitPrice: 30.3,
          image:
            "https://salt.tikicdn.com/ts/product/76/c0/1e/0ff7ee76ba4d2529b177c7891132abac.jpg",
        },
        {
          id: 4,
          name: "Chiến binh cầu vồng",
          rating: 5.0,
          quantity: 4,
          unitPrice: 40.4,
          image:
            "https://salt.tikicdn.com/cache/w1200/media/catalog/product/c/h/chienbinhcauvong.u5430.d20170927.t153952.139563.jpg",
        },
      ];
    },

    changeQuantity: function (index, x) {
      if (x == -1 && this.itemCart[index].quantity == 1)
        this.deleteId(this.itemCart[index].id);
      else this.itemCart[index].quantity += x;
    },
    totalCal: function () {
      var res = this.itemCart.reduce(
        (x, y) =>
          this.selected.includes(y.id) ? x + y.quantity * y.unitPrice : x,
        0
      );
      return parseFloat(res).toFixed(2);
    },
    toggleSelect: function () {
      var select = this.selectAll;
      this.itemCart.forEach(function (item) {
        item.checked = !select;
      });
      this.selectAll = !select;
    },
    deleteSelect: function () {
      console.log("start delete", this.itemCart, this.selected);
      while (this.selected.length != 0) {
        this.deleteId(this.selected[0]);
        this.selected.splice(0, 1);
      }
      console.log("end delete", this.itemCart, this.selected);
    },
    deleteId: function (id) {
      for (var i = 0; i < this.itemCart.length; i++) {
        if (this.itemCart[i].id === id) {
          this.itemCart.splice(i, 1);
          return true;
        }
      }
      return false;
    },
  },
  computed: {
    selectAll: {
      get: function () {
        return this.itemCart
          ? this.selected.length == this.itemCart.length
          : false;
      },
      set: function (value) {
        var selected = [];

        if (value) {
          this.itemCart.forEach(function (item) {
            selected.push(item.id);
          });
        }

        this.selected = selected;
      },
    },
  },
  created() {
    this.getdata();
  },
};
</script>
<style scoped>
.cartPage {
  margin: auto;
  width: 1000px;
  font-family: inter, Courier, monospace;
  background-color: #ebedef;
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
.quantity {
  width: 15%;
}
.price {
  width: 20%;
}

.cart {
  display: flex;
  flex-direction: column;
  background-color: #ebedef;
}

.headerCart,
.itemCart,
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
.itemCart .product {
  width: 45%;
}

.itemCart .select,
.footerCart .select {
  width: 5%;
}

.itemCart {
  height: 100px;
  background-color: white;
  font-weight: bold;
}

.product img {
  width: 80px;
  height: 80px;
}
.product .title-rating {
  padding-left: 10px;
  font-weight: normal;
}

.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.quantity .button {
  margin: 15%;
  background: none;
}
.quantity .button.minus {
  color: red;
  border-color: red;
}
.quantity .button.plus {
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