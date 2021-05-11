import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Delivery from "../views/Delivery.vue";
import Contacts from "../views/Contacts.vue";
import Products from "../views/Products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/delivery",
    name: "Delivery",
    component: Delivery,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
