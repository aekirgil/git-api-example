<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/">
          Welcome
        </nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/workflow">
          Workflow
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
nav {
  min-height: 50px;
  padding: 5px 60px;
  background: black;
  color: white;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
    font-size: 25px;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;

    li {
      padding-right: 40px;
    }
  }
}
</style>
