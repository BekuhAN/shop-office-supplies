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
    <section class="catalog">
      <div class="section_title">Каталог</div>
      <div class="container">
        <div class="row">
          <router-link
            to="/"
            class="col-4 catalog__item"
            v-for="cat of listCategories"
            :key="cat.id"
          >
            <figure class="image">
              <img :src="getImgUrl(cat.bgImage)" />
              <div class="title">{{ cat.name }}</div>
            </figure>
          </router-link>
        </div>
      </div>
    </section>
    <section class="work_progress">
      <div class="section_title">О нас в цыфрах</div>
      <div class="container">
        <div class="row">
          <div class="col-3 work_progress__item">
            <div class="progress">12</div>
            <div class="title">Лет</div>
          </div>
          <div class="col-3 work_progress__item">
            <div class="progress">84</div>
            <div class="title">Города</div>
          </div>
          <div class="col-3 work_progress__item">
            <div class="progress">105</div>
            <div class="title">Розничных магазинов</div>
          </div>
          <div class="col-3 work_progress__item">
            <div class="progress">7</div>
            <div class="title">Логистических центров</div>
          </div>
        </div>
      </div>
    </section>
    <section class="stocks">
      <div class="section_title">Акции</div>
      <div class="container">
        <div class="row">
          <div class="col-4 stocks__item">
            <figure class="image">
              <img src="../assets/img/stock-1.png" />
            </figure>
            <div class="time">
              <font-awesome-icon class="icon" icon="clock" /> по 12.05.2021
            </div>
            <div class="title">Игра в подарок: волшебная зарядка</div>
            <div class="description">
              Совсем скоро придут летние каникулы – время долгих прогулок и
              далеких путешествий!
            </div>
          </div>
          <div class="col-4 stocks__item">
            <figure class="image">
              <img src="../assets/img/stock-2.jpeg" />
            </figure>
            <div class="time">
              <font-awesome-icon class="icon" icon="clock" /> по 19.08.2021
            </div>
            <div class="title">Суперцена на офисную бумагу!</div>
            <div class="description">Офисная бумага по выгодной цене!</div>
          </div>
          <div class="col-4 stocks__item">
            <figure class="image">
              <img src="../assets/img/stock-3.png" />
            </figure>
            <div class="time">
              <font-awesome-icon class="icon" icon="clock" /> по 11.05.2021
            </div>
            <div class="title">Скидка на блокноты, закладки, скетчбуки</div>
            <div class="description">
              Окунитесь в яркие миры, обретите надежных помощников и друзей в
              учебе и повседневной жизни.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="comments">
      <div class="section_title">Отзывы</div>
      <Carousel :container="true" :itemCount="countPage(listComments, 1)">
        <div
          class="comments__item"
          v-for="comment of listComments"
          :key="comment.id"
        >
          <div class="item row">
            <div class="col-2">
              <figure class="image">
                <img :src="getImgUrl(comment.image)" />
              </figure>
            </div>
            <div class="col-1">
              <font-awesome-icon class="icon" icon="quote-left" />
            </div>
            <div class="content col-9">
              <div class="text">{{ comment.text }}</div>
              <div class="author">{{ comment.author }}</div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
    <section class="brands">
      <div class="section_title">Брэнды</div>
      <Carousel
        :container="true"
        :row="true"
        :itemCount="countPage(listBrands, 6)"
      >
        <div class="brands__item" v-for="brand of listBrands" :key="brand.id">
          <figure class="image">
            <img :src="getImgUrl(brand.src)" />
          </figure>
        </div>
      </Carousel>
    </section>
  </main>
</template>

<script>
import Carousel from "../components/Carousel";
import { mapGetters, mapActions } from "vuex";
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
      listComments: [
        {
          id: 1,
          text:
            "Работаем с данной фирмой уже довольно давно. Никаких нареканий, одни положительные впечатления. Будем продолжать сотрудничество.",
          author: "- Ольга",
          image: "comment-2.jpeg",
        },
        {
          id: 2,
          text:
            "Сайт понравился. Спасибо менеджерам за творческий подход! Буду рекомендовать всем друзьям и близким.",
          author: "- Степан",
          image: "comment-3.png",
        },
        {
          id: 3,
          text:
            "Сайт просто супер. Ребята молодцы, делают свою работу на высоком уровне. Товары всегда новые, цены вполне доступные. Часто проводятся скидки, акции, что особо радует :) ",
          author: "- Аркадий",
          image: "comment-1.jpg",
        },
      ],
      listBrands: [
        {
          id: 1,
          src: "brand-1.jpeg",
        },
        {
          id: 2,
          src: "brand-2.png",
        },
        {
          id: 3,
          src: "brand-3.jpeg",
        },
        {
          id: 4,
          src: "brand-4.jpeg",
        },
        {
          id: 5,
          src: "brand-5.jpeg",
        },
        {
          id: 6,
          src: "brand-6.jpeg",
        },
        {
          id: 7,
          src: "brand-7.jpeg",
        },
        {
          id: 8,
          src: "brand-8.jpeg",
        },
        {
          id: 9,
          src: "brand-9.jpeg",
        },
        {
          id: 10,
          src: "brand-10.jpeg",
        },
        {
          id: 11,
          src: "brand-11.png",
        },
        {
          id: 12,
          src: "brand-12.jpeg",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["listCategories"]),
  },
  beforeMount() {
    this.getListCategories();
  },
  methods: {
    ...mapActions(["getListCategories"]),
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
.catalog {
  &__item {
    display: block;
    margin-bottom: 30px;
    transition: 0.2s;
    &:hover {
      transform: scale(1.2);
      z-index: 2;
      .image {
        .title {
          height: 100%;
          font-size: 18px;
        }
      }
    }
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      height: 230px;
      position: relative;
      img {
        width: 100%;
      }
      .title {
        position: absolute;
        height: 40px;
        width: 100%;
        left: 0;
        bottom: 0;
        background: rgba(#208f7f, 0.8);
        display: flex;
        align-items: center;
        padding: 0px 10px;
        color: #fff;
        justify-content: center;
      }
    }
  }
}
.work_progress {
  background: url("../assets/img/bg-section-2.jpg") no-repeat;
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
    text-align: center;
    padding: 40px 0;
    .progress {
      font-size: 54px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .title {
      font-size: 20px;
      padding: 0px 30px;
    }
  }
}
.stocks {
  &__item {
    .image {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 340px;
      margin-bottom: 10px;
      img {
        width: 100%;
      }
    }
    .time {
      margin-bottom: 10px;
      color: #888;
      font-weight: bold;
      .icon {
        path {
          fill: #208f7f;
        }
      }
    }
    .title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
}
.comments {
  background: #f9f9f9;
  &__item {
    flex: 0 0 1110px;
    padding: 30px 0;
    min-width: 1110px;
    .item {
      display: flex;
      .image {
        flex: 0 0 100px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        img {
          width: 100%;
        }
      }
      .icon {
        margin-top: 15px;
        font-size: 42px;
        path {
          fill: #888;
        }
      }
      .content {
        .text {
          color: #888;
          margin-bottom: 10px;
        }
        .author {
          font-weight: bold;
        }
      }
    }
  }
}
.brands {
  &__item {
    flex: 0 0 185px;
    padding: 30px 15px;
    filter: grayscale(1);
    opacity: 0.7;
    &:hover {
      filter: grayscale(0);
      opacity: 1;
    }
    .image {
      display: flex;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
      }
    }
  }
}
</style>
