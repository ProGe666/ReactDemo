import {mount, render, shallow} from 'enzyme';
import React from 'react';
import Names, {NamesTest} from "../Names";
import {Provider} from "react-redux";
import {rootReducer} from "../../reducers/root.reducer";
import {createStore} from "redux";
import {Name} from "../Name";

describe('names component', () => {
    /** 3 important methods
     *  render: static render react component(and children) to static HTML not in JSDOM
     *          No lifecycle hook methods are invoked
     *  shallow: just render the given component and none of its children
     *           componentDidMount and componentDidUpdate will not be invoked
     *  mount: render the component and all its children components.
     *         rendered DOM tree will be retained in JSDOM for later use
     *         All lifecycle hooks methods will be invoked
     */
    // render() return static html
    it('should render a ul', () => {
        const wrapper = render(
            <Provider store={createStore(rootReducer)}>
                <Names />
            </Provider>
        );
        expect(wrapper._root[0].name).toBe('ul');
    });

    // shallow: return children as normal html element
    it('should display 3 <Names/> element ', function () {
        const NAMES = ['bob', 'alice', 'alex'];
        const wrapper = shallow(
            <NamesTest names={NAMES}/>
        );
        expect(wrapper.find(Name)).toHaveLength(3);
        wrapper.unmount();
    });

    // mount: Full rendering
    it('should display every name in a Name Component', function () {
        const NAMES = ['bob', 'alice', 'alex'];
        const wrapper = mount(
            <Provider store={createStore(rootReducer, {names: NAMES})}>
                <Names />
            </Provider>
        );
        // expect(wrapper.find(Name)).toHaveLength(3);
        for(let i in NAMES) {
            expect(wrapper.find(Name).at(i).text()).toEqual(NAMES[i]);
        }
        wrapper.unmount();
    });

});
