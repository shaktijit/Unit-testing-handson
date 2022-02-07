import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('should check the LoanApplication component', async () => {
    const el = await fixture('<loan-application></loan-application>');
    await expect(el).shadowDom.to.equal(`<div>
    <dash-board> </dash-board>
  </div>`);
  });
});
