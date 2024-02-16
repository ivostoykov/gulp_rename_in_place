const gulp = require('gulp');
const watch = require('gulp-watch');
const path = require('path');
const fs = require('fs');

const baseDir = '.';
const mp3Path = `${baseDir}*.mp3`;

function getNewName(originalName){
    const newName = originalName
    .replace(/-{1,}|\,{1,}/g, ' ')
    .replace(/\.{1,}/g, ' ')
    .trim()
    .replace(/\s{1,}/g, '_')
    .toLowerCase();

    return newName !== originalName ? newName : false;
}

gulp.task('watch-mp3', function() {
    return watch(mp3Path, { base: baseDir, events: ['add', 'change'] }, (file) => {
        // No need for an asynchronous handling or global flag
        setTimeout(() => {
            try {
                const oldPath = path.join(baseDir, file.basename);
                const newFileName = getNewName(file.stem);
                if (!newFileName) {
                    return;
                }
                const newPath = path.join(baseDir, newFileName + file.extname);

                fs.renameSync(oldPath, newPath); // Synchronously rename the file
                console.log(`File renamed to ${newPath}`);
            } catch (err) {
                console.error(`Error renaming file: ${err}`);
            }
        }, 750);
    });
});

gulp.task('default', gulp.series('watch-mp3'));
