module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        files: {
          '<%= pkg.deployPath %>/js/main.min.js': ['src/js/HelicopterGame.js', 'src/js/vendor/*', 'src/js/lib/*', 'src/js/Game.js', 'src/js/UI.js', 'src/js/game/*']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  return grunt.registerTask('default', ['uglify']);
};
