export default `
<md-content layout="column" flex>
<md-table-container>
  <table data-md-table data-md-row-select="!$ctrl.hideCheckboxes" data-ng-model="$ctrl.selected" md-progress="$ctrl.promise">
    <thead ng-if="!$ctrl.hideHead" md-head data-md-order="$ctrl.query.order" md-on-reorder="$ctrl.onReorder">
      <tr md-row>
        <th md-column md:order:by="id"><span>Ext</span></th>
        <th md-column md:order:by="name"><span>Dessert (100g serving)</span></th>
        <th md-column md:order:by="type"><span>Type</span></th>
        <th md-column md:order:by="status" data-md-desc><span>Status</span></th>
        <th md-column md:order:by="team" data-md-desc><span>Team</span></th>
        <th md-column data-md-numeric data-md-order-by="queue"><span>Queue</span></th>
        <th md-column data-md-numeric data-md-order-by="pending_leads"><span>Cap</span></th>
        <th md-column data-md-numeric data-md-order-by="taken_leads"><span>Taken</span></th>
        <th md-column data-md-numeric data-md-order-by="total_leads"><span>Total</span></th>
        <th md-column data-md-order-by="crm_status"><span>CRM</span></th>
      </tr>
    </thead>
    <tbody md-body>
      <tr md-row md-select="dessert" md-on-select="$ctrl.onSelect" md-on-deselect="$ctrl.onDeselect" x-md-auto-select="!$ctrl.blah" ng-disabled="$ctrl.dessert.calories.value > 400" data-ng-repeat="dessert in $ctrl.desserts | filter: filter.search | orderBy: $ctrl.query.order | limitTo: $ctrl.query.limit : ($ctrl.query.page -1) * $ctrl.query.limit">
        <td md-cell>{{dessert.id}}</td>
        <td md-cell>{{dessert.name}}</td>
        <td md-cell>{{dessert.type | uppercase}}</td>
        <td md-cell>{{dessert.team}}</td>
        <td md-cell>{{dessert.status}}</td>
        <td md-cell>{{dessert.queue}}</td>
        <td md-cell>{{dessert.pending_leads}}</td>
        <td md-cell>{{$ctrl.percent(dessert.taken_leads,dessert.total_leads) | number: 2}}%</td>
        <td md-cell>{{dessert.total_leads}}</td>
        <td md-cell>
            <md-icon>{{dessert.crm_status==true?'done':'error_outline'}}</md-icon>
        </td>
      </tr>
    </tbody>
  </table>
</md-table-container>
</md-content>
`;