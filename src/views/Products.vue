<template>
  <main class="products_page">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="products_categories">
            <div class="products_categories__title">Категории</div>
            <ul class="products_categories__list">
              <li class="products_categories__list__item">
                <router-link
                  to="/products?_limit=8&_page=1&all=true"
                  :class="{ active: !$route.query.categoryId }"
                  >Все товары</router-link
                >
              </li>
              <li
                class="products_categories__list__item"
                v-for="cat of listCategories"
                :key="cat.id"
              >
                <router-link
                  :to="{
                    path: '/products',
                    query: {
                      categoryId: cat.id,
                    },
                  }"
                  :class="{ active: cat.id === $route.query.categoryId }"
                >
                  {{ cat.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-9">
          <div class="col-12 filter_products">
            Сортировка
            <select
              v-model="sortSelected"
              @change="sorting"
              class="filter_products__list"
            >
              <option selected value="">По умолчанию</option>
              <option value="title_asc">По имени: A-Z</option>
              <option value="title_desc">По имени: Z-A</option>
              <option value="price_asc">По цене: возрастанию</option>
              <option value="price_desc">По цене: убыванию</option>
            </select>
          </div>
          <div class="col-12 products_list">
            <ProductItem
              v-for="product of listProducts"
              :key="product.id"
              :item="product"
            ></ProductItem>
          </div>
          <!-- <div class="col-12 pagination">
            <div class="pagination__prev">Предыдущая</div>
            <div class="pagination__list_page">
              <router-link to="" class="pagination__list_page__item">
              </router-link>
            </div>
            <div class="pagination__next">Следующая</div>
          </div> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductItem from "../components/ProductItem";
export default {
  data() {
    return {
      params: {
        _limit: 8,
        _page: 1,
      },
      sortSelected: "",
      activeCategory: null,
      currentPage: 1,
    };
  },
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(["listProducts", "listCategories"]),
  },
  methods: {
    ...mapActions(["getListProducts", "getListCategories"]),
    fetchData() {
      const { all } = this.$route.query;
      if (all) {
        this.params = Object.assign({}, { ...this.$route.query });
      } else {
        this.params = Object.assign({}, this.params, { ...this.$route.query });
      }
      console.log(this.$route);
      this.getListProducts(this.params);
      this.getListCategories();
    },
    sorting() {
      if (this.sortSelected) {
        this.params._sort = this.sortSelected.split("_")[0];
        this.params._order = this.sortSelected.split("_")[1];
      } else {
        this.params._sort = "";
        this.params._order = "";
      }
      this.getListProducts(this.params);
    },
  },
  beforeMount() {
    const { all } = this.$route.query;
    if (all) {
      this.params = Object.assign({}, { ...this.$route.query });
    } else {
      this.params = Object.assign({}, this.params, { ...this.$route.query });
    }
    this.getListProducts(this.params);
    this.getListCategories();
  },
  watch: {
    $route: "fetchData",
  },
};
</script>

<style lang="scss">
.products_page {
  padding: 50px 0;
  .products_categories {
    box-shadow: 0px 0px 20px 0px #f0f0f0;
    &__title {
      background: #208f7f;
      border-radius: 10px 10px 0 0;
      padding: 10px 15px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
    }
    &__list {
      &__item {
        a {
          display: block;
          padding: 10px 30px;
          border-radius: 10px;
        }
        & .router-link-exact-active {
          position: relative;
          color: #208f7f;
          &::before {
            content: "";
            display: block;
            position: absolute;
            width: 10px;
            height: 10px;
            background: #208f7f;
            left: 10px;
            top: 50%;
            border-radius: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
  .filter_products {
    background: #208f7f;
    margin-bottom: 30px;
    border-radius: 10px 10px 0 0;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #fff;
    &__list {
      height: 30px;
      border-radius: 10px;
      border: none;
      padding-left: 5px;
      color: #323232;
      margin-left: 15px;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
