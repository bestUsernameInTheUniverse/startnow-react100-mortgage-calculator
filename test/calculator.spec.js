/* global define, it, describe */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './../src/js/app';

describe('App Component', function () {
  this.timeout(15000);
  this.slow(3000);

  it('should shallow render', () => {
    expect(shallow(<App />).contains(<h1>Mortgage Calculator</h1>)).to.equal(true);
  });
});
