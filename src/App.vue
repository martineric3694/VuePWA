<template>
  <div>
    <header class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">SPA Pricing</a>
        <nav class="navbar-nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/pricing" class="nav-link">Pricing</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>
      </div>
    </header>

    <main class="container mt-5">
      <router-view></router-view>
    </main>

    <footer class="bg-dark text-white text-center py-3 mt-5">
      &copy; 2024 Pricing SPA. All rights reserved.
    </footer>
  </div>
</template>
