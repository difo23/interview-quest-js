const reverse = require('./reverseString');

test(' Reverse String: ', () =>{
    expect(reverse('Hi my name is Andrei')).toBe('ierdnA si eman ym iH');
});