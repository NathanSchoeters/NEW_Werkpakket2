<script>
</script>
<template>
<header class="navbar">
        <div class="navbar-logo">
            <img class="logo-img" src="@/assets/Illustrashop.png" alt="My Logo">
        </div>
        <nav class="navbar-navigation">
            <ul class="nav-list">
                <li class="nav-list-item"><router-link to="/home">Home</router-link></li>
                <li class="nav-list-item"><router-link to="/shop">Products</router-link></li>
                <li class="nav-list-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="navbar-buttons">
            <router-link to="/login"><button type="button" class="navbar-button"><i class="fa-solid fa-user"></i></button></router-link>
            <router-link to="/cart"><button type="button" class="navbar-button"><i class="fa-solid fa-cart-shopping"></i></button></router-link>
        </div>
    </header>
</template>
<style>
</style>