import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(
            by.css('workshop-angular-development-root h1')
        ).getText();
    }
}
