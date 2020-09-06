const food = {
    desserts: [
        { id: 0, name: 'Torturi', price: '120 KR per KG', image: require('../images/image-1.jpg'), desc: '' },
        { id: 1, name: 'Cozonaci', price: '100 KR per stk', image: require('../images/image-2.jpg'), desc: '' },
        { id: 2, name: 'Chec', price: '80 KR per stk', image: require('../images/image-3.jpg'), desc: '' },
        { id: 3, name: 'Prajituri Asortate', price: '100 KR per KG', image: require('../images/image-5.jpg'), desc: '' },
        { id: 4, name: 'Eclere', price: '15 KR per STK', image: require('../images/image-6.jpg'), desc: '' },
        { id: 5, name: 'Amandine', price: '20 KR per STK', image: require('../images/image-7.jpg'), desc: '' },
        { id: 6, name: 'Smantana de casa', price: '70 KR per KG', image: require('../images/image-10.jpg'), desc: '' }
    ],
    cheeses: [
        { id: 7, name: 'Cas de vaca', price: '75 KR per KG', image: require('../images/image-8.jpg'), desc: '' },
        { id: 8, name: 'Branza de vaci', price: '70 KR per KG', image: require('../images/image-9.jpg'), desc: '' },
        { id: 9, name: 'Urdă de vaci', price: '75 KR per KG', image: require('../images/image-11.jpg'), desc: '' }
    ]
}

const foodReducer = (state = food, action) => {
    console.log(action)
    switch (action.type) {
        case 'GET_DESSERT':
            return food.desserts[action.payload.index]
        case 'GET_CHEESE':
            return food.cheeses[action.payload.index]
        default:
            return food
    }
}

export default foodReducer
