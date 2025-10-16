<template>
  <!-- Login -->
  <section
    class="LoginSection right-section px-[20%] flex flex-col justify-center items-center gap-5"
    :class="{ 'w-7/12': mediaWidth >= 900 }"
  >
    <div class="LoginTitles text-center">
      <h1 class="h2Style pacifico-regular mb-7">Welcome Back to BOOKA</h1>
      <h2 class="Login-title__p mb-5">
        A World of the Best Books, at your fingertips
      </h2>
    </div>
    <!-- Forms -->
    <form
      action="#"
      class="Login__form w-full flex flex-col justify-center items-center pt-[20px] pb-[40px] min-w-[390px]"
    >
      <!-- UserName -->
      <div class="form-login w-[90%]">
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="UserName"
            name="name"
            id="name"
            v-model="userName"
            required
          />
          <label for="name" class="form__label">UserName</label>
        </div>
        <P v-show="ShowUsernameError" class="text-red-500"
          >username must have at least 7 characters!</P
        >
      </div>
      <!-- Password -->
      <div class="form-login w-[90%]">
        <div class="form__group field flex flex-row items-center">
          <input
            ref="LoginPassword"
            type="password"
            class="form__field"
            placeholder="Password"
            name="Password"
            id="Password"
            v-model="userPassword"
            required
          />

          <label for="Password" class="form__label"> Password </label>
          <div class="flex items-center pt-5">
            <svg
              @click="changeInputType()"
              v-show="showLoginPassword"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              style="cursor: pointer"
              fill="rgba(159,207,248,1)"
            >
              <path
                d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"
              ></path>
            </svg>
            <!-- CloseEye -->
            <svg
              @click="changeInputType()"
              v-show="!showLoginPassword"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              style="cursor: pointer"
              fill="rgba(159,207,248,1)"
            >
              <path
                d="M17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968ZM5.9356 7.3497C4.60673 8.56015 3.6378 10.1672 3.22278 12.0002C4.14022 16.0521 7.7646 19.0002 12.0003 19.0002C13.5997 19.0002 15.112 18.5798 16.4243 17.8384L14.396 15.8101C13.7023 16.2472 12.8808 16.5002 12.0003 16.5002C9.51498 16.5002 7.50026 14.4854 7.50026 12.0002C7.50026 11.1196 7.75317 10.2981 8.19031 9.60442L5.9356 7.3497ZM12.9139 14.328L9.67246 11.0866C9.5613 11.3696 9.50026 11.6777 9.50026 12.0002C9.50026 13.3809 10.6196 14.5002 12.0003 14.5002C12.3227 14.5002 12.6309 14.4391 12.9139 14.328ZM20.8068 16.5925L19.376 15.1617C20.0319 14.2268 20.5154 13.1586 20.7777 12.0002C19.8603 7.94818 16.2359 5.00016 12.0003 5.00016C11.1544 5.00016 10.3329 5.11773 9.55249 5.33818L7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925ZM11.7229 7.50857C11.8146 7.50299 11.9071 7.50016 12.0003 7.50016C14.4855 7.50016 16.5003 9.51488 16.5003 12.0002C16.5003 12.0933 16.4974 12.1858 16.4919 12.2775L11.7229 7.50857Z"
              ></path>
            </svg>
          </div>
        </div>
        <P v-show="ShowPasswordError" class="text-red-500"
          >password must have at least 5 characters!</P
        >
      </div>
    </form>
    <!-- ForgotPassword -->
    <div class="Login-forgotPassword ml-10 self-start">
      <RouterLink to="/LogIn/forgotForm">Forgot password?</RouterLink>
    </div>
    <!-- bottom Buttons -->
    <div
      class="Login-btns w-full flex flex-col items-center justify-center gap-5"
    >
    <!-- for user panel -->
      <RouterLink 
        to="/userPanel"
        v-show="userName.length >= 7 && userPassword.length >= 5 && userName!=='manager'"
        class="w-full flex items-center justify-center"
      >
        <button
          
          class="submit-btn w-[65%] py-5 text-nowrap min-w-[215px]"
        >
          Log in
        </button>
      </RouterLink>
      <!-- for manger panel -->
       <RouterLink 
       v-show="userPassword.length >= 5 && userName=='manager'"
        to="/managerPanel"
        class="w-full flex items-center justify-center"
        @click="validationForm()"
      >
        <button
          class="submit-btn w-[65%] py-5 text-nowrap min-w-[215px]"
        >
          Log in
        </button>
      </RouterLink>
      <!-- error btn -->
      <button
        v-show="userName.length < 7 || userPassword.length < 5"
        class="submit-btn w-[65%] py-5 text-nowrap min-w-[215px]"
        @click="validationForm()"
      >
        Log in
      </button>
      <!-- main or -->
      <div class="flex flex-row w-full items-center justify-center">
        <hr class="Login-btns__hr w-[20%] border-y-[1px] border-slate-400" />
        <p class="Login-btns__p mx-5 text-slate-500">OR</p>
        <hr class="Login-btns__hr w-[20%] border-y-[1px] border-slate-400" />
      </div>
      <!-- continue with google -->
      <button
        class="google-btn bg-slate-200 w-[65%] py-5 flex items-center justify-center text-nowrap min-w-[215px]"
      >
        <lord-icon
          src="https://cdn.lordicon.com/smafogdu.json"
          trigger="hover"
          state="hover-draw"
          colors="primary:#121331,secondary:#000000"
          style="width: 20px; height: 20px"
        >
        </lord-icon>
        Continue with Google
      </button>
    </div>
    <!-- Create account -->
    <div
      class="createAccount flex flex-row items-center justify-center mt-5 gap-3"
    >
      <p>Don't have an account?</p>
      <RouterLink
        to="/LogIn/signUpForm"
        class="createAccount__a"
        @click="changeForm()"
        >Sign up</RouterLink
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "logInForm",
  data() {
    return {
      showLoginPassword: false,
      userName: "",
      ShowUsernameError: false,
      userPassword: "",
      ShowPasswordError: false,
    };
  },
  methods: {
    changeInputType() {
      if (this.$refs.LoginPassword.type == "password") {
        this.$refs.LoginPassword.type = "text";
        this.showLoginPassword = true;
      } else {
        this.$refs.LoginPassword.type = "password";
        this.showLoginPassword = false;
      }
    },
    validationForm() {
      if (this.userName.length < 7 && this.userPassword.length < 5) {
        this.ShowUsernameError = true;
        this.ShowPasswordError = true;
      } else if (this.userName.length < 7 && this.userPassword.length >= 5) {
        this.ShowUsernameError = true;
        this.ShowPasswordError = false;
      } else if (this.userName.length >= 7 && this.userPassword.length < 5) {
        this.ShowUsernameError = false;
        this.ShowPasswordError = true;
      }
    },
  },
};
</script>

<style>
</style>