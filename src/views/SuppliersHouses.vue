<template>
  <div class="suppliersHouses">
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Город</th>
            <th scope="col">Адрес</th>
            <th scope="col">Этажность</th>
            <th scope="col">Год</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(house,index) in suppliersHouses" :key="index">
            <td>{{house.city}}</td>
            <td>{{house.address}}</td>
            <td>{{house.floors}}</td>
            <td>{{house.year}}</td>
          </tr>
        </tbody>
      </table>
      <router-link to="/suppliers/add">Перейти к suppliers</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "suppliersHouses",
  data() {
    return {
      suppliersHouses: [],
      supplierId: this.$route.params.userId,
      apiBaseUrl: "http://localhost:3000/api"
    };
  },
  mounted() {
    axios
      .get(`${this.apiBaseUrl}/houses/${this.supplierId}`)
      .then(response =>
        console.log(
          'houses for "f8ec36d1-1f04-4bd9-91d6-435448246ef5"',
          (this.suppliersHouses = response.data.houses)
        )
      );
  },
  components: {}
};
</script>
