<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Город</th>
          <th scope="col">Адресс</th>
          <th scope="col">Этаж</th>
          <th scope="col">Год</th>
          <th scope="col">Id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(house, index) in housesFromServer" :key="index">
          <td>{{house.city}}</td>
          <td>{{house.address}}</td>
          <td>{{house.floors}}</td>
          <td>{{house.year}}</td>
          <td>{{house.supplierId}}</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/houses/add">
      <button class="btn btn-primary">New House</button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "housesTable",
  data() {
    return {
      housesFromServer: [],
      apiBaseUrl: "http://localhost:3000/api"
    };
  },
  mounted() {
    axios
      .get(`${this.apiBaseUrl}/houses`)
      .then(response =>
        console.log(
          "all houses",
          (this.housesFromServer = response.data.houses)
        )
      );
  },

  components: {}
};
</script>
