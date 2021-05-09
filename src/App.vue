<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
    <div class="call_btn" @click="modalShow">
      <font-awesome-icon class="icon" icon="phone-alt" />
    </div>
    <div class="call_modal" v-if="isModal">
      <div class="call_modal__form">
        <div class="call_modal__close">
          <font-awesome-icon class="icon" icon="times" @click="modalShow" />
        </div>
        <div class="section_title">Заказать звонок</div>
        <div class="call_modal__form__sub_title">
          Оставте ваш номер мы вам перезвоним
        </div>
        <form class="contact_form" @submit.prevent="sendEmail">
          <input required placeholder="Ваше имя" type="text" name="user_name" />
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
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import emailjs from "emailjs-com";
import { TheMask } from "vue-the-mask";
export default {
  data() {
    return {
      isModal: false,
      isSuccess: false,
      isError: false,
    };
  },
  components: {
    Header,
    Footer,
    TheMask,
  },
  methods: {
    modalShow() {
      this.isModal = !this.isModal;
    },
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
            e.target.reset();
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            self.isError = true;
            e.target.reset();
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
@font-face {
  font-family: "Merriweather";
  src: local("Merriweather-Bold"),
    url("~@/assets/fonts/Merriweather-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: "Merriweather";
  src: local("Merriweather-Regular"),
    url("~@/assets/fonts/Merriweather-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: Merriweather;
  margin: 0;
  padding: 0;
  color: inherit;
  list-style: none;
  text-decoration: none;
  line-height: 1.5;
  transition: inherit;
}
body {
  position: relative;
  color: #323232;
  .section_title {
    padding-bottom: 40px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    position: relative;
    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 2px;
      background: #208f7f;
    }
  }
  .call_btn {
    position: fixed;
    left: 15px;
    bottom: 15px;
    background: #208f7f;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .icon {
      font-size: 24px;
      z-index: 5;
      path {
        fill: #fff;
      }
    }
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
    &:hover {
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
  .call_modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, 0.8);
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    backdrop-filter: blur(2px);
    &__form {
      position: relative;
      width: 360px;
      color: #323232;
      background: #fff;
      padding: 20px 30px;
      border-radius: 10px;
      &__sub_title {
        padding: 0px 20px 20px;
        text-align: center;
        font-size: 18px;
      }
      .call_modal__close {
        position: absolute;
        top: -35px;
        right: -25px;
        .icon {
          font-size: 32px;
          transition: 0.2s;
          cursor: pointer;
          path {
            fill: #fff;
          }
          &:hover {
            path {
              fill: #208f7f;
            }
          }
        }
      }
    }
    .contact_form {
      input {
        width: 100%;
        border: 1px solid #208f7f;
        height: 40px;
        padding: 0px 15px;
        margin-bottom: 10px;
        border-radius: 10px;
        &::placeholder {
          color: #323232;
        }
        &:focus {
          outline: none;
        }
        &.send_mail {
          background: #208f7f;
          transition: 0.2s;
          color: #fff;
          &:hover {
            background: darken(#208f7f, 10%);
            border-color: darken(#208f7f, 10%);
          }
        }
      }
    }
  }
  .mail_success {
    color: #4bb543;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }
  .mail_error {
    color: #ff9494;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }
}
p {
  margin-bottom: 15px;
}
section {
  padding: 50px 0;
}
.btn {
  width: 150px;
  height: 40px;
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #208f7f;
  text-transform: uppercase;
}
</style>
