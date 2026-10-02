import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    await page.goto('http://127.0.0.1:4173', { waitUntil: 'domcontentloaded' });
    await page.locator('.preloader').waitFor({ state: 'detached', timeout: 5000 });
    await page.waitForTimeout(2000);
    const client = await page.context().newCDPSession(page);
    async function swipe() {
        await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 190, y: 650 }] });
        for (const y of [645, 635, 610, 560, 480, 380, 260]) { await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: 190, y }] }); await page.waitForTimeout(25); }
        await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    }
    await swipe();
    assert.ok(await page.evaluate(() => scrollY < 10), 'Touch cannot advance before exit completes');
    await page.waitForFunction(() => document.querySelector('main').dataset.transitioning === 'false');
    assert.equal(await page.evaluate(() => location.hash), '#interior');
    await page.waitForTimeout(2000);
    await swipe();
    await page.waitForFunction(() => document.querySelector('main').dataset.transitioning === 'false');
    assert.equal(await page.evaluate(() => location.hash), '#property-story');
    console.log('Touch swipe sequencing passed for both sections.');
} finally { await browser.close() }
