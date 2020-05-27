import React from 'react';
import TagsList from "../TagsList";
import renderer from 'react-test-renderer';

describe('The tags list snapshot', () => {
  it('renders list as expexted', () => {
    const tree = renderer.create(<TagsList tags={['css', 'html', 'js']} />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  })
})