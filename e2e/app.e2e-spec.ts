import { IWWebPage } from './app.po';

describe('ak-web App', () => {
  let page: IWWebPage;

  beforeEach(() => {
    page = new IWWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
