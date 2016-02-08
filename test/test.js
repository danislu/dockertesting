// Simple async test for HTTP 200 response code using supertest
'use strict';

var request = require("supertest"),
    expect = require('expect.js'),
    app = require("../app").getApp;

describe('GET /', function(){
  it('expects HTTP response 200', function(done){
    request(app)
     .get('/')
	 .expect(200, done);
  });

  it('expects that this does not fail', function(done){
    expect(false).to.not.be.ok();
    expect(true).to.be.ok();
    expect(false).to.be.ok();
    done();
  });
});
