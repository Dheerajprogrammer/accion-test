import { AccionPage } from './app.po';

describe('accion App', () => {
  let page: AccionPage;

  beforeEach(() => {
    page = new AccionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
