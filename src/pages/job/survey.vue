<template>
  <div class="mj-survey">
    <div class="survey-title">
      <div class="servey-total fl">概况</div>
      <div class="servey-btn fr">
        <router-link class="job-btn"
                     to="/job/post"><i class="el-icon-edit"></i>发布职位</router-link>
      </div>
    </div>
    <div class="title">{{ curTime }}好，{{hrName}}</div>
    <div class="survey-content clearfix">
      <div class="content-box job-published">
        <div class="icon">
          <i class="iconfont icon-xfabuzhiwei publishing"></i>
        </div>
        <p class="num">{{published}}</p>
        <p class="info">已发布职位</p>
      </div>
      <div class="content-box resume-received">
        <div class="icon">
          <i class="iconfont icon-jianli resume"></i>
        </div>
        <p class="num">{{receivedRusume}}</p>
        <p class="info">收到的简历</p>
      </div>
      <div class="content-box communicated">
        <div class="icon">
          <i class="iconfont icon-goutong com"></i>
        </div>
        <p class="num">{{hrNews}}</p>
        <p class="info">已沟通人数</p>
      </div>
    </div>
  </div>
</template>

<script src="./js/survey.js"></script>
<style lang="less" src="./less/survey.less"></style>
