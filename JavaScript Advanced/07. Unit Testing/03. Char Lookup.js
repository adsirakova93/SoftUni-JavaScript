describe('TODO', () => {
    it('should 1', () => {
        assert.equal(lookupChar(112211, 0), undefined);
        assert.equal(lookupChar(112211, 2.10), undefined);
        assert.equal(lookupChar('str', 2.10), undefined);
    });

    it('should 2', () => {
        assert.equal(lookupChar('strd', 14), "Incorrect index");
        assert.equal(lookupChar('strd', -14), "Incorrect index");
    });

    it('should 3', () => {
        assert.equal(lookupChar('strd', 3), "d");
        assert.equal(lookupChar('strd', 0), "s");
    });

})