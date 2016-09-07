(function (app) {

    var NgModule = ng.core.NgModule;
    var bootstrap = ng.platformBrowserDynamic.platformBrowserDynamic;

    app.AppModule =
        NgModule({
            imports: [
                ng.platformBrowser.BrowserModule,
                ng.forms.FormsModule
            ],
            declarations: [ // any components, directives and pipes defined in this module
                app.AppComponent,
                app.InputListComponent,
                app.AboutComponent
            ],
            providers: [], // any services used in this module
            bootstrap: [app.AppComponent]
        })
        .Class({
            constructor: function AppModule() {
            }
        });

    function domBootstrap() {
        bootstrap().bootstrapModule(app.AppModule);
    }
    document.addEventListener('DOMContentLoaded', domBootstrap);

})(window.app || (window.app = {}));
