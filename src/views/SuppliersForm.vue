<template>
  <div class="suppliersForm">
    <form @submit="handlebuttonclick($event)">
      <div class="form-group">
        <label for="exampleInputName">Name</label>
        <input
          type="text"
          v-model="nameValue"
          class="form-control"
          id="exampleInputName"
          placeholder="Your name"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputSurName">Surname</label>
        <input
          type="text"
          v-model="surNameValue"
          class="form-control"
          id="exampleInputSurName"
          placeholder="Your surname"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="text"
          v-model="mailValue"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        >
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputUserName">UserName</label>
        <input
          type="text"
          v-model="userNameValue"
          class="form-control"
          id="exampleInputUserName"
          placeholder="Enter your nickname"
        >
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "suppliersForm",
  data: function() {
    return {
      nameValue: "",
      surNameValue: "",
      mailValue: "",
      userNameValue: "",
      apiBaseUrl: "http://localhost:3000/api"
    };
  },
  methods: {
    handlebuttonclick: function(e) {
      e.preventDefault();

      var newSupplier = {
        first_name: this.nameValue,
        last_name: this.surNameValue,
        email: this.mailValue,
        username: this.userNameValue
      };
      axios
        .post(`${this.apiBaseUrl}/suppliers`, { supplier: newSupplier })
        .then(response =>
          console.log(`success response with ${response.status} code`)
        )
        .then(this.$router.go(-1));
    }
  },
  components: {}
};
</script>

