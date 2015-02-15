module.exports = {

  // Настройки задач
  options: {
    limit: 3
  },

  // Задачи для разработки
  devFirst: [
    'clean',
    'jshint'
  ],
  devSecond: [
    'sass:dev',
    'concat',
    'uglify'
  ],

  // Задачи для продакшна
  prodFirst: [
    'clean',
    'jshint'
  ],
  prodSecond: [
    'sass:prod',
    'concat',
    'uglify'
  ],

  // Image tasks
  imgFirst: [
    'imagemin'
  ]
};