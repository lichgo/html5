(function(win, doc) {
	var H5C, _checker, _undefined, _cache = {};

	H5C = function() {};

	H5C.prototype = {
		canvas: function() { return _undefined(_cache.canvas) ? _checker.canvas() : _cache.canvas; },
		canvastext: function() { return _undefined(_cache.canvastext) ? _checker.canvastext() : _cache.canvastext; },
		video: function() { return _undefined(_cache.video) ? _checker.video() : _cache.video; },
		localStorage: function() { return _undefined(_cache.localStorage) ? _checker.localStorage() : _cache.localStorage; },
		offline: function() { return _undefined(_cache.offline) ? _checker.offline() : _cache.offline; },
		geolocation: function() { return _undefined(_cache.geolocation) ? _checker.geolocation() : _cache.geolocation; }
	};

	_checker = {
		'canvas': function() {
			return _cache.canvas = !!doc.createElement('canvas').getContext;
		},
		'canvastext': function() {
			var canvas = doc.createElement('canvas');
			return _cache.canvastext = (!!canvas.getContext) && (typeof canvas.getContext('2d').fillText === 'function');
		},
		'video': function() {
			return _cache.video = !!doc.createElement('video').canPlayType;
		},
		'localStorage': function() {
			return _cache.localStorage = ('localStorage' in win) && win['localStorage'] !== null;
		},
		'offline': function() {
			return _cache.offline = !!win.applicationCache;
		},
		'geolocation': function() {
			return _cache.geolocation = !!win.navigator.geolocation;
		}
	};

	_undefined = function(param) {
		return typeof param === 'undefined';
	};

	this.h5c = new H5C();

})(window, document);