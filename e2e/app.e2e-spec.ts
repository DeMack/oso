import { OsoPage } from './app.po';

describe('oso App', function() {
  let page: OsoPage;

  beforeEach(() => {
    page = new OsoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
