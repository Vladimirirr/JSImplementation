function create(proto) {
	function _tmp() { }
	_tmp.prototype = proto;
	return new _tmp();
};

export { create }
