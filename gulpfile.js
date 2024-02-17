const gulp = require('gulp');
const watch = require('gulp-watch');
const path = require('path');
const fs = require('fs');

const baseDir = '.';
const fileToRename = `${baseDir}*.*`;

function getNewName(originalName){
    const newName = originalName
    .replace(/-{1,}|\,{1,}|!{1,}/g, ' ')
    .replace(/\.{1,}/g, ' ')
    .trim()
    .replace(/\s{1,}/g, '_')
    .toLowerCase();

    return newName !== originalName ? newName : false;
}

gulp.task('rename-file', function() {
    return watch(fileToRename, { base: baseDir, events: ['add', 'change'] }, (file) => {
        // Wait previous process to complete
        setTimeout(() => {
            try {
                const oldPath = path.join(baseDir, file.basename);
                if (!fs.existsSync(oldPath)) {
                    return;
                }

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
        }, 800);
    });
});

gulp.task('default', gulp.series('rename-file'));
