# gulp_rename_in_place

## Description
Renames given file types in place without using temporary files or making a copy

Renames specified file types directly within a target directory, eliminating the need for temporary files or duplicates. This script automates file renaming, cleansing names by removing excess dashes, commas, and replacing multiple dots with a single underscore while converting all characters to lowercase for uniformity.

The script is designed to be flexible, allowing users to define the file types they wish to rename. gulp_rename is intentionally bypassed to avoid the unintended creation of additional files, ensuring a more streamlined and efficient renaming process without generating duplicates.

## Usage
To initiate the file monitoring process, first, adjust the `gulpfile.js` configuration by setting `baseDir` to the directory you intend to watch for changes. Then, to start the monitoring task, open a terminal in the directory containing the `gulp_rename_in_place` and execute `gulp` if it's the only task.
Or, run `gulp watch-mp3`` for this specific task. This starts the watch of the configured directory and automatically renames the files when any is created or the name is modified.

### Prerequisites
- Node.js
- Gulp

### Setup
1. Ensure Node.js and Gulp are installed.
2. clone the repository
```git clone https://github.com/ivostoykov/gulp_rename_in_place.git```
3. In the `gulpfile.js`, adjust `baseDir` to your target directory for monitoring.
4. To start the file monitoring and renaming task, execute `gulp` or `gulp watch-mp3` in your terminal.

