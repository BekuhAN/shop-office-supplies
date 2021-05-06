<template>
  <header>
    <div class="header_top">
      <router-link to="/">
        <div class="logo"><img src="../assets/logo.png" /></div>
        <div class="title">Канцтовары</div>
      </router-link>
    </div>
    <div class="header_menu">
      <Menu></Menu>
    </div>
  </header>
</template>

<script>
import Menu from "./Menu";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
.header_top {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
    }
    .logo {
      margin-right: 10px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 100%;
      }
    }
  }
}
.header_menu {
  border-top: 1px solid #208f7f;
}
</style>
