/**
 * Created by kenny on 14/03/2017.
 */

var AlertsView = Backbone.View.extend ({

    initialize: function() {
        this.listenTo(this.collection, "reset", this.loadAlerts);
    },

    render: function() {
        this.$(".table").bootstrapTable({
            data : [], striped: true, idField: "id", pagination: true,  height: app.getHeight(), toolbar : '#toolbar', search : true
        });

        return this;
    },

    loadAlerts: function(collection, options) {
        var i = 1;
        var newList = this.collection.map(function(model) {
            var newModel = {};
            newModel.count = i;
            newModel.deviceId = model.get("deviceId");
            newModel.timeStamp = model.get("timeStamp");
            newModel.type = model.get("type");
            newModel.id = model.get("id");
            i++;
            return newModel;
        });
        this.$(".table").bootstrapTable("load", newList);
    }
});

var app = app || {};
app.views = app.views || {};
app.views.AlertsView = AlertsView;