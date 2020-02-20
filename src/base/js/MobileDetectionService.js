/* eslint-disable */
export class MobileDetectionService {
  static Android() {
    return !!navigator.userAgent.match(/Android/i);
  }

  static AndroidOld() {
    return !!navigator.userAgent.match(/Android 2.3.3/i);
  }

  static AndroidTablet() {
    return !!(
      navigator.userAgent.match(/Android/i) &&
      !navigator.userAgent.match(/Mobile/i)
    );
  }

  static Kindle() {
    return !!navigator.userAgent.match(/Kindle/i);
  }

  static KindleFire() {
    return !!navigator.userAgent.match(/KFOT/i);
  }

  static Silk() {
    return !!navigator.userAgent.match(/Silk/i);
  }

  static BlackBerry() {
    return !!navigator.userAgent.match(/BlackBerry/i);
  }

  static iOS() {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  }

  static iPhone() {
    return !!navigator.userAgent.match(/iPhone|iPod/i);
  }

  static iPad() {
    return !!navigator.userAgent.match(/iPad/i);
  }

  static Windows() {
    return !!navigator.userAgent.match(/IEMobile/i);
  }

  static FirefoxOS() {
    return (
      !!navigator.userAgent.match(/Mozilla/i) &&
      !!navigator.userAgent.match(/Mobile/i)
    );
  }

  static Retina() {
    return window.retina || window.devicePixelRatio > 1;
  }

  static any() {
    return (
      this.Android() ||
      this.Kindle() ||
      this.KindleFire() ||
      this.Silk() ||
      this.BlackBerry() ||
      this.iOS() ||
      this.Windows() ||
      this.FirefoxOS()
    );
  }

  static all() {
    return navigator.userAgent;
  }

  static tablet() {
    return (
      this.AndroidTablet() ||
      this.iPad() ||
      this.Kindle() ||
      this.KindleFire() ||
      this.Silk()
    );
  }

  static breakpointMobile() {
    return 660;
  }

  static breakpointTablet() {
    return 960;
  }
}

export default MobileDetectionService;
