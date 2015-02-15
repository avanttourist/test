module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  scripts: {
    files: [
      'src/scripts/*.js'
    ],
    tasks: [
      'concat',
      'jshint',
      'uglify'
    ]
  },

  styles: {
    files: [
      'src/styles/*.scss'
    ],
    tasks: [
      'sass:dev'
    ]
  },
};