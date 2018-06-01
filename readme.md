# bootstrap-enhancement

[![NPM Version][npm-image]][npm-url]
[![License Stats][npm-license]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]
[![Github stars][github-stars]][github-url]
[![Github issues][github-issues]][github-issues-url]
<!-- [![Build Status][travis-image]][travis-url] -->

> Bar chart annotation for Chart.js

[![nodei.co][npm-io]][npm-url]

## Installation

```sh
npm install bootstrap-enhancement --save
```

Or

```sh
<script src="https://unpkg.com/bootstrap-enhancement"></script>
```

## Usage example

```sh
const testEle = document.getElementById('testDom');
bse.utilities.prependClass(testEle, 'text-success');
```

![](https://rawgit.com/nerdmax/bootstrap-enhancement/master/samples/utilities/prependClass.gif)

```sh
bse.utilities.getJquery().then((jQueryFromWindow) => {
  console.log(jQueryFromWindow);
});
```

![](https://rawgit.com/nerdmax/bootstrap-enhancement/master/samples/utilities/getJquery.gif)

```sh
alert(bse.utilities.hasScrollBar());
```

![](https://rawgit.com/nerdmax/bootstrap-enhancement/master/samples/utilities/hasScrollBar.gif)

```sh
console.log(bse.utilities.getScrollBarWidth());
```

![](https://rawgit.com/nerdmax/bootstrap-enhancement/master/samples/utilities/getScrollBarWidth.gif)

```sh
bse.utilities.addStyles(`
  .test{color: red}
`);
```

![](https://rawgit.com/nerdmax/bootstrap-enhancement/master/samples/utilities/addStyles.gif)

```sh
$('#checkSize').on('click', () => {
  console.log(bse.utilities.checkBreakPoint.checkSize());
});
$('#is').on('click', () => {
  console.log(bse.utilities.checkBreakPoint.is('>md'));
});
```

![](https://rawgit.com/nerdmax/bootstrap-enhancement/master/samples/utilities/checkBreakPoint.gif)

```sh
bse.utilities.addToWindow('test', { name: 'testObject' });
```

![](https://rawgit.com/nerdmax/bootstrap-enhancement/master/samples/utilities/addToWindow.gif)

```sh
$('#addScrollMessToResTableInit').on('click', () => {
  bse.addScrollMessToResTable.init();
});
$('#addScrollMessToResTableUpdate').on('click', () => {
  bse.addScrollMessToResTable.update();
});
```

![](https://rawgit.com/nerdmax/bootstrap-enhancement/master/samples/addScrollMessToResTable.gif)

```sh
$('#scrollToTopInit').on('click', () => {
  bse.scrollToTop.init('<p class="text-danger">SCROLL TO TOP</p>');
});
```

![](https://rawgit.com/nerdmax/bootstrap-enhancement/master/samples/scrollToTop.gif)

```sh
$('#resListInit').on('click', () => {
  bse.resList.init();
});
```

![](https://rawgit.com/nerdmax/bootstrap-enhancement/master/samples/resList.gif)

_For more examples and usage, please refer to the [Documentation](https://nerdmax.github.io/bootstrap-enhancement/)._

## Development setup

```sh
git clone git@github.com:nerdmax/bootstrap-enhancement.git
cd bootstrap-enhancement
npm install
```

## Report Issues
Please create the issues sample here: https://plnkr.co/edit/RtNBbVd3bwG3ZHzfdxMw
This plunker contains everything you need for bootstrap-enhancement including jQuery, bootstrap, bootstrap-enhancement
After creating the sample, click top left Fork button and copy the link and attach it to the issue page.


## Release History

## Meta

Max LIU – [My personal website](#) – mrliucan@foxmail.com


## Contributing

1. Fork it (<https://github.com/nerdmax/bootstrap-enhancement/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/bootstrap-enhancement.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/bootstrap-enhancement
[npm-license]: https://img.shields.io/npm/l/bootstrap-enhancement.svg
[npm-downloads]: https://img.shields.io/npm/dm/bootstrap-enhancement.svg?style=flat-square
[github-url]: https://github.com/nerdmax/bootstrap-enhancement
[github-issues]: https://img.shields.io/github/issues/nerdmax/bootstrap-enhancement.svg
[github-issues-url]: https://github.com/nerdmax/bootstrap-enhancement/issues
[github-stars]: https://img.shields.io/github/stars/nerdmax/bootstrap-enhancement.svg
[travis-image]: https://img.shields.io/travis/dbader/node-bootstrap-enhancement/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-bootstrap-enhancement
[npm-io]: https://nodei.co/npm/bootstrap-enhancement.png?downloads=true&downloadRank=true&stars=true
[wiki]: https://github.com/nerdmax/bootstrap-enhancement/wiki
