import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block
  it('should check the lion-form inside the render function of customer-details', async () => {
    const el = await fixture('<customer-details></customer-details>');
    await expect(el.shadowRoot.querySelector('lion-form')).to.be.accessible({
      ignoredRules: ['aria-allowed-attr', 'duplicate-id'],
    });
  });

  it('should check the lion-input for first name inside the lion-form', async () => {
    const el = await fixture('<customer-details></customer-details>');
    await expect(
      el.shadowRoot.querySelectorAll('lion-input')[0]
    ).to.be.accessible();
    await expect(
      el.shadowRoot.querySelectorAll('lion-input')[0].getAttribute('id')
    ).to.equal('first_name');
  });

  it('should check the lion-input for last name inside the lion-form', async () => {
    const el = await fixture('<customer-details></customer-details>');
    await expect(
      el.shadowRoot.querySelectorAll('lion-input')[1]
    ).to.be.accessible();
    await expect(
      el.shadowRoot.querySelectorAll('lion-input')[1].getAttribute('id')
    ).to.equal('last_name');
  });

  it('should check the lion-input-datepicker inside the lion-form', async () => {
    const el = await fixture('<customer-details></customer-details>');
    await expect(
      el.shadowRoot.querySelector('lion-input-datepicker')
    ).to.be.accessible();
    await expect(
      el.shadowRoot.querySelector('lion-input-datepicker').getAttribute('id')
    ).to.equal('dateof_birth');
  });

  it('should check the lion-input-email inside the lion-form', async () => {
    const el = await fixture('<customer-details></customer-details>');
    await expect(
      el.shadowRoot.querySelector('lion-input-email')
    ).to.be.accessible();
    await expect(
      el.shadowRoot.querySelector('lion-input-email').getAttribute('id')
    ).to.equal('email');
  });

  it('should check the lion-input for mobile number inside the lion-form', async () => {
    const el = await fixture('<customer-details></customer-details>');
    await expect(
      el.shadowRoot.querySelectorAll('lion-input')[2]
    ).to.be.accessible();
    await expect(
      el.shadowRoot.querySelectorAll('lion-input')[2].getAttribute('id')
    ).to.equal('mobile_number');
  });

  it('should check the lion-input-amount for monthly salary inside the lion-form', async () => {
    const el = await fixture('<customer-details></customer-details>');
    await expect(
      el.shadowRoot.querySelectorAll('lion-input-amount')[0]
    ).to.be.accessible();
    await expect(
      el.shadowRoot.querySelectorAll('lion-input-amount')[0].getAttribute('id')
    ).to.equal('monthly_salary');
  });

  it('should check the lion-input-amount for EMIs inside the lion-form', async () => {
    const el = await fixture('<customer-details></customer-details>');
    await expect(
      el.shadowRoot.querySelectorAll('lion-input-amount')[1]
    ).to.be.accessible();
    await expect(
      el.shadowRoot.querySelectorAll('lion-input-amount')[1].getAttribute('id')
    ).to.equal('EMIs_amount');
  });
});
