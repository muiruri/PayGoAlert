/**
 * Created by kenny on 14/03/2017.
 */

AlertCollection = Backbone.Collection.extend({
    
    sync: app.sync.AlertSync,
    model: app.models.AlertModel

});

var app = app || {};
app.collections = app.collections || {};
app.collections.AlertCollection = AlertCollection;