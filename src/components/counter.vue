<template>
  <div>
    <input type="button" value="Increment" @click="increment" />
    <input type="button" value="Decrement" @click="decrement" />
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  name: "counter",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count += 2;
    },
    decrement() {
      this.count -= 1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
