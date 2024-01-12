<template>
    <div>
        <h1>Buscar por ID</h1>
        <br />
        <table>
            <tr>
                <td><label for=""> ID: </label></td>
                <td><input class="form-control" required v-model="id" type="text" /></td>
            </tr>
        </table>
        <br />

        <button class="btn btn-outline-success" @click="mostrarLista()">
            Buscar Book
        </button>

        <TodasPersona v-if="mostrarB" :datos="lista"></TodasPersona>
    </div>
</template>

<script>
import { buscarPorIdFachada } from "@/js/ProcesarBooks";
import TodasPersona from "./todos-book.vue";

export default {
    components: {
        TodasPersona,
    },
    data() {
        return {
            lista: [],
            mostrarB: false,
            mensaje: null,
            id: null,
        };
    },
    methods: {
        async mostrarLista() {
            this.lista=[]

             const tmp = await buscarPorIdFachada(this.id);
            //this.lista = JSON.parse("[" + JSON.stringify(tmp) + "]");
            this.lista.push(tmp)
            console.log(this.lista);
            if (this.lista.length >= 1) {
                this.mostrarB = true;
                this.mensaje = "";
            } else {
                this.mostrarB = false;
                this.mensaje = "No existe Persona";
            }
        },
    },
};
</script>

<style></style>
