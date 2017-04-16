import { SitepointPage } from './app.po';

describe('sitepoint App', () => {
  let page: SitepointPage;

  beforeEach(() => {
    page = new SitepointPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
