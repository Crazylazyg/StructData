function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function noop() {}

function add_location(element, file, line, column, _char) {
  element.__svelte_meta = {
    loc: {
      file: file,
      line: line,
      column: column,
      "char": _char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (var i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return function () {
    return node.removeEventListener(event, handler, options);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function get_binding_group_value(group, __value, checked) {
  var value = new Set();

  for (var i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.add(group[i].__value);
  }

  if (!checked) {
    value["delete"](__value);
  }

  return Array.from(value);
}

function children(element) {
  return Array.from(element.childNodes);
}

function custom_event(type, detail) {
  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

var current_component;

function set_current_component(component) {
  current_component = component;
}

var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

var flushing = false;
var seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (var i = 0; i < dirty_components.length; i += 1) {
      var component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;

    while (binding_callbacks.length) {
      binding_callbacks.pop()();
    } // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (var _i = 0; _i < render_callbacks.length; _i += 1) {
      var callback = render_callbacks[_i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    var dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

var outroing = new Set();

function transition_in(block, local) {
  if (block && block.i) {
    outroing["delete"](block);
    block.i(local);
  }
}

var globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

function mount_component(component, target, anchor, customElement) {
  var _component$$$ = component.$$,
      fragment = _component$$$.fragment,
      on_mount = _component$$$.on_mount,
      on_destroy = _component$$$.on_destroy,
      after_update = _component$$$.after_update;
  fragment && fragment.m(target, anchor);

  if (!customElement) {
    // onMount happens before the initial afterUpdate
    add_render_callback(function () {
      var new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
  }

  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  var $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props) {
  var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
  var parent_component = current_component;
  set_current_component(component);
  var $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props: props,
    update: noop,
    not_equal: not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : options.context || []),
    // everything else
    callbacks: blank_object(),
    dirty: dirty,
    skip_bound: false
  };
  var ready = false;
  $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
    var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    flush();
  }

  set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */


var SvelteComponent = /*#__PURE__*/function () {
  function SvelteComponent() {
    _classCallCheck(this, SvelteComponent);
  }

  _createClass(SvelteComponent, [{
    key: "$destroy",
    value: function $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
  }, {
    key: "$on",
    value: function $on(type, callback) {
      var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return function () {
        var index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
  }, {
    key: "$set",
    value: function $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  }]);

  return SvelteComponent;
}();

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.38.2'
  }, detail)));
}

function append_dev(target, node) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node
  });
  append(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node,
    anchor: anchor
  });
  insert(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev('SvelteDOMRemove', {
    node: node
  });
  detach(node);
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  var modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev('SvelteDOMAddEventListener', {
    node: node,
    event: event,
    handler: handler,
    modifiers: modifiers
  });
  var dispose = listen(node, event, handler, options);
  return function () {
    dispatch_dev('SvelteDOMRemoveEventListener', {
      node: node,
      event: event,
      handler: handler,
      modifiers: modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', {
    node: node,
    attribute: attribute
  });else dispatch_dev('SvelteDOMSetAttribute', {
    node: node,
    attribute: attribute,
    value: value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev('SvelteDOMSetProperty', {
    node: node,
    property: property,
    value: value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.wholeText === data) return;
  dispatch_dev('SvelteDOMSetData', {
    node: text,
    data: data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && _typeof(arg) === 'object' && 'length' in arg)) {
    var msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (var _i2 = 0, _Object$keys = Object.keys(slot); _i2 < _Object$keys.length; _i2++) {
    var slot_key = _Object$keys[_i2];

    if (!~keys.indexOf(slot_key)) {
      console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
    }
  }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */


var SvelteComponentDev = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(SvelteComponentDev, _SvelteComponent);

  var _super = _createSuper(SvelteComponentDev);

  function SvelteComponentDev(options) {
    _classCallCheck(this, SvelteComponentDev);

    if (!options || !options.target && !options.$$inline) {
      throw new Error("'target' is a required option");
    }

    return _super.call(this);
  }

  _createClass(SvelteComponentDev, [{
    key: "$destroy",
    value: function $destroy() {
      _get(_getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

      this.$destroy = function () {
        console.warn('Component was already destroyed'); // eslint-disable-line no-console
      };
    }
  }, {
    key: "$capture_state",
    value: function $capture_state() {}
  }, {
    key: "$inject_state",
    value: function $inject_state() {}
  }]);

  return SvelteComponentDev;
}(SvelteComponent);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".userscript.svelte-10rqnbk.svelte-10rqnbk{font-size:16px;transition:transform 0.2s ease-in-out;position:fixed;top:0;right:0;width:320px;background-color:white;z-index:999999999999999;box-shadow:0 0 2px 0 rgba(0, 0, 0, 0.333);padding:0 1em;border-radius:0 0 0 1em}.userscript.svelte-10rqnbk button.svelte-10rqnbk{margin:1em 0 0 0}.userscript.svelte-10rqnbk .SDcontent.svelte-10rqnbk{max-height:320px;overflow-y:scroll}.userscript.svelte-10rqnbk .h1.svelte-10rqnbk{font-size:1.5em;color:red;padding:1em 0 0.5em 0;margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif}.userscript.svelte-10rqnbk textarea.svelte-10rqnbk{display:block;width:100%;min-height:320px;margin:0 0 1em 0;-webkit-appearance:none;border-radius:0.5em}.userscript.svelte-10rqnbk .values.svelte-10rqnbk{display:flex;align-items:center;border-bottom:1px solid #eee}.userscript.svelte-10rqnbk .values span.svelte-10rqnbk{color:lightblue}.userscript.svelte-10rqnbk .values b.svelte-10rqnbk{color:lightcoral !important}.userscript.svelte-10rqnbk .values input.svelte-10rqnbk{margin:0 0.5em}.userscript.svelte-10rqnbk .values .dataName.svelte-10rqnbk{flex:1}.userscript.svelte-10rqnbk .values .dataString.svelte-10rqnbk{flex:5;overflow-x:auto;text-overflow:ellipsis}";
styleInject(css_248z);
/* src/content.svelte generated by Svelte v3.38.2 */

var Object_1 = globals.Object,
    console_1 = globals.console;
var file = "src/content.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[20] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[23] = list[i];
  child_ctx[25] = i;
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[26] = list[i];
  child_ctx[25] = i;
  return child_ctx;
} // (181:12) {:else}


function create_else_block(ctx) {
  var t0;
  var span;
  var t1_value =
  /*i*/
  ctx[26] + "";
  var t1;
  var block = {
    c: function create() {
      t0 = text(".");
      span = element("span");
      t1 = text(t1_value);
      attr_dev(span, "class", "svelte-10rqnbk");
      add_location(span, file, 181, 15, 4573);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, span, anchor);
      append_dev(span, t1);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*selected*/
      32 && t1_value !== (t1_value =
      /*i*/
      ctx[26] + "")) set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(181:12) {:else}",
    ctx: ctx
  });
  return block;
} // (179:12) {#if index === 0}


function create_if_block(ctx) {
  var b;
  var t_value =
  /*i*/
  ctx[26] + "";
  var t;
  var block = {
    c: function create() {
      b = element("b");
      t = text(t_value);
      attr_dev(b, "class", "svelte-10rqnbk");
      add_location(b, file, 179, 14, 4527);
    },
    m: function mount(target, anchor) {
      insert_dev(target, b, anchor);
      append_dev(b, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*selected*/
      32 && t_value !== (t_value =
      /*i*/
      ctx[26] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(b);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(179:12) {#if index === 0}",
    ctx: ctx
  });
  return block;
} // (178:10) {#each Object.values(tag).filter((i) => i) as i, index}


function create_each_block_2(ctx) {
  var if_block_anchor;

  function select_block_type(ctx, dirty) {
    if (
    /*index*/
    ctx[25] === 0) return create_if_block;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if_block.p(ctx, dirty);
    },
    d: function destroy(detaching) {
      if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_2.name,
    type: "each",
    source: "(178:10) {#each Object.values(tag).filter((i) => i) as i, index}",
    ctx: ctx
  });
  return block;
} // (164:4) {#each selected as tag, index}


function create_each_block_1(ctx) {
  var div;
  var input;
  var input_name_value;
  var input_value_value;
  var t0;
  var label;
  var label_style_value;
  var label_for_value;
  var t1;
  var mounted;
  var dispose;
  var each_value_2 = Object.values(
  /*tag*/
  ctx[23]).filter(func_1);
  validate_each_argument(each_value_2);
  var each_blocks = [];

  for (var i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }

  var block = {
    c: function create() {
      div = element("div");
      input = element("input");
      t0 = space();
      label = element("label");

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].c();
      }

      t1 = space();
      attr_dev(input, "type", "radio");
      attr_dev(input, "name", input_name_value =
      /*tag*/
      ctx[23]["class"]);
      input.__value = input_value_value = JSON.stringify({
        tag: Object.values(
        /*tag*/
        ctx[23]).filter(func).join("."),
        index:
        /*index*/
        ctx[25]
      });
      input.value = input.__value;
      attr_dev(input, "class", "svelte-10rqnbk");
      /*$$binding_groups*/

      ctx[12][1].push(input);
      add_location(input, file, 165, 8, 4064);
      attr_dev(label, "style", label_style_value = "padding-left:".concat((
      /*selected*/
      ctx[5].length -
      /*index*/
      ctx[25]) * 10, "px"));
      attr_dev(label, "for", label_for_value =
      /*tag*/
      ctx[23]["class"]);
      add_location(label, file, 176, 8, 4334);
      attr_dev(div, "class", "values svelte-10rqnbk");
      add_location(div, file, 164, 6, 4035);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, input);
      input.checked = input.__value ===
      /*selectTag*/
      ctx[0];
      append_dev(div, t0);
      append_dev(div, label);

      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
        each_blocks[_i4].m(label, null);
      }

      append_dev(div, t1);

      if (!mounted) {
        dispose = listen_dev(input, "change",
        /*input_change_handler*/
        ctx[11]);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*selected*/
      32 && input_name_value !== (input_name_value =
      /*tag*/
      ctx[23]["class"])) {
        attr_dev(input, "name", input_name_value);
      }

      if (dirty &
      /*selected*/
      32 && input_value_value !== (input_value_value = JSON.stringify({
        tag: Object.values(
        /*tag*/
        ctx[23]).filter(func).join("."),
        index:
        /*index*/
        ctx[25]
      }))) {
        prop_dev(input, "__value", input_value_value);
        input.value = input.__value;
      }

      if (dirty &
      /*selectTag*/
      1) {
        input.checked = input.__value ===
        /*selectTag*/
        ctx[0];
      }

      if (dirty &
      /*Object, selected*/
      32) {
        each_value_2 = Object.values(
        /*tag*/
        ctx[23]).filter(func_1);
        validate_each_argument(each_value_2);

        var _i5;

        for (_i5 = 0; _i5 < each_value_2.length; _i5 += 1) {
          var child_ctx = get_each_context_2(ctx, each_value_2, _i5);

          if (each_blocks[_i5]) {
            each_blocks[_i5].p(child_ctx, dirty);
          } else {
            each_blocks[_i5] = create_each_block_2(child_ctx);

            each_blocks[_i5].c();

            each_blocks[_i5].m(label, null);
          }
        }

        for (; _i5 < each_blocks.length; _i5 += 1) {
          each_blocks[_i5].d(1);
        }

        each_blocks.length = each_value_2.length;
      }

      if (dirty &
      /*selected*/
      32 && label_style_value !== (label_style_value = "padding-left:".concat((
      /*selected*/
      ctx[5].length -
      /*index*/
      ctx[25]) * 10, "px"))) {
        attr_dev(label, "style", label_style_value);
      }

      if (dirty &
      /*selected*/
      32 && label_for_value !== (label_for_value =
      /*tag*/
      ctx[23]["class"])) {
        attr_dev(label, "for", label_for_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      /*$$binding_groups*/

      ctx[12][1].splice(
      /*$$binding_groups*/
      ctx[12][1].indexOf(input), 1);
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(164:4) {#each selected as tag, index}",
    ctx: ctx
  });
  return block;
} // (192:4) {#each attributes as a}


function create_each_block(ctx) {
  var div1;
  var input;
  var input_name_value;
  var input_value_value;
  var t0;
  var label;
  var t1_value =
  /*a*/
  ctx[20].nodeName + "";
  var t1;
  var t2;
  var label_for_value;
  var t3;
  var div0;
  var t4_value =
  /*a*/
  ctx[20].nodeValue + "";
  var t4;
  var t5;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div1 = element("div");
      input = element("input");
      t0 = space();
      label = element("label");
      t1 = text(t1_value);
      t2 = text(" :");
      t3 = space();
      div0 = element("div");
      t4 = text(t4_value);
      t5 = space();
      attr_dev(input, "type", "checkbox");
      attr_dev(input, "name", input_name_value =
      /*a*/
      ctx[20].nodeName);
      input.__value = input_value_value =
      /*a*/
      ctx[20].nodeName;
      input.value = input.__value;
      attr_dev(input, "class", "svelte-10rqnbk");
      /*$$binding_groups*/

      ctx[12][0].push(input);
      add_location(input, file, 193, 8, 4840);
      attr_dev(label, "class", "dataName svelte-10rqnbk");
      attr_dev(label, "for", label_for_value =
      /*a*/
      ctx[20].nodeName);
      add_location(label, file, 194, 8, 4936);
      attr_dev(div0, "class", "dataString svelte-10rqnbk");
      add_location(div0, file, 195, 8, 5008);
      attr_dev(div1, "class", "values attributes svelte-10rqnbk");
      add_location(div1, file, 192, 6, 4800);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, input);
      input.checked = ~
      /*selectValue*/
      ctx[1].indexOf(input.__value);
      append_dev(div1, t0);
      append_dev(div1, label);
      append_dev(label, t1);
      append_dev(label, t2);
      append_dev(div1, t3);
      append_dev(div1, div0);
      append_dev(div0, t4);
      append_dev(div1, t5);

      if (!mounted) {
        dispose = listen_dev(input, "change",
        /*input_change_handler_1*/
        ctx[13]);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*attributes*/
      16 && input_name_value !== (input_name_value =
      /*a*/
      ctx[20].nodeName)) {
        attr_dev(input, "name", input_name_value);
      }

      if (dirty &
      /*attributes*/
      16 && input_value_value !== (input_value_value =
      /*a*/
      ctx[20].nodeName)) {
        prop_dev(input, "__value", input_value_value);
        input.value = input.__value;
      }

      if (dirty &
      /*selectValue*/
      2) {
        input.checked = ~
        /*selectValue*/
        ctx[1].indexOf(input.__value);
      }

      if (dirty &
      /*attributes*/
      16 && t1_value !== (t1_value =
      /*a*/
      ctx[20].nodeName + "")) set_data_dev(t1, t1_value);

      if (dirty &
      /*attributes*/
      16 && label_for_value !== (label_for_value =
      /*a*/
      ctx[20].nodeName)) {
        attr_dev(label, "for", label_for_value);
      }

      if (dirty &
      /*attributes*/
      16 && t4_value !== (t4_value =
      /*a*/
      ctx[20].nodeValue + "")) set_data_dev(t4, t4_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      /*$$binding_groups*/

      ctx[12][0].splice(
      /*$$binding_groups*/
      ctx[12][0].indexOf(input), 1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(192:4) {#each attributes as a}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div0;
  var div0_style_value;
  var t0;
  var main;
  var button;
  var t1_value = (!
  /*start*/
  ctx[3] ? "Start" : "End") + "";
  var t1;
  var t2;
  var div1;
  var t4;
  var div2;
  var t5;
  var div3;
  var t7;
  var div4;
  var t8;
  var div5;
  var t9;
  var t10_value =
  /*elms*/
  ctx[2].length + "";
  var t10;
  var t11;
  var t12;
  var textarea;
  var main_style_value;
  var mounted;
  var dispose;
  var each_value_1 =
  /*selected*/
  ctx[5];
  validate_each_argument(each_value_1);
  var each_blocks_1 = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var each_value =
  /*attributes*/
  ctx[4];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var _i6 = 0; _i6 < each_value.length; _i6 += 1) {
    each_blocks[_i6] = create_each_block(get_each_context(ctx, each_value, _i6));
  }

  var block = {
    c: function create() {
      div0 = element("div");
      t0 = space();
      main = element("main");
      button = element("button");
      t1 = text(t1_value);
      t2 = space();
      div1 = element("div");
      div1.textContent = "Select";
      t4 = space();
      div2 = element("div");

      for (var _i7 = 0; _i7 < each_blocks_1.length; _i7 += 1) {
        each_blocks_1[_i7].c();
      }

      t5 = space();
      div3 = element("div");
      div3.textContent = "Data";
      t7 = space();
      div4 = element("div");

      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].c();
      }

      t8 = space();
      div5 = element("div");
      t9 = text("Output (");
      t10 = text(t10_value);
      t11 = text(")");
      t12 = space();
      textarea = element("textarea");
      attr_dev(div0, "style", div0_style_value = "\n    position: fixed;\n    width:".concat(
      /*boxSize*/
      ctx[8].width, "px;\n    height:", 1, "px;\n    top:").concat(
      /*boxSize*/
      ctx[8].top +
      /*boxSize*/
      ctx[8].height, "px;\n    left:").concat(
      /*boxSize*/
      ctx[8].left, "px;\n    border-bottom:1px solid red;\n    z-index: 999;\n    opacity:").concat(
      /*start*/
      ctx[3] ? 1 : 0, ";\n    "));
      add_location(div0, file, 142, 0, 3454);
      attr_dev(button, "class", "svelte-10rqnbk");
      add_location(button, file, 160, 2, 3869);
      attr_dev(div1, "class", "h1 svelte-10rqnbk");
      add_location(div1, file, 161, 2, 3939);
      attr_dev(div2, "class", "SDcontent svelte-10rqnbk");
      add_location(div2, file, 162, 2, 3970);
      attr_dev(div3, "class", "h1 svelte-10rqnbk");
      add_location(div3, file, 189, 2, 4713);
      attr_dev(div4, "class", "SDcontent svelte-10rqnbk");
      add_location(div4, file, 190, 2, 4742);
      attr_dev(div5, "class", "h1 svelte-10rqnbk");
      add_location(div5, file, 200, 2, 5138);
      textarea.value =
      /*data*/
      ctx[9];
      attr_dev(textarea, "class", "svelte-10rqnbk");
      add_location(textarea, file, 202, 2, 5221);
      attr_dev(main, "class", "userscript svelte-10rqnbk");
      attr_dev(main, "style", main_style_value = "\ndisplay:".concat(!
      /*initHidden*/
      ctx[7] ? "none" : "block", ";\ntransform:translateX(").concat(
      /*hidden*/
      ctx[6] ? "324px" :
      /*start*/
      ctx[3] ? "calc(320px - 2em)" : "0px", ")"));
      add_location(main, file, 154, 0, 3702);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div0, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, main, anchor);
      append_dev(main, button);
      append_dev(button, t1);
      append_dev(main, t2);
      append_dev(main, div1);
      append_dev(main, t4);
      append_dev(main, div2);

      for (var _i9 = 0; _i9 < each_blocks_1.length; _i9 += 1) {
        each_blocks_1[_i9].m(div2, null);
      }

      append_dev(main, t5);
      append_dev(main, div3);
      append_dev(main, t7);
      append_dev(main, div4);

      for (var _i10 = 0; _i10 < each_blocks.length; _i10 += 1) {
        each_blocks[_i10].m(div4, null);
      }

      append_dev(main, t8);
      append_dev(main, div5);
      append_dev(div5, t9);
      append_dev(div5, t10);
      append_dev(div5, t11);
      append_dev(main, t12);
      append_dev(main, textarea);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*startInspect*/
        ctx[10], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*boxSize, start*/
      264 && div0_style_value !== (div0_style_value = "\n    position: fixed;\n    width:".concat(
      /*boxSize*/
      ctx[8].width, "px;\n    height:", 1, "px;\n    top:").concat(
      /*boxSize*/
      ctx[8].top +
      /*boxSize*/
      ctx[8].height, "px;\n    left:").concat(
      /*boxSize*/
      ctx[8].left, "px;\n    border-bottom:1px solid red;\n    z-index: 999;\n    opacity:").concat(
      /*start*/
      ctx[3] ? 1 : 0, ";\n    "))) {
        attr_dev(div0, "style", div0_style_value);
      }

      if (dirty &
      /*start*/
      8 && t1_value !== (t1_value = (!
      /*start*/
      ctx[3] ? "Start" : "End") + "")) set_data_dev(t1, t1_value);

      if (dirty &
      /*selected, Object, JSON, selectTag*/
      33) {
        each_value_1 =
        /*selected*/
        ctx[5];
        validate_each_argument(each_value_1);

        var _i11;

        for (_i11 = 0; _i11 < each_value_1.length; _i11 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i11);

          if (each_blocks_1[_i11]) {
            each_blocks_1[_i11].p(child_ctx, dirty);
          } else {
            each_blocks_1[_i11] = create_each_block_1(child_ctx);

            each_blocks_1[_i11].c();

            each_blocks_1[_i11].m(div2, null);
          }
        }

        for (; _i11 < each_blocks_1.length; _i11 += 1) {
          each_blocks_1[_i11].d(1);
        }

        each_blocks_1.length = each_value_1.length;
      }

      if (dirty &
      /*attributes, selectValue*/
      18) {
        each_value =
        /*attributes*/
        ctx[4];
        validate_each_argument(each_value);

        var _i12;

        for (_i12 = 0; _i12 < each_value.length; _i12 += 1) {
          var _child_ctx = get_each_context(ctx, each_value, _i12);

          if (each_blocks[_i12]) {
            each_blocks[_i12].p(_child_ctx, dirty);
          } else {
            each_blocks[_i12] = create_each_block(_child_ctx);

            each_blocks[_i12].c();

            each_blocks[_i12].m(div4, null);
          }
        }

        for (; _i12 < each_blocks.length; _i12 += 1) {
          each_blocks[_i12].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (dirty &
      /*elms*/
      4 && t10_value !== (t10_value =
      /*elms*/
      ctx[2].length + "")) set_data_dev(t10, t10_value);

      if (dirty &
      /*data*/
      512) {
        prop_dev(textarea, "value",
        /*data*/
        ctx[9]);
      }

      if (dirty &
      /*initHidden, hidden, start*/
      200 && main_style_value !== (main_style_value = "\ndisplay:".concat(!
      /*initHidden*/
      ctx[7] ? "none" : "block", ";\ntransform:translateX(").concat(
      /*hidden*/
      ctx[6] ? "324px" :
      /*start*/
      ctx[3] ? "calc(320px - 2em)" : "0px", ")"))) {
        attr_dev(main, "style", main_style_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div0);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(main);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var func = function func(i) {
  return i;
};

var func_1 = function func_1(i) {
  return i;
};

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Content", slots, []);
  var start = false;
  var element = {};
  var attributes = [];
  var selected = [];
  var selectTag = "{}";
  var selectValue = [];
  var hidden = false;
  var initHidden = hidden;
  var boxSize = {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  };

  function handleMessage(request, sender, sendResponse) {
    console.log("Messag: ", request);
    $$invalidate(6, hidden = request.hidden);
  }

  browser.storage.onChanged.addListener(function (change, area) {
    $$invalidate(7, initHidden = change.hidden.newValue);
  });
  browser.storage.local.get("hidden").then(function (data) {
    // console.log('hidden', { data })
    $$invalidate(7, initHidden = data.hidden);
  });
  browser.runtime.onMessage.addListener(handleMessage);
  window.addEventListener("mousemove", function (event) {
    if (start) {
      var x = event.clientX;
      var y = event.clientY; // console.log({ x, y })

      var el = document.elementFromPoint(x, y);

      if (el) {
        var _el$getBoundingClient = el.getBoundingClientRect(),
            width = _el$getBoundingClient.width,
            height = _el$getBoundingClient.height,
            top = _el$getBoundingClient.top,
            left = _el$getBoundingClient.left;

        $$invalidate(8, boxSize = {
          width: width,
          height: height,
          top: top,
          left: left
        });
      } // console.log(elm, boxSize)

    }
  });

  var onGlobalClick = function onGlobalClick(e) {
    e.preventDefault();
    console.log("SDClick", e.path, e.srcElement.attributes);
    $$invalidate(3, start = false);
    clear();
    element = e.srcElement;
    $$invalidate(4, attributes = [].concat(_toConsumableArray(e.srcElement.attributes), [{
      nodeName: "Text",
      nodeValue: e.srcElement.innerText
    }]));
    $$invalidate(5, selected = e.path.map(function (i) {
      return {
        type: i.localName,
        "class": i.className
      };
    }).filter(function (i) {
      return i.type;
    }));
    window.removeEventListener("click", onGlobalClick);
  };

  var clear = function clear() {
    element = {};
    $$invalidate(5, selected = []);
    $$invalidate(4, attributes = []);
  };

  var startInspect = function startInspect() {
    $$invalidate(3, start = !start);
    setTimeout(function () {
      window.addEventListener("click", onGlobalClick);
    }, 100);
  };

  var elms;
  var data = "";

  var getAttrValue = function getAttrValue(i, attr) {
    if (attr === "Text") {
      return i.innerText;
    } else {
      return i[attr];
    }
  };

  var getData = function getData(elms, index) {
    var ans = [];
    if (!elms && elms.length <= 1) return [];

    var findElement = function findElement(elms, index) {
      if (index !== 0) {
        var childTag = selected[index - 1];

        var _iterator = _createForOfIteratorHelper(elms),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var e = _step.value;
            var node = e.childNodes; // console.log(node, index)

            if (node && childTag && node.className === childTag.className && node.nodeName === childTag.localName) {
              if (index - 1 === 0) {
                ans.push(node[0]);
              }

              if (node.childrenNode) {
                findElement(node.childrenNode, index - 1);
              }

              continue;
            } else {
              continue;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        ans = _toConsumableArray(elms);
      }
    }; // console.log({ elms })


    findElement(elms, index);
    return ans;
  };

  var writable_props = [];
  Object_1.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Content> was created with unknown prop '".concat(key, "'"));
  });
  var $$binding_groups = [[], []];

  function input_change_handler() {
    selectTag = this.__value;
    $$invalidate(0, selectTag);
  }

  function input_change_handler_1() {
    selectValue = get_binding_group_value($$binding_groups[0], this.__value, this.checked);
    $$invalidate(1, selectValue);
  }

  $$self.$capture_state = function () {
    return {
      start: start,
      element: element,
      attributes: attributes,
      selected: selected,
      selectTag: selectTag,
      selectValue: selectValue,
      hidden: hidden,
      initHidden: initHidden,
      boxSize: boxSize,
      handleMessage: handleMessage,
      onGlobalClick: onGlobalClick,
      clear: clear,
      startInspect: startInspect,
      elms: elms,
      data: data,
      getAttrValue: getAttrValue,
      getData: getData
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("start" in $$props) $$invalidate(3, start = $$props.start);
    if ("element" in $$props) element = $$props.element;
    if ("attributes" in $$props) $$invalidate(4, attributes = $$props.attributes);
    if ("selected" in $$props) $$invalidate(5, selected = $$props.selected);
    if ("selectTag" in $$props) $$invalidate(0, selectTag = $$props.selectTag);
    if ("selectValue" in $$props) $$invalidate(1, selectValue = $$props.selectValue);
    if ("hidden" in $$props) $$invalidate(6, hidden = $$props.hidden);
    if ("initHidden" in $$props) $$invalidate(7, initHidden = $$props.initHidden);
    if ("boxSize" in $$props) $$invalidate(8, boxSize = $$props.boxSize);
    if ("elms" in $$props) $$invalidate(2, elms = $$props.elms);
    if ("data" in $$props) $$invalidate(9, data = $$props.data);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*selectTag, selectValue, elms*/
    7) {
      {
        var selecObj = JSON.parse(selectTag || "{}");
        $$invalidate(2, elms = document.querySelectorAll(selecObj.tag || "html")); // console.log(elms, elms.length)

        console.log(selectValue, selectValue.length);

        if (selectValue.length === 1) {
          $$invalidate(9, data = getData(elms, selecObj.index).map(function (i) {
            return getAttrValue(i, selectValue[0]);
          }).join("\n"));
        } else {
          $$invalidate(9, data = JSON.stringify(getData(elms, selecObj.index).map(function (i) {
            var obj = {};
            selectValue.forEach(function (attr) {
              obj[attr] = getAttrValue(i, attr);
            });
            return obj;
          }), null, 2));
        }
      }
    }
  };

  return [selectTag, selectValue, elms, start, attributes, selected, hidden, initHidden, boxSize, data, startInspect, input_change_handler, $$binding_groups, input_change_handler_1];
}

var Content = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Content, _SvelteComponentDev);

  var _super2 = _createSuper(Content);

  function Content(options) {
    var _this;

    _classCallCheck(this, Content);

    _this = _super2.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Content",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Content;
}(SvelteComponentDev);

var app = new Content({
  target: document.body
});

export default app;
