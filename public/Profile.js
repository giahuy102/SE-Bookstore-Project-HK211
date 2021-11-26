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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mutedcard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mutedcard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['title', 'value']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Topcard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Topcard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['text', 'number', 'bg'],
  computed: {
    cardStyle: function cardStyle() {
      return {
        'background-color': this.bg
      };
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashb.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashb.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Topcard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topcard.vue */ "./resources/js/components/Topcard.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Mutedcard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mutedcard.vue */ "./resources/js/components/Mutedcard.vue");
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Topcard: _Topcard_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Mutedcard: _Mutedcard_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      startDate: "",
      endDate: "",
      head_value: [{
        title: "Visited",
        number: 1500,
        bg: "#6cb2eb"
      }, {
        title: "New user",
        number: 500,
        bg: "#38c172"
      }, {
        title: "New order",
        number: 100,
        bg: "#dfcd4a"
      }, {
        title: "Sales",
        number: 1000,
        bg: "#d3242f"
      }],
      rightInfo: [{
        title: "Order",
        value: 100
      }, {
        title: "Processing",
        value: 100
      }, {
        title: "Delivering",
        value: 100
      }, {
        title: "Completed",
        value: 100
      }, {
        title: "Cancelled",
        value: 100
      }],
      topCategory: [],
      topProduct: [],
      topRemainProduct: [],
      dateArr: [],
      saleData: [],
      orderData: [],
      userData: [],
      saleChart: Object,
      userChart: Object,
      orderChart: Object
    };
  },
  mounted: function mounted() {
    var date = new Date();
    this.endDate = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
    this.startDate = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
    this.getData();
  },
  methods: {
    dateStr: function dateStr(day) {
      return;
      day.getFullYear().toString() + "-" + (day.getMonth() + 1).toString() + "-" + day.getDate().toString();
    },
    oneDay: function oneDay() {
      return this.startDate == this.endDate;
    },
    check: function check() {
      this.topCategory = [];
      this.topProduct = [];
      this.topRemainProduct = [];
      this.dateArr = [];
      this.saleData = [];
      this.orderData = [];
      this.userData = [];
      this.oneDay();
      if (this.endDate < this.startDate) this.startDate = this.endDate;

      if (this.oneDay()) {
        this.dateArr.push(this.startDate);
      } else {
        var start = new Date(this.startDate);
        var end = new Date(this.endDate);
        var currentDate = new Date(this.startDate);

        while (currentDate <= end) {
          this.dateArr.push(currentDate.toISOString().substring(0, 10));
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }

      this.getData();
    },
    getData: function getData() {
      var _this = this;

      axios.post("/api/dashboard", {
        startDate: this.startDate,
        endDate: this.endDate
      }).then(function (response) {
        _this.updateData(response.data);
      })["catch"](function (er) {
        console.log(er);
      });
    },
    updateData: function updateData(data) {
      this.head_value[1].number = data.newUser[0].number;
      this.head_value[2].number = data.newOrder[0].number;
      this.head_value[3].number = data.sale ? data.sale[0].number ? data.sale[0].number : 0 : 0;
      this.topProduct = data.topProducts;
      this.topCategory = data.topCategory;
      this.topRemainProduct = data.topRemainProduct;
      this.rightInfo[0].value = data.totalOrder[0].number;
      this.rightInfo[1].value = data.processingOrder[0].number;
      this.rightInfo[2].value = data.deliveringOrder[0].number;
      this.rightInfo[3].value = data.completedOrder[0].number;
      this.rightInfo[4].value = data.cancelledOrder[0].number;
      var counter = 0;

      for (var i = 0; i < this.dateArr.length; i++) {
        if (counter < data.saleData.length) {
          if (this.dateArr[i] == data.saleData[counter]["date"]) {
            this.saleData.push(data.saleData[counter].number);
            counter++;
          } else this.saleData.push(0);
        } else this.saleData.push(0);
      }

      var counter1 = 0;

      for (var _i = 0; _i < this.dateArr.length; _i++) {
        if (counter1 < data.userData.length) {
          if (this.dateArr[_i] == data.userData[counter1]["date"]) {
            this.userData.push(data.userData[counter1].number);
            counter1++;
          } else this.userData.push(0);
        } else this.userData.push(0);
      }

      var counter2 = 0;

      for (var _i2 = 0; _i2 < this.dateArr.length; _i2++) {
        if (counter2 < data.orderData.length) {
          if (this.dateArr[_i2] == data.orderData[counter2]["date"]) {
            this.orderData.push(data.orderData[counter2].number);
            counter2++;
          } else this.orderData.push(0);
        } else this.orderData.push(0);
      }

      console.log(this.userData, this.orderData);
      this.drawChart();
    },
    drawChart: function drawChart() {
      var schart = document.getElementById("schart");
      schart.innerHTML = '<canvas id="salechart" height="430px" style="width: 100%; max-width: 600px" ></canvas>';
      var salechartEle = document.getElementById("salechart").getContext("2d");
      this.salechart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_3__["default"](salechartEle, {
        type: "line",
        data: {
          labels: this.dateArr,
          datasets: [{
            label: "Sale",
            fill: true,
            data: this.saleData,
            backgroundColor: "rgba(0,123,255,0.7)",
            borderColor: "rgba(0,123,255,1)",
            borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            y: {
              min: 0
            }
          },
          tension: 0.5
        }
      });
      var uchart = document.getElementById("uchart");
      uchart.innerHTML = '<canvas id="userchart" height="455px" style="width: 100%; max-width: 600px" ></canvas>';
      var userChartEle = document.getElementById("userchart").getContext("2d");
      this.userChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_3__["default"](userChartEle, {
        type: "line",
        data: {
          labels: this.dateArr,
          datasets: [{
            label: "New User",
            fill: true,
            data: this.userData,
            backgroundColor: "rgba(40,167,69,0.7)",
            borderColor: "rgba(40,167,69,1)",
            borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            y: {
              min: 0
            }
          },
          tension: 0.5
        }
      });
      var ochart = document.getElementById("ochart");
      ochart.innerHTML = '<canvas id="orderchart" height="455px" style="width: 100%; max-width: 600px"></canvas>';
      var orderChartEle = document.getElementById("orderchart").getContext("2d");
      this.userChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_3__["default"](orderChartEle, {
        type: "line",
        data: {
          labels: this.dateArr,
          datasets: [{
            label: "New Order",
            fill: true,
            data: this.orderData,
            backgroundColor: "rgba(23,162,184,0.7)",
            borderColor: "rgba(23,162,184,1)",
            borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            y: {
              min: 0
            }
          },
          tension: 0.5
        }
      });
    }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashb.vue?vue&type=style&index=0&id=1c6353d5&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashb.vue?vue&type=style&index=0&id=1c6353d5&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-1c6353d5] {\r\n  background-color: white;\r\n  font-family: \"Vollkorn\";\n}\n.input-date[data-v-1c6353d5] {\n}\n#uchart[data-v-1c6353d5] {\n}\n#ochart[data-v-1c6353d5] {\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashb.vue?vue&type=style&index=0&id=1c6353d5&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashb.vue?vue&type=style&index=0&id=1c6353d5&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./dashb.vue?vue&type=style&index=0&id=1c6353d5&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashb.vue?vue&type=style&index=0&id=1c6353d5&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mutedcard.vue?vue&type=template&id=028d73a0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mutedcard.vue?vue&type=template&id=028d73a0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header text-center" }, [
      _c("span", { staticClass: "text-muted p-0 h5" }, [
        _vm._v(_vm._s(this.title))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body text-dark text-center h6" }, [
      _c("b", [_vm._v(_vm._s(this.value))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Topcard.vue?vue&type=template&id=186938ca&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Topcard.vue?vue&type=template&id=186938ca&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "small-box rounded pt-2", style: _vm.cardStyle },
    [
      _c("div", { staticClass: "inner text-center pb-2 text-white" }, [
        _c("h5", [_vm._v(_vm._s(this.text))]),
        _vm._v(" "),
        _c("h3", [_vm._v(_vm._s(this.number))])
      ])
    ]
  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashb.vue?vue&type=template&id=1c6353d5&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashb.vue?vue&type=template&id=1c6353d5&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container pt-2 pb-2" }, [
    _c("div", { staticClass: "row text-center pt-2 pb-2" }, [
      _c("div", { staticClass: "col-4" }, [
        _c("span", { staticClass: "date-text" }, [_vm._v("From:")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.startDate,
              expression: "startDate"
            }
          ],
          attrs: { type: "date" },
          domProps: { value: _vm.startDate },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.startDate = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4" }, [
        _c("span", { staticClass: "date-text" }, [_vm._v("To:")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.endDate,
              expression: "endDate"
            }
          ],
          attrs: { type: "date" },
          domProps: { value: _vm.endDate },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.endDate = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            on: {
              click: function($event) {
                return _vm.check()
              }
            }
          },
          [_vm._v("Go")]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row pt-2 pb-2" },
      _vm._l(this.head_value, function(item, i) {
        return _c(
          "div",
          { key: i, staticClass: "col-lg-3 col-6" },
          [
            _c("topcard", {
              staticClass: "text-light",
              attrs: { text: item.title, number: item.number, bg: item.bg }
            })
          ],
          1
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row pt-2" }, [
      _c("div", { staticClass: "col-lg-8 col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "h6",
              { staticClass: "card-subtitle mb-2 text-muted text-left pl-2" },
              [
                _vm._v("\n            as of " + _vm._s(this.startDate)),
                !_vm.oneDay()
                  ? _c("span", [_vm._v(" to " + _vm._s(this.endDate))])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _vm._m(1)
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-4 col-12" },
        _vm._l(_vm.rightInfo, function(item, i) {
          return _c(
            "mutedcard",
            _vm._b(
              { key: i },
              "mutedcard",
              {
                title: item.title,
                value: item.value
              },
              false
            )
          )
        }),
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row pt-2" }, [
      _c("div", { staticClass: "col" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table" },
              _vm._l(this.topCategory, function(item, i) {
                return _c("tr", { key: i }, [
                  _c("th", { attrs: { scope: "col" } }, [
                    _vm._v(_vm._s(i + 1))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "span",
                      {
                        staticClass: "h6 text-left",
                        staticStyle: { width: "75%" }
                      },
                      [_vm._v("  " + _vm._s(item.name) + " ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "span",
                      {
                        staticClass: "h6 text-right",
                        staticStyle: { width: "25%" }
                      },
                      [
                        _vm._v(
                          " " + _vm._s(item.number ? item.number : 0) + " "
                        )
                      ]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _vm._m(3),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table" },
              _vm._l(this.topProduct, function(item, i) {
                return _c("tr", { key: i }, [
                  _c("th", { attrs: { scope: "col" } }, [
                    _vm._v(_vm._s(i + 1))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "span",
                      {
                        staticClass: "h6 text-left",
                        staticStyle: { width: "75%" }
                      },
                      [_vm._v("  " + _vm._s(item.name) + " ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "span",
                      {
                        staticClass: "h6 text-right",
                        staticStyle: { width: "25%" }
                      },
                      [
                        _vm._v(
                          " " + _vm._s(item.number ? item.number : 0) + " "
                        )
                      ]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table" },
              _vm._l(this.topRemainProduct, function(item, i) {
                return _c("tr", { key: i }, [
                  _c("th", { attrs: { scope: "col" } }, [
                    _vm._v(_vm._s(i + 1))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "span",
                      {
                        staticClass: "h6 text-left",
                        staticStyle: { width: "75%" }
                      },
                      [_vm._v("  " + _vm._s(item.name) + " ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "span",
                      {
                        staticClass: "h6 text-right",
                        staticStyle: { width: "25%" }
                      },
                      [
                        _vm._v(
                          " " + _vm._s(item.number ? item.number : 0) + " "
                        )
                      ]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row pt-2" }, [
        _c("div", { staticClass: "col-lg-6 col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm._m(5),
              _vm._v(" "),
              _c(
                "h6",
                { staticClass: "card-subtitle mb-2 text-muted text-left pl-2" },
                [
                  _vm._v("\n            as of " + _vm._s(this.startDate)),
                  !_vm.oneDay()
                    ? _c("span", [_vm._v(" to " + _vm._s(this.endDate))])
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _vm._m(6)
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 col-12" }, [
          _c("div", { staticClass: "card", staticStyle: { width: "100%" } }, [
            _c(
              "div",
              { staticClass: "card-body", staticStyle: { width: "100%" } },
              [
                _vm._m(7),
                _vm._v(" "),
                _c(
                  "h6",
                  {
                    staticClass: "card-subtitle mb-2 text-muted pl-2 text-left"
                  },
                  [
                    _vm._v("\n            as of " + _vm._s(this.startDate)),
                    !_vm.oneDay()
                      ? _c("span", [_vm._v(" to " + _vm._s(this.endDate))])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _vm._m(8)
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "card-title text-left" }, [
      _c("b", [_vm._v(" Sale chart")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { width: "100%" }, attrs: { id: "schart" } },
      [
        _c("canvas", {
          staticStyle: { width: "100%", "max-width": "600px" },
          attrs: { id: "salechart", height: "430px" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-title h5" }, [
      _c("b", [_vm._v("Top Categories")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-title h5" }, [
      _c("b", [_vm._v("Top Products")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-title h5" }, [
      _c("b", [_vm._v("Top Remained Products")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "card-title text-left" }, [
      _c("b", [_vm._v(" Order chart ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { width: "35vw" }, attrs: { id: "ochart" } },
      [
        _c("canvas", {
          staticStyle: { width: "100%", "max-width": "600px" },
          attrs: { id: "orderchart", height: "455px" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "card-title text-left" }, [
      _c("b", [_vm._v(" New User Chart ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { width: "35vw" }, attrs: { id: "uchart" } },
      [
        _c("canvas", {
          staticStyle: { width: "100%", "max-width": "600px" },
          attrs: { id: "userchart", height: "455px" }
        })
      ]
    )
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

/***/ "./resources/js/components/Mutedcard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Mutedcard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mutedcard_vue_vue_type_template_id_028d73a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mutedcard.vue?vue&type=template&id=028d73a0&scoped=true& */ "./resources/js/components/Mutedcard.vue?vue&type=template&id=028d73a0&scoped=true&");
/* harmony import */ var _Mutedcard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mutedcard.vue?vue&type=script&lang=js& */ "./resources/js/components/Mutedcard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mutedcard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mutedcard_vue_vue_type_template_id_028d73a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Mutedcard_vue_vue_type_template_id_028d73a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "028d73a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Mutedcard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Mutedcard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Mutedcard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mutedcard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Mutedcard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mutedcard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mutedcard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Mutedcard.vue?vue&type=template&id=028d73a0&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Mutedcard.vue?vue&type=template&id=028d73a0&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mutedcard_vue_vue_type_template_id_028d73a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Mutedcard.vue?vue&type=template&id=028d73a0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mutedcard.vue?vue&type=template&id=028d73a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mutedcard_vue_vue_type_template_id_028d73a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mutedcard_vue_vue_type_template_id_028d73a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Topcard.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Topcard.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Topcard_vue_vue_type_template_id_186938ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topcard.vue?vue&type=template&id=186938ca&scoped=true& */ "./resources/js/components/Topcard.vue?vue&type=template&id=186938ca&scoped=true&");
/* harmony import */ var _Topcard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Topcard.vue?vue&type=script&lang=js& */ "./resources/js/components/Topcard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Topcard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Topcard_vue_vue_type_template_id_186938ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Topcard_vue_vue_type_template_id_186938ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "186938ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Topcard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Topcard.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Topcard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topcard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Topcard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Topcard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topcard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Topcard.vue?vue&type=template&id=186938ca&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Topcard.vue?vue&type=template&id=186938ca&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Topcard_vue_vue_type_template_id_186938ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Topcard.vue?vue&type=template&id=186938ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Topcard.vue?vue&type=template&id=186938ca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Topcard_vue_vue_type_template_id_186938ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Topcard_vue_vue_type_template_id_186938ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/components/dashb.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/dashb.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashb_vue_vue_type_template_id_1c6353d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashb.vue?vue&type=template&id=1c6353d5&scoped=true& */ "./resources/js/components/dashb.vue?vue&type=template&id=1c6353d5&scoped=true&");
/* harmony import */ var _dashb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashb.vue?vue&type=script&lang=js& */ "./resources/js/components/dashb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dashb_vue_vue_type_style_index_0_id_1c6353d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashb.vue?vue&type=style&index=0&id=1c6353d5&scoped=true&lang=css& */ "./resources/js/components/dashb.vue?vue&type=style&index=0&id=1c6353d5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dashb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashb_vue_vue_type_template_id_1c6353d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashb_vue_vue_type_template_id_1c6353d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c6353d5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashb.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/dashb.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./dashb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashb.vue?vue&type=style&index=0&id=1c6353d5&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/dashb.vue?vue&type=style&index=0&id=1c6353d5&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashb_vue_vue_type_style_index_0_id_1c6353d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./dashb.vue?vue&type=style&index=0&id=1c6353d5&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashb.vue?vue&type=style&index=0&id=1c6353d5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashb_vue_vue_type_style_index_0_id_1c6353d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashb_vue_vue_type_style_index_0_id_1c6353d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashb_vue_vue_type_style_index_0_id_1c6353d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashb_vue_vue_type_style_index_0_id_1c6353d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/dashb.vue?vue&type=template&id=1c6353d5&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/dashb.vue?vue&type=template&id=1c6353d5&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashb_vue_vue_type_template_id_1c6353d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./dashb.vue?vue&type=template&id=1c6353d5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashb.vue?vue&type=template&id=1c6353d5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashb_vue_vue_type_template_id_1c6353d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashb_vue_vue_type_template_id_1c6353d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);