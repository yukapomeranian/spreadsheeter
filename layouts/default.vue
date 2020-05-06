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
      >
        Issues Prease!
      </b-button>
    </div>
    <b-sidebar id="sidebar-1" title="Menu" width="250px" shadow>
      <!-- ここにTwitterとかのアイコンのリンクをはりたい -->
      <nav>
        <b-nav vertical>
          <b-nav-item active>
            <b-link to="/">
              Tsubuyaki
            </b-link>
          </b-nav-item>
          <b-nav-item disabled>
            Dev. Diary
          </b-nav-item>
          <b-nav-item>
            <b-link to="/memo">
              Memo
            </b-link>
          </b-nav-item>
        </b-nav>
      </nav>
    </b-sidebar>
    <nuxt />
  </div>
</template>
