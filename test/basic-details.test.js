import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files

  it('should check the lion-form element', async () => {
    const el = await fixture('<basic-details></basic-details>');
    await expect(el.shadowRoot.querySelector('lion-form')).to.be.accessible({
      ignoredRules: ['label', 'label-title-only'],
    });
  });

  it('should check the basic web form inside the lion-form', async () => {
    const el = await fixture('<basic-details></basic-details>');
    expect(el.shadowRoot.querySelector('form')).to.be.accessible({
      ignoredRules: ['label', 'label-title-only'],
    });
    expect(el.shadowRoot.querySelector('form').getAttribute('class')).to.equal(
      'basic-web-form'
    );
  });

  it('should check the lion-input inside the basic web form', async () => {
    const el = await fixture('<basic-details></basic-details>');
    await expect(el.shadowRoot.querySelector('lion-input')).to.be.accessible({
      ignoredRules: ['label', 'label-title-only'],
    });
    expect(
      el.shadowRoot.querySelector('lion-input').getAttribute('class')
    ).to.equal('type form-field');
    expect(
      el.shadowRoot.querySelector('lion-input').getAttribute('id')
    ).to.equal('type');
  });

  it('should check the lion-input-amount inside the basic web form', async () => {
    const el = await fixture('<basic-details></basic-details>');
    await expect(
      el.shadowRoot.querySelector('lion-input-amount')
    ).to.be.accessible({
      ignoredRules: ['label', 'label-title-only'],
    });
    expect(
      el.shadowRoot.querySelector('lion-input-amount').getAttribute('class')
    ).to.equal('amount form-field');
    expect(
      el.shadowRoot.querySelector('lion-input-amount').getAttribute('id')
    ).to.equal('amount');
  });

  it('should check the div after the lion-input-amount', async () => {
    const el = await fixture('<basic-details></basic-details>');
    expect(
      el.shadowRoot.querySelectorAll('div')[3].getAttribute('id')
    ).to.equal('word');
  });

  it('should check the lion-input-range inside the basic web form', async () => {
    const el = await fixture('<basic-details></basic-details>');
    await expect(
      el.shadowRoot.querySelector('lion-input-range')
    ).to.be.accessible({
      ignoredRules: ['label', 'label-title-only'],
    });
    // expect(
    //   el.shadowRoot.querySelector('lion-input-range').getAttribute('class')
    // ).to.equal('period form-field');
    expect(
      el.shadowRoot.querySelector('lion-input-range').getAttribute('id')
    ).to.equal('Period');
  });
});
