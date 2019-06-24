<template>
  <div class="suppliersTable">
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(supplier, index) in suppliersFromServer" v-bind:key="index">
            <td>
              <router-link :to="'/suppliers/'+supplier.id">{{supplier.first_name}}</router-link>
            </td>
            <td>{{supplier.last_name}}</td>
            <td>{{supplier.username}}</td>
            <td>
              <router-link :to="'/suppliers/edit/'+supplier.id">
                <button class="btn btn-outline-primary">Edit Supplier</button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link to="/suppliers/add">
        <button class="btn btn-primary">New Supplier</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "suppliersTable",
  data() {
    return {
      suppliersFromServer: [],
      apiBaseUrl: "http://localhost:3000/api"
    };
  },
  mounted() {
    axios
      .get(`${this.apiBaseUrl}/suppliers`)
      .then(response => (this.suppliersFromServer = response.data.suppliers));
  }
};
</script>

});