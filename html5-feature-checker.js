(function(doc) {
	var H5C, _checker;

	H5C = function() {};

	H5C.prototype = {
		supports: function(feature) {
			if (typeof feature === 'string')
				return _checker[feature]();
		}
	};

	_checker = {
		'canvas': function() {
			return !!doc.createElement('canvas').getContext;
		},
		'canvas-text': function() {
			var getContext = doc.createElement('canvas').getContext;
			return !!getContext && typeof getContext('2d').fillText === 'function';
		}
	}

	this.h5c = new H5C();

})(document);