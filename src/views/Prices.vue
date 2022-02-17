<template>
  <div class="backGround">
    <b-row dir="rtl">
      <b-col cols="2"> </b-col>
      <b-col cols="8">
        <b-row class="" align="center">
          <b-col>
            <div>
              <img
                src="../assets/logo-prices.png"
                width="250 em"
                height="50%"
                style="border-radius: 18px"
              />
            </div>
          </b-col>
        </b-row>

        <b-row class="mb-3" align="center">
          <b-col>
            <div class="name">
              <b style="color: #d9b34a; font-size: 25px"> سکه زمرد </b>
              <br />
            </div>
          </b-col>
        </b-row>

        <b-row class="mt-2" align="center">
          <b-col>
            <div class="container card3">
              <h6 class="mb-5" style="font-size: 14px">
                {{ today }}
                <br />
                {{ time }}
                <br />
                <p class="mt-1">طلا کلینیک فارس talaclinicfars.ir</p>
              </h6>
            </div>
          </b-col>

          <b-col>
            <div class="card3">
              <h6>
                <a style="text-decoration: none" href="tel:07132301858">
                  <p class="mt-2" style="color: #742b6c">
                    {{ this.en2fa("071-32301858 ") }}
                  </p>
                </a>

                <a style="text-decoration: none" href="tel:09171092419">
                  <p class="mt-3" style="color: #742b6c">
                    {{ this.en2fa("09171092419ث") }}
                  </p>
                </a>
              </h6>
            </div>
          </b-col>
        </b-row>

        <br />
        <b-row align="center">
          <b-col>
            <div class="card2">
              <b-row>
                <b class="pb-2" style="font-size: 13px">
                  یک مثقال طلای 17 عیار
                </b>
              </b-row>
              {{ mesghalPrice }}
            </div>
          </b-col>

          <b-col>
            <div class="card2">
              <b-row>
                <b class="pb-1" style="font-size: 14px">
                  یک گرم طلای 18 عیار</b
                ></b-row
              >
              {{ geramTalaPrice }}
            </div>
          </b-col>
        </b-row>
        <br />
        <b-row align="center">
          <b-col
            ><div class="card1">
              <b-row>
                <b> تمام سکه 86 </b>
              </b-row>
              {{ sekePrice }}
            </div>
          </b-col>
          <b-col>
            <div class="card1">
              <b-row>
                <b style="font-size: 14px"> سکه یک گرمی </b>
              </b-row>

              {{ sekeGeramiPrice }}
            </div>
          </b-col>
        </b-row>
        <br />
        <b-row align="center">
          <b-col
            ><div class="card1">
              <b-row>
                <b> نیم سکه 68 </b>
              </b-row>
              {{ nimPrice }}
            </div>
          </b-col>
          <b-col
            ><div class="card1">
              <b-row>
                <b style="font-size: 14px"> انس جهانی طلا </b>
              </b-row>

              {{ ons }}
            </div>
          </b-col>
        </b-row>
        <br />
        <b-row align="center">
          <b-col>
            <div class="card1">
              <b-row>
                <b style="font-size: 13px"> ربع سکه 86</b>
              </b-row>

              {{ robPrice }}
            </div>
          </b-col>

          <b-col>
            <div class="card1">
              <b-row>
                <b style="font-size: 15px"> دلار </b>
              </b-row>

              {{ usdPrice }}
            </div>
          </b-col>
        </b-row>

        <div class="name mt-4">
          <p
            align="center"
            class="mt-1"
            style="color: #d9b34a; font-size: 15px"
          >
            شیراز، خیابان قصرالدشت، چهارراه ملاصدرا، مرکز خرید طلا و جواهر پارس،
            طبقه همکف واحد G29
          </p>
        </div>

        <br />
      </b-col>

      <b-col cols="2"> </b-col>
    </b-row>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config";
export default {
  data() {
    return {
      arr: [],
      persian: {
        0: "۰",
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹",
        "-": "-",
      },

      mobile: "",
      phone: "32301858",

      list: [],
      timer: "",

      url1: `${config.paseUrl}` + "api/v1/CurrentPrice/GetTalagram",

      //Date
      today: 0,
      time: 0,

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
      usdPrice: 0,
    };
  },

  methods: {
    en2fa(num) {
      num.split("").map((number, index) => {
        this.arr[index] = this.persian[number];
      });
      return this.arr.join("");
    },

    // console.log(en2fa("86598231452"));

    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },

  created() {
    setInterval(function () {
      window.location.reload();
    }, 30000);
  },

  async mounted() {
    //Date
    this.today = new Date().toLocaleDateString("fa-IR");
    this.time = new Date(new Date().getTime()).toLocaleTimeString("fa-GB");

    await axios
      // .get(`http://95.217.131.10:8080/api/v1/CurrentPrice/GetTalagram`, {})

      .get(this.url1, {})
      .then((response) => {
        this.usdPrice = Math.round(response.data.Data.usdPrice).toLocaleString(
          "fa"
        );
        this.ons = Math.round(response.data.Data.onsPrice).toLocaleString("fa");

        this.silver = response.data.Data.silverPrice.toLocaleString("fa");
        this.geramTalaPrice = Math.round(
          response.data.Data.geramTalaPrice
        ).toLocaleString("fa");

        // response.data.Data.geramTalaPrice.toLocaleString("fa");

        this.gram24TalaPrice =
          response.data.Data.gram24TalaPrice.toLocaleString("fa");
        this.nimPrice = response.data.Data.nimPrice.toLocaleString("fa");
        this.robPrice = response.data.Data.robPrice.toLocaleString("fa");
        this.sekeGeramiPrice =
          response.data.Data.sekeGeramiPrice.toLocaleString("fa");

        this.sekePrice = response.data.Data.sekePrice.toLocaleString("fa");
        this.mesghalRiyal =
          response.data.Data.mesghalRiyal.toLocaleString("fa");
        this.mesghalPrice =
          response.data.Data.mesghalPrice.toLocaleString("fa");
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style>
.card1 {
  background-color: #e3e3e0;
  border-radius: 5px;
  color: #742b6c;
  padding: 0.3em;
  box-shadow: 3px 5px 10px black;
}

.card2 {
  border-radius: 5px;
  color: cornsilk;
  height: 5em;
  background-color: #742b6c;
  box-shadow: 3px 5px 10px black;
  padding: 0.5em;
}

.card3 {
  border-radius: 5px;
  color: #742b6c !important;
  height: 8em;
  background-color: #e3e3e0;
  box-shadow: 3px 5px 10px black;
  padding: 0.4em;
  font-size: 10px;
}

.backGround {
  background-color: #ffffff;
}

.name {
  background-color: #413c3c;
  border-radius: 5px;
  /* padding: 0.15%; */
  padding: 0.3em;
}
</style>