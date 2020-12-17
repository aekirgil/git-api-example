<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <nuxt-link exact to="/">
          Welcome
        </nuxt-link>
      </li>
      <li class="navigation__item">
        <nuxt-link exact to="/workflow">
          Workflow
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  $parent: &;
  min-height: 50px;
  padding: 5px 60px;
  background: black;
  color: white;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;

  #{$parent}__list {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;

    #{$parent}__item {
      padding-right: 40px;

      a {
        color: white;
        text-decoration: none;
        font-size: 25px;
      }
    }
  }
}
</style>
