<template>
  <div class='container'>
      <div class='upcycles'>
        
        <!-- dropdown list of all the upcycles in the category -->
        <!-- unique link sends current upcycle selected in dropdown to the upcycle template! -->
        <ejs-dropdownlist 
          class="dropdown"
          :dataSource='data' 
          :fields='fields'
          placeholder='Select a glass upcycle'
          v-model='routeName'
          :change='enableCreateButton'
        >
        </ejs-dropdownlist>
        <router-link class="linkButton" v-if='var1' :to="`./${routeName}`">Create</router-link>

      </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
  Vue.use(DropDownListPlugin);

  export default Vue.extend({
    name: 'GlassDD',
    props: {
      data: []
    },
    data () {
      return {
        fields : { text: 'upcycleName', value: 'upcycleName'},
        routeName: null,
        var1: false
      }
    },
    methods: {
      enableCreateButton: function(){
        this.var1 = true;
      },
    },
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

/* can't edit style on the dropdown?? why? */
.dropdown{
  font-family: 'Courier New', Courier, monospace;
  background-color:rgb(173, 173, 173);
  color: black;
}

/* can't change size of create button?? */
.linkButton{
  text-decoration: none;
  color: black;
  border: 5px solid transparent;

  background-color:rgb(173, 173, 173);
  border-color: rgb(73, 73, 73);
  position: relative;
  font-size: 10pt;
  text-align: center;
  width: 700px; 
  height: 100%;
  font-family: 'Courier New', Courier, monospace;

}
.linkButton.active, 
.linkButton:hover{
    background-color: #48596C;
    border-color: #c58db7;
}
</style>