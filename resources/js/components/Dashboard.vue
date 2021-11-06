<template>
    <div class="dashboard">
        <Sidebar id="sidebar"/>
        <div class=".container-fluid no-padding content">
            <div class="row header">
                
                
                
                <div class="col-2 text-left"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list side-bar" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg> 
                </div>


                <!-- <div class="col-10 text-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle icon-admin" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </div> -->


                <div class="col text-right dropdown">
                    <button style="border-radius: 50%;" class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="../assets/person.svg" alt=""  width="40px">
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="http://127.0.0.1:8000/">Logout</a>
                    </div>
                </div>

            </div>
            <router-view/>
        </div>
    </div>

</template>

<script>
import Sidebar from './Sidebar'
export default {
    name: 'home',

    components: {
        Sidebar
    },

}


</script>

<style>
.right {
    background-color: white;
}

.dashboard {
    display: grid;
    grid-template-columns: 1.2fr 5fr;
    background-color: #1C2A39;
    height: 100vh;
    width: 100vw;
}

.no-padding {
    padding: 0;
}

.content {
    background-color: white;
    /* border-radius: 10px;
    margin: 6px 6px 6px 0px; */
    border-radius: 0px;
    margin: 0px;
    /* overflow: hidden;       */
    overflow-x: hidden;
}

.header {
    /* width: 100%; */
    background: white;
    height: 8%;
    margin-left: 0px;
    margin-right: 0px;
    /* overflow: hidden; */
    border-bottom: 2px solid #D8DBE0;
}

.side-bar {
    margin-left: 10px;
    margin-top: 15px;
}

.icon-admin {
   margin-top: 18px;
   margin-right: 15px;
}


</style>