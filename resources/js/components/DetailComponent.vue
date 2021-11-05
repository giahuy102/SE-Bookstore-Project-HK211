<template>
    <div class="container-custom">
        <div id="detail" class="row">
            <div class="col-3">
                <img :src="'/images/' + book.image" alt="">
            </div>

            <div class="col">
                <h2>{{ book.name }}</h2>
                <p id="author">{{ book.author + " (Author)" }} </p>
                <p id="review">{{ book.num_view + " M review" }}</p>
                <p id="price">
                    <span>{{ "$" + book.price }}</span>
                    <span>{{ "$" + (book.price - book.price * book.discount) }}</span>
                </p>
                <button>BUY NOW</button>

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
                        <span>{{ book.publication_day }}</span>
                    </li>
                    <li>
                        <span>Page:</span>
                        <span>{{ book.num_page }}</span>
                    </li>
                    <li>
                        <span>Language:</span>
                        <span>{{ book.language }}</span>
                    </li>
                    <li>
                        <span>Category:</span>
                        <span>{{ category.name }}</span>
                    </li>              
                </ul>

            </div>
        </div>

        
    </div>    
</template>

<script>
export default {
    props: ['book', 'category'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.container-custom {
    width: 1200px;
    margin: auto;
}

#detail img {
    width: 100%;
}

</style>