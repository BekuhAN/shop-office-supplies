<template>
  <main class="delivery_page">
    <div class="section_title">Доставка</div>
    <div class="container">
      <div class="row">
        <div class="col-6 delivery_list">
          <div class="delivery_list__item">
            <font-awesome-icon class="icon" icon="shopping-cart" />
            <span>Минимальная сумма заказа — 2000 ₽</span>
          </div>
          <div class="delivery_list__item">
            <font-awesome-icon class="icon" icon="truck" />
            <span
              >Доставка осуществляется в рабочие дни 09:00–17:00. В более
              позднее время доставка возможна по согласованию с
              менеджером.</span
            >
          </div>
          <div class="delivery_list__item">
            <font-awesome-icon class="icon" icon="clock" />
            <span
              >Заказы оформленные до 14:00 доставляются в течение 1–2 рабочих
              дней.</span
            >
          </div>
          <div class="delivery_list__item">
            <font-awesome-icon class="icon" icon="clock" />
            <span
              >Заказы оформленные после 14:00 доставляются в течение 1–3 рабочих
              дней. Точные сроки сообщит менеджер.</span
            >
          </div>
          <div class="delivery_list__item">
            <font-awesome-icon class="icon" icon="credit-card" />
            <span
              >Безналичный способ оплаты — доставка будет произведена в течение
              1–2 рабочих дней после поступления денежных средств на расчётный
              счёт. Условия поставки могут быть индивидуально оговорены в
              договоре.</span
            >
          </div>
        </div>
        <div class="col-6 delivery_info">
          <div class="delivery_info__title">ДОСТАВКА ПО Г. КРАСНОДАР</div>
          <div class="delivery_info__description">
            <div class="delivery_info__description__item">
              при сумме заказа от <span>3500 ₽</span> — бесплатно
            </div>
            <div class="delivery_info__description__item">
              при сумме заказа менее <span>3500 ₽</span> — стоимость доставки
              <span>350 ₽</span>
            </div>
          </div>
          <div class="delivery_info__title">
            ДОСТАВКА В ПРИГОРОДЫ КРАСНОДАРА И ПО КРАСНОДАРСКОМУ КРАЮ
          </div>
          <div class="delivery_info__description">
            <div class="delivery_info__description__item">
              уточните стоимость у персонального менеджера или по телефону
              <span>8 (861) 999-99-99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section_title">Оплата</div>
    <div class="container">
      <div class="row">
        <div class="col-4 pay_item">
          <figure>
            <div class="image">
              <font-awesome-icon class="icon" icon="money-bill" />
            </div>
          </figure>
          <div class="title">Наличный расчёт</div>
          <div class="description">
            Оплата наличными производится в момент получения товаров
            непосредственно курьеру. Все документы, связанные с покупкой, Вам
            также предоставляются в момент получения товара.
          </div>
        </div>
        <div class="col-4 pay_item">
          <figure>
            <div class="image">
              <font-awesome-icon class="icon" icon="credit-card" />
            </div>
          </figure>
          <div class="title">Безналичный расчёт</div>
          <div class="description">
            При безналичном расчете оплата производится в полном объеме на
            расчетный счет, а бухгалтерские документы Вы получаете вместе с
            заказом.
          </div>
        </div>
        <div class="col-4 pay_item">
          <figure>
            <div class="image">
              <font-awesome-icon class="icon" icon="file-alt" />
            </div>
          </figure>
          <div class="title">Документы</div>
          <div class="description">
            Для того чтобы получить комплект документов для бухгалтерии, Вам
            необходимо прислать свои реквизиты по адресу
            <span>info@info.ru</span>. Не забудьте указать номер Вашего заказа в
            письме.
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.delivery_page {
  padding: 50px 0;
  .delivery_list {
    margin-bottom: 50px;
    &__item {
      position: relative;
      padding-left: 40px;
      margin-bottom: 15px;
      .icon {
        position: absolute;
        top: 5px;
        left: 0;
        font-size: 20px;
        path {
          fill: #208f7f;
        }
      }
    }
  }
  .delivery_info {
    background: url("../assets/img/pay-bcg.jpg") no-repeat;
    background-size: 100% auto;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    color: #fff;
    z-index: -1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
    padding-left: 30px;
    &::before {
      content: "";
      background: rgba(#000, 0.8);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      z-index: -1;
    }
    &__title {
      font-size: 18px;
      font-weight: bold;
      margin: 10px 0;
    }
    &__description {
      padding-left: 20px;
      span {
        color: #208f7f;
        font-weight: bold;
      }
    }
  }
  .pay_item {
    margin-top: 30px;
    text-align: center;
    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      .image {
        background: #eeeeee;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon {
          font-size: 42px;
          path {
            fill: #208f7f;
          }
        }
      }
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      margin: 15px 0;
    }
  }
}
</style>
