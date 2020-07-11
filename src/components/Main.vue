<template>
  <v-container fluid class="pa-0" style="background-color: #f4f4f4">
    <v-img src="../../public/front.png" aspect-ratio="1.7" ></v-img>

    <v-row id="header-project" align="center" justify="center" style="height: 15vh" class="text-h1 font-weight-medium font-italic text--secondary">
      Project
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="8">
        This is the project.
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-img src="../../public/project.png" aspect-ratio="1.7" contain></v-img>
      </v-col>
    </v-row>
    <!-- <div style="background-color: blue">content</div> -->

    <v-row id="header-unittypes" align="center" justify="center" style="height: 15vh" class="text-h1 font-weight-medium font-italic text--secondary">
      Unit Types
    </v-row>
    <div style="background-color: blue">content</div>

    <v-row id="header-pricelist" align="center" justify="center" style="height: 15vh" class="text-h1 font-weight-medium font-italic text--secondary">
      Price List
    </v-row>
    <div style="background-color: blue">content</div>

    <v-row id="header-contact" align="center" justify="center" style="height: 15vh" class="text-h1 font-weight-medium font-italic text--secondary">
      Contact
    </v-row>

    <v-card width="60vw" class="ma-2 mx-auto" shaped raised outlined>
      <v-container fill-height>
        <v-row>
          <v-col cols="5" class="my-auto">
            <v-img src="../../public/ruth.jpeg" height="25vh" contain :aspect-ratio="1"></v-img>
          </v-col>
          <v-col cols="7">
            My name is Ruth Panggabean and I am an in-house salesperson for XX. Please don't hesitate to contact me on any of the following media if you're interested in a unit or have any questions
            <v-row class="pt-1">
              <v-col cols="4">
                <v-btn text class="text-none" @click="sendWhatsapp">
                  <v-icon left>fa-mobile-alt</v-icon>
                  {{phoneNumber}}
                </v-btn>
              </v-col>
              <v-col>
                <v-btn text class="text-none" @click="sendMail">
                  <v-icon left>fa-envelope</v-icon>
                  {{email}}
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-btn text class="text-none" @click="openInstagram">
                  <v-icon left>fab fa-instagram</v-icon>
                  Instagram
                </v-btn>
              </v-col>
              <v-col>
                <v-btn text class="text-none" @click="openFacebook">
                  <v-icon left>fab fa-facebook-square</v-icon>
                  Facebook
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <!-- <v-row 
    <v-img src="../../public/ruth.jpeg" contain height="20vw" :aspect-ratio="1280/720"></v-img> -->

    
  </v-container>
</template>

<script>
  export default {
    name: 'Main',
    data: () => ({
      phoneNumber: '+31627320067',
      phoneMessage: 'test',
      email: 'pieter_gilissen@hotmail.com',
      emailMessage: '',
      instagram: 'https://www.instagram.com/ruthverroo/',
      facebook: 'https://www.facebook.com/ruthveronica.f.panggabean',
    //
  }),
  methods: {
    sendWhatsapp () {
      window.open(
          `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${this.phoneMessage}`,
          "_blank"
        );
    },
    sendMail () {
      window.open(`mailto:${this.email}?subject=subject&body=${this.emailMessage}`);
    },
    openInstagram () {
      window.open(this.instagram);
    },
    openFacebook () {
      window.open(this.facebook);
    }
  }
}
</script>
