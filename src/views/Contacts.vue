<template>
  <main class="contacts_page">
    <div class="section_title">Контакты</div>
    <div class="container">
      <div class="row">
        <div class="col-7 contacts_map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A75a006444acbfe2bbaed820c43d75744c02f4d5d28430d0acc963e456babe670&amp;source=constructor"
            width="100%"
            height="400"
            frameborder="0"
          ></iframe>
        </div>
        <div class="col-5 contacts_info">
          <ul class="contacts">
            <li class="contacts__item">
              <font-awesome-icon class="icon" icon="map-marker-alt" />
              <span>Россия, Краснодар, Ставропольская улица, 159</span>
            </li>
            <li class="contacts__item">
              <font-awesome-icon class="icon" icon="envelope" />
              <span>demo@example.com</span>
            </li>
            <li class="contacts__item">
              <font-awesome-icon class="icon" icon="phone-alt" />
              <span>+7 (861) 99-99-999</span>
            </li>
            <li class="contacts__item">
              <font-awesome-icon class="icon" icon="clock" />
              <span>9:00 - 17:00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contacts_page {
  padding: 50px 0;
  .contacts_map {
    margin-top: 30px;
  }
  .contacts {
    margin-top: 30px;
    &__item {
      position: relative;
      margin-bottom: 30px;
      font-size: 18px;
      span {
        padding-left: 30px;
        display: block;
      }
      .icon {
        position: absolute;
        left: 0;
        top: 5px;
        font-size: 20px;
        path {
          fill: #208f7f;
        }
      }
    }
  }
}
</style>
