import { browser, by, element } from 'protractor';

export class IHDCRMPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ihd-root h1')).getText();
  }
}
