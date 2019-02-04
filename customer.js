export default [
  {
    accountId: 1,
    name: "Todd Rederburg",
    email: "Todd@Todd.com",
    userName: "HotToddy1",
    password: "TODDISTHEBEST",
    createdOn: new Date("Feb 3, 2019 9:30PM"),
    active: true,
    street: "55 Leddy Cres.",
    city: "Saskatoon",
    prov: "SK",
    postCode: "S7N4V1",
    carts: [
      {
        cartId: 0,
        createdOn: new Date("Feb 3, 2019 9:46PM"),
        cartItems: [
          {
            quantity: 2,
            item: {
              productId: "3",
              desc: "arc'teryx harness",
              price: 99.99,
              available: 3,
              rating: 3.9,
              img: "https://picsum.photos/600/300/?image=25",
              comments: []
            }
          },
          {
            quantity: 1,
            item: {
              productId: "4",
              desc: "flashed chalk",
              price: 9.99,
              available: 40,
              rating: 4,
              img: "https://picsum.photos/600/300/?image=25",
              comments: []
            }
          }
        ],
        active: true
      }
    ],
    Comment: [
      {
        commentId: 0,
        body: "I love this product",
        rating: 5,
        edited: false,
        deleted: false
      }
    ]
  }
];
