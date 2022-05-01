<template>
  <div>
<!--    <div class="spot">{{ `${custom} ${title}` }}</div>-->
    <div class="spot">{{ `${user_name} ${user_email}` }}</div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import axios from 'axios';

export default {
  name: 'AsyncSetupComponent',
  // async setup function returned a Promise and component with this kind of setup should be nested
  // (set, placed) in/inside a Suspense in order to be rendered.
  async setup() {
    const custom = computed(() => Math.round(Math.random() * 100));
    // const { id, title, body, userId } = await fetch('https://jsonplaceholder.typicode.com/posts/1/')
    //   .then((response) => response.json())
    //   .then((json) => json);
    // return { custom, id, title, body, userId };

    // to try error handling
    const payload = {
      "token": "naT4OhSkdqf8uEVzARmlmA",
      // "parameters": {
      //   "code": 404,
      //   "delay": 5,
      // },
      "data": {
        "user_name": "nameFirst",
        "user_email": "internetEmail",
        "_repeat": 3
      }
    };

    let result = ref(null);

    result = await axios({
      method: 'POST',
      url: 'https://app.fakejson.com/q',
      data: payload
    }).then((response) => response)
      .catch((error) => {
      console.log(error);
      return error;
    });

    return { custom, result }; // TODO: doesnt work, wrong data structure

    // ↓ this variant makes an error to occur and it becomes possible to see error handling
    // return { custom, ...result.value[0] };
  },
}
</script>

<style>

</style>
