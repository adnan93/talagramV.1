<template>
  <v-app style="font-family: IRYekan; background-color: #efede9">
    <b-row v-if="$route.name != 'Prices'" dir="rtl">
      <b-navbar toggleable="lg" style="background-color: #222222">
        <div>
          <!-- Just an image -->
          <b-navbar variant="faded" type="light">
            <b-navbar-brand class="mr-15" href="/">
              <img
                class="mt-0 mb-0 pt-0 pb-0"
                width="100%"
                height="90px"
                src="@/assets/meskal.png"
                alt="طلاگرام"
              />
            </b-navbar-brand>
          </b-navbar>
        </div>
        <b-navbar-brand>
          <router-link to="/">
            <b style="color: #f5d438; text-shadow: 3px 3px 7px black">
              طلاگرام
            </b>
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle
          style="color: white"
          target="nav-collapse"
        ></b-navbar-toggle>

        <b-collapse class="mr-15" id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="ml-2" href="#">
              <h6>
                <b style="color: #bea44d"> </b>
              </h6>
            </b-nav-item>

            <div>
              <b-nav-item class="">
                <router-link to="/about"
                  ><h6 class="menueItem">
                    <b style="color: #efede9"> محاسبه قیمت حباب </b>
                  </h6></router-link
                >
              </b-nav-item>
            </div>

            <div>
              <b-nav-item class="ml-2">
                <router-link to="/MainChart"
                  ><h6 class="menueItem">
                    <b style="color: #efede9"> نمودار</b>
                  </h6></router-link
                >
              </b-nav-item>
            </div>

            <!-- <div>
              <b-nav-item class="ml-2">
                <router-link to="/Questions"

                  ><h6 class="menueItem">
                    <b style="color: #efede9"> ویدیو‌ های آموزشی </b>
                  </h6></router-link>
              </b-nav-item>
            </div> -->

            <div>
              <b-nav-item class="ml-2">
                <router-link to="/Questions"
                  ><h6 class="menueItem">
                    <b style="color: #efede9"> ویدیو‌ های تحلیلی </b>
                  </h6></router-link
                >
              </b-nav-item>
            </div>

            <div>
              <b-nav-item class="ml-2" href="https://tahlilonline.com/category/%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d8%a8%d9%88%d8%b1%d8%b3/"
                  ><h6 class="menueItem">
                    <b style="color: #efede9"> مطالب آموزشی</b>
                  </h6>
              </b-nav-item>
            </div>

            <div>
              <b-nav-item class="ml-2" href="https://t.me/talagram_chnl">
                
                <h6 class="menueItem_telegram">
                  <b style="color: #efede9b;  "> کانال تلگرام</b>

                </h6>
              </b-nav-item>
            </div>
          </b-navbar-nav>
        </b-collapse>

   
        

     
      </b-navbar>
    </b-row>

    <router-view />

    <b-row
      v-if="$route.name != 'Prices'"
      class="footer"
      align="center"
      dir="rtl"
    >
      <hr />

      <b-col>
        <div class="container">
          <h5>
            <b style="color: #efede9; text-shadow: 3px 3px 7px black">
              لینک های مفید
            </b>
          </h5>
          <br />
          <div class="place">
            <h6>
              <a href="https://ex.ebidar.com/v-533">
                <li class="place">اقتصاد بیدار</li>
              </a>
            </h6>

            <h6 class="place">
              <a style="color: black" href="https://t.me/tahlilonline_com">
                <li class="place">تحلیل انلاین</li>
              </a>
            </h6>

            <h6 class="place">
              <a style="color: black" href="https://t.me/tahlilonline_com">
                <li class="place">باشگاه زمرد</li>
              </a>
            </h6>
          </div>
        </div>
      </b-col>

      <b-col>
        <div>
          <h5 class="">
            <b style="color: #efede9; text-shadow: 3px 3px 7px black">
              راه های ارتباطی
            </b>
          </h5>
          <br />
          <div>
            <h6 style="color: #a5b9bd">
              شیراز، خیابان قصرالدشت، چهارراه ملاصدرا، مرکز خرید طلا و جواهر
              پارس، طبقه همکف واحد 29 G
            </h6>
          </div>

          <div class="place">
            <h3>
              <a href="tel:07132301858">
                <p class="place">071-32301858</p>
              </a>
            </h3>
            <h3>
              <a href="tel:09171092419">
                <p class="place">09171092419</p>
              </a>
            </h3>
          </div>

          <br />
        </div>
        <div class="place1 container">
          <a class="place1 ml-1" href="https://t.me/talagram_chnl">
            <img class="place1" src="@/assets/tel3.png" />
          </a>

          <a
            class="place1 ml-1"
            href="https://instagram.com/tahlilonline_com?utm_medium=copy_link"
          >
            <img src="@/assets/ins.png" />
          </a>

          <a class="place1 ml-2" href="https://www.aparat.com/tahlilonline.com">
            <img src="@/assets/apa.png" />
          </a>

          <a
            class="place1"
            href="https://www.youtube.com/channel/UCo0Q1Re84VCVjemnr6-uN_g"
          >
            <img src="@/assets/you.png" />
          </a>
        </div>
      </b-col>
      <!-- <hr />
      <br />

      <h6>
        <v-icon style="font-size: 20px"> copyright </v-icon>

        کلیه حقوق متعلق به گروه مالی زمرد ‌می ‌باشد.
      </h6> -->
      <br />

      <br />
    </b-row>
  </v-app>
</template>
 
 
 
 <script>
export default {
  created() {},
};
</script>
 
 
<style scoped lang="scss">
@font-face {
  font-family: "IRYekan";
  src: local("IRYekan"),
    url(./font/IRANSansWeb_LightJustPersianNum.1bb7aba5.woff) format("truetype");
}
.chart {
  position: absolute;
  width: 100%;
  height: 300px;
}
.test {
  text-align: right !important;
  margin: 0 px;
  padding-bottom: 0% !important;
}
.test1 {
  margin-bottom: 0% !important;
}
.hobabptn :hover {
  background-color: none !important;
}
p {
  padding: 0%;
  margin: 0%;
  margin-bottom: 0% !important;
}
.background {
  margin: 0% !important;
  padding: 0% !important;
  background-color: #07075c;
  width: 7.8rem;
}

a:link {
  text-decoration: none;
  background-color: none !important;
}

a {
  color: white !important;
}

.footer {
  background-color: #222222;
}
.place {
  color: #a5b9bd;
}

.place :hover {
  color: #ffffff;
  transition: 0.1s;
  // opacity: 0.6;
}

.place1 :hover {
  color: #ffffff;
  -webkit-transform: translate(-10%, -10%);
}

.menueItem :hover {
  // background-color: brown;

  color: #f5d438 !important;
  transition: 0.5s;
  // opacity: 0.6;
}

.navbar-light .navbar-toggler {
  color: #f5d438;
  border-color: rgb(85, 81, 78);
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: #c4ab30;
  border: 0.5px solid transparent;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
  border-color: #c4ab30 !important;
  color: #c4ab30 !important;
  margin-left: 0.5em;
}

.menueItem_telegram {
  background-color: #0088cc;
  width: 80px;
  margin-left: 25px;
}
</style>

