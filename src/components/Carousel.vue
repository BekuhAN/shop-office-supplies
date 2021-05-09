<template>
  <div class="carousel" :style="cssProps">
    <div class="carousel__wrapper" :class="{ container: container }">
      <div class="carousel__items" :class="{ row: row }">
        <slot></slot>
      </div>
    </div>
    <button class="carousel__prev" @click="carouselPrev">
      <font-awesome-icon class="icon" icon="angle-left" />
    </button>
    <button class="carousel__next" @click="carouselNext">
      <font-awesome-icon class="icon" icon="angle-right" />
    </button>
  </div>
</template>

<script>
export default {
  props: ["itemCount", "container", "row"],
  data() {
    return {
      currentCountPage: 0,
      margin: 0,
    };
  },
  computed: {
    cssProps() {
      return {
        "--margin-left": this.margin + "%",
      };
    },
  },
  methods: {
    carouselPrev() {
      if (this.currentCountPage > 0) {
        this.currentCountPage--;
      } else {
        this.currentCountPage = this.itemCount - 1;
      }
      this.margin = -100 * this.currentCountPage;
    },
    carouselNext() {
      if (this.currentCountPage < this.itemCount - 1) {
        this.currentCountPage++;
      } else {
        this.currentCountPage = 0;
      }
      this.margin = -100 * this.currentCountPage;
    },
  },
};
</script>

<style lang="scss">
.carousel {
  position: relative;
  &__wrapper {
    overflow: hidden;
  }
  &__items {
    display: flex;
    margin-left: var(--margin-left);
    transition: 0.5s;
    flex-wrap: nowrap;
    align-items: center;
  }
  &__prev,
  &__next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    font-size: 50px;
    transition: 0.2s;
    cursor: pointer;
    background: none;
    border: none;
    .icon {
      path {
        transition: 0.2s;
        fill: #999;
      }
    }
    &:focus {
      outline: none;
    }
    &:hover {
      .icon {
        path {
          fill: #208f7f;
        }
      }
    }
  }
  &__prev {
    left: 90px;
  }
  &__next {
    right: 90px;
  }
}
</style>
