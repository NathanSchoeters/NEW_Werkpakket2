<script>
import Header from '@/components/HeaderComponent.vue';
import Footer from '@/components/FooterComponent.vue';

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<template>
<html lang="nl">

<body id="top">
  <Header/>

    <section class="about">
        <div class="about-info">
            <div class="about-info-left">
                <h1 class="about-info-heading">About this site</h1>
                <p class="about-info-text"> 
                    Welcome to Illustrashop!
                    At Illustrashop, we bring you a world of creativity through our delightful collection of stickers and illustrations. 
                    Our passion for art and design drives us to offer you the most vibrant, original, and inspiring creations.
                </p>
            </div>
            <div class="about-info-right">
                <img class="about-info-image" src="@/assets/Illustration1.png" alt="Illusration">
            </div>
        </div>
    </section>

    <section class="gallery">
        <h1 class="gallery-title">Best Sold</h1>
        <div class="cards-wrapper">
            <a class="product-link" href="./product.html">
                <div class="card">
                    <div class="card-top">
                        <img class="card-top-image" src="@/assets/Illustration1.png" alt="Illustration1">
                    </div>
                    <div class="card-bottom">
                        <div class="card-bottom-title">
                            <h1 class="card-bottom-title-header">Ahsoka sticker</h1>
                            <h2 class="card-bottom-title-price">€1.50</h2>
                        </div>
                        <div class="card-bottom-info">
                            <p class="card-bottom-info-text">This sticker is 5x8 cm.</p>
                            <button class="card-bottom-info-button" type="button"><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                </div>
             </a>
             <a class="product-link" href="./product.html">
                <div class="card">
                    <div class="card-top">
                        <img class="card-top-image" src="@/assets/Illustration2.png" alt="Illustration2">
                    </div>
                    <div class="card-bottom">
                        <div class="card-bottom-title">
                            <h1 class="card-bottom-title-header">Darksaber sticker</h1>
                            <h2 class="card-bottom-title-price">€0.50</h2>
                        </div>
                        <div class="card-bottom-info">
                            <p class="card-bottom-info-text">This sticker is 1x5 cm.</p>
                            <button class="card-bottom-info-button" type="button"><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                </div>
             </a>
             <a class="product-link" href="./product.html">
                <div class="card">
                    <div class="card-top">
                        <img class="card-top-image" src="@/assets/Package1.png" alt="Package1">
                    </div>
                    <div class="card-bottom">
                        <div class="card-bottom-title">
                            <h1 class="card-bottom-title-header">Lightsaber pack</h1>
                            <h2 class="card-bottom-title-price">€2.50</h2>
                        </div>
                        <div class="card-bottom-info">
                            <p class="card-bottom-info-text">These stickers are 1x5 cm.</p>
                            <button class="card-bottom-info-button" type="button"><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </section>
    
    <Footer/>
    
</body>
</html>
</template>

<style scoped>

</style>
