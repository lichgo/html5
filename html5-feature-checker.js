(function(win, doc) {
	var H5C, _checker, _undefined, _cache = { input: {} };

	H5C = function() {};

	H5C.prototype = {
		canvas: function() { return _undefined(_cache.canvas) ? _checker.canvas() : _cache.canvas; },
		canvastext: function() { return _undefined(_cache.canvastext) ? _checker.canvastext() : _cache.canvastext; },
		video: function() { return _undefined(_cache.video) ? _checker.video() : _cache.video; },
		localStorage: function() { return _undefined(_cache.localStorage) ? _checker.localStorage() : _cache.localStorage; },
		offline: function() { return _undefined(_cache.offline) ? _checker.offline() : _cache.offline; },
		geolocation: function() { return _undefined(_cache.geolocation) ? _checker.geolocation() : _cache.geolocation; },
		searchInput: function() { return _undefined(_cache.input.search) ? _checker.inputType('search') : _cache.input.search; },
		numberInput: function() { return _undefined(_cache.input.number) ? _checker.inputType('number') : _cache.input.number; },
		rangeInput: function() { return _undefined(_cache.input.range) ? _checker.inputType('range') : _cache.input.range; },
		colorInput: function() { return _undefined(_cache.input.coloar) ? _checker.inputType('color') : _cache.input.color; },
		telInput: function() { return _undefined(_cache.input.tel) ? _checker.inputType('tel') : _cache.input.tel; },
		urlInput: function() { return _undefined(_cache.input.url) ? _checker.inputType('url') : _cache.input.url; },
		emailInput: function() { return _undefined(_cache.input.email) ? _checker.inputType('email') : _cache.input.email; },
		dateInput: function() { return _undefined(_cache.input.date) ? _checker.inputType('date') : _cache.input.date; },
		monthInput: function() { return _undefined(_cache.input.montn) ? _checker.inputType('month') : _cache.input.month; },
		weekInput: function() { return _undefined(_cache.input.week) ? _checker.inputType('week') : _cache.input.week; },
		timeInput: function() { return _undefined(_cache.input.time) ? _checker.inputType('time') : _cache.input.time; },
		datetimeInput: function() { return _undefined(_cache.input.datetime) ? _checker.inputType('datetime') : _cache.input.datetime; },
		datetimelocalInput: function() { return _undefined(_cache.input.datetimelocal) ? _checker.inputType('datetime-local') : _cache.input.datetimeloca; },
		placeholder: function() { return _undefined(_cache.placeholder) ? _checker.placeholder() : _cache.placeholder; }
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
		},
		'inputType': function(inputType) {
			var input = doc.createElement('input');
			input.setAttribute('type', inputType);
			return _cache.input[inputType] = input.type === inputType;
		},
		'placeholder': function() {
			return _cache.placeholder = 'placeholder' in doc.createElement('input');
		}
	};

	_undefined = function(param) {
		return typeof param === 'undefined';
	};

	this.h5c = new H5C();

})(window, document);