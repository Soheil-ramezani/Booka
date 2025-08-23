<template>
  <!-- ForgotPassword -->
    <section
      class="signupSection right-section px-[20%] flex flex-col justify-center items-center gap-5"
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
        <!-- UserEmail -->
        <div class="form-login w-[90%]">
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="UserEmail"
              name="UserEmail"
              id="UserEmail"
              required
            />
            <label for="UserEmail" class="form__label">Enter your Email</label>
          </div>
        </div>
      </form>
      <div
        class="Login-btns w-full flex flex-col items-center justify-center gap-5"
      >
        <button class="submit-btn w-[65%] py-5 text-nowrap min-w-[215px]">
          Send code
        </button>
        <!--  -->
        <div class="flex flex-row w-full items-center justify-center">
          <hr class="Login-btns__hr w-[20%] border-y-[1px] border-slate-400" />
          <p class="Login-btns__p mx-5 text-slate-500">OR</p>
          <hr class="Login-btns__hr w-[20%] border-y-[1px] border-slate-400" />
        </div>
        <!--  -->
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
    </section>
</template>

<script>
export default {
name:"forgotForm"
}
</script>

<style>

</style>