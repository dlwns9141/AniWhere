<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img
      :src="image"
      :gradient="sidebarOverlayGradiant"
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
            color="white"
          >
            <v-img
              :src="logo"
              height="34"
              contain
            />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            AniWhere
          </v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-menu offset-y>
      <v-list>
      </v-list>
    </v-menu>
    <v-card>
      <v-card>
        <template>
  <div class="text-xs-center">

    <v-expansion-panel>
      <v-expansion-panel-content
      v-for="(item,i) in courses"
      :key="i"
      expand-icon="mdi-menu-down"
      >
        <template v-slot:header>
          <div>{{item}}</div>
        </template>
        <v-card>
          <v-card-text class="grey lighten-3">
            <a>지도</a></br>
            <v-btn outline block color="secondary" v-on:click="pageMove(i,'table-list')">코스 요약</v-btn>
            <v-btn outline block color="secondary" v-on:click="pageMove(i,'course1')">추가 정보</v-btn>
            <v-btn outline block color="secondary" v-on:click="pageMove(i,'maps')">지도</v-btn>
          </v-card-text>
        </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  <v-menu offset-y>
    </v-menu>
      </div>
      </template>
      </v-card>
          <v-card-text>
            <v-autocomplete
              v-model="selected"
              :hint="'Serach Course'"
              :items="pages"
              :label="`Course`"
              persistent-hint
              prepend-icon="mdi-airplane"

            >
              <template v-slot:append-outer>
                <v-slide-x-reverse-transition mode="out-in">
                  <v-icon
                    :color="'success'"
                    v-text="'mdi-circle-edit-outline'"
                  ></v-icon>
                </v-slide-x-reverse-transition>
              </template>
            </v-autocomplete>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  data: () => ({
    logo: './img/vuetifylogo.png',
    links: [
      {
        to: '/course1',
        icon: 'mdi-view-dashboard',
        text: 'Course1'
      },
      {
        to: '/course2',
        icon: 'mdi-view-dashboard',
        text: 'Course2'
      },
      {
        to: '/course3',
        icon: 'mdi-view-dashboard',
        text: 'Course3'
      }
    ],
    courses:
    [
      '코스1','코스2','코스3'
    ],
    responsive: false,
    model: null,
    pages: [
      'table-list','course1','maps'
    ],
    selected: 'table-list'
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    },
    sidebarOverlayGradiant () {
      return `${this.$store.state.app.sidebarBackgroundColor}, ${this.$store.state.app.sidebarBackgroundColor}`
    }
  },

  watch: {
       selected (selected) {
         this.$router.push("/"+selected);
       }
     },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
    pageMove(id,page) {
       console.log(id);
       this.$router.push("/"+page);
    }
  }
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }

    div.v-responsive.v-image > div.v-responsive__content {
      overflow-y: auto;
    }
  }
</style>
