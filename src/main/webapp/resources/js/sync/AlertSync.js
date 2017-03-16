/**
 * Created by kenny on 14/03/2017.
 */

AlertSync = function(method, model, options) {
    if(method == "read") {
        var collection = options.collection;
        $.ajax({
            type: "GET",
            url: "api/report/v1/getAlerts",
            contentType: "application/json",
            
        }).done(function(data){
            if(data.status == "OK") {
                collection.reset([]);
            } else if(data.status == "FAIL") {
                collection.reset([]);
            } else {
                collection.reset(data);
            }

        }).fail(function(){});
    }
}

var app = app || {};
app.sync = app.sync || {};
app.sync.AlertSync = AlertSync;