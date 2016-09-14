(function (app) {

    app.InputListComponent =
        ng.core.Component({
            selector: 'input-list',
            templateUrl: 'app/input-list.component.html',
            stylesx:[
                'input.ng-touched.ng-invalid { border: solid darkred 3px; }'
            ]
        })
        .Class({
            constructor: function InputListComponent() {
                var self = this;
                self.status = '';
                self.statusList = [];

                self.addStatus = function(myForm) {
                    if (!myForm.invalid) {
                        self.statusList.push({text: this.status, completed: false});
                        // this.status = '';
                        myForm.resetForm();
                    }
                }
            }
        });

})(window.app || (window.app = {}));
