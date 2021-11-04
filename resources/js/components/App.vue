<template>
  <div class="mainApp">
    <nav>
        <router-link :to="{name : 'ordermanagement'}">
          <div class="navToOrderList">Order Management</div>
        </router-link>
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
</style>