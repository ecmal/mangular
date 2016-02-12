export default `
<md-toolbar class="md-table-toolbar md-default" ng-show="!$ctrl.selected.length">
  <div class="md-toolbar-tools">
    <span>Nutrition</span>
    <span flex></span>
    <md-button ng-click="$ctrl.hideCheckboxes = !$ctrl.hideCheckboxes">{{$ctrl.hideCheckboxes ? 'Enable Selection' : 'Disable Selection'}}</md-button>
    <md-button ng-click="$ctrl.hideHead = !$ctrl.hideHead">{{$ctrl.hideHead ? 'Show Head' : 'Decapitate'}}</md-button>
    <md-button ng-click="$ctrl.blah = !$ctrl.blah">{{$ctrl.blah ? 'turn on' : 'turn off'}}</md-button>
    <md-button ng-click="$ctrl.loadStuff()">Load</md-button>
    <md-button class="md-icon-button">
      <md-icon>filter_list</md-icon>
    </md-button>
    <md-button class="md-icon-button">
      <md-icon>more_vert</md-icon>
    </md-button>
  </div>
</md-toolbar>
`;

