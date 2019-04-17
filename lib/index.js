const Stream = require('stream')
const through = require('through2')
const trans = require('transform-template-vue-regular')

/**
 * transform vue template to regular template
 */
const gulpTransform = ()=>{

    return through.obj(function(file,enc,cb){
        const {contents} = file

        if(file.isNull()){
            this.push(file)
            return cb()
        }

        if(file.isStream()){
            cb(new PluginError('gulp-transform-template-vue-regular', 'Streaming not supported'));
            return
        }

        try{
            const outContent = trans.transform(contents.toString())
            file.contents = Buffer.from(outContent)
        }catch(err){
            cb(new PluginError('gulp-transform-template-vue-regular', err));
            return
        }
        this.push(file)
        cb()
    })
}

module.exports = gulpTransform