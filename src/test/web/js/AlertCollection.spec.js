/**
 * Created by kenny on 16/03/2017.
 */

var expect = chai.expect;
describe("Alert Collection", function () {

    before(function() {
        this.alertCollection = new app.collections.AlertCollection();
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        $.ajax.restore();
    })

    it('Should invoke function to load data', function() {
        this.alertCollection.fetch()
        expect($.ajax.calledOnce).to.be.true;
        //done();
    });

});