import { browser, element, by } from 'protractor';

import { hasClass } from './e2e-helper';

describe('nga-route-tabset', () => {
  beforeEach(() => {
    browser.get('#/route-tabset');
  });

  it('should display default route-tabset', () => {
    expect(element(by.css('nga-route-tabset:nth-child(1) > ul.nga-route-tabset > li:nth-child(1)'))
      .getText()).toEqual('Tab #1');

    expect(element(by.css('nga-route-tabset:nth-child(1) > ul.nga-route-tabset > li:nth-child(2)'))
      .getText()).toEqual('Tab #2');
  });

  it('should to change tabs of a route-tabset"', () => {
    const tab2 = by.css('nga-route-tabset:nth-child(1) > ul.nga-route-tabset > li:nth-child(2)');

    element(tab2).click()
      .then(() => {
        expect(hasClass(element(tab2), 'active')).toBe(true);
        expect(browser.getCurrentUrl()).toContain('/#/route-tabset/tab2');
      });

    const tab1 = by.css('nga-route-tabset:nth-child(1) > ul.nga-route-tabset > li:nth-child(1)');

    element(tab1).click()
      .then(() => {
        expect(hasClass(element(tab1), 'active')).toBe(true);
        expect(browser.getCurrentUrl()).toContain('/#/route-tabset/tab1');
      });
  });

  it('should display a full-width route-tabset', () => {
    expect(element(by.css('nga-route-tabset:nth-child(2) > ul.nga-route-tabset > li:nth-child(1)'))
      .getText()).toEqual('Tab #1');

    expect(element(by.css('nga-route-tabset:nth-child(2) > ul.nga-route-tabset > li:nth-child(2)'))
      .getText()).toEqual('Tab #2');
  });

  it('should to change tabs of a full-width route-tabset', () => {
    const tab2 = by.css('nga-route-tabset:nth-child(2) > ul.nga-route-tabset > li:nth-child(2)');

    element(tab2).click()
      .then(() => {
        expect(hasClass(element(tab2), 'active')).toBe(true);
        expect(browser.getCurrentUrl()).toContain('/#/route-tabset/tab2');
      });

    const tab1 = by.css('nga-route-tabset:nth-child(2) > ul.nga-route-tabset > li:nth-child(1)');

    element(tab1).click()
      .then(() => {
        expect(hasClass(element(tab1), 'active')).toBe(true);
        expect(browser.getCurrentUrl()).toContain('/#/route-tabset/tab1');
      });
  });
});