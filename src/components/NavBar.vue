<template lang="">
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand me-5" to="/">PAE</router-link>
      <div class="dropdown me-4">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Books</a>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
          <li>
            <router-link class="dropdown-item" to="/books/crear">Registrar</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/books/buscar">Buscar</router-link>
        </li>
          <li>
            <router-link class="dropdown-item" to="/books">Listar todos</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'navBar',
}
</script>
<style lang="">
    
</style>