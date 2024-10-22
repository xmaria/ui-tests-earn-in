import { Route, Page, expect } from '@playwright/test';

export async function interceptSegmentRequests(page: Page, screenNameExpected: string) {
  await page.route('https://api.segment.io/v1/t', async (route: Route) => {
    const request = route.request();

    // get post data
    const postData = request.postDataJSON();
    console.log('Intercepted Segment request:', postData);

    // Check if it's a "User viewed Screen" event
    if (postData?.event === 'User viewed Screen') {
      const screenName = postData?.properties?.screenName;
      console.log('ScreenName:', screenName);

      // Assert the screenName
      expect(screenName).toBeDefined();
      expect(screenName).toEqual(screenNameExpected);
    }

    // Continue the request
    await route.continue();
  });
}
