if (typeof module !== 'undefined') {
  var JSONParser = require('../src/main.js');
  var expect = require('chai').expect;
}

describe('JSON Parser', function() {

  describe('Numbers', function() {
    it('should work on single-digit', function() {
      expect(JSONParser(JSON.stringify(1))).to.eql(1);
    });

    it('should work on multiple digits', function() {
      expect(JSONParser(JSON.stringify(9001))).to.eql(9001);
    });
  });

  describe('Strings', function() {
    it('should work on alphanumerics', function() {
      expect(JSONParser(JSON.stringify('test'))).to.eql('test');
    });

    it('should work with numbers in there', function() {
      expect(JSONParser(JSON.stringify('6361'))).to.eql('6361');
    });

    it('should work with square brackets and curly braces', function() {
      expect(JSONParser(JSON.stringify('[corn]'))).to.eql('[corn]');
      expect(JSONParser(JSON.stringify('{corn}'))).to.eql('{corn}');
    });

    it('should work with quotes', function() {
      expect(JSONParser(JSON.stringify('i said "wassup"'))).to.eql('i said "wassup"');
    });
  });


  describe('Booleans', function() {
    it('should work on true', function() {
      expect(JSONParser(JSON.stringify(true))).to.eql(true);
    });

    it('should work on false', function() {
      expect(JSONParser(JSON.stringify(false))).to.eql(false);
    });
  });

  describe('null', function() {
    it('should work on null', function() {
      expect(JSONParser(JSON.stringify(null))).to.eql(null);
    });
  });

  describe('Arrays', function() {
    it('should work on empty arrays', function() {
      expect(JSONParser(JSON.stringify([]))).to.eql([]);
    });

    it('should work on one element', function() {
      expect(JSONParser(JSON.stringify(['a']))).to.eql(['a']);
      expect(JSONParser(JSON.stringify([1]))).to.eql([1]);
      expect(JSONParser(JSON.stringify([true]))).to.eql([true]);
    });

    it('should work on multiple elements', function() {
      expect(JSONParser(JSON.stringify([false, 1, '34']))).to.eql([false, 1, '34']);
      expect(JSONParser(JSON.stringify([true, 403485, 'test']))).to.eql([true, 403485, 'test']);
    });

  });

  describe('Objects', function() {
    it('should work on objects', function() {
      expect(JSONParser(JSON.stringify({}))).to.eql({});
      expect(JSONParser(JSON.stringify({a:true}))).to.eql({a:true});
      expect(JSONParser(JSON.stringify({b:1}))).to.eql({b:1});
      expect(JSONParser(JSON.stringify({c:'test'}))).to.eql({c:'test'});
      expect(JSONParser(JSON.stringify({a:true,b:1}))).to.eql({a:true,b:1});
      expect(JSONParser(JSON.stringify({a:true,b:1,c:'test'}))).to.eql({a:true,b:1,c:'test'});
    });
  });

  describe('Nesting', function() {
    it('should working with nesting in objects', function() {
      expect(JSONParser(JSON.stringify({a:{}}))).to.eql({a:{}});
      expect(JSONParser(JSON.stringify({a:{b:1}}))).to.eql({a:{b:1}});
      expect(JSONParser(JSON.stringify({a:{b:1,c:2}}))).to.eql({a:{b:1,c:2}});
      expect(JSONParser(JSON.stringify({a:{b:1},c:2}))).to.eql({a:{b:1},c:2});
      expect(JSONParser(JSON.stringify({a:{b:{c:2}}}))).to.eql({a:{b:{c:2}}});
    });

    it('should working with nesting in arrays', function() {
      expect(JSONParser(JSON.stringify([{a:1}]))).to.eql([{a:1}]);
      expect(JSONParser(JSON.stringify([{a:1},{b:2}]))).to.eql([{a:1},{b:2}]);
      expect(JSONParser(JSON.stringify([{a:{c:2}},{b:2}]))).to.eql([{a:{c:2}},{b:2}]);
      expect(JSONParser(JSON.stringify([[true]]))).to.eql([[true]]);
      expect(JSONParser(JSON.stringify([[1, '15', [false]], [[], 'sup']]))).to.eql([[1, '15', [false]], [[], 'sup']]);
    });
  });

  describe('Performace', function() {
    var obj = {};
    for (var i = 0; i < 100000; i++) {
      obj[i] = [];
    }
    it('should work on a huge data set', function() {
     expect(JSONParser(JSON.stringify(obj))).to.eql(obj);
    });
  });

});
