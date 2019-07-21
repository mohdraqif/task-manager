const { add } = require('../src/math')
// Old Way
test('Adding Numbers', (done) =>{
    add(2,3).then((sum) =>{
        expect(sum).toBe(5)
        done()
    })
})

// New Way
test('Adding Numbers Async/Await', async() =>{
    const sum = await add(11, 22)
    expect(sum).toBe(33)
})