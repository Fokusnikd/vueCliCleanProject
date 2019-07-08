<template>
  <div id="app">
    <div class="row">
      <div class="col-4">
        <div class="list-group" id="list-tab" role="tablist">
          <router-link to="/">
            <button
              class="list-group-item list-group-item-action"
              @click="whoTheActive(1)"
              :class="{'active': theActive == 1}"
              id="list-home-list"
              data-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="home"
            >Home</button>
          </router-link>
          <router-link to="/registrationUserForm">
            <button
              class="list-group-item list-group-item-action"
              @click="whoTheActive(2)"
              :class="{'active': theActive == 2}"
              id="list-home-list"
              data-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="home"
            >Home</button>
          </router-link>
          <router-link to="/houses">
            <button
              class="list-group-item list-group-item-action"
              @click="whoTheActive(3)"
              :class="{'active': theActive == 3}"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              aria-controls="home"
            >Home</button>
          </router-link>
          <router-link to="/houses/add">
            <button
              class="list-group-item list-group-item-action"
              @click="whoTheActive(4)"
              :class="{'active': theActive == 4}"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              aria-controls="home"
            >Home</button>
          </router-link>
          <router-link to="/suppliers">
            <button
              class="list-group-item list-group-item-action"
              @click="whoTheActive(5)"
              :class="{'active': theActive == 5}"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              aria-controls="home"
            >Home</button>
          </router-link>
          <router-link to="/suppliers/add">
            <button
              class="list-group-item list-group-item-action"
              @click="whoTheActive(6)"
              :class="{'active': theActive == 6}"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              aria-controls="home"
            >Home</button>
          </router-link>
          <router-link to="/suppliers/edit/:userId">
            <button
              class="list-group-item list-group-item-action"
              @click="whoTheActive(7)"
              :class="{'active': theActive == 7}"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              aria-controls="home"
            >Home</button>
          </router-link>
          <router-link to="/suppliers/:userId">
            <button
              class="list-group-item list-group-item-action"
              @click="whoTheActive(8)"
              :class="{'active': theActive == 8}"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              aria-controls="home"
            >Home</button>
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="list-home"
            role="tabpanel"
            aria-labelledby="list-home-list"
          >
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      theActive: ""
    };
  },
  methods: {
    whoTheActive: function(num) {
      this.theActive = num;
      return this.theActive;
    }
  }
};
</script>

