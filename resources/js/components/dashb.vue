<template>
  <div class="container pt-2 pb-2">
    <div class="row text-center pt-2 pb-2">
      <div class="col-4">
        <span class="date-text">From:</span>
        <input type="date" v-model="startDate" />
      </div>
      <div class="col-4">
        <span class="date-text">To:</span>
        <input type="date" v-model="endDate" />
        <button class="btn btn-primary" @click="check()">Go</button>
      </div>
    </div>

    <div class="row pt-2 pb-2">
      <div class="col-lg-3 col-6" v-for="(item, i) in this.head_value" :key="i">
        <topcard :text="item.title" :number="item.number" :bg="item.bg" class="text-light">
        </topcard>
      </div>
    </div>
    <div class="row pt-2">
      <!-- chart -->
      <div class="col-lg-8 col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-left"> <b> Sale chart</b> </h5>
            <h6 class="card-subtitle mb-2 text-muted text-left pl-2">
              as of {{ this.startDate
              }}<span v-if="!oneDay()"> to {{ this.endDate }}</span>
            </h6>
            <div id="schart" style="width: 100%">
              <canvas
              id="salechart"
              height="430px"
              style="width: 100%; max-width: 600px"
            ></canvas>
            </div>
            
          </div>
        </div>
      </div>
      <!-- muted box -->
      <div class="col-lg-4 col-12">
        <mutedcard
          v-for="(item, i) in rightInfo"
          :key="i"
          v-bind="{
            title: item.title,
            value: item.value,
          }"
        ></mutedcard>
      </div>
    </div>
    <div class="row pt-2">
      <div class="col">
        <!-- top category -->
        <div class="card">
          <div class="card-body">
            <div class="card-title h5"><b>Top Categories</b></div>
              <table class="table">
              <tr
                
                v-for="(item, i) in this.topCategory"
                :key="i"
              >
                <th scope="col">{{i+1}}</th>
                <td > <span class="h6 text-left"  style="width: 75%">  {{ item.name }} </span> </td>
                <td > <span class="h6 text-right" style="width: 25%"> {{ item.number ? item.number : 0 }} </span> </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col">
        <!-- top product -->
        <div class="card">
          <div class="card-body">
            <div class="card-title h5"> <b>Top Products</b></div>
            <table class="table" >
              <tr
                
                v-for="(item, i) in this.topProduct"
                :key="i"
                
              >
                <th scope="col">{{i+1}}</th>
                <td > <span class="h6 text-left"  style="width: 75%">  {{ item.name }} </span> </td>
                <td > <span class="h6 text-right" style="width: 25%"> {{ item.number ? item.number : 0 }} </span> </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col">
        <!-- top remain product -->
        <div class="card">
          <div class="card-body">
            <div class="card-title h5"><b>Top Remained Products</b></div>
            <table class="table">
              <tr
                
                v-for="(item, i) in this.topRemainProduct"
                :key="i"
              >
                <th scope="col">{{i+1}}</th>
                <td > <span class="h6 text-left"  style="width: 75%">  {{ item.name }} </span> </td>
                <td > <span class="h6 text-right" style="width: 25%"> {{ item.number ? item.number : 0 }} </span> </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-lg-6 col-12">
          <!-- order chart -->
          <div class="card">
          <div class="card-body">
            <h5 class="card-title text-left"> <b> Order chart </b></h5>
            <h6 class="card-subtitle mb-2 text-muted text-left pl-2">
              as of {{ this.startDate
              }}<span v-if="!oneDay()"> to {{ this.endDate }}</span>
            </h6>
            <div id="ochart" style="width: 35vw">
              <canvas
            id="orderchart"
            height="455px"
            style="width: 100%; max-width: 600px"
          ></canvas>
            </div>
            
          </div>
        </div>
          
        </div>
        <div class="col-lg-6 col-12">
          <!-- new user chart -->
          <div class="card" style="width: 100%;">
          <div class="card-body" style="width: 100%">
            <h5 class="card-title text-left"> <b> New User Chart </b> </h5>
            <h6 class="card-subtitle mb-2 text-muted pl-2 text-left">
              as of {{ this.startDate
              }}<span v-if="!oneDay()"> to {{ this.endDate }}</span>
            </h6>
            <div id="uchart" style="width: 35vw">
              <canvas
              id="userchart"
              height="455px"
              style="width: 100%; max-width: 600px"
          ></canvas>
            </div>
            
          </div>
        </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topcard from "./Topcard.vue";
import moment from "moment";
import Mutedcard from "./Mutedcard.vue";
import Chart from "chart.js/auto";
export default {
  components: { Topcard, Mutedcard },
  data() {
    return {
      startDate: "",
      endDate: "",
      head_value: [
        {
          title: "Visited",
          number: 1500,
          bg: "#6cb2eb",
        },

        {
          title: "New user",
          number: 500,
          bg: "#38c172",
        },

        {
          title: "New order",
          number: 100,
          bg: "#dfcd4a",
        },

        {
          title: "Sales",
          number: 1000,
          bg: "#d3242f",
        },
      ],
      rightInfo: [
        {
          title: "Order",
          value: 100,
        },
        {
          title: "Processing",
          value: 100,
        },
        {
          title: "Delivering",
          value: 100,
        },
        {
          title: "Completed",
          value: 100,
        },
        {
          title: "Cancelled",
          value: 100,
        },
      ],
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
  mounted: function () {
    let date = new Date();
    this.endDate =
      date.getFullYear().toString() +
      "-" +
      (date.getMonth() + 1).toString() +
      "-" +
      date.getDate().toString();
    this.startDate =
      date.getFullYear().toString() +
      "-" +
      (date.getMonth() + 1).toString() +
      "-" +
      date.getDate().toString();
    this.getData();
  },
  methods: {
    dateStr: function (day) {
      return;
      day.getFullYear().toString() +
        "-" +
        (day.getMonth() + 1).toString() +
        "-" +
        day.getDate().toString();
    },
    oneDay: function () {
      return this.startDate == this.endDate;
    },
    check: function () {
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
        let start = new Date(this.startDate);
        let end = new Date(this.endDate);
        let currentDate = new Date(this.startDate);

        while (currentDate <= end) {
          this.dateArr.push(currentDate.toISOString().substring(0, 10));
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }

      this.getData();
    },
    getData: function () {
      let endDate = new Date(this.endDate);
      endDate.setDate(endDate.getDate()+1);
      console.log(endDate);
      axios
        .post("/api/dashboard", {
          startDate: this.startDate,
          endDate: endDate,
        })
        .then((response) => {
          this.updateData(response.data);
        })
        .catch((er) => {
          console.log(er);
        });
    },
    updateData: function (data) {
      this.head_value[1].number = data.newUser[0].number;
      this.head_value[2].number = data.newOrder[0].number;
      this.head_value[3].number =  data.sale ? (data.sale[0].number ? data.sale[0].number : 0) : 0;
      this.topProduct = data.topProducts;
      this.topCategory = data.topCategory;
      this.topRemainProduct = data.topRemainProduct;
      this.rightInfo[0].value = data.totalOrder[0].number;
      this.rightInfo[1].value = data.processingOrder[0].number;
      this.rightInfo[2].value = data.deliveringOrder[0].number;
      this.rightInfo[3].value = data.completedOrder[0].number;
      this.rightInfo[4].value = data.cancelledOrder[0].number;

      let counter = 0;
      for (let i = 0; i < this.dateArr.length; i++) {
        if (counter < data.saleData.length)
          if (this.dateArr[i] == data.saleData[counter]["date"]) {
            this.saleData.push(data.saleData[counter].number);
            counter++;
          } else this.saleData.push(0);
        else this.saleData.push(0);
      }

      let counter1 = 0;
      for (let i = 0; i < this.dateArr.length; i++) {
        if (counter1 < data.userData.length)
          if (this.dateArr[i] == data.userData[counter1]["date"]) {
            this.userData.push(data.userData[counter1].number);
            counter1++;
          } else this.userData.push(0);
        else this.userData.push(0);
      }

      let counter2 = 0;
      for (let i = 0; i < this.dateArr.length; i++) {
        if (counter2 < data.orderData.length)
          if (this.dateArr[i] == data.orderData[counter2]["date"]) {
            this.orderData.push(data.orderData[counter2].number);
            counter2++;
          } else this.orderData.push(0);
        else this.orderData.push(0);
      }
      console.log(this.userData, this.orderData);
      this.drawChart();
    },
    drawChart: function () {
      let schart = document.getElementById("schart");
      schart.innerHTML = '<canvas id="salechart" height="430px" style="width: 100%; max-width: 600px" ></canvas>'
      let salechartEle = document.getElementById("salechart").getContext("2d");
      
      this.salechart = new Chart(salechartEle, {
        type: "line",
        data: {
          labels: this.dateArr,
          datasets: [
            {
              label: "Sale",
              fill: true,
              data: this.saleData,
              backgroundColor: "rgba(0,123,255,0.7)",
              borderColor: "rgba(0,123,255,1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          legend: { display: true },
          scales: {
          y: {
            min: 0,
            
            }
          },
          tension: 0.5
          
        },
      });

      let uchart = document.getElementById("uchart");
      uchart.innerHTML = '<canvas id="userchart" height="455px" style="width: 100%; max-width: 600px" ></canvas>'
      let userChartEle = document.getElementById("userchart").getContext("2d");
      
      this.userChart = new Chart(userChartEle, {
        type: "line",
        data: {
          labels: this.dateArr,
          datasets: [
            {
              label: "New User",
              fill: true,
              data: this.userData,
              backgroundColor: "rgba(40,167,69,0.7)",
              borderColor: "rgba(40,167,69,1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          legend: { display: true },
          scales: {
          y: {
            min: 0,
            
            }
          },
          tension: 0.5
          
        },
      });

      let ochart = document.getElementById("ochart");
      ochart.innerHTML = '<canvas id="orderchart" height="455px" style="width: 100%; max-width: 600px"></canvas>';
      let orderChartEle = document.getElementById("orderchart").getContext("2d");
      
      this.userChart = new Chart(orderChartEle, {
        type: "line",
        data: {
          labels: this.dateArr,
          datasets: [
            {
              label: "New Order",
              fill: true,
              data: this.orderData,
              backgroundColor: "rgba(23,162,184,0.7)",
              borderColor: "rgba(23,162,184,1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          legend: { display: true },
          scales: {
          y: {
            min: 0,
            
            }
          },
          tension: 0.5
          
        },
      });
    },
  },
};
</script>
<style scoped>
.container {
  background-color: white;
  font-family: "Vollkorn", sans-serif;
}
.input-date {
}
#uchart {
  
  
}
#ochart {
  
  
}
</style>