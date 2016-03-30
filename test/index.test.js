var i = require('../index'),
 chai = require('chai');

describe('ana test başlığı', function(){
	it('a var mı', function(){
		
		chai.expect(i).to.have.property("a");
		
	});
});