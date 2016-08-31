(function (app) {

    app.InputListComponent =
        ng.core.Component({
            selector: 'input-list',
            // template: 'simple input list template',
            templateUrl: 'app/input-list.component.html',
            // directives: [ng.common.FORM_DIRECTIVES] // for ngModel
        })
        .Class({
            constructor: function () {
                console.log('input-list constructor');
                var self = this;
                self.status = '';
                self.statusList = [];

                self.addStatus = function() {
                    self.statusList.push(this.status);
                    this.status = '';
                }
            }
        });

})(window.app || (window.app = {}));
