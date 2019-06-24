<template>
  <form @submit="handlebuttonclick($event)">
    <div class="form-group">
      <label for="exampleInputCity">City</label>
      <input
        type="text"
        v-model="cityValue"
        class="form-control"
        id="exampleInputCity"
        placeholder="Your city"
      >
    </div>
    <div class="form-group">
      <label for="exampleInputAddress">Adress</label>
      <input
        type="text"
        v-model="addressValue"
        class="form-control"
        id="exampleInputAddress"
        placeholder="Address"
      >
    </div>
    <div class="form-group">
      <label for="exampleInputFloor">Floor</label>
      <input
        type="text"
        v-model="floorValue"
        class="form-control"
        id="exampleInputFloor"
        placeholder="Floor"
      >
    </div>

    <div class="form-group">
      <label for="exampleInputHouseYear">Year</label>
      <input
        type="text"
        v-model="yearValue"
        class="form-control"
        id="exampleInputHouseYear"
        placeholder="Year"
      >
    </div>
    <select class="custom-select custom-select-lg mb-3" v-model="selected">
      <option
        v-for="(supplier, index) in suppliersFromServer"
        v-bind:key="index"
        :value="supplier.id"
      >{{supplier.first_name}}</option>
    </select>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "housesForm",
  data() {
    return {
      selected: [],
      suppliersFromServer: [],
      cityValue: "",
      addressValue: "",
      floorValue: "",
      yearValue: "",
      apiBaseUrl: "http://localhost:3000/api"
    };
  },
  methods: {
    handlebuttonclick: function(e) {
      e.preventDefault();

      var newHouse = {
        city: this.cityValue,
        address: this.addressValue,
        supplierId: this.selected,
        floors: this.floorValue,
        year: this.yearValue
      };
      axios
        .post(`${this.apiBaseUrl}/houses`, { house: newHouse })
        .then(response =>
          console.log(`success response with ${response.status} code`)
        )
        .then(this.$router.go(-1));
    }
  },
  mounted() {
    axios
      .get(`${this.apiBaseUrl}/suppliers`)
      .then(response => (this.suppliersFromServer = response.data.suppliers));
  },
  components: {}
};
</script>



