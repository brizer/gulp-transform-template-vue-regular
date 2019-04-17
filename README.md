# gulp-transform-template-vue-regular [![npm](https://img.shields.io/npm/v/gulp-transform-template-vue-regular.svg?maxAge=2592000)](https://www.npmjs.com/package/gulp-transform-template-vue-regular) 

A Gulp plugin to convert vue to regular using [transform-template-vue-regular](https://github.com/brizer/transform-template-vue-regular)


## Install

```
$ npm install gulp-transform-template-vue-regular --save
```


## Example

Use it with gulp

``` js
//gulpfile.js
const gulp = require('gulp')
const gulpTrans = require('gulp-transform-template-vue-regular')

const parseTemplateTask = ()=>{
    gulp.src(`someSrcPath/**/*.html`)
    .pipe(gulpTrans())
    .pipe(gulp.dist(`someDistPath/`))
}
parseTemplateTask()

```

