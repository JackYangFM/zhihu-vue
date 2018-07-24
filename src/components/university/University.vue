<template>
	<div class="container">
    <header>
      <div class="zh-title">
        <div class="avater">
          <img src="../../assets/Avatar.png" alt="">
        </div>
        <div class="desc">
          <p class="first-line">开通会员&nbsp;</p>
          <p class="second-line">课程随意听,&nbsp;&nbsp;好书继续读</p>
        </div>
      </div>
    </header>
    <main>asdasd</main>
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
      margin-top: 0.2rem;
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
          color: #ddae7b;
          font-size: 0.18rem;
        }
        .second-line {
          color: #a2a2a2;
          font-size: 0.14rem;
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
