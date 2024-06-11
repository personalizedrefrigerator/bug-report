
This branch demonstrates a [TypeDoc bug](https://github.com/TypeStrong/typedoc/issues/2589). Since roughly v0.25.9, including large scripts with a `<script>` tag on `head.end` causes icons to not display in Firefox and Chromium.

To test, run `npm i && npm run build && npm run doc`.
