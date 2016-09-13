(function (app) {

    app.InputListComponent =
        ng.core.Component({
            selector: 'input-list',
            templateUrl: 'app/input-list.component.html'
        })
        .Class({
            constructor: function InputListComponent() {
                var self = this;
                self.status = '';
                self.statusList = [];
                this.chex = [];

                self.addStatus = function() {
                    if (self.status.trim() !== '') {
                        self.statusList.push(this.status);
                        this.status = '';
                    }
                }
            }
        });

})(window.app || (window.app = {}));
