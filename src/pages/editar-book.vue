<template>
  <div>
    <h1>Actualizar persona con ID: {{ id }}</h1>
  </div>
  <br />
  <table>
    <tr>
      <td><label for="">Isbn: </label></td>
      <td><input class="form-control" type="text" required v-model="isbn" /></td>
    </tr>
    <tr>
      <td><label for="">Title: </label></td>
      <td><input class="form-control" type="text" required v-model="title" /></td>
    </tr>
    <tr>
      <td><label for="">Author: </label></td>
      <td><input class="form-control" type="text" required v-model="author" /></td>
    </tr>
    <tr>
      <td><label for="">Price: </label></td>
      <td><input class="form-control" type="text" required v-model="price" /></td>
    </tr>
  </table>
  <br />
  <table>
    <tr>
      <td>
        <button class="btn btn-outline-success" @click="actualizar()">Actualizar</button>
      </td>
    </tr>
    <tr>
      <td>
        <label for="">{{ mensaje }}</label>
      </td>
    </tr>
  </table>
</template>

<script>
import { actualizarFachada, buscarPorIdFachada } from "@/js/ProcesarBooks";

export default {
  data() {
    return {
      id: null,
      isbn: null,
      title: null,
      author: null,
      price: null,
      mensaje: null,
    };
  },
  props: {
    idProp: Number,
  },
  methods: {
    async actualizar() {
      const book = {
        id: this.id,
        isbn: this.isbn,
        title: this.title,
        author: this.author,
        price: this.price,
      };

      if (this.isbn == null || this.title == null || this.author == null || this.price == null) {
        this.mensaje = "Llene todos los parametros";
      } else {
        await actualizarFachada(this.id, book);
        this.mensaje = "Se ha actualizado correctamente";
        this.regresar();
      }
    },
    regresar() {
      this.$router.push({ name: "todos" });
    },
    async datosBook(id) {
      var book = await buscarPorIdFachada(id);
      this.id = book.id;
      this.isbn = book.isbn;
      this.title = book.title;
      this.author = book.author;
      this.price = book.price;
    },
  },
  mounted() {
    this.datosBook(this.idProp);
  },
};
</script>
<style>
table {
  margin: 0 auto;
}
</style>
