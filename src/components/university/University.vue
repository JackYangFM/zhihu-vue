<template>
	<div class="container">
    <header>
      <div class="zh-title">
        <div class="avater">
          <img src="../../assets/Avatar.png" alt="">
        </div>
        <div class="desc">
          <p class="first-line">开通会员&nbsp;<span>&#xe846;</span></p>
          <p class="second-line">课程随意听,&nbsp;&nbsp;好书继续读</p>
        </div>
        <div class="icons">
          <span class="mail">&#xe7e4;</span>
          <span class="search">&#xe7a2;</span>
        </div>
      </div>
      <div class="r_scroll">
        <div>
          <!-- <p>课堂</p> -->
          <router-link to="/index/university/lesson">课堂</router-link>
        </div>
        <div>
          <!-- <p>读书会</p> -->
          <router-link to="/index/university/reading">读书会</router-link>
        </div>
      </div>
    </header>
    <main>
    </main>
  </div>
</template>

<script>
export default {
  name: "university"
};
</script>

<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";
.container {
  background-color: #fff;
  @include flexbox();
  @include flex-direction(column);
  // flex-direction: column
  header {
    @include flex();
    width: 100%;
    height: 0.924rem;
    @include border(0 0 1px 0, #a2a2a2);
    .zh-title {
      @include flexbox();
      @include flex-direction();
      margin-left: 0.2rem;
      margin-top: 0.15rem;
      .avater {
        margin-top: 0.05rem;
        img {
          width: 0.35rem;
          height: 0.35rem;
        }
      }
      .desc {
        margin-left: 0.12rem;
        .first-line {
          font-family: "u_font";
          color: #ddae7b;
          font-size: 0.18rem;
          span {
            font-size: 0.12rem;
            vertical-align: middle;
          }
        }
        .second-line {
          color: #a2a2a2;
          font-size: 0.14rem;
        }
      }
      .icons {
        font-family: "u_font";
        color: #a2a2a2;
        font-size: 0.3rem;
        align-items: center;
        margin-left: 0.33rem;
        .search {
          margin-left: 0.3rem;
        }
      }
    }
    .r_scroll {
      @include flexbox();
      width: 100%;
      @include flex-direction();
      justify-content: center;
      font-size: 0.18rem;
      font-weight: 600;
      // color: #a2a2a2;
      margin-top: 0.02rem;
      div {
        @include flex();
        width: 100%;
        @include flexbox();
        justify-content: center;
        p {
          letter-spacing: 0.02rem;
          @include border(0 0 4px 0, #ddae7b);
          display: inline;
        }
        a {
          color: #a2a2a2;
        }
      }
    }
  }
  main {
    @include flex();
    width: 100%;
  }
}
</style>
