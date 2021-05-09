<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="footer_title">Навигация</div>
          <ul class="footer_list">
            <li
              class="footer_list__item"
              v-for="menu of listMenu"
              :key="menu.id"
            >
              <router-link :to="menu.link">{{ menu.name }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-3">
          <div class="footer_title">Каталог</div>
          <ul class="footer_list">
            <li
              class="footer_list__item"
              v-for="cat of listCategories"
              :key="cat.id"
            >
              <router-link to="/">{{ cat.name }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-3">
          <div class="footer_title">Контакты</div>
          <ul class="contacts">
            <li class="contacts__item">
              <font-awesome-icon class="icon" icon="map-marker-alt" />
              <span>Россия, Краснодар, Ставропольская улица, 159</span>
            </li>
            <li class="contacts__item">
              <font-awesome-icon class="icon" icon="envelope" />
              <span>demo@example.com</span>
            </li>
            <li class="contacts__item">
              <font-awesome-icon class="icon" icon="phone-alt" />
              <span>+7 (861) 99-99-999</span>
            </li>
            <li class="contacts__item">
              <font-awesome-icon class="icon" icon="clock" />
              <span>9:00 - 17:00</span>
            </li>
          </ul>
        </div>
        <div class="col-3">
          <div class="footer_title">Заказать звонок</div>
          <form class="contact_form" @submit.prevent="sendEmail">
            <input
              required
              placeholder="Ваше имя"
              type="text"
              name="user_name"
            />
            <the-mask
              :mask="['+7 (###) ###-####']"
              required
              placeholder="+7 (999) 999-9999"
              type="phone"
              name="user_phone"
            />
            <input class="send_mail" type="submit" value="Отправить" />
            <div class="mail_success" v-if="isSuccess">Успех</div>
            <div class="mail_error" v-if="isError">Ошибка</div>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import emailjs from "emailjs-com";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      listMenu: [
        {
          id: 1,
          name: "Главная",
          link: "/",
        },
        {
          id: 2,
          name: "О нас",
          link: "/about",
        },
        {
          id: 3,
          name: "Продукция",
          link: "/products",
        },
        {
          id: 4,
          name: "Доставка",
          link: "/delivery",
        },
        {
          id: 5,
          name: "Контакты",
          link: "/contacts",
        },
      ],
      isSuccess: false,
      isError: false,
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
    sendEmail(e) {
      const self = this;
      emailjs
        .sendForm(
          "service_8pffxs3",
          "template_1jfrk56",
          e.target,
          "user_XYpsO08lyi9FfEIXnCKaK"
        )
        .then(
          (result) => {
            self.isSuccess = true;
            e.target.reset;
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            self.isError = true;
            e.target.reset;
            console.log("FAILED...", error);
          }
        );
    },
  },
  watch: {
    isSuccess: function () {
      const self = this;
      setTimeout(() => {
        self.isSuccess = false;
      }, 1500);
    },
    isError: function () {
      const self = this;
      setTimeout(() => {
        self.isError = false;
      }, 1500);
    },
  },
};
</script>

<style lang="scss">
footer {
  background: #4b5359;
  color: #fff;
  padding: 50px 0;
  z-index: 5;
  .footer_title {
    font-size: 20px;
    font-weight: bold;
    position: relative;
    margin-bottom: 30px;
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 30px;
      height: 2px;
      background: #fff;
      left: 0;
      bottom: -15px;
    }
  }
  .footer_list {
    &__item {
      padding-bottom: 10px;
      transition: 0.2s;
      a {
        color: #d9d9d9;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  .contacts {
    &__item {
      position: relative;
      margin-bottom: 10px;
      span {
        padding-left: 25px;
        display: block;
        color: #d9d9d9;
      }
      .icon {
        position: absolute;
        left: 0;
        top: 5px;
      }
    }
  }
  .contact_form {
    input {
      width: 100%;
      background: none;
      border: 1px solid #208f7f;
      height: 40px;
      padding: 0px 15px;
      margin-bottom: 10px;
      border-radius: 10px;
      &::placeholder {
        color: #bbb;
      }
      &:focus {
        outline: none;
      }
      &.send_mail {
        background: #208f7f;
        transition: 0.2s;
        &:hover {
          background: darken(#208f7f, 10%);
          border-color: darken(#208f7f, 10%);
        }
      }
    }
  }
}
</style>
