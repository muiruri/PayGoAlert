/**
 * Created by kenny on 14/03/2017.
 */

var AlertModel;

AlertModel = Backbone.Model.extend( {
    sync: app.sync.AlertSync
});

var app = app || {};
app.models = app.models || {};
app.models.AlertModel = AlertModel;