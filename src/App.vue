<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header,
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
