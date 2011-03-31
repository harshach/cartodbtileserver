var path = require('path');
module.exports.styles = path.join(__dirname, '..', '..', 'app', 'styles');

// GENERAL APP CONSTANTS
module.exports.environment  = 'production';
module.exports.db_base_name = 'cartodb_user_{user_id}_db';
module.exports.oneDay       = 86400000;

// MAPNIK OPTIONS
module.exports.postgis = {
    'user'            : 'postgres',
    'host'            : '10.211.14.63',
    'type'            : 'postgis',
    'geometry_field'  : 'the_geom',
    'srid'            : 3785,
    'extent'          : '-20005048.4188,-9039211.13765,19907487.2779,17096598.5401',    
    'max_size'        : 1    
};