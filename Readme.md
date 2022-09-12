# About

This is a browser extension that allows you to hide posts made by anonymous
users on 9GAG.

Motivation for this is that it's not possible to block anonymous users and thus
your stream gets cluttered with low-quality content.

As a solution this extension allows you to just hide _all_ posts made by
anonymous users. For this the extension adds a new button to the header
navigation:
<img src="icons/show.svg" width="36" title="Toggle visibility of posts by anonymous users"/>

When you click on it all posts made by anonymous users get collapsed in your
stream and the button's icon changes:
<img src="icons/hide.svg" width="36" title="Toggle visibility of posts by anonymous users"/>

Enjoy your anonymous-free 9GAG stream!

## Known Bugs & Limitations

Unfortunately completely hiding or removing the anonymous posts will screw up
scrolling using the keyboard shortcuts `J` and `K`. Therefore the blocked posts
are "hidden" by restricting their height to 40px. This means those posts are
still part of the stream but only their header is visible.

But this also means that scrolling using the keyboard shortcuts `J` and `K` will
stop at these collapsed posts, too. This may give the impression that scrolling
to the next post didn't work correctly.

If anyone knows a better solution for this issue, please see below on how to
contribute.

# Installation

You can download and install the offical release of this extension called
"9GAG AnonBlocker" from
* the [Chrome Web Store](https://chrome.google.com/webstore/detail/9gag-anonblocker/aelmmdnbcnecjaojaknoabfiacddfmkl)
  for Chrome/Chromium browser
* [addons.mozilla.org](https://addons.mozilla.org/de/firefox/addon/9gag-anonblocker/) for Firefox
* [addons.opera.com](https://addons.opera.com/en/extensions/details/9gag-anonblocker/) for Opera

## Manual Installation

If you want to install this extension manually from source follow these
instructions.

This extension should be compatible with all browsers supporting WebExtensions
[manifest v3](https://developer.chrome.com/docs/extensions/mv3/intro/)
(currently Chrome/Chromium and Safari) and browsers supporting WebExtensions
[manifest v2](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version#browser_compatibility)
(Firefox, Opera, Edge).

1. Download this extension by going to the
[latest release](https://github.com/acran/9gag-anonblocker/releases)
and selecting the appropriate ZIP file:
    * `9gag-anonblocker.zip`: for browsers supporting manifest v3
    * `9gag-anonblocker_manifest_v2.zip`: for browsers only supporting manifest v2

2. Unpack the downloaded archive in a new directory

3. Load the unpacked extension in your browser:
    * [Chrome/Chromium](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked):
      go to **chrome://extensions/**,
      enable **Developer Mode** by switching the toggle,
      click **Load unpacked** to select the directory with the unpacked extension

	* [Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/):
      go to **about:debugging** > This Firefox,
      click **Load Temporary Add-on** and select the directory with the unpacked
      extension

    * [Opera](https://dev.opera.com/extensions/basics/#step-4-testing-your-extension):
      go to **opera:extensions**,
      enable **Developer Mode** by switching the toggle,
      click **Load unpacked** to select the directory with the unpacked extension

	* other browsers: please look up your browser's documentation

# Development & Contribution

Contributions to this extension are very welcome. Just raise an
[issue](https://github.com/acran/9gag-anonblocker/issues) or open a
[pull request](https://github.com/acran/9gag-anonblocker/pulls)!

For local development just clone
[this repository](https://github.com/acran/9gag-anonblocker)
and load it as an _unpacked extension_ as described above:
~~~sh
git clone https://github.com/acran/9gag-anonblocker.git
~~~

When developing for a browser supporting only the WebExtensions manifest v2,
e.g., Firefox, you must first replace [manifest.json](manifest.json) with
[manifest_v2.json](manifest_v2.json).
