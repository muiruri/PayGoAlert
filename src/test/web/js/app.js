/**
 * Created by kenny on 31/07/2016.
 */

var app = app || {};
$(function () {
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/gim,
        evaluate: /\{\{(.+?)\}\}/gim,
        escape: /\{\{\-(.+?)\}\}/gim
    };
    $.notify.defaults({ autoHide: false});

    app.path = "http://localhost:8080/PublisherSubscriber/"

    app.closeNotify = function(successMessage, syncId, type) {
        $(".notifyjs-bootstrap-base." + syncId).
        removeClass("notifyjs-bootstrap-info").
        addClass("notifyjs-bootstrap-" + type).
        find("[data-notify-text]").
        text(successMessage);

        close = function() {
            $(".notifyjs-bootstrap-base." + syncId).trigger("notify-hide")
        }
        setTimeout(close, 3000);
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
        return date.getDate() + "-" + app.pad(date.getMonth() + 1) + "-" + date.getFullYear();
    }

    app.pad = function(value) {
        if(value < 10) {
            return "0" + value;
        }
        return value;
    }
});