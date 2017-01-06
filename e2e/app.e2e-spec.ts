import { ShadowsitePage } from './app.po';

describe('shadowsite App', function() {
  let page: ShadowsitePage;

  beforeEach(() => {
    page = new ShadowsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
