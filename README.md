# connect-browser-sync

[Connect](https://github.com/senchalabs/connect) middleware for [BrowserSync](https://github.com/shakyShane/browser-sync).

Use this middleware to automatically inject the necessary BrowserSync `<script>` tags into your HTML pages. Alternatively, you can integrate BrowserSync with your app using [Gulp](https://github.com/shakyShane/gulp-browser-sync) or [Grunt](https://github.com/shakyShane/grunt-browser-sync).

## Usage

Assuming you will only use BrowserSync in development:

```
npm install browser-sync --save-dev
npm install connect-browser-sync --save-dev
```

```javascript
// app.js
var express = require('express');
var app = express();

// Other configuration...

if (app.get('env') == 'development') {
  var browserSync = require('browser-sync');
  var bs = browserSync.init([], {});
  app.use(require('connect-browser-sync')(bs));
}

app.use(app.router);

// Routes and handlers...
```

See the [BrowserSync API docs](https://github.com/shakyShane/browser-sync/wiki/api#wiki-api) for initialization options.

## Notes

- The `app.use` statement must come before any handlers that you want to integrate with BrowserSync. This includes dynamic handlers (e.g. `app.use(app.router);`) and static handlers (e.g. `app.use(express.static(__dirname + '/public'));`)
- This plugin has no explicit dependency on the `browser-sync` package, but you should use version 0.5.7 or greater.
- Injection only happens on responses with a `Content-Type` header of `text/html` and content containing a closing body tag (`</body>`).

## Example

See the [example](example) folder.

## License

Copyright &copy; 2014 Chris Schmich
<br>
MIT License, See [LICENSE](LICENSE) for details.
