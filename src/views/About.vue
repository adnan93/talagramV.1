<template>
  <div class="about">
    <b-row class="tit" style="text-align: center; font-size: 23px">
      <b class="mt-2">محاسبه قيمت حباب</b>
    </b-row>
    <br />
    <b-row>
      <b-col cols="2"> </b-col>

      <b-col cols="8">
        <b-row dir="rtl">
          <b-col class="firstcol" align="right" right dir="ltr">
            <v-select
              reverse
              class="select"
              :items="showList"
              label="انتخاب اول"
              :item-text="'Name'"
              :item-value="'Value'"
              v-model="firstselection"
              dense
              outlined
              style="width: 10px"
              color="#d9b34a"
              right
              height="50px"
              :menu-props="{ contentClass: 'three-dropdown' }"
            ></v-select>

            <v-text-field
              reverse
              class="select"
              label=" قیمت اول"
              v-model="firstValue"
              outlined
              dense
              color="#d9b34a"
                            height="50px"

            ></v-text-field>
          </b-col>

          <b-col class="secol" align="left" dir="ltr">
            <v-select
              reverse
              class="select"
              :items="showList"
              label="انتخاب دوم"
              :item-text="'Name'"
              :item-value="'Value'"
              v-model="secondSelection"
              dense
              outlined
              color="#d9b34a"
              :menu-props="{ contentClass: 'three-dropdown' }"
                            height="50px"

            ></v-select>
            <v-text-field
              reverse
              class="select"
              label=" قیمت دوم"
              v-model="secondValue"
              outlined
              dense
              color="#d9b34a"
                            height="50px"

            ></v-text-field>
          </b-col>
        </b-row>

        <b-row>
          <b-col align="center">
            <v-text-field
              reverse
              class="select"
              label=" قیمت انس"
              v-model="form.ons"
              outlined
              dense
              color="#d9b34a"
                            height="50px"

            ></v-text-field>
          </b-col>
        </b-row>

        <b-row>
          <b-col align="center">
            <v-text-field
              reverse
              class="select"
              label=" قیمت دلار"
              v-model="dollarPrice"
              outlined
              dense
                            height="50px"

              color="#d9b34a"
            >
            </v-text-field>
          </b-col>
        </b-row>

        <br />

        <b-row>
          <b-col align="center">
            <!-- <v-btn
              style="color: yellow"
              :loading="resetLoading"
              class="btns1 select2"
              color="black"
              elevation="3"
              rounded
              x-large
              outlined
              @click="reset()"
              >تنظیم مجدد
            </v-btn> -->
            <v-btn
              style="color: white"
              :loading="hobabLoading"
              class="btns1 btnsize ml-1"
              color="#d9b34a"
              elevation="5"
              rounded
              dark
              x-large
              @click="hobabValue()"
              >محاسبه حباب</v-btn
            >
          </b-col>
        </b-row>

        <br />
        <br />
        <hr />

        <b-row dir="rtl">
          <b-col class="ml-2 result" align="center">
            حباب اول
            <div v-if="parseFloat(this.Hobab1) > 0">
              <p style="color: green">{{ parseFloat(this.Hobab1) }}%</p>
            </div>
            <div v-else>
              <p style="color: red">({{ parseFloat(this.Hobab1) }})%</p>
            </div>
          </b-col>

          <b-col class="mr-2 result" align="center">
            حباب دوم
            <div v-if="parseFloat(this.Hobab2) > 0">
              <p style="color: green">{{ parseFloat(this.Hobab2) }}%</p>
            </div>
            <div v-else>
              <p style="color: red">({{ parseFloat(this.Hobab2) }})%</p>
            </div>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="2"> </b-col>
    </b-row>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify, {
  rtl: true,
});

export default {
  async created() {
    await axios
      // .get(`http://95.217.131.10:8080/api/v1/Tools/GetList`, {})
      .get(this.url2, {})
      .then((response) => {
        this.showList = response.data.Data;

        for (var item of this.showList) {
          if (item.Name == "یک مثقال طلا") {
            item.Name = "آبشده";
          }
        }
      });
  },

  async mounted() {
    await axios
      // .get(`http://95.217.131.10:8080/api/v1/CurrentPrice/GetTalagram`, {})

      .get(this.url1, {})
      .then((response) => {
        this.dollarPrice = this.numberWithCommas(response.data.Data.usdPrice);
        this.form.ons = response.data.Data.onsPrice.toLocaleString();
        this.globalDolar = this.numberWithCommas(response.data.Data.usdPrice);
        this.globalOnc = response.data.Data.onsPrice;
      });
  },

  components: {},
  data() {
    return {
      url1: `${config.paseUrl}` + "api/v1/CurrentPrice/GetTalagram",
      url2: `${config.paseUrl}` + "api/v1/Tools/GetList",
      url3: `${config.paseUrl}` + "api/v1/Tools/GetHobab",

      resetLoading: false,
      hobabLoading: false,

      temp: 0,
      getPrice1: "",
      setPrice1: "",
      setPrice2: "",
      dollarPrice: "",
      oncePrice: "",
      firstselection: "",
      secondSelection: "",

      firstValue: "",
      secondValue: "",

      numberRule: (v) => {
        if (!v.trim()) return true;
        if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999999999) return true;
        return "! لطفا عدد وارد کنید";
      },

      globalDolar: "",
      globalOnc: "",
      list: [],
      showList: [],

      Hobab1: 0,
      Hobab2: 0,

      form: {
        ProductNameEnum1: "",
        ProductNameEnum2: "",
        price1: "",
        price2: "",
        ons: "",
        dollar: "",
      },
    };
  },

  watch: {
    oncePrice: function (newValue) {
      const result = newValue
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      Vue.nextTick(() => (this.oncePrice = result));
      this.form.ons = result;
    },

    dollarPrice: function (newValue) {
      const result = newValue
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      Vue.nextTick(() => (this.dollarPrice = result));
      this.form.dollar = result;
    },

    firstselection: function (ProductNameEnum1) {
      if (ProductNameEnum1 != "") {
        for (var item of this.showList) {
          if (item.Value == ProductNameEnum1) {
            this.firstValue = this.numberWithCommas(item.Price);
            this.form.price1 = this.numberWithCommas(item.Price);

            this.form.ProductNameEnum1 = ProductNameEnum1;
          }
        }
      }
    },

    firstValue: function (newValue) {
      const result = newValue
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      Vue.nextTick(() => (this.firstValue = result));
      this.form.price1 = result;
    },

    secondSelection: function (ProductNameEnum2) {
      if (ProductNameEnum2 != "") {
        for (var item of this.showList) {
          if (item.Value == ProductNameEnum2) {
            this.secondValue = this.numberWithCommas(item.Price);
            this.form.price2 = this.numberWithCommas(item.Price);

            this.form.ProductNameEnum2 = ProductNameEnum2;
          }
        }
      }
    },

    secondValue: function (newValue) {
      const result = newValue
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      Vue.nextTick(() => (this.secondValue = result));
      this.form.price2 = result;
    },
  },

  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    async hobabValue() {
      this.hobabLoading = true;
      await axios

        //  .post(`http://95.217.131.10:8080/api/v1/Tools/GetHobab`, this.form)

        .post(this.url3, this.form)
        .then((response) => {
          this.Hobab1 = response.data.Data.Hobab1;
          this.Hobab2 = response.data.Data.Hobab2;
        })
        .catch((e) => {
          this.errors.push(e);
        });
      this.hobabLoading = false;

      console.log(parseFloat(this.Hobab1));
      console.log(parseFloat(this.Hobab2));
    },

    // async reset() {
    //   // this.showList = [];
    //   this.resetLoading = true;

    //   this.form.price1 = "";
    //   this.form.price2 = "";
    //   this.form.ons = this.globalOnc;
    //   this.form.dollar = this.globalDolar;
    //   this.Hobab1 = "";
    //   this.Hobab2 = "";

    //   await axios
    //    .get(`http://localhost:8080/api/v1/Tools/GetList`, {})
    //    //  .get(this.url2,{})
    //     .then((response) => {
    //       // this.list = response.data.Data;
    //       this.showList = response.data.Data;
    //     });

    //   this.resetLoading = false;
    // },
  },
};
</script>

<style scoped>
.first {
  padding: 0px !important;
  margin: 0px !important;
}

/* .firstcol {
  padding-right: 15%;
}
.secol {
  padding-left: 15%;
} */



::v-deep .v-application--is-ltr .v-text-field--reverse .v-label {
    transform-origin: top right;
    padding-top: 10px !important;
}

::v-deep .select {
  width: 350px !important;
  border-radius: 15px;
  color: #d9b34a !important;
  text-align: right !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  
}

.v-list-item__content {
  text-align: right !important;
}

input {
  direction: rtl !important;
}

.select2 {
  width: 110px !important;
}
.btnsize {
  width: 200px;
}

.btns1 {
  margin: 3%;
}
.tit {
  color: #d9b34a !important;
  border-color: rgb(243, 242, 232);
  border-style: solid;
  background-color: rgb(231, 230, 223);
  box-shadow: 3px 1px 5px 1px rgb(12, 12, 12);
  height: 50px;
}

.result {
  border-radius: 5px;
  background-color: #e3e3e0;
  /* box-shadow: 5px 5px 50px 5px  rgb(223, 8, 8); */
  border-style: double;
  width: 270px !important;
  border-color: black;
  padding: 1%;
  height: 4em;
}

.three-dropdown .v-list {
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(33%, auto)); */
  text-align: right;
}


</style>
