import { IHDCRMPage } from './app.po';

describe('ihd-crm App', () => {
  let page: IHDCRMPage;

  beforeEach(() => {
    page = new IHDCRMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ihd!!');
  });
});
