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
			var canvas = doc.createElement('canvas');
			return (!!canvas.getContext) && (typeof canvas.getContext('2d').fillText === 'function');
		}
	};

	this.h5c = new H5C();

})(document);