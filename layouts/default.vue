<template>
  <div>
    <div class="m-3">
      <b-icon v-b-toggle.sidebar-1 icon="justify" font-scale="2" />
    </div>
    <div class="float-right m-3">
      <b-button
        variant="outline-primary"
        size="sm"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/yukapomeranian/spreadsheeter/issues"
        class="wf-nicomoji"
      >
        イシューください！
      </b-button>
    </div>
    <b-sidebar id="sidebar-1" class="wf-nicomoji h1" title="" width="230px" shadow>
      <!-- ここにTwitterとかのアイコンのリンクをはりたい -->
      <nav>
        <b-nav vertical class="h3">
          <b-nav-item active>
            <b-link to="/">
              つぶやき
            </b-link>
          </b-nav-item>
          <b-nav-item disabled>
            Dev.ダイアリー
          </b-nav-item>
          <b-nav-item>
            <b-link to="/memo">
              メモ
            </b-link>
          </b-nav-item>
        </b-nav>
      </nav>
    </b-sidebar>
    <nuxt />
  </div>
</template>
<style scoped>
  .wf-nicomoji { font-family: "Nico Moji"; }
</style>
