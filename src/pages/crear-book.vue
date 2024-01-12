<template>
  <div>
    <h1>Registrar book:</h1>
    <br />
    <table>
      <tr>
        <td><label for="">Isbn: </label></td>
        <td><input class="form-control" v-model="isbn" required type="text" /></td>
      </tr>
      <tr>
        <td><label for="">Title: </label></td>
        <td><input class="form-control" v-model="title" required type="text" /></td>
      </tr>
      <tr>
        <td><label for="">Author: </label></td>
        <td><input class="form-control" v-model="author" required type="text" /></td>
      </tr>
      <tr>
        <td><label for="">Price: </label></td>
        <td><input class="form-control" v-model="price" required type="text" /></td>
      </tr>
    </table>

    <table>
      <tr>
        <td>
          <button class="btn btn-outline-success" @click="Insertar()">Guardar</button>
        </td>
      </tr>
      <tr>
        <td>
          <label for="">{{ mensaje }}</label>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { insertarFachada } from "@/js/ProcesarBooks";

export default {
  data() {
    return {
      isbn: null,
      title: null,
      author: null,
      price: null,
      mensaje: null,
    };
  },
  methods: {
    async Insertar() {
      const b = { isbn: this.isbn, title: this.title, author: this.author , price: this.price };
      if (this.isbn == null || this.title == null || this.author == null) {
        this.mensaje = "Llene todos los datos";
      } else {
        await insertarFachada(b);
        this.mensaje = "Se ha ingresado correctamente";
        this.isbn == null;
        this.title == null;
        this.author == null;
        this.price == null;
      }
    },
  },
};
</script>

<style>
table {
  margin: 0 auto;
}
</style>
