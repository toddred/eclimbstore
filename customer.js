export default [

    {
        accountId: 1,
        name: 'Todd Rederburg',
        email: 'Todd@Todd.com',
        userName: 'HotToddy1',
        password: 'TODDISTHEBEST',
        createdOn: new Date('Feb 3, 2019 9:30PM'),
        active: true,
        street: '55 Leddy Cres.',
        city: 'Saskatoon',
        prov: 'SK',
        postCode: 'S7N4V1',
        carts: [
            {
                cartId: 0,
                createdOn: new Date('Feb 3, 2019 9:46PM'),
                cartitems: [],
                active: true,
            }
        ],
        Comment: [
            {
                commentId: 0,
                body: 'I love this product',
                rating: 5,
                edited: false,
                deleted: false
            }
        ]
    }
]


