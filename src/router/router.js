import BuscarBook from "@/pages/buscar-book.vue";
import CrearBook from "@/pages/crear-book.vue";
import EditarBook from "@/pages/editar-book.vue";
import Error404 from "@/pages/error404.vue";
import TodosBook from "@/pages/todos-book.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: TodosBook
  },
  {
    path: '/books/crear',
    name: 'crearBook',
    component: CrearBook
  },
  {
    path: '/books',
    name: 'todos',
    component: TodosBook
  },
  {
    path: '/books/buscar',
    name: 'buscarBook',
    props: true,
    component: BuscarBook
  },
  {
    path: '/books/editar/:idProp',
    name: 'editarBook',
    props: true,
    component: EditarBook
  },
  {
    path: '/error',
    name: 'error404',
    component: Error404
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
