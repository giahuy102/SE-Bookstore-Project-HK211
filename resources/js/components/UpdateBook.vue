<template>
  <div>

      <div class="header-update">UPDATE BOOK INFORMATION</div>
      
      <!-- <div>ma so id: </div>
      <div> {{this.bookID}} </div>
      <div> {{this.book}} </div> -->
      <!-- <div> {{this.book}} </div>
      <div> {{this.book.title}} </div> -->
      
      <!-- <div class="container">
          <div class="row">
              <div class="col-3 text-left field">Title<span class="red-star">*</span> </div>
              <div class="col text-left"><input type="text" size="80" v-model="book.title" ></div>
          </div>
          <div class="row">
              <div class="col-3 text-left field">ID<span class="red-star">*</span> </div>
              <div class="col text-left"><input  type="text" size="80" v-model="book.id"></div>
          </div>

          <button @click="updateBook(bookID)">Update</button>
      </div> -->

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
                    <select class="select-category" v-model="book.category">
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
                </div>  -->

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
                <div class="col-3 text-left field-name-left">Image<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.image" type="text" size="80"></div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Description<span class="red-star">*</span> </div>
                <!-- <div class="col text-left"><input type="text" size="80"></div> -->
                <div class="col text-left"><textarea  v-model="book.description" class="row-input text-area" rows="6" cols="82"></textarea></div>
            </div>
            
            <div class="row button-below">
                <div class="col-3"></div> 
                <div class="col text-right">
                    <router-link to="/admin/managebooks">
                        <button class="cancle-update">Back</button>
                    </router-link>
                    <button class="update" @click="updateBook(bookID)" v-on:click="sucess_update()">Update</button>
                </div>
            </div>
        </div>



  </div>
</template>

<script>
export default {

  data() {
    return {
        book: {},
        bookID: this.$route.params.bookID,
        categories: [],
      
    }
  },


  methods: {
    getBookByID(id) {
      axios.get('/api/book/' + id)
      .then (response => {
          console.log(response)
          this.book = response.data[0]
          console.log(this.book)
      })
      .catch (error => {
          console.log(error)
      })
    },

    updateBook(bookID) {
      axios.put('/api/book/' + bookID, {title: this.book.title, book_id: this.book.book_id, author: this.book.author, cid: this.book.cid,
            publisher: this.book.publisher, input_date: this.book.input_date, quantity: this.book.quantity, cost_price: this.book.cost_price,
            selling_price: this.book.selling_price, page_number: this.book.page_number, sale: this.book.sale, publish_date: this.book.publish_date,
            language: this.book.language, image: this.book.image, description: this.book.description})
      .then(response => {
          console.log(response)
      })
      .catch(error => {
          console.log(error.response)
      });
    },

    sucess_update() {
        alert("Sucessfully update book information!")
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
  },

  created(){
    //console.log("ahhaa")
    this.getBookByID(this.bookID);
    this.getAllCategories();
  },
}
</script>

<style>
.header-update {
    margin-top: 30px;
    font-weight: bold;
    font-size: 30px;
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

.select-category {
    width: 684px;
    height: 30px;
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}

.select-language {
    width: 210px;
    height: 30px;
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}

.button-below {
    margin-top: 20px;
    margin-bottom: 30px;
}

.cancle-update {
    background-color: #EEEEEE;
    border: none ;
    border-radius: 5px;
    color: #616161;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    margin-right: 30px;
}

.cancle-update:hover {
    background-color: #d0d6d6;
}

.cancle-update:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.update {
    /* margin-left: 290px; */
    background-color: #00ACED;
    border: none ;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
    margin-right: 140px;
}

.update:hover {
    background-color: #0084B4;
}

.update:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}
</style>