<template>
  <div>
    <div v-b-toggle.sidebar-1 class="m-2">
      <b-icon icon="justify" font-scale="2" />
    </div>
    <b-sidebar id="sidebar-1" title="Menu" width="250px" shadow>
      <!-- ここにTwitterとかのアイコンのリンクをはりたい -->
      <nav>
        <b-nav vertical>
          <b-nav-item active href="/">
            Tsubuyaki
          </b-nav-item>
          <b-nav-item disabled href="/dev_diary">
            Dev. Diary
          </b-nav-item>
          <b-nav-item href="/memo">
            Memo
          </b-nav-item>
        </b-nav>
      </nav>
    </b-sidebar>
    <nuxt />
  </div>
</template>
