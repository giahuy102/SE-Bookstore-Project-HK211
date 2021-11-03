<template>
    <div class="container-custom row">
        <div id="filter" class="col-3">
            <h3>Sort by</h3>
            <ul>
                <li class="content-filter">Price: Low to High</li>
                <li class="content-filter">Price: High to Low</li>
                <li class="content-filter">Customer review</li>
                <li class="content-filter">Publication Day</li>
            </ul>

            <h3 style="margin-top: 60px;">Filter option</h3>
            <h4>Price:</h4>
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one" class="content-filter">Under $100</label>
            <br>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two" class="content-filter">$100 to $200</label>
            <br>
            <input type="radio" id="three" value="Three" v-model="picked">
            <label for="three" class="content-filter">$200 to $500</label>
            <br>
            <input type="radio" id="four" value="Four" v-model="picked">
            <label for="four" class="content-filter">$500 to $1000</label>
            <br>
            <input type="radio" id="five" value="Five" v-model="picked">
            <label for="five" class="content-filter">Over $1000</label>

            <h4>Language:</h4>
            <input type="radio" id="eng" value="One" v-model="language">
            <label for="eng" class="content-filter">English</label>
            <br>
            <input type="radio" id="viet" value="Two" v-model="language">
            <label for="viet" class="content-filter">Vietnamese</label>
            <br>
        </div>
        <div class="col">
            <h2 id="category-name">Best seller</h2>
            <div class="products d-flex justify-content-between flex-wrap">
                <div class="product">
                    <img src="/images/imaginary-friend.png" alt="">
                    <p class="author">Stephen Chbosky</p>
                    <h4>Imaginary Friend</h4>
                    <p class="review">1.3M review</p>
                    <p class="price">
                        <span>$12.43</span>
                        <span>$42.50</span>
                    </p>
                    <button>BUY NOW</button>
                </div>


                <div class="product">
                    <img src="/images/imaginary-friend.png" alt="">
                    <p class="author">Stephen Chbosky</p>
                    <h4>Imaginary Friend</h4>
                    <p class="review">1.3M review</p>
                    <p class="price">
                        <span>$12.43</span>
                        <span>$42.50</span>
                    </p>
                    <button>BUY NOW</button>
                </div>



                <div class="product">
                    <img src="/images/imaginary-friend.png" alt="">
                    <p class="author">Stephen Chbosky</p>
                    <h4>Imaginary Friend</h4>
                    <p class="review">1.3M review</p>
                    <p class="price">
                        <span>$12.43</span>
                        <span>$42.50</span>
                    </p>
                    <button>BUY NOW</button>
                </div>



                <div class="product">
                    <img src="/images/imaginary-friend.png" alt="">
                    <p class="author">Stephen Chbosky</p>
                    <h4>Imaginary Friend</h4>
                    <p class="review">1.3M review</p>
                    <p class="price">
                        <span>$12.43</span>
                        <span>$42.50</span>
                    </p>
                    <button>BUY NOW</button>
                </div>



                <div class="product">
                    <img src="/images/imaginary-friend.png" alt="">
                    <p class="author">Stephen Chbosky</p>
                    <h4>Imaginary Friend</h4>
                    <p class="review">1.3M review</p>
                    <p class="price">
                        <span>$12.43</span>
                        <span>$42.50</span>
                    </p>
                    <button>BUY NOW</button>
                </div>



            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            picked: false,
            language: false
        }
        
    }
}
</script>


<style scoped>
.container-custom {
    width: 1200px;
    margin: auto;
}

.products {
    margin-top: 70px;
}

.product {
    width: 23%;
    margin-top: 45px;
}

.product img {
    width: 100%;
}

#filter h3 {
    font-family: "Vollkorn";
    font-weight: 700;
    font-size: 35px;
    color: #1C2A39;
}

#filter h4 {
    font-family: "Vollkorn";
    font-weight: 700;
    font-size: 20px;
    color: #112E4D;
    margin-top: 25px;
}


#category-name {
    font-family: "Vollkorn";
    font-weight: 600;
    font-size: 70px;
    color: #1C2A39;
}

.content-filter {
    font-family: "Vollkorn";
    font-weight: 400;
    font-size: 20px;
    color: #112E4D;
    cursor: pointer;
}

.author {
    font-family: 'Open Sans';
    color: #5C6A79;
    font-weight: 400;
    font-size: 17px;
}

.product h4 {
    font-family: "Montserrat";
    font-weight: 700;
    color: #1C2A39;
    font-size: 24px;
    
}

.review {
    font-family: 'Open Sans';
    color: #5C6A79;
    font-weight: 400;
    font-size: 17px;
}

.price span:first-child {
    font-family: "Montserrat";
    font-size: 15px;
    font-weight: 700;
    color: #1C2A39;
}

.price span:last-child {
    font-family: "Montserrat";
    font-size: 17px;
    font-weight: 600;
    color: #BDBDBD;
    margin-left: 15px;
}

.product button {
    width: 100%;
    font-family: "Montserrat";
    font-weight: 700px;
    color: #4C3DB2;
    border: 1px solid #4C3DB2;
    height: 50px;
}
</style>