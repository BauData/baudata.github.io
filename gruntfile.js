module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist/'],
    browserify: {
      'dist/js/scripts.min.js': ['dist/js/scripts.min.js']
    },
    copy: {
      /*index: {
        expand: true,
        cwd: 'src/',
        src: ['index.html'],
        dest: 'dist/'
      },*/
      css: {
        expand: true,
        cwd: 'src/css/',
        src: ['**'],
        dest: 'dist/css'
      },
      images: {
        expand: true,
        cwd: 'src/img/',
        src: ['**'],
        dest: 'dist/img'
      }
    },
    uglify: {
      scripts: {
          options: {
              sourceMap: true
          },
          files: {
              'dist/js/scripts.min.js': [
                  'src/js/index.js'
              ]
          }
      }
    },
   /* 'gh-pages': {
    options: {
      base: 'dist'
    },
    src: ['**']
  }*/
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  //grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', '', function() {
    var taskList = [
        'clean',
        'copy',
        'uglify',
        'browserify'
    ];
    grunt.task.run(taskList);
  });

};