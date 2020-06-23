const fetch = require('node-fetch');
const expect = require('chai').use(require('chai-as-promised')).expect;


describe('Sample api tests', () => {

    it('GET request', async () => {
        let res = await fetch('https://api.github.com/users/github', { method: 'GET' });
        let response = await res.json();
        console.log(response);
        expect(response).to.haveOwnProperty('login')
        expect(response.login).to.contain('github');
    })

    it('POST request', async () => {
        const FormData = require('form-data');
        const form = new FormData();
        form.append('a', 1);
        let res = await fetch('https://httpbin.org/post', { method: 'POST', body: form })
        let response = await res.json();
        console.log(response);
    })
    
})