var foo = {
    h:    function () { // Eslint error: Extra space before value
        return this.a;
    },
    ijkl: 'Non-consecutive lines form a new group',
};

var bar = {
    ijkl: 'Non-consecutive lines form a new group',
    h:    function () { // error is gone!
        return this.a;
    },
};