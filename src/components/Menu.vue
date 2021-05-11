<template>
  <nav class="main_menu container">
    <ul class="main_menu__items">
      <li class="item" v-for="item of listMenu" :key="item.id">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
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
          link: "/products?_limit=8&_page=1",
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
    };
  },
};
</script>

<style lang="scss">
.main_menu {
  font-size: 14px;
  &__items {
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      padding: 18px 24px;
      a {
        transition: 0.2s;
        &:hover {
          color: #208f7f;
        }
        &.router-link-exact-active {
          color: #208f7f;
        }
      }
    }
  }
}
</style>
