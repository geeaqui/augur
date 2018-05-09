(function(global) {
  
  // map tells the System loader where to look for things
  var map = {
    'app':        'app', // 'dist',
    '@angular':   'lib/@angular',
    'angular2-materialize':'lib/angular2-materialize',
    'rxjs':       'lib/rxjs',
    'tslib':      'lib',
    'plugin-babel': 'lib/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'lib/systemjs-plugin-babel/systemjs-babel-browser.js',
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { 
      main: 'main.js',  
      defaultExtension: 'js',
      meta: {
        './*.js': {
          loader: 'systemjs-angular-loader.js'
        }
      }
    },
    'rxjs':                 { defaultExtension: 'js' },
    'tslib':                { main: 'tslib', defaultExtension: 'js' },
    '@angular/common/http': { main: '../bundles/common-http.umd.js', defaultExtension: 'js' },
    'angular2-materialize': { main: 'dist/index', defaultExtension: 'js' },

    '@angular/animations': { main: '/bundles/animations.umd.js', defaultExtension: 'js' },
    '@angular/animations/browser': { main: '../bundles/animations.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser': {main : '/bundles/platform-browser-animations.umd.js', defaultExtension: 'js'},
    '@angular/animations/browser': {main : 'bundles/animations-browser.umd.js', defaultExtension: 'js'},
    '@angular/platform-browser/animations': {main : '../bundles/platform-browser-animations.umd.js', defaultExtension: 'js'},


  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'upgrade',
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages,
    transpiler: 'plugin-babel'
  };

  System.config(config);

})(this);