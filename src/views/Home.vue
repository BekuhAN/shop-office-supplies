<template>
  <main>
    <section class="info_slider">
      <Carousel>
        <div
          class="info_slider__item"
          v-for="slide of infoSlider"
          :key="slide.id"
          :style="`background-image: url( ${getImgUrl(slide.bgImage)} )`"
        >
          <div class="info_slider__item__description">
            <div class="main_title">{{ slide.title }}</div>
            <div class="sub_title">{{ slide.subTitle }}</div>
            <router-link class="btn" :to="slide.link"> Подробнее </router-link>
          </div>
        </div>
      </Carousel>
    </section>
  </main>
</template>

<script>
import Carousel from "../components/Carousel";
export default {
  name: "Home",
  data() {
    return {
      infoSlider: [
        {
          id: 1,
          title: "Широкий ассортимент",
          subTitle: "Более 10 000 товаров",
          bgImage: "banner-1.jpg",
          link: "/products",
        },
        {
          id: 2,
          title: "Доставка по городу бесплатно",
          subTitle: "При заказе от 3 000 р",
          bgImage: "banner-2.jpg",
          link: "/delivery",
        },
        {
          id: 3,
          title: "Скидка 30%",
          subTitle: "на товары для творчества",
          bgImage: "banner-3.jpg",
          link: "/products",
        },
      ],
    };
  },
  methods: {
    getImgUrl(imgName) {
      return require("../assets/img/" + imgName);
    },
  },
  components: {
    Carousel,
  },
};
</script>

<style lang="scss">
.info_slider {
  &__item {
    min-width: 100vw;
    height: 500px;
    background-repeat: no-repeat;
    background-size: 100% auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(#000, 0.6);
      position: absolute;
      left: 0;
      top: 0;
    }
    &__description {
      color: #fff;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      z-index: 1;
      padding: 0px 200px;
      .main_title {
        font-size: 36px;
      }
      .sub_title {
        font-size: 24px;
        margin: 10px 0px 30px;
      }
    }
  }
}
</style>
