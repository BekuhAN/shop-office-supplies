<template>
  <div class="row">
    <div class="products_list__item" @click="modalShow">
      <figure class="products_list__item__image">
        <div class="sale_count" v-if="item.sale">-{{ item.sale }} %</div>
        <img :src="getImgUrl(item.image)" />
      </figure>
      <div class="products_list__item__content">
        <div class="title">{{ item.title }}</div>
        <div class="articul">{{ item.articul }}</div>
        <div class="description">{{ item.description }}</div>
        <div class="prices">
          <div class="price" :class="{ sale: item.sale }">
            {{ item.price }}
            <font-awesome-icon class="icon" icon="ruble-sign" />
          </div>
          <div class="sale_price" v-if="item.sale">
            {{ calcPrice(item.price, item.sale) }}
            <font-awesome-icon class="icon" icon="ruble-sign" />
          </div>
        </div>
      </div>
    </div>
    <div class="products_list__item__modal" v-if="isModal">
      <div class="container">
        <div class="products_list__item__modal__content">
          <div class="products_list__item__modal__close" @click="modalShow">
            <font-awesome-icon class="icon" icon="times" />
          </div>
          <figure class="products_list__item__image">
            <div class="sale_count" v-if="item.sale">-{{ item.sale }} %</div>
            <img :src="getImgUrl(item.image)" />
          </figure>
          <div class="products_list__item__content">
            <div class="modal_title">{{ item.title }}</div>
            <div class="modal_articul">{{ item.articul }}</div>
            <div class="modal_description">{{ item.description }}</div>
            <div class="modal_prices">
              <div class="modal_price" :class="{ sale: item.sale }">
                {{ item.price }}
                <font-awesome-icon class="icon" icon="ruble-sign" />
              </div>
              <div class="modal_sale_price" v-if="item.sale">
                {{ calcPrice(item.price, item.sale) }}
                <font-awesome-icon class="icon" icon="ruble-sign" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    calcPrice(price, sale) {
      return Math.trunc(price - (price * sale) / 100);
    },
    getImgUrl(imgName) {
      return require("../assets/img/" + imgName);
    },
    modalShow() {
      this.isModal = !this.isModal;
    },
  },
};
</script>

<style lang="scss">
.products_list__item {
  display: flex;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px #f0f0f0;
  transition: 0.2s;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  &__modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6;
    &__content {
      background: #fff;
      display: flex;
      padding: 15px;
      position: relative;
      border-radius: 10px;
      .modal_title {
        font-size: 18px;
        margin-bottom: 15px;
        overflow: hidden;
      }
      .modal_articul {
        margin-bottom: 15px;
        font-size: 14px;
        color: #208f7f;
      }
      .modal_description {
        color: #888;
        overflow: hidden;
        margin-bottom: 15px;
      }
      .modal_prices {
        display: flex;
        font-size: 20px;
        .modal_price {
          flex: 0 0 100px;
          display: flex;
          height: 40px;
          align-items: center;
          justify-content: center;
          &.sale {
            text-decoration: line-through;
          }
        }
        .modal_sale_price {
          background: #208f7f;
          flex: 0 0 100px;
          display: flex;
          height: 40px;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: bold;
        }
        .icon {
          font-size: 16px;
          margin-left: 5px;
        }
      }
    }
    &__close {
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
  &__image {
    margin: 20px;
    flex: 0 0 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 250px;
    position: relative;
    .sale_count {
      top: 0;
      left: 0;
      position: absolute;
      background: #208f7f;
      color: #fff;
      padding: 5px 10px;
    }
    img {
      width: 100%;
    }
  }
  &__content {
    padding: 15px;
    .title {
      font-size: 18px;
      margin-bottom: 15px;
      max-height: 55px;
      overflow: hidden;
    }
    .articul {
      margin-bottom: 15px;
      font-size: 14px;
      color: #208f7f;
    }
    .description {
      color: #888;
      max-height: 100px;
      overflow: hidden;
      margin-bottom: 15px;
    }
    .prices {
      display: flex;
      font-size: 20px;
      .price {
        flex: 0 0 100px;
        display: flex;
        height: 40px;
        align-items: center;
        justify-content: center;
        &.sale {
          text-decoration: line-through;
        }
      }
      .sale_price {
        background: #208f7f;
        flex: 0 0 100px;
        display: flex;
        height: 40px;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: bold;
      }
      .icon {
        font-size: 16px;
        margin-left: 5px;
      }
    }
  }
}
</style>
