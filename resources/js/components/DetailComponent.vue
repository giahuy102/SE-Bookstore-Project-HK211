<template>
  <div class="container-custom">
    <div id="detail" class="row">
      <div class="col-3">
        <img :src="'/images/' + book.image" alt="" />
      </div>

      <div class="col">
        <h2>{{ book.title }}</h2>
        <p id="author">{{ book.author + " (Author)" }}</p>
        <p id="review">{{ book.num_view + "M review" }}</p>
        <p id="price">
          <span>{{ "$" + book.selling_price }}</span>
          <span>{{
            "$" + (book.selling_price - book.selling_price * book.sale/100)
          }}</span>
        </p>
        <button v-on:click="addToCart(book.book_id)">BUY NOW</button>

        <h3>Description</h3>
        <p>
          {{ book.description }}
        </p>

        <h3>Product Details</h3>
        <ul>
          <li>
            <span>Publisher:</span>
            <span>Alien X Company</span>
          </li>
          <li>
            <span>Publish Date:</span>
            <span>{{ book.publish_day }}</span>
          </li>
          <li>
            <span>Page:</span>
            <span>{{ book.page_number }}</span>
          </li>
          <li>
            <span>Language:</span>
            <span>{{ book.language }}</span>
          </li>
          <li>
            <span>Category:</span>
            <span>{{ category.category_name }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="container-custom" id="book-list">
      <h3>
        <a :href="'/similar-books/' + book.book_id">Similar Books</a>
      </h3>

      <div class="d-flex flex-wrap book-item-list">
        <a
          v-for="book in similarBooks"
          :key="book.book_id"
          :href="'http://127.0.0.1:8000/detail/' + book.book_id"
          class="display-book-item"
        >
          <img
            :src="'/images/' + book.image"
            :alt="book.title"
            class="img-book"
          />
        </a>
      </div>
    </div>
    <notifications group="foo" position="bottom right" />
  </div>
</template>

<script>
import { addToCart } from "../cartHelper";
export default {
  props: ["book", "category", "similar_books"],
  data() {
    return {
      similarBooks: {},
    };
  },
  methods: {
    addToCart(id) {
      return addToCart(id, this);
    },
  },
  mounted() {
    this.similarBooks = this.similar_books.slice(0, 5);
    this.isLogin = window.isLogin;
    this.username = window.username;
    console.log(this.isLogin);
  },
};
</script>

<style scoped>
.container-custom {
  width: 1200px;
  margin: auto;
}
#detail img {
  width: 100%;
  height: 420px;
  width: 260px;
}
#detail h2 {
  color: #1c2a39;
  font-size: 55px;
  font-family: "Vollkorn";
  font-weight: 400;
}
#author {
  font-family: "Vollkorn";
  font-size: 25px;
  color: #1c2a39;
}
#review {
  color: #5c6a79;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 25px;
}
#price span:first-child {
  font-family: "Montserrat";
  color: #1c2a39;
  font-weight: 700;
  font-size: 25px;
}
#price span:last-child {
  font-family: "Montserrat";
  color: #bdbdbd;
  font-weight: 600;
  font-size: 25px;
  margin-left: 15px;
}
#detail button {
  outline: 0;
  border: 1px solid #3e3385;
  font-family: "Montserrat";
  padding: 3px 12px;
  width: 330px;
  height: 55px;
  color: #3e3385;
  font-weight: 700;
  font-size: 22px;
}
#detail button:hover {
  background-color: #3e3385;
  color: white;
}
#detail h3 {
  font-family: "Vollkorn";
  font-weight: 600;
  color: #1c2a39;
  margin-top: 50px;
}
#detail p {
  font-family: "Vollkorn";
  font-weight: 400;
  color: #1c2a39;
  margin-top: 20px;
  font-size: 20px;
}
ul {
  margin-top: 20px;
}
li span:first-child {
  font-family: "Vollkorn";
  color: #1c2a39;
  font-weight: 700;
  font-size: 20px;
}
li span:last-child {
  font-family: "Vollkorn";
  color: #1c2a39;
  font-weight: 500;
  font-size: 20px;
}
.display-book-item {
  margin-left: 22.275px;
}
.book-item-list .display-book-item:first-child {
  margin-left: 0;
}
.img-book {
  transition: all 0.5s;
}
.img-book:hover {
  transform: scale(1.15);
}
#book-list {
  margin-top: 100px;
}
#book-list img {
  width: 222.18px;
  height: 355px;
}
#book-list h3 a {
  margin-top: 60px;
  margin-bottom: 50px;
  font-family: "Inria Serif";
  font-weight: 700;
  color: #011445;
  font-size: 40px;
  display: inline-block;
  text-decoration: none;
}
#book-list h3 a:hover {
  color: rgb(34, 76, 165);
}
</style>