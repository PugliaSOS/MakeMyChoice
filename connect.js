var getInformations = function() {
	var uri = 'mongodb://localhost/MakeMyChoice';
	var options = {
  		//db: { native_parser: true },
  		//server: { poolSize: 5 },
  		//replset: { rs_name: 'myReplicaSetName' },
  		user: '',
  		pass: ''
	};
	return [uri, options];
}

module.exports.getInformations = getInformations;