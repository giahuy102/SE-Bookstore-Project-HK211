<template>
  <div id="home">
    <div id="hot-sale">
      <div class="container-custom">
        <h3>Hot Sale!</h3>
        <div id="button-link-group" class="d-flex">
          <button
            @click="addToCart(3)"
            id="buy-link"
            class="d-flex justify-content-center align-items-center"
            style="color: white"
          >
            Buy now
          </button>
          <a
            href="/detail/3"
            id="detail-link"
            class="d-flex justify-content-center align-items-center"
            >See details</a
          >
        </div>
        <img src="/images/imaginary-friend.png" alt="" />
      </div>
    </div>

    <div id="category">
      <!-- <Splide :options="{ rewind: true }">
                <SplideSlide>
                    <p>fsfsfsfs</p>
                </SplideSlide>
                <SplideSlide>
                    <p>fsfsfsfsfs</p>
                </SplideSlide>
            </Splide> -->
      <h2>Explore The World with These Categories of Books</h2>
      <Flicking :options="{ circular: true }" :plugins="plugins">
        <!-- <div class="card-panel"><img src="/images/harry-potter-1.png" alt=""></div>
                <div class="card-panel"><img src="/images/harry-potter-1.png" alt=""></div>
                <div class="card-panel"><img src="/images/harry-potter-1.png" alt=""></div> -->
        <div
          v-for="category in categories"
          :key="category.category_id"
          class="card-panel"
          id="background-category"
        >
          <a :href="'/category/' + category.category_id" id="category-display">
            <img :src="'/images/' + category.category_image" alt="" />
            <span></span>
            <p>
              {{ category.category_name }}
            </p>
          </a>
        </div>
        <span slot="viewport" class="flicking-arrow-prev"></span>
        <span slot="viewport" class="flicking-arrow-next"></span>
      </Flicking>
    </div>

    <div id="book-list">
      <div class="container-custom">
        <h3>
          <a href="/category/popular_week">Popular Books this Week</a>
        </h3>
        <div class="d-flex flex-wrap book-item-list">
          <!-- <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a> -->

          <a
            v-for="book in popularBooks"
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

      <div class="container-custom">
        <h3>
          <a href="/category/best_seller">Best seller</a>
        </h3>

        <div class="d-flex flex-wrap book-item-list">
          <!-- <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a> -->
          <a
            v-for="book in bestSellers"
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

      <div class="container-custom">
        <h3>
          <a href="/category/special_discount">Special Discount</a>
        </h3>

        <div class="d-flex flex-wrap book-item-list">
          <!-- <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a> -->
          <a
            v-for="book in specialDiscounts"
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
    </div>
    <notifications group="foo" position="bottom right" />
  </div>
</template>


<script>
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import { addToCart } from "../cartHelper";
export default {
  props: ["books", "categories"],
  data() {
    return {
      popularBooks: [],
      bestSellers: [],
      specialDiscounts: [],
      plugins: [new Arrow()],
    };
  },
  methods: {
    getPopularBooks() {
      this.popularBooks = this.books.slice();
      this.popularBooks.sort(function (a, b) {
        return b.num_view - a.num_view;
      });
      this.popularBooks = this.popularBooks.slice(0, 5);
    },
    getBestSellers() {
      this.bestSellers = this.books.slice();
      this.bestSellers.sort(function (a, b) {
        return b.num_sale - a.num_sale;
      });
      this.bestSellers = this.bestSellers.slice(0, 5);
    },
    getSpecialDiscounts() {
      this.specialDiscounts = this.books.slice();
      this.specialDiscounts.sort(function (a, b) {
        return b.sale - a.sale;
      });
      this.specialDiscounts = this.specialDiscounts.slice(0, 5);
    },
    addToCart(id) {
      return addToCart(id, this);
    },
  },
  mounted() {
    console.log(this.categories);
    this.getPopularBooks();
    this.getBestSellers();
    this.getSpecialDiscounts();
    this.isLogin = window.isLogin;
    this.username = window.username;
    console.log(this.isLogin);
  },
};
</script>


<style scoped>
a {
  text-decoration: none;
  color: white;
  display: inline-block;
}

.container-custom {
  width: 1200px;
  margin: auto;
}

#hot-sale {
  height: 570px;
  background-image: url("/images/background-decoration-1.png");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 25%;
  background-size: 65% auto;
}

#hot-sale {
  padding-top: 100px;
}

#hot-sale .container-custom {
  position: relative;
}

#hot-sale img {
  position: absolute;
  right: 150px;
  top: -50px;
  display: inline-block;
  height: 422px;
  width: 291px;
  cursor: pointer;
}

#detail-link:hover {
  background-color: #113963;
  color: white;
}

#button-link-group {
  margin-top: 40px;
}

#hot-sale h3 {
  font-family: "Inria Serif";
  font-weight: 700;
  color: #296063;
  font-size: 100px;
}

#buy-link,
#detail-link {
  font-family: "Inria Serif";
  width: 150px;
  height: 54px;
  border-radius: 50px;
  font-size: 20px;
}

#buy-link {
  background-color: #113963;
  margin-right: 60px;
}

#detail-link {
  color: #112839;
  border: 1px solid #01162a;
}

/* #book-list a {
    width: 18%;
} */

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
}

#book-list h3 a:hover {
  color: rgb(34, 76, 165);
}

.card-panel {
  margin-right: 100px;
  margin-left: 100px;
}

#category {
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url("/images/background-category.png");
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(0deg, rgba(1, 14, 33, 0.8), rgba(1, 14, 33, 0.8)),
    url(/images/background-category.png);
}

#category h2 {
  text-align: center;
  font-family: "Inria Serif";
  font-size: 45px;
  font-weight: 700;
  color: white;
  padding-bottom: 70px;
}

#category img {
  width: 255px;
  height: 420px;
}

#category-display {
  position: relative;
}

#category-display span {
  position: absolute;
  display: inline-block;
  width: 100%;
  /* height: 100%; */
  height: 0;
  background-color: rgba(3, 3, 32, 0.973);
  top: 0;
  left: 0;
  z-index: 9;
  transition: all 0.5s;
}

#category-display p {
  transition: all 0.5s;
  position: absolute;
  display: inline-block;
  top: 48%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
  font-size: 0;
  font-weight: 600;
  height: 37.5px;
  margin-bottom: 0;
}

#category-display:hover span {
  height: 100%;
}

#category-display:hover p {
  font-size: 22px;
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
</style>