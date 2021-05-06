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
}
body {
  color: #2c3e50;
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
