<template>
  <div class='container'>
    <div id='dropdown_Items'>
        <ejs-dropdownlist ref='itemInstance' :dataSource='ItemData' 
          :fields='Itemfields' :change='onItemChange' 
          placeholder='Select a Plastic Item'>
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
    name: 'PlasticDD',
  data () {
    return {
      ItemData: [
        { ItemName: 'Water bottle', ItemId: '1' },
        { ItemName: 'Grocery bag', ItemId: '2' },
        { ItemName: 'Prescription bottle', ItemId: '3' },
        { ItemName: 'Clorox Wipes container ', ItemId: '4'},
        { ItemName: 'CD/DVD ', ItemId: '5'},
        { ItemName: 'Twist Ties', ItemId: '6'}
      ],
      UpcycleData: [
        { UpcycleName: 'Dog Treat Dispenser ', ItemId: '1', UpcycleId: '101' },
        { UpcycleName: 'Mini-Trashbag liner', ItemId: '2', UpcycleId: '102' },
        { UpcycleName: 'Storage ', ItemId: '2', UpcycleId: '103' },
        { UpcycleName: 'Emergency Sick bag ', ItemId: '2', UpcycleId: '104' },
        { UpcycleName: 'Shoe Travel ', ItemId: '2', UpcycleId: '105' },
        { UpcycleName: 'Pet Waste Cleanup ', ItemId: '2', UpcycleId: '106' }  ,
        { UpcycleName: 'Yarn for crocheting ', ItemId: '2', UpcycleId: '107' }, 
        { UpcycleName: 'Mini Survival Kit ', ItemId: '3', UpcycleId: '108' },   
        { UpcycleName: 'Plastic grocery bag Storage ', ItemId: '4', UpcycleId: '109' },   
        { UpcycleName: 'Mosaic Resin Tray ', ItemId: '5', UpcycleId: '110' }, 
        { UpcycleName: 'Bag Seal ', ItemId: '6', UpcycleId: '111' }, 
        { UpcycleName: 'Wire Organizer ', ItemId: '6', UpcycleId: '112' }, 
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