import React from 'react';
import AlbumCard from '../AlbumCard';
import Card from '@material-ui/core/Card';
import {mount} from 'enzyme';
import sinon from 'sinon';

it('handles click correctly', () => {
    const handleClick = sinon.spy();
    const wrapper = mount(
        <AlbumCard
            title={'Title One UNO'}
            userId={'User ID 123'}
            id={'aabb'}
            dispatch={handleClick}
            clickable={true}
        />
    );
    expect(handleClick.calledOnce).toEqual(false);
    wrapper.find(Card).simulate('click');
    expect(handleClick.calledOnce).toEqual(true);
});
