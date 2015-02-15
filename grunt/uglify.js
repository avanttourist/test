module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'src/scripts/concat',
      src: '**/*.js',
      dest: 'dist/scripts',
      ext: '.min.js'
    }]
  }
};