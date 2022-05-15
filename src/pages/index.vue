<template>
  <section class="home">
    <h1 class="home__title">
      <span class="home__title-part home__title-part--1"><span>Welcome to </span></span>
      <span class="home__title-part home__title-part--2">Vue 3:</span>
      <span class="home__title-part home__title-part--3"><span>essential knowledge & Pinia</span></span>
    </h1>
  </section>
</template>

<script>
export default {
  name: 'Home',
  setup() {

  }
}
</script>

<style lang="scss">
  @import "src/assets/scss/variables";

  @keyframes moveToRight {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
      transform: translate(0, 0);
    }
    100% {
      width: 100%;
      transform: translate(100%, 0);
    }
  }

  @keyframes moveToLeft {
    0% {
      width: 0;
    }
    50% {
      width: 100%;

    }
    100% {
      width: 0;
    }
  }

  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px 50px;

    &__title {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0;
      padding: 0;
      font-size: 60px;
      line-height: 1.4;
      background-image: linear-gradient(to bottom, $v-gray, $v-green);
      background-clip: text;
      color: transparent;
      overflow: hidden;
    }

    &__title-part {
      display: block;

      &--1 {
        display: flex;
        align-items: center;
        font-family: "Courier New", serif;
        overflow: hidden;

        & span {
          flex-shrink: 0;
          margin-right: 15px;
        }

        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 5px;
          border-radius: 5px;
          background-color: $v-gray;
          animation-name: moveToRight;
          animation-duration: 3s;
          animation-timing-function: ease;
          animation-iteration-count: infinite;
        }

      }

      &--2 {
        margin: -90px 0 -60px;
        font-family: "Open Sans ExtraBold", serif;
        font-size: 235px;
        text-align: right;
      }

      &--3 {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-family: "Courier New", serif;
        font-size: 36px;
        text-align: right;
        letter-spacing: 4px;
        overflow: hidden;

        & span {
          flex-shrink: 0;
          margin-left: 15px;
        }

        &::before {
          content: '';
          display: block;
          width: 100%;
          height: 5px;
          border-radius: 5px;
          background-color: $v-green;
          animation-name: moveToLeft;
          animation-duration: 3s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      }

    }
  }

</style>
