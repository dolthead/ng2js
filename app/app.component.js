(function (app) {

    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            imports: [app.InputListComponent],
            directives: [app.InputListComponent, ng.common.FORM_DIRECTIVES]
        })
        .Class({
            constructor: function () {
            }
        });

})(window.app || (window.app = {}));
