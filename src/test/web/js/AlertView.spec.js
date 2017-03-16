/**
 * Created by kenny on 16/03/2017.
 */

var expect = chai.expect;
describe("Display Alert View", function () {

    before(function() {
        this.alertCollection = new app.collections.AlertCollection();
        this.loadAlerts = sinon.spy(app.views.AlertsView.prototype, "loadAlerts");

        this.alertView = new app.views.AlertsView({ collection: this.alertCollection, el : document.getElementById("alerts-view") });
        this.alertView.render()
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        $.ajax.restore();
        app.views.AlertsView.prototype.loadAlerts.restore();
    })

    it('Should Reset collection invoke rendering of the models', function() {
        this.alertCollection.reset([{"id":1,"deviceId":"wwww","timeStamp":1489517190000,"type":"LEAK"}])
        sinon.assert.callCount(this.loadAlerts, 1);
        expect(this.alertView.$(".table").bootstrapTable("getData").length).to.eql(1);
        //done();
    });

});