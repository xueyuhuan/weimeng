<template>
  <div class="home">
    <transition name="fade">
      <div class="fixed" v-if="show">
        <div class="left"><img src="../assets/avatar@2x.png"/><h4>天上的一朵云</h4></div>
        <div class="right">关注</div>
      </div>
    </transition>
    <header>
      <div class="avatar">
        <img src="../assets/avatar@2x.png"/>
        <div class="text">
          <h4>天上的一朵云</h4>
          <p>我们错过某些错过，却能够一如往常的巴拉巴拉</p>
        </div>
      </div>
      <ul class="number">
        <li><h4>416</h4><p>赞同</p></li>
        <li><h4>66</h4><p>帖子</p></li>
        <li><h4>777</h4><p>人气</p></li>
      </ul>
    </header>
    <main>
      <div class="row">
        <img src="../assets/icon/icon_user@2x.png"/>
        <div class="right">我的资料</div>
      </div>
      <div class="row">
        <img src="../assets/icon/icon_follow@2x.png"/>
        <div class="right">我的关注</div>
      </div>
      <div class="row">
        <img src="../assets/icon/icon_message@2x.png"/>
        <div class="right">我的通知<i>6</i></div>
      </div>
      <div class="row">
        <img src="../assets/icon/icon_safety@2x.png"/>
        <div class="right">隐私与安全<br/><span>對内容個性化並收集和分享你的部分數據</span></div>
      </div>
      <div class="row">
        <img src="../assets/icon/icon_setting@2x.png"/>
        <div class="right">账户设置</div>
      </div>
      <div class="other">
        <h5>其他</h5>
        <div class="row">
          <img src="../assets/icon/icon_setting@2x.png"/>
          <div class="right">退出账户</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return{
      show:false
    }
  },
  mounted() {
    document.addEventListener('scroll', () => {
      this.show=(document.documentElement.scrollTop + document.body.scrollTop)>250
    })
  }
}
</script>

<style lang="scss">
  @import "../assets/common";
  .home{
    .fixed{
      @include flex(space-between);
      position: fixed;
      top: 0;
      background: #222;
      width: 100%;
      height: 66px;
      padding: 0 15px 0 25px;
      box-shadow: 0 0 15px 5px #aaa;
      .left{
        @include flex;
        img{
          width: 36px;
          margin-right: 15px;
        }
        h4{
          font-size: 16px;
        }
      }
      .right{
        @include flex(center);
        background: #fff;
        height: 34px;
        width: 65px;
        font-size: 14px;
        color: #1d1d1d;
        border-radius: 34px;
      }
    }
    header{
      background: #222;
      .avatar{
        @include flex;
        padding: 30px 0 20px;
        img{
          width: 72px;
          margin: 0 15px 0 25px;
        }
        .text{
          h4{
            font-size: 16px;
            margin: 0 0 10px 0;
          }
          p{
            @extend %ellipsis;
            width: 215px;
            font-size: 12px;
          }
        }
      }
      .number{
        @include flex(space-between);
        width: 316px;
        padding: 26px 30px 45px;
        border-top: 1px #2e2e2e solid;
        margin: 0 auto;
        h4{
          font-size: 20px;
          margin: 0 0 15px 0;
        }
        p{
          font-size: 14px;
        }
      }
    }
    main{
      background: #fff;
      border-radius: 15px 15px 0 0;
      padding: 15px 0 0 0;
      margin: -15px 0 0 0;
      .row{
        @include flex;
        margin-left: 25px;
        padding-right: 25px;
        border-bottom: 1px #f5f5f5 solid;
        img{
          width: 38px;
          margin: 15px 15px 15px 0;
        }
        .right{
          flex: 1;
          @include flex(space-between);
          flex-flow: wrap;
          font-size: 15px;
          color: #4b4b4b;
          i{
            @include flex(center);
            background: #f4f4f4;
            width: 20px;
            height: 20px;
            font-size: 10px;
            color: #000;
            border-radius: 50%;
          }
          span{
            font-size: 12px;
            color: #9eacbf;
            margin-top: 5px;
          }
        }
      }
      .other{
        h5{
          font-size: 16px;
          color: #92a1b6;
          margin: 30px 0 15px 25px;
        }
        .row{
          border: none;
          padding-bottom: 500px;
        }
      }
    }
  }
  /*过渡动画*/
  .fade-enter-active{
    transition: all .8s cubic-bezier(0.35, 0.5, 0.6, 0.8);
  }
  .fade-leave-active {
    transition: all .15s ease;
    }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
