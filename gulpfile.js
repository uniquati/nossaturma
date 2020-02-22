/**
 * Task para redimensionar imagens
 * https://www.npmjs.com/package/gulp-scale-images
 */
const { src, dest } = require('gulp');
const flatMap = require('flat-map').default;
const scaleImages = require('gulp-scale-images');
const path = require('path');

const computeFileName = (output, scale, cb) => {
    const fileName = [
        path.basename(output.path, output.extname), // strip extension
        output.extname
    ].join('')
    cb(null, fileName)
}

const resizeConfig = (file, cb) => {
    const cloneFile = file.clone()
    cloneFile.scale = {maxWidth: 1600}
    cb(null, [cloneFile])
}

function streamTask(){
    return src('src/assets/photos/**/*.{jpeg,jpg,png,gif}')
    .pipe(flatMap(resizeConfig))
    .pipe(scaleImages(computeFileName))
    .pipe(dest('dist/assets/photos'))
}

function otimizarParaFirebase(){
    return src('albums/**/*.{jpeg,jpg,png,gif}')
    .pipe(flatMap(resizeConfig))
    .pipe(scaleImages(computeFileName))
    .pipe(dest('database'))
}

exports.resizeImages = streamTask;
exports.buildFirebase = otimizarParaFirebase;
