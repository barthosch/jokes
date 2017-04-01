import { JokesPage } from './app.po';

describe('jokes App', () => {
  let page: JokesPage;

  beforeEach(() => {
    page = new JokesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
