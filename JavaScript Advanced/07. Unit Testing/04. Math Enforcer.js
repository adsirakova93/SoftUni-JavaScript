describe('TODO', () => {
    it('should 1', () => {
        assert.equal(mathEnforcer.addFive('str'), undefined);
        assert.equal(mathEnforcer.subtractTen('str'), undefined);
        assert.equal(mathEnforcer.sum('str', 3), undefined);
        assert.equal(mathEnforcer.sum(3, 'str'), undefined);
        assert.equal(mathEnforcer.sum('ppp', 'str'), undefined);
    });

    it('should 2', () => {
        assert.equal(mathEnforcer.addFive(5), 10);
        assert.equal(mathEnforcer.addFive(-5), 0);
        assert.equal(mathEnforcer.addFive(5.1), 10.1);
        assert.equal(mathEnforcer.subtractTen(20), 10);
        assert.equal(mathEnforcer.subtractTen(-20), -30);
        assert.equal(mathEnforcer.subtractTen(-20.5), -30.5);
        assert.equal(mathEnforcer.sum(3, 3), 6);
        assert.equal(mathEnforcer.sum(3.1, 3.1), 6.2);
    });

})