import {Component,Inject} from "mangular/annotate";
import DashboardTemplate from "../template/pages/dashboard";

@Component('wcDashboard',{
    template    : DashboardTemplate
})
class DashboardComponent {
    constructor() {
        console.info("DashboardComponent constructor");
    }
}


