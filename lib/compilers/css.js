var static_compile = require('./static').copy_files;

exports.compile = function(options, files, cb){
  static_compile('css', files, options, cb);
}