<template>
  <div>
    <h2>Cats for Adoption</h2>
    <b-table striped hover :items="cats">
      <template slot="name" slot-scope="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/pet/cats/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import {mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
      ...mapState([
          'cats'
          ])
  }
};
</script>
