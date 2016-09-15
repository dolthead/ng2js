(function (app) {

    app.InputListComponent =
        ng.core.Component({
            selector: 'input-list',
            templateUrl: 'app/input-list.component.html'
        })
        .Class({

            constructor: [app.DataService, function InputListComponent(dataService) {

                this.status = '';
                this.statusList = dataService.dataList;

                this.addStatus = function(myForm) {
                    if (!myForm.invalid) {
                        dataService.addItem({text: this.status, completed: false});
                        myForm.resetForm();
                    }
                }

                this.toggleItem = function() {
                    dataService.saveData();
                }
            }]

        });

})(window.app || (window.app = {}));
