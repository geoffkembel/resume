module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: [
        'build'
      ]
    },

    concat: {
      build: {
        files: {
          'build/<%= pkg.name %>.js': ['js/*.js'],
          'build/<%= pkg.name %>.css': ['css/*.css']
        }
      }
    },

    uglify: {
      build: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    cssmin: {
      css: {
        src: 'build/<%= pkg.name %>.css',
        dest: 'build/<%= pkg.name %>.min.css'
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s)
  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin']);

};
