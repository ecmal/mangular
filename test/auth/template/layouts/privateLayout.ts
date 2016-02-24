export default `
<section flex layout="row" style="min-height: 100%">
<md-sidenav class="site-sidenav md-sidenav-left md-whiteframe-z2"
            md-component-id="left"
            md-is-locked-open="$mdMedia('gt-sm')">
    <header class="nav-header">
    </header>
    <md-content role="navigation">
      <ul class="docs-menu">
            <li ng-repeat="section in $ctrl.getMenuSection()" class="parent-list-item {{section.className || ''}}" ng-class="{'parentActive' :  $ctrl.isOpen(section)}">
              <h2 class="menu-heading md-subhead" ng-if="section.type === 'heading'" id="heading_{{ section.name }}">
                {{section.name}}
              </h2>
              <menu-link section="section" ng-if="section.type === 'link' && !section.hidden"></menu-link>
              <menu-toggle section="section" ng-if="section.type === 'toggle' && !section.hidden"></menu-toggle>
              <ul ng-if="section.children" class="menu-nested-list">
                <li ng-repeat="child in section.children" ng-class="{'childActive' : $ctrl.isOpen(child)}">
                  <menu-link section="child" ng-if="child.type === 'link'"></menu-link>
                  <menu-toggle section="child" ng-if="child.type === 'toggle'"></menu-toggle>
                </li>
              </ul>
            </li>
      </ul>
    </md-content>
</md-sidenav>
<div flex layout="column" tabIndex="-1" role="main" class="md-whiteframe-z2">
<md-toolbar class="md-whiteframe-glow-z1 site-content-toolbar">
  <div class="md-toolbar-tools">
    <md-button class="md-icon-button" aria-label="Settings" hide-gt-sm ng-click="$ctrl.toggleList()">
      <md-icon class="md-accent" style="color: #2C80D2">menu</md-icon>
    </md-button>
    <h2>
      <span>{{$ctrl.root.title}}</span>
    </h2>
    <span flex></span>
    <md-button class="md-icon-button" aria-label="More">
        <md-icon style="color:#106CC8">more_vert</md-icon>
    </md-button>
  </div>
</md-toolbar>
<md-content ui-view>
</md-content>
</div>
</section>
`;