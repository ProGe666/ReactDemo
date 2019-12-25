import moxios from "moxios";
import {applyMiddleware, createStore} from "redux";
import ReduxPromise from "redux-promise";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import {rootReducer} from "../../reducers/root.reducer";
import React from 'react';
import Products from "../../containers/Product";

const PRODUCTS = [
    {name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://s3.amazonaws.com/msi-tech-2018/iphone.jpg'},
    {
        name: 'iPhone3G',
        brand: 'Apple',
        price: 200,
        stock: 33,
        image: 'https://s3.amazonaws.com/msi-tech-2018/iphone3G.jpg'
    },
    {
        name: 'iPhone3GS',
        brand: 'Apple',
        price: 300,
        stock: 11,
        image: 'https://s3.amazonaws.com/msi-tech-2018/iphone3GS.jpg'
    },
    {
        name: 'iPhone4',
        brand: 'Apple',
        price: 400,
        stock: 22,
        image: 'https://s3.amazonaws.com/msi-tech-2018/iphone4.jpg'
    },
    {
        name: 'iPhone4S',
        brand: 'Apple',
        price: 500,
        stock: 33,
        image: 'https://s3.amazonaws.com/msi-tech-2018/iphone4S.jpg'
    },
    {
        name: 'iPhone5',
        brand: 'Apple',
        price: 600,
        stock: 11,
        image: 'https://s3.amazonaws.com/msi-tech-2018/iphone5.jpeg'
    },
    {
        name: 'iPhone5C',
        brand: 'Apple',
        price: 700,
        stock: 222,
        image: 'https://s3.amazonaws.com/msi-tech-2018/iphone5c.png'
    },
    {
        name: 'iPhone5S',
        brand: 'Apple',
        price: 800,
        stock: 333,
        image: 'https://s3.amazonaws.com/msi-tech-2018/iphone5s.jpg'
    },
    {
        name: 'iPhone6',
        brand: 'Apple',
        price: 900,
        stock: 111,
        image: 'https://s3.amazonaws.com/msi-tech-2018/iphone6.jpg'
    },
];
describe('products integration test', () => {

    beforeEach(() => {
        moxios.install();
        moxios.stubRequest('http://locallhost:8080/products', {
            status: 200,
            response: PRODUCTS
        });
    });
    afterEach(() => {
        moxios.uninstall();
    });
    it('should load products to redux store and display in component', () => {
        // stub a promise, npm i moxios -D
        const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);
        const wrapper = mount(
            <Provider store={createStoreWithMiddleWare(rootReducer)}>
                <Products />
            </Provider>
        );
        moxios.wait(() => {
            // ajax is done

            // may need to update to see latest result
            wrapper.update(); // forceUpdate()
            expect(wrapper.find('tbody tr')).toHaveLength(PRODUCTS.length);
            wrapper.unmount();
        });

    });
});
