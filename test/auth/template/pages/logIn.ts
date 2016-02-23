export default `
    <div layout="row"  layout-align="center center">
        <div flex="50">
            <md-card >
                <img ng-src="https://material.angularjs.org/latest/img/washedout.png" class="md-card-image" alt="Washed Out">
                <md-card-content>
                    <md-input-container class="md-block">
                        <label>Username</label>
                        <input ng-model="$ctrl.username">
                    </md-input-container>
                    <md-input-container class="md-block">
                        <label>Password</label>
                        <input ng-model="$ctrl.password" type="password">
                    </md-input-container>
                </md-card-content>
                <md-card-actions layout="row" layout-align="center center">
                    <md-button class="md-raised md-primary" ng-click="$ctrl.submit()">Log In</md-button>
                </md-card-actions>
            </md-card>
        </div>
    </div>
`;

