<template>
    <div>
        <div class="header-additems">NEW BOOK INFORMATION</div>
        <div class="container filling-all-info">
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Title<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.title" type="text" size="80"></div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">ID<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.id" type="text" size="80"></div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Author<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.author" type="text" size="80"></div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Category<span class="red-star">*</span> </div>
                <!-- <div class="col text-left"><input class="row-input" v-model="book.category" type="text" size="80"></div> -->


                <div class="col text-left">
                    <select v-model="book.category" class="select-category" data-placeholder="Choose a Language...">
                        <option value="Business">Business</option>
                        <option value="Comic">Comic</option>
                        <option value="Technology">Technology</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Education">Education</option>
                        <option value="Self-help">Self-help</option>
                        <option value="History">History</option>
                        <option value="Sports">Sports</option>
                        <option value="Travel">Travel</option>
                        <option value="Health">Health</option>
                        <option value="Literature">Literature</option>
                        <option value="Novel">Novel</option>
                    </select>
                </div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Publisher<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.publisher" type="text" size="80"></div>
            </div>
            <div class="row one-row-field">  
                <div class="col-3 text-left field-name-left">Input date<span class="red-star">*</span> </div>
                <div class="col-3 text-left"><input class="row-input" v-model="book.input_date" type="text" size = "20" placeholder="yyyy/mm/dd"></div>
                <div class="col-2 text-left field-name-right">Quantity<span class="red-star">*</span> </div>
                <div class="col-3 text-left field-right"><input class="row-input" v-model="book.quantity" type="text" size = "21"></div>
            </div>
            <div class="row one-row-field">  
                <div class="col-3 text-left field-name-left">Cost price (USD)<span class="red-star">*</span> </div>
                <div class="col-3 text-left"><input class="row-input" v-model="book.cost_price" type="text" size = "20"></div>
                <div class="col-2 text-left field-name-right">Selling Price (USD)<span class="red-star">*</span> </div>
                <div class="col-3 text-left field-right"><input class="row-input" v-model="book.selling_price" type="text" size = "21"></div>
            </div>
            <div class="row one-row-field">  
                <div class="col-3 text-left field-name-left">Page<span class="red-star">*</span> </div>
                <div class="col-3 text-left"><input class="row-input" v-model="book.page_number" type="text" size = "20"></div>
                <div class="col-2 text-left field-name-right">Sale(%)</div>
                <div class="col-3 text-left field-right"><input class="row-input" v-model="book.sale" type="text" size = "21"></div>
            </div>
            <div class="row one-row-field">   
                <div class="col-3 text-left field-name-left">Publish date<span class="red-star">*</span> </div>
                <div class="col-3 text-left"><input class="row-input" v-model="book.publish_date" type="text" size = "20" placeholder="yyyy/mm/dd"></div>
                <div class="col-2 text-left field-name-right">Language<span class="red-star">*</span> </div>
                <!-- <div class="col-3 text-left field-right"><input class="row-input" v-model="book.language" type="text" size = "21"></div> -->
                

                <div class="col-3 text-left field-right">
                    <select v-model="book.language" class="select-language" data-placeholder="Choose a Language...">
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="English">English</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Korean">Korean</option>
                        <option value="French">French</option>
                        <option value="	Japanese">	Japanese</option>
                    </select>
                </div>

            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Picture<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.picture" type="text" size="80"></div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Description<span class="red-star">*</span> </div>
                <!-- <div class="col text-left"><input type="text" size="80"></div> -->
                <div class="col text-left"><textarea  v-model="book.description" class="row-input text-area" rows="6" cols="82"></textarea></div>
            </div>
            
            <div class="row button-below">
                <div class="col-3"></div> 
                <div class="col text-right">
                <button class="cancle" @click="refresh">Cancel</button>
                <button class="addbook" @click="createBook" v-on:click="success_add_book()">Add book</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // book: {
            // title,id, author, publisher, input_date, quantity, cost_price, selling_price, page_number, sale, publish_date,
            //     language, picture, description }
            book: {
            title: ' ', id: '', author: '', category: '', publisher: '', input_date: '', quantity: '', cost_price: '', selling_price: '', 
            page_number: '', sale: '', publish_date: '', language: '', picture: '', description: ''},
            
            check_add_id: ''
        }
    },
    methods: {
        createBook() {
            
            this.check_add_id = this.book.id;
            // console.log(this.check_add_id);
            // console.log(this.book.id);

            axios.post('/api/book', {title: this.book.title, id: this.book.id, author: this.book.author, category: this.book.category,
            publisher: this.book.publisher, input_date: this.book.input_date, quantity: this.book.quantity, cost_price: this.book.cost_price,
            selling_price: this.book.selling_price, page_number: this.book.page_number, sale: this.book.sale, publish_date: this.book.publish_date,
            language: this.book.language, picture: this.book.picture, description: this.book.description})
            .then(response => {
                // this.check_add_id = this.book.id;
                // console.log(this.check_add_id);
                console.log(response);
            })
            .catch(error => {
                console.log(error.response)
            });

            this.book.title = '';
            this.book.id = '';
            this.book.author = '';
            this.book.category = '';
            this.book.publisher = '';
            this.book.input_date = '';
            this.book.quantity = '';
            this.book.cost_price = '';
            this.book.selling_price = '';
            this.book.page_number = '';
            this.book.sale = '';
            this.book.publish_date = '';
            this.book.language = '';
            this.book.picture = '';
            this.book.description = '';
        },

        refresh() {
            this.book.title = '';
            this.book.id = '';
            this.book.author = '';
            this.book.category = '';
            this.book.publisher = '';
            this.book.input_date = '';
            this.book.quantity = '';
            this.book.cost_price = '';
            this.book.selling_price = '';
            this.book.page_number = '';
            this.book.sale = '';
            this.book.publish_date = '';
            this.book.language = '';
            this.book.picture = '';
            this.book.description = '';
        },

        success_add_book() {
            
            if (this.check_add_id == '')
                alert("Error. Check new book information again!")
            else alert("Sucessfully add new book!")
        }
    }
}
</script>

<style>
.header-additems {
    margin-top: 30px;
    font-weight: bold;
    font-size: 30px;
}

.select-language {
    width: 210px;
    height: 30px;
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}

.select-category {
    width: 684px;
    height: 30px;
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}

.filling-all-info {
    margin-top: 40px;
}

.one-row-field {
    margin-top: 15px;
}

.row-input {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}

.field-name-left {
    padding-left: 115px;
    color: #0084B4;
    font-size: 18px;
    font-weight: bold;
}

.field-name-right {
    color: #0084B4;
    font-size: 18px;
    font-weight: bold;
    padding-left: 0px;
}

.red-star {
    color: red;
}

.field-right {
    padding-left: 12px;
}

.text-area {
    margin-left: 3px;
}

.button-below {
    margin-top: 20px;
    margin-bottom: 30px;
}

.cancle {
    background-color: #EEEEEE;
    border: none ;
    border-radius: 5px;
    color: #616161;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    margin-right: 30px;
}

.cancle:hover {
    background-color: #d0d6d6;
}

.cancle:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.addbook {
    /* margin-left: 290px; */
    background-color: #00ACED;
    border: none ;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
    margin-right: 140px;
}

.addbook:hover {
    background-color: #0084B4;
}

.addbook:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

</style>