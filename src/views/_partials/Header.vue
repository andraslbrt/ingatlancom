<template>
  <header class="shadow-sm">
    <nav id="mobile-navbar" class="navbar navbar-expand-md d-md-none bg-light a-nav ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobile-menu"
          aria-controls="mobile-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <BIconList width="1.2em" height="1.2em" />
        </button>
        <div class="collapse navbar-collapse mt-2" id="mobile-menu">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link px-3" :to="{ name: 'list' }">
                Lista
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-3" :to="{ name: 'favourites' }">
                Kedvencek
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
};
</script>
