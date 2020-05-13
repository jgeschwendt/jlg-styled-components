import styled, { css } from 'styled-components';
import { createElement, Children, cloneElement } from 'react';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _taggedTemplateLiteral$1(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject3() {
  var data = _taggedTemplateLiteral$1(["\n      @media print {\n        ", "\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral$1(["\n        @media (min-width: ", "px) {\n          ", "\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral$1(["\n        @media (max-width: ", "px) {\n          ", "\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var media = {
  breakpoint: {
    down: function down(breakpoint, breakpointCss) {
      return css(_templateObject(), breakpoint - 0.02, breakpointCss);
    },
    up: function up(breakpoint, breakpointCss) {
      console.log('-', breakpoint, breakpointCss);
      return css(_templateObject2(), function (props) {
        return props.theme.breakpoints[breakpoint];
      }, breakpointCss);
    }
  },
  print: function print(printCss) {
    return css(_templateObject3(), printCss);
  }
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  min-height: 1px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  position: relative;\n  width: 100%;\n\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Col = styled.div(_templateObject$1(), function (props) {
  var cssProps = [];

  if (props.gutter) {
    cssProps.push(css(["padding-left:", ";padding-right:", ";"], props.gutter, props.gutter));
  } else {
    cssProps.push(css(["padding-left:.5rem;padding-right:.5rem;"]));
  }

  var breakpoints = Object.keys(props.theme.breakpoints);

  if (breakpoints.length === 0) {
    throw Error('You need to set breakpoint keys on the theme provider.');
  }

  breakpoints.map(function (breakpoint) {
    if (props.hasOwnProperty(breakpoint)) {
      var _ref = Array.isArray(props[breakpoint]) ? props[breakpoint] : [props[breakpoint], {}],
          _ref2 = _slicedToArray(_ref, 2),
          col = _ref2[0],
          _ref2$ = _ref2[1],
          offset = _ref2$.offset,
          order = _ref2$.order;

      if (props.theme.breakpoints[breakpoint] === 0) {
        if (col !== 0) {
          cssProps.push(css(["flex:0 0 ", "%;max-width:", "%;"], col * 100, col * 100));
        } else {
          cssProps.push(css(["flex:0 0 100%;max-width:100%;"]));
        }

        if (typeof offset === 'number') {
          cssProps.push(css(["margin-left:", "%;"], offset * 100));
        }

        if (typeof order === 'number') {
          cssProps.push(css(["order:", ";"], order));
        }
      } else {
        cssProps.push(media.breakpoint.up(breakpoint, css(["flex:0 0 ", "%;max-width:", "%;"], col * 100, col * 100)));

        if (typeof offset === 'number') {
          cssProps.push(media.breakpoint.up(breakpoint, css(["margin-left:", "%;"], offset * 100)));
        }

        if (typeof order === 'number') {
          cssProps.push(media.breakpoint.up(breakpoint, css(["order:", ";"], order)));
        }
      }
    }
  });

  if (props.withCSS) {
    cssProps.push(props.withCSS);
  }

  return cssProps;
});

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: .5rem;\n  padding-right: .5rem;\n  width: 100%;\n\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject$2(), function (props) {
  var cssProps = [];

  if (props.maxWidth) {
    cssProps.push(css(["max-width:", ";"], props.maxWidth));
  }

  return cssProps;
});

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRow = styled.div(_templateObject$3(), function (props) {
  var cssProps = [];

  if (props.gutter) {
    cssProps.push(css(["margin-left:", ";margin-right:", ";"], props.gutter === '0' ? 0 : "-".concat(props.gutter), props.gutter === '0' ? 0 : "-".concat(props.gutter)));
  } else {
    cssProps.push(css(["margin-left:-0.5rem;margin-right:-0.5rem;"]));
  }

  if (typeof props.justify === 'string') {
    cssProps.push(css(["justify-content:", ";"], props.justify));
  }

  console.log('bingo', props);

  if (props.withCSS) {
    cssProps.push(props.withCSS);
  }

  return cssProps;
});
var Row = function Row(_ref) {
  var children = _ref.children,
      gutter = _ref.gutter,
      props = _objectWithoutProperties(_ref, ["children", "gutter"]);

  return createElement(StyledRow, _objectSpread2({
    gutter: gutter
  }, props), Children.map(children, function (child) {
    return cloneElement(child, _objectSpread2({
      gutter: gutter
    }, props));
  }));
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Spacer = styled.div(_templateObject$4(), function (props) {
  var cssProps = [];

  if (props.m) {
    var _ref = Array.isArray(props.m) ? props.m : [props.m, {}],
        _ref2 = _slicedToArray(_ref, 2),
        m = _ref2[0],
        mBreakpoints = _ref2[1];

    if (m) {
      cssProps.push(css(["margin:", ";"], m));
    }

    Object.keys(mBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin:", ";"], mBreakpoints[breakpoint])));
    });
  }

  if (props.mb) {
    var _ref3 = Array.isArray(props.mb) ? props.mb : [props.mb, {}],
        _ref4 = _slicedToArray(_ref3, 2),
        mb = _ref4[0],
        mbBreakpoints = _ref4[1];

    if (mb) {
      cssProps.push(css(["margin-bottom:", ";"], mb));
    }

    Object.keys(mbBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin-bottom:", ";"], mbBreakpoints[breakpoint])));
    });
  }

  if (props.ml) {
    var _ref5 = Array.isArray(props.ml) ? props.ml : [props.ml, {}],
        _ref6 = _slicedToArray(_ref5, 2),
        ml = _ref6[0],
        mlBreakpoints = _ref6[1];

    if (ml) {
      cssProps.push(css(["margin-left:", ";"], ml));
    }

    Object.keys(mlBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin-left:", ";"], mlBreakpoints[breakpoint])));
    });
  }

  if (props.mr) {
    var _ref7 = Array.isArray(props.mr) ? props.mr : [props.mr, {}],
        _ref8 = _slicedToArray(_ref7, 2),
        mr = _ref8[0],
        mrBreakpoints = _ref8[1];

    if (mr) {
      cssProps.push(css(["margin-right:", ";"], mr));
    }

    Object.keys(mrBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin-right:", ";"], mrBreakpoints[breakpoint])));
    });
  }

  if (props.mt) {
    var _ref9 = Array.isArray(props.mt) ? props.mt : [props.mt, {}],
        _ref10 = _slicedToArray(_ref9, 2),
        mt = _ref10[0],
        mtBreakpoints = _ref10[1];

    if (mt) {
      cssProps.push(css(["margin-top:", ";"], mt));
    }

    Object.keys(mtBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin-top:", ";"], mtBreakpoints[breakpoint])));
    });
  }

  if (props.mx) {
    var _ref11 = Array.isArray(props.mx) ? props.mx : [props.mx, {}],
        _ref12 = _slicedToArray(_ref11, 2),
        mx = _ref12[0],
        mxBreakpoints = _ref12[1];

    if (mx) {
      cssProps.push(css(["margin-left:", ";margin-right:", ";"], mx, mx));
    }

    Object.keys(mxBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin-left:", ";margin-right:", ";"], mxBreakpoints[breakpoint], mxBreakpoints[breakpoint])));
    });
  }

  if (props.my) {
    var _ref13 = Array.isArray(props.my) ? props.my : [props.my, {}],
        _ref14 = _slicedToArray(_ref13, 2),
        my = _ref14[0],
        myBreakpoints = _ref14[1];

    if (my) {
      cssProps.push(css(["margin-bottom:", ";margin-top:", ";"], my, my));
    }

    Object.keys(myBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["margin-bottom:", ";margin-top:", ";"], myBreakpoints[breakpoint], myBreakpoints[breakpoint])));
    });
  }

  if (props.p) {
    var _ref15 = Array.isArray(props.p) ? props.p : [props.p, {}],
        _ref16 = _slicedToArray(_ref15, 2),
        p = _ref16[0],
        pBreakpoints = _ref16[1];

    if (p) {
      cssProps.push(css(["padding:", ";"], p));
    }

    Object.keys(pBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding:", ";"], pBreakpoints[breakpoint])));
    });
  }

  if (props.pb) {
    var _ref17 = Array.isArray(props.pb) ? props.pb : [props.pb, {}],
        _ref18 = _slicedToArray(_ref17, 2),
        pb = _ref18[0],
        pbBreakpoints = _ref18[1];

    if (pb) {
      cssProps.push(css(["padding-bottom:", ";"], pb));
    }

    Object.keys(pbBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding-bottom:", ";"], pbBreakpoints[breakpoint])));
    });
  }

  if (props.pl) {
    var _ref19 = Array.isArray(props.pl) ? props.pl : [props.pl, {}],
        _ref20 = _slicedToArray(_ref19, 2),
        pl = _ref20[0],
        plBreakpoints = _ref20[1];

    if (pl) {
      cssProps.push(css(["padding-left:", ";"], pl));
    }

    Object.keys(plBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding-left:", ";"], plBreakpoints[breakpoint])));
    });
  }

  if (props.pr) {
    var _ref21 = Array.isArray(props.pr) ? props.pr : [props.pr, {}],
        _ref22 = _slicedToArray(_ref21, 2),
        pr = _ref22[0],
        prBreakpoints = _ref22[1];

    if (pr) {
      cssProps.push(css(["padding-right:", ";"], pr));
    }

    Object.keys(prBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding-right:", ";"], prBreakpoints[breakpoint])));
    });
  }

  if (props.pt) {
    var _ref23 = Array.isArray(props.pt) ? props.pt : [props.pt, {}],
        _ref24 = _slicedToArray(_ref23, 2),
        pt = _ref24[0],
        ptBreakpoints = _ref24[1];

    if (pt) {
      cssProps.push(css(["padding-top:", ";"], pt));
    }

    Object.keys(ptBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding-top:", ";"], ptBreakpoints[breakpoint])));
    });
  }

  if (props.px) {
    var _ref25 = Array.isArray(props.px) ? props.px : [props.px, {}],
        _ref26 = _slicedToArray(_ref25, 2),
        px = _ref26[0],
        pxBreakpoints = _ref26[1];

    if (px) {
      cssProps.push(css(["padding-left:", ";padding-right:", ";"], px, px));
    }

    Object.keys(pxBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding-left:", ";padding-right:", ";"], pxBreakpoints[breakpoint], pxBreakpoints[breakpoint])));
    });
  }

  if (props.py) {
    var _ref27 = Array.isArray(props.py) ? props.py : [props.py, {}],
        _ref28 = _slicedToArray(_ref27, 2),
        py = _ref28[0],
        pyBreakpoints = _ref28[1];

    if (py) {
      cssProps.push(css(["padding-bottom:", ";padding-top:", ";"], py, py));
    }

    Object.keys(pyBreakpoints).forEach(function (breakpoint) {
      cssProps.push(media.breakpoint.up(breakpoint, css(["padding-bottom:", ";padding-top:", ";"], pyBreakpoints[breakpoint], pyBreakpoints[breakpoint])));
    });
  }

  return cssProps;
});

export { Col, Container, Row, Spacer };
