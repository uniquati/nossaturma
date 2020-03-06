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
    ].join('');
    // console.log(fileName);
    cb(null, fileName);
}

const resizeConfig = (file, cb) => {
    const cloneFile = file.clone()
    cloneFile.scale = {maxWidth: 1600}
    cb(null, [cloneFile])
}

function streamTask(){
    return src('src/assets/**/*.{jpeg,jpg,JPG,png,gif}')
    .pipe(flatMap(resizeConfig))
    .pipe(scaleImages(computeFileName))
    .pipe(dest('dist/assets/'));
}

function otimizarParaFirebase(){
    return src('albums/placa/*.{jpeg,jpg,JPG,png,gif}')
    .pipe(flatMap(resizeConfig))
    .pipe(scaleImages(computeFileName))
    .pipe(dest('database/placa'));
}

exports.resizeImages = streamTask;
exports.buildFirebase = otimizarParaFirebase;
