<template>
  <div>
    <div class="purchasedPage">
      <!-- <router-link :to="{ title: 'ordermanagement' }">
      <button class="goBackButton">
        <font-awesome-icon icon="arrow-circle-left" class="goBackIcon" />
      </button>
    </router-link> -->
      <div class="bigTitle">
        <div class="box-placeholder"></div>
        <div>
          <h1><strong>Purchased</strong></h1>
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
        v-if="itemPurchased.length == 0"
        image="https://png.pngtree.com/png-vector/20190721/ourmid/pngtree-empty-box-icon-for-your-project-png-image_1557183.jpg"
        message="Your Purchased is empty !"
      />
      <div class="cart" v-else>
        <div class="headerCart">
          <div class="product">Product</div>
          <div class="cost_price">Unit Price</div>
          <div class="amount">Amount</div>
          <div class="price">Price(USD)</div>
          <div class="order_status">Status</div>
        </div>

        <div
          class="itemCart"
          v-for="(item, index) in filteredResources"
          :key="index"
        >
          <div class="product">
            <img class="image" :src="'/images/' + item.image" />
            <div class="title-rating">
              <p>{{ item.title }}</p>
              <!-- <div class="rating">
                <i class="fas fa-star"></i>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div> -->
            </div>
          </div>
          <div class="cost_price">{{ item.cost_price }}</div>
          <div class="amount">
            <span class="amount">{{ item.amount }}</span>
          </div>
          <div class="price">
            {{ parseFloat(item.amount * item.cost_price).toFixed(2) }}
          </div>
          <div class="order_status" v-bind:id="item.order_status">
            {{ item.order_status }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmptyCart from "./EmptyCart.vue";
export default {
  props: ["mypurchased"],
  components: { EmptyCart },
  data: function () {
    return {
      searchQuery: "",
      itemPurchased: {},
    };
  },
  computed: {
    filteredResources() {
      if (this.searchQuery) {
        return this.itemPurchased.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.itemPurchased;
      }
    },
  },
  methods: {},
  created() {
    this.itemPurchased = this.mypurchased;
  },
};
</script>
<style scoped>
.purchasedPage {
  margin: auto;
  width: 1000px;
  font-family: inter, Courier, monospace;
  background-color: #fff;
}
.purchasedPage .emptyCart {
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
.cost_price {
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
  background-color: #ebedef;
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

.itemCart .order_status {
  font-size: 14px;
  color: white;
  padding: 5px;
  border-radius: 15px;
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
</style>