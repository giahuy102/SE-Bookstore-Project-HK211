<template>
    <div id="home">
        <div id="hot-sale" >
            <div class="container-custom">
                <h3>Hot Sale!</h3>
                <div id="button-link-group" class="d-flex">
                    <a href="#" id="buy-link" class="d-flex justify-content-center align-items-center">Buy now</a>
                    <a href="#" id="detail-link" class="d-flex justify-content-center align-items-center">See details</a>
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

a {
    text-decoration: none;
    color: white;
}


.container-custom {
    width: 1200px;
    margin: auto;
}

#hot-sale {
    height: 570px;
    background-image: url("/images/background-decoration-1.png");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 25%;
    background-size: 65% auto;
}

#hot-sale {
    padding-top: 100px;
}



#button-link-group {
    margin-top: 40px;
}

#hot-sale h3 {
    font-family: "Inria Serif";
    font-weight: 700;
    color: #296063;
    font-size: 100px;
}

#buy-link, #detail-link {
    font-family: "Inria Serif";
    width: 150px;
    height: 54px;
    border-radius: 50px;
    font-size: 20px;
    
}

#buy-link {
    background-color: #113963;
    margin-right: 60px;
}

#detail-link {
    color: #112839;
    border: 1px solid #01162A;
}



</style>