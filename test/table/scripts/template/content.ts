export default `
<md-table-container>
  <table data-md-table data-md-row-select="!$ctrl.hideCheckboxes" data-ng-model="$ctrl.selected" md-progress="$ctrl.promise">
    <thead ng-if="!$ctrl.hideHead" md-head data-md-order="$ctrl.query.order" md-on-reorder="$ctrl.onReorder">
      <tr md-row>
        <th md-column md:order:by="name"><span>Dessert (100g serving)</span></th>
        <th md-column md:order:by="type"><span>Type</span></th>
        <th md-column data-md-numeric data-md-order-by="calories.value" data-md-desc><span>Calories</span></th>
        <th md-column data-md-numeric data-md-order-by="fat.value"><span>Fat (g)</span></th>
        <!-- <th md-column data-md-numeric data-md-order-by="carbs.value"><span>Carbs (g)</span></th> -->
        <th md-column data-md-numeric data-md-order-by="protein.value"><span>Protein (g)</span></th>
        <!-- <th md-column data-md-numeric data-md-order-by="sodium.value"><span>Sodium (mg)</span></th> -->
        <!-- <th md-column data-md-numeric data-md-order-by="calcium.value"><span>Calcium (%)</span></th> -->
        <th md-column data-md-numeric data-md-order-by="iron.value" data-hide-sm><span>Iron (%)</span></th>
        <th md-column data-md-order-by="comment">
          <md-icon>comments</md-icon>
          <span>Comments</span>
        </th>
      </tr>
    </thead>
    <tbody md-body>
      <tr md-row md-select="dessert" md-on-select="$ctrl.log" md-on-deselect="$ctrl.deselect" x-md-auto-select="!$ctrl.blah" ng-disabled="$ctrl.dessert.calories.value > 400" data-ng-repeat="dessert in $ctrl.desserts | filter: filter.search | orderBy: $ctrl.query.order | limitTo: $ctrl.query.limit : ($ctrl.query.page -1) * $ctrl.query.limit">
        <td md-cell>{{dessert.name}}</td>
        <td md-cell>
          <md-select ng-model="dessert.type" placeholder="Other">
            <md-option ng-value="type" ng-repeat="type in $ctrl.getTypes()">{{type}}</md-option>
          </md-select>
        </td>
        <td md-cell>{{dessert.calories.value}}</td>
        <td md-cell>{{dessert.fat.value | number: 2}}</td>
        <!-- <td md-cell>{{dessert.carbs.value}}</td> -->
        <td md-cell>{{dessert.protein.value | number: 2}}</td>
        <!-- <td md-cell>{{dessert.sodium.value}}</td> -->
        <!-- <td md-cell>{{dessert.calcium.value}}%</td> -->
        <td md-cell hide-sm>{{dessert.iron.value}}%</td>
        <td md-cell ng-click="$ctrl.editComment($event, dessert)" ng-class="{'md-placeholder': !dessert.comment}">
          {{dessert.comment || 'Add a comment'}}
        </td>
      </tr>
    </tbody>
  </table>
</md-table-container>
`;