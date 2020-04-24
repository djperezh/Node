var request = require('request')

describe('get messages api call', () => {
    it('should return 200', (done) => {
        request.get('http://localhost:3000/messages', (err, res) => {
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
})