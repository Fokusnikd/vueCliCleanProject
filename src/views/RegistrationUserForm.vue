<template>
  <form class="needs-validation">
    <div class="form-row">
      <div class="col-md-6 mb-6">
        <label for="firstName">Имя</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="Имя"
          v-model="firstName"
          :class="{'is-invalid':$v.firstName.$error,
          'is-valid': !$v.firstName.$error && $v.firstName.$dirty}"
          @blur="$v.firstName.$touch()"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-6 mb-6">
        <label for="secondName">Фамилия</label>
        <input
          type="text"
          class="form-control"
          id="secondName"
          placeholder="Фамилия"
          v-model="secondName"
          :class="{'is-invalid':$v.secondName.$error,
          'is-valid': !$v.secondName.$error && $v.secondName.$dirty}"
          @blur="$v.secondName.$touch()"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
    </div>
    <div class="form-row">
      <div class="col-md-12 mb-12">
        <label for="cityValue">City</label>
        <input
          type="text"
          class="form-control"
          id="cityValue"
          v-model="cityValue"
          :class="{'is-invalid':$v.cityValue.$error,
          'is-valid': !$v.cityValue.$error && $v.cityValue.$dirty}"
          @blur="$v.cityValue.$touch()"
          placeholder="City"
          required
        />
        <div class="invalid-feedback" v-if="!$v.cityValue.required">Please enter the city.</div>
        <div
          class="invalid-feedback"
          v-if="!$v.cityValue.minLength"
        >Min length of city is {{$v.cityValue.$params.minLength.min}}.</div>
      </div>
    </div>
    <button class="btn btn-primary" type="submit">Submit form</button>
  </form>
</template>


<script>
import { minLength, required } from "vuelidate/lib/validators";
export default {
  name: "registrationUserForm",
  data: function() {
    return {
      firstName: "",
      secondName: "",
      cityValue: ""
    };
  },
  // валидация
  validations: {
    firstName: {
      minLength: minLength(4),
      required
    },
    secondName: {
      minLength: minLength(4),
      required
    },
    cityValue: {
      minLength: minLength(4),
      required
    }
  }
};
</script>
