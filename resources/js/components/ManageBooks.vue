<template>
    <div>
        <div class="container search">
            <div class="row">
                <!-- <img class="search-icon" src="../assets/search.svg" alt=""> -->
                <div class="col-5 text-start"> <input class="search-typing" type="text" placeholder="Name, ID" size="50"> </div>
                <div class="col-1 text-right text-category">Category:</div>
                <!-- <div class="col-3 text-left"><input class="category" type="text" placeholder="Choose..."></div> -->
                <div class="col-3 text-left">   
                    <select class="search-category">
                        <option value="Choose..."> </option>
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
                        <option value="Literature">Novel</option>
                    </select>
                </div>
                <div class="col text-left"><button class="search-button">Search</button></div>
            </div>
        </div>

        <!-- <table class="table table-striped list-book">
            <thead>
                <tr>
                    <th class="col-2">ID</th>
                    <th class="col-4">Title</th>
                    <th class="col-2"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>nha gia kim</td>
                    <td  class="text-left">
                        
                        <router-link to="/admin/updatebook"> 
                            <button class="btn icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                            </button>
                        </router-link>
                        <button class="btn icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>  
                        </button>

                        <router-link to="/admin/updatebook"> 
                            <button class="btn icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </button>
                        </router-link>

                    </td>
                </tr>

            </tbody>
        </table> -->
        
        
        <!-- <div class="bookLists">
            <listBooks :items="items" />
        </div> -->
        <!-- <button v-on:click="getList()">click</button>
        <div>{{this.items}}</div> -->

        <!-- <table class="table table-striped list-book">
            <thead>
                <tr>
                    <th class="col-2">ID</th>
                    <th class="col-4">Title</th>
                    <th class="col-2"></th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item.id" v-on:orderchanged="getList()">
                    <td> {{item.id}} </td>
                    <td> {{item.title}} </td>
                    <td  class="text-left">
                        
                        <router-link to="/admin/updatebook"> 
                            <button class="btn icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                            </button>
                        </router-link>
                        <button class="btn icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>  
                        </button>

                        <router-link to="/admin/updatebook"> 
                            <button class="btn icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </button>
                        </router-link>

                    </td>
                </tr>
            </tbody>
        </table> -->

        <div class="bookList">
            <listBooks :items="items" v-on:orderchanged="getList()" />
        </div>

    </div>
</template>



<script>
import listBooks from './ListBooks.vue'
export default {
    created() {
        //console.log('hihihi')
        this.getList();
    },

    components: {
        listBooks
    },
    
    data() {
        return {
            items: [
                // {'id':1, 'title': 'abcxyz'}
            ]
        }
    },

    methods: {
        

        getList() {
            //console.log('hihihi')
            axios.get('/api/books')
            .then(response => {
                this.items = response.data;
                console.log(this.items)
            })
            .catch(error => {
                console.log(error.response)
            });
            
        },

        
    }
}
</script>

<style>
.search {
    margin-top: 10px;
}

.search-icon {

}

.search-typing {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
    text-indent: 30px;
    /* background: url(../assets/hcmut1.png) no-repeat;
    background-size: 10px 10px; */
    background: url(../../../public/images/warehouse/search-icon.png) no-repeat scroll 5px 5px; 
    background-size: 15px 15px;
}

.text-category {
    color: #0084B4;
    font-weight: bold;
    font-size: 18px;
}

.category {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}


.search-category {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
    width: 145px;
    height: 30px;
}

.search-button {
    background-color: #00ACED;
    border: none ;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
    margin-right: 140px;
}

.search-button:hover {
    background-color: #0084B4;
}

.search-button:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.list-book {
    margin-top: 30px;
}

.icon {
    margin-top: -7px;
}

</style>