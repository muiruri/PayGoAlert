/**
 * Created by kenny on 14/03/2017.
 */

var app = app || {};

$(function () {

    app.init = function() {
        var alertCollection = new app.collections.AlertCollection();
        var alertView = new app.views.AlertsView({ el: document.getElementById("alerts-view"), collection: alertCollection});
        alertView.render();
        alertCollection.fetch({collection : alertCollection });
    }
    app.getHeight = function() {
        return $(window).height() - 100;
    }

    app.formatDate = function(value, row, index) {
        if(value == null) {
            return "";
        }
        var date = new Date();
        date.setTime(value);
        return date.getDate() + "-" + app.pad(date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + pad(date.getMinutes()) + ":" + date.getSeconds();
    }
    
    app.pad = function(value) {
        if(value < 10) {
            return "0" + value;
        }
        return value;
    }
    app.init();
})