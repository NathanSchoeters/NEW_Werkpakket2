<script>
import PopularProducts from '@/components/PopularProductsComponent.vue';
export default {

components: {
  PopularProducts,
},

}
</script>
<template>
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

    <PopularProducts/>
</template>