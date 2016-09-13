(function (app) {

    var NgModule = ng.core.NgModule;
    var bootstrap = ng.platformBrowserDynamic.platformBrowserDynamic;

    app.AppModule =
        NgModule({
            imports: [
                ng.platformBrowser.BrowserModule,
                ng.forms.FormsModule,
                md.card.MdCardModule,
                md.button.MdButtonModule,
                md.checkbox.MdCheckboxModule,
                md.input.MdInputModule
                // UIRouter
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
                // console.log(window.md);
            }
        });


    document.addEventListener('DOMContentLoaded', function () {
        bootstrap().bootstrapModule(app.AppModule);
    });

})(window.app || (window.app = {}));
