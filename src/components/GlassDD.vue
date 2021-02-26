<template>
  <div class='container'>
    <div id='dropdown_Items'>
        <ejs-dropdownlist ref='itemInstance' :dataSource='ItemData' 
          :fields='Itemfields' :change='onItemChange' 
          placeholder='Select a Glass Item'>
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
    name: 'GlassDD',
  data () {
    return {
      ItemData: [
        { ItemName: 'Mason Jars', ItemId: '1' },
        { ItemName: 'Candle Jars', ItemId: '2' },
        { ItemName: 'Broken Glass', ItemId: '3' }
      ],
      UpcycleData: [
        { UpcycleName: 'Food Storage ', ItemId: '1', UpcycleId: '401' },
        { UpcycleName: 'Misc. Item Storage', ItemId: '1', UpcycleId: '402' },
        { UpcycleName: 'Decoration ', ItemId: '1', UpcycleId: '403' },
        { UpcycleName: 'Emergency Drinking Water Storage ', ItemId: '2', UpcycleId: '404' },
        { UpcycleName: 'Misc. Item Storage ', ItemId: '2', UpcycleId: '402' },
        { UpcycleName: 'Mosaic Craft ', ItemId: '3', UpcycleId: '405' }  ,
        { UpcycleName: 'Sea Glass ', ItemId: '3', UpcycleId: '406' } 
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