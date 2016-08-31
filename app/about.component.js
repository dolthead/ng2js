(function (app) {

    app.AboutComponent =
        ng.core.Component({
            selector: 'about',
            templateUrl: 'app/about.component.html'
        })
            .Class({
                constructor: function () {
                }
            });

})(window.app || (window.app = {}));
