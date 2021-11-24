(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BookInfo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      book: {},
      bookID: this.$route.params.bookID,
      locking: true
    };
  },
  methods: {
    getBookByID: function getBookByID(id) {
      var _this = this;

      axios.get('/api/book/' + id).then(function (response) {
        console.log(response);
        _this.book = response.data[0];
        console.log(_this.book);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    //console.log("ahhaa")
    this.getBookByID(this.bookID);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListBooks.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListBooks.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateBook_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateBook.vue */ "./resources/js/components/UpdateBook.vue");
/* harmony import */ var _BookInfo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookInfo.vue */ "./resources/js/components/BookInfo.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: ['items', 'resultQuery'],
  components: {
    updateBook: _UpdateBook_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    bookInfo: _BookInfo_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    removeBook: function removeBook(id) {
      var _this = this;

      axios["delete"]('/api/book/' + id).then(function (response) {
        if (response.status == 200) {
          _this.$emit('orderchanged');
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageBooks.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageBooks.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListBooks_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListBooks.vue */ "./resources/js/components/ListBooks.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    //console.log('hihihi')
    this.getList();
    this.getAllCategories();
  },
  components: {
    listBooks: _ListBooks_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      items: [// store all books
        // {'id':1, 'title': 'abcxyz'}
      ],
      categories: [],
      searchQuery: null,
      items_search: [] // for props search ListBooks.vue

    };
  },
  methods: {
    getList: function getList() {
      var _this = this;

      //console.log('hihihi')
      axios.get('/api/books').then(function (response) {
        _this.items = response.data;
        console.log(_this.items);
      })["catch"](function (error) {
        console.log(error.response);
      });
    },
    getAllCategories: function getAllCategories() {
      var _this2 = this;

      axios.get('/api/categories').then(function (response) {
        //console.log("Get all categories");
        _this2.categories = response.data;
        console.log(_this2.categories);
      })["catch"](function (error) {
        console.log(error.response);
      });
    },
    // getData() {
    //     //console.log(this.items)
    //     if (this.query.length == 0) {
    //         this.search_data = []
    //     }
    //     else {
    //     for (var key in this.items) {
    //         if (this.items[key].title.includes(this.query)) {
    //             //console.log(this.items[key].title)
    //             this.search_data.push(this.items[key].title)
    //         }
    //     }
    //     }
    // },
    resultQuery: function resultQuery() {
      var _this3 = this;

      if (this.searchQuery) {
        return this.items.filter(function (item) {
          //this.items_search = this.searchQuery.toLowerCase().split(' ').every( v => item.title.toLowerCase().includes(v) );
          //console.log(this.items_search)
          return _this3.searchQuery.toLowerCase().split(' ').every(function (v) {
            return item.title.toLowerCase().includes(v);
          });
        });
      } else {
        //this.items_search = this.items;
        //console.log(this.items_search)
        return this.items;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdateBook.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      book: {},
      bookID: this.$route.params.bookID,
      categories: [],
      filename: '',
      file: ''
    };
  },
  methods: {
    onFileChange: function onFileChange(e) {
      //console.log(e.target.files[0]);
      this.filename = "Selected File: " + e.target.files[0].name;
      this.file = e.target.files[0];
      this.book.image = e.target.files[0].name;
    },
    submitForm: function submitForm(e) {
      e.preventDefault();
      var currentObj = this;
      var config = {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
      }; // form data

      var formData = new FormData();
      formData.append('file', this.file); // send upload request

      axios.post('/api/store_file', formData, config).then(function (response) {
        console.log("Done upload image");
        currentObj.success = response.data.success;
        currentObj.filename = "";
      })["catch"](function (error) {
        console.log(error);
        currentObj.output = error;
      });
    },
    getBookByID: function getBookByID(id) {
      var _this = this;

      axios.get('/api/book/' + id).then(function (response) {
        console.log(response);
        _this.book = response.data[0];
        console.log(_this.book);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updateBook: function updateBook(bookID) {
      axios.put('/api/book/' + bookID, {
        title: this.book.title,
        book_id: this.book.book_id,
        author: this.book.author,
        cid: this.book.cid,
        publisher: this.book.publisher,
        input_date: this.book.input_date,
        quantity: this.book.quantity,
        cost_price: this.book.cost_price,
        selling_price: this.book.selling_price,
        page_number: this.book.page_number,
        sale: this.book.sale,
        publish_date: this.book.publish_date,
        language: this.book.language,
        image: this.book.image,
        description: this.book.description
      }).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error.response);
      });
    },
    sucess_update: function sucess_update() {
      alert("Sucessfully update book information!");
    },
    getAllCategories: function getAllCategories() {
      var _this2 = this;

      axios.get('/api/categories').then(function (response) {
        //console.log("Get all categories");
        _this2.categories = response.data;
        console.log(_this2.categories);
      })["catch"](function (error) {
        console.log(error.response);
      });
    },
    previewFiles: function previewFiles(event) {
      console.log(event.target.files);
      console.log(event.target.files[0].name);
      this.book.image = event.target.files[0].name;
    }
  },
  created: function created() {
    //console.log("ahhaa")
    this.getBookByID(this.bookID);
    this.getAllCategories();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.header-detail {\r\n    margin-top: 30px;\r\n    font-weight: bold;\r\n    font-size: 30px;\n}\n.filling-all-info {\r\n    margin-top: 40px;\n}\n.one-row-field {\r\n    margin-top: 15px;\n}\n.row-input {\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\n.field-name-left {\r\n    padding-left: 115px;\r\n    color: #0084B4;\r\n    font-size: 18px;\r\n    font-weight: bold;\n}\n.field-name-right {\r\n    color: #0084B4;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    padding-left: 0px;\n}\n.red-star {\r\n    color: red;\n}\n.field-right {\r\n    padding-left: 12px;\n}\n.text-area {\r\n    margin-left: 3px;\n}\n.button-below {\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\n}\n.cancle-detailed {\r\n    background-color: #EEEEEE;\r\n    border: none ;\r\n    border-radius: 5px;\r\n    color: #616161;\r\n    font-size: 20px;\r\n    padding: 0.25rem 1.5rem;\r\n    margin-right: 30px;\n}\n.cancle-detailed:hover {\r\n    background-color: #d0d6d6;\n}\n.cancle-detailed:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.done {\r\n    /* margin-left: 290px; */\r\n    background-color: #00ACED;\r\n    border: none ;\r\n    color: white;\r\n    font-size: 20px;\r\n    padding: 0.25rem 1.5rem;\r\n    border-radius: 5px;\r\n    margin-right: 140px;\n}\n.done:hover {\r\n    background-color: #0084B4;\n}\n.done:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageBooks.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageBooks.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.search {\r\n    margin-top: 10px;\n}\n.search-icon {\n}\n.search-typing {\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\r\n    text-indent: 30px;\r\n    /* background: url(../assets/hcmut1.png) no-repeat;\r\n    background-size: 10px 10px; */\r\n    background: url(" + escape(__webpack_require__(/*! ../../../public/images/warehouse/search-icon.png */ "./public/images/warehouse/search-icon.png")) + ") no-repeat scroll 5px 5px; \r\n    background-size: 15px 15px;\n}\n.text-category {\r\n    color: #0084B4;\r\n    font-weight: bold;\r\n    font-size: 18px;\n}\n.category {\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\n.search-category {\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\r\n    width: 145px;\r\n    height: 30px;\n}\n.search-button {\r\n    background-color: #00ACED;\r\n    border: none ;\r\n    color: white;\r\n    font-size: 20px;\r\n    padding: 0.25rem 1.5rem;\r\n    border-radius: 5px;\r\n    margin-right: 140px;\n}\n.search-button:hover {\r\n    background-color: #0084B4;\n}\n.search-button:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.list-book {\r\n    margin-top: 30px;\n}\n.icon {\r\n    margin-top: -7px;\n}\n::-moz-placeholder {\r\n    color: #aca5a5;\n}\n:-ms-input-placeholder {\r\n    color: #aca5a5;\n}\n::placeholder {\r\n    color: #aca5a5;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.header-update {\r\n    margin-top: 30px;\r\n    font-weight: bold;\r\n    font-size: 30px;\n}\n.filling-all-info {\r\n    margin-top: 40px;\n}\n.one-row-field {\r\n    margin-top: 15px;\n}\n.row-input {\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\n.field-name-left {\r\n    padding-left: 115px;\r\n    color: #0084B4;\r\n    font-size: 18px;\r\n    font-weight: bold;\n}\n.field-name-right {\r\n    color: #0084B4;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    padding-left: 0px;\n}\n.red-star {\r\n    color: red;\n}\n.field-right {\r\n    padding-left: 12px;\n}\n.text-area {\r\n    margin-left: 3px;\n}\n.select-category {\r\n    width: 684px;\r\n    height: 30px;\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\n.select-language {\r\n    width: 210px;\r\n    height: 30px;\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\n.button-below {\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\n}\n.cancle-update {\r\n    background-color: #EEEEEE;\r\n    border: none ;\r\n    border-radius: 5px;\r\n    color: #616161;\r\n    font-size: 20px;\r\n    padding: 0.25rem 1.5rem;\r\n    margin-right: 30px;\n}\n.cancle-update:hover {\r\n    background-color: #d0d6d6;\n}\n.cancle-update:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.update {\r\n    /* margin-left: 290px; */\r\n    background-color: #00ACED;\r\n    border: none ;\r\n    color: white;\r\n    font-size: 20px;\r\n    padding: 0.25rem 1.5rem;\r\n    border-radius: 5px;\r\n    margin-right: 140px;\n}\n.update:hover {\r\n    background-color: #0084B4;\n}\n.update:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.input-group {\r\n    width: 83%;\n}\n.custom-file-label {\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\n#custom-file-label {\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\r\n\r\n/* .custom-file-input {\r\n    opacity: 1;\r\n    padding-top: 3px;\r\n    width: 105px;\r\n} */\n.custom-file-input-temp {\r\n    opacity: 1;\r\n    padding-top: 3px;\r\n    width: 105px;\n}\n#upload-button {\r\n    border-radius: 3px;\n}\n::-moz-placeholder {\r\n    color: black;\n}\n:-ms-input-placeholder {\r\n    color: black;\n}\n::placeholder {\r\n    color: black;\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./BookInfo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageBooks.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageBooks.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageBooks.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageBooks.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateBook.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=template&id=e37bcdbc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BookInfo.vue?vue&type=template&id=e37bcdbc& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "header-detail" }, [
      _vm._v("DETAILED BOOK INFORMATION")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container filling-all-info" }, [
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.title,
                expression: "book.title"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80", disabled: _vm.locking },
            domProps: { value: _vm.book.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "title", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.book_id,
                expression: "book.book_id"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80", disabled: _vm.locking },
            domProps: { value: _vm.book.book_id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "book_id", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.author,
                expression: "book.author"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80", disabled: _vm.locking },
            domProps: { value: _vm.book.author },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "author", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.category_name,
                expression: "book.category_name"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80", disabled: _vm.locking },
            domProps: { value: _vm.book.category_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "category_name", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(4),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.publisher,
                expression: "book.publisher"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80", disabled: _vm.locking },
            domProps: { value: _vm.book.publisher },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "publisher", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(5),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.input_date,
                expression: "book.input_date"
              }
            ],
            staticClass: "row-input",
            attrs: {
              type: "text",
              size: "20",
              placeholder: "yyyy/mm/dd",
              disabled: _vm.locking
            },
            domProps: { value: _vm.book.input_date },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "input_date", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(6),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.quantity,
                expression: "book.quantity"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21", disabled: _vm.locking },
            domProps: { value: _vm.book.quantity },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "quantity", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(7),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.cost_price,
                expression: "book.cost_price"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "20", disabled: _vm.locking },
            domProps: { value: _vm.book.cost_price },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "cost_price", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(8),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.selling_price,
                expression: "book.selling_price"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21", disabled: _vm.locking },
            domProps: { value: _vm.book.selling_price },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "selling_price", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(9),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.page_number,
                expression: "book.page_number"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "20", disabled: _vm.locking },
            domProps: { value: _vm.book.page_number },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "page_number", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-2 text-left field-name-right" }, [
          _vm._v("Sale(%)")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.sale,
                expression: "book.sale"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21", disabled: _vm.locking },
            domProps: { value: _vm.book.sale },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "sale", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(10),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.publish_date,
                expression: "book.publish_date"
              }
            ],
            staticClass: "row-input",
            attrs: {
              type: "text",
              size: "20",
              placeholder: "yyyy/mm/dd",
              disabled: _vm.locking
            },
            domProps: { value: _vm.book.publish_date },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "publish_date", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(11),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.language,
                expression: "book.language"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21", disabled: _vm.locking },
            domProps: { value: _vm.book.language },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "language", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(12),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.image,
                expression: "book.image"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80", disabled: _vm.locking },
            domProps: { value: _vm.book.image },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "image", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(13),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.description,
                expression: "book.description"
              }
            ],
            staticClass: "row-input text-area",
            attrs: { rows: "6", cols: "82", disabled: _vm.locking },
            domProps: { value: _vm.book.description },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "description", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row button-below" }, [
        _c("div", { staticClass: "col-3" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col text-right" },
          [
            _c("router-link", { attrs: { to: "/admin/managebooks" } }, [
              _c("button", { staticClass: "done" }, [_vm._v("Done")])
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Title"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("ID"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Author"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Category"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Publisher"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Input date"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left field-name-right" }, [
      _vm._v("Quantity"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Cost price (USD)"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left field-name-right" }, [
      _vm._v("Selling Price (USD)"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Page"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Publish date"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left field-name-right" }, [
      _vm._v("Language"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Image"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Description"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListBooks.vue?vue&type=template&id=7a0fa8d1&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListBooks.vue?vue&type=template&id=7a0fa8d1& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("table", { staticClass: "table table-striped list-book" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.resultQuery, function(item) {
          return _c(
            "tr",
            {
              key: item.book_id,
              on: {
                orderchanged: function($event) {
                  return _vm.getList()
                }
              }
            },
            [
              _c("td", [_vm._v(_vm._s(item.book_id) + " ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(item.title) + " ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(item.selling_price) + " ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(item.quantity) + " ")]),
              _vm._v(" "),
              _c(
                "td",
                { staticClass: "text-left" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "updateBook",
                          params: { bookID: item.book_id }
                        }
                      }
                    },
                    [
                      _c("button", { staticClass: "btn icon" }, [
                        _c(
                          "svg",
                          {
                            staticClass: "bi bi-pencil",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "currentColor",
                              viewBox: "0 0 16 16"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                              }
                            })
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn icon",
                      on: {
                        click: function($event) {
                          return _vm.removeBook(item.book_id)
                        }
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "bi bi-trash",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            viewBox: "0 0 16 16"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              d:
                                "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "bookInfo",
                          params: { bookID: item.book_id }
                        }
                      }
                    },
                    [
                      _c("button", { staticClass: "btn icon" }, [
                        _c(
                          "svg",
                          {
                            staticClass: "bi bi-info-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "currentColor",
                              viewBox: "0 0 16 16"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                              }
                            })
                          ]
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ]
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "col-2" }, [_vm._v("  ID ")]),
        _vm._v(" "),
        _c("th", { staticClass: "col-4" }, [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", { staticClass: "col-2" }, [_vm._v("Price (USD)")]),
        _vm._v(" "),
        _c("th", { staticClass: "col-2" }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { staticClass: "col-2" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageBooks.vue?vue&type=template&id=62d87caa&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageBooks.vue?vue&type=template&id=62d87caa& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container search" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.searchQuery,
                expression: "searchQuery"
              }
            ],
            staticClass: "search-typing",
            attrs: { type: "text", placeholder: "Title", size: "50" },
            domProps: { value: _vm.searchQuery },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.searchQuery = $event.target.value
              }
            }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "bookList" },
      [
        _c("listBooks", {
          attrs: { items: _vm.items, resultQuery: _vm.resultQuery() },
          on: {
            orderchanged: function($event) {
              return _vm.getList()
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=template&id=36fc0efd&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdateBook.vue?vue&type=template&id=36fc0efd& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "header-update" }, [
      _vm._v("UPDATE BOOK INFORMATION")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container filling-all-info" }, [
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.title,
                expression: "book.title"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80" },
            domProps: { value: _vm.book.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "title", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.book_id,
                expression: "book.book_id"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80" },
            domProps: { value: _vm.book.book_id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "book_id", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.author,
                expression: "book.author"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80" },
            domProps: { value: _vm.book.author },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "author", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.book.cid,
                  expression: "book.cid"
                }
              ],
              staticClass: "select-category",
              attrs: { "data-placeholder": "Choose a Language..." },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.book,
                    "cid",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            _vm._l(_vm.categories, function(category) {
              return _c(
                "option",
                {
                  key: category.category_id,
                  domProps: { value: category.category_id }
                },
                [_vm._v(" " + _vm._s(category.category_name) + " ")]
              )
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(4),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.publisher,
                expression: "book.publisher"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80" },
            domProps: { value: _vm.book.publisher },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "publisher", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(5),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-3 text-left" },
          [
            _c("date-picker", {
              attrs: {
                size: "20",
                placeholder: _vm.book.input_date,
                lang: "en",
                type: "date",
                format: "YYYY-MM-DD",
                "value-type": "YYYY/MM/DD"
              },
              model: {
                value: _vm.book.input_date,
                callback: function($$v) {
                  _vm.$set(_vm.book, "input_date", $$v)
                },
                expression: "book.input_date"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(6),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.quantity,
                expression: "book.quantity"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21" },
            domProps: { value: _vm.book.quantity },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "quantity", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(7),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.cost_price,
                expression: "book.cost_price"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "20" },
            domProps: { value: _vm.book.cost_price },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "cost_price", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(8),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.selling_price,
                expression: "book.selling_price"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21" },
            domProps: { value: _vm.book.selling_price },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "selling_price", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(9),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.page_number,
                expression: "book.page_number"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "20" },
            domProps: { value: _vm.book.page_number },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "page_number", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-2 text-left field-name-right" }, [
          _vm._v("Sale(%)")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.sale,
                expression: "book.sale"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21" },
            domProps: { value: _vm.book.sale },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "sale", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(10),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-3 text-left" },
          [
            _c("date-picker", {
              attrs: {
                size: "20",
                placeholder: _vm.book.publish_date,
                lang: "en",
                type: "date",
                format: "YYYY-MM-DD",
                "value-type": "YYYY/MM/DD"
              },
              model: {
                value: _vm.book.publish_date,
                callback: function($$v) {
                  _vm.$set(_vm.book, "publish_date", $$v)
                },
                expression: "book.publish_date"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(11),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.book.language,
                  expression: "book.language"
                }
              ],
              staticClass: "select-language",
              attrs: { "data-placeholder": "Choose a Language..." },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.book,
                    "language",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "Vietnamese" } }, [
                _vm._v("Vietnamese")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "English" } }, [
                _vm._v("English")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Chinese" } }, [
                _vm._v("Chinese")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Korean" } }, [_vm._v("Korean")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "French" } }, [_vm._v("French")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "\tJapanese" } }, [
                _vm._v("\tJapanese")
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(12),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c(
            "form",
            {
              attrs: { id: "upload-image", enctype: "multipart/form-data" },
              on: { submit: _vm.submitForm }
            },
            [
              _c("div", { staticClass: "input-group" }, [
                _c("div", { staticClass: "custom-file" }, [
                  _c("input", {
                    staticClass: "custom-file-input custom-file-input-temp",
                    attrs: {
                      type: "file",
                      name: "filename",
                      id: "inputFileUpload"
                    },
                    on: { change: _vm.onFileChange }
                  }),
                  _vm._v(
                    "\n                              " +
                      _vm._s(_vm.book.image) +
                      "\n                              "
                  )
                ]),
                _vm._v(" "),
                _vm._m(13)
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(14),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.description,
                expression: "book.description"
              }
            ],
            staticClass: "row-input text-area",
            attrs: { rows: "6", cols: "82" },
            domProps: { value: _vm.book.description },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "description", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row button-below" }, [
        _c("div", { staticClass: "col-3" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col text-right" },
          [
            _c("router-link", { attrs: { to: "/admin/managebooks" } }, [
              _c("button", { staticClass: "cancle-update" }, [_vm._v("Back")])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "update",
                on: {
                  click: [
                    function($event) {
                      return _vm.updateBook(_vm.bookID)
                    },
                    function($event) {
                      return _vm.sucess_update()
                    }
                  ]
                }
              },
              [_vm._v("Update")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Title"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("ID"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Author"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Category"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Publisher"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Input date"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left field-name-right" }, [
      _vm._v("Quantity"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Cost price (USD)"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left field-name-right" }, [
      _vm._v("Selling Price (USD)"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Page"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Publish date"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left field-name-right" }, [
      _vm._v("Language"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Image"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("input", {
        staticClass: "btn btn-primary",
        attrs: { type: "submit", id: "upload-button", value: "Upload" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Description"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/BookInfo.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/BookInfo.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookInfo_vue_vue_type_template_id_e37bcdbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookInfo.vue?vue&type=template&id=e37bcdbc& */ "./resources/js/components/BookInfo.vue?vue&type=template&id=e37bcdbc&");
/* harmony import */ var _BookInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/BookInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BookInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookInfo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BookInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookInfo_vue_vue_type_template_id_e37bcdbc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookInfo_vue_vue_type_template_id_e37bcdbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BookInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/BookInfo.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/BookInfo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BookInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./BookInfo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/BookInfo.vue?vue&type=template&id=e37bcdbc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/BookInfo.vue?vue&type=template&id=e37bcdbc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_template_id_e37bcdbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BookInfo.vue?vue&type=template&id=e37bcdbc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=template&id=e37bcdbc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_template_id_e37bcdbc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_template_id_e37bcdbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ListBooks.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/ListBooks.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListBooks_vue_vue_type_template_id_7a0fa8d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListBooks.vue?vue&type=template&id=7a0fa8d1& */ "./resources/js/components/ListBooks.vue?vue&type=template&id=7a0fa8d1&");
/* harmony import */ var _ListBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListBooks.vue?vue&type=script&lang=js& */ "./resources/js/components/ListBooks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListBooks_vue_vue_type_template_id_7a0fa8d1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListBooks_vue_vue_type_template_id_7a0fa8d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListBooks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListBooks.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/ListBooks.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListBooks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListBooks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListBooks.vue?vue&type=template&id=7a0fa8d1&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ListBooks.vue?vue&type=template&id=7a0fa8d1& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBooks_vue_vue_type_template_id_7a0fa8d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListBooks.vue?vue&type=template&id=7a0fa8d1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListBooks.vue?vue&type=template&id=7a0fa8d1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBooks_vue_vue_type_template_id_7a0fa8d1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBooks_vue_vue_type_template_id_7a0fa8d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ManageBooks.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ManageBooks.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageBooks_vue_vue_type_template_id_62d87caa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageBooks.vue?vue&type=template&id=62d87caa& */ "./resources/js/components/ManageBooks.vue?vue&type=template&id=62d87caa&");
/* harmony import */ var _ManageBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageBooks.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageBooks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ManageBooks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManageBooks.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ManageBooks.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ManageBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageBooks_vue_vue_type_template_id_62d87caa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageBooks_vue_vue_type_template_id_62d87caa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageBooks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageBooks.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ManageBooks.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageBooks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageBooks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageBooks.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ManageBooks.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageBooks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageBooks.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageBooks.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageBooks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageBooks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageBooks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageBooks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ManageBooks.vue?vue&type=template&id=62d87caa&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ManageBooks.vue?vue&type=template&id=62d87caa& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageBooks_vue_vue_type_template_id_62d87caa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageBooks.vue?vue&type=template&id=62d87caa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageBooks.vue?vue&type=template&id=62d87caa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageBooks_vue_vue_type_template_id_62d87caa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageBooks_vue_vue_type_template_id_62d87caa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UpdateBook.vue":
/*!************************************************!*\
  !*** ./resources/js/components/UpdateBook.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateBook_vue_vue_type_template_id_36fc0efd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateBook.vue?vue&type=template&id=36fc0efd& */ "./resources/js/components/UpdateBook.vue?vue&type=template&id=36fc0efd&");
/* harmony import */ var _UpdateBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateBook.vue?vue&type=script&lang=js& */ "./resources/js/components/UpdateBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UpdateBook_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateBook.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpdateBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateBook_vue_vue_type_template_id_36fc0efd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateBook_vue_vue_type_template_id_36fc0efd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UpdateBook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UpdateBook.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/UpdateBook.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateBook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateBook.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/UpdateBook.vue?vue&type=template&id=36fc0efd&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/UpdateBook.vue?vue&type=template&id=36fc0efd& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_template_id_36fc0efd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateBook.vue?vue&type=template&id=36fc0efd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=template&id=36fc0efd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_template_id_36fc0efd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_template_id_36fc0efd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);