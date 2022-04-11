<template>
  <div class="home">
    <div id="nav">
      <b-row class="tit" style="text-align: center; font-size: 20px">
        <b class="mt-3">نرخ های امروز {{ today }}</b>
      </b-row>

      <!-- 
      <div style="text-align: center">
        <b class="mb-0" style="color: #0d5671"> </b>
      </div> -->
      <br />

      <b-row class="d-flex justify-content-center" dir="rtl">
        <b-row class="background mr-2">
          <b-col class="pl-0" cols="6">
            <b style="font-size: 0.8em">
              <img
                class="img-responsive mt-0 mb-0 pt-0 pb-0"
                width="20px"
                height="20px"
                src="@/assets/chart.png"
                alt="طلاگرام"
                @click="showChart()"
                title="نمودار"
                style="cursor: pointer"
              />

              <!-- <v-icon
                title="نمودار"
                class="ml-2"
                style="font-size: 15px; color: #d9b34a"
                @click="showChart()"
                >insights</v-icon
              > -->

              <v-icon
                title="اطلاعات"
                class="ml-1"
                style="font-size: 18px; color: #d9b34a"
                @click="showChart()"
                >info</v-icon
              >
              دلار
            </b>
          </b-col>

          <b-col cols="6">
            <b style="color: black">
              {{ numberWithCommas(dollar) }}
            </b>
          </b-col>
        </b-row>

        <b-row class="background container mr-2">
          <b-col class="pl-0" cols="6">
            <b style="font-size: 0.8em">
              <!-- <v-icon
                title="نمودار"
                class="ml-1"
                style="font-size: 1.3em; color: #d9b34a"
                @click="showChart()"
                >show_chart</v-icon
              > -->

              <img
                class="img-responsive mt-0 mb-0 pt-0 pb-0"
                width="20px"
                height="20px"
                src="@/assets/chart.png"
                alt="طلاگرام"
                @click="showChart()"
                title="نمودار"
                style="cursor: pointer"
              />

              <v-icon
                title="اطلاعات"
                style="font-size: 18px; color: #d9b34a"
                @click="showChart()"
                >info</v-icon
              >

              انس طلا
            </b>
          </b-col>

          <b-col cols="6">
            <b style="color: black"> {{ ons }} $ </b>
          </b-col>
        </b-row>

        <b-row class="background mr-2">
          <b-col class="pl-0" cols="7">
            <b style="font-size: 0.75em">
              <!-- <v-icon
                title="نمودار"
                class="ml-1"
                style="font-size: 1.3em; color: #d9b34a"
                @click="showChart()"
                >show_chart</v-icon
              > -->
              <img
                class="img-responsive mt-0 mb-0 pt-0 pb-0"
                width="20px"
                height="20px"
                src="@/assets/chart.png"
                alt="طلاگرام"
                @click="showChart()"
                title="نمودار"
                style="cursor: pointer"
              />

              <v-icon
                title="اطلاعات"
                style="font-size: 18px; color: #d9b34a"
                @click="showChart()"
                >info</v-icon
              >

              انس نقره
            </b>
          </b-col>

          <b-col cols="5">
            <b style="color: black"> {{ numberWithCommas(silver) }} $ </b>
          </b-col>
        </b-row>
      </b-row>

      <b-row>
        <b-col cols="1"> </b-col>

        <b-col cols="10">
          <b-row class="mb-4" dir="rtl" align="center">
            <b-col> </b-col>
          </b-row>

          <b-row dir="rtl">
            <b-col class="grid col-xl-4 col-lg-6 col-sm-12 col-12">
              <b-card-group dir="rtl">
                <b-card style="border-radius: 20px" class="shadow">
                  <template #header>
                    <div style="text-align: center">
                      <b
                        class="mb-0"
                        style="color: #ffffff; text-shadow: 3px 3px 7px black"
                        >نرخ طلا و سكه</b
                      >
                    </div>
                  </template>

                  <div>
                    <b-row align="right">
                      <b-col class="pl-0" cols="6">
                        <div class="menueItem">
                          <b>
                            <!-- <v-icon
                            title="نمودار"
                            class="ml-2"
                            style="font-size: 18px; color: #d9b34a"
                            @click="showChart()"
                            >show_chart</v-icon
                          > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="ml-1"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            آبشده
                          </b>
                        </div>
                      </b-col>

                      <b-col class="pr-0" cols="3">
                        <div v-if="mesghalPrice > 0">
                          <p style="color: green">
                            523
                            <!-- {{ numberWithCommas(mesghalPrice) }}% -->
                          </p>
                        </div>
                        <div v-else>
                          <p style="color: red">
                            ({{ numberWithCommas(mesghalPrice) }}%)
                          </p>
                        </div>
                      </b-col>
                      <b-col cols="3">
                        <b> {{ numberWithCommas(mesghalPrice) }} </b>
                      </b-col>
                    </b-row>
                    <br />
                    <br />

                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <div class="hob">
                            <!-- <v-icon
                              title="نمودار"
                              style="font-size: 16px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="mr-1"
                              style="font-size: 16px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            حباب آبشده
                          </div>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="HobabAbshode > 0">
                            <p style="color: green">
                              {{ numberWithCommas(HobabAbshode) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(HobabAbshode) }}%)
                            </p>
                          </div>
                        </b-col>

                        <b-col cols="3">
                          <p style="color: #742b6c">
                            % {{ numberWithCommas(HobabAbshode) }}
                          </p>
                        </b-col>
                      </b-row>
                    </div>
                  </div>

                  <hr />

                  <div>
                    <b-row align="right">
                      <b-col class="pl-0" cols="6">
                        <b>
                          <!-- <v-icon
                            title="نمودار"
                            class="ml-2"
                            style="font-size: 18px; color: #d9b34a"
                            @click="showChart()"
                            >show_chart</v-icon
                          > -->

                          <img
                            class="img-responsive mt-0 mb-0 pt-0 pb-0"
                            width="20px"
                            height="20px"
                            src="@/assets/chart.png"
                            alt="طلاگرام"
                            @click="showChart()"
                            title="نمودار"
                            style="cursor: pointer"
                          />

                          <v-icon
                            title="اطلاعات"
                            class="ml-1"
                            style="font-size: 18px; color: #d9b34a"
                            @click="showChart()"
                            >info</v-icon
                          >

                          سكه امامی
                        </b>
                      </b-col>

                      <b-col class="pr-0" cols="3">
                        <div v-if="sekePrice > 0">
                          <p style="color: green">
                            {{ numberWithCommas(sekePrice) }}%
                          </p>
                        </div>
                        <div v-else>
                          <p style="color: red">
                            ({{ numberWithCommas(sekePrice) }}%)
                          </p>
                        </div>
                      </b-col>
                      <b-col cols="3">
                        <b>
                          {{ numberWithCommas(sekePrice) }}
                        </b>
                      </b-col>
                    </b-row>

                    <br />
                    <br />

                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <div class="hob">
                            <!-- <v-icon
                              title="نمودار"
                              style="font-size: 16px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="mr-1"
                              style="font-size: 16px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            حباب سكه امامی
                          </div>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="HobabSeke > 0">
                            <p style="color: green">
                              {{ numberWithCommas(HobabSeke) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(HobabAbshode) }})
                            </p>
                          </div>
                        </b-col>
                        <b-col cols="3">
                          <p style="color: #742b6c">
                            {{ numberWithCommas(HobabSeke) }}%
                          </p>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                  <hr />

                  <div>
                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <b>
                            <!-- <v-icon
                              title="نمودار"
                              class="ml-2"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="ml-1"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            سكه بهار آزادی
                          </b>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="sekeGhadimPrice > 0">
                            <p style="color: green">
                              {{ numberWithCommas(sekeGhadimPrice) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(sekeGhadimPrice) }}%)
                            </p>
                          </div>
                        </b-col>

                        <b-col cols="3">
                          <b> {{ numberWithCommas(sekeGhadimPrice) }} </b>
                        </b-col>
                      </b-row>
                      <br />
                      <br />
                    </div>

                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <div class="hob">
                            <!-- <v-icon
                              title="نمودار"
                              style="font-size: 16px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="mr-1"
                              style="font-size: 16px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            حباب سكه بهار آزادی
                          </div>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="HobabSekeGhadim > 0">
                            <p style="color: green">
                              {{ numberWithCommas(HobabSekeGhadim) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(HobabSekeGhadim) }}%)
                            </p>
                          </div>
                        </b-col>
                        <b-col cols="3">
                          <p style="color: #742b6c">
                            % {{ numberWithCommas(HobabSekeGhadim) }}
                          </p>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                  <hr />

                  <div>
                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <b>
                            <!-- <v-icon
                              title="نمودار"
                              class="ml-2"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="ml-1"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            نیم سکه
                          </b>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="nimPrice > 0">
                            <p style="color: green">
                              {{ numberWithCommas(nimPrice) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(nimPrice) }}%)
                            </p>
                          </div>
                        </b-col>

                        <b-col cols="3">
                          <b> {{ numberWithCommas(nimPrice) }} </b>
                        </b-col>
                      </b-row>
                      <br />
                      <br />
                    </div>

                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <div class="hob">
                            <!-- <v-icon
                              title="نمودار"
                              style="font-size: 16px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="mr-1"
                              style="font-size: 16px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            حباب نیم سکه
                          </div>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="HobabNim > 0">
                            <p style="color: green">
                              {{ numberWithCommas(HobabNim) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(HobabNim) }}%)
                            </p>
                          </div>
                        </b-col>
                        <b-col cols="3">
                          <p style="color: #742b6c">
                            % {{ numberWithCommas(HobabNim) }}
                          </p>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                  <hr />

                  <div>
                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <b>
                            <!-- <v-icon
                              title="نمودار"
                              class="ml-2"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="ml-1"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            ربع سکه
                          </b>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="robPrice > 0">
                            <p style="color: green">
                              {{ numberWithCommas(robPrice) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(robPrice) }}%)
                            </p>
                          </div>
                        </b-col>

                        <b-col cols="3">
                          <b> {{ numberWithCommas(robPrice) }} </b>
                        </b-col>
                      </b-row>
                      <br />
                      <br />
                    </div>

                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <div class="hob">
                            <!-- <v-icon
                              title="نمودار"
                              style="font-size: 16px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="mr-1"
                              style="font-size: 16px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            حباب ربع سکه
                          </div>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="HobabRob > 0">
                            <p style="color: green">
                              {{ numberWithCommas(HobabRob) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(HobabRob) }}%)
                            </p>
                          </div>
                        </b-col>
                        <b-col cols="3">
                          <p style="color: #742b6c">
                            % {{ numberWithCommas(HobabRob) }}
                          </p>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                  <hr />

                  <div>
                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <b>
                            <!-- <v-icon
                              title="نمودار"
                              class="ml-2"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="ml-1"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            سکه گرمی
                          </b>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="sekeGeramiPrice > 0">
                            <p style="color: green">
                              {{ numberWithCommas(sekeGeramiPrice) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(sekeGeramiPrice) }}%)
                            </p>
                          </div>
                        </b-col>

                        <b-col cols="3">
                          <b> {{ numberWithCommas(sekeGeramiPrice) }} </b>
                        </b-col>
                      </b-row>
                      <br />
                      <br />
                    </div>

                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <div class="hob">
                            <!-- <v-icon
                              title="نمودار"
                              style="font-size: 16px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="mr-1"
                              style="font-size: 16px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            حباب سکه گرمی
                          </div>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="HobabGerami > 0">
                            <p style="color: green">
                              {{ numberWithCommas(HobabGerami) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(HobabGerami) }}%)
                            </p>
                          </div>
                        </b-col>
                        <b-col cols="3">
                          <p style="color: #742b6c">
                            % {{ numberWithCommas(HobabGerami) }}
                          </p>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                  <hr />

                  <div>
                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <b>
                            <!-- <v-icon
                              title="نمودار"
                              class="ml-2"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="ml-1"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            نرخ طلای 18
                          </b>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="geramTalaPrice > 0">
                            <p style="color: green">
                              {{ numberWithCommas(geramTalaPrice) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(geramTalaPrice) }}%)
                            </p>
                          </div>
                        </b-col>

                        <b-col cols="3">
                          <b> {{ numberWithCommas(geramTalaPrice) }} </b>
                        </b-col>
                      </b-row>
                      <br />
                    </div>
                  </div>
                  <hr />

                  <div>
                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <b>
                            <!-- <v-icon
                              title="نمودار"
                              class="ml-2"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="ml-1"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            نرخ طلای 24
                          </b>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="gram24TalaPrice > 0">
                            <p style="color: green">
                              {{ numberWithCommas(gram24TalaPrice) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(gram24TalaPrice) }}%)
                            </p>
                          </div>
                        </b-col>

                        <b-col cols="3">
                          <b> {{ numberWithCommas(gram24TalaPrice) }} </b>
                        </b-col>
                      </b-row>
                      <br />
                    </div>
                  </div>
                  <hr />

                  <div>
                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <b>
                            <!-- <v-icon
                              title="نمودار"
                              class="ml-2"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="ml-1"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            ارزش طلای آبشده
                          </b>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="mesghalRiyal > 0">
                            <p style="color: green">
                              {{ numberWithCommas(mesghalRiyal) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(mesghalRiyal) }}%)
                            </p>
                          </div>
                        </b-col>

                        <b-col cols="3">
                          <b> {{ numberWithCommas(mesghalRiyal) }} </b>
                        </b-col>
                      </b-row>
                      <br />
                    </div>
                  </div>
                  <hr />

                  <div>
                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <b>
                            <!-- <v-icon
                              title="نمودار"
                              class="ml-2"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="ml-1"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            ارزش طلای خام سكه تمام
                          </b>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="sekeRiyal > 0">
                            <p style="color: green">
                              {{ numberWithCommas(sekeRiyal) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(sekeRiyal) }}%)
                            </p>
                          </div>
                        </b-col>

                        <b-col cols="3">
                          <b> {{ numberWithCommas(mesghalRiyal) }} </b>
                        </b-col>
                      </b-row>
                      <br />
                    </div>
                  </div>
                  <hr />

                  <div>
                    <div>
                      <b-row align="right">
                        <b-col class="pl-0" cols="6">
                          <b>
                            <!-- <v-icon
                              title="نمودار"
                              class="ml-2"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >show_chart</v-icon
                            > -->

                            <img
                              class="img-responsive mt-0 mb-0 pt-0 pb-0"
                              width="20px"
                              height="20px"
                              src="@/assets/chart.png"
                              alt="طلاگرام"
                              @click="showChart()"
                              title="نمودار"
                              style="cursor: pointer"
                            />

                            <v-icon
                              title="اطلاعات"
                              class="ml-1"
                              style="font-size: 18px; color: #d9b34a"
                              @click="showChart()"
                              >info</v-icon
                            >

                            نرخ انس نقره
                          </b>
                        </b-col>

                        <b-col class="pr-0" cols="3">
                          <div v-if="silverPrice > 0">
                            <p style="color: green">
                              {{ numberWithCommas(silverPrice) }}%
                            </p>
                          </div>
                          <div v-else>
                            <p style="color: red">
                              ({{ numberWithCommas(silverPrice) }}%)
                            </p>
                          </div>
                        </b-col>

                        <b-col cols="3">
                          <b> {{ numberWithCommas(silverPrice) }} </b>
                        </b-col>
                      </b-row>
                      <br />
                    </div>
                  </div>
                </b-card>
              </b-card-group>
            </b-col>

            <b-col class="grid col-xl-4 col-lg-6 col-12">
              <b-card-group>
                <b-card dir="rtl" style="border-radius: 20px" class="shadow">
                  <template #header>
                    <div style="text-align: center" class="head1">
                      <b
                        class="mb-0"
                        style="color: #ffffff; text-shadow: 3px 3px 7px black"
                        >سکه یک روزه بورسی</b
                      >
                    </div>
                  </template>
                  <div class="">
                    <b-card-text>
                      <div>
                        <div>
                          <b-row align="right">
                            <b-col class="pl-0" cols="6">
                              <b style="font-size: 1em">
                                <!-- <v-icon
                                  title="نمودار"
                                  class="ml-2"
                                  style="font-size: 18px; color: #d9b34a"
                                  @click="showChart()"
                                  >show_chart</v-icon
                                > -->
                                <img
                                  class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                  width="20px"
                                  height="20px"
                                  src="@/assets/chart.png"
                                  alt="طلاگرام"
                                  @click="showChart()"
                                  title="نمودار"
                                  style="cursor: pointer"
                                />

                                <v-icon
                                  title="اطلاعات"
                                  class="ml-1"
                                  style="font-size: 18px; color: #d9b34a"
                                  @click="showChart()"
                                  >info</v-icon
                                >

                                سکه بانک رفاه
                              </b>
                            </b-col>

                            <b-col class="pa-0" cols="2">
                              <div v-if="sekeRefahPrice > 0">
                                <p style="color: green">
                                  {{ numberWithCommas(sekeRefahPrice) }}%
                                </p>
                              </div>
                              <div v-else>
                                <p style="color: red">
                                  ({{ numberWithCommas(sekeRefahPrice) }}%)
                                </p>
                              </div>
                            </b-col>

                            <b-col cols="4">
                              <b> {{ numberWithCommas(sekeRefahPrice) }} </b>
                            </b-col>
                          </b-row>
                          <br />
                        </div>

                        <div>
                          <b-row align="right">
                            <b-col class="pl-0" cols="6">
                              <div class="hob">
                                <!-- <v-icon
                                  title="نمودار"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >show_chart</v-icon
                                > -->

                                <img
                                  class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                  width="20px"
                                  height="20px"
                                  src="@/assets/chart.png"
                                  alt="طلاگرام"
                                  @click="showChart()"
                                  title="نمودار"
                                  style="cursor: pointer"
                                />

                                <v-icon
                                  title="اطلاعات"
                                  class="mr-1"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >info</v-icon
                                >

                                حباب نسبت به بازار آزاد
                              </div>
                            </b-col>

                            <b-col class="pr-0" cols="3">
                              <div v-if="HobabRefahCoinFree > 0">
                                <p style="color: green">
                                  {{ numberWithCommas(HobabRefahCoinFree) }}%
                                </p>
                              </div>
                              <div v-else>
                                <p style="color: red">
                                  ({{ numberWithCommas(HobabRefahCoinFree) }}%)
                                </p>
                              </div>
                            </b-col>
                            <b-col cols="3">
                              <p style="color: #742b6c">
                                %{{ numberWithCommas(HobabRefahCoinFree) }}
                              </p>
                            </b-col>
                          </b-row>
                        </div>

                        <div>
                          <b-row align="right">
                            <b-col class="pl-0" cols="6">
                              <div class="hob">
                                <!-- <v-icon
                                  title="نمودار"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >show_chart</v-icon
                                > -->

                                <img
                                  class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                  width="20px"
                                  height="20px"
                                  src="@/assets/chart.png"
                                  alt="طلاگرام"
                                  @click="showChart()"
                                  title="نمودار"
                                  style="cursor: pointer"
                                />

                                <v-icon
                                  title="اطلاعات"
                                  class="mr-1"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >info</v-icon
                                >

                                حباب نسبت به طلای خام سكه
                              </div>
                            </b-col>

                            <b-col class="pr-0" cols="3">
                              <div v-if="HobabRefahCoinSekeRiyal > 0">
                                <p style="color: green">
                                  {{
                                    numberWithCommas(HobabRefahCoinSekeRiyal)
                                  }}%
                                </p>
                              </div>
                              <div v-else>
                                <p style="color: red">
                                  ({{
                                    numberWithCommas(HobabRefahCoinSekeRiyal)
                                  }}%)
                                </p>
                              </div>
                            </b-col>
                            <b-col cols="3">
                              <p style="color: #742b6c">
                                %
                                {{ numberWithCommas(HobabRefahCoinSekeRiyal) }}
                              </p>
                            </b-col>
                          </b-row>
                        </div>
                      </div>
                      <hr />

                      <div>
                        <div>
                          <b-row align="right">
                            <b-col class="pl-0" cols="6">
                              <b style="font-size: 1em">
                                <!-- <v-icon
                                  title="نمودار"
                                  class="ml-2"
                                  style="font-size: 18px; color: #d9b34a"
                                  @click="showChart()"
                                  >show_chart</v-icon
                                > -->

                                <img
                                  class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                  width="20px"
                                  height="20px"
                                  src="@/assets/chart.png"
                                  alt="طلاگرام"
                                  @click="showChart()"
                                  title="نمودار"
                                  style="cursor: pointer"
                                />

                                <v-icon
                                  title="اطلاعات"
                                  class="ml-1"
                                  style="font-size: 18px; color: #d9b34a"
                                  @click="showChart()"
                                  >info</v-icon
                                >

                                سکه بانک صادرات
                              </b>
                            </b-col>

                            <b-col class="pr-0" cols="3">
                              <div v-if="sekeSaderatPrice > 0">
                                <p style="color: green">
                                  {{ numberWithCommas(sekeSaderatPrice) }}%
                                </p>
                              </div>
                              <div v-else>
                                <p style="color: red">
                                  ({{ numberWithCommas(sekeSaderatPrice) }}%)
                                </p>
                              </div>
                            </b-col>

                            <b-col cols="3">
                              <b>
                                {{ numberWithCommas(sekeSaderatPrice) }}
                              </b>
                            </b-col>
                          </b-row>
                          <br />
                        </div>

                        <div>
                          <b-row align="right">
                            <b-col class="pl-0" cols="6">
                              <div class="hob">
                                <!-- <v-icon
                                  title="نمودار"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >show_chart</v-icon
                                > -->

                                <img
                                  class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                  width="20px"
                                  height="20px"
                                  src="@/assets/chart.png"
                                  alt="طلاگرام"
                                  @click="showChart()"
                                  title="نمودار"
                                  style="cursor: pointer"
                                />

                                <v-icon
                                  title="اطلاعات"
                                  class="mr-1"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >info</v-icon
                                >

                                حباب نسبت به بازار آزاد
                              </div>
                            </b-col>

                            <b-col class="pr-0" cols="3">
                              <div v-if="HobabSaderatCoinFree > 0">
                                <p style="color: green">
                                  {{ numberWithCommas(HobabSaderatCoinFree) }}%
                                </p>
                              </div>
                              <div v-else>
                                <p style="color: red">
                                  ({{
                                    numberWithCommas(HobabSaderatCoinFree)
                                  }}%)
                                </p>
                              </div>
                            </b-col>
                            <b-col cols="3">
                              <p style="color: #742b6c">
                                % {{ numberWithCommas(HobabSaderatCoinFree) }}
                              </p>
                            </b-col>
                          </b-row>
                        </div>

                        <div>
                          <b-row align="right">
                            <b-col class="pl-0" cols="6">
                              <div class="hob">
                                <!-- <v-icon
                                  title="نمودار"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >show_chart</v-icon
                                > -->
                                <img
                                  class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                  width="20px"
                                  height="20px"
                                  src="@/assets/chart.png"
                                  alt="طلاگرام"
                                  @click="showChart()"
                                  title="نمودار"
                                  style="cursor: pointer"
                                />

                                <v-icon
                                  title="اطلاعات"
                                  class="mr-1"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >info</v-icon
                                >

                                حباب نسبت به طلای خام سكه
                              </div>
                            </b-col>

                            <b-col class="pr-0" cols="3">
                              <div v-if="HobabSaderatCoinSekeRiyal > 0">
                                <p style="color: green">
                                  {{
                                    numberWithCommas(HobabSaderatCoinSekeRiyal)
                                  }}%
                                </p>
                              </div>
                              <div v-else>
                                <p style="color: red">
                                  ({{
                                    numberWithCommas(HobabSaderatCoinSekeRiyal)
                                  }}%)
                                </p>
                              </div>
                            </b-col>
                            <b-col cols="3">
                              <p style="color: #742b6c">
                                %
                                {{
                                  numberWithCommas(HobabSaderatCoinSekeRiyal)
                                }}
                              </p>
                            </b-col>
                          </b-row>
                        </div>
                      </div>
                      <hr />

                      <div>
                        <div>
                          <b-row align="right">
                            <b-col class="pl-0" cols="6">
                              <b style="font-size: 1em">
                                <!-- <v-icon
                                  title="نمودار"
                                  class="ml-2"
                                  style="font-size: 18px; color: #d9b34a"
                                  @click="showChart()"
                                  >show_chart</v-icon
                                > -->

                                <img
                                  class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                  width="20px"
                                  height="20px"
                                  src="@/assets/chart.png"
                                  alt="طلاگرام"
                                  @click="showChart()"
                                  title="نمودار"
                                  style="cursor: pointer"
                                />

                                <v-icon
                                  title="اطلاعات"
                                  class="ml-1"
                                  style="font-size: 18px; color: #d9b34a"
                                  @click="showChart()"
                                  >info</v-icon
                                >

                                سکه بانک ملت
                              </b>
                            </b-col>

                            <b-col class="pr-0" cols="3">
                              <div v-if="sekeMellatPrice > 0">
                                <p style="color: green">
                                  {{ numberWithCommas(sekeMellatPrice) }}%
                                </p>
                              </div>
                              <div v-else>
                                <p style="color: red">
                                  ({{ numberWithCommas(sekeMellatPrice) }}%)
                                </p>
                              </div>
                            </b-col>

                            <b-col cols="3">
                              <b> {{ numberWithCommas(sekeMellatPrice) }} </b>
                            </b-col>
                          </b-row>
                          <br />
                        </div>

                        <div>
                          <b-row align="right">
                            <b-col class="pl-0" cols="6">
                              <div class="hob">
                                <!-- <v-icon
                                  title="نمودار"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >show_chart</v-icon
                                > -->

                                <img
                                  class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                  width="20px"
                                  height="20px"
                                  src="@/assets/chart.png"
                                  alt="طلاگرام"
                                  @click="showChart()"
                                  title="نمودار"
                                  style="cursor: pointer"
                                />

                                <v-icon
                                  title="اطلاعات"
                                  class="mr-1"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >info</v-icon
                                >

                                حباب نسبت به بازار آزاد
                              </div>
                            </b-col>

                            <b-col class="pr-0" cols="3">
                              <div v-if="HobabMellatCoinFree > 0">
                                <p style="color: green">
                                  {{ numberWithCommas(HobabMellatCoinFree) }}%
                                </p>
                              </div>
                              <div v-else>
                                <p style="color: red">
                                  ({{ numberWithCommas(HobabMellatCoinFree) }}%)
                                </p>
                              </div>
                            </b-col>
                            <b-col cols="3">
                              <p style="color: #742b6c">
                                % {{ numberWithCommas(HobabMellatCoinFree) }}
                              </p>
                            </b-col>
                          </b-row>
                        </div>

                        <div>
                          <b-row align="right">
                            <b-col class="pl-0" cols="6">
                              <div class="hob">
                                <!-- <v-icon
                                  title="نمودار"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >show_chart</v-icon
                                > -->

                                <img
                                  class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                  width="20px"
                                  height="20px"
                                  src="@/assets/chart.png"
                                  alt="طلاگرام"
                                  @click="showChart()"
                                  title="نمودار"
                                  style="cursor: pointer"
                                />

                                <v-icon
                                  title="اطلاعات"
                                  class="mr-1"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >info</v-icon
                                >

                                حباب نسبت به طلای خام سكه
                              </div>
                            </b-col>

                            <b-col class="pr-0" cols="3">
                              <div v-if="HobabMellatCoinSekeRiyal > 0">
                                <p style="color: green">
                                  {{
                                    numberWithCommas(HobabMellatCoinSekeRiyal)
                                  }}%
                                </p>
                              </div>
                              <div v-else>
                                <p style="color: red">
                                  ({{
                                    numberWithCommas(HobabMellatCoinSekeRiyal)
                                  }}%)
                                </p>
                              </div>
                            </b-col>
                            <b-col cols="3">
                              <p style="color: #742b6c">
                                %
                                {{ numberWithCommas(HobabMellatCoinSekeRiyal) }}
                              </p>
                            </b-col>
                          </b-row>
                        </div>
                      </div>
                      <hr />

                      <div>
                        <div>
                          <b-row align="right">
                            <b-col class="pl-0" cols="6">
                              <b style="font-size: 1em">
                                <!-- <v-icon
                                  title="نمودار"
                                  class="ml-2"
                                  style="font-size: 18px; color: #d9b34a"
                                  @click="showChart()"
                                  >show_chart</v-icon
                                > -->
                                <img
                                  class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                  width="20px"
                                  height="20px"
                                  src="@/assets/chart.png"
                                  alt="طلاگرام"
                                  @click="showChart()"
                                  title="نمودار"
                                  style="cursor: pointer"
                                />

                                <v-icon
                                  title="اطلاعات"
                                  class="ml-1"
                                  style="font-size: 18px; color: #d9b34a"
                                  @click="showChart()"
                                  >info</v-icon
                                >

                                سکه بانک سامان
                              </b>
                            </b-col>

                            <b-col class="pr-0" cols="3">
                              <div v-if="sekeSamanPrice > 0">
                                <p style="color: green">
                                  {{ numberWithCommas(sekeSamanPrice) }}%
                                </p>
                              </div>
                              <div v-else>
                                <p style="color: red">
                                  ({{ numberWithCommas(sekeSamanPrice) }}%)
                                </p>
                              </div>
                            </b-col>

                            <b-col cols="3">
                              <b> {{ numberWithCommas(sekeSamanPrice) }} </b>
                            </b-col>
                          </b-row>
                          <br />
                        </div>

                        <div>
                          <b-row align="right">
                            <b-col class="pl-0" cols="6">
                              <div class="hob">
                                <!-- <v-icon
                                  title="نمودار"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >show_chart</v-icon
                                > -->
                                <img
                                  class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                  width="20px"
                                  height="20px"
                                  src="@/assets/chart.png"
                                  alt="طلاگرام"
                                  @click="showChart()"
                                  title="نمودار"
                                  style="cursor: pointer"
                                />

                                <v-icon
                                  title="اطلاعات"
                                  class="mr-1"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >info</v-icon
                                >

                                حباب نسبت به بازار آزاد
                              </div>
                            </b-col>

                            <b-col class="pr-0" cols="3">
                              <div v-if="HobabSamanCoinFree > 0">
                                <p style="color: green">
                                  {{ numberWithCommas(HobabSamanCoinFree) }}%
                                </p>
                              </div>
                              <div v-else>
                                <p style="color: red">
                                  ({{ numberWithCommas(HobabSamanCoinFree) }}%)
                                </p>
                              </div>
                            </b-col>
                            <b-col cols="3">
                              <p style="color: #742b6c">
                                % {{ numberWithCommas(HobabSamanCoinFree) }}
                              </p>
                            </b-col>
                          </b-row>
                        </div>

                        <div>
                          <b-row align="right">
                            <b-col class="pl-0" cols="6">
                              <div class="hob">
                                <!-- <v-icon
                                  title="نمودار"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >show_chart</v-icon
                                > -->
                                <img
                                  class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                  width="20px"
                                  height="20px"
                                  src="@/assets/chart.png"
                                  alt="طلاگرام"
                                  @click="showChart()"
                                  title="نمودار"
                                  style="cursor: pointer"
                                />

                                <v-icon
                                  title="اطلاعات"
                                  class="mr-1"
                                  style="font-size: 16px; color: #d9b34a"
                                  @click="showChart()"
                                  >info</v-icon
                                >

                                حباب نسبت به طلای خام سكه
                              </div>
                            </b-col>

                            <b-col class="pr-0" cols="3">
                              <div v-if="HobabSamanCoinSekeRiyal > 0">
                                <p style="color: green">
                                  {{
                                    numberWithCommas(HobabSamanCoinSekeRiyal)
                                  }}%
                                </p>
                              </div>
                              <div v-else>
                                <p style="color: red">
                                  ({{
                                    numberWithCommas(HobabSamanCoinSekeRiyal)
                                  }}%)
                                </p>
                              </div>
                            </b-col>
                            <b-col cols="3">
                              <p style="color: #742b6c">
                                %{{ numberWithCommas(HobabSamanCoinSekeRiyal) }}
                              </p>
                            </b-col>
                          </b-row>
                        </div>
                      </div>
                    </b-card-text>
                  </div>
                </b-card>
              </b-card-group>
            </b-col>

            <b-col class="grid col-xl-4 col-12">
              <b-card-group dir="rtl">
                <b-card style="border-radius: 20px" class="shadow">
                  <template #header>
                    <div style="text-align: center">
                      <b
                        class="mb-0"
                        style="color: #ffffff; text-shadow: 3px 3px 7px black"
                        > صندوق های پشتوانه طلا</b
                      >
                    </div>
                  </template>

                  <div class="" style="background-color: Light">
                    <b-card-text>
                      <b-row class="test1" dir="rtl">
                        <div>
                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <b style="font-size: 1em">
                                  <!-- <v-icon
                                    title="نمودار"
                                    class="ml-2"
                                    style="font-size: 18px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->
                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="ml-1"
                                    style="font-size: 18px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  صندوق لوتس (طلا)
                                </b>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="talaLotusPriceOpen > 0">
                                  <p style="color: green">
                                    {{ numberWithCommas(talaLotusPriceOpen) }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{
                                      numberWithCommas(talaLotusPriceOpen)
                                    }}%)
                                  </p>
                                </div>
                              </b-col>

                              <b-col cols="3">
                                <b>
                                  {{ numberWithCommas(talaLotusPriceOpen) }}
                                </b>
                              </b-col>
                            </b-row>
                            <br />
                          </div>

                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <div class="hob">
                                  <!-- <v-icon
                                    title="نمودار"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="mr-1"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  حباب نسبت به طلای خام سكه
                                </div>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="HobabTalaLotusSeke > 0">
                                  <p style="color: green">
                                    {{ numberWithCommas(HobabTalaLotusSeke) }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{
                                      numberWithCommas(HobabTalaLotusSeke)
                                    }}%)
                                  </p>
                                </div>
                              </b-col>
                              <b-col cols="3">
                                <p style="color: #742b6c">
                                  % {{ numberWithCommas(HobabTalaLotusSeke) }}
                                </p>
                              </b-col>
                            </b-row>
                          </div>

                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <div class="hob">
                                  <!-- <v-icon
                                    title="نمودار"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="mr-1"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  حباب نسبت به NAV
                                </div>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="HobabTalaLotusNav > 0">
                                  <p style="color: green">
                                    {{ numberWithCommas(HobabTalaLotusNav) }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{ numberWithCommas(HobabTalaLotusNav) }}%)
                                  </p>
                                </div>
                              </b-col>
                              <b-col cols="3">
                                <p style="color: #742b6c">
                                  % {{ numberWithCommas(HobabTalaLotusNav) }}
                                </p>
                              </b-col>
                            </b-row>
                          </div>

                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <div class="hob">
                                  <!-- <v-icon
                                    title="نمودار"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="mr-1"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  مقدار NAV ابطال
                                </div>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="talaLotusPricePrevious > 0">
                                  <p style="color: green">
                                    {{
                                      numberWithCommas(talaLotusPricePrevious)
                                    }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{
                                      numberWithCommas(talaLotusPricePrevious)
                                    }}%)
                                  </p>
                                </div>
                              </b-col>
                              <b-col cols="3">
                                <p style="color: #742b6c">
                                  {{ numberWithCommas(talaLotusPricePrevious) }}
                                </p>
                              </b-col>
                            </b-row>
                          </div>
                        </div>
                      </b-row>

                      <hr />

                      <b-row class="test1" dir="rtl">
                        <div>
                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <b style="font-size: 1em">
                                  <!-- <v-icon
                                    title="نمودار"
                                    class="ml-2"
                                    style="font-size: 18px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="ml-1"
                                    style="font-size: 18px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  صندوق مفید (عیار)
                                </b>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="talaAyarPriceOpen > 0">
                                  <p style="color: green">
                                    {{ numberWithCommas(talaAyarPriceOpen) }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{ numberWithCommas(talaAyarPriceOpen) }}%)
                                  </p>
                                </div>
                              </b-col>

                              <b-col cols="3">
                                <b>
                                  {{ numberWithCommas(talaAyarPriceOpen) }}
                                </b>
                              </b-col>
                            </b-row>
                            <br />
                          </div>

                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <div class="hob">
                                  <!-- <v-icon
                                    title="نمودار"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="mr-1"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  حباب نسبت به طلای خام سكه
                                </div>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="HobabTalaAyarSeke > 0">
                                  <p style="color: green">
                                    {{ numberWithCommas(HobabTalaAyarSeke) }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{ numberWithCommas(HobabTalaAyarSeke) }}%)
                                  </p>
                                </div>
                              </b-col>
                              <b-col cols="3">
                                <p style="color: #742b6c">
                                  % {{ numberWithCommas(HobabTalaAyarSeke) }}
                                </p>
                              </b-col>
                            </b-row>
                          </div>

                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <div class="hob">
                                  <!-- <v-icon
                                    title="نمودار"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="mr-1"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  حباب نسبت به NAV
                                </div>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="HobabTalaAyarNav > 0">
                                  <p style="color: green">
                                    {{ numberWithCommas(HobabTalaAyarNav) }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{ numberWithCommas(HobabTalaAyarNav) }}%)
                                  </p>
                                </div>
                              </b-col>
                              <b-col cols="3">
                                <p style="color: #742b6c">
                                  % {{ numberWithCommas(HobabTalaAyarNav) }}
                                </p>
                              </b-col>
                            </b-row>
                          </div>

                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <div class="hob">
                                  <!-- <v-icon
                                    title="نمودار"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="mr-1"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  مقدار NAV ابطال
                                </div>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="talaAyarPricePrevious > 0">
                                  <p style="color: green">
                                    {{
                                      numberWithCommas(talaAyarPricePrevious)
                                    }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{
                                      numberWithCommas(talaAyarPricePrevious)
                                    }}%)
                                  </p>
                                </div>
                              </b-col>
                              <b-col cols="3">
                                <p style="color: #742b6c">
                                  {{ numberWithCommas(talaAyarPricePrevious) }}
                                </p>
                              </b-col>
                            </b-row>
                          </div>
                        </div>
                      </b-row>
                      <hr />

                      <b-row class="test1" dir="rtl">
                        <div>
                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <b style="font-size: 1em">
                                  <!-- <v-icon
                                    title="نمودار"
                                    class="ml-2"
                                    style="font-size: 18px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->
                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="ml-1"
                                    style="font-size: 18px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  صندوق زر (زر)
                                </b>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="talaZarPriceOpen > 0">
                                  <p style="color: green">
                                    {{ numberWithCommas(talaZarPriceOpen) }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{ numberWithCommas(talaZarPriceOpen) }}%)
                                  </p>
                                </div>
                              </b-col>

                              <b-col cols="3">
                                <b>
                                  {{ numberWithCommas(talaZarPriceOpen) }}
                                </b>
                              </b-col>
                            </b-row>
                            <br />
                          </div>

                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <div class="hob">
                                  <!-- <v-icon
                                    title="نمودار"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="mr-1"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  حباب نسبت به طلای خام سكه
                                </div>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="HobabTalaZarSeke > 0">
                                  <p style="color: green">
                                    {{ numberWithCommas(HobabTalaZarSeke) }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{ numberWithCommas(HobabTalaZarSeke) }}%)
                                  </p>
                                </div>
                              </b-col>
                              <b-col cols="3">
                                <p style="color: #742b6c">
                                  % {{ numberWithCommas(HobabTalaZarSeke) }}
                                </p>
                              </b-col>
                            </b-row>
                          </div>

                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <div class="hob">
                                  <!-- <v-icon
                                    title="نمودار"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="mr-1"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  حباب نسبت به NAV
                                </div>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="HobabTalaZarNav > 0">
                                  <p style="color: green">
                                    {{ numberWithCommas(HobabTalaZarNav) }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{ numberWithCommas(HobabTalaZarNav) }}%)
                                  </p>
                                </div>
                              </b-col>
                              <b-col cols="3">
                                <p style="color: #742b6c">
                                  % {{ numberWithCommas(HobabTalaZarNav) }}
                                </p>
                              </b-col>
                            </b-row>
                          </div>

                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <div class="hob">
                                  <!-- <v-icon
                                    title="نمودار"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="mr-1"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  مقدار NAV ابطال
                                </div>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="talaZarPricePrevious > 0">
                                  <p style="color: green">
                                    {{
                                      numberWithCommas(talaZarPricePrevious)
                                    }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{
                                      numberWithCommas(talaZarPricePrevious)
                                    }}%)
                                  </p>
                                </div>
                              </b-col>
                              <b-col cols="3">
                                <p style="color: #742b6c">
                                  {{ numberWithCommas(talaZarPricePrevious) }}
                                </p>
                              </b-col>
                            </b-row>
                          </div>
                        </div>
                      </b-row>
                      <hr />

                      <b-row class="test1" dir="rtl">
                        <div>
                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <b style="font-size: 1em">
                                  <!-- <v-icon
                                    title="نمودار"
                                    class="ml-2"
                                    style="font-size: 18px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="ml-1"
                                    style="font-size: 18px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  صندوق کیان (گوهر)
                                </b>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="talaGoharPriceOpen > 0">
                                  <p style="color: green">
                                    {{ numberWithCommas(talaGoharPriceOpen) }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{
                                      numberWithCommas(talaGoharPriceOpen)
                                    }}%)
                                  </p>
                                </div>
                              </b-col>

                              <b-col cols="3">
                                <b>
                                  {{ numberWithCommas(talaGoharPriceOpen) }}
                                </b>
                              </b-col>
                            </b-row>
                            <br />
                          </div>

                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <div class="hob">
                                  <!-- <v-icon
                                    title="نمودار"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->
                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="mr-1"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  حباب نسبت به طلای خام سكه
                                </div>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="HobabTalaGoharSeke > 0">
                                  <p style="color: green">
                                    {{ numberWithCommas(HobabTalaGoharSeke) }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{
                                      numberWithCommas(HobabTalaGoharSeke)
                                    }}%)
                                  </p>
                                </div>
                              </b-col>
                              <b-col cols="3">
                                <p style="color: #742b6c">
                                  % {{ numberWithCommas(HobabTalaGoharSeke) }}
                                </p>
                              </b-col>
                            </b-row>
                          </div>

                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <div class="hob">
                                  <!-- <v-icon
                                    title="نمودار"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="mr-1"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  حباب نسبت به NAV
                                </div>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="HobabTalaGoharNav > 0">
                                  <p style="color: green">
                                    {{ numberWithCommas(HobabTalaGoharNav) }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{ numberWithCommas(HobabTalaGoharNav) }}%)
                                  </p>
                                </div>
                              </b-col>
                              <b-col cols="3">
                                <p style="color: #742b6c">
                                  % {{ numberWithCommas(HobabTalaGoharNav) }}
                                </p>
                              </b-col>
                            </b-row>
                          </div>

                          <div>
                            <b-row align="right">
                              <b-col class="pl-0" cols="6">
                                <div class="hob">
                                  <!-- <v-icon
                                    title="نمودار"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >show_chart</v-icon
                                  > -->

                                  <img
                                    class="img-responsive mt-0 mb-0 pt-0 pb-0"
                                    width="20px"
                                    height="20px"
                                    src="@/assets/chart.png"
                                    alt="طلاگرام"
                                    @click="showChart()"
                                    title="نمودار"
                                    style="cursor: pointer"
                                  />

                                  <v-icon
                                    title="اطلاعات"
                                    class="mr-1"
                                    style="font-size: 16px; color: #d9b34a"
                                    @click="showChart()"
                                    >info</v-icon
                                  >

                                  مقدار NAV ابطال
                                </div>
                              </b-col>

                              <b-col class="pr-0" cols="3">
                                <div v-if="talaGoharPricePrevious > 0">
                                  <p style="color: green">
                                    {{
                                      numberWithCommas(talaGoharPricePrevious)
                                    }}%
                                  </p>
                                </div>
                                <div v-else>
                                  <p style="color: red">
                                    ({{
                                      numberWithCommas(talaGoharPricePrevious)
                                    }}%)
                                  </p>
                                </div>
                              </b-col>
                              <b-col cols="3">
                                <p style="color: #742b6c">
                                  {{ numberWithCommas(talaGoharPricePrevious) }}
                                </p>
                              </b-col>
                            </b-row>
                          </div>
                        </div>
                      </b-row>
                    </b-card-text>
                  </div>
                </b-card>
              </b-card-group>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="1"> </b-col>
      </b-row>

      <br /><br />

      <br /><br />

      <!-- <div class="chart" ref="chart1"></div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config";

// import { createChart } from "lightweight-charts";
//  import { LightweightCharts } from "lightweight-charts";

export default {
  name: "App",
  data() {
    return {
      url1: `${config.paseUrl}` + "api/v1/CurrentPrice/GetTalagram",
      // url2: `${config.paseUrl}` +"api/v1/ArchivedPrice/GetSekeByTimeFrame/?timeframe=5",

      //navbar
      isCollapseOpen: false,
      chart: null,
      chartData: [],
      // nerkhha
      dollar: 0,
      silver: 0,
      ons: 0,
      silverPrice: 0,
      mesghalPrice: 0,
      sekePrice: 0,
      sekeGhadimPrice: 0,
      HobabAbshode: 0,
      HobabSeke: 0,
      HobabSekeGhadim: 0,
      HobabNim: 0,
      HobabRob: 0,
      HobabGerami: 0,
      mesghalRiyal: 0,
      sekeRiyal: 0,
      geramTalaPrice: 0,
      gram24TalaPrice: 0,
      nimPrice: 0,
      robPrice: 0,
      sekeGeramiPrice: 0,
      sekeRefahPrice: 0,
      HobabRefahCoinFree: 0,
      HobabRefahCoinSekeRiyal: 0,
      sekeSaderatPrice: 0,
      HobabSaderatCoinFree: 0,
      HobabSaderatCoinSekeRiyal: 0,
      sekeMellatPrice: 0,
      HobabMellatCoinFree: 0,
      HobabMellatCoinSekeRiyal: 0,
      sekeSamanPrice: 0,
      HobabSamanCoinFree: 0,
      HobabSamanCoinSekeRiyal: 0,
      talaLotusPriceOpen: 0,
      HobabTalaLotusSeke: 0,
      HobabTalaLotusNav: 0,
      talaLotusPricePrevious: 0,
      talaAyarPriceOpen: 0,
      HobabTalaAyarSeke: 0,
      HobabTalaAyarNav: 0,
      talaAyarPricePrevious: 0,
      talaZarPriceOpen: 0,
      HobabTalaZarSeke: 0,
      HobabTalaZarNav: 0,
      talaZarPricePrevious: 0,
      talaGoharPriceOpen: 0,
      HobabTalaGoharSeke: 0,
      HobabTalaGoharNav: 0,
      talaGoharPricePrevious: 0,
      showHobabRefah: false,
      showHobabSaderat: false,
      showHobabMelat: false,
      showHobabSaman: false,
      showHobabLoutos: false,
      showHobabEyar: false,
      showHobabZar: false,
      showHobabGohar: false,
      showHobabmesghal: false,
      showHobabSeke: false,
      showHobabGhadim: false,
      showHobabNim: false,
      showHobabRob: false,
      showHobabGerami: false,
      //date
      today: 0,
    };
  },
  components: {},

  methods: {
    showChart() {
      // this.$router.push({ path: "/MainChart" });

      let routeData = this.$router.resolve({ path: "/MainChart" });
      window.open(routeData.href, "_blank");
    },

    //nrkhha
    showHobabRefahDetail() {
      this.showHobabRefah = !this.showHobabRefah;
    },
    showHobabSaderatDetail() {
      this.showHobabSaderat = !this.showHobabSaderat;
    },
    showHobabMelatDetail() {
      this.showHobabMelat = !this.showHobabMelat;
    },
    showHobabSamanDetail() {
      this.showHobabSaman = !this.showHobabSaman;
    },
    showHobabLoutosDetails() {
      this.showHobabLoutos = !this.showHobabLoutos;
    },
    showHobabEyarDetails() {
      this.showHobabEyar = !this.showHobabEyar;
    },
    showHobabZarDetails() {
      this.showHobabZar = !this.showHobabZar;
    },
    showHobabGoharDetails() {
      this.showHobabGohar = !this.showHobabGohar;
    },
    showHobabmesghalDetails() {
      this.showHobabmesghal = !this.showHobabmesghal;
    },
    showHobabSekeDetails() {
      this.showHobabSeke = !this.showHobabSeke;
    },
    showHobabGhadimDetails() {
      this.showHobabGhadim = !this.showHobabGhadim;
    },
    // showHobabNimDetails() {
    //   this.showHobabNim = !this.showHobabNim;
    // },
    // showHobabRobDetails() {
    //   this.showHobabRob = !this.showHobabRob;
    // },
    showHobabGeramiDetails() {
      this.showHobabGerami = !this.showHobabGerami;
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    decimalAdjust(type, value, exp) {
      // If the exp is undefined or zero...
      if (typeof exp === "undefined" || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // If the value is not a number or the exp is not an integer...
      if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
        return NaN;
      }
      // Shift
      value = value.toString().split("e");
      value = Math[type](
        +(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))
      );
      // Shift back
      value = value.toString().split("e");
      return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
    },

    round(num) {
      var m = Number((Math.abs(num) * 100).toPrecision(15));
      return (Math.round(m) / 100) * Math.sign(num);
    },
  },
  async mounted() {
    //date
    this.today = new Date().toLocaleDateString("fa-IR");
    await axios.get(this.url1, {
        headers: {
           'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
           "Accept-Control-Allow-Origin": "*"
        },
      })
      .then((response) => {
        this.dollar = response.data.Data.usdPrice;
        this.ons = response.data.Data.onsPrice.toLocaleString();
        this.silver = response.data.Data.silverPrice;
        this.geramTalaPrice =
          response.data.Data.geramTalaPrice.toLocaleString();
        this.gram24TalaPrice =
          response.data.Data.gram24TalaPrice.toLocaleString();
        this.nimPrice = response.data.Data.nimPrice;
        this.robPrice = response.data.Data.robPrice;
        this.sekeGeramiPrice = response.data.Data.sekeGeramiPrice;

        this.HobabGerami = this.decimalAdjust(
          "round",
          this.decimalAdjust("round", response.data.Data.HobabGerami, -4) * 100,
          -4
        );

        this.sekeRefahPrice = response.data.Data.sekeRefahPrice;

        this.HobabRefahCoinFree = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabRefahCoinFree,
            -4
          ) * 100,
          -4
        );

        this.HobabRefahCoinSekeRiyal = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabRefahCoinSekeRiyal,
            -4
          ) * 100,
          -4
        );

        this.sekeSaderatPrice = response.data.Data.sekeSaderatPrice;

        this.HobabSaderatCoinFree = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabSaderatCoinFree,
            -4
          ) * 100,
          -4
        );

        this.HobabSaderatCoinSekeRiyal = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabSaderatCoinSekeRiyal,
            -4
          ) * 100,
          -4
        );

        this.sekeMellatPrice = response.data.Data.sekeMellatPrice;

        this.HobabMellatCoinFree = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabMellatCoinFree,
            -4
          ) * 100,
          -4
        );

        this.HobabMellatCoinSekeRiyal = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabMellatCoinSekeRiyal,
            -4
          ) * 100,
          -4
        );

        this.sekeSamanPrice = response.data.Data.sekeSamanPrice;
        this.HobabSamanCoinFree = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabSamanCoinFree,
            -4
          ) * 100,
          -4
        );

        this.HobabSamanCoinSekeRiyal = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabSamanCoinSekeRiyal,
            -4
          ) * 100,
          -4
        );

        this.talaLotusPriceOpen = response.data.Data.talaLotusPriceOpen;

        this.HobabTalaLotusSeke = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabTalaLotusSeke,
            -4
          ) * 100,
          -4
        );

        this.HobabTalaLotusNav = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabTalaLotusNav,
            -4
          ) * 100,
          -4
        );

        this.talaLotusPricePrevious = response.data.Data.talaLotusPricePrevious;
        this.talaAyarPriceOpen = response.data.Data.talaAyarPriceOpen;

        this.HobabTalaAyarSeke = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabTalaAyarSeke,
            -4
          ) * 100,
          -4
        );

        this.HobabTalaAyarNav = this.decimalAdjust(
          "round",
          this.decimalAdjust("round", response.data.Data.HobabTalaAyarNav, -4) *
            100,
          -4
        );

        this.talaAyarPricePrevious = response.data.Data.talaAyarPricePrevious;
        this.talaZarPriceOpen = response.data.Data.talaZarPriceOpen;

        this.HobabTalaZarSeke = this.decimalAdjust(
          "round",
          this.decimalAdjust("round", response.data.Data.HobabTalaZarSeke, -4) *
            100,
          -4
        );

        this.HobabTalaZarNav = this.decimalAdjust(
          "round",
          this.decimalAdjust("round", response.data.Data.HobabTalaZarNav, -4) *
            100,
          -4
        );

        this.talaZarPricePrevious = response.data.Data.talaZarPricePrevious;
        this.talaGoharPriceOpen = response.data.Data.talaGoharPriceOpen;

        this.HobabTalaGoharSeke = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabTalaGoharSeke,
            -4
          ) * 100,
          -4
        );

        this.HobabTalaGoharNav = this.decimalAdjust(
          "round",
          this.decimalAdjust(
            "round",
            response.data.Data.HobabTalaGoharNav,
            -4
          ) * 100,
          -4
        );

        this.talaGoharPricePrevious = response.data.Data.talaGoharPricePrevious;
        this.silverPrice = response.data.Data.silverPrice;
        this.mesghalPrice = response.data.Data.mesghalPrice;
        this.sekePrice = response.data.Data.sekePrice;
        this.sekeGhadimPrice = response.data.Data.sekeGhadimPrice;

        this.HobabAbshode = response.data.Data.HobabAbshode;

        this.HobabAbshode = this.decimalAdjust(
          "round",
          this.decimalAdjust("round", response.data.Data.HobabAbshode, -4) *
            100,
          -4
        );

        this.HobabSeke = this.decimalAdjust(
          "round",
          this.decimalAdjust("round", response.data.Data.HobabSeke, -4) * 100,
          -4
        );

        this.HobabSekeGhadim = this.decimalAdjust(
          "round",
          this.decimalAdjust("round", response.data.Data.HobabSekeGhadim, -4) *
            100,
          -4
        );

        this.HobabNim = this.decimalAdjust(
          "round",
          this.decimalAdjust("round", response.data.Data.HobabNim, -4) * 100,
          -4
        );

        this.HobabRob = this.decimalAdjust(
          "round",
          this.decimalAdjust("round", response.data.Data.HobabRob, -4) * 100,
          -4
        );

        this.sekeRiyal = response.data.Data.sekeRiyal.toLocaleString();

        this.mesghalRiyal = response.data.Data.mesghalRiyal.toLocaleString();
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  created() {
    setInterval(function () {
      window.location.reload();
    }, 30000);
  },
};
</script>

<style scope>
.test {
  text-align: right !important;
  margin: 0 px;
  padding-bottom: 0% !important;
}
.test1 {
  margin-bottom: 0% !important;
}

p {
  padding: 0%;
  margin: 0%;
  margin-bottom: 0% !important;
}
.background {
  margin: 0.5% !important;
  width: 15em;
  border-radius: 20px;
  border-style: solid;
  border-color: rgb(255, 255, 255) !important;
}

.card-header {
  background-color: #222222;
}

div.card-header {
  border-top-left-radius: 19px !important;
  border-top-right-radius: 19px !important;
}
.hob {
  font-size: 0.8em;
  color: #000000;
}
.grid {
  margin-bottom: 1em;
}

.tit {
  color: #d9b34a !important;
  border-color: rgb(243, 242, 232);
  border-style: solid;
  background-color: rgb(231, 230, 223);
  box-shadow: 3px 1px 5px 1px rgb(12, 12, 12);
  height: 50px;
}
/* 
.menueItem :hover {
 color: #d9b34a !important; 
  transition: 0.90s;
} */


</style>
