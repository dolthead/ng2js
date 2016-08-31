(function (app) {

    app.AppModule =
        ng.core.NgModule({
            imports: [ng.platformBrowser.BrowserModule],
            declarations: [app.AppComponent, app.InputListComponent],
            bootstrap: [app.AppComponent]
        })
        .Class({
            constructor: function () {
            }
        });

    document.addEventListener('DOMContentLoaded', function () {
        ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(app.AppModule);
    });

})(window.app || (window.app = {}));
