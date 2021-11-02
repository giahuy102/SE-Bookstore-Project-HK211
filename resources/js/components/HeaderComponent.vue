<template>
    <div id="header">
        <div class="container-custom">
            <div class="row no-gutters">
                <div class="col-3 d-flex align-items-center">
                    <h1>
                        
                        <a href="#">
                            <img src="/images/logo.png" alt="Bookstore">
                        </a>
                    </h1>
                </div>


                <div class="col-4 d-flex align-items-center">
                    <button>
                        <i class="fa fa-search"></i>
                    </button>
                    <form  action="">
                        <input type="text" name="" id="">

                    </form>
                </div>

                <!-- <div class="col d-flex align-items-center">
                    <form action="">
                        <input type="text">
                        <i class="fa fa-search"></i>
                    </form>
                </div> -->


                <div class="col-15 d-flex align-items-center">
                    <a href="#"><li>CATEGORY</li></a>
                </div>

                <div class="col-15 d-flex align-items-center">
                    <a href="#">BEST SELLER</a>
                </div>

                <div class="col-15 d-flex align-items-center">
                    <a href="#">DISCOUNT</a>
                </div>

                <div class="col item d-flex align-items-center justify-content-center">
                    <i class="fas fa-user"></i>
                </div>

                <div class="col item d-flex align-items-center justify-content-end">
                    <i class="fas fa-shopping-cart"></i>
                </div>

            </div>

        </div>



    </div>



</template>

<script>
export default {
    setup() {
        
    },
}
</script>



<style scoped>
#header {
    background-color: rgba(0, 32, 69, 0.91);
    height: 68px;
}

.col-15 {
    font-family: "Monserat";
    font-weight: 700;
    font-size: 16px;
    margin-right: 35px;
}

.item {
    color: #ffffff;
    font-size: 22px;

}



a, a:hover {
    text-decoration: none;
    color: #FFFFFF;
}

.container-custom {
    height: 100%;
    width: 1200px;
    margin: auto;

}

.row, .col {
    height: 100%;
}



h1 img {
    width: 230px;
}

form button {
    border-radius: 100%;
}


    /* position: relative; */
    /* top: 50%;
    left: 50%; */

/* form{

    position: relative;
    transition: all 1s;
    width: 50px;
    height: 50px;
    background: white;
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid white;
    padding: 5px;

}




input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
}

.fa{
    box-sizing: border-box;
    padding: 10px;
    width: 42.5px;
    height: 42.5px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: #07051a;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
}

form:hover,
form:valid{
    width: 200px;
    cursor: pointer;
}

form:hover input,
form:valid input{
    display: block;
}

form:hover .fa,
form:valid .fa{
    background: #07051a;
    color: white;
}


form a {
  display: none;
  position: absolute;
  top: 70px;
  bottom:0;
  left: 0;
  right: 0;
  font-size: 20px;
  color: white;
  text-align: center; 
  width: 100%;
}

form:valid a {
  display: block;
} */
</style>