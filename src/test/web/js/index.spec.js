/**
 * Created by kenny on 27/07/2016.
 */
var expect = chai.expect;
describe("Fetch Journals", function () {

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        $.ajax.restore();
    })

    it('Should make ajax call to fetch Journals', function() {
        var journalCollection = new sem.collections.JournalsCollection();
        journalCollection.fetch({ collection : journalCollection});

        expect($.ajax.calledOnce).to.be.true;
        //done();
    });

});

describe("Fetch Journals Issues", function () {

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
         $.ajax.restore();
    })

    it('Should make ajax call to Fetch Journal Issues', function() {
        window.journalId = 1;
        var journalIssuesCollection = new sem.collections.JournalIssuesCollection();
        journalIssuesCollection.fetch({ collection : journalIssuesCollection});

        expect($.ajax.calledOnce).to.be.true;
        //done();
    });

});

describe("Fetch User Journals", function () {

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
         $.ajax.restore();
    })

    it('Should make ajax call to fetch User Journals', function() {
        window.userId = 7;
        var userJournalsCollection = new sem.collections.UserJournalCollection();
        userJournalsCollection.fetch({ collection : userJournalsCollection});

        expect($.ajax.calledOnce).to.be.true;
        //done();
    });

});

describe("Should save Journal Model", function () {

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        $.ajax.restore();
    })

    it('Should make ajax call to save Journal model', function() {
        window.userId = 7;
        var journalModel = new sem.models.JournalModel();
        var json = {};
        json.title = "Sample title";
        json.description = "Sample description";
        json.userId = 7;
        json.tags = "test, health";
        journalModel.set(json);
        journalModel.save();

        expect($.ajax.calledOnce).to.be.true;
        //done();
    });

});

describe("Should save Journal Issue Model", function () {

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        $.ajax.restore();
    })

    it('Should make ajax call to save Journal Issue model', function() {
        window.userId = 7;
        var journalIssueModel = new sem.models.JournalIssueModel();
        var json = {};
        json.issue = "Issue 1 vol 10";
        json.journalId = 1;
        json.file = "";

        journalIssueModel.set(json);
        journalIssueModel.save();

        expect($.ajax.calledOnce).to.be.true;
        //done();
    });

});


describe("Should send sign up request", function () {

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        $.ajax.restore();
    })

    it('Should make ajax call to save user model', function() {
        var userModel = new sem.models.UserModel();
        var json = {};
        json.userName = "userxx";
        json.emailAddress = "anyone@mail.com";
        json.password = "77^%7&";
        json.names = "John Doe";
        json.publisher = true;

        userModel.set(json);
        userModel.save();

        expect($.ajax.calledOnce).to.be.true;
        //done();
    });

});

describe("Should not fetch a user", function () {

    beforeEach(function() {
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        $.ajax.restore();
    })

    it('Should make ajax call to save user model', function() {
        var userModel = new sem.models.UserModel();

        userModel.fetch();

        expect($.ajax.calledOnce).to.be.false;
        //done();
    });

});

describe("Should validate email address", function () {

    it('Should validate that the given email address is valid i.e it is an email address', function() {
        var signUpView = new sem.views.SignupView();

        var valid = signUpView.validateEmail("john@someone.com");

        expect(valid).to.be.true;
        //done();
    });

    it('Should validate that the given email address is not valid i.e it is an email address', function() {
        var signUpView = new sem.views.SignupView();

        var valid = signUpView.validateEmail("johnsomeone.com");

        expect(valid).to.be.false;
        //done();
    });

});

describe("Should not sign in without filling in mandatory field", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.SignupView.prototype, "signup");
        this.view = new sem.views.SignupView();
        this.view.render();
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        sem.views.SignupView.prototype.signup.restore();
        $.ajax.restore();
    })

    it('Should validate the form and not call signup as mandatory fields are missing', function() {
        this.view.$(".signup").click();
        sinon.assert.callCount(this.spy, 1);
        expect($.ajax.calledOnce).to.be.false;
    });
});

describe("Should sign in after filling in mandatory field", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.SignupView.prototype, "signup");
        this.view = new sem.views.SignupView();
        this.view.render();
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        sem.views.SignupView.prototype.signup.restore();
        $.ajax.restore();
    })

    it('Should validate the form and send signup request', function() {
        this.view.$("#username").val("user xx");
        this.view.$("#password").val("1234");
        this.view.$("#confirm-password").val("1234");
        this.view.$("#email_address").val("user@test.com");
        this.view.$(".signup").click();
        sinon.assert.callCount(this.spy, 1);
        expect($.ajax.calledOnce).to.be.true;
    });
});

describe("Should not sign in after filling in mandatory field but passwords do not match", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.SignupView.prototype, "signup");
        this.view = new sem.views.SignupView();
        this.view.render();
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        sem.views.SignupView.prototype.signup.restore();
        $.ajax.restore();
    })

    it('Should validate the form and not call signup', function() {
        this.view.$("#username").val("user xx");
        this.view.$("#password").val("12e34");
        this.view.$("#confirm-password").val("1234");
        this.view.$("#email_address").val("user@test.com");
        this.view.$(".signup").click();
        sinon.assert.callCount(this.spy, 1);
        expect($.ajax.calledOnce).to.be.false;
    });
});

describe("Should test login form actions", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.LoginView.prototype, "login");
        this.view = new sem.views.LoginView({el : document.getElementById("login-form")});
        this.view.render();
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        sem.views.LoginView.prototype.login.restore();
        $.ajax.restore();
    })

    it('Should login user', function() {
        this.view.$("#username").val("user xx");
        this.view.$("#password").val("12e34");

        this.view.$(".login").click();
        sinon.assert.callCount(this.spy, 1);
        expect($.ajax.calledOnce).to.be.true;
    });
});

describe("Should test reset password if no username or email is provided", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.ForgotPasswordView.prototype, "resetPassword");
        this.view = new sem.views.ForgotPasswordView();
        this.view.render();
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        sem.views.ForgotPasswordView.prototype.resetPassword.restore();
        $.ajax.restore();
    })

    it('Should not send reset password request', function() {
        this.view.$(".reset-password").click();
        sinon.assert.callCount(this.spy, 1);
        expect($.ajax.calledOnce).to.be.false;
    });
});

describe("Should test reset password", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.ForgotPasswordView.prototype, "resetPassword");
        this.view = new sem.views.ForgotPasswordView();
        this.view.render();
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        sem.views.ForgotPasswordView.prototype.resetPassword.restore();
        $.ajax.restore();
    })

    it('Should reset password', function() {
        this.view.$("#email-username").val("user xx");

        this.view.$(".reset-password").click();
        sinon.assert.callCount(this.spy, 1);
        expect($.ajax.calledOnce).to.be.true;
    });
});

describe("Should Test Journal List view", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.JournalListView.prototype, "loadJournals");
        var collection = new sem.collections.JournalsCollection();
        this.view = new sem.views.JournalListView({el : document.getElementById("journals-view"), collection : collection});
        this.view.render();
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        sem.views.JournalListView.prototype.loadJournals.restore();
        $.ajax.restore();
    })

    it('Should call function to load data on reset', function() {
        this.view.collection.trigger("reset");
        sinon.assert.callCount(this.spy, 1);
    });
});

describe("Should Test clicking on adding of new Journal", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.JournalListView.prototype, "newJournal");
        var collection = new sem.collections.JournalsCollection();
        this.view = new sem.views.JournalListView({el : document.getElementById("journals-view"), collection : collection});
        this.view.render();
    });

    afterEach(function() {
        sem.views.JournalListView.prototype.newJournal.restore();
    })

    it('Should call function to add a new Journal', function() {
        this.view.$(".add-journal").click();
        sinon.assert.callCount(this.spy, 1);
    });
});

describe("Should Test Adding of new journal without filling in mandatory fields", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.JournalModalView.prototype, "saveJournal");
        this.view = new sem.views.JournalModalView();
        this.view.render();
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        sem.views.JournalModalView.prototype.saveJournal.restore();
        $.ajax.restore();
    })

    it('Should not call request to save journal', function() {
        this.view.$(".create-journal").click();
        sinon.assert.callCount(this.spy, 1);
        expect($.ajax.calledOnce).to.be.false;
    });
});

describe("Should Test Adding of new journal", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.JournalModalView.prototype, "saveJournal");
        this.view = new sem.views.JournalModalView();
        this.view.render();
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        sem.views.JournalModalView.prototype.saveJournal.restore();
        $.ajax.restore();
    })

    it('Should call request to save journal', function() {
        this.view.$("#title").val("user xx");
        this.view.$("#description").val("user xx");
        this.view.$("#tags").val("tag1, tag2");
        this.view.$(".create-journal").click();
        sinon.assert.callCount(this.spy, 1);
        expect($.ajax.calledOnce).to.be.true;
    });
});

describe("Should Test Journal Issues List view", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.JournalIssuesListView.prototype, "loadJournalIssues");
        var collection = new sem.collections.JournalIssuesCollection();
        this.view = new sem.views.JournalIssuesListView({el : document.getElementById("journal-issues-view"), collection : collection});
        this.view.render();
    });

    afterEach(function() {
        sem.views.JournalIssuesListView.prototype.loadJournalIssues.restore();
    })

    it('Should call function to load data on reset', function() {
        this.view.collection.trigger("reset");
        sinon.assert.callCount(this.spy, 1);
    });
});

describe("Should Test adding of new Journal Issues", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.JournalIssuesListView.prototype, "newJournalIssue");
        var collection = new sem.collections.JournalIssuesCollection();
        this.view = new sem.views.JournalIssuesListView({el : document.getElementById("journal-issues-view"), collection : collection});
        this.view.render();
    });

    afterEach(function() {
        sem.views.JournalIssuesListView.prototype.newJournalIssue.restore();
    })

    it('Should call function to display modal for new journal issue', function() {
        this.view.$(".add-journal-issue").click();
        sinon.assert.callCount(this.spy, 1);
    });
});

describe("Should Test Adding of new journal issue without filling in mandatory fields", function () {

    before(function() {
        this.spy = sinon.spy(sem.views.JournalIssueModalView.prototype, "saveJournal");
        this.view = new sem.views.JournalIssueModalView();
        this.view.render();
        sinon.spy($, 'ajax');
    });

    afterEach(function() {
        sem.views.JournalIssueModalView.prototype.saveJournal.restore();
        $.ajax.restore();
    })

    it('Should not call request to save journal issue', function() {
        this.view.$(".create-journal").click();
        sinon.assert.callCount(this.spy, 1);
        expect($.ajax.calledOnce).to.be.false;
    });
});

