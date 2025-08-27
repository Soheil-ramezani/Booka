<template>
  <section class="user-Dashboard flex items-center justify-center w-5/6 min-h-[60vh]">
    <form action="#" class="Dashboard-list flex flex-col justify-center gap-7 w-full text-nowrap">
      <!-- UserId -->
      <div class="List-rows flex flex-row justify-start items-center pl-[5%]">
        <label for="userId">Your Id :</label>
        <input type="text" class="List__input w-2/4" :value="this.singleUser.userid" name="userId" disabled />
      </div>
      <!-- Username -->
      <div class="List-rows flex flex-row justify-start items-center pl-[5%]">
        <label for="username">Your username:</label>
        <input type="text" class="List__input w-2/4" :value="this.singleUser.username" name="username" disabled />
      </div>
      <!-- userPhoneNumber -->
      <div class="List-rows flex flex-row justify-start items-center pl-[5%]">
        <label for="userPhoneNumber">Your phone number:</label>
        <input type="tel" class="List__input w-2/4" :value="this.singleUser.userPhone" name="userPhoneNumber" disabled />
      </div>
      <!-- UserEmail -->
      <div class="List-rows flex flex-row justify-start items-center pl-[5%]">
        <label for="user-Email">Your Email:</label>
        <input
          type="email"
          class="List__input w-2/4"
          :value="this.singleUser.userEmail"
          name="user-Email"
          disabled
        />
      </div>
      <!-- UserAddress -->
      <div class="List-rows flex flex-row justify-start items-center pl-[5%]">
        <label for="user-address">Your address:</label>
        <input type="text" class="List__input w-2/4" :value="this.singleUser.userAddress" name="user-address" disabled />
      </div>
      <!-- ChangeButton -->
       <div class="List-rows flex flex-row justify-center items-center ">
        <button class="List__button  p-3">Edit your information</button>
       </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "userPanelDashboard",
  data(){
    return{
        singleUser:'',
        userChangeInfo:null,
    }
  },
  beforeMount() {
  fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then((data) => {
      // choose a random user
      const userdata = data.users[Math.floor(Math.random() * data.users.length)];
      // user data structure
     const user = {
          userid:userdata.id,
          username: userdata.firstName + userdata.lastName,
          userEmail: userdata.email,
          userPhone:userdata.phone,
          userAddress:
            userdata.address.country +
            "," +
            userdata.address.state +
            "," +
            userdata.address.city +
            "," +
            userdata.address.address,
        };

      this.singleUser = user;
      
    })
    .catch((error) => console.error('Error fetching users:', error));
    
},
methods:{

}
}
</script>

<style>
</style>