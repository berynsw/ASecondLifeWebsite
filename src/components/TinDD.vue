<template>
  <div class='container'>
    <div id='dropdown_Items'>
        <ejs-dropdownlist ref='itemInstance' :dataSource='ItemData' 
          :fields='Itemfields' :change='onItemChange' 
          placeholder='Select a Tin Item'>
        </ejs-dropdownlist>
      <div id='dropDown_Upcycles' style="padding-top:20px;">
          <ejs-dropdownlist ref='Upcycles' :query='childDataQuery' 
            :dataSource='UpcycleData' :fields='Upcyclefields' :to='link'
            :enabled='Upcycleenabled' placeholder='Select an Upcycle'>
          </ejs-dropdownlist>
        </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
import { Query } from '@syncfusion/ej2-data';

export default Vue.extend({
  name: 'TinDD',
  data () {
    return {
      ItemData: [
        { ItemName: 'Tin can', ItemId: '1' },
        { ItemName: 'Cake pan', ItemId: '2' }
      ],
      UpcycleData: [
        { UpcycleName: 'Candle Votive ', ItemId: '1', UpcycleId: '201', link:'./' },
        { UpcycleName: 'Camping grill', ItemId: '1', UpcycleId: '202', link:'./' },
        { UpcycleName: 'Pencil Holder ', ItemId: '1', UpcycleId: '203', link:'./' },
        { UpcycleName: 'Succulent Garden ', ItemId: '2', UpcycleId: '204', link:'./cakepansucculentgarden' },
      ],
      Itemfields : { value: 'ItemId', text: 'ItemName' },
      Upcyclefields : { value: 'UpcycleId', text: 'UpcycleName' },
      Upcycleenabled : false,
      childDataQuery: null,
      link:'link'
    }
  },
  methods: {
        onItemChange: function(e) {
            this.childDataQuery = new Query().where('ItemId', 'equal', e.value);
            this.Upcycleenabled = true;
        },
    }
});
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
div .container{
  width: 400px;
  height:100px;
  background-color: #FAF2EC;
  border-style: solid;
  border-color:#48596C;
}
</style>