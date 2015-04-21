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
          "build/compiled.css": ["src/css/*.less"]
        }
      },
    },

    // concat all js and css files, including the compiled less file
    concat: {
      build: {
        files: {
          'build/resume.js': ['src/js/*.js'],
          'build/resume.css': ['src/css/*.css', 'build/compiled.css']
        }
      }
    },

    // minify js
    uglify: {
      build: {
        src: 'build/resume.js',
        dest: 'dist/resume.min.js'
      }
    },

    // minify css
    cssmin: {
      css: {
        src: 'build/resume.css',
        dest: 'dist/resume.min.css'
      }
    },

    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'src/index.html',
          'dist/coffeetable.html': 'src/coffeetable.html'
        }
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s)
  grunt.registerTask('default', ['clean', 'less', 'concat', 'uglify', 'cssmin', 'htmlmin']);

};
