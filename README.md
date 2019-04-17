# gulp-transform-template-vue-regular

A Gulp plugin to convert vue to regular using [transform-template-vue-regular]('https://github.com/brizer/gulp-transform-template-vue-regular')

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

