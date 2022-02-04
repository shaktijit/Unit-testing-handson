import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('should check the shadowDOM inside Success', async () => {
    const el = await fixture('<loan-success></loan-success>');
    await expect(el.shadowRoot.querySelector('div')).to.be.accessible({
      ignoredRules: ['aria-command-name'],
    });
  });
});

describe('error screen', () => {
  // Write test cases inside this block
  it('should check the shadowDOM inside Error', async () => {
    const el = await fixture('<loan-error></loan-error>');
    await expect(el.shadowRoot.querySelector('div')).to.be.accessible({
      ignoredRules: ['aria-command-name'],
    });
  });
});
