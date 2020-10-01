const fetch = require('node-fetch');
const expect = require('chai').use(require('chai-as-promised')).expect;


describe('Sample api tests', () => {

    it('GET request', async () => {
        let res = await fetch('https://api.github.com/users/github', { method: 'GET' });
        let response = await res.json();
        expect(response).to.haveOwnProperty('login')
        expect(response.login).to.contain('github');
    })

    it('POST request', async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', body: {
                "userId": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
        })
        let response = await res.json();
        console.log(response);
        expect(response.id).to.equal(101)
    })

})