var supertest = require('supertest');
var app = require('../app');

describe("Header test", function(){
    it("Display header based on URL parameter", function(done){
        supertest(app).get("/start/1338")
        .expect(200)
        .expect(/13388/, done)
    })
});  
