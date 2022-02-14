<template>
  <div class="d">
    <div class="background">
      <div class="cont">
        <b-row align="center">
          <h2>({{ today }} ) : قیمت رسمی طلا و مسکوکات بانکی امروز</h2>
        </b-row>
        <br />

        <b-row>
          <b-col cols="4"> </b-col>

          <b-col cols="4">
            <v-card align="right" elevation="21" outlined shaped>
              <h5>هر گرم طلا 18 عیار: {{ geramTalaPrice }}</h5>
            </v-card>

            <br />

            <v-card align="right" elevation="14" outlined shaped>
              <h5>
                هر گرم طلا 24 عیار:
                {{ gram24TalaPrice }}
              </h5>
            </v-card>
            <br />

            <b-card
              text-align="right"
              bg-variant="secondary"
              text-variant="white"
              class="text-center"
            >
              <div align="right">
                <h5>تمام سکه : {{ mesghalRiyal }}</h5>
              </div>
            </b-card>

            <br />

            <b-card
              text-align="right"
              bg-variant="dark"
              text-variant="white"
              class="text-center"
            >
              <b-card-text align="right">
                <h5>یک مثقال طلای : {{ mesghalRiyal }}</h5>
              </b-card-text>
            </b-card>
            <br />

            <b-card
              text-align="right"
              bg-variant="secondary"
              text-variant="white"
              class="text-center"
            >
              <b-card-text align="right">
                <h5>ربع سکه: {{ robPrice }}</h5>
              </b-card-text>
            </b-card>
            <br />

            <b-card
              text-align="right"
              bg-variant="dark"
              text-variant="white"
              class="text-center"
            >
              <b-card-text align="right">
                <h5>سکه یک گرمی : {{ sekeGeramiPrice }}</h5>
              </b-card-text>
            </b-card>

            <br />

            <b-card
              text-align="right"
              bg-variant="secondary"
              text-variant="white"
              class="text-center"
            >
              <b-card-text align="right">
                <h5>نیم سکه : {{ nimPrice }}</h5>
              </b-card-text>
            </b-card>
            <br />

            <b-card
              text-align="right"
              bg-variant="dark"
              text-variant="white"
              class="text-center"
            >
              <b-card-text align="right">
                <h5>انس : {{ ons }}</h5>
              </b-card-text>
            </b-card>
          </b-col>

          <b-col cols="4"> </b-col>
        </b-row>
      </div>
    </div>

    <!-- <img
      class="mt-0 mb-0 pt-0 pb-0"
      src="@/assets/background1.jpg"
      alt="طلاگرام"
    /> -->

    <!-- <b-row> 
        <h1> قیمت رسمی طلا و مسکوکات بانکی </h1>
            <b-row><h2> تاریخ امروز </h2> </b-row>
    </b-row> -->
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config";

export default {
  data() {
    return {
      list: [],
      timer: "",

      url1: `${config.paseUrl}` + "api/v1/CurrentPrice/GetTalagram",

      //Date
      today: 0,

      //nerhkha
      dollar: 0,
      ons: 0,
      sekePrice: 0,
      mesghalPrice: 0,
      sekeGhadimPrice: 0,
      sekeRiyal: 0,
      geramTalaPrice: 0,
      gram24TalaPrice: 0,
      nimPrice: 0,
      robPrice: 0,
      sekeGeramiPrice: 0,
    };
  },

  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },

  created() {
    setInterval(function () {
      window.location.reload();
    }, 20000);

    
  },

  async mounted() {
    //Date
    this.today = new Date().toLocaleDateString("fa-IR");

    await axios
      .get(`http://host:8080/api/v1/CurrentPrice/GetTalagram`, {})

      // await axios
      //   .get(this.url1, {

      //   })
      .then((response) => {
        this.dollar = response.data.Data.usdPrice;
        this.ons =  (response.data.Data.onsPrice).toLocaleString();
        this.silver = (response.data.Data.silverPrice).toLocaleString();
        this.geramTalaPrice = (response.data.Data.geramTalaPrice).toLocaleString();
        this.gram24TalaPrice = (response.data.Data.gram24TalaPrice).toLocaleString();
        this.nimPrice = this.numberWithCommas(response.data.Data.nimPrice) ;
        this.robPrice = this.numberWithCommas( response.data.Data.robPrice);
        this.sekeGeramiPrice = this.numberWithCommas( response.data.Data.sekeGeramiPrice);
        this.talaAyarPriceOpen = response.data.Data.talaAyarPriceOpen;

        this.sekeRiyal = response.data.Data.sekeRiyal;
        this.mesghalRiyal = (response.data.Data.mesghalRiyal).toLocaleString();
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style scoped lang="scss">
.d {
  width: 100%;
  height: 100%;
}
.background {
  background-image: url("~@/assets/white.jpg");
  height: 100%;
  width: 100%;
}
.cont {
  height: 100%;
  width: 100%;
}
</style>