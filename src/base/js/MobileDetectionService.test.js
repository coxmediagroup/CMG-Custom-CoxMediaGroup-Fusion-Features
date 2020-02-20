import { MobileDetectionService } from './MobileDetectionService';

describe('MobileDetectionService tests', () => {
  function updateUserAgent(userAgent) {
    // overwrite current window.navigator.userAgent
    Object.defineProperty(window.navigator, 'userAgent', {
      value: userAgent,
      writable: true,
    });
  }

  test("that all detections fail because we don't have a real device during testing", () => {
    expect(MobileDetectionService.Android()).toBeFalsy();
    expect(MobileDetectionService.AndroidTablet()).toBeFalsy();
    expect(MobileDetectionService.AndroidOld()).toBeFalsy();
    expect(MobileDetectionService.BlackBerry()).toBeFalsy();
    expect(MobileDetectionService.FirefoxOS()).toBeFalsy();
    expect(MobileDetectionService.iPhone()).toBeFalsy();
    expect(MobileDetectionService.iPad()).toBeFalsy();
    expect(MobileDetectionService.iOS()).toBeFalsy();
    expect(MobileDetectionService.Kindle()).toBeFalsy();
    expect(MobileDetectionService.KindleFire()).toBeFalsy();
    expect(MobileDetectionService.Retina()).toBeFalsy();
    expect(MobileDetectionService.Silk()).toBeFalsy();
    expect(MobileDetectionService.tablet()).toBeFalsy();
    expect(MobileDetectionService.Windows()).toBeFalsy();
    expect(MobileDetectionService.any()).toBeFalsy();
    expect(MobileDetectionService.all()).toBeTruthy(); // except this one which detects anything
  });

  test('that we can override the user agent', () => {
    const fauxUserAgent = 'a false user agent';
    updateUserAgent(fauxUserAgent);

    expect(window.navigator.userAgent).toEqual(fauxUserAgent);
  });

  test('that we properly detect and reject an android device', () => {
    updateUserAgent('an Android device');
    expect(MobileDetectionService.Android()).toBeTruthy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.Android()).toBeFalsy();
  });

  test('that we properly detect and reject an android tablet device', () => {
    updateUserAgent('an Android device');
    expect(MobileDetectionService.AndroidTablet()).toBeTruthy();

    updateUserAgent('an Android Mobile device');
    expect(MobileDetectionService.AndroidTablet()).toBeFalsy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.AndroidTablet()).toBeFalsy();
  });

  test('that we properly detect and reject an old android device', () => {
    updateUserAgent('an Android 2.3.3 device');
    expect(MobileDetectionService.Android()).toBeTruthy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.AndroidOld()).toBeFalsy();
  });

  test('that we properly detect and reject a kindle device', () => {
    updateUserAgent('a Kindle device');
    expect(MobileDetectionService.Kindle()).toBeTruthy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.Kindle()).toBeFalsy();
  });

  test('that we properly detect and reject a kindle fire device', () => {
    updateUserAgent('a KFOT device');
    expect(MobileDetectionService.KindleFire()).toBeTruthy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.KindleFire()).toBeFalsy();
  });

  test('that we properly detect and reject a silk device', () => {
    updateUserAgent('a Silk device');
    expect(MobileDetectionService.Silk()).toBeTruthy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.Silk()).toBeFalsy();
  });

  test('that we properly detect and reject a blackberry device', () => {
    updateUserAgent('a Blackberry device');
    expect(MobileDetectionService.BlackBerry()).toBeTruthy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.BlackBerry()).toBeFalsy();
  });

  test('that we properly detect and reject an iOS device', () => {
    updateUserAgent('a iPhone device');
    expect(MobileDetectionService.iOS()).toBeTruthy();

    updateUserAgent('a iPad device');
    expect(MobileDetectionService.iOS()).toBeTruthy();

    updateUserAgent('a iPod device');
    expect(MobileDetectionService.iOS()).toBeTruthy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.iOS()).toBeFalsy();
  });

  test('that we properly detect and reject an iPhone device', () => {
    updateUserAgent('a iPhone device');
    expect(MobileDetectionService.iPhone()).toBeTruthy();

    updateUserAgent('a iPod device');
    expect(MobileDetectionService.iPhone()).toBeTruthy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.iPhone()).toBeFalsy();
  });

  test('that we properly detect and reject an iPad device', () => {
    updateUserAgent('a iPad device');
    expect(MobileDetectionService.iPad()).toBeTruthy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.iPad()).toBeFalsy();
  });

  test('that we properly detect and reject a windows device', () => {
    updateUserAgent('a IEMobile device');
    expect(MobileDetectionService.Windows()).toBeTruthy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.Windows()).toBeFalsy();
  });

  test('that we properly detect and reject a firefox os device', () => {
    updateUserAgent('a Mozilla Mobile device');
    expect(MobileDetectionService.FirefoxOS()).toBeTruthy();

    updateUserAgent('a Mozilla device');
    expect(MobileDetectionService.FirefoxOS()).toBeFalsy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.FirefoxOS()).toBeFalsy();
  });

  test('that we properly detect any device', () => {
    updateUserAgent('some Android device');
    expect(MobileDetectionService.any()).toBeTruthy();

    updateUserAgent('some Kindle device');
    expect(MobileDetectionService.any()).toBeTruthy();

    updateUserAgent('some KFOT device');
    expect(MobileDetectionService.any()).toBeTruthy();

    updateUserAgent('some Silk device');
    expect(MobileDetectionService.any()).toBeTruthy();

    updateUserAgent('some Blackberry device');
    expect(MobileDetectionService.any()).toBeTruthy();

    updateUserAgent('some iPhone device');
    expect(MobileDetectionService.any()).toBeTruthy();

    updateUserAgent('some iPad device');
    expect(MobileDetectionService.any()).toBeTruthy();

    updateUserAgent('some iPod device');
    expect(MobileDetectionService.any()).toBeTruthy();

    updateUserAgent('some IEMobile device');
    expect(MobileDetectionService.any()).toBeTruthy();

    updateUserAgent('some Mozilla Mobile device');
    expect(MobileDetectionService.any()).toBeTruthy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.any()).toBeFalsy();
  });

  test('that we properly detect and reject a tablet device', () => {
    updateUserAgent('some Android device');
    expect(MobileDetectionService.tablet()).toBeTruthy();

    updateUserAgent('some iPad device');
    expect(MobileDetectionService.tablet()).toBeTruthy();

    updateUserAgent('some Kindle device');
    expect(MobileDetectionService.tablet()).toBeTruthy();

    updateUserAgent('some KFOT device');
    expect(MobileDetectionService.tablet()).toBeTruthy();

    updateUserAgent('some Silk device');
    expect(MobileDetectionService.tablet()).toBeTruthy();

    updateUserAgent('some other device');
    expect(MobileDetectionService.tablet()).toBeFalsy();
  });

  test('that we properly detect and reject a retina device', () => {
    expect(MobileDetectionService.Retina()).toBeFalsy();

    window.retina = true;
    expect(MobileDetectionService.Retina()).toBeTruthy();

    window.retina = false;
    window.devicePixelRatio = 1;
    expect(MobileDetectionService.Retina()).toBeFalsy();

    window.devicePixelRatio = 2;
    expect(MobileDetectionService.Retina()).toBeTruthy();
  });

  test('that breakpoints are filled', () => {
    expect(MobileDetectionService.breakpointMobile()).toBeGreaterThan(0);
    expect(MobileDetectionService.breakpointTablet()).toBeGreaterThan(0);
  });
});
