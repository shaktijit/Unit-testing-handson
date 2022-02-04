import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block
  it('should check the starting div of the render function', async () => {
    const el = await fixture('<div class="container"></div>');
    expect(el.getAttribute('class')).to.equal('container');
  });

  // it('should check the lion-form element', async () => {
  //   const el = await fixture(
  //     html`<lion-form @submit=${submitHandler}></lion-form>`
  //   );
  //   await expect(el).to.be.accessible();
  // });

  it('should check the lion-input for first name inside lion-form', async () => {
    const el = await fixture(html`<lion-input name="first_name" id="first_name">
    </lion-input>`);
    await expect(el).to.be.accessible({
      ignoredRules: ['label', 'label-title-only'],
    });
  });

  it('should check the lion-input for last name inside lion-form', async () => {
    const el = await fixture(html`<lion-input name="last_name" id="last_name">
    </lion-input>`);
    await expect(el).to.be.accessible({
      ignoredRules: ['label', 'label-title-only'],
    });
  });

  it('should check the lion-input-datepicker inside lion-form', async () => {
    const el = await fixture(html`<lion-input-datepicker
      name="dateof_birth"
      id="dateof_birth"
    >
    </lion-input-datepicker>`);
    await expect(el).to.be.accessible({
      ignoredRules: ['label', 'label-title-only'],
    });
  });

  it('should check the lion-input-email inside lion-form', async () => {
    const el = await fixture(html`<lion-input-email name="email" id="email">
    </lion-input-email>`);
    await expect(el).to.be.accessible({
      ignoredRules: ['label', 'label-title-only'],
    });
  });

  it('should check the lion-input for mobile number inside lion-form', async () => {
    const el = await fixture(html`<lion-input
      name="mobile_number"
      id="mobile_number"
    >
    </lion-input>`);
    await expect(el).to.be.accessible({
      ignoredRules: ['label', 'label-title-only'],
    });
  });

  it('should check the lion-input-amount for monthly salary inside lion-form', async () => {
    const el = await fixture(html`<lion-input-amount
      name="monthly_salary"
      id="monthly_salary"
    >
    </lion-input-amount>`);
    await expect(el).to.be.accessible({
      ignoredRules: ['label', 'label-title-only'],
    });
  });

  it('should check the lion-input-amount for EMIs inside lion-form', async () => {
    const el = await fixture(html`<lion-input-amount
      name="EMIs_amount"
      id="EMIs_amount"
    >
    </lion-input-amount>`);
    await expect(el).to.be.accessible({
      ignoredRules: ['label', 'label-title-only'],
    });
  });

  // it('should check the lion-checkbox-group inside lion-form', async () => {
  //   const el = await fixture(html`<lion-checkbox-group id="terms" name="terms">
  //   </lion-checkbox-group>`);
  //   await expect(el).to.be.accessible({
  //     ignoredRules: ['label', 'label-title-only'],
  //   });
  // });
});
