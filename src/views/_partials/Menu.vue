<template>
  <div class="card a-card">
    <div class="card-body">
      <ul class="nav flex-column a-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'list' }">
            <BIconListUl class="me-2" />
            Lista
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'favourites' }">
            <BIconStarFill class="me-2" />
            Kedvencek
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
};
</script>
