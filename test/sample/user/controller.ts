import {Controller} from "mangular/injector";
import {Inject} from "mangular/injector";

import {UserService} from "./service";

@Controller
class UserController {

    @Inject $mdBottomSheet;
    @Inject $mdSidenav:any;
    @Inject service:UserService;
    @Inject $log:any;


    private users:any[];
    private selected:any;

    constructor(){
        console.info('UserController');

        this.selected     = null;
        this.users        = [ ];
        this.service.loadAllUsers().then((users)=>{
            this.users    = [].concat(users);
            this.selected = users[0];
        });
    }
    toggleList() {
        this.$mdSidenav('left').toggle();
    }
    selectUser ( user ) {
        this.selected = typeof user == 'number' ? this.users[user] : user;
    }
    makeContact(selectedUser) {

        this.$mdBottomSheet.show({
            controllerAs  : "cp",
            template      : `
                <md-bottom-sheet class="md-list md-has-header">
                    <md-subheader>
                        Contact <span class="name">{{ cp.user.name }}</span>:
                    </md-subheader>
                    <md-list>
                      <md-item ng-repeat="item in cp.actions">
                        <md-button ng-click="cp.contactUser(item)" id="item_{{$index}}">
                            <md-icon md-svg-icon="{{ item.icon_url }}"></md-icon>
                            {{item.name}}
                        </md-button>
                      </md-item>
                    </md-list>
                </md-bottom-sheet>
            `,
            controller    : [ '$mdBottomSheet', ContactSheetController],
            parent        : document.getElementById('content')
        }).then(function(clickedItem) {
            this.log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * User ContactSheet controller
         */
        function ContactSheetController( $mdBottomSheet ) {
            this.user = selectedUser;
            this.actions = [
                { name: 'Phone'       , icon: 'phone'       , icon_url: '../assets/svg/phone.svg'},
                { name: 'Twitter'     , icon: 'twitter'     , icon_url: '../assets/svg/twitter.svg'},
                { name: 'Google+'     , icon: 'google_plus' , icon_url: '../assets/svg/google_plus.svg'},
                { name: 'Hangout'     , icon: 'hangouts'    , icon_url: '../assets/svg/hangouts.svg'}
            ];
            this.contactUser = function(action) {
                // The actually contact process has not been implemented...
                // so just hide the bottomSheet

                $mdBottomSheet.hide(action);
            };
        }
    }
}