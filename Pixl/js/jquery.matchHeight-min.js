/** * jquery.matchHeight-min.js v0.5.1 * http://brm.io/jquery-match-height/ * License: MIT */(function (b) {	b.fn.matchHeight = function (a) {		if ("remove" === a) {			var d = this;			this.css("height", "");			b.each(b.fn.matchHeight._groups, function (b, a) {				a.elements = a.elements.not(d)			});			return this		}		if (1 >= this.length) return this;		a = "undefined" !== typeof a ? a : !0;		b.fn.matchHeight._groups.push({			elements: this,			byRow: a		});		b.fn.matchHeight._apply(this, a);		return this	};	b.fn.matchHeight._apply = function (a, d) {		var c = b(a),			e = [c];		d && (c.css({				display: "block",				"padding-top": "0",				"padding-bottom": "0",				"border-top": "0",				"border-bottom": "0",				height: "100px"			}),			e = k(c), c.css({				display: "",				"padding-top": "",				"padding-bottom": "",				"border-top": "",				"border-bottom": "",				height: ""			}));		b.each(e, function (a, c) {			var d = b(c),				e = 0;			d.each(function () {				var a = b(this);				a.css({					display: "block",					height: ""				});				a.outerHeight(!1) > e && (e = a.outerHeight(!1));				a.css({					display: ""				})			});			d.each(function () {				var a = b(this),					c = 0;				"border-box" !== a.css("box-sizing") && (c += g(a.css("border-top-width")) + g(a.css("border-bottom-width")), c += g(a.css("padding-top")) + g(a.css("padding-bottom")));				a.css("height", e - c)			})		});		return this	};	b.fn.matchHeight._applyDataApi = function () {		var a = {};		b("[data-match-height], [data-mh]").each(function () {			var d = b(this),				c = d.attr("data-match-height");			a[c] = c in a ? a[c].add(d) : d		});		b.each(a, function () {			this.matchHeight(!0)		})	};	b.fn.matchHeight._groups = [];	b.fn.matchHeight._throttle = 80;	var h = -1,		f = -1;	b.fn.matchHeight._update = function (a) {		if (a && "resize" === a.type) {			a = b(window).width();			if (a === h) return;			h = a		} - 1 === f && (f = setTimeout(function () {			b.each(b.fn.matchHeight._groups, function () {				b.fn.matchHeight._apply(this.elements,					this.byRow)			});			f = -1		}, b.fn.matchHeight._throttle))	};	b(b.fn.matchHeight._applyDataApi);	b(window).bind("load resize orientationchange", b.fn.matchHeight._update);	var k = function (a) {		var d = null,			c = [];		b(a).each(function () {			var a = b(this),				f = a.offset().top - g(a.css("margin-top")),				h = 0 < c.length ? c[c.length - 1] : null;			null === h ? c.push(a) : 1 >= Math.floor(Math.abs(d - f)) ? c[c.length - 1] = h.add(a) : c.push(a);			d = f		});		return c	}, g = function (a) {			return parseFloat(a) || 0		}})(jQuery);