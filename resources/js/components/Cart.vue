<template>
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

    <div class="cart">
      <div class="headerCart">
        <div class="select" style="text-align: left">Select</div>
        <div class="product">Product</div>
        <div class="unitPrice">Unit Price</div>
        <div class="amount">Amount</div>
        <div class="price">Price(USD)</div>
      </div>

      <div class="itemCart" v-for="(item, index) in itemCart" :key="item.id">
        <input class="select" type="checkbox" />
        <div class="product">
          <img class="image" v-bind:src="item.image" />
          <div class="title-rating">
            <p>{{ item.name }}</p>
            <div class="rating">
              <i class="fas fa-star"></i>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
        </div>
        <div class="unitPrice">{{ item.unitPrice }}</div>
        <div class="amount">
          <font-awesome-icon
            icon="minus-circle"
            class="button minus"
            v-on:click="changeAmount(index, -1)"
          />
          <span class="quantity">{{ item.amount }}</span>
          <font-awesome-icon
            icon="plus-circle"
            class="button plus"
            v-on:click="changeAmount(index, 1)"
          />
        </div>
        <div class="price">
          {{ parseFloat(item.amount * item.unitPrice).toFixed(2) }}
        </div>
      </div>

      <div class="footerCart">
        <input class="select" type="checkbox" />
        <button class="selectAll">Select all</button>
        <button class="delete">Delete</button>
        <div class="total">
          <p class="totalPayment">Total Payment</p>
          <p class="totalPrice">{{ totalCal() }}</p>
        </div>
      </div>

      <div class="purchased">
        <button>Purchased</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      itemCart: {},
    };
  },

  methods: {
    getdata() {
      this.itemCart = [
        {
          id: 0,
          name: "Nha gia kim",
          rating: 4.0,
          amount: 2,
          unitPrice: 3.1,
          image:
            "https://eccthai.com/wp-content/uploads/2021/03/nha-gia-kim.jpg",
        },
        {
          id: 1,
          name: "Cha giau cha ngheo",
          rating: 5.0,
          amount: 10,
          unitPrice: 36.2,
          image:
            "https://chagiauchangheo.club/wp-content/uploads/2018/11/d%E1%BA%A1y-con-l%C3%A0m-gi%C3%A0u-t%E1%BA%ADp-3-cha-gi%C3%A0u-cha-ngh%C3%A8o.jpg",
        },
      ];
    },

    changeAmount: function (index, x) {
      if (x == -1 && this.itemCart[index].amount == 1) return;
      this.itemCart[index].amount += x;
    },
    totalCal: function () {
      var res = this.itemCart.reduce((x, y) => x + y.amount * y.unitPrice, 0);
      return parseFloat(res).toFixed(2);
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
  background-color: #ebedef;
}

.headerCart,
.itemCart,
.footerCart,
.purchased {
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
  width: 15%;
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
p.totalPrice {
  width: 30%;
  margin-left: 0;
  font-weight: bold;
  color: #0084b4;
  font-size: 30px;
}

.purchased {
  /* background-color: #fff; */
  justify-content: flex-end;
}
.purchased button {
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