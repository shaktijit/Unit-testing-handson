import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('should check the div inside Success', async () => {
    const el = await fixture(html`<div></div>`);
    await expect(el).to.be.accessible();
  });
  it('should check the lion-button inside the Success div', async () => {
    const el = await fixture(
      html`<lion-button class="home-btn"></lion-button>`
    );
    expect(el.getAttribute('class')).equal('home-btn');
  });
});

describe('error screen', () => {
  // Write test cases inside this block
  it('should check the div inside Error', async () => {
    const el = await fixture(html`<div></div>`);
    await expect(el).to.be.accessible();
  });
  it('should check the lion-button inside the Error div', async () => {
    const el = await fixture(
      html`<lion-button class="home-btn"></lion-button>`
    );
    expect(el.getAttribute('class')).equal('home-btn');
  });
});
