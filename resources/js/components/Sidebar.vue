<template>
    <div class="sidebar">
        <div class="title">
            <div class="logo-hcmut"><img src="../../../public/images/warehouse/hcmut1.png" alt="hcmut logo"
            width="30" height="30"></div>
            <div class="title-text">BK BOOKSTORE</div>
        </div>
        <div class="menu-items">
            <router-link to="/admin" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <div class="icon-desciption"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                            <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                            </svg>
                    </div>
                    <div class="text-description">HOME</div>
                </div>
            </router-link>

            <router-link to="/admin/additems" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <div class="icon-desciption">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                    </div>
                    <div class="text-description">ADD ITEMS</div>
                </div>
            </router-link>

            <router-link to="/admin/managebooks" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <div class="icon-desciption">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal" viewBox="0 0 16 16">
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                        </svg>
                    </div>
                    <div class="text-description">MANAGE BOOKS</div>
                </div>
            </router-link>

            <router-link to="/admin/ordermanagement" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <div class="icon-desciption">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                        </svg>
                    </div>
                    <div class="text-description">MANAGE ORDERS</div>
                </div>
            </router-link>
            <router-link to="/admin/dashboard" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <div class="icon-desciption">
                        <svg width="25" height="25" viewBox="0 0 43 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="bi bi-journal">
                            <path d="M40.8947 22.8072H37.2279C36.6176 22.8072 36.1228 23.2672 36.1228 23.8347V31.9723C36.1228 32.5398 36.6176 32.9999 37.2279 32.9999H40.8947C41.505 32.9999 41.9999 32.5399 41.9999 31.9723V23.8347C41.9999 23.2672 41.5051 22.8072 40.8947 22.8072Z" fill="#D8DBE0"/>
                            <path d="M31.864 18.8999H28.1972C27.5869 18.8999 27.092 19.36 27.092 19.9274V31.9723C27.092 32.5398 27.5868 32.9999 28.1972 32.9999H31.864C32.4743 32.9999 32.9691 32.5399 32.9691 31.9723V19.9275C32.9692 19.36 32.4744 18.8999 31.864 18.8999Z" fill="#D8DBE0"/>
                            <path d="M13.8026 22.8072H10.1359C9.52554 22.8072 9.03076 23.2672 9.03076 23.8347V31.9723C9.03076 32.5398 9.52554 32.9999 10.1359 32.9999H13.8026C14.413 32.9999 14.9078 32.5399 14.9078 31.9723V23.8347C14.9078 23.2672 14.413 22.8072 13.8026 22.8072Z" fill="#D8DBE0"/>
                            <path d="M4.77197 18.8999H1.1052C0.494773 18.8999 0 19.36 0 19.9275V31.9724C0 32.5399 0.494773 33 1.1052 33H4.77197C5.3823 33 5.87708 32.54 5.87708 31.9724V19.9275C5.87708 19.36 5.3823 18.8999 4.77197 18.8999Z" fill="#D8DBE0"/>
                            <path d="M22.8335 13.7048H19.1667C18.5564 13.7048 18.0615 14.1649 18.0615 14.7324V31.9724C18.0615 32.5399 18.5563 33 19.1667 33H22.8335C23.4438 33 23.9387 32.54 23.9387 31.9724V14.7324C23.9387 14.1649 23.4438 13.7048 22.8335 13.7048Z" fill="#D8DBE0"/>
                            <path d="M39.9097 17.7524C40.6534 17.7524 41.2801 17.189 41.2801 16.4783V12.3605C41.2801 11.6569 40.6665 11.0864 39.9097 11.0864C39.153 11.0864 38.5394 11.6569 38.5394 12.3605V13.3899L24.6217 0.375753C24.3342 0.106919 23.9333 -0.0291548 23.5265 0.00524577C23.1203 0.0394765 22.7516 0.240104 22.5206 0.552682L12.0354 14.7425L2.82669 9.28805C2.1884 8.90999 1.34127 9.08454 0.934748 9.6781C0.528132 10.2716 0.715864 11.0591 1.35425 11.4372L11.6792 17.5529C11.9071 17.6878 12.1621 17.7526 12.4142 17.7526C12.8511 17.7526 13.2798 17.5585 13.5448 17.1999L23.8437 3.26209L36.6147 15.2042H35.481C34.7242 15.2042 34.1107 15.7746 34.1107 16.4783C34.1107 17.1819 34.7242 17.7524 35.481 17.7524C36.094 17.7524 39.2858 17.7524 39.9065 17.7524H39.9097Z" fill="#D8DBE0"/>
                        </svg>
                    </div>
                    <div class="text-description">DASHBOARD</div>
                </div>
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.title {
    color: white;
    font-size: 22px;    
    margin-top: 10px;
    font-weight: bold;
    display: flex;
}

.logo-hcmut {
    margin-left: 10px;
}

.title-text {
    margin-left: 10px;
    padding-top: 5px;
}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    /* margin-left: 6px; */
    margin-left: 0px;
}

/* .menu-items > * {    khoang cach giua BookStore va menu items phia duoi
    margin-top: 60px;
} */

.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: transparent;
}

.side-btn:focus {
    outline: none;
}

.side-btn.active {
    position: relative;
    background-color: #0084B4;
    color: white;
    font-weight: 600;
    margin-left: 0px;
    /* border-radius: 30px 0 0 30px;*/
}

.link-container {
    display: flex;
}

.icon-desciption {
    margin-left: 10px;
}

.text-description {
    margin-left: 15px;
}

/* .side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}

.side-btn.active .link-container::before {
    top: -60px;
}

.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}

.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: teal;
} */
</style>