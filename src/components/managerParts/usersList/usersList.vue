<template>
  <section
    class="usersList flex justify-center overflow-scroll"
    :class="{
      'w-5/6 ml-[16.666667%]': MediaSize.MediaWidth >= 900,
      'w-full': MediaSize.MediaWidth < 900,
    }"
  >
    <table class="usersList-table w-[90%] table-auto my-10">
      <thead class="table-header">
        <tr class="table-header__tr">
          <th class="table-header__th">id</th>
          <th class="table-header__th" v-if="MediaSize.MediaWidth >= 400">name</th>
          <th class="table-header__th">username</th>
          <th class="table-header__th">phone</th>
          <th class="table-header__th" v-if="MediaSize.MediaWidth >= 970">Email</th>
          <th class="table-header__th" v-if="MediaSize.MediaWidth >= 580">address</th>
          <th class="table-header__th">postal code</th>
          <th class="table-header__th">delete user</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr class="table-body__tr" v-for="user in users" :key="user.id">
          <th class="table-body__th">{{ user.id }}</th>
          <th class="table-body__th" v-if="MediaSize.MediaWidth >= 400">{{ user.firstName + user.lastName }}</th>
          <th class="table-body__th">{{ user.username + user.age }}</th>
          <th class="table-body__th">{{ user.phone }}</th>
          <th class="table-body__th" v-if="MediaSize.MediaWidth >= 970">
            {{ user.email }}
          </th>
          <th class="table-body__th" v-if="MediaSize.MediaWidth >= 580">
            {{ user.address.address + "," + user.address.city }}
          </th>
          <th class="table-body__th">{{ user.address.postalCode }}</th>
          <th class="table-body__th">
            <button @click="deleteUser(user)" class="deleteUser__btn px-4">
              delete
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { useMediaStore } from "@/stores/counter";
export default {
  name: "usersList",
  data() {
    return {
      users: null,
      MediaSize: useMediaStore(),
    };
  },
  beforeMount() {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.users = data.users;
      })
      .catch((error) => console.error("Error fetching users:", error));
  },
  methods: {
    deleteUser(user) {
      const userIdx = this.users.indexOf(user);
      this.users.splice(userIdx, 1);
      console.log(this.users);
    },
  },
};
</script>

<style>
</style>