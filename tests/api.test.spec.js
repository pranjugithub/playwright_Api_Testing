const { test, expect } = require('@playwright/test');


test('API GET Request', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200);
    const data = await response.text();
    console.log(data);
    expect(data).toContain('janet');
    console.log(await response.json());
});

test('API POST Request', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "morphes",
            "job": "leader"
        }
    })
    expect(response.status()).toBe(201);
    const data = await response.text();
    console.log(data);
    expect(data).toContain('morphes');
    console.log(await response.json());

});

test('API PUT Request', async ({ request }) => {

    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Raghav",
            "job": "leader"
        }
    })
    expect(response.status()).toBe(200);
    const data = await response.text();
    console.log(data);
    expect(data).toContain('Raghav');
    console.log(await response.json());

});

test('API DELETE Request', async ({ request }) => {

    const response = await request.delete('https://reqres.in/api/users/2', {
        data: {
            "name": "Raghav",
            "job": "leader"
        }
    })
    expect(response.status()).toBe(204);
   
});