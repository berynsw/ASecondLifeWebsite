<template>
  <div class='container'>
      <div class='upcycles'>
        
        <!-- dropdown list of all the upcycles in the category -->
        <!-- unique link sends current upcycle selected in dropdown to the upcycle template! -->
        <ejs-dropdownlist 
          :dataSource='upcycles' 
          :fields='fields'
          :to="`./${text}`"
          placeholder='Select a plastic upcycle'
          v-model='routeName'
        >
        </ejs-dropdownlist>
        <router-link class="linkButton" :to="`./${routeName}`">Create</router-link>

      </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
  Vue.use(DropDownListPlugin);

  export default Vue.extend({
      name: 'PlasticDD',
      data () {
        return {
          upcycles: [],
          fields : { text: 'upcycleName', value: 'upcycleName'},
          routeName: null
        }
      },
    mounted(){
      fetch('http://localhost:3000/upcycles')
        .then(response => response.json())
        .then(data => {
          this.upcycles = data.filter(d => d.category == "Plastic");
        })
        .catch(err => console.log(err.message))
    }
  });

</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
.container{
  background-color: #FAF2EC;
  border-style: solid;
  border-color:#48596C;
  color: black;
  height: 500px;
}
.linkButton{
  text-decoration: none;
  color: black;
  border: 5px solid transparent;
  border-radius: 25px;
  background-color:rgb(173, 173, 173);
  border-color: rgb(73, 73, 73);

  font-size: 10pt;
  text-align: center;
  width: 300px;
  font-family: 'Courier New', Courier, monospace;
}
.linkButton.active, 
.linkButton:hover{
    background-color: #48596C;
    border-color: #c58db7;
    opacity: 90%;
}
</style>