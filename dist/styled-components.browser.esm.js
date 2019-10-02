import styled, { css } from 'styled-components';
import React, { createElement, Children, cloneElement } from 'react';

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
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Theme = {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  colors: {
    red: "red"
  }
};
var ThemeContext = React.createContext(void 0);

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
      theme = _ref.theme;

  var _React$useState = React.useState(_objectSpread2({}, Theme, {}, theme)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  return React.createElement(ThemeContext.Provider, {
    value: [state, setState]
  }, children);
};

var media = {
  breakpoint: {
    down: function down(media, rules) {
      return css(["@media (max-width:", "px){", "}"], Theme.breakpoints[media] - 0.02, rules);
    },
    up: function up(media, rules) {
      return css(["@media (min-width:", "px){", "}"], Theme.breakpoints[media], rules);
    }
  },
  print: function print(rules) {
    return css(["@media print{", "}"], rules);
  }
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  min-height: 1px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  position: relative;\n  width: 100%;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Col = styled.div(_templateObject(), function (props) {
  var cssProps = [];

  if (props.gutter) {
    cssProps.push(css(["padding-left:", ";padding-right:", ";"], props.gutter, props.gutter));
  } else {
    cssProps.push(css(["padding-left:.5rem;padding-right:.5rem;"]));
  }

  if (props.xs) {
    cssProps.push(css(["flex:0 0 ", "%;max-width:", "%;"], props.xs * 100, props.xs * 100));
  } else {
    cssProps.push(css(["flex:0 0 100%;max-width:100%;"]));
  }

  if (props.sm) {
    cssProps.push(media.breakpoint.up('sm', css(["flex:0 0 ", "%;max-width:", "%;"], props.sm * 100, props.sm * 100)));
  }

  if (props.md) {
    cssProps.push(media.breakpoint.up('md', css(["flex:0 0 ", "%;max-width:", "%;"], props.md * 100, props.md * 100)));
  }

  if (props.lg) {
    cssProps.push(media.breakpoint.up('lg', css(["flex:0 0 ", "%;max-width:", "%;"], props.lg * 100, props.lg * 100)));
  }

  if (props.xl) {
    cssProps.push(media.breakpoint.up('xl', css(["flex:0 0 ", "%;max-width:", "%;"], props.xl * 100, props.xl * 100)));
  }

  if (props.smOffset) {
    cssProps.push(media.breakpoint.up('sm', css(["margin-left:", "%;"], props.smOffset * 100)));
  }

  if (props.mdOffset) {
    cssProps.push(media.breakpoint.up('md', css(["margin-left:", "%;"], props.mdOffset * 100)));
  }

  if (props.lgOffset) {
    cssProps.push(media.breakpoint.up('lg', css(["margin-left:", "%;"], props.lgOffset * 100)));
  }

  if (props.xlOffset) {
    cssProps.push(media.breakpoint.up('xl', css(["margin-left:", "%;"], props.xlOffset * 100)));
  }

  return cssProps;
});

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: .5rem;\n  padding-right: .5rem;\n  width: 100%;\n\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject$1(), function (props) {
  var cssProps = [];

  if (props.maxWidth) {
    cssProps.push(css(["max-width:", ";"], props.maxWidth));
  }

  return cssProps;
});

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRow = styled.div(_templateObject$2(), function (props) {
  var cssProps = [];

  if (props.gutter) {
    cssProps.push(css(["margin-left:", ";margin-right:", ";"], props.gutter === '0' ? 0 : "-".concat(props.gutter), props.gutter === '0' ? 0 : "-".concat(props.gutter)));
  } else {
    cssProps.push(css(["margin-left:-0.5rem;margin-right:-0.5rem;"]));
  }

  if (typeof props.justify === 'string') {
    cssProps.push(css(["justify-content:", ";"], props.justify));
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
    return cloneElement(child, {
      gutter: gutter
    });
  }));
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
// const extractCss = (props: SpacerProps) => {
//   const cssProps = [];
//   if (props.m) {
//   }
//   return cssProps;
// }
var Spacer = styled.div(_templateObject$3(), function (props) {
  var cssProps = [];

  if (props.m) {
    if (Array.isArray(props.m)) {
      var _props$m = _slicedToArray(props.m, 2),
          m = _props$m[0],
          breakpoints = _props$m[1];

      cssProps.push(css(["margin:", ";"], m));
      Object.keys(breakpoints).forEach(function (breakpoint) {
        cssProps.push(media.breakpoint.up(breakpoint, css(["margin:", ";"], breakpoints[breakpoint])));
      });
    } else {
      cssProps.push(css(["margin:", ";"], props.m));
    }
  }

  if (props.mb) {
    if (Array.isArray(props.mb)) {
      var _props$mb = _slicedToArray(props.mb, 2),
          mb = _props$mb[0],
          _breakpoints = _props$mb[1];

      cssProps.push(css(["margin-bottom:", ";"], mb));
      Object.keys(_breakpoints).forEach(function (breakpoint) {
        cssProps.push(media.breakpoint.up(breakpoint, css(["margin-bottom:", ";"], _breakpoints[breakpoint])));
      });
    } else {
      cssProps.push(css(["margin-bottom:", ";"], props.mb));
    }
  }

  if (props.my) {
    if (Array.isArray(props.my)) {
      var _props$my = _slicedToArray(props.my, 2),
          my = _props$my[0],
          _breakpoints2 = _props$my[1];

      cssProps.push(css(["margin-bottom:", ";margin-top:", ";"], my, my));
      Object.keys(_breakpoints2).forEach(function (breakpoint) {
        cssProps.push(media.breakpoint.up(breakpoint, css(["margin-bottom:", ";margin-top:", ";"], _breakpoints2[breakpoint], _breakpoints2[breakpoint])));
      });
    } else {
      cssProps.push(css(["margin-bottom:", ";margin-top:", ";"], props.my, props.my));
    }
  }

  if (props.py) {
    if (Array.isArray(props.py)) {
      var _props$py = _slicedToArray(props.py, 2),
          py = _props$py[0],
          _breakpoints3 = _props$py[1];

      cssProps.push(css(["padding-bottom:", ";padding-top:", ";"], py, py));
      Object.keys(_breakpoints3).forEach(function (breakpoint) {
        cssProps.push(media.breakpoint.up(breakpoint, css(["padding-bottom:", ";padding-top:", ";"], _breakpoints3[breakpoint], _breakpoints3[breakpoint])));
      });
    } else {
      cssProps.push(css(["padding-bottom:", ";padding-top:", ";"], props.py, props.py));
    }
  }

  return cssProps;
});

export { Col, Container, Row, Spacer, ThemeProvider, media };
