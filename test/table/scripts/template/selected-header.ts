export default `
<md-toolbar class="md-table-toolbar alternate" ng-show="$ctrl.selected.length">
  <div class="md-toolbar-tools">
    <span>{{$ctrl.selected.length}} {{$ctrl.selected.length > 1 ? 'items' : 'item'}} selected</span>
    <span flex></span>
    <md-button class="md-icon-button">
      <md-icon>delete</md-icon>
    </md-button>
    <md-button class="md-icon-button">
      <md-icon>more_vert</md-icon>
    </md-button>
  </div>
</md-toolbar>
`;