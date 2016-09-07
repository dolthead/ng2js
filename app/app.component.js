(function (app) {

    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            imports: [app.InputListComponent, app.AboutComponent],
            // directives: [app.InputListComponent, ng.common.FORM_DIRECTIVES]
        })
        .Class({
            constructor: function AppComponent() {
            }
        });

})(window.app || (window.app = {}));
