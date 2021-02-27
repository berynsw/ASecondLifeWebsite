<template>
  <div class='container'>
    <div id='dropdown_Items'>
        <ejs-dropdownlist ref='itemInstance' :dataSource='ItemData' 
          :fields='Itemfields' :change='onItemChange' 
          placeholder='Select a Food Waste Item'>
        </ejs-dropdownlist>
      <div id='dropDown_Upcycles' style="padding-top:20px;">
          <ejs-dropdownlist ref='Upcycles' :query='childDataQuery' 
            :dataSource='UpcycleData' :fields='Upcyclefields'
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
    name: 'FoodDD',
  data () {
    return {
      ItemData: [
        { ItemName: 'Orange Peels', ItemId: '1' },
        { ItemName: 'Banana Peels', ItemId: '2' },
        { ItemName: 'Vegetable Scraps', ItemId: '3' }
      ],
      UpcycleData: [
        { UpcycleName: 'Cleaning/Bug Spray ', ItemId: '1', UpcycleId: '301' },
        { UpcycleName: 'Compost', ItemId: '1', UpcycleId: '302' },
        { UpcycleName: 'Candle ', ItemId: '1', UpcycleId: '303' },
        { UpcycleName: 'Plant Fertilizer ', ItemId: '2', UpcycleId: '304' },
        { UpcycleName: 'Compost ', ItemId: '2', UpcycleId: '302' },
        { UpcycleName: 'Vegetable Broth ', ItemId: '3', UpcycleId: '305' }  ,
        { UpcycleName: 'Compost ', ItemId: '3', UpcycleId: '302' } 
      ],
      Itemfields : { value: 'ItemId', text: 'ItemName' },
      Upcyclefields : { value: 'UpcycleId', text: 'UpcycleName' },
      Upcycleenabled : false,
      childDataQuery: null,
    }
  },
  methods: {
        onItemChange: function(e) {
            this.childDataQuery = new Query().where('ItemId', 'equal', e.value);
            this.Upcycleenabled = true;
        }
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