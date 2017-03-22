import { FinancialAppPage } from './app.po';

describe('financial-app App', function() {
  let page: FinancialAppPage;

  beforeEach(() => {
    page = new FinancialAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
