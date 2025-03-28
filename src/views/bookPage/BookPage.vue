<script setup>
import NavBar from "@/components/HeaderParts/Navbar/Navbar.vue";
import dragScroll from "@/components/dragScroll/dragScroll.vue";
</script>
<template>
  <div class="book-page">
    <NavBar />
    <main class="mt-[62.5px] flex flex-col items-center">
      <!-- BookDetails -->
      <div class="BookInfo grid grid-flow-col py-[5rem] px-[1%]">
        <!-- LeftCol -->
        <div class="leftCol">
          <!-- bookImg -->
          <div class="bookImg">
            <img
              src="../../assets/91hYnazD-oL.jpg"
              alt=""
              class="bookImg__img"
            />
          </div>
          <!-- bookBtns -->
          <div
            class="leftCol_btns mt-10 flex flex-row items-center justify-center pr-[20%]"
          >
            <button class="leftCol__btn mx-2 px-3 py-2">
              <span class="leftCol__span">Read sample</span>
            </button>
            <button class="leftCol__btn mx-2 px-3 py-2">
              <span
                class="leftCol__span flex flex-row items-center justify-between"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  fill="currentColor"
                >
                  <path
                    d="M6 20.1957V3.80421C6 3.01878 6.86395 2.53993 7.53 2.95621L20.6432 11.152C21.2699 11.5436 21.2699 12.4563 20.6432 12.848L7.53 21.0437C6.86395 21.46 6 20.9812 6 20.1957Z"
                  ></path>
                </svg>
                Audible sample
              </span>
            </button>
          </div>
        </div>
        <!-- centerCol -->
        <div class="centerCol">
          <!-- bookDetails -->
          <div
            class="bookDetails pt-5 h-full flex flex-col items-start justify-start"
          >
            <!-- firstLine -->
            <div>
              <h2>
                The Templar Legacy: A Novel (Cotton Malone Book 1)
                <span class="bookDetails__span text-slate-700">Edition</span>
              </h2>
            </div>
            <!-- second line -->
            <div>
              <span class="bookDetails__span text-slate-700">Author</span>
              <span class="bookDetails__span text-slate-700">Format</span>
            </div>
            <hr class="w-[98%] outline-slate-600 border-slate-600" />
            <!-- middle part -->
            <div class="pr-5">
              <p class="bookDetails__p mt-10">
                The Lost for Words Bookshop by Stephanie Butland is a
                compelling, irresistible, and heart-rending novel, perfect for
                all book lovers.
              </p>
              <br />
              <p class="bookDetails__p mb-10">
                <b>
                  "In The Lost for Words Bookshop, Stephanie Butland has created
                  a bibliophile's delight. Witty and irreverent, funny and sad,
                  this is a charming tribute to stories on the page and in our
                  lives--and the powers they can hold over us."
                  <br />—Matthew Sullivan author of Midnight at the Bright Ideas
                  Bookstore "Burns fiercely with love and hurt. A rare and
                  beautiful novel. <br />"—Linda Green, bestselling author of
                  While My Eyes Were Closed</b
                >
              </p>
            </div>
            <hr class="w-[98%] outline-slate-600 border-slate-600" />
            <!-- More infos -->
            <ol
              class="a-carousel mt-8 flex flex-row items-center justify-around w-full"
            >
              <!-- Print length -->
              <li
                class="a-carousel__li flex flex-col items-center justify-around"
              >
                <span class="a-carousel__span">Print length</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path
                    d="M13 21V23.5L10 21.5L7 23.5V21H6.5C4.567 21 3 19.433 3 17.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V20C21 20.5523 20.5523 21 20 21H13ZM13 19H19V16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19H7V17H13V19ZM19 14V4H6V14.0354C6.1633 14.0121 6.33024 14 6.5 14H19ZM7 5H9V7H7V5ZM7 8H9V10H7V8ZM7 11H9V13H7V11Z"
                  ></path>
                </svg>
                <span class="a-carousel__span"><b>497 pages</b></span>
              </li>
              <!-- Language -->
              <li
                class="a-carousel__li flex flex-col items-center justify-around"
              >
                <span class="a-carousel__span">Language</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path
                    d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                  ></path>
                </svg>
                <span class="a-carousel__span"><b>English</b></span>
              </li>
              <!-- Publisher -->
              <li
                class="a-carousel__li flex flex-col items-center justify-around"
              >
                <span class="a-carousel__span">Publisher</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path
                    d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z"
                  ></path>
                </svg>
                <span class="a-carousel__span"><b>ABC</b></span>
              </li>
              <!-- Publication year -->
              <li
                class="a-carousel__li flex flex-col items-center justify-around"
              >
                <span class="a-carousel__span">Publication year</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path
                    d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                  ></path>
                </svg>
                <span class="a-carousel__span"><b>2007</b></span>
              </li>
            </ol>
            <div class="mt-[3%] ml-[3%]">
              <a href="#" class="a-carousel__a link">See all details</a>
              <a href="#" class="flex flex-row items-center link"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path
                    d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3ZM12 17H14C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5H10C6.68629 5 4 7.68629 4 11C4 14.61 6.46208 16.9656 12 19.4798V17Z"
                  ></path>
                </svg>
                Report an issue with this product or seller</a
              >
            </div>
          </div>
        </div>
        <!--rightCol  -->
        <div class="rightCol">
          <!-- BookPrice -->
          <div class="bookPrice flex flex-col items-center py-10 px-5">
            <div class="prices grid w-full gap-x-5 gap-y-3">
              <div
                class="TypesPrice TypesPrice--active px-2 py-1 h-fit flex flex-col justify-center items-start"
              >
                <span class="TypesPrice__span"> <b>Kindle</b> </span>
                <p class="TypesPrice__p">$30</p>
                <span class="TypesPrice__span"> Available instantly </span>
              </div>
              <div
                class="TypesPrice px-2 py-1 h-fit flex flex-col justify-center items-start"
              >
                <span class="TypesPrice__span"> <b>AudioBook</b> </span>
                <p class="TypesPrice__p">$0.99</p>
                <span class="TypesPrice__span"> with membership</span>
              </div>
              <div
                class="TypesPrice px-2 py-1 h-fit flex flex-col justify-center items-start"
              >
                <span class="TypesPrice__span"> <b>Hardcover</b> </span>
                <p class="TypesPrice__p">$0.99</p>
              </div>
              <div
                class="TypesPrice px-2 py-1 h-fit flex flex-col justify-center items-start"
              >
                <span class="TypesPrice__span"> <b>Paperback</b> </span>
                <p class="TypesPrice__p">$0.99</p>
              </div>
            </div>
            <hr class="my-10 w-[98%] outline-slate-600 border-slate-600" />
            <div class="flex flex-col items-center">
              <button class="bookPrice__btn w-11/12 p-3">
                Buy now with 1-Click
              </button>
              <span class="bookPrice__span mt-5 text-center"
                >By placing your order,
                <b>you're purchasing a license to the content</b> and you agree
                to the
                <a href="#" class="bookPrice__a"
                  >Kindle Store Terms of Use.</a
                ></span
              >
              <hr class="my-10 w-[98%] outline-slate-600 border-slate-600" />
              <img
                src="https://m.media-amazon.com/images/I/21EzREA+0yL.svg"
                alt=""
                class="bookPrice__img"
              />
              <span class="bookPrice__span mt-5 text-center">
                Unlimited reading. Over 4 million titles.
              </span>
              <button class="bookPrice__btn w-11/12 p-5 mt-3">
                Read for Free
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr class="w-[90%]  outline-slate-600 border-slate-600" />
      <dragScroll/>
    </main>
  </div>
</template>

<script>
export default {
  name: "BookPage",
};
</script>
