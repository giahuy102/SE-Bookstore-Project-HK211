<template>
    <div>
        <div class="header-additems">NEW BOOK INFORMATION</div>

        <!-- {{book.input_date}} -->

        <div class="container filling-all-info">
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Title<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.title" type="text" size="80"></div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">ID<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.book_id" type="text" size="80"></div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Author<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.author" type="text" size="80"></div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Category<span class="red-star">*</span> </div>
                <!-- <div class="col text-left"><input class="row-input" v-model="book.cid" type="text" size="80"></div> -->


                <!-- <div class="col text-left">
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
                </div> -->

                <!-- <div class="col text-left">
                    <select v-model="book.category" class="select-category" data-placeholder="Choose a Language...">
                        <option v-for="item in test_category" :value="item.value" :key="item.index"> {{item.value}} </option>
                    </select>
                </div> -->
                <!-- {{book.cid}} -->
                <div class="col text-left">
                    <select v-model="book.cid" class="select-category" data-placeholder="Choose a Language...">
                        <option v-for="category in categories" :value="category.category_id" :key="category.category_id"> {{category.category_name}} </option>
                    </select>
                </div>

            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Publisher<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.publisher" type="text" size="80"></div>
            </div>
            <div class="row one-row-field">  
                <div class="col-3 text-left field-name-left">Input date<span class="red-star">*</span> </div>
                
                <!-- <div class="col-3 text-left"><input class="row-input" v-model="book.input_date" type="text" size = "20" placeholder="yyyy/mm/dd"></div> -->
                <div class="col-3 text-left">
                    <date-picker size="20" :placeholder="book.input_date" v-model="book.input_date" lang="en" type="date" format="YYYY-MM-DD" value-type='YYYY/MM/DD'> </date-picker>
                    
                </div>

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
                <!-- <div class="col-3 text-left"><input class="row-input" v-model="book.publish_date" type="text" size = "20" placeholder="yyyy/mm/dd"></div> -->
                
                <div class="col-3 text-left">
                    <date-picker size="20" :placeholder="book.publish_date" v-model="book.publish_date" lang="en" type="date" format="YYYY-MM-DD" value-type='YYYY/MM/DD'> </date-picker>           
                </div>
                
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
                <div class="col-3 text-left field-name-left">Image<span class="red-star">*</span> </div>
                <!-- <div class="col text-left"><input class="row-input" v-model="book.image" type="text" size="80"></div> -->
                

                <!-- này cũng ok -->
                <!-- <div class="col text-left">
                    <input class="row-input" type="file" @change="previewFiles" style="width: 681px">
                </div> -->

                <div class="col text-left">
                    <form id="upload-image" @submit="submitForm" enctype="multipart/form-data">
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" name="filename" class="custom-file-input" id="inputFileUpload"
                                v-on:change="onFileChange">
                                {{book.image}}
                                <!-- <label class="custom-file-label" for="inputFileUpload" id="custom-file-label">Choose file</label> -->
                            </div>
                            
                            <div class="input-group-append">
                                <input  type="submit" class="btn btn-primary" id="upload-button" value="Upload">
                            </div>

                        </div>
                        <!-- <br> -->
                        <!-- <p class="text-danger font-weight-bold">{{filename}}</p> -->
                    </form>
                </div>


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


        <!-- <form @submit="submitForm" enctype="multipart/form-data">
                <div class="input-group">
                    <div class="custom-file">
                        <input type="file" name="filename" class="custom-file-input" id="inputFileUpload"
                        v-on:change="onFileChange">
                        <label class="custom-file-label" for="inputFileUpload">Choose file</label>
                    </div>
                    
                    <div class="input-group-append">
                        <input type="submit" class="btn btn-primary" value="Upload">
                    </div>

                </div>
                <br>
                <p class="text-danger font-weight-bold">{{filename}}</p>
        </form> -->


    </div>
</template>

<script>


import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css';




export default {

    components: {
        DatePicker
    },

    data() {
        return {

            book: {
            title: ' ', book_id: '', author: '', cid: '', publisher: '', input_date: '', quantity: '', cost_price: '', selling_price: '', 
            page_number: '', sale: '', publish_date: '', language: '', image: '', description: ''},
            
            check_add_id: '',

            
            // test_category: [
            //     {index: 1, value: 'romantic'},
            //     {index: 2, value: 'lang man'},
            //     {index: 3, value: 'tieu thuyet'}
            // ],

            categories: [],
           // category: {},

            
            
            // for image upload
            filename: '',
            file: '',
            //csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }
    },


    created() {
        this.getAllCategories()
    },

    methods: {



        onFileChange(e) {
            //console.log(e.target.files[0]);
            this.filename = "Selected File: " + e.target.files[0].name;
            this.file = e.target.files[0];
            this.book.image = e.target.files[0].name;
        },



        submitForm(e) {
            e.preventDefault();
            let currentObj = this;
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                }
            }
            // form data
            let formData = new FormData();
            formData.append('file', this.file);
            // send upload request
            
            
            axios.post('/api/store_file', formData, config)
            .then(function (response) {
                console.log("Done upload image");
                alert("Upload image successfully")
                currentObj.success = response.data.success;
                currentObj.filename = "";
            })
            .catch(function (error) {
                console.log(error);
                currentObj.output = error;
            });
        },







        createBook() {
            
            
            this.check_add_id = this.book.book_id;
            // console.log(this.check_add_id);
            // console.log(this.book.book_id);

            axios.post('/api/book', {title: this.book.title, book_id: this.book.book_id, author: this.book.author, cid: this.book.cid,
            publisher: this.book.publisher, input_date: this.book.input_date, quantity: this.book.quantity, cost_price: this.book.cost_price,
            selling_price: this.book.selling_price, page_number: this.book.page_number, sale: this.book.sale, publish_date: this.book.publish_date,
            language: this.book.language, image: this.book.image, description: this.book.description})
            .then(response => {
                // this.check_add_id = this.book.book_id;
                // console.log(this.check_add_id);
                console.log(response);
            })
            .catch(error => {
                console.log(error.response)
            });

            this.book.title = '';
            this.book.book_id = '';
            this.book.author = '';
            this.book.cid = '';
            this.book.publisher = '';
            this.book.input_date = '';
            this.book.quantity = '';
            this.book.cost_price = '';
            this.book.selling_price = '';
            this.book.page_number = '';
            this.book.sale = '';
            this.book.publish_date = '';
            this.book.language = '';
            this.book.image = '';
            this.book.description = '';
        },

        refresh() {
            this.book.title = '';
            this.book.book_id = '';
            this.book.author = '';
            this.book.cid = '';
            this.book.publisher = '';
            this.book.input_date = '';
            this.book.quantity = '';
            this.book.cost_price = '';
            this.book.selling_price = '';
            this.book.page_number = '';
            this.book.sale = '';
            this.book.publish_date = '';
            this.book.language = '';
            this.book.image = '';
            this.book.description = '';
        },

        success_add_book() {
            
            if (this.check_add_id == '')
                alert("Error. Check new book information again!")
            else alert("Sucessfully add new book!")
        },

        getAllCategories() {
            axios.get('/api/categories')
            .then(response => {
                //console.log("Get all categories");
                this.categories = response.data;
                console.log(this.categories)
            })
            .catch(error => {
                console.log(error.response)
            });
        },

        // findCid(id = 0) {
        //     axios.get('/api/category/' + id)
        //     .then (response => {
        //         console.log("find cid")
        //         console.log(response)
        //         this.category = response.data[0]
        //         console.log(this.category.category_name)
        //     })
        //     .catch (error => {
        //         console.log(error)
        //     })
        // }

        previewFiles(event) {
            console.log(event.target.files[0]);
            console.log(event.target.files[0].name);
            this.book.image = event.target.files[0].name;
        }    
    },

    
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

.input-group {
    width: 83%;
}

.custom-file-label {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}

#custom-file-label {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}

.custom-file-input {
    opacity: 1;
    padding-top: 3px;
    width: 103px;
}

#upload-button {
    border-radius: 3px;
}

</style>