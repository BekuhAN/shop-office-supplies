<template>
  <div class="carousel" :style="cssProps">
    <div class="carusel__items">
      <slot></slot>
    </div>
    <div class="carousel__nav">
      <font-awesome-icon class="carousel__nav__prev" icon="angle-left" />
      <font-awesome-icon class="carousel__nav__next" icon="angle-right" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      margin: -100,
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
    carouselPrev() {},
    carouselNext() {},
  },
};
</script>

<style lang="scss">
.carusel {
  &__items {
    display: flex;
    margin-left: var(--margin-left);
  }
}
</style>
