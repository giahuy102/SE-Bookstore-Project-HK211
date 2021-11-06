<template>
  <div class="mainApp">
    <nav id="sidebar" style="background-color:#1C2A39">
        <div class="navbar-brand text-center">
            <img src="images/logo.png" style="max-width:85%;" alt="" class="d-inline-block align-middle ml-2 mt-2">
        </div>

        <ul class="list-unstyled components">
            <li>
                <!-- <a href="{{ route('home') }}"><img src="images/home-icon.png" alt=""> Home</a> -->
                <a href="#"><img src="images/home-icon.png" alt="" class="pl-2 pr-2"> Home</a>
            </li>
            <li >
                <!-- <a href="{{ route('dashboard') }}"><img src="images/dashboard-icon.svg" alt=""> Dashboard</a> -->
                <a href="#"><img src="images/dashboard-icon.svg" alt="" class="pl-2 pr-2"> Dashboard</a>
            </li>
                <!-- <a href="{{ route('dashboard') }}"><img src="images/dashboard-icon.svg" alt=""> Dashboard</a> -->
                <!-- <a href="#"><img src="images/dashboard-icon.svg" alt="" class="pl-2 pr-2"> Dashboard</a> -->
            <li class="active">
              <router-link :to="{name : 'ordermanagement'}">
                <font-awesome-icon
                  icon="clipboard-list"
                  size="2x"
                  style="margin-left: 15px"
                />
                <div style="display:inline-block; margin-left: 10px"> Order Management </div>
              </router-link>
            </li> 
        </ul>

    </nav>
    <div class = "router-view-field">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
body{
  background-color: #EBEDEF;
  font-size: 50px;
}
.mainApp{
  display: flex;
  margin: 0;
}
nav{
  background: #1C2A39;
  width: 300px;
  height: 960px;
}
.navToOrderList{
  margin-top: 80px;
  background: #1DCAFF;
  color: white;
  height: 80px;
  text-align: center;
}
.router-view-field{
  width: 1500px;
}
#sidebar {
    min-width: 350px;
    max-width: 350px;
    background: #7386D5;
    color: #fff;
    transition: all 0.3s;
}

#sidebar.active {
    margin-left: -350px;
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
    background: #3C4B64;
}


#sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    background: #0084B4;
}

#sidebar ul li a.router-link-active>a,
a[aria-expanded="true"] {
    color: #fff;
    background: #0084B4;
}
</style>