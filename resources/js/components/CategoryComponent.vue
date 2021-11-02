<template>
    <div class="container-custom row">
        <div class="col-2">
            <h3>Sort by</h3>
            <ul>
                <li>Price: Low to High</li>
                <li>Price: High to Low</li>
                <li>Customer review</li>
                <li>Publication Day</li>
            </ul>

            <h3>Filter option</h3>
            <h4>Price:</h4>
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">Under $100</label>
            <br>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">$100 to $200</label>
            <br>
            <input type="radio" id="three" value="Three" v-model="picked">
            <label for="three">$200 to $500</label>
            <br>
            <input type="radio" id="four" value="Four" v-model="picked">
            <label for="four">$500 to $1000</label>
            <br>
            <input type="radio" id="five" value="Five" v-model="picked">
            <label for="five">Over $1000</label>
            <span>Picked: {{ picked }}</span>

            <h4>Language:</h4>
            <input type="radio" id="eng" value="One" v-model="language">
            <label for="eng">English</label>
            <br>
            <input type="radio" id="viet" value="Two" v-model="language">
            <label for="viet">Vietnamese</label>
            <br>
        </div>
        <div class="col">

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

</style>