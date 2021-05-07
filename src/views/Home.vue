<template>
  <main>
    <section class="info_slider">
      <Carousel :itemCount="countPage(infoSlider, 1)">
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
    <section class="about">
      <div class="container">
        <div class="section_title">О нас</div>
        <div class="about__description">
          <p>
            Мы сможем обеспечить Ваш офис или Ваше домашнее рабочее место всем
            необходимым, что в полной мере обеспечит комфорт и порядок на
            рабочем месте. Ведь известно, что благоустроенность рабочего
            пространства влияет на производительность и эмоциональное состояние.
          </p>
          <p>
            Ассортимент нашей продукции превышает 25 000 наименований товаров, к
            тому же он постоянно пополняется. У нас Вы всегда найдете все
            необходимое для обеспечения бесперебойной работы Вашего офиса.
          </p>
        </div>
      </div>
    </section>
    <section class="why_we">
      <div class="section_title">Почему мы?</div>
      <div class="container">
        <div class="row">
          <div class="col-4 why_we__item">
            <figure>
              <div class="image">
                <font-awesome-icon class="icon" icon="check" />
              </div>
            </figure>
            <div class="description">
              <div class="title">Всегда вовремя</div>
              Разнообразный и богатый опыт укрепление и развитие.
            </div>
          </div>
          <div class="col-4 why_we__item">
            <figure>
              <div class="image">
                <font-awesome-icon class="icon" icon="check" />
              </div>
            </figure>
            <div class="description">
              <div class="title">Гарантия качества</div>
              Значимость этих проблем настолько очевидна.
            </div>
          </div>
          <div class="col-4 why_we__item">
            <figure>
              <div class="image">
                <font-awesome-icon class="icon" icon="check" />
              </div>
            </figure>
            <div class="description">
              <div class="title">Быстрая доставка</div>
              Таким образом дальнейшее развитие различных.
            </div>
          </div>
        </div>
      </div>
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
    countPage(arr, itemsCount) {
      return Math.ceil(arr.length / itemsCount);
    },
  },
  components: {
    Carousel,
  },
};
</script>

<style lang="scss">
.info_slider {
  padding: 0;
  &__item {
    min-width: calc(100vw - 17px);
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
.about {
  &__description {
    padding: 0px 200px;
    text-align: center;
  }
}

.why_we {
  background: url("../assets/img/bg-section-1.jpg") no-repeat;
  background-size: 100% auto;
  background-attachment: fixed;
  color: #fff;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, 0.6);
  }
  .section_title {
    &::before {
      background: #fff;
    }
  }
  .section_title,
  .container {
    z-index: 1;
  }
  &__item {
    margin-top: 30px;
    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      .image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #fff;
        border: 1px solid #208f7f;
        font-size: 36px;
        position: relative;
        cursor: pointer;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #aaa;
          border-radius: 50%;
          transform: scale(1.3);
          transition: 0.6s;
          opacity: 0;
        }
        .icon {
          z-index: 2;
          transition: 0.6s;
          path {
            fill: #208f7f;
          }
        }
      }
    }
    .description {
      text-align: center;
      font-size: 18px;
      .title {
        margin: 20px 0 15px;
        font-size: 24px;
        font-weight: bold;
      }
    }
    &:hover {
      .image {
        border: none;
        background: #555;
        &::before {
          transform: scale(1);
          background: #555;
          opacity: 1;
        }
        .icon {
          path {
            fill: #fff;
          }
        }
      }
    }
  }
}
</style>
