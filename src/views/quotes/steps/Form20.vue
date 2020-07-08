<!-- eslint-disable -->
<template>
  <div
    id="Form19"
  >
    <div class="mb-4 display-2">What is your address?</div>
    <gmap-map
      :center="center"
      :zoom=zoom
      style="width:100%;  height: 400px;"
    >
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      </gmap-info-window>
      <GmapMarker
        :position="marker.position"
        @click="toggleInfoWindow(marker)"
      />
    </gmap-map>
    <v-form
      ref="form"
    >
      <gmap-autocomplete
        ref="g_autocomplete"
        class="map-autocomplete mt-4" 
        :select-first-on-enter="true"
        style="width: 100%"
        placeholder="Start typing address..."
        @place_changed="setPlace"
      >
      </gmap-autocomplete>
      <div v-if="done && (!valid || !validParse())" class="red--text mt-3">{{ errorMessage }}</div>
    </v-form>
    <div class="d-flex mt-3">
      <v-spacer></v-spacer>
      <v-btn
        large
        color="blue"
        class="mr-0"
        :disabled="loading || !valid"
        :loading="loading"
        @click="saveAddress"
      >
        Save Address
      </v-btn>

    </div>
  </div>
</template>
<script>
/* eslint-disable */
  import {
    mapState,
  } from 'vuex'
  export default {
    name: 'Form20',

    data () {
      return {
        form: {
          street: '',
          street2: '',
          city: '',
          state: '',
          zip: ''
        },
        tempAddress: {},
        zoom: 5,
        center: { lat: 45.508, lng: -73.587 },
        marker: {
          position: {
            lat: 45.508, lng: -73.587
          },
          infoText: 'info'
        },
        done: false,
        currentPlace: '',
        infoWindowPos: null,
        infoWinOpen: false,
        currentMidx: null,
        infoOptions: {
          content: '',
            //optional: offset infowindow so it visually sits nicely on top of our marker
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        rules: {
          required: value => {
            return !!value || 'This field is required.'
          },
        }
      }
    },

    computed: {
      ...mapState(['loading', 'error', 'address']),

      valid () {
        return this.currentPlace != ''
      },

      

      errorMessage () {
        if (!this.currentPlace) {
          return 'Please select the address'
        } 
        if (!this.validParse()) {
          return 'Please select the correct address'
        }
      }
    },

    mounted() {
      // get the latest form data from state
      this.$store.commit('SET_STEP', 100/27*20)

      this.geolocate();
    },

    watch: {
      address: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form21' })
        }
      }
    },

    methods: {
      validParse () {
        return this.tempAddress.city && this.tempAddress.state && this.tempAddress.zip && this.tempAddress.street_number && this.tempAddress.street_name
      },
      toggleInfoWindow: function(marker) {
        this.infoWindowPos = marker.position;
        this.infoOptions.content = marker.infoText;

        //check if its the same marker that was selected if yes toggle
        this.infoWinOpen = !this.infoWinOpen;
      },
      async saveAddress () {
        this.done = true
        if (!this.valid || !this.validParse()) {
          return
        }

        this.form = {
          street: this.tempAddress.street_number + ' ' + this.tempAddress.street_name,
          city: this.tempAddress.city,
          state: this.tempAddress.state,
          zip: this.tempAddress.zip
        }

        await this.$store.commit('CREATE_ADDRESS', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form13')
        localStorage.setItem('nextStep', 'Form14')
      },
      parseAddress (place) {
        place.address_components.map(component => {
          switch (component['types'][0]) {
            case 'street_number':
                this.tempAddress['street_number'] = component['long_name']
                break;
            case 'route':
                this.tempAddress['street_name'] = component['long_name']
                break;
            case 'locality':
                this.tempAddress['city'] = component['long_name']
                break;
            case 'administrative_area_level_1':
                this.tempAddress['state'] = component['long_name']
                break;
            case 'postal_code':
                this.tempAddress['zip'] = component['long_name']
                break;
          }
        })
      },
      setPlace(place) {
        // read input from autocomplete
        this.currentPlace = this.$refs.g_autocomplete.$el.value

        // parse address to get street, city, state, zip, etc
        this.parseAddress(place)

        this.marker.position = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };
        this.marker.infoText = place.formatted_address
        this.center = this.marker.position
      },
      geolocate: function() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = this.marker.position = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      }
    },
  }
</script>

<style scoped>
  .map-autocomplete {
    font-size: 14px;
    font-weight: 400;
    color: #495057;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    min-height: 56px;
    padding: 0 12px;
    background: transparent;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    min-width: 0;
    width: 100%;
    border-style: solid;
    border-radius: 5px;
    border-width: thin;
  }
</style>