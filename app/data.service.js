(function (app) {

    var STORAGE_NAME = 'ng2js.data';

    app.DataService = ng.core.Class({

        constructor: function DataService() {
            this.dataList = JSON.parse(localStorage.getItem(STORAGE_NAME)) || [];
        },

        addItem: function(item) {
            if (item && item.text) {
                this.dataList.push(item);
                this.saveData();
            }
        },

        saveData: function() {
            localStorage.setItem(STORAGE_NAME, JSON.stringify(this.dataList));
        }

    });

})(window.app || (window.app = {}));

/*  THIS VERSION ALSO WORKS

(function (app) {

    app.DataService = function() {

        var STORAGE_NAME = 'ng2js.data';

        var self = this;
        self.dataList = JSON.parse(localStorage.getItem(STORAGE_NAME)) || [];
        self.addItem = addItem;
        self.saveData = saveData;

        function addItem(item) {
            if (item && item.text) {
                self.dataList.push(item);
                self.saveData();
            }
        }

        function saveData() {
            localStorage.setItem(STORAGE_NAME, JSON.stringify(self.dataList));
        }

    };

})(window.app || (window.app = {}));

*/
