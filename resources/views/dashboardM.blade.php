@extends('layouts.dashboard-template')

@section('content')
<div class="container">
  <div class="inner-container">
    <div class="button-gr text-center pb-2">
      <div class="btn-group" role="group" aria-label="Basic example">
        <a href="{{route('dashboard')}}"   role="button" class="btn" style="border-radius: 45% 0 0 45%; width:4.5rem;border: 1px solid #0084B4">Day</a>
        <a href="{{route('dashboard_w')}}"role="button" class="btn" style="width:4.5rem; border: 1px solid #0084B4">Week</a>
        <a href="{{route('dashboard_m')}}"role="button" class="btn btn-primary" style="border-radius: 0 45% 45% 0;width:4.5rem; border: 1px solid #0084B4">Month</a>
      </div>
    </div>
    <div class="row pt-2 pb-3">
      <!-- Small boxes (Stat box) -->
      <div class="col-lg-3 col-6">
        <!-- small box -->
        <div class="small-box rounded bg-info pt-2">
          <div class="inner text-center pb-2 text-white">
            <h6>Visited</h6>
            <h3>1500</h3>
          </div>
        </div>
      </div>
      <!-- ./col -->
      <div class="col-lg-3 col-6">
        <!-- small box -->
        <div class="small-box rounded bg-success pt-2">
          <div class="inner text-center pb-2 text-white">
            <h6>New user</h6>
            <h3>500</h3>
          </div>
        </div>
      </div>
      <!-- ./col -->
      <div class="col-lg-3 col-6">
        <!-- small box -->
        <div class="small-box rounded bg-warning pt-2">
          <div class="inner text-center pb-2 text-white">
            <h6>New order</h6>
            <h3>200</h3>
          </div>

        </div>
      </div>
      <!-- ./col -->
      <div class="col-lg-3 col-6">
        <!-- small box -->
        <div class="small-box rounded bg-danger pt-2">
          <div class="inner text-center pb-2 text-white">
            <h6>Sales</h6>
            <h3>1000$</h3>
          </div>

        </div>
      </div>
      <!-- ./col -->
    </div>
    <!-- /.row -->
  </div>

  <!-- row -->
  <div class="row">
    <div class="col-8 ">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"> Monthly Sale </h5>
          <h6 class="card-subtitle mb-2 text-muted">as of 01 Nov 2021, 9:00PM</h6>
          <canvas id="salechart" height="455px" style="width:100%;max-width:600px"></canvas>
        </div>
      </div>
    </div>
    <div class="col-4 d-flex flex-column">
      <div class="card">
        <div class="card-header text-center">
          <span class="text-muted p-0">Order</span>
        </div>
        <div class="card-body text-dark text-center"><b>50</b></div>
      </div>

      <div class="card">
        <div class="card-header text-center">
          <span class="text-muted">Processing</span>
        </div>
        <div class="card-body text-dark text-center"> <b>50</b></div>
      </div>

      <div class="card">
        <div class="card-header text-center">
          <span class="text-muted">Delivering</span>
        </div>
        <div class="card-body text-dark text-center"><b>50</b></div>
      </div>

      <div class="card">
        <div class="card-header text-center">
          <span class="text-muted">Completed</span>
        </div>
        <div class="card-body text-dark text-center"><b>50</b></div>
      </div>

      <div class="card">
        <div class="card-header text-center">
          <span class="text-muted">Cancelled</span>
        </div>
        <div class="card-body text-dark text-center"><b>5</b></div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <div class="card-title"><b>Top product</b></div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Harry Porter</li>
            <li class="list-group-item">God Father</li>
            <li class="list-group-item">Your name</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <div class="card-title"><b>Top category</b></div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Novel</li>
            <li class="list-group-item">Science fiction</li>
            <li class="list-group-item">Manga</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"> Device </h5>
          <h6 class="card-subtitle mb-2 text-muted">as of 01 Nov 2021, 9:00PM</h6>
          <canvas id="devicechart" style="width:100%;"></canvas>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

@endsection

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
<script>
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  window.onload = function() {
    Chart.defaults.global.defaultFontColor = '#000000';
    Chart.defaults.global.defaultFontFamily = 'Arial';
    var salechart = document.getElementById('salechart');
    var day_label = [];
    var today_value = [];
    var yesterday_value = [];
    for (let i = 1; i <= 30; i++) {
      day_label.push(i);
      today_value.push(getRndInteger(2, 10));
      yesterday_value.push(getRndInteger(2, 10));
    }
    var myChart = new Chart(salechart, {
      type: 'line',
      data: {
        labels: day_label,
        datasets: [{

            label: 'This month',
            fill: false,
            data: today_value,
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Last month',
            data: yesterday_value,
            fill: false,
            backgoundColor: 'rgba(0, 128, 128, 0.7)',
            borderColor: 'rgba(0, 128, 128, 1)',
            borderWidth: 1
          }
        ]

      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
      }
    });

    var devicechart = document.getElementById('devicechart');
    var my2Chart = new Chart(devicechart, {
      type: 'pie',
      data: {
        labels: ['PC', 'Tablet', 'Mobile'],
        datasets: [{
          data: [1000, 300, 600],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],


        }]

      },
      options: {
        },
      }
    );


  };
</script>