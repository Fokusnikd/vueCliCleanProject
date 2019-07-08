import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SuppliersTable from "./views/SuppliersTable";
import SuppliersForm from "./views/SuppliersForm";
import SuppliersEdit from "./views/SuppliersEdit";
import SuppliersHouses from "./views/SuppliersHouses";
import HouseTable from "./views/HouseTable";
import HousesForm from "./views/HousesForm";
import RegistrationUserForm from "./views/RegistrationUserForm";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/houses",
      name: "housesTable",
      component: HouseTable
    },
    {
      path: "/houses/add",
      name: "housesForm",
      component: HousesForm
    },

    {
      path: "/suppliers/add",
      name: "suppliersForm",
      component: SuppliersForm
    },

    {
      path: "/suppliers/edit/:userId",
      name: "suppliersEdit",
      component: SuppliersEdit
    },

    {
      path: "/suppliers/:userId",
      name: "suppliersHouses",
      component: SuppliersHouses
    },

    {
      path: "/suppliers",
      name: "suppliersTable",
      component: SuppliersTable
    },
    {
      path: "/registrationUserForm",
      name: "registrationUserForm",
      component: RegistrationUserForm
    },
  ]
});