module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // clean the build folder
    clean: {
      build: [
        'build'
      ]
    },

    // concat and compile less files
    less: {
      build: {
        files: {
          "build/compiled.css": ["css/*.less"]
        }
      },
    },

    // concat all js and css files, including the compiled less file
    concat: {
      build: {
        files: {
          'build/resume.js': ['js/*.js'],
          'build/resume.css': ['css/*.css', 'build/compiled.css']
        }
      }
    },

    // minify js
    uglify: {
      build: {
        src: 'build/resume.js',
        dest: 'build/resume.min.js'
      }
    },

    // minify css
    cssmin: {
      css: {
        src: 'build/resume.css',
        dest: 'build/resume.min.css'
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s)
  grunt.registerTask('default', ['clean', 'less', 'concat', 'uglify', 'cssmin']);

};
