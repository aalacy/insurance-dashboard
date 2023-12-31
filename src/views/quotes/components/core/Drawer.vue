<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-breakpoint="960"
    app
    mini-variant-width="80"
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-uppercase font-weight-regular display-2">
          <span class="logo-mini">{{ $t('qn') }}</span>
          <span class="logo-normal">{{ $t('Quote Ninja') }}</span>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider class="mb-1" />

    <v-list
      dense
      nav
    >
      <base-item-group :item="profile" />
    </v-list>

    <v-divider class="mb-2" />

    <v-list
      expand
      nav
    >
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template v-for="(item, i) in computedItems">
        <base-item-group
          v-if="item.children"
          :key="`group-${i}`"
          :item="item"
        >
          <!--  -->
        </base-item-group>

        <base-item
          v-else
          :key="`item-${i}`"
          :item="item"
        />
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
/* eslint-disable */
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Home',
          to: '/',
        },
        {
          group: '/quote',
          icon: 'mdi-tag-multiple-outline',
          title: 'Quote',
          children: [
            {
              title: 'Form 2',
              to: 'form2',
            },
            {
              title: 'Form 3',
              to: 'form3',
            },
            {
              title: 'Form 4',
              to: 'form4',
            },
            {
              title: 'Form 5',
              to: 'form5',
            },
            {
              title: 'Form 6',
              to: 'form6',
            },
            {
              title: 'Form 7',
              to: 'form7',
            },
            {
              title: 'Form 8',
              to: 'form8',
            },
            {
              title: 'Form 9',
              to: 'form9',
            },
            {
              title: 'Form 10',
              to: 'form10',
            },
            {
              title: 'Form 11',
              to: 'form11',
            },
            {
              title: 'Form 12',
              to: 'form12',
            },
            {
              title: 'Form 13',
              to: 'form13',
            },
            {
              title: 'Form 14',
              to: 'form14',
            },
            {
              title: 'Form 15',
              to: 'form15',
            },
            {
              title: 'Form 16',
              to: 'form16',
            },
            {
              title: 'Form 17',
              to: 'form17',
            },
            {
              title: 'Form 18',
              to: 'form18',
            },
            {
              title: 'Form 19',
              to: 'form19',
            },
            {
              title: 'Form 20',
              to: 'form20',
            },
            {
              title: 'Form 21',
              to: 'form21',
            },
            {
              title: 'Form 22',
              to: 'form22',
            },
            {
              title: 'Form 23',
              to: 'form23',
            },
            {
              title: 'Form 24',
              to: 'form24',
            },
            {
              title: 'Form 25',
              to: 'form25',
            },
            {
              title: 'Form 26',
              to: 'form26',
            },
            {
              title: 'Form 27',
              to: 'form27',
            },

          ]
        },
      ],
    }),

    computed: {
      ...mapState(['barColor', 'barImage']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          group: '',
          title: this.$t('avatar'),
          children: [
            {
              href: '',
              title: this.$t('Insurance'),
            },
            {
              to: '',
              title: this.$t('About Us'),
            },
            {
              to: '',
              title: this.$t('Contact Us'),
            },
          ],
        }
      },
    },

    watch: {
      '$vuetify.breakpoint.smAndDown' (val) {
        this.$emit('update:expandOnHover', !val)
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    &.v-navigation-drawer--mini-variant
      .v-list-item
        justify-content: flex-start !important

      .v-list-group--sub-group
        display: block !important

    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
