import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#0F711E',
          secondary: '#b0bec5',
          anchor: '#8c9eff',
        },
      },
    },
    icons: {
        iconfont: 'fa',
    },
  })
  
export default vuetify
// export default new Vuetify({
// });
