var request = require("supertest");
var app = require('../app.js');


describe("Server Test", function() {

    describe("GET /", function() {
        it("returns status code 200", function(done) {
            request(app)
                .get('/')
                .expect(200)
                .end(function(error, response) {
                    if (error) return done(error);
                    done();
                });
        });
    });

});