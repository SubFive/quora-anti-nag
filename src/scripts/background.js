import ext from "./utils/ext";

// adapted from https://github.com/mdn/webextensions-examples/blob/master/cookie-bg-picker/background_scripts/background.js


function cookieUpdate() {
  ext.tabs.query({active: true, currentWindow: true},
    (tabs) => {

      ext.cookies.remove({'name': 'm-b', 'url': tabs[0].url}, () => {});
      ext.cookies.remove({'name': 'm-b_lax', 'url': tabs[0].url}, () => {});
      ext.cookies.remove({'name': 'm-b_strict', 'url': tabs[0].url}, () => {});
      // ext.cookies.getAll(
      //   { url: tabs[0].url },
      //   (cookies) => {
      //     cookies.forEach(c => {
      //     });
      //   }
      // );

    }
  );
}
ext.tabs.onUpdated.addListener(cookieUpdate);
ext.tabs.onActivated.addListener(cookieUpdate);

