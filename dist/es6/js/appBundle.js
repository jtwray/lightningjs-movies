/**
 * App version: 1.0.0
 * SDK version: 5.3.1
 * CLI version: 2.10.0
 * 
 * Generated: Mon, 17 Apr 2023 17:11:22 GMT
 */

var APP_com_domain_app_movies = (function () {
  'use strict';

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const settings = {};
  const subscribers = {};
  const initSettings = (appSettings, platformSettings) => {
    settings['app'] = appSettings;
    settings['platform'] = platformSettings;
    settings['user'] = {};
  };
  const publish = (key, value) => {
    subscribers[key] && subscribers[key].forEach(subscriber => subscriber(value));
  };
  const dotGrab = function () {
    let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let key = arguments.length > 1 ? arguments[1] : undefined;
    if (obj === null) return undefined;
    const keys = key.split('.');
    for (let i = 0; i < keys.length; i++) {
      obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
    }
    return typeof obj === 'object' && obj !== null ? Object.keys(obj).length ? obj : undefined : obj;
  };
  var Settings$1 = {
    get(type, key) {
      let fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      const val = dotGrab(settings[type], key);
      return val !== undefined ? val : fallback;
    },
    has(type, key) {
      return !!this.get(type, key);
    },
    set(key, value) {
      settings['user'][key] = value;
      publish(key, value);
    },
    subscribe(key, callback) {
      subscribers[key] = subscribers[key] || [];
      subscribers[key].push(callback);
    },
    unsubscribe(key, callback) {
      if (callback) {
        const index = subscribers[key] && subscribers[key].findIndex(cb => cb === callback);
        index > -1 && subscribers[key].splice(index, 1);
      } else {
        if (key in subscribers) {
          subscribers[key] = [];
        }
      }
    },
    clearSubscribers() {
      for (const key of Object.getOwnPropertyNames(subscribers)) {
        delete subscribers[key];
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const prepLog = (type, args) => {
    const colors = {
      Info: 'green',
      Debug: 'gray',
      Warn: 'orange',
      Error: 'red'
    };
    args = Array.from(args);
    return ['%c' + (args.length > 1 && typeof args[0] === 'string' ? args.shift() : type), 'background-color: ' + colors[type] + '; color: white; padding: 2px 4px; border-radius: 2px', args];
  };
  var Log$1 = {
    info() {
      Settings$1.get('platform', 'log') && console.log.apply(console, prepLog('Info', arguments));
    },
    debug() {
      Settings$1.get('platform', 'log') && console.debug.apply(console, prepLog('Debug', arguments));
    },
    error() {
      Settings$1.get('platform', 'log') && console.error.apply(console, prepLog('Error', arguments));
    },
    warn() {
      Settings$1.get('platform', 'log') && console.warn.apply(console, prepLog('Warn', arguments));
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var Lightning$1 = window.lng;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ColorShift$1 extends Lightning$1.shaders.WebGLDefaultShader {
    set brightness(v) {
      this._brightness = (v - 50) / 100;
      this.redraw();
    }
    set contrast(v) {
      this._contrast = (v + 50) / 100;
      this.redraw();
    }
    set gamma(v) {
      this._gamma = (v + 50) / 100;
      this.redraw();
    }
    setupUniforms(operation) {
      super.setupUniforms(operation);
      const gl = this.gl;
      this._setUniform('colorAdjust', [this._brightness || 0.0, this._contrast || 1.0, this._gamma || 1.0], gl.uniform3fv);
    }
  }
  ColorShift$1.before = "\n    #ifdef GL_ES\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision lowp float;\n    # endif\n    #endif\n        \n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform vec3 colorAdjust;\n    \n    const mat3 RGBtoOpponentMat = mat3(0.2814, -0.0971, -0.0930, 0.6938, 0.1458,-0.2529, 0.0638, -0.0250, 0.4665);\n    const mat3 OpponentToRGBMat = mat3(1.1677, 0.9014, 0.7214, -6.4315, 2.5970, 0.1257, -0.5044, 0.0159, 2.0517);    \n";
  ColorShift$1.after = "    \n    vec3 brightnessContrast(vec3 value, float brightness, float contrast)\n    {\n        return (value - 0.5) * contrast + 0.5 + brightness;\n    }   \n    \n    vec3 updateGamma(vec3 value, float param)\n    {\n        return vec3(pow(abs(value.r), param),pow(abs(value.g), param),pow(abs(value.b), param));\n    } \n       \n    void main(void){\n        vec4 fragColor = texture2D(uSampler, vTextureCoord);        \n        vec4 color = filter(fragColor) * vColor;       \n        \n        vec3 bc = brightnessContrast(color.rgb,colorAdjust[0],colorAdjust[1]);        \n        vec3 ga = updateGamma(bc.rgb, colorAdjust[2]);  \n              \n        gl_FragColor = vec4(ga.rgb, color.a);          \n    }    \n";

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ProtanopiaShader extends ColorShift$1 {}
  ProtanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift$1.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.20,  0.99, -0.19, 0.0);\n        vec4 g = vec4( 0.16,  0.79,  0.04, 0.0);\n        vec4 b = vec4( 0.01, -0.01,  1.00, 0.0);\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));      \n    }    \n    ").concat(ColorShift$1.after, " \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class DeuteranopiaShader extends ColorShift$1 {}
  DeuteranopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift$1.before, "\n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.43,  0.72, -0.15, 0.0 );\n        vec4 g = vec4( 0.34,  0.57,  0.09, 0.0 );\n        vec4 b = vec4(-0.02,  0.03,  1.00, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n       \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));    \n    }\n    ").concat(ColorShift$1.after, "    \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class TritanopiaShader extends ColorShift$1 {}
  TritanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift$1.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.97,  0.11, -0.08, 0.0 );\n        vec4 g = vec4( 0.02,  0.82,  0.16, 0.0 );\n        vec4 b = vec4(-0.06,  0.88,  0.18, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }   \n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= ((3.0 * opponentColor.z) - opponentColor.y) * 0.25;\n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));\n    }   \n    ").concat(ColorShift$1.after, " \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class NeutralShader extends ColorShift$1 {}
  NeutralShader.fragmentShaderSource = "\n    ".concat(ColorShift$1.before, "\n    vec4 filter( vec4 color )\n    {\n        return color;\n    }\n    ").concat(ColorShift$1.after, "\n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class MonochromacyShader extends ColorShift$1 {}
  MonochromacyShader.fragmentShaderSource = "\n    ".concat(ColorShift$1.before, "\n    vec4 filter( vec4 color )\n    {   \n        float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));\n        return vec4(vec3(grey, grey, grey), 1.0 ); \n    }\n    ").concat(ColorShift$1.after, "\n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const colorshiftShader = type => {
    const shadersMap = {
      normal: NeutralShader,
      monochromacy: MonochromacyShader,
      deuteranopia: DeuteranopiaShader,
      tritanopia: TritanopiaShader,
      protanopia: ProtanopiaShader
    };
    type = typeof type === 'string' && type.toLowerCase() || null;
    return Object.keys(shadersMap).indexOf(type) > -1 ? shadersMap[type] : false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Accessibility = {
    colorshift(component) {
      let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      let config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        brightness: 50,
        contrast: 50,
        gamma: 50
      };
      config = {
        ...{
          brightness: 50,
          contrast: 50,
          gamma: 50
        },
        ...config
      };
      const shader = type && colorshiftShader(type);
      if (shader) {
        Log$1.info('Accessibility Colorshift', type, config);
        component.rtt = true;
        component.shader = {
          type: shader,
          ...config
        };
      } else {
        Log$1.info('Accessibility Colorshift', 'Disabled');
        component.rtt = false;
        component.shader = null;
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let Log;
  let Settings;
  let ApplicationInstance$1;
  let Ads$1;
  let Lightning;
  const initLightningSdkPlugin = {
    set log(v) {
      Log = v;
    },
    set settings(v) {
      Settings = v;
    },
    set ads(v) {
      Ads$1 = v;
    },
    set lightning(v) {
      Lightning = v;
    },
    set appInstance(v) {
      ApplicationInstance$1 = v;
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initMetrics = config => {
    sendMetric = config.sendMetric;
  };
  let sendMetric = (type, event, params) => {
    Log.info('Sending metric', type, event, params);
  };

  // available metric per category
  const metrics$1 = {
    app: ['launch', 'loaded', 'ready', 'close'],
    page: ['view', 'leave'],
    user: ['click', 'input'],
    media: ['abort', 'canplay', 'ended', 'pause', 'play',
    // with some videos there occur almost constant suspend events ... should investigate
    // 'suspend',
    'volumechange', 'waiting', 'seeking', 'seeked']
  };

  // error metric function (added to each category)
  const errorMetric = function (type, message, code, visible) {
    let params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    params = {
      params,
      ...{
        message,
        code,
        visible
      }
    };
    sendMetric(type, 'error', params);
  };
  const Metric = function (type, events) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return events.reduce((obj, event) => {
      obj[event] = function (name) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        params = {
          ...options,
          ...(name ? {
            name
          } : {}),
          ...params
        };
        sendMetric(type, event, params);
      };
      return obj;
    }, {
      error(message, code, params) {
        errorMetric(type, message, code, params);
      },
      event(name, params) {
        sendMetric(type, name, params);
      }
    });
  };
  const Metrics = types => {
    return Object.keys(types).reduce((obj, type) => {
      // media metric works a bit different!
      // it's a function that accepts a url and returns an object with the available metrics
      // url is automatically passed as a param in every metric
      type === 'media' ? obj[type] = url => Metric(type, types[type], {
        url
      }) : obj[type] = Metric(type, types[type]);
      return obj;
    }, {
      error: errorMetric,
      event: sendMetric
    });
  };
  var Metrics$1 = Metrics(metrics$1);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const formatLocale = locale => {
    if (locale && locale.length === 2) {
      return "".concat(locale.toLowerCase(), "-").concat(locale.toUpperCase());
    } else {
      return locale;
    }
  };
  const getLocale = defaultValue => {
    if ('language' in navigator) {
      const locale = formatLocale(navigator.language);
      return Promise.resolve(locale);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const getLanguage = defaultValue => {
    if ('language' in navigator) {
      const language = formatLocale(navigator.language).slice(0, 2);
      return Promise.resolve(language);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const getCountryCode = defaultValue => {
    if ('language' in navigator) {
      const countryCode = formatLocale(navigator.language).slice(3, 5);
      return Promise.resolve(countryCode);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const hasOrAskForGeoLocationPermission = () => {
    return new Promise(resolve => {
      // force to prompt for location permission
      if (Settings.get('platform', 'forceBrowserGeolocation') === true) resolve(true);
      if ('permissions' in navigator && typeof navigator.permissions.query === 'function') {
        navigator.permissions.query({
          name: 'geolocation'
        }).then(status => {
          resolve(status.state === 'granted' || status.status === 'granted');
        });
      } else {
        resolve(false);
      }
    });
  };
  const getLatLon = defaultValue => {
    return new Promise(resolve => {
      hasOrAskForGeoLocationPermission().then(granted => {
        if (granted === true) {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
            // success
            result => result && result.coords && resolve([result.coords.latitude, result.coords.longitude]),
            // error
            () => resolve(defaultValue),
            // options
            {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
            });
          } else {
            return queryForLatLon().then(result => resolve(result || defaultValue));
          }
        } else {
          return queryForLatLon().then(result => resolve(result || defaultValue));
        }
      });
    });
  };
  const queryForLatLon = () => {
    return new Promise(resolve => {
      fetch('https://geolocation-db.com/json/').then(response => response.json()).then(_ref => {
        let {
          latitude,
          longitude
        } = _ref;
        return latitude && longitude ? resolve([latitude, longitude]) : resolve(false);
      }).catch(() => resolve(false));
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const defaultProfile = {
    ageRating: 'adult',
    city: 'New York',
    zipCode: '27505',
    countryCode: () => getCountryCode('US'),
    ip: '127.0.0.1',
    household: 'b2244e9d4c04826ccd5a7b2c2a50e7d4',
    language: () => getLanguage('en'),
    latlon: () => getLatLon([40.7128, 74.006]),
    locale: () => getLocale('en-US'),
    mac: '00:00:00:00:00:00',
    operator: 'metrological',
    platform: 'metrological',
    packages: [],
    uid: 'ee6723b8-7ab3-462c-8d93-dbf61227998e',
    stbType: 'metrological'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let getInfo = key => {
    const profile = {
      ...defaultProfile,
      ...Settings.get('platform', 'profile')
    };
    return Promise.resolve(typeof profile[key] === 'function' ? profile[key]() : profile[key]);
  };
  let setInfo = (key, params) => {
    if (key in defaultProfile) return defaultProfile[key] = params;
  };
  const initProfile = config => {
    getInfo = config.getInfo ? config.getInfo : getInfo;
    setInfo = config.setInfo ? config.setInfo : setInfo;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initPurchase = config => {
    if (config.billingUrl) config.billingUrl;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const defaultChannels = [{
    number: 1,
    name: 'Metro News 1',
    description: 'New York Cable News Channel',
    entitled: true,
    program: {
      title: 'The Morning Show',
      description: "New York's best morning show",
      startTime: new Date(new Date() - 60 * 5 * 1000).toUTCString(),
      // started 5 minutes ago
      duration: 60 * 30,
      // 30 minutes
      ageRating: 0
    }
  }, {
    number: 2,
    name: 'MTV',
    description: 'Music Television',
    entitled: true,
    program: {
      title: 'Beavis and Butthead',
      description: 'American adult animated sitcom created by Mike Judge',
      startTime: new Date(new Date() - 60 * 20 * 1000).toUTCString(),
      // started 20 minutes ago
      duration: 60 * 45,
      // 45 minutes
      ageRating: 18
    }
  }, {
    number: 3,
    name: 'NBC',
    description: 'NBC TV Network',
    entitled: false,
    program: {
      title: 'The Tonight Show Starring Jimmy Fallon',
      description: 'Late-night talk show hosted by Jimmy Fallon on NBC',
      startTime: new Date(new Date() - 60 * 10 * 1000).toUTCString(),
      // started 10 minutes ago
      duration: 60 * 60,
      // 1 hour
      ageRating: 10
    }
  }];
  const channels = () => Settings.get('platform', 'tv', defaultChannels);
  const randomChannel = () => channels()[~~(channels.length * Math.random())];

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let currentChannel;
  const callbacks = {};
  const emit$1 = function (event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    callbacks[event] && callbacks[event].forEach(cb => {
      cb.apply(null, args);
    });
  };

  // local mock methods
  let methods = {
    getChannel() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        if (currentChannel) {
          const channel = {
            ...currentChannel
          };
          delete channel.program;
          resolve(channel);
        } else {
          reject('No channel found');
        }
      });
    },
    getProgram() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        currentChannel.program ? resolve(currentChannel.program) : reject('No program found');
      });
    },
    setChannel(number) {
      return new Promise((resolve, reject) => {
        if (number) {
          const newChannel = channels().find(c => c.number === number);
          if (newChannel) {
            currentChannel = newChannel;
            const channel = {
              ...currentChannel
            };
            delete channel.program;
            emit$1('channelChange', channel);
            resolve(channel);
          } else {
            reject('Channel not found');
          }
        } else {
          reject('No channel number supplied');
        }
      });
    }
  };
  const initTV = config => {
    methods = {};
    if (config.getChannel && typeof config.getChannel === 'function') {
      methods.getChannel = config.getChannel;
    }
    if (config.getProgram && typeof config.getProgram === 'function') {
      methods.getProgram = config.getProgram;
    }
    if (config.setChannel && typeof config.setChannel === 'function') {
      methods.setChannel = config.setChannel;
    }
    if (config.emit && typeof config.emit === 'function') {
      config.emit(emit$1);
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initPin = config => {
    if (config.submit && typeof config.submit === 'function') {
      config.submit;
    }
    if (config.check && typeof config.check === 'function') {
      config.check;
    }
  };

  var executeAsPromise = (function (method) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let result;
    if (method && typeof method === 'function') {
      try {
        result = method.apply(context, args);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }

    // if it looks like a duck .. ehm ... promise and talks like a promise, let's assume it's a promise
    if (result !== null && typeof result === 'object' && result.then && typeof result.then === 'function') {
      return result;
    }
    // otherwise make it into a promise
    else {
      return new Promise((resolve, reject) => {
        if (result instanceof Error) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var events$1 = {
    abort: 'Abort',
    canplay: 'CanPlay',
    canplaythrough: 'CanPlayThrough',
    durationchange: 'DurationChange',
    emptied: 'Emptied',
    encrypted: 'Encrypted',
    ended: 'Ended',
    error: 'Error',
    interruptbegin: 'InterruptBegin',
    interruptend: 'InterruptEnd',
    loadeddata: 'LoadedData',
    loadedmetadata: 'LoadedMetadata',
    loadstart: 'LoadStart',
    pause: 'Pause',
    play: 'Play',
    playing: 'Playing',
    progress: 'Progress',
    ratechange: 'Ratechange',
    seeked: 'Seeked',
    seeking: 'Seeking',
    stalled: 'Stalled',
    // suspend: 'Suspend', // this one is called a looooot for some videos
    timeupdate: 'TimeUpdate',
    volumechange: 'VolumeChange',
    waiting: 'Waiting'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var autoSetupMixin = (function (sourceObject) {
    let setup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
    let ready = false;
    const doSetup = () => {
      if (ready === false) {
        setup();
        ready = true;
      }
    };
    return Object.keys(sourceObject).reduce((obj, key) => {
      if (typeof sourceObject[key] === 'function') {
        obj[key] = function () {
          doSetup();
          return sourceObject[key].apply(sourceObject, arguments);
        };
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).get === 'function') {
        obj.__defineGetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).get.apply(sourceObject);
        });
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).set === 'function') {
        obj.__defineSetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).set.sourceObject[key].apply(sourceObject, arguments);
        });
      } else {
        obj[key] = sourceObject[key];
      }
      return obj;
    }, {});
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let timeout = null;
  var easeExecution = ((cb, delay) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb();
    }, delay);
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var VideoTexture = (() => {
    return class VideoTexture extends Lightning.Component {
      static _template() {
        return {
          Video: {
            alpha: 1,
            visible: false,
            pivot: 0.5,
            texture: {
              type: Lightning.textures.StaticTexture,
              options: {}
            }
          }
        };
      }
      set videoEl(v) {
        this._videoEl = v;
      }
      get videoEl() {
        return this._videoEl;
      }
      get videoView() {
        return this.tag('Video');
      }
      get videoTexture() {
        return this.videoView.texture;
      }
      get isVisible() {
        return this.videoView.alpha === 1 && this.videoView.visible === true;
      }
      _init() {
        this._createVideoTexture();
      }
      _createVideoTexture() {
        const stage = this.stage;
        const gl = stage.gl;
        const glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
        this.videoView.w = this.videoEl.width / this.stage.getRenderPrecision();
        this.videoView.h = this.videoEl.height / this.stage.getRenderPrecision();
      }
      start() {
        const stage = this.stage;
        this._lastTime = 0;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage.gl;
              const currentTime = new Date().getTime();
              const getVideoPlaybackQuality = this.videoEl.getVideoPlaybackQuality();

              // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              // As 'webkitDecodedFrameCount' is about to deprecate, check for the 'totalVideoFrames'
              const frameCount = getVideoPlaybackQuality ? getVideoPlaybackQuality.totalVideoFrames : this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoView.visible = true;
                  this.videoTexture.options.w = this.videoEl.width;
                  this.videoTexture.options.h = this.videoEl.height;
                  const expectedAspectRatio = this.videoView.w / this.videoView.h;
                  const realAspectRatio = this.videoEl.width / this.videoEl.height;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoView.scaleY = 1;
                  } else {
                    this.videoView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoView.scaleX = 1;
                  }
                } catch (e) {
                  Log.error('texImage2d video', e);
                  this.stop();
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
      stop() {
        const stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
      position(top, left) {
        this.videoView.patch({
          smooth: {
            x: left,
            y: top
          }
        });
      }
      size(width, height) {
        this.videoView.patch({
          smooth: {
            w: width,
            h: height
          }
        });
      }
      show() {
        this.videoView.setSmooth('alpha', 1);
      }
      hide() {
        this.videoView.setSmooth('alpha', 0);
      }
    };
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let mediaUrl$1 = url => url;
  let videoEl;
  let videoTexture;
  let metrics;
  let consumer$1;
  let precision = 1;
  let textureMode = false;
  const initVideoPlayer = config => {
    if (config.mediaUrl) {
      mediaUrl$1 = config.mediaUrl;
    }
  };
  // todo: add this in a 'Registry' plugin
  // to be able to always clean this up on app close
  let eventHandlers = {};
  const state$1 = {
    adsEnabled: false,
    playing: false,
    _playingAds: false,
    get playingAds() {
      return this._playingAds;
    },
    set playingAds(val) {
      if (this._playingAds !== val) {
        this._playingAds = val;
        fireOnConsumer$1(val === true ? 'AdStart' : 'AdEnd');
      }
    },
    skipTime: false,
    playAfterSeek: null
  };
  const hooks = {
    play() {
      state$1.playing = true;
    },
    pause() {
      state$1.playing = false;
    },
    seeked() {
      state$1.playAfterSeek === true && videoPlayerPlugin.play();
      state$1.playAfterSeek = null;
    },
    abort() {
      deregisterEventListeners();
    }
  };
  const withPrecision = val => Math.round(precision * val) + 'px';
  const fireOnConsumer$1 = (event, args) => {
    if (consumer$1) {
      consumer$1.fire('$videoPlayer' + event, args, videoEl.currentTime);
      consumer$1.fire('$videoPlayerEvent', event, args, videoEl.currentTime);
    }
  };
  const fireHook = (event, args) => {
    hooks[event] && typeof hooks[event] === 'function' && hooks[event].call(null, event, args);
  };
  let customLoader = null;
  let customUnloader = null;
  const loader$1 = (url, videoEl, config) => {
    return customLoader && typeof customLoader === 'function' ? customLoader(url, videoEl, config) : new Promise(resolve => {
      url = mediaUrl$1(url);
      videoEl.setAttribute('src', url);
      videoEl.load();
      resolve();
    });
  };
  const unloader = videoEl => {
    return customUnloader && typeof customUnloader === 'function' ? customUnloader(videoEl) : new Promise(resolve => {
      videoEl.removeAttribute('src');
      videoEl.load();
      resolve();
    });
  };
  const setupVideoTag = () => {
    const videoEls = document.getElementsByTagName('video');
    if (videoEls && videoEls.length) {
      return videoEls[0];
    } else {
      const videoEl = document.createElement('video');
      const platformSettingsWidth = Settings.get('platform', 'width') ? Settings.get('platform', 'width') : 1920;
      const platformSettingsHeight = Settings.get('platform', 'height') ? Settings.get('platform', 'height') : 1080;
      videoEl.setAttribute('id', 'video-player');
      videoEl.setAttribute('width', withPrecision(platformSettingsWidth));
      videoEl.setAttribute('height', withPrecision(platformSettingsHeight));
      videoEl.style.position = 'absolute';
      videoEl.style.zIndex = '1';
      videoEl.style.display = 'none';
      videoEl.style.visibility = 'hidden';
      videoEl.style.top = withPrecision(0);
      videoEl.style.left = withPrecision(0);
      videoEl.style.width = withPrecision(platformSettingsWidth);
      videoEl.style.height = withPrecision(platformSettingsHeight);
      document.body.appendChild(videoEl);
      return videoEl;
    }
  };
  const setUpVideoTexture = () => {
    if (!ApplicationInstance$1.tag('VideoTexture')) {
      const el = ApplicationInstance$1.stage.c({
        type: VideoTexture(),
        ref: 'VideoTexture',
        zIndex: 0,
        videoEl
      });
      ApplicationInstance$1.childList.addAt(el, 0);
    }
    return ApplicationInstance$1.tag('VideoTexture');
  };
  const registerEventListeners = () => {
    Log.info('VideoPlayer', 'Registering event listeners');
    Object.keys(events$1).forEach(event => {
      const handler = e => {
        // Fire a metric for each event (if it exists on the metrics object)
        if (metrics && metrics[event] && typeof metrics[event] === 'function') {
          metrics[event]({
            currentTime: videoEl.currentTime
          });
        }
        // fire an internal hook
        fireHook(event, {
          videoElement: videoEl,
          event: e
        });

        // fire the event (with human friendly event name) to the consumer of the VideoPlayer
        fireOnConsumer$1(events$1[event], {
          videoElement: videoEl,
          event: e
        });
      };
      eventHandlers[event] = handler;
      videoEl.addEventListener(event, handler);
    });
  };
  const deregisterEventListeners = () => {
    Log.info('VideoPlayer', 'Deregistering event listeners');
    Object.keys(eventHandlers).forEach(event => {
      videoEl.removeEventListener(event, eventHandlers[event]);
    });
    eventHandlers = {};
  };
  const videoPlayerPlugin = {
    consumer(component) {
      consumer$1 = component;
    },
    loader(loaderFn) {
      customLoader = loaderFn;
    },
    unloader(unloaderFn) {
      customUnloader = unloaderFn;
    },
    position() {
      let top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      videoEl.style.left = withPrecision(left);
      videoEl.style.top = withPrecision(top);
      if (textureMode === true) {
        videoTexture.position(top, left);
      }
    },
    size() {
      let width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
      let height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;
      videoEl.style.width = withPrecision(width);
      videoEl.style.height = withPrecision(height);
      videoEl.width = parseFloat(videoEl.style.width);
      videoEl.height = parseFloat(videoEl.style.height);
      if (textureMode === true) {
        videoTexture.size(width, height);
      }
    },
    area() {
      let top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1920;
      let bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
      let left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.position(top, left);
      this.size(right - left, bottom - top);
    },
    open(url) {
      let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.canInteract) return;
      metrics = Metrics$1.media(url);
      this.hide();
      deregisterEventListeners();
      if (this.src == url) {
        this.clear().then(this.open(url, config));
      } else {
        const adConfig = {
          enabled: state$1.adsEnabled,
          duration: 300
        };
        if (config.videoId) {
          adConfig.caid = config.videoId;
        }
        Ads$1.get(adConfig, consumer$1).then(ads => {
          state$1.playingAds = true;
          ads.prerolls().then(() => {
            state$1.playingAds = false;
            loader$1(url, videoEl, config).then(() => {
              registerEventListeners();
              this.show();
              this.play();
            }).catch(e => {
              fireOnConsumer$1('error', {
                videoElement: videoEl,
                event: e
              });
            });
          });
        });
      }
    },
    reload() {
      if (!this.canInteract) return;
      const url = videoEl.getAttribute('src');
      this.close();
      this.open(url);
    },
    close() {
      Ads$1.cancel();
      if (state$1.playingAds) {
        state$1.playingAds = false;
        Ads$1.stop();
        // call self in next tick
        setTimeout(() => {
          this.close();
        });
      }
      if (!this.canInteract) return;
      this.clear();
      this.hide();
      deregisterEventListeners();
    },
    clear() {
      if (!this.canInteract) return;
      // pause the video first to disable sound
      this.pause();
      if (textureMode === true) videoTexture.stop();
      return unloader(videoEl).then(() => {
        fireOnConsumer$1('Clear', {
          videoElement: videoEl
        });
      });
    },
    play() {
      if (!this.canInteract) return;
      if (textureMode === true) videoTexture.start();
      executeAsPromise(videoEl.play, null, videoEl).catch(e => {
        fireOnConsumer$1('error', {
          videoElement: videoEl,
          event: e
        });
      });
    },
    pause() {
      if (!this.canInteract) return;
      videoEl.pause();
    },
    playPause() {
      if (!this.canInteract) return;
      this.playing === true ? this.pause() : this.play();
    },
    mute() {
      let muted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.canInteract) return;
      videoEl.muted = muted;
    },
    loop() {
      let looped = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      videoEl.loop = looped;
    },
    seek(time) {
      if (!this.canInteract) return;
      if (!this.src) return;
      // define whether should continue to play after seek is complete (in seeked hook)
      if (state$1.playAfterSeek === null) {
        state$1.playAfterSeek = !!state$1.playing;
      }
      // pause before actually seeking
      this.pause();
      // currentTime always between 0 and the duration of the video (minus 0.1s to not set to the final frame and stall the video)
      videoEl.currentTime = Math.max(0, Math.min(time, this.duration - 0.1));
    },
    skip(seconds) {
      if (!this.canInteract) return;
      if (!this.src) return;
      state$1.skipTime = (state$1.skipTime || videoEl.currentTime) + seconds;
      easeExecution(() => {
        this.seek(state$1.skipTime);
        state$1.skipTime = false;
      }, 300);
    },
    show() {
      if (!this.canInteract) return;
      if (textureMode === true) {
        videoTexture.show();
      } else {
        videoEl.style.display = 'block';
        videoEl.style.visibility = 'visible';
      }
    },
    hide() {
      if (!this.canInteract) return;
      if (textureMode === true) {
        videoTexture.hide();
      } else {
        videoEl.style.display = 'none';
        videoEl.style.visibility = 'hidden';
      }
    },
    enableAds() {
      let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      state$1.adsEnabled = enabled;
    },
    /* Public getters */
    get duration() {
      return videoEl && (isNaN(videoEl.duration) ? Infinity : videoEl.duration);
    },
    get currentTime() {
      return videoEl && videoEl.currentTime;
    },
    get muted() {
      return videoEl && videoEl.muted;
    },
    get looped() {
      return videoEl && videoEl.loop;
    },
    get src() {
      return videoEl && videoEl.getAttribute('src');
    },
    get playing() {
      return state$1.playing;
    },
    get playingAds() {
      return state$1.playingAds;
    },
    get canInteract() {
      // todo: perhaps add an extra flag wether we allow interactions (i.e. pauze, mute, etc.) during ad playback
      return state$1.playingAds === false;
    },
    get top() {
      return videoEl && parseFloat(videoEl.style.top);
    },
    get left() {
      return videoEl && parseFloat(videoEl.style.left);
    },
    get bottom() {
      return videoEl && parseFloat(videoEl.style.top - videoEl.style.height);
    },
    get right() {
      return videoEl && parseFloat(videoEl.style.left - videoEl.style.width);
    },
    get width() {
      return videoEl && parseFloat(videoEl.style.width);
    },
    get height() {
      return videoEl && parseFloat(videoEl.style.height);
    },
    get visible() {
      if (textureMode === true) {
        return videoTexture.isVisible;
      } else {
        return videoEl && videoEl.style.display === 'block';
      }
    },
    get adsEnabled() {
      return state$1.adsEnabled;
    },
    // prefixed with underscore to indicate 'semi-private'
    // because it's not recommended to interact directly with the video element
    get _videoEl() {
      return videoEl;
    },
    get _consumer() {
      return consumer$1;
    }
  };
  autoSetupMixin(videoPlayerPlugin, () => {
    precision = ApplicationInstance$1 && ApplicationInstance$1.stage && ApplicationInstance$1.stage.getRenderPrecision() || precision;
    videoEl = setupVideoTag();
    textureMode = Settings.get('platform', 'textureMode', false);
    if (textureMode === true) {
      videoEl.setAttribute('crossorigin', 'anonymous');
      videoTexture = setUpVideoTexture();
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let consumer;
  let getAds = () => {
    // todo: enable some default ads during development, maybe from the settings.json
    return Promise.resolve({
      prerolls: [],
      midrolls: [],
      postrolls: []
    });
  };
  const initAds = config => {
    if (config.getAds) {
      getAds = config.getAds;
    }
  };
  const state = {
    active: false
  };
  const playSlot = function () {
    let slot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return slot.reduce((promise, ad) => {
      return promise.then(() => {
        return playAd(ad);
      });
    }, Promise.resolve(null));
  };
  const playAd = ad => {
    return new Promise(resolve => {
      if (state.active === false) {
        Log$1.info('Ad', 'Skipping add due to inactive state');
        return resolve();
      }
      // is it safe to rely on videoplayer plugin already created the video tag?
      const videoEl = document.getElementsByTagName('video')[0];
      videoEl.style.display = 'block';
      videoEl.style.visibility = 'visible';
      videoEl.src = mediaUrl$1(ad.url);
      videoEl.load();
      let timeEvents = null;
      let timeout;
      const cleanup = () => {
        // remove all listeners
        Object.keys(handlers).forEach(handler => videoEl.removeEventListener(handler, handlers[handler]));
        resolve();
      };
      const handlers = {
        play() {
          Log$1.info('Ad', 'Play ad', ad.url);
          fireOnConsumer('Play', ad);
          sendBeacon(ad.callbacks, 'defaultImpression');
        },
        ended() {
          fireOnConsumer('Ended', ad);
          sendBeacon(ad.callbacks, 'complete');
          cleanup();
        },
        timeupdate() {
          if (!timeEvents && videoEl.duration) {
            // calculate when to fire the time based events (now that duration is known)
            timeEvents = {
              firstQuartile: videoEl.duration / 4,
              midPoint: videoEl.duration / 2,
              thirdQuartile: videoEl.duration / 4 * 3
            };
            Log$1.info('Ad', 'Calculated quartiles times', {
              timeEvents
            });
          }
          if (timeEvents && timeEvents.firstQuartile && videoEl.currentTime >= timeEvents.firstQuartile) {
            fireOnConsumer('FirstQuartile', ad);
            delete timeEvents.firstQuartile;
            sendBeacon(ad.callbacks, 'firstQuartile');
          }
          if (timeEvents && timeEvents.midPoint && videoEl.currentTime >= timeEvents.midPoint) {
            fireOnConsumer('MidPoint', ad);
            delete timeEvents.midPoint;
            sendBeacon(ad.callbacks, 'midPoint');
          }
          if (timeEvents && timeEvents.thirdQuartile && videoEl.currentTime >= timeEvents.thirdQuartile) {
            fireOnConsumer('ThirdQuartile', ad);
            delete timeEvents.thirdQuartile;
            sendBeacon(ad.callbacks, 'thirdQuartile');
          }
        },
        stalled() {
          fireOnConsumer('Stalled', ad);
          timeout = setTimeout(() => {
            cleanup();
          }, 5000); // make timeout configurable
        },

        canplay() {
          timeout && clearTimeout(timeout);
        },
        error() {
          fireOnConsumer('Error', ad);
          cleanup();
        },
        // this doesn't work reliably on sky box, moved logic to timeUpdate event
        // loadedmetadata() {
        //   // calculate when to fire the time based events (now that duration is known)
        //   timeEvents = {
        //     firstQuartile: videoEl.duration / 4,
        //     midPoint: videoEl.duration / 2,
        //     thirdQuartile: (videoEl.duration / 4) * 3,
        //   }
        // },
        abort() {
          cleanup();
        }
        // todo: pause, resume, mute, unmute beacons
      };
      // add all listeners
      Object.keys(handlers).forEach(handler => videoEl.addEventListener(handler, handlers[handler]));
      videoEl.play();
    });
  };
  const sendBeacon = (callbacks, event) => {
    if (callbacks && callbacks[event]) {
      Log$1.info('Ad', 'Sending beacon', event, callbacks[event]);
      return callbacks[event].reduce((promise, url) => {
        return promise.then(() => fetch(url)
        // always resolve, also in case of a fetch error (so we don't block firing the rest of the beacons for this event)
        // note: for fetch failed http responses don't throw an Error :)
        .then(response => {
          if (response.status === 200) {
            fireOnConsumer('Beacon' + event + 'Sent');
          } else {
            fireOnConsumer('Beacon' + event + 'Failed' + response.status);
          }
          Promise.resolve(null);
        }).catch(() => {
          Promise.resolve(null);
        }));
      }, Promise.resolve(null));
    } else {
      Log$1.info('Ad', 'No callback found for ' + event);
    }
  };
  const fireOnConsumer = (event, args) => {
    if (consumer) {
      consumer.fire('$ad' + event, args);
      consumer.fire('$adEvent', event, args);
    }
  };
  var Ads = {
    get(config, videoPlayerConsumer) {
      if (config.enabled === false) {
        return Promise.resolve({
          prerolls() {
            return Promise.resolve();
          }
        });
      }
      consumer = videoPlayerConsumer;
      return new Promise(resolve => {
        Log$1.info('Ad', 'Starting session');
        getAds(config).then(ads => {
          Log$1.info('Ad', 'API result', ads);
          resolve({
            prerolls() {
              if (ads.preroll) {
                state.active = true;
                fireOnConsumer('PrerollSlotImpression', ads);
                sendBeacon(ads.preroll.callbacks, 'slotImpression');
                return playSlot(ads.preroll.ads).then(() => {
                  fireOnConsumer('PrerollSlotEnd', ads);
                  sendBeacon(ads.preroll.callbacks, 'slotEnd');
                  state.active = false;
                });
              }
              return Promise.resolve();
            },
            midrolls() {
              return Promise.resolve();
            },
            postrolls() {
              return Promise.resolve();
            }
          });
        });
      });
    },
    cancel() {
      Log$1.info('Ad', 'Cancel Ad');
      state.active = false;
    },
    stop() {
      Log$1.info('Ad', 'Stop Ad');
      state.active = false;
      // fixme: duplication
      const videoEl = document.getElementsByTagName('video')[0];
      videoEl.pause();
      videoEl.removeAttribute('src');
    }
  };

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };
  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }
  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  }

  // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }
  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }
  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }
  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }
  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
  }
  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
      return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
  }
  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }
  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_) {
      return false;
    }
  }

  // Protects from prototype poisoning and unexpected merging up the prototype chain.
  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
    && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
    && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
  }

  function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function (key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }
    getKeys(source).forEach(function (key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }
      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }
  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }
  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error('first argument should be an array');
    }
    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };
  var deepmerge_1 = deepmerge;
  var cjs = deepmerge_1;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let warned = false;
  const deprecated = function () {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (force === true || warned === false) {
      console.warn(["The 'Locale'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'Language'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/language'].join('\n\n'));
    }
    warned = true;
  };
  class Locale {
    constructor() {
      this.__enabled = false;
    }

    /**
     * Loads translation object from external json file.
     *
     * @param {String} path Path to resource.
     * @return {Promise}
     */
    async load(path) {
      if (!this.__enabled) {
        return;
      }
      await fetch(path).then(resp => resp.json()).then(resp => {
        this.loadFromObject(resp);
      });
    }

    /**
     * Sets language used by module.
     *
     * @param {String} lang
     */
    setLanguage(lang) {
      deprecated();
      this.__enabled = true;
      this.language = lang;
    }

    /**
     * Returns reference to translation object for current language.
     *
     * @return {Object}
     */
    get tr() {
      deprecated(true);
      return this.__trObj[this.language];
    }

    /**
     * Loads translation object from existing object (binds existing object).
     *
     * @param {Object} trObj
     */
    loadFromObject(trObj) {
      deprecated();
      const fallbackLanguage = 'en';
      if (Object.keys(trObj).indexOf(this.language) === -1) {
        Log$1.warn('No translations found for: ' + this.language);
        if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
          Log$1.warn('Using fallback language: ' + fallbackLanguage);
          this.language = fallbackLanguage;
        } else {
          const error = 'No translations found for fallback language: ' + fallbackLanguage;
          Log$1.error(error);
          throw Error(error);
        }
      }
      this.__trObj = trObj;
      for (const lang of Object.values(this.__trObj)) {
        for (const str of Object.keys(lang)) {
          lang[str] = new LocalizedString(lang[str]);
        }
      }
    }
  }

  /**
   * Extended string class used for localization.
   */
  class LocalizedString extends String {
    /**
     * Returns formatted LocalizedString.
     * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
     *
     * E.g.:
     * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
     * A and B and A
     *
     * @param  {...any} args List of arguments for placeholders.
     */
    format() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const sub = args.reduce((string, arg, index) => string.split("{".concat(index, "}")).join(arg), this);
      return new LocalizedString(sub);
    }
  }
  var Locale$1 = new Locale();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class VersionLabel extends Lightning$1.Component {
    static _template() {
      return {
        rect: true,
        color: 0xbb0078ac,
        h: 40,
        w: 100,
        x: w => w - 50,
        y: h => h - 50,
        mount: 1,
        Text: {
          w: w => w,
          h: h => h,
          y: 5,
          x: 20,
          text: {
            fontSize: 22,
            lineHeight: 26
          }
        }
      };
    }
    _firstActive() {
      this.tag('Text').text = "APP - v".concat(this.version, "\nSDK - v").concat(this.sdkVersion);
      this.tag('Text').loadTexture();
      this.w = this.tag('Text').renderWidth + 40;
      this.h = this.tag('Text').renderHeight + 5;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class FpsIndicator extends Lightning$1.Component {
    static _template() {
      return {
        rect: true,
        color: 0xffffffff,
        texture: Lightning$1.Tools.getRoundRect(80, 80, 40),
        h: 80,
        w: 80,
        x: 100,
        y: 100,
        mount: 1,
        Background: {
          x: 3,
          y: 3,
          texture: Lightning$1.Tools.getRoundRect(72, 72, 36),
          color: 0xff008000
        },
        Counter: {
          w: w => w,
          h: h => h,
          y: 10,
          text: {
            fontSize: 32,
            textAlign: 'center'
          }
        },
        Text: {
          w: w => w,
          h: h => h,
          y: 48,
          text: {
            fontSize: 15,
            textAlign: 'center',
            text: 'FPS'
          }
        }
      };
    }
    _setup() {
      this.config = {
        ...{
          log: false,
          interval: 500,
          threshold: 1
        },
        ...Settings$1.get('platform', 'showFps')
      };
      this.fps = 0;
      this.lastFps = this.fps - this.config.threshold;
      const fpsCalculator = () => {
        this.fps = ~~(1 / this.stage.dt);
      };
      this.stage.on('frameStart', fpsCalculator);
      this.stage.off('framestart', fpsCalculator);
      this.interval = setInterval(this.showFps.bind(this), this.config.interval);
    }
    _firstActive() {
      this.showFps();
    }
    _detach() {
      clearInterval(this.interval);
    }
    showFps() {
      if (Math.abs(this.lastFps - this.fps) <= this.config.threshold) return;
      this.lastFps = this.fps;
      // green
      let bgColor = 0xff008000;
      // orange
      if (this.fps <= 40 && this.fps > 20) bgColor = 0xffffa500;
      // red
      else if (this.fps <= 20) bgColor = 0xffff0000;
      this.tag('Background').setSmooth('color', bgColor);
      this.tag('Counter').text = "".concat(this.fps);
      this.config.log && Log$1.info('FPS', this.fps);
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var fetchJson = (file => {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          // file protocol returns 0
          // http(s) protocol returns 200
          if (xhr.status === 0 || xhr.status === 200) resolve(JSON.parse(xhr.responseText));else reject(xhr.statusText);
        }
      };
      xhr.open('GET', file);
      xhr.send(null);
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let basePath;
  let proxyUrl;
  const initUtils = config => {
    basePath = ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || '/'));
    if (config.proxyUrl) {
      proxyUrl = ensureUrlWithProtocol(config.proxyUrl);
    }
  };
  var Utils = {
    asset(relPath) {
      return basePath + relPath;
    },
    proxyUrl(url) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return proxyUrl ? proxyUrl + '?' + makeQueryString(url, options) : url;
    },
    makeQueryString() {
      return makeQueryString(...arguments);
    },
    // since imageworkers don't work without protocol
    ensureUrlWithProtocol() {
      return ensureUrlWithProtocol(...arguments);
    }
  };
  const ensureUrlWithProtocol = url => {
    if (/^\/[^/]/i.test(url) && /^(?:file:)/i.test(window.location.protocol)) {
      return window.location.protocol + '//' + url;
    }
    if (/^\/\//.test(url)) {
      return window.location.protocol + url;
    }
    if (!/^(?:https?:)/i.test(url)) {
      return window.location.origin + url;
    }
    return url;
  };
  const makeFullStaticPath = function () {
    let pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    let path = arguments.length > 1 ? arguments[1] : undefined;
    // ensure path has traling slash
    path = path.charAt(path.length - 1) !== '/' ? path + '/' : path;

    // if path is URL, we assume it's already the full static path, so we just return it
    if (/^(?:https?:)?(?:\/\/)/.test(path)) {
      return path;
    }
    if (path.charAt(0) === '/') {
      return path;
    } else {
      // cleanup the pathname (i.e. remove possible index.html)
      pathname = cleanUpPathName(pathname);

      // remove possible leading dot from path
      path = path.charAt(0) === '.' ? path.substr(1) : path;
      // ensure path has leading slash
      path = path.charAt(0) !== '/' ? '/' + path : path;
      return pathname + path;
    }
  };
  const cleanUpPathName = pathname => {
    if (pathname.slice(-1) === '/') return pathname.slice(0, -1);
    const parts = pathname.split('/');
    if (parts[parts.length - 1].indexOf('.') > -1) parts.pop();
    return parts.join('/');
  };
  const makeQueryString = function (url) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'url';
    // add operator as an option
    options.operator = 'metrological'; // Todo: make this configurable (via url?)
    // add type (= url or qr) as an option, with url as the value
    options[type] = url;
    return Object.keys(options).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent('' + options[key]);
    }).join('&');
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let meta = {};
  let translations = {};
  let language = null;
  const initLanguage = function (file) {
    let language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise((resolve, reject) => {
      fetchJson(file).then(json => {
        setTranslations(json);
        // set language (directly or in a promise)
        typeof language === 'object' && 'then' in language && typeof language.then === 'function' ? language.then(lang => setLanguage(lang).then(resolve).catch(reject)).catch(e => {
          Log$1.error(e);
          reject(e);
        }) : setLanguage(language).then(resolve).catch(reject);
      }).catch(() => {
        const error = 'Language file ' + file + ' not found';
        Log$1.error(error);
        reject(error);
      });
    });
  };
  const setTranslations = obj => {
    if ('meta' in obj) {
      meta = {
        ...obj.meta
      };
      delete obj.meta;
    }
    translations = obj;
  };
  const setLanguage = lng => {
    language = null;
    return new Promise((resolve, reject) => {
      if (lng in translations) {
        language = lng;
      } else {
        if ('map' in meta && lng in meta.map && meta.map[lng] in translations) {
          language = meta.map[lng];
        } else if ('default' in meta && meta.default in translations) {
          const error = 'Translations for Language ' + language + ' not found. Using default language ' + meta.default;
          Log$1.warn(error);
          language = meta.default;
        } else {
          const error = 'Translations for Language ' + language + ' not found.';
          Log$1.error(error);
          reject(error);
        }
      }
      if (language) {
        Log$1.info('Setting language to', language);
        const translationsObj = translations[language];
        if (typeof translationsObj === 'object') {
          resolve();
        } else if (typeof translationsObj === 'string') {
          const url = Utils.asset(translationsObj);
          fetchJson(url).then(json => {
            // save the translations for this language (to prevent loading twice)
            translations[language] = json;
            resolve();
          }).catch(e => {
            const error = 'Error while fetching ' + url;
            Log$1.error(error, e);
            reject(error);
          });
        }
      }
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const registry = {
    eventListeners: [],
    timeouts: [],
    intervals: [],
    targets: []
  };
  var Registry = {
    // Timeouts
    setTimeout(cb, timeout) {
      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }
      const timeoutId = setTimeout(() => {
        registry.timeouts = registry.timeouts.filter(id => id !== timeoutId);
        cb.apply(null, params);
      }, timeout, params);
      Log$1.info('Set Timeout', 'ID: ' + timeoutId);
      registry.timeouts.push(timeoutId);
      return timeoutId;
    },
    clearTimeout(timeoutId) {
      if (registry.timeouts.indexOf(timeoutId) > -1) {
        registry.timeouts = registry.timeouts.filter(id => id !== timeoutId);
        Log$1.info('Clear Timeout', 'ID: ' + timeoutId);
        clearTimeout(timeoutId);
      } else {
        Log$1.error('Clear Timeout', 'ID ' + timeoutId + ' not found');
      }
    },
    clearTimeouts() {
      registry.timeouts.forEach(timeoutId => {
        this.clearTimeout(timeoutId);
      });
    },
    // Intervals
    setInterval(cb, interval) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }
      const intervalId = setInterval(() => {
        registry.intervals.filter(id => id !== intervalId);
        cb.apply(null, params);
      }, interval, params);
      Log$1.info('Set Interval', 'ID: ' + intervalId);
      registry.intervals.push(intervalId);
      return intervalId;
    },
    clearInterval(intervalId) {
      if (registry.intervals.indexOf(intervalId) > -1) {
        registry.intervals = registry.intervals.filter(id => id !== intervalId);
        Log$1.info('Clear Interval', 'ID: ' + intervalId);
        clearInterval(intervalId);
      } else {
        Log$1.error('Clear Interval', 'ID ' + intervalId + ' not found');
      }
    },
    clearIntervals() {
      registry.intervals.forEach(intervalId => {
        this.clearInterval(intervalId);
      });
    },
    // Event listeners
    addEventListener(target, event, handler) {
      target.addEventListener(event, handler);
      const targetIndex = registry.targets.indexOf(target) > -1 ? registry.targets.indexOf(target) : registry.targets.push(target) - 1;
      registry.eventListeners[targetIndex] = registry.eventListeners[targetIndex] || {};
      registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event] || [];
      registry.eventListeners[targetIndex][event].push(handler);
      Log$1.info('Add eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
    },
    removeEventListener(target, event, handler) {
      const targetIndex = registry.targets.indexOf(target);
      if (targetIndex > -1 && registry.eventListeners[targetIndex] && registry.eventListeners[targetIndex][event] && registry.eventListeners[targetIndex][event].indexOf(handler) > -1) {
        registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event].filter(fn => fn !== handler);
        Log$1.info('Remove eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
        target.removeEventListener(event, handler);
      } else {
        Log$1.error('Remove eventListener', 'Not found', 'Target', target, 'Event: ' + event, 'Handler', handler.toString());
      }
    },
    // if `event` is omitted, removes all registered event listeners for target
    // if `target` is also omitted, removes all registered event listeners
    removeEventListeners(target, event) {
      if (target && event) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          registry.eventListeners[targetIndex][event].forEach(handler => {
            this.removeEventListener(target, event, handler);
          });
        }
      } else if (target) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          Object.keys(registry.eventListeners[targetIndex]).forEach(_event => {
            this.removeEventListeners(target, _event);
          });
        }
      } else {
        Object.keys(registry.eventListeners).forEach(targetIndex => {
          this.removeEventListeners(registry.targets[targetIndex]);
        });
      }
    },
    // Clear everything (to be called upon app close for proper cleanup)
    clear() {
      this.clearTimeouts();
      this.clearIntervals();
      this.removeEventListeners();
      registry.eventListeners = [];
      registry.timeouts = [];
      registry.intervals = [];
      registry.targets = [];
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const isObject$1 = v => {
    return typeof v === 'object' && v !== null;
  };
  const isString$1 = v => {
    return typeof v === 'string';
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#feff00',
    cyan: '#00feff',
    magenta: '#ff00ff'
  };
  const normalizedColors = {
    //store for normalized colors
  };
  const addColors = (colorsToAdd, value) => {
    if (isObject$1(colorsToAdd)) {
      // clean up normalizedColors if they exist in the to be added colors
      Object.keys(colorsToAdd).forEach(color => cleanUpNormalizedColors(color));
      colors = Object.assign({}, colors, colorsToAdd);
    } else if (isString$1(colorsToAdd) && value) {
      cleanUpNormalizedColors(colorsToAdd);
      colors[colorsToAdd] = value;
    }
  };
  const cleanUpNormalizedColors = color => {
    for (let c in normalizedColors) {
      if (c.indexOf(color) > -1) {
        delete normalizedColors[c];
      }
    }
  };
  const initColors = file => {
    return new Promise((resolve, reject) => {
      if (typeof file === 'object') {
        addColors(file);
        return resolve();
      }
      fetchJson(file).then(json => {
        addColors(json);
        return resolve();
      }).catch(() => {
        const error = 'Colors file ' + file + ' not found';
        Log$1.error(error);
        return reject(error);
      });
    });
  };

  var name = "@lightningjs/sdk";
  var version = "5.3.1";
  var license = "Apache-2.0";
  var types = "index.d.ts";
  var scripts = {
  	postinstall: "node ./scripts/postinstall.js",
  	lint: "eslint '**/*.js'",
  	release: "npm publish --access public",
  	typedoc: "typedoc --tsconfig tsconfig.typedoc.json",
  	tsd: "tsd"
  };
  var husky = {
  	hooks: {
  		"pre-commit": "lint-staged"
  	}
  };
  var dependencies = {
  	"@babel/polyfill": "^7.11.5",
  	"@lightningjs/core": "^2.7.0",
  	"@metrological/sdk": "^1.0.0",
  	"@michieljs/execute-as-promise": "^1.0.0",
  	deepmerge: "^4.2.2",
  	localcookies: "^2.0.0",
  	shelljs: "^0.8.5",
  	"url-polyfill": "^1.1.10",
  	"whatwg-fetch": "^3.0.0"
  };
  var devDependencies = {
  	"@babel/core": "^7.11.6",
  	"@babel/plugin-transform-parameters": "^7.10.5 ",
  	"@babel/plugin-transform-spread": "^7.11.0",
  	"@babel/preset-env": "^7.11.5",
  	"babel-eslint": "^10.1.0",
  	eslint: "^7.10.0",
  	"eslint-config-prettier": "^6.12.0",
  	"eslint-plugin-prettier": "^3.1.4",
  	husky: "^4.3.0",
  	"lint-staged": "^10.4.0",
  	prettier: "^1.19.1",
  	rollup: "^1.32.1",
  	"rollup-plugin-babel": "^4.4.0",
  	tsd: "^0.22.0",
  	typedoc: "^0.23.9"
  };
  var repository = {
  	type: "git",
  	url: "git@github.com:rdkcentral/Lightning-SDK.git"
  };
  var bugs = {
  	url: "https://github.com/rdkcentral/Lightning-SDK/issues"
  };
  var packageInfo = {
  	name: name,
  	version: version,
  	license: license,
  	types: types,
  	scripts: scripts,
  	"lint-staged": {
  	"*.js": [
  		"eslint --fix"
  	],
  	"src/startApp.js": [
  		"rollup -c ./rollup.config.js"
  	]
  },
  	husky: husky,
  	dependencies: dependencies,
  	devDependencies: devDependencies,
  	repository: repository,
  	bugs: bugs
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let AppInstance;
  const defaultOptions = {
    stage: {
      w: 1920,
      h: 1080,
      precision: 1,
      clearColor: 0x00000000,
      canvas2d: false
    },
    debug: false,
    defaultFontFace: 'RobotoRegular',
    keys: {
      8: 'Back',
      13: 'Enter',
      27: 'Menu',
      37: 'Left',
      38: 'Up',
      39: 'Right',
      40: 'Down',
      174: 'ChannelDown',
      175: 'ChannelUp',
      178: 'Stop',
      250: 'PlayPause',
      191: 'Search',
      // Use "/" for keyboard
      409: 'Search'
    }
  };
  const customFontFaces = [];
  const fontLoader = (fonts, store) => new Promise((resolve, reject) => {
    fonts.map(_ref => {
      let {
        family,
        url,
        urls,
        descriptors
      } = _ref;
      return () => {
        const src = urls ? urls.map(url => {
          return 'url(' + url + ')';
        }) : 'url(' + url + ')';
        const fontFace = new FontFace(family, src, descriptors || {});
        store.push(fontFace);
        Log$1.info('Loading font', family);
        document.fonts.add(fontFace);
        return fontFace.load();
      };
    }).reduce((promise, method) => {
      return promise.then(() => method());
    }, Promise.resolve(null)).then(resolve).catch(reject);
  });
  function Application (App, appData, platformSettings) {
    const {
      width,
      height
    } = platformSettings;
    if (width && height) {
      defaultOptions.stage['w'] = width;
      defaultOptions.stage['h'] = height;
      defaultOptions.stage['precision'] = width / 1920;
    }

    // support for 720p browser
    if (!width && !height && window.innerHeight === 720) {
      defaultOptions.stage['w'] = 1280;
      defaultOptions.stage['h'] = 720;
      defaultOptions.stage['precision'] = 1280 / 1920;
    }
    return class Application extends Lightning$1.Application {
      constructor(options) {
        const config = cjs(defaultOptions, options);
        // Deepmerge breaks HTMLCanvasElement, so restore the passed in canvas.
        if (options.stage.canvas) {
          config.stage.canvas = options.stage.canvas;
        }
        super(config);
        this.config = config;
      }
      static _template() {
        return {
          w: 1920,
          h: 1080
        };
      }
      colorshift() {
        let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Accessibility.colorshift(this, type, config);
      }
      get keymapping() {
        return this.stage.application.config.keys;
      }

      /**
       * This function overrides the default keymap with the latest keymap.
       * @param customKeyMap
       * @param keepDuplicates
       */
      overrideKeyMap(customKeyMap) {
        let keepDuplicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        const baseKeyMap = this.stage.application.config.keys;
        Object.keys(customKeyMap).reduce((keymapping, key) => {
          // prevent duplicate values to exist in final keymapping (i.e. 2 keys triggering 'Back')
          if (!keepDuplicates) {
            Object.keys(baseKeyMap).forEach(baseKey => {
              if (baseKey != key && baseKeyMap[baseKey] == customKeyMap[key]) {
                delete keymapping[baseKey];
              }
            });
          }
          keymapping[key] = customKeyMap[key];
          return keymapping;
        }, baseKeyMap);
        return baseKeyMap;
      }
      _setup() {
        Promise.all([this.loadFonts(App.config && App.config.fonts || App.getFonts && App.getFonts() || []),
        // to be deprecated
        Locale$1.load(App.config && App.config.locale || App.getLocale && App.getLocale()), App.language && this.loadLanguage(App.language()), App.colors && this.loadColors(App.colors())]).then(() => {
          Metrics$1.app.loaded();
          this.w = this.config.stage.w / this.config.stage.precision;
          this.h = this.config.stage.h / this.config.stage.precision;
          AppInstance = this.stage.c({
            ref: 'App',
            type: App,
            zIndex: 1,
            forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
          });
          this.childList.a(AppInstance);
          this._refocus();
          Log$1.info('App version', this.config.version);
          Log$1.info('SDK version', packageInfo.version);
          if (platformSettings.showVersion) {
            this.childList.a({
              ref: 'VersionLabel',
              type: VersionLabel,
              version: this.config.version,
              sdkVersion: packageInfo.version,
              zIndex: 1
            });
          }
          if (platformSettings.showFps) {
            this.childList.a({
              ref: 'FpsCounter',
              type: FpsIndicator,
              zIndex: 1
            });
          }
          super._setup();
        }).catch(console.error);
      }
      _handleBack() {
        this.closeApp();
      }
      _handleExit() {
        this.closeApp();
      }
      closeApp() {
        Log$1.info('Signaling App Close');
        if (platformSettings.onClose && typeof platformSettings.onClose === 'function') {
          platformSettings.onClose(...arguments);
        } else {
          this.close();
        }
      }
      close() {
        Log$1.info('Closing App');
        Settings$1.clearSubscribers();
        Registry.clear();
        this.childList.remove(this.tag('App'));
        this.cleanupFonts();
        // force texture garbage collect
        this.stage.gc();
        this.destroy();
      }
      loadFonts(fonts) {
        return platformSettings.fontLoader && typeof platformSettings.fontLoader === 'function' ? platformSettings.fontLoader(fonts, customFontFaces) : fontLoader(fonts, customFontFaces);
      }
      cleanupFonts() {
        if ('delete' in document.fonts) {
          customFontFaces.forEach(fontFace => {
            Log$1.info('Removing font', fontFace.family);
            document.fonts.delete(fontFace);
          });
        } else {
          Log$1.info('No support for removing manually-added fonts');
        }
      }
      loadLanguage(config) {
        let file = Utils.asset('translations.json');
        let language = config;
        if (typeof language === 'object') {
          language = config.language || null;
          file = config.file || file;
        }
        return initLanguage(file, language);
      }
      loadColors(config) {
        let file = Utils.asset('colors.json');
        if (config && (typeof config === 'string' || typeof config === 'object')) {
          file = config;
        }
        return initColors(file);
      }
      set focus(v) {
        this._focussed = v;
        this._refocus();
      }
      _getFocused() {
        return this._focussed || this.tag('App');
      }
    };
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ScaledImageTexture extends Lightning$1.textures.ImageTexture {
    constructor(stage) {
      super(stage);
      this._scalingOptions = undefined;
    }
    set options(options) {
      this.resizeMode = this._scalingOptions = options;
    }
    _getLookupId() {
      return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
    }
    getNonDefaults() {
      const obj = super.getNonDefaults();
      if (this._src) {
        obj.src = this._src;
      }
      return obj;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const events = ['timeupdate', 'error', 'ended', 'loadeddata', 'canplay', 'play', 'playing', 'pause', 'loadstart', 'seeking', 'seeked', 'encrypted'];
  let mediaUrl = url => url;
  const initMediaPlayer = config => {
    if (config.mediaUrl) {
      mediaUrl = config.mediaUrl;
    }
  };
  class Mediaplayer extends Lightning$1.Component {
    _construct() {
      this._skipRenderToTexture = false;
      this._metrics = null;
      this._textureMode = Settings$1.get('platform', 'textureMode') || false;
      Log$1.info('Texture mode: ' + this._textureMode);
      console.warn(["The 'MediaPlayer'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'VideoPlayer'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/videoplayer'].join('\n\n'));
    }
    static _template() {
      return {
        Video: {
          VideoWrap: {
            VideoTexture: {
              visible: false,
              pivot: 0.5,
              texture: {
                type: Lightning$1.textures.StaticTexture,
                options: {}
              }
            }
          }
        }
      };
    }
    set skipRenderToTexture(v) {
      this._skipRenderToTexture = v;
    }
    get textureMode() {
      return this._textureMode;
    }
    get videoView() {
      return this.tag('Video');
    }
    _init() {
      //re-use videotag if already there
      const videoEls = document.getElementsByTagName('video');
      if (videoEls && videoEls.length > 0) this.videoEl = videoEls[0];else {
        this.videoEl = document.createElement('video');
        this.videoEl.setAttribute('id', 'video-player');
        this.videoEl.style.position = 'absolute';
        this.videoEl.style.zIndex = '1';
        this.videoEl.style.display = 'none';
        this.videoEl.setAttribute('width', '100%');
        this.videoEl.setAttribute('height', '100%');
        this.videoEl.style.visibility = this.textureMode ? 'hidden' : 'visible';
        document.body.appendChild(this.videoEl);
      }
      if (this.textureMode && !this._skipRenderToTexture) {
        this._createVideoTexture();
      }
      this.eventHandlers = [];
    }
    _registerListeners() {
      events.forEach(event => {
        const handler = e => {
          if (this._metrics && this._metrics[event] && typeof this._metrics[event] === 'function') {
            this._metrics[event]({
              currentTime: this.videoEl.currentTime
            });
          }
          this.fire(event, {
            videoElement: this.videoEl,
            event: e
          });
        };
        this.eventHandlers.push(handler);
        this.videoEl.addEventListener(event, handler);
      });
    }
    _deregisterListeners() {
      Log$1.info('Deregistering event listeners MediaPlayer');
      events.forEach((event, index) => {
        this.videoEl.removeEventListener(event, this.eventHandlers[index]);
      });
      this.eventHandlers = [];
    }
    _attach() {
      this._registerListeners();
    }
    _detach() {
      this._deregisterListeners();
      this.close();
    }
    _createVideoTexture() {
      const stage = this.stage;
      const gl = stage.gl;
      const glTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, glTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      this.videoTexture.options = {
        source: glTexture,
        w: this.videoEl.width,
        h: this.videoEl.height
      };
    }
    _startUpdatingVideoTexture() {
      if (this.textureMode && !this._skipRenderToTexture) {
        const stage = this.stage;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage.gl;
              const currentTime = new Date().getTime();

              // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              const frameCount = this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoTextureView.visible = true;
                  this.videoTexture.options.w = this.videoEl.videoWidth;
                  this.videoTexture.options.h = this.videoEl.videoHeight;
                  const expectedAspectRatio = this.videoTextureView.w / this.videoTextureView.h;
                  const realAspectRatio = this.videoEl.videoWidth / this.videoEl.videoHeight;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoTextureView.scaleY = 1;
                  } else {
                    this.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoTextureView.scaleX = 1;
                  }
                } catch (e) {
                  Log$1.error('texImage2d video', e);
                  this._stopUpdatingVideoTexture();
                  this.videoTextureView.visible = false;
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
    }
    _stopUpdatingVideoTexture() {
      if (this.textureMode) {
        const stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoTextureView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
    }
    updateSettings() {
      let settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // The Component that 'consumes' the media player.
      this._consumer = settings.consumer;
      if (this._consumer && this._consumer.getMediaplayerSettings) {
        // Allow consumer to add settings.
        settings = Object.assign(settings, this._consumer.getMediaplayerSettings());
      }
      if (!Lightning$1.Utils.equalValues(this._stream, settings.stream)) {
        if (settings.stream && settings.stream.keySystem) {
          navigator.requestMediaKeySystemAccess(settings.stream.keySystem.id, settings.stream.keySystem.config).then(keySystemAccess => {
            return keySystemAccess.createMediaKeys();
          }).then(createdMediaKeys => {
            return this.videoEl.setMediaKeys(createdMediaKeys);
          }).then(() => {
            if (settings.stream && settings.stream.src) this.open(settings.stream.src);
          }).catch(() => {
            console.error('Failed to set up MediaKeys');
          });
        } else if (settings.stream && settings.stream.src) {
          // This is here to be backwards compatible, will be removed
          // in future sdk release
          if (Settings$1.get('app', 'hls')) {
            if (!window.Hls) {
              window.Hls = class Hls {
                static isSupported() {
                  console.warn('hls-light not included');
                  return false;
                }
              };
            }
            if (window.Hls.isSupported()) {
              if (!this._hls) this._hls = new window.Hls({
                liveDurationInfinity: true
              });
              this._hls.loadSource(settings.stream.src);
              this._hls.attachMedia(this.videoEl);
              this.videoEl.style.display = 'block';
            }
          } else {
            this.open(settings.stream.src);
          }
        } else {
          this.close();
        }
        this._stream = settings.stream;
      }
      this._setHide(settings.hide);
      this._setVideoArea(settings.videoPos);
    }
    _setHide(hide) {
      if (this.textureMode) {
        this.tag('Video').setSmooth('alpha', hide ? 0 : 1);
      } else {
        this.videoEl.style.visibility = hide ? 'hidden' : 'visible';
      }
    }
    open(url) {
      let settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        hide: false,
        videoPosition: null
      };
      // prep the media url to play depending on platform (mediaPlayerplugin)
      url = mediaUrl(url);
      this._metrics = Metrics$1.media(url);
      Log$1.info('Playing stream', url);
      if (this.application.noVideo) {
        Log$1.info('noVideo option set, so ignoring: ' + url);
        return;
      }
      // close the video when opening same url as current (effectively reloading)
      if (this.videoEl.getAttribute('src') === url) {
        this.close();
      }
      this.videoEl.setAttribute('src', url);

      // force hide, then force show (in next tick!)
      // (fixes comcast playback rollover issue)
      this.videoEl.style.visibility = 'hidden';
      this.videoEl.style.display = 'none';
      setTimeout(() => {
        this.videoEl.style.display = 'block';
        this.videoEl.style.visibility = 'visible';
      });
      this._setHide(settings.hide);
      this._setVideoArea(settings.videoPosition || [0, 0, 1920, 1080]);
    }
    close() {
      // We need to pause first in order to stop sound.
      this.videoEl.pause();
      this.videoEl.removeAttribute('src');

      // force load to reset everything without errors
      this.videoEl.load();
      this._clearSrc();
      this.videoEl.style.display = 'none';
    }
    playPause() {
      if (this.isPlaying()) {
        this.doPause();
      } else {
        this.doPlay();
      }
    }
    get muted() {
      return this.videoEl.muted;
    }
    set muted(v) {
      this.videoEl.muted = v;
    }
    get loop() {
      return this.videoEl.loop;
    }
    set loop(v) {
      this.videoEl.loop = v;
    }
    isPlaying() {
      return this._getState() === 'Playing';
    }
    doPlay() {
      this.videoEl.play();
    }
    doPause() {
      this.videoEl.pause();
    }
    reload() {
      var url = this.videoEl.getAttribute('src');
      this.close();
      this.videoEl.src = url;
    }
    getPosition() {
      return Promise.resolve(this.videoEl.currentTime);
    }
    setPosition(pos) {
      this.videoEl.currentTime = pos;
    }
    getDuration() {
      return Promise.resolve(this.videoEl.duration);
    }
    seek(time) {
      let absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (absolute) {
        this.videoEl.currentTime = time;
      } else {
        this.videoEl.currentTime += time;
      }
    }
    get videoTextureView() {
      return this.tag('Video').tag('VideoTexture');
    }
    get videoTexture() {
      return this.videoTextureView.texture;
    }
    _setVideoArea(videoPos) {
      if (Lightning$1.Utils.equalValues(this._videoPos, videoPos)) {
        return;
      }
      this._videoPos = videoPos;
      if (this.textureMode) {
        this.videoTextureView.patch({
          smooth: {
            x: videoPos[0],
            y: videoPos[1],
            w: videoPos[2] - videoPos[0],
            h: videoPos[3] - videoPos[1]
          }
        });
      } else {
        const precision = this.stage.getRenderPrecision();
        this.videoEl.style.left = Math.round(videoPos[0] * precision) + 'px';
        this.videoEl.style.top = Math.round(videoPos[1] * precision) + 'px';
        this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision) + 'px';
        this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision) + 'px';
      }
    }
    _fireConsumer(event, args) {
      if (this._consumer) {
        this._consumer.fire(event, args);
      }
    }
    _equalInitData(buf1, buf2) {
      if (!buf1 || !buf2) return false;
      if (buf1.byteLength != buf2.byteLength) return false;
      const dv1 = new Int8Array(buf1);
      const dv2 = new Int8Array(buf2);
      for (let i = 0; i != buf1.byteLength; i++) if (dv1[i] != dv2[i]) return false;
      return true;
    }
    error(args) {
      this._fireConsumer('$mediaplayerError', args);
      this._setState('');
      return '';
    }
    loadeddata(args) {
      this._fireConsumer('$mediaplayerLoadedData', args);
    }
    play(args) {
      this._fireConsumer('$mediaplayerPlay', args);
    }
    playing(args) {
      this._fireConsumer('$mediaplayerPlaying', args);
      this._setState('Playing');
    }
    canplay(args) {
      this.videoEl.play();
      this._fireConsumer('$mediaplayerStart', args);
    }
    loadstart(args) {
      this._fireConsumer('$mediaplayerLoad', args);
    }
    seeked() {
      this._fireConsumer('$mediaplayerSeeked', {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    seeking() {
      this._fireConsumer('$mediaplayerSeeking', {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    durationchange(args) {
      this._fireConsumer('$mediaplayerDurationChange', args);
    }
    encrypted(args) {
      const video = args.videoElement;
      const event = args.event;
      // FIXME: Double encrypted events need to be properly filtered by Gstreamer
      if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
        this._previousInitData = event.initData;
        this._fireConsumer('$mediaplayerEncrypted', args);
      }
    }
    static _states() {
      return [class Playing extends this {
        $enter() {
          this._startUpdatingVideoTexture();
        }
        $exit() {
          this._stopUpdatingVideoTexture();
        }
        timeupdate() {
          this._fireConsumer('$mediaplayerProgress', {
            currentTime: this.videoEl.currentTime,
            duration: this.videoEl.duration || 1
          });
        }
        ended(args) {
          this._fireConsumer('$mediaplayerEnded', args);
          this._setState('');
        }
        pause(args) {
          this._fireConsumer('$mediaplayerPause', args);
          this._setState('Playing.Paused');
        }
        _clearSrc() {
          this._fireConsumer('$mediaplayerStop', {});
          this._setState('');
        }
        static _states() {
          return [class Paused extends this {}];
        }
      }];
    }
  }

  class localCookie {
    constructor(e) {
      return e = e || {}, this.forceCookies = e.forceCookies || !1, !0 === this._checkIfLocalStorageWorks() && !0 !== e.forceCookies ? {
        getItem: this._getItemLocalStorage,
        setItem: this._setItemLocalStorage,
        removeItem: this._removeItemLocalStorage,
        clear: this._clearLocalStorage,
        keys: this._getLocalStorageKeys
      } : {
        getItem: this._getItemCookie,
        setItem: this._setItemCookie,
        removeItem: this._removeItemCookie,
        clear: this._clearCookies,
        keys: this._getCookieKeys
      };
    }
    _checkIfLocalStorageWorks() {
      if ("undefined" == typeof localStorage) return !1;
      try {
        return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), !0);
      } catch (e) {
        return !1;
      }
    }
    _getItemLocalStorage(e) {
      return window.localStorage.getItem(e);
    }
    _setItemLocalStorage(e, t) {
      return window.localStorage.setItem(e, t);
    }
    _removeItemLocalStorage(e) {
      return window.localStorage.removeItem(e);
    }
    _clearLocalStorage() {
      return window.localStorage.clear();
    }
    _getLocalStorageKeys() {
      return Object.keys(window.localStorage);
    }
    _getItemCookie(e) {
      var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function (e) {
        return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
      }(e) + "=([^;]*)"));
      return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
    }
    _setItemCookie(e, t) {
      var o = new Date(),
        r = new Date(o.getTime() + 15768e7);
      document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r.toUTCString(), ";");
    }
    _removeItemCookie(e) {
      document.cookie = "".concat(e, "=;Max-Age=-99999999;");
    }
    _clearCookies() {
      document.cookie.split(";").forEach(e => {
        document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
      });
    }
    _getCookieKeys() {
      return document.cookie.split(";").map(e => e.split("=")[0]);
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initStorage = () => {
    Settings$1.get('platform', 'id');
    // todo: pass options (for example to force the use of cookies)
    new localCookie();
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;
  const isWildcard = /^[!*$]$/;
  const hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
  const isNamedGroup = /^\/:/;

  /**
   * Test if a route is part regular expressed
   * and replace it for a simple character
   * @param route
   * @returns {*}
   */
  const stripRegex = function (route) {
    let char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'R';
    // if route is part regular expressed we replace
    // the regular expression for a character to
    // simplify floor calculation and backtracking
    if (hasRegex.test(route)) {
      route = route.replace(hasRegex, char);
    }
    return route;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Create a local request register
   * @param flags
   * @returns {Map<any, any>}
   */
  const createRegister = flags => {
    const reg = new Map()
    // store user defined and router
    // defined flags in register
    ;
    [...Object.keys(flags), ...Object.getOwnPropertySymbols(flags)].forEach(key => {
      reg.set(key, flags[key]);
    });
    return reg;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Request {
    constructor() {
      let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      let navArgs = arguments.length > 1 ? arguments[1] : undefined;
      let storeCaller = arguments.length > 2 ? arguments[2] : undefined;
      /**
       * Hash we navigate to
       * @type {string}
       * @private
       */
      this._hash = hash;

      /**
       * Do we store previous hash in history
       * @type {boolean}
       * @private
       */
      this._storeCaller = storeCaller;

      /**
       * Request and navigate data
       * @type {Map}
       * @private
       */
      this._register = new Map();

      /**
       * Flag if the instance is created due to
       * this request
       * @type {boolean}
       * @private
       */
      this._isCreated = false;

      /**
       * Flag if the instance is shared between
       * previous and current request
       * @type {boolean}
       * @private
       */
      this._isSharedInstance = false;

      /**
       * Flag if the request has been cancelled
       * @type {boolean}
       * @private
       */
      this._cancelled = false;

      /**
       * if instance is shared between requests we copy state object
       * from instance before the new request overrides state
       * @type {null}
       * @private
       */
      this._copiedHistoryState = null;

      // if there are arguments attached to navigate()
      // we store them in new request
      if (isObject(navArgs)) {
        this._register = createRegister(navArgs);
      } else if (isBoolean(navArgs)) {
        // if second navigate() argument is explicitly
        // set to false we prevent the calling page
        // from ending up in history
        this._storeCaller = navArgs;
      }
      // @todo: remove because we can simply check
      // ._storeCaller property
      this._register.set(symbols.store, this._storeCaller);
    }
    cancel() {
      Log$1.debug('[router]:', "cancelled ".concat(this._hash));
      this._cancelled = true;
    }
    get url() {
      return this._hash;
    }
    get register() {
      return this._register;
    }
    get hash() {
      return this._hash;
    }
    set hash(args) {
      this._hash = args;
    }
    get route() {
      return this._route;
    }
    set route(args) {
      this._route = args;
    }
    get provider() {
      return this._provider;
    }
    set provider(args) {
      this._provider = args;
    }
    get providerType() {
      return this._providerType;
    }
    set providerType(args) {
      this._providerType = args;
    }
    set page(args) {
      this._page = args;
    }
    get page() {
      return this._page;
    }
    set isCreated(args) {
      this._isCreated = args;
    }
    get isCreated() {
      return this._isCreated;
    }
    get isSharedInstance() {
      return this._isSharedInstance;
    }
    set isSharedInstance(args) {
      this._isSharedInstance = args;
    }
    get isCancelled() {
      return this._cancelled;
    }
    set copiedHistoryState(v) {
      this._copiedHistoryState = v;
    }
    get copiedHistoryState() {
      return this._copiedHistoryState;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Route {
    constructor() {
      let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // keep backwards compatible
      let type = ['on', 'before', 'after'].reduce((acc, type) => {
        return isFunction(config[type]) ? type : acc;
      }, undefined);
      this._cfg = config;
      if (type) {
        this._provider = {
          type,
          request: config[type]
        };
      }
    }
    get path() {
      return this._cfg.path;
    }
    get name() {
      return this._cfg.name;
    }
    get component() {
      return this._cfg.component;
    }
    get options() {
      return this._cfg.options;
    }
    get widgets() {
      return this._cfg.widgets;
    }
    get cache() {
      return this._cfg.cache;
    }
    get hook() {
      return this._cfg.hook;
    }
    get beforeNavigate() {
      return this._cfg.beforeNavigate;
    }
    get provider() {
      return this._provider;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Simple route length calculation
   * @param route {string}
   * @returns {number} - floor
   */
  const getFloor = route => {
    return stripRegex(route).split('/').length;
  };

  /**
   * return all stored routes that live on the same floor
   * @param floor
   * @returns {Array}
   */
  const getRoutesByFloor = floor => {
    const matches = [];
    // simple filter of level candidates
    for (let [route] of routes$1.entries()) {
      if (getFloor(route) === floor) {
        matches.push(route);
      }
    }
    return matches;
  };

  /**
   * return a matching route by provided hash
   * hash: home/browse/12 will match:
   * route: home/browse/:categoryId
   * @param hash {string}
   * @returns {boolean|{}} - route
   */
  const getRouteByHash = hash => {
    // @todo: clean up on handleHash
    hash = hash.replace(/^#/, '');
    const getUrlParts = /(\/?:?[^/]+)/g;
    // grab possible candidates from stored routes
    const candidates = getRoutesByFloor(getFloor(hash));
    // break hash down in chunks
    const hashParts = hash.match(getUrlParts) || [];

    // to simplify the route matching and prevent look around
    // in our getUrlParts regex we get the regex part from
    // route candidate and store them so that we can reference
    // them when we perform the actual regex against hash
    let regexStore = [];
    let matches = candidates.filter(route => {
      let isMatching = true;
      // replace regex in route with lookup id => @@{storeId}@@
      if (hasRegex.test(route)) {
        const regMatches = route.match(hasRegex);
        if (regMatches && regMatches.length) {
          route = regMatches.reduce((fullRoute, regex) => {
            const lookupId = regexStore.length;
            fullRoute = fullRoute.replace(regex, "@@".concat(lookupId, "@@"));
            regexStore.push(regex.substring(1, regex.length - 1));
            return fullRoute;
          }, route);
        }
      }
      const routeParts = route.match(getUrlParts) || [];
      for (let i = 0, j = routeParts.length; i < j; i++) {
        const routePart = routeParts[i];
        const hashPart = hashParts[i];

        // Since we support catch-all and regex driven name groups
        // we first test for regex lookup id and see if the regex
        // matches the value from the hash
        if (hasLookupId.test(routePart)) {
          const routeMatches = hasLookupId.exec(routePart);
          const storeId = routeMatches[1];
          const routeRegex = regexStore[storeId];

          // split regex and modifiers so we can use both
          // to create a new RegExp
          // eslint-disable-next-line
          const regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);
          if (regMatches && regMatches.length) {
            const expression = regMatches[1];
            const modifiers = regMatches[2];
            const regex = new RegExp("^/".concat(expression, "$"), modifiers);
            if (!regex.test(hashPart)) {
              isMatching = false;
            }
          }
        } else if (isNamedGroup.test(routePart)) {
          // we kindly skip namedGroups because this is dynamic
          // we only need to the static and regex drive parts
          continue;
        } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
          isMatching = false;
        }
      }
      return isMatching;
    });
    if (matches.length) {
      if (matches.indexOf(hash) !== -1) {
        const match = matches[matches.indexOf(hash)];
        return routes$1.get(match);
      } else {
        // we give prio to static routes over dynamic
        matches = matches.sort(a => {
          return isNamedGroup.test(a) ? -1 : 1;
        });
        // would be strange if this fails
        // but still we test
        if (routeExists(matches[0])) {
          return routes$1.get(matches[0]);
        }
      }
    }
    return false;
  };
  const getValuesFromHash = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let path = arguments.length > 1 ? arguments[1] : undefined;
    // replace the regex definition from the route because
    // we already did the matching part
    path = stripRegex(path, '');
    const getUrlParts = /(\/?:?[\w%\s:.-]+)/g;
    const hashParts = hash.match(getUrlParts) || [];
    const routeParts = path.match(getUrlParts) || [];
    const getNamedGroup = /^\/:([\w-]+)\/?/;
    return routeParts.reduce((storage, value, index) => {
      const match = getNamedGroup.exec(value);
      if (match && match.length) {
        storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, '')));
      }
      return storage;
    }, new Map());
  };
  const getOption = (stack, prop) => {
    // eslint-disable-next-line
    if (stack && stack.hasOwnProperty(prop)) {
      return stack[prop];
    }
    // we explicitly return undefined since we're testing
    // for explicit test values
  };

  /**
   * create and return new Route instance
   * @param config
   */
  const createRoute = config => {
    // we need to provide a bit of additional logic
    // for the bootComponent
    if (config.path === '$') {
      let options = {
        preventStorage: true
      };
      if (isObject(config.options)) {
        options = {
          ...config.options,
          ...options
        };
      }
      config.options = options;
      // if configured add reference to bootRequest
      // as router after provider
      if (bootRequest) {
        config.after = bootRequest;
      }
    }
    return new Route(config);
  };

  /**
   * Create a new Router request object
   * @param url
   * @param args
   * @param store
   * @returns {*}
   */
  const createRequest = (url, args, store) => {
    return new Request(url, args, store);
  };
  const getHashByName = obj => {
    if (!obj.to && !obj.name) {
      return false;
    }
    const route = getRouteByName(obj.to || obj.name);
    const hasDynamicGroup = /\/:([\w-]+)\/?/;
    let hash = route;

    // if route contains dynamic group
    // we replace them with the provided params
    if (hasDynamicGroup.test(route)) {
      if (obj.params) {
        const keys = Object.keys(obj.params);
        hash = keys.reduce((acc, key) => {
          return acc.replace(":".concat(key), obj.params[key]);
        }, route);
      }
      if (obj.query) {
        return "".concat(hash).concat(objectToQueryString(obj.query));
      }
    }
    return hash;
  };
  const getRouteByName = name => {
    for (let [path, route] of routes$1.entries()) {
      if (route.name === name) {
        return path;
      }
    }
    return false;
  };
  const keepActivePageAlive = (route, request) => {
    if (isString(route)) {
      const routes = getRoutes();
      if (routes.has(route)) {
        route = routes.get(route);
      } else {
        return false;
      }
    }
    const register = request.register;
    const routeOptions = route.options;
    if (register.has('keepAlive')) {
      return register.get('keepAlive');
    } else if (routeOptions && routeOptions.keepAlive) {
      return routeOptions.keepAlive;
    }
    return false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var emit = (function (page) {
    let events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!isArray(events)) {
      events = [events];
    }
    events.forEach(e => {
      const event = "_on".concat(ucfirst(e));
      if (isFunction(page[event])) {
        page[event](params);
      }
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let activeWidget = null;
  const getReferences = () => {
    if (!widgetsHost) {
      return;
    }
    return widgetsHost.get().reduce((storage, widget) => {
      const key = widget.ref.toLowerCase();
      storage[key] = widget;
      return storage;
    }, {});
  };

  /**
   * update the visibility of the available widgets
   * for the current page / route
   * @param page
   */
  const updateWidgets = (widgets, page) => {
    // force lowercase lookup
    const configured = (widgets || []).map(ref => ref.toLowerCase());
    widgetsHost.forEach(widget => {
      widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;
      if (widget.visible) {
        emit(widget, ['activated'], page);
      }
    });
    if (app.state === 'Widgets' && activeWidget && !activeWidget.visible) {
      app._setState('');
    }
  };
  const getWidgetByName = name => {
    name = ucfirst(name);
    return widgetsHost.getByRef(name) || false;
  };

  /**
   * delegate app focus to a on-screen widget
   * @param name - {string}
   */
  const focusWidget = name => {
    const widget = getWidgetByName(name);
    if (widget) {
      setActiveWidget(widget);

      // if app is already in 'Widgets' state we can assume that
      // focus has been delegated from one widget to another so
      // we need to set the new widget reference and trigger a
      // new focus calculation of Lightning's focuspath
      if (app.state === 'Widgets') {
        app.reload(activeWidget);
      } else {
        app._setState('Widgets', [activeWidget]);
      }
    }
  };
  const restoreFocus = () => {
    activeWidget = null;
    app._setState('');
  };
  const getActiveWidget = () => {
    return activeWidget;
  };
  const setActiveWidget = instance => {
    activeWidget = instance;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const createComponent = (stage, type) => {
    return stage.c({
      type,
      visible: false,
      widgets: getReferences()
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Simple flat array that holds the visited hashes + state Object
   * so the router can navigate back to them
   * @type {Array}
   */
  let history = [];
  const updateHistory = request => {
    const hash = getActiveHash();
    if (!hash) {
      return;
    }

    // navigate storage flag
    const register = request.register;
    const forceNavigateStore = register.get(symbols.store);

    // test preventStorage on route configuration
    const activeRoute = getRouteByHash(hash);
    const preventStorage = getOption(activeRoute.options, 'preventStorage');

    // we give prio to navigate storage flag
    let store = isBoolean(forceNavigateStore) ? forceNavigateStore : !preventStorage;
    if (store) {
      const toStore = hash.replace(/^\//, '');
      const location = locationInHistory(toStore);
      const stateObject = getStateObject(getActivePage(), request);
      const routerConfig = getRouterConfig();

      // store hash if it's not a part of history or flag for
      // storage of same hash is true
      if (location === -1 || routerConfig.get('storeSameHash')) {
        history.push({
          hash: toStore,
          state: stateObject
        });
      } else {
        // if we visit the same route we want to sync history
        const prev = history.splice(location, 1)[0];
        history.push({
          hash: prev.hash,
          state: stateObject
        });
      }
    }
  };
  const locationInHistory = hash => {
    for (let i = 0; i < history.length; i++) {
      if (history[i].hash === hash) {
        return i;
      }
    }
    return -1;
  };
  const getHistoryState = hash => {
    let state = null;
    if (history.length) {
      // if no hash is provided we get the last
      // pushed history record
      if (!hash) {
        const record = history[history.length - 1];
        // could be null
        state = record.state;
      } else {
        if (locationInHistory(hash) !== -1) {
          const record = history[locationInHistory(hash)];
          state = record.state;
        }
      }
    }
    return state;
  };
  const replaceHistoryState = function () {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let hash = arguments.length > 1 ? arguments[1] : undefined;
    if (!history.length) {
      return;
    }
    const location = hash ? locationInHistory(hash) : history.length - 1;
    if (location !== -1 && isObject(state)) {
      history[location].state = state;
    }
  };
  const getStateObject = (page, request) => {
    // if the new request shared instance with the
    // previous request we used the copied state object
    if (request.isSharedInstance) {
      if (request.copiedHistoryState) {
        return request.copiedHistoryState;
      }
    } else if (page && isFunction(page.historyState)) {
      return page.historyState();
    }
    return null;
  };
  const getHistory = () => {
    return history.slice(0);
  };
  const setHistory = function () {
    let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (isArray(arr)) {
      history = arr;
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @type {Lightning.Application}
   */
  let application;

  /**
   * Actual instance of the app
   * @type {Lightning.Component}
   */
  let app;

  /**
   * Component that hosts all routed pages
   * @type {Lightning.Component}
   */
  let pagesHost;

  /**
   * @type {Lightning.Stage}
   */
  let stage;

  /**
   * Platform driven Router configuration
   * @type {Map<string>}
   */
  let routerConfig;

  /**
   * Component that hosts all attached widgets
   * @type {Lightning.Component}
   */
  let widgetsHost;

  /**
   * Hash we point the browser to when we boot the app
   * and there is no deep-link provided
   * @type {string|Function}
   */
  let rootHash;

  /**
   * Boot request will fire before app start
   * can be used to execute some global logic
   * and can be configured
   */
  let bootRequest;

  /**
   * Flag if we need to update the browser location hash.
   * Router can work without.
   * @type {boolean}
   */
  let updateHash = true;

  /**
   * Will be called before a route starts, can be overridden
   * via routes config
   * @param from - route we came from
   * @param to - route we navigate to
   * @returns {Promise<*>}
   */
  // eslint-disable-next-line
  let beforeEachRoute = async (from, to) => {
    return true;
  };

  /**
   *  * Will be called after a navigate successfully resolved,
   * can be overridden via routes config
   */
  let afterEachRoute = () => {};

  /**
   * All configured routes
   * @type {Map<string, object>}
   */
  let routes$1 = new Map();

  /**
   * Store all page components per route
   * @type {Map<string, object>}
   */
  let components = new Map();

  /**
   * Flag if router has been initialised
   * @type {boolean}
   */
  let initialised = false;

  /**
   * Current page being rendered on screen
   * @type {null}
   */
  let activePage = null;
  let activeHash;
  let activeRoute;

  /**
   *  During the process of a navigation request a new
   *  request can start, to prevent unwanted behaviour
   *  the navigate()-method stores the last accepted hash
   *  so we can invalidate any prior requests
   */
  let lastAcceptedHash;

  /**
   * With on()-data providing behaviour the Router forced the App
   * in a Loading state. When the data-provider resolves we want to
   * change the state back to where we came from
   */
  let previousState;
  const mixin = app => {
    // by default the Router Baseclass provides the component
    // reference in which we store our pages
    if (app.pages) {
      pagesHost = app.pages.childList;
    }
    // if the app is using widgets we grab refs
    // and hide all the widgets
    if (app.widgets && app.widgets.children) {
      widgetsHost = app.widgets.childList;
      // hide all widgets on boot
      widgetsHost.forEach(w => w.visible = false);
    }
    app._handleBack = e => {
      step(-1);
      e.preventDefault();
    };
  };
  const bootRouter = (config, instance) => {
    let {
      appInstance,
      routes
    } = config;

    // if instance is provided and it's and Lightning Component instance
    if (instance && isPage(instance)) {
      app = instance;
    }
    if (!app) {
      app = appInstance || AppInstance;
    }
    application = app.application;
    pagesHost = application.childList;
    stage = app.stage;
    routerConfig = getConfigMap();
    mixin(app);
    if (isArray(routes)) {
      setup(config);
    } else if (isFunction(routes)) {
      console.warn('[Router]: Calling Router.route() directly is deprecated.');
      console.warn('Use object config: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };
  const setup = config => {
    if (!initialised) {
      init(config);
    }
    config.routes.forEach(r => {
      const path = cleanHash(r.path);
      if (!routeExists(path)) {
        const route = createRoute(r);
        routes$1.set(path, route);
        // if route has a configured component property
        // we store it in a different map to simplify
        // the creating and destroying per route
        if (route.component) {
          let type = route.component;
          if (isComponentConstructor(type)) {
            if (!routerConfig.get('lazyCreate')) {
              type = createComponent(stage, type);
              pagesHost.a(type);
            }
          }
          components.set(path, type);
        }
      } else {
        console.error("".concat(path, " already exists in routes configuration"));
      }
    });
  };
  const init = config => {
    rootHash = config.root;
    if (isFunction(config.boot)) {
      bootRequest = config.boot;
    }
    if (isBoolean(config.updateHash)) {
      updateHash = config.updateHash;
    }
    if (isFunction(config.beforeEachRoute)) {
      beforeEachRoute = config.beforeEachRoute;
    }
    if (isFunction(config.afterEachRoute)) {
      afterEachRoute = config.afterEachRoute;
    }
    if (config.bootComponent) {
      console.warn('[Router]: Boot Component is now available as a special router: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration?id=special-routes');
      console.warn('[Router]: setting { bootComponent } property will be deprecated in a future release');
      if (isPage(config.bootComponent)) {
        config.routes.push({
          path: '$',
          component: config.bootComponent,
          // we try to assign the bootRequest as after data-provider
          // so it will behave as any other component
          after: bootRequest || null,
          options: {
            preventStorage: true
          }
        });
      } else {
        console.error("[Router]: ".concat(config.bootComponent, " is not a valid boot component"));
      }
    }
    config.routes.forEach(item => {
      // replacing regexes with 'R' to avoid issues with pattern matching below
      const strippedPath = stripRegex(item.path);

      // Pattern to identify the last path of the route
      // It should start with "/:" + any word  and ends with "?"
      // It should be the last path of the route
      // valid => /player/:asset/:assetId? (:assetId is optional)
      // invalid => /player/:asset/:assetId?/test (:assetId? is not an optional path)
      // invalid => /player/:asset?/:assetId? (second path is not considered as an optional path)
      const pattern = /.*\/:.*?\?$/u;
      if (pattern.test(strippedPath)) {
        const optionalPath = item.path.substring(0, item.path.lastIndexOf('/'));
        const originalPath = item.path.substring(0, item.path.lastIndexOf('?'));
        item.path = originalPath;
        //Create another entry with the optional path
        let optionalItem = {
          ...item
        };
        optionalItem.path = optionalPath;
        config.routes.push(optionalItem);
      }
    });
    initialised = true;
  };
  const storeComponent = (route, type) => {
    if (components.has(route)) {
      components.set(route, type);
    }
  };
  const getComponent = route => {
    if (components.has(route)) {
      return components.get(route);
    }
    return null;
  };
  /**
   * Test if router needs to update browser location hash
   * @returns {boolean}
   */
  const mustUpdateLocationHash = () => {
    if (!routerConfig || !routerConfig.size) {
      return false;
    }
    // we need support to either turn change hash off
    // per platform or per app
    const updateConfig = routerConfig.get('updateHash');
    return !(isBoolean(updateConfig) && !updateConfig || isBoolean(updateHash) && !updateHash);
  };

  /**
   * Will be called when a new navigate() request has completed
   * and has not been expired due to it's async nature
   * @param request
   */
  const onRequestResolved = request => {
    const hash = request.hash;
    const route = request.route;
    const register = request.register;
    const page = request.page;

    // clean up history if modifier is set
    if (getOption(route.options, 'clearHistory')) {
      setHistory([]);
    } else if (hash && !isWildcard.test(route.path)) {
      updateHistory(request);
    }

    // we only update the stackLocation if a route
    // is not expired before it resolves
    storeComponent(route.path, page);
    if (request.isSharedInstance || !request.isCreated) {
      emit(page, 'changed');
    } else if (request.isCreated) {
      emit(page, 'mounted');
    }

    // only update widgets if we have a host
    if (widgetsHost) {
      updateWidgets(route.widgets, page);
    }

    // we want to clean up if there is an
    // active page that is not being shared
    // between current and previous route
    if (getActivePage() && !request.isSharedInstance) {
      cleanUp(activePage, request);
    }

    // provide history object to active page
    if (register.get(symbols.historyState) && isFunction(page.historyState)) {
      page.historyState(register.get(symbols.historyState));
    }
    setActivePage(page);
    activeHash = request.hash;
    activeRoute = route.path;

    // cleanup all cancelled requests
    for (let request of navigateQueue.values()) {
      if (request.isCancelled && request.hash) {
        navigateQueue.delete(request.hash);
      }
    }
    afterEachRoute(request);
    Log$1.info('[route]:', route.path);
    Log$1.info('[hash]:', hash);
  };
  const cleanUp = (page, request) => {
    const route = activeRoute;
    const register = request.register;
    const lazyDestroy = routerConfig.get('lazyDestroy');
    const destroyOnBack = routerConfig.get('destroyOnHistoryBack');
    const keepAlive = register.get('keepAlive');
    const isFromHistory = register.get(symbols.backtrack);
    let doCleanup = false;

    // if this request is executed due to a step back in history
    // and we have configured to destroy active page when we go back
    // in history or lazyDestory is enabled
    if (isFromHistory && (destroyOnBack || lazyDestroy)) {
      doCleanup = true;
    }

    // clean up if lazyDestroy is enabled and the keepAlive flag
    // in navigation register is false
    if (lazyDestroy && !keepAlive) {
      doCleanup = true;
    }

    // if the current and new request share the same route blueprint
    if (activeRoute === request.route.path) {
      doCleanup = true;
    }
    if (doCleanup) {
      // grab original class constructor if
      // statemachine routed else store constructor
      storeComponent(route, page._routedType || page.constructor);

      // actual remove of page from memory
      pagesHost.remove(page);

      // force texture gc() if configured
      // so we can cleanup textures in the same tick
      if (routerConfig.get('gcOnUnload')) {
        stage.gc();
      }
    } else {
      // If we're not removing the page we need to
      // reset it's properties
      page.patch({
        x: 0,
        y: 0,
        scale: 1,
        alpha: 1,
        visible: false
      });
    }
  };
  const getActiveHash = () => {
    return activeHash;
  };
  const setActivePage = page => {
    activePage = page;
  };
  const getActivePage = () => {
    return activePage;
  };
  const getActiveRoute = () => {
    return activeRoute;
  };
  const getLastHash = () => {
    return lastAcceptedHash;
  };
  const setLastHash = hash => {
    lastAcceptedHash = hash;
  };
  const setPreviousState = state => {
    previousState = state;
  };
  const getPreviousState = () => {
    return previousState;
  };
  const routeExists = key => {
    return routes$1.has(key);
  };
  const getRootHash = () => {
    return rootHash;
  };
  const getBootRequest = () => {
    return bootRequest;
  };
  const getRouterConfig = () => {
    return routerConfig;
  };
  const getRoutes = () => {
    return routes$1;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const isFunction = v => {
    return typeof v === 'function';
  };
  const isObject = v => {
    return typeof v === 'object' && v !== null;
  };
  const isBoolean = v => {
    return typeof v === 'boolean';
  };
  const isPage = v => {
    if (v instanceof Lightning$1.Element || isComponentConstructor(v)) {
      return true;
    }
    return false;
  };
  const isComponentConstructor = type => {
    return type.prototype && 'isComponent' in type.prototype;
  };
  const isArray = v => {
    return Array.isArray(v);
  };
  const ucfirst = v => {
    return "".concat(v.charAt(0).toUpperCase()).concat(v.slice(1));
  };
  const isString = v => {
    return typeof v === 'string';
  };
  const isPromise = method => {
    let result;
    if (isFunction(method)) {
      try {
        result = method.apply(null);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }
    return isObject(result) && isFunction(result.then);
  };
  const cleanHash = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return hash.replace(/^#/, '').replace(/\/+$/, '');
  };
  const getConfigMap = () => {
    const routerSettings = Settings$1.get('platform', 'router');
    const isObj = isObject(routerSettings);
    return ['backtrack', 'gcOnUnload', 'destroyOnHistoryBack', 'lazyCreate', 'lazyDestroy', 'reuseInstance', 'autoRestoreRemote', 'numberNavigation', 'updateHash', 'storeSameHash'].reduce((config, key) => {
      config.set(key, isObj ? routerSettings[key] : Settings$1.get('platform', key));
      return config;
    }, new Map());
  };
  const getQueryStringParams = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActiveHash();
    const resumeHash = getResumeHash();
    if ((hash === '$' || !hash) && resumeHash) {
      if (isString(resumeHash)) {
        hash = resumeHash;
      }
    }
    let parse = '';
    const getQuery = /([?&].*)/;
    const matches = getQuery.exec(hash);
    const params = {};
    if (document.location && document.location.search) {
      parse = document.location.search;
    }
    if (matches && matches.length) {
      let hashParams = matches[1];
      if (parse) {
        // if location.search is not empty we
        // remove the leading ? to create a
        // valid string
        hashParams = hashParams.replace(/^\?/, '');
        // we parse hash params last so they we can always
        // override search params with hash params
        parse = "".concat(parse, "&").concat(hashParams);
      } else {
        parse = hashParams;
      }
    }
    if (parse) {
      const urlParams = new URLSearchParams(parse);
      for (const [key, value] of urlParams.entries()) {
        params[key] = value;
      }
      return params;
    } else {
      return false;
    }
  };
  const objectToQueryString = obj => {
    if (!isObject(obj)) {
      return '';
    }
    return '?' + Object.keys(obj).map(key => {
      return "".concat(key, "=").concat(obj[key]);
    }).join('&');
  };
  const symbols = {
    route: Symbol('route'),
    hash: Symbol('hash'),
    store: Symbol('store'),
    fromHistory: Symbol('fromHistory'),
    expires: Symbol('expires'),
    resume: Symbol('resume'),
    backtrack: Symbol('backtrack'),
    historyState: Symbol('historyState'),
    queryParams: Symbol('queryParams')
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const dataHooks = {
    on: request => {
      setPreviousState(app.state || '');
      app._setState('Loading');
      return execProvider(request);
    },
    before: request => {
      return execProvider(request);
    },
    after: request => {
      try {
        execProvider(request, true);
      } catch (e) {
        // for now we fail silently
      }
      return Promise.resolve();
    }
  };
  const execProvider = (request, emitProvided) => {
    const route = request.route;
    const provider = route.provider;
    const expires = route.cache ? route.cache * 1000 : 0;
    const params = addPersistData(request);
    return provider.request(request.page, {
      ...params
    }).then(() => {
      request.page[symbols.expires] = Date.now() + expires;
      if (emitProvided) {
        emit(request.page, 'dataProvided');
      }
    }).catch(e => {
      request.page[symbols.expires] = Date.now();
      throw e;
    });
  };
  const addPersistData = _ref => {
    let {
      page,
      route,
      hash,
      register = new Map()
    } = _ref;
    const urlValues = getValuesFromHash(hash, route.path);
    const queryParams = getQueryStringParams(hash);
    const pageData = new Map([...urlValues, ...register]);
    const params = {};

    // make dynamic url data available to the page
    // as instance properties
    for (let [name, value] of pageData) {
      params[name] = value;
    }
    if (queryParams) {
      params[symbols.queryParams] = queryParams;
    }

    // check navigation register for persistent data
    if (register.size) {
      const obj = {};
      for (let [k, v] of register) {
        obj[k] = v;
      }
      page.persist = obj;
    }

    // make url data and persist data available
    // via params property
    page.params = params;
    emit(page, ['urlParams'], params);
    return params;
  };

  /**
   * Test if page passed cache-time
   * @param page
   * @returns {boolean}
   */
  const isPageExpired = page => {
    if (!page[symbols.expires]) {
      return false;
    }
    const expires = page[symbols.expires];
    const now = Date.now();
    return now >= expires;
  };
  const hasProvider = path => {
    if (routeExists(path)) {
      const record = routes$1.get(path);
      return !!record.provider;
    }
    return false;
  };
  const getProvider = route => {
    // @todo: fix, route already is passed in
    if (routeExists(route.path)) {
      const {
        provider
      } = routes$1.get(route.path);
      return {
        type: provider.type,
        provider: provider.request
      };
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const fade = (i, o) => {
    return new Promise(resolve => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      // resolve on y finish
      i.transition('alpha').on('finish', () => {
        if (o) {
          o.visible = false;
        }
        resolve();
      });
    });
  };
  const crossFade = (i, o) => {
    return new Promise(resolve => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      if (o) {
        o.patch({
          smooth: {
            alpha: [0, {
              duration: 0.5,
              delay: 0.3
            }]
          }
        });
      }
      // resolve on y finish
      i.transition('alpha').on('finish', () => {
        resolve();
      });
    });
  };
  const moveOnAxes = (axis, direction, i, o) => {
    const bounds = axis === 'x' ? 1920 : 1080;
    return new Promise(resolve => {
      i.patch({
        ["".concat(axis)]: direction ? bounds * -1 : bounds,
        visible: true,
        smooth: {
          ["".concat(axis)]: [0, {
            duration: 0.4,
            delay: 0.2
          }]
        }
      });
      // out is optional
      if (o) {
        o.patch({
          ["".concat(axis)]: 0,
          smooth: {
            ["".concat(axis)]: [direction ? bounds : bounds * -1, {
              duration: 0.4,
              delay: 0.2
            }]
          }
        });
      }
      // resolve on y finish
      i.transition(axis).on('finish', () => {
        resolve();
      });
    });
  };
  const up = (i, o) => {
    return moveOnAxes('y', 0, i, o);
  };
  const down = (i, o) => {
    return moveOnAxes('y', 1, i, o);
  };
  const left = (i, o) => {
    return moveOnAxes('x', 0, i, o);
  };
  const right = (i, o) => {
    return moveOnAxes('x', 1, i, o);
  };
  var Transitions = {
    fade,
    crossFade,
    up,
    down,
    left,
    right
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * execute transition between new / old page and
   * toggle the defined widgets
   * @todo: platform override default transition
   * @param pageIn
   * @param pageOut
   */
  const executeTransition = function (pageIn) {
    let pageOut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const transition = pageIn.pageTransition || pageIn.easing;
    const hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
    const transitionsDisabled = getRouterConfig().get('disableTransitions');
    if (pageIn.easing) {
      console.warn('easing() method is deprecated and will be removed. Use pageTransition()');
    }

    // default behaviour is a visibility toggle
    if (!hasCustomTransitions || transitionsDisabled) {
      pageIn.visible = true;
      if (pageOut) {
        pageOut.visible = false;
      }
      return Promise.resolve();
    }
    if (transition) {
      let type;
      try {
        type = transition.call(pageIn, pageIn, pageOut);
      } catch (e) {
        type = 'crossFade';
      }
      if (isPromise(type)) {
        return type;
      }
      if (isString(type)) {
        const fn = Transitions[type];
        if (fn) {
          return fn(pageIn, pageOut);
        }
      }

      // keep backwards compatible for now
      if (pageIn.smoothIn) {
        // provide a smooth function that resolves itself
        // on transition finish
        const smooth = function (p, v) {
          let args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return new Promise(resolve => {
            pageIn.visible = true;
            pageIn.setSmooth(p, v, args);
            pageIn.transition(p).on('finish', () => {
              resolve();
            });
          });
        };
        return pageIn.smoothIn({
          pageIn,
          smooth
        });
      }
    }
    return Transitions.crossFade(pageIn, pageOut);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * The actual loading of the component
   * */
  const load = async request => {
    let expired = false;
    try {
      request = await loader(request);
      if (request && !request.isCancelled) {
        // in case of on() providing we need to reset
        // app state;
        if (app.state === 'Loading') {
          if (getPreviousState() === 'Widgets') {
            app._setState('Widgets', [getActiveWidget()]);
          } else {
            app._setState('');
          }
        }
        // Do page transition if instance
        // is not shared between the routes
        if (!request.isSharedInstance && !request.isCancelled) {
          await executeTransition(request.page, getActivePage());
        }
      } else {
        expired = true;
      }
      // on expired we only cleanup
      if (expired || request.isCancelled) {
        Log$1.debug('[router]:', "Rejected ".concat(request.hash, " because route to ").concat(getLastHash(), " started"));
        if (request.isCreated && !request.isSharedInstance) {
          // remove from render-tree
          pagesHost.remove(request.page);
        }
      } else {
        onRequestResolved(request);
        // resolve promise
        return request.page;
      }
    } catch (request) {
      if (!request.route) {
        console.error(request);
      } else if (!expired) {
        // @todo: revisit
        const {
          route
        } = request;
        // clean up history if modifier is set
        if (getOption(route.options, 'clearHistory')) {
          setHistory([]);
        } else if (!isWildcard.test(route.path)) {
          updateHistory(request);
        }
        if (request.isCreated && !request.isSharedInstance) {
          // remove from render-tree
          pagesHost.remove(request.page);
        }
        handleError(request);
      }
    }
  };
  const loader = async request => {
    const route = request.route;
    const hash = request.hash;
    const register = request.register;

    // todo: grab from Route instance
    let type = getComponent(route.path);
    let isConstruct = isComponentConstructor(type);
    let provide = false;

    // if it's an instance bt we're not coming back from
    // history we test if we can re-use this instance
    if (!isConstruct && !register.get(symbols.backtrack)) {
      if (!mustReuse(route)) {
        type = type.constructor;
        isConstruct = true;
      }
    }

    // If page is Lightning Component instance
    if (!isConstruct) {
      request.page = type;
      // if we have have a data route for current page
      if (hasProvider(route.path)) {
        if (isPageExpired(type) || type[symbols.hash] !== hash) {
          provide = true;
        }
      }
      let currentRoute = getActivePage() && getActivePage()[symbols.route];
      // if the new route is equal to the current route it means that both
      // route share the Component instance and stack location / since this case
      // is conflicting with the way before() and after() loading works we flag it,
      // and check platform settings in we want to re-use instance
      if (route.path === currentRoute) {
        request.isSharedInstance = true;
        // since we're re-using the instance we must attach
        // historyState to the request to prevent it from
        // being overridden.
        if (isFunction(request.page.historyState)) {
          request.copiedHistoryState = request.page.historyState();
        }
      }
    } else {
      request.page = createComponent(stage, type);
      pagesHost.a(request.page);
      // test if need to request data provider
      if (hasProvider(route.path)) {
        provide = true;
      }
      request.isCreated = true;
    }

    // we store hash and route as properties on the page instance
    // that way we can easily calculate new behaviour on page reload
    request.page[symbols.hash] = hash;
    request.page[symbols.route] = route.path;
    try {
      if (provide) {
        // extract attached data-provider for route
        // we're processing
        const {
          type: loadType,
          provider
        } = getProvider(route);

        // update running request
        request.provider = provider;
        request.providerType = loadType;
        await dataHooks[loadType](request);

        // we early exit if the current request is expired
        if (hash !== getLastHash()) {
          return false;
        } else {
          if (request.providerType !== 'after') {
            emit(request.page, 'dataProvided');
          }
          // resolve promise
          return request;
        }
      } else {
        addPersistData(request);
        return request;
      }
    } catch (e) {
      request.error = e;
      return Promise.reject(request);
    }
  };
  const handleError = request => {
    if (request && request.error) {
      console.error(request.error);
    } else if (request) {
      Log$1.error(request);
    }
    if (request.page && routeExists('!')) {
      navigate('!', {
        request
      }, false);
    }
  };
  const mustReuse = route => {
    const opt = getOption(route.options, 'reuseInstance');
    const config = routerConfig.get('reuseInstance');

    // route always has final decision
    if (isBoolean(opt)) {
      return opt;
    }
    return !(isBoolean(config) && config === false);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class RoutedApp extends Lightning$1.Component {
    static _template() {
      return {
        Pages: {
          forceZIndexContext: true
        },
        /**
         * This is a default Loading page that will be made visible
         * during data-provider on() you CAN override in child-class
         */
        Loading: {
          rect: true,
          w: 1920,
          h: 1080,
          color: 0xff000000,
          visible: false,
          zIndex: 99,
          Label: {
            mount: 0.5,
            x: 960,
            y: 540,
            text: {
              text: 'Loading..'
            }
          }
        }
      };
    }
    static _states() {
      return [class Loading extends this {
        $enter() {
          this.tag('Loading').visible = true;
        }
        $exit() {
          this.tag('Loading').visible = false;
        }
      }, class Widgets extends this {
        $enter(args, widget) {
          // store widget reference
          this._widget = widget;

          // since it's possible that this behaviour
          // is non-remote driven we force a recalculation
          // of the focuspath
          this._refocus();
        }
        _getFocused() {
          // we delegate focus to selected widget
          // so it can consume remotecontrol presses
          return this._widget;
        }

        // if we want to widget to widget focus delegation
        reload(widget) {
          this._widget = widget;
          this._refocus();
        }
        _handleKey() {
          const restoreFocus = routerConfig.get('autoRestoreRemote');
          /**
           * The Router used to delegate focus back to the page instance on
           * every unhandled key. This is barely usefull in any situation
           * so for now we offer the option to explicity turn that behaviour off
           * so we don't don't introduce a breaking change.
           */
          if (!isBoolean(restoreFocus) || restoreFocus === true) {
            Router.focusPage();
          }
        }
      }];
    }

    /**
     * Return location where pages need to be stored
     */
    get pages() {
      return this.tag('Pages');
    }

    /**
     * Tell router where widgets are stored
     */
    get widgets() {
      return this.tag('Widgets');
    }

    /**
     * we MUST register _handleBack method so the Router
     * can override it
     * @private
     */
    _handleBack() {}

    /**
     * We MUST return Router.activePage() so the new Page
     * can listen to the remote-control.
     */
    _getFocused() {
      return Router.getActivePage();
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
  rouThor ==[x]
   */
  let navigateQueue = new Map();
  let forcedHash = '';
  let resumeHash = '';

  /**
   * Start routing the app
   * @param config - route config object
   * @param instance - instance of the app
   */
  const startRouter = (config, instance) => {
    bootRouter(config, instance);
    registerListener();
    start();
  };

  // start translating url
  const start = () => {
    let hash = (getHash() || '').replace(/^#/, '');
    const bootKey = '$';
    const params = getQueryStringParams(hash);
    const bootRequest = getBootRequest();
    const rootHash = getRootHash();
    const isDirectLoad = hash.indexOf(bootKey) !== -1;

    // prevent direct reload of wildcard routes
    // expect bootComponent
    if (isWildcard.test(hash) && hash !== bootKey) {
      hash = '';
    }

    // store resume point for manual resume
    resumeHash = isDirectLoad ? rootHash : hash || rootHash;
    const ready = () => {
      if (!hash && rootHash) {
        if (isString(rootHash)) {
          navigate(rootHash);
        } else if (isFunction(rootHash)) {
          rootHash().then(res => {
            if (isObject(res)) {
              navigate(res.path, res.params);
            } else {
              navigate(res);
            }
          });
        }
      } else {
        queue(hash);
        handleHashChange().then(() => {
          app._refocus();
        }).catch(e => {
          console.error(e);
        });
      }
    };
    if (routeExists(bootKey)) {
      if (hash && !isDirectLoad) {
        if (!getRouteByHash(hash)) {
          navigate('*', {
            failedHash: hash
          });
          return;
        }
      }
      navigate(bootKey, {
        resume: resumeHash,
        reload: bootKey === hash
      }, false);
    } else if (isFunction(bootRequest)) {
      bootRequest(params).then(() => {
        ready();
      }).catch(e => {
        handleBootError(e);
      });
    } else {
      ready();
    }
  };
  const handleBootError = e => {
    if (routeExists('!')) {
      navigate('!', {
        request: {
          error: e
        }
      });
    } else {
      console.error(e);
    }
  };

  /**
   * start a new request
   * @param url
   * @param args
   * @param store
   */
  const navigate = function (url) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let store = arguments.length > 2 ? arguments[2] : undefined;
    if (isObject(url)) {
      url = getHashByName(url);
      if (!url) {
        return;
      }
    }
    let hash = getHash();
    if (!mustUpdateLocationHash() && forcedHash) {
      hash = forcedHash;
    }
    if (hash.replace(/^#/, '') !== url) {
      // push request in the queue
      queue(url, args, store);
      if (mustUpdateLocationHash()) {
        setHash(url);
      } else {
        forcedHash = url;
        handleHashChange(url).then(() => {
          app._refocus();
        }).catch(e => {
          console.error(e);
        });
      }
    } else if (args.reload) {
      // push request in the queue
      queue(url, args, store);
      handleHashChange(url).then(() => {
        app._refocus();
      }).catch(e => {
        console.error(e);
      });
    }
  };
  const queue = function (hash) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let store = arguments.length > 2 ? arguments[2] : undefined;
    hash = cleanHash(hash);
    if (!navigateQueue.has(hash)) {
      for (let request of navigateQueue.values()) {
        request.cancel();
      }
      const request = createRequest(hash, args, store);
      navigateQueue.set(decodeURIComponent(hash), request);
      return request;
    }
    return false;
  };

  /**
   * Handle change of hash
   * @param override
   * @returns {Promise<void>}
   */
  const handleHashChange = async override => {
    const hash = cleanHash(override || getHash());
    const queueId = decodeURIComponent(hash);
    let request = navigateQueue.get(queueId);

    // handle hash updated manually
    if (!request && !navigateQueue.size) {
      request = queue(hash);
    }
    const route = getRouteByHash(hash);
    if (!route) {
      if (routeExists('*')) {
        navigate('*', {
          failedHash: hash
        });
      } else {
        console.error("Unable to navigate to: ".concat(hash));
      }
      return;
    }

    // update current processed request
    request.hash = hash;
    request.route = route;
    let result = await beforeEachRoute(getActiveHash(), request);

    // test if a local hook is configured for the route
    if (result && route.beforeNavigate) {
      result = await route.beforeNavigate(getActiveHash(), request);
    }
    if (isBoolean(result)) {
      // only if resolve value is explicitly true
      // we continue the current route request
      if (result) {
        return resolveHashChange(request);
      }
    } else {
      // if navigation guard didn't return true
      // we cancel the current request
      request.cancel();
      navigateQueue.delete(queueId);
      if (isString(result)) {
        navigate(result);
      } else if (isObject(result)) {
        let store = true;
        if (isBoolean(result.store)) {
          store = result.store;
        }
        navigate(result.path, result.params, store);
      }
    }
  };

  /**
   * Continue processing the hash change if not blocked
   * by global or local hook
   * @param request - {}
   */
  const resolveHashChange = request => {
    const hash = request.hash;
    const route = request.route;
    const queueId = decodeURIComponent(hash);
    // store last requested hash so we can
    // prevent a route that resolved later
    // from displaying itself
    setLastHash(hash);
    if (route.path) {
      const component = getComponent(route.path);
      // if a hook is provided for the current route
      if (isFunction(route.hook)) {
        const urlParams = getValuesFromHash(hash, route.path);
        const params = {};
        for (const key of urlParams.keys()) {
          params[key] = urlParams.get(key);
        }
        route.hook(app, {
          ...params
        });
      }
      // if there is a component attached to the route
      if (component) {
        // force page to root state to prevent shared state issues
        const activePage = getActivePage();
        if (activePage) {
          const keepAlive = keepActivePageAlive(getActiveRoute(), request);
          if (activePage && route.path === getActiveRoute() && !keepAlive) {
            activePage._setState('');
          }
        }
        if (isPage(component)) {
          load(request).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        } else {
          // of the component is not a constructor
          // or a Component instance we can assume
          // that it's a dynamic import
          component().then(contents => {
            return contents.default;
          }).then(module => {
            storeComponent(route.path, module);
            return load(request);
          }).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        }
      } else {
        navigateQueue.delete(queueId);
      }
    }
  };

  /**
   * Directional step in history
   * @param level
   */
  const step = function () {
    let level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (!level || isNaN(level)) {
      return false;
    }
    const history = getHistory();
    // for now we only support negative numbers
    level = Math.abs(level);

    // we can't step back past the amount
    // of history entries
    if (level > history.length) {
      if (isFunction(app._handleAppClose)) {
        return app._handleAppClose();
      }
      return app.application.closeApp();
    } else if (history.length) {
      // for now we only support history back
      const route = history.splice(history.length - level, level)[0];
      // store changed history
      setHistory(history);
      return navigate(route.hash, {
        [symbols.backtrack]: true,
        [symbols.historyState]: route.state
      }, false);
    } else if (routerConfig.get('backtrack')) {
      const hashLastPart = /(\/:?[\w%\s-]+)$/;
      let hash = stripRegex(getHash());
      let floor = getFloor(hash);

      // test if we got deep-linked
      if (floor > 1) {
        while (floor--) {
          // strip of last part
          hash = hash.replace(hashLastPart, '');
          // if we have a configured route
          // we navigate to it
          if (getRouteByHash(hash)) {
            return navigate(hash, {
              [symbols.backtrack]: true
            }, false);
          }
        }
      }
    }
    return false;
  };

  /**
   * Resume Router's page loading process after
   * the BootComponent became visible;
   */
  const resume = () => {
    if (isString(resumeHash)) {
      navigate(resumeHash, false);
      resumeHash = '';
    } else if (isFunction(resumeHash)) {
      resumeHash().then(res => {
        resumeHash = '';
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    } else {
      console.warn('[Router]: resume() called but no hash found');
    }
  };

  /**
   * Force reload active hash
   */
  const reload = () => {
    if (!isNavigating()) {
      const hash = getActiveHash();
      navigate(hash, {
        reload: true
      }, false);
    }
  };

  /**
   * Query if the Router is still processing a Request
   * @returns {boolean}
   */
  const isNavigating = () => {
    if (navigateQueue.size) {
      let isProcessing = false;
      for (let request of navigateQueue.values()) {
        if (!request.isCancelled) {
          isProcessing = true;
        }
      }
      return isProcessing;
    }
    return false;
  };
  const getResumeHash = () => {
    return resumeHash;
  };

  /**
   * By default we return the location hash
   * @returns {string}
   */
  let getHash = () => {
    return document.location.hash;
  };

  /**
   * Update location hash
   * @param url
   */
  let setHash = url => {
    document.location.hash = url;
  };

  /**
   * This can be called from the platform / bootstrapper to override
   * the default getting and setting of the hash
   * @param config
   */
  const initRouter = config => {
    if (config.getHash) {
      getHash = config.getHash;
    }
    if (config.setHash) {
      setHash = config.setHash;
    }
  };

  /**
   * On hash change we start processing
   */
  const registerListener = () => {
    Registry.addEventListener(window, 'hashchange', async () => {
      if (mustUpdateLocationHash()) {
        try {
          await handleHashChange();
        } catch (e) {
          console.error(e);
        }
      }
    });
  };

  /**
   * Navigate to root hash
   */
  const root = () => {
    const rootHash = getRootHash();
    if (isString(rootHash)) {
      navigate(rootHash);
    } else if (isFunction(rootHash)) {
      rootHash().then(res => {
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    }
  };

  // export API
  var Router = {
    startRouter,
    navigate,
    resume,
    step,
    go: step,
    back: step.bind(null, -1),
    activePage: getActivePage,
    getActivePage() {
      // warning
      return getActivePage();
    },
    getActiveRoute,
    getActiveHash,
    focusWidget,
    getActiveWidget,
    restoreFocus,
    isNavigating,
    getHistory,
    setHistory,
    getHistoryState,
    replaceHistoryState,
    getQueryStringParams,
    reload,
    symbols,
    App: RoutedApp,
    // keep backwards compatible
    focusPage: restoreFocus,
    root: root,
    /**
     * Deprecated api methods
     */
    setupRoutes() {
      console.warn('Router: setupRoutes is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    on() {
      console.warn('Router.on() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    before() {
      console.warn('Router.before() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    after() {
      console.warn('Router.after() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let ApplicationInstance;
  var Launch = ((App, appSettings, platformSettings, appData) => {
    initSettings(appSettings, platformSettings);
    initUtils(platformSettings);
    initStorage();
    // Initialize plugins
    if (platformSettings.plugins) {
      platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
      platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
      platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.mediaPlayer && initVideoPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.ads && initAds(platformSettings.plugins.ads);
      platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
      platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
      platformSettings.plugins.purchase && initPurchase(platformSettings.plugins.purchase);
      platformSettings.plugins.pin && initPin(platformSettings.plugins.pin);
    }
    const app = Application(App, appData, platformSettings);
    initLightningSdkPlugin.log = Log$1;
    initLightningSdkPlugin.settings = Settings$1;
    initLightningSdkPlugin.ads = Ads;
    initLightningSdkPlugin.lightning = Lightning$1;
    ApplicationInstance = new app(appSettings);
    initLightningSdkPlugin.appInstance = ApplicationInstance;
    return ApplicationInstance;
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class SubtitleComponent extends Lightning$1.Component {
    static _template() {
      return {
        visible: false,
        rect: true,
        color: 0x90000000,
        shader: {
          type: Lightning$1.shaders.RoundedRectangle,
          radius: 5
        },
        Text: {
          y: 5,
          x: 20,
          text: {
            textColor: 0xffffffff,
            fontSize: 38,
            lineHeight: 38 * 1.4,
            textAlign: 'center',
            wordWrap: true,
            maxLines: 3,
            shadow: true,
            shadowColor: 0xff333333
          }
        }
      };
    }
    _init() {
      this._textTextureDefaults = new Lightning$1.textures.TextTexture(this.stage).cloneArgs();
      this.tag('Text').on('txLoaded', _ref => {
        let {
          _source
        } = _ref;
        this.w = _source.w + this.tag('Text').x * 2;
        this.h = _source.h;
        this.position();
      });
    }
    get textFormat() {
      const textTag = this.tag('Text').text;
      return {
        fontFace: textTag.fontFace || 'sans-serif',
        fontSize: textTag.fontSize,
        lineHeight: textTag.lineHeight,
        textAlign: textTag.textAlign,
        wordWrap: true,
        maxLines: textTag.maxLines
      };
    }
    show() {
      this.visible = true;
    }
    hide() {
      this.visible = false;
    }
    position() {
      this.x = this._calculateX(this.xPos);
      this.y = this._calculateY(this.yPos);
    }
    set viewportW(v) {
      this._viewportW = v;
      this.x = this._calculateX(this.xPos);
    }
    get viewportW() {
      return this._viewportW || this.application.finalW;
    }
    set viewportH(v) {
      this._viewportH = v;
      this.y = this._calculateY(this.yPos);
    }
    get viewportH() {
      return this._viewportH || this.application.finalH;
    }
    _calculateX(x) {
      if (x === 'center') {
        x = (this.viewportW - this.finalW) / 2;
      } else if (x === 'left') {
        x = 60;
      } else if (x === 'right') {
        x = this.viewportW - this.finalW - 60;
      }
      return x;
    }
    set xPos(v) {
      this._x = v;
      this.x = this._calculateX(v);
    }
    get xPos() {
      return this._x || 'center';
    }
    _calculateY(y) {
      if (y === 'center') {
        return (this.viewportH - this.finalH) / 2;
      } else if (y === 'top') {
        return 60;
      } else if (y === 'bottom') {
        return this.viewportH - this.finalH - 60;
      }
      return y;
    }
    set yPos(v) {
      this._y = v;
      this.y = this._calculateY(v);
    }
    get yPos() {
      return this._y || 'bottom';
    }
    set fontFamily(v) {
      this.tag('Text').text.fontFace = v;
    }
    set fontSize(v) {
      this.tag('Text').text.fontSize = v;
      this.tag('Text').text.lineHeight = v * 1.3;
    }
    set fontColor(v) {
      this.tag('Text').color = v;
    }
    set backgroundColor(v) {
      this.color = v;
    }
    _defineBreakpoint(text, breakpoint) {
      if (breakpoint >= this.maxWidth) return this.maxWidth;
      const info = Lightning$1.textures.TextTexture.renderer(this.stage, this.stage.platform.getDrawingCanvas(), {
        ...this._textTextureDefaults,
        ...this.textFormat,
        ...{
          wordWrapWidth: breakpoint
        },
        text
      })._calculateRenderInfo();
      if (info.width <= breakpoint && info.lines.length <= 2) {
        return breakpoint;
      } else {
        return this._defineBreakpoint(text, breakpoint * 1.25);
      }
    }
    set text(v) {
      this.alpha = 0;
      if (v && v.length) {
        const breakpoint = this._defineBreakpoint(v, 640);
        this.tag('Text').text.wordWrapWidth = breakpoint;
        this.tag('Text').text = v;
        this.alpha = 1;
      }
    }
    set textAlign(v) {
      this._textAlign = v;
      this.tag('Text').text.textAlign = v;
    }
    set maxWidth(v) {
      this._maxWidth = v;
    }
    get maxWidth() {
      return (this._maxWidth || 1200) - this.tag('Text').x * 2;
    }
    set maxLines(v) {
      this.tag('Text').text.maxLines = v;
    }
  }

  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
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
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  class Boot extends Lightning$1.Component {
    static _template() {
      return {
        Background: {
          w: 1920,
          h: 1080,
          rect: true,
          color: 0xff6f4dea
        },
        Title: {
          x: 960,
          y: 50,
          mount: 0.5,
          text: {
            text: 'Hello World!',
            fontSize: 64
          }
        },
        Logo: {
          x: 960,
          y: 540,
          mount: 0.5,
          src: Utils.asset('images/logo.png')
        }
      };
    }
    _init() {
      setTimeout(() => {
        // Router.root();
        Router.navigate('home', {
          message: "Hello, from the boot page. Here's your data"
        });
      }, 500);
    }
  }

  class MovieCard extends Lightning$1.Component {
    static _template() {
      return {
        Card: {
          flexItem: {
            minWidth: 220
          },
          rect: true,
          texture: Lightning$1.Tools.getRoundRect(200, 300, 4, 10, 0xff000000, false),
          //(w: number, h: number, radius: Lightning.Tools.CornerRadius, strokeWidth?: number | undefined, strokeColor?: number | undefined, fill?: boolean | undefined, fillColor?: number | undefined)
          texture: Lightning$1.Tools.getRoundRect(200, 300),
          //(w: number, h: number, radius: Lightning.Tools.CornerRadius, strokeWidth?: number | undefined, strokeColor?: number | undefined, fill?: boolean | undefined, fillColor?: number | undefined)
          shader: {
            type: Lightning$1.shaders.RoundedRectangle,
            topLeft: 0,
            stroke: 10,
            strokeColor: 0xff000000
          },
          Poster: {
            src: '',
            w: 200,
            h: 300
          } // Image component to show poster
        }
      };
    }

    _init() {
      const {
        poster_path,
        title,
        id
      } = this.movie;

      // this.tag('Card.Poster').src = `https://image.tmdb.org/t/p/w200/${poster_path}`
      this.updatePosterImage(poster_path);
      this.tag('Card').page = this.movie.id;
      this._animationDemoActive = this.tag('Card').animation({
        duration: .3,
        actions: [{
          p: 'shader.strokeColor',
          v: {
            1: 0xffffffff,
            0: 0xff000000
          }
        }, {
          p: 'scale',
          v: {
            0: 1,
            1: 1.2
          }
        }]
      });
      this._animationDemoInactive = this.tag('Card').animation({
        duration: .3,
        actions: [{
          p: 'shader.strokeColor',
          v: {
            1: 0xff000000,
            0: 0xffffffff
          }
        }, {
          p: 'scale',
          v: {
            0: 1.2,
            1: 1
          }
        }]
      });
    }
    _focus() {
      this._animationDemoActive.start();
    }
    _unfocus() {
      this._animationDemoInactive.start();
    }
    _handleEnter() {
      const movieDetailsMovie = this.movie;
      Router.navigate("moviedetails/".concat(this.movie.title.split(" ").join('').split(':').join('_')), {
        message: 'hellow from movieCard!',
        movieDetailsMovie
      });
    }
    updatePosterImage(poster_path) {
      console.log({
        poster_path
      });
      let newPoster;
      if (poster_path === "images/logo.png") {
        newPoster = Utils.asset("images/logo.png");
      } else {
        newPoster = "https://image.tmdb.org/t/p/w200/".concat(poster_path);
      }
      this.tag('Card.Poster').src = newPoster;
    }
  }

  var $inject_process_env = {"APP_MOVIEDB_API_KEY":"de92a12c1e13a2202d5e2be6d47caf42","APP_MOVIEDB_BASE_URL":"https://api.themoviedb.org/3","APP_MOVIEDB_FAVLISTID":"168152518686705649477945237067","APP_MOVIEDB_PW":"xzNmQQsTu_E4Pq#","APP_MOVIEDB_UN":"jamestuckerwray"};

  const BASE_URL = $inject_process_env.APP_MOVIEDB_BASE_URL;
  const API_KEY = $inject_process_env.APP_MOVIEDB_API_KEY;
  async function callMovieAPI(url) {
    const response = await fetch("".concat(BASE_URL).concat(url));
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  }
  function getUpcomingMovies() {
    return callMovieAPI("/movie/upcoming?api_key=".concat(API_KEY));
  }
  function getSimilarMoviesByMovieID(movieID) {
    return callMovieAPI("/movie/".concat(movieID, "/similar?api_key=").concat(API_KEY, "&page=1"));
  }

  class Button extends Lightning$1.Component {
    static _template() {
      return {
        h: 50,
        w: 200,
        rect: true,
        Label: {
          x: w => w / 2,
          y: h => h / 2,
          mountX: 0.5,
          mountY: 0.45,
          color: 0xff000000,
          text: {
            fontSize: 32
          }
        }
      };
    }
    set label(value) {
      this.tag('Label').text = value;
    }
    get padding() {
      return this._padding || 5;
    }
    set padding(num) {
      this._padding = num;
    }
    _init() {
      const label = this.tag('Label');
      label.on('txLoaded', () => {
        if (this.w < label.renderWidth + this.padding * 2) {
          this.w = label.renderWidth + this.padding * 2;
        }
      });
    }
    _focus() {
      this.patch({
        smooth: {
          color: 0xff763ffc
        },
        Label: {
          smooth: {
            color: 0xffffffff
          }
        }
      });
    }
    _unfocus() {
      this.patch({
        smooth: {
          color: 0xffffffff
        },
        Label: {
          smooth: {
            color: 0xff000000
          }
        }
      });
    }
  }

  class Synopsis_Shortened extends Lightning$1.Component {
    static _template() {
      const PADDING = 30;
      return {
        x: 1920 / 4 - PADDING / 2,
        y: 680 - PADDING / 2,
        w: 1920 / 2 + PADDING,
        h: 1080 - 780 + PADDING,
        rect: true,
        color: 0xaa000033,
        outline: "0xaa000033 1rem solid",
        flex: {
          direction: 'column'
        },
        Header: {
          flexItem: {
            // minWidth: 400,
            maxWidth: 1920 / 2 + PADDING,
            // padding: 15
            padding: PADDING / 2
          },
          flex: {
            direction: 'row',
            justifyContent: 'space-between'
          },
          // paddingColor: 0xff111111,
          Title: {
            x: PADDING,
            y: PADDING,
            text: {
              // paddingLeft: PADDING / 2, paddingRight: PADDING / 2, 
              text: ''
            }
          },
          Stars: {
            // x: PADDING,
            y: PADDING,
            text: {
              paddingLeft: PADDING / 2,
              paddingRight: PADDING / 2,
              text: ''
            }
          }
        },
        Overview: {
          w: 1920 / 2 - PADDING / 2,
          x: PADDING / 2,
          y: PADDING,
          text: {
            paddingLeft: PADDING / 2,
            paddingRight: PADDING / 2,
            wordWrap: true,
            wordWrapWidth: 1920 / 2 - 10,
            // wordWrap: true,
            fontSize: 32,
            // textOverflow: 'ellipsis',
            text: ''
          }
        }
        // FavoriteBtn: {}
      };
    }

    _init() {
      if (this.movie.noMovie) {
        var _this$movie$fillerMes;
        this.tag('Overview').text.text = (_this$movie$fillerMes = this.movie.fillerMessage) !== null && _this$movie$fillerMes !== void 0 ? _this$movie$fillerMes : '...';
      } else {
        this.movie.vote_average + '⭐';
        this.tag('Overview').text.text = this.movie.overview;
        this.tag('Header.Stars').text.text = this.movie.vote_average + '⭐';
        this.tag('Header.Title').text.text = this.movie.title;
        // this.handlePatchFavLabel(this.isFavorite)
      }
    }

    _handleDown() {}
    _handleUp() {
      Router.focusPage();
    }
    _handleEnter() {
      this.handleToggleFavoriteButton();
    }
  }

  class MovieCardLarge extends Lightning$1.Component {
    static _template() {
      return {
        w: 300,
        h: 450,
        rect: true,
        color: 0xffffff,
        Card: {
          w: 300,
          h: 450,
          rect: true,
          texture: Lightning$1.Tools.getRoundRect(300, 450, 4, 10, 0xff000000, false),
          //(w: number, h: number, radius: Lightning.Tools.CornerRadius, strokeWidth?: number | undefined, strokeColor?: number | undefined, fill?: boolean | undefined, fillColor?: number | undefined)
          texture: Lightning$1.Tools.getRoundRect(300, 450),
          //(w: number, h: number, radius: Lightning.Tools.CornerRadius, strokeWidth?: number | undefined, strokeColor?: number | undefined, fill?: boolean | undefined, fillColor?: number | undefined)
          shader: {
            type: Lightning$1.shaders.RoundedRectangle,
            topLeft: 0,
            stroke: 10,
            strokeColor: 0xff000000
          },
          Poster: {
            src: '',
            w: 300,
            h: 450
          } // Image component to show poster
          // Title: { text: '' }, // Text component to show title
        }
      };
    }

    _init() {
      const {
        poster_path,
        title,
        id
      } = this.movie;
      this.updatePosterImage(poster_path);
      // this.tag('Card.Poster').src = `https://image.tmdb.org/t/p/w200/${poster_path}`
      this.tag('Card').page = this.movie.id;
      this._animationDemoActive = this.tag('Card').animation(this.animationDemoActive);
      this._animationDemoInactive = this.tag('Card').animation(this.animationDemoInactive);
    }
    static get width() {
      return 300;
    }
    static get spacing() {
      return 100;
    }
    static get height() {
      return 450;
    }
    _focus() {
      this.tag;
      this._animationDemoActive.start();
      this.zIndex = 10;
    }
    _unfocus() {
      this._animationDemoInactive.start();
      this.zIndex = 1;
    }
    _handleEnter() {
      const movieDetailsMovie = this.movie;
      Router.navigate("moviedetails/".concat(this.movie.title.split(" ").join('').split(':').join('_')), {
        message: 'hellow from movieCard!',
        movieDetailsMovie
        //  similarToMovie: this.movie
      });
    }

    // updatePosterImage(poster_path) {
    //     let newPoster;
    //     if (poster_path === "images/logo.png") {
    //         newPoster = Utils.asset("images/logo.png");
    //     } else {
    //         newPoster = `https://image.tmdb.org/t/p/w200/${poster_path}`
    //     }
    //     this.tag('Card.Poster').src = newPoster;
    // }

    updatePosterImage(poster_path) {
      console.log({
        poster_path
      });
      let newPoster;
      if (poster_path === "images/logo.png") {
        newPoster = Utils.asset("images/logo.png");
      } else {
        newPoster = "https://image.tmdb.org/t/p/w200/".concat(poster_path);
      }
      this.tag('Card.Poster').src = newPoster;
    }
    pageTransition() {
      return 'fade';
    }
  }

  // import {MovieCard} from './MovieCard'

  class PaginatedMoviesRow extends Lightning$1.Component {
    static _template() {
      return {
        Row: {
          rect: true,
          src: "",
          x: 0,
          y: 0,
          h: 1080,
          w: 1920,
          flex: {
            wrap: true,
            direction: 'row'
          }
        }
      };
    }
    _construct() {
      this.currMovieIDX = 0;
      this.currPageIDX = 0;
      this.currItemIDX = 0;
      this.pages = [];
    }
    async _init() {
      var _this$pages$this$curr, _this$pages, _this$pages$this$curr2, _this$pages$this$curr3, _this$pages2, _this$pages2$this$cur, _this$pages2$this$cur2;
      this.handleCreateListChunks(5, this.movieData);
      const movieCardsList = this.handleCreateCurrPageOfMovieList();
      this.handlePatchResultsMoviesList(movieCardsList);
      this.signal('handleChangeSynopsis', (_this$pages$this$curr = (_this$pages = this.pages) === null || _this$pages === void 0 ? void 0 : (_this$pages$this$curr2 = _this$pages[this.currPageIDX]) === null || _this$pages$this$curr2 === void 0 ? void 0 : _this$pages$this$curr2[this.currItemIDX]) !== null && _this$pages$this$curr !== void 0 ? _this$pages$this$curr : {
        noMovie: true,
        fillerMessage: 'Add a movie to Favorites List to see more information about it here!',
        isFavorite: this.pages
      });
      this.signal('handleChangeBackgroundImage', (_this$pages$this$curr3 = (_this$pages2 = this.pages) === null || _this$pages2 === void 0 ? void 0 : (_this$pages2$this$cur = _this$pages2[this.currPageIDX]) === null || _this$pages2$this$cur === void 0 ? void 0 : (_this$pages2$this$cur2 = _this$pages2$this$cur[this.currItemIDX]) === null || _this$pages2$this$cur2 === void 0 ? void 0 : _this$pages2$this$cur2.backdrop_path) !== null && _this$pages$this$curr3 !== void 0 ? _this$pages$this$curr3 : '');
    }
    getCurrentIcon() {
      return this.tag('Row').children[this.currItemIDX];
    }
    _getFocused() {
      return this.getCurrentIcon();
    }
    _handleLeft() {
      let prevPage = this.currPageIDX;
      this.currItemIDX;
      const {
        currItemIDX,
        currPageIDX
      } = this.decrementItemIDX(this.currItemIDX, this.currPageIDX, this.pages);
      this.currItemIDX = currItemIDX;
      this.currPageIDX = currPageIDX;
      if (prevPage != this.currPageIdx) {
        const movieCardsList = this.handleCreateCurrPageOfMovieList();
        this.handlePatchResultsMoviesList(movieCardsList);
      }
      this.signal('handleChangeSynopsis', this.pages[this.currPageIDX][this.currItemIDX]);
      this.signal('handleChangeBackgroundImage', this.pages[this.currPageIDX][this.currItemIDX].backdrop_path);
    }
    _handleRight() {
      let currPage = this.currPageIDX;
      const {
        currItemIDX,
        currPageIDX
      } = this.incrementItemIDX(this.currItemIDX, this.currPageIDX, this.pages);
      this.currItemIDX = currItemIDX;
      this.currPageIDX = currPageIDX;
      if (currPage != this.currPageIdx) {
        const movieCardsList = this.handleCreateCurrPageOfMovieList();
        this.handlePatchResultsMoviesList(movieCardsList);
      }
      this.signal('handleChangeSynopsis', this.pages[this.currPageIDX][this.currItemIDX]);
      this.signal('handleChangeBackgroundImage', this.pages[this.currPageIDX][this.currItemIDX].backdrop_path);
    }
    decrementItemIDX(currItemIDX, currPageIDX, pages) {
      const finalPageIDX = pages.length - 1;
      const finalPageFinalItemIDX = pages[finalPageIDX].length - 1;
      const isFirstItem = currItemIDX == 0;
      const isFirstPage = currPageIDX == 0;
      const prevItemIDX = currItemIDX - 1;
      const prevPageIDX = currPageIDX == 0 ? finalPageIDX : currPageIDX - 1;
      const prevPageFinalItemIDX = pages[prevPageIDX].length - 1;
      if (isFirstItem && isFirstPage) {
        return {
          currItemIDX: finalPageFinalItemIDX,
          currPageIDX: finalPageIDX
        };
      }
      if (isFirstItem) {
        return {
          currItemIDX: prevPageFinalItemIDX,
          currPageIDX: prevPageIDX
        };
      }
      return {
        currItemIDX: prevItemIDX,
        currPageIDX: currPageIDX
      };
    }
    incrementItemIDX(currItemIDX, currPageIDX, pages) {
      const isFinalItem = currItemIDX === pages[currPageIDX].length - 1;
      const isFinalPage = currPageIDX === pages.length - 1;
      const nextItemIDX = currItemIDX + 1;
      const nextPageIDX = currPageIDX + 1;
      if (isFinalItem && isFinalPage) {
        return {
          currItemIDX: 0,
          currPageIDX: 0
        };
      }
      if (isFinalItem) {
        return {
          currItemIDX: 0,
          currPageIDX: nextPageIDX
        };
      }
      return {
        currItemIDX: nextItemIDX,
        currPageIDX: currPageIDX
      };
    }
    handleCreateListChunks(chunkSize) {
      let movieData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      for (let i = 0; i < movieData.length; i += chunkSize) {
        const chunk = movieData.slice(i, i + chunkSize);
        this.pages.push(chunk);
      }
    }
    handleCreateCurrPageOfMovieList() {
      var _this$pages3, _this$pages3$this$cur;
      return (_this$pages3 = this.pages) === null || _this$pages3 === void 0 ? void 0 : (_this$pages3$this$cur = _this$pages3[this.currPageIDX]) === null || _this$pages3$this$cur === void 0 ? void 0 : _this$pages3$this$cur.map(movie => ({
        flexItem: {
          minWidth: 300
        },
        type: MovieCardLarge,
        animationDemoActive: {
          duration: .3,
          actions: [{
            p: 'shader.strokeColor',
            v: {
              1: 0xffffffff,
              0: 0xff000000
            }
          }, {
            p: 'scale',
            v: {
              0: 1,
              1: 1.2
            }
          }, {
            p: 'y',
            v: {
              0: 0,
              1: 100
            }
          }]
        },
        animationDemoInactive: {
          duration: .3,
          actions: [{
            p: 'shader.strokeColor',
            v: {
              0: 0xffffffff,
              1: 0xff000000
            }
          }, {
            p: 'scale',
            v: {
              1: 1,
              0: 1.2
            }
          }, {
            p: 'y',
            v: {
              1: 0,
              0: 100
            }
          }]
        },
        movie,
        testValue: 'testvaluestring'
      }));
    }
    handlePatchResultsMoviesList(movieCardsList) {
      this.tag('Row').patch({
        flex: {
          direction: 'row',
          justifyContent: 'center',
          wrap: true,
          h: 1080,
          w: 1920,
          gap: 200
        },
        //  src: this.pages[this.currPageIDX][this.currItemIDX],
        children: movieCardsList
      });
    }
  }

  class HomePage extends Lightning$1.Component {
    static _template() {
      return {
        w: 1920,
        h: 1080,
        //  alpha: .1,
        Background: {
          w: 1920,
          h: 1080
        },
        Results: {},
        CurrentTitle: {
          x: 540,
          y: 960,
          text: 'Title Holder',
          fontFace: "Regular",
          fontSize: 64,
          textColor: 0xfffdebca
        },
        Synopsis_Shortened: {}
      };
    }
    async _init() {
      this.currIDX = 0;
      this.favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
      let movieData = await getUpcomingMovies();
      this.setInitPaginatedMovieRow(movieData.results);
    }
    _getFocused() {
      return this.tag('Results').children[0];
    }
    _handleUp() {
      Router.focusWidget('Menu');
    }
    setInitPaginatedMovieRow(movieData) {
      this.tag('Results').patch({
        children: [{
          type: PaginatedMoviesRow,
          movieData,
          signals: {
            handleChangeSynopsis: true,
            handleChangeBackgroundImage: true
          }
        }]
      });
    }
    handleChangeSynopsis(currentMovie) {
      var _this$favoriteMovies, _this$favoriteMovies$;
      this.tag('Synopsis_Shortened').patch({
        children: [{
          type: Synopsis_Shortened,
          movie: currentMovie,
          isfavorite: !!(this !== null && this !== void 0 && (_this$favoriteMovies = this.favoriteMovies) !== null && _this$favoriteMovies !== void 0 && (_this$favoriteMovies$ = _this$favoriteMovies.filter(movie => (movie === null || movie === void 0 ? void 0 : movie.id) == (currentMovie === null || currentMovie === void 0 ? void 0 : currentMovie.id))) !== null && _this$favoriteMovies$ !== void 0 && _this$favoriteMovies$.length)
        }]
      });
    }
    handleChangeBackgroundImage(backdrop_path) {
      this.tag('Background').patch({
        src: "https://image.tmdb.org/t/p/w500/".concat(backdrop_path),
        alpha: .51
      });
    }
    pageTransition() {
      return 'fade';
    }
  }

  class SimilarMovies extends Lightning$1.Component {
    static _template() {
      return {
        SimilarMoviesGrid: {
          flex: {
            direction: "column",
            justifyContent: 'center',
            wrap: true
          },
          y: 0,
          h: 1080,
          w: 1920
        }
      };
    }
    _init() {
      this.currItemIDX = 0;
    }
    set similarToMovie(data) {
      this._similarToMovie = data;
      this.handleSetSimilarMovies(this._similarToMovie.id);
    }

    // focus and events
    getCurrentIcon() {
      return this.tag('SimilarMoviesGrid').children[this.currItemIDX];
    }
    _getFocused() {
      return this.getCurrentIcon();
    }
    _handleLeft() {
      this.currItemIDX > 0 ? this.currItemIDX-- : this.currItemIDX = this.tag('SimilarMoviesGrid').children.length;
    }
    _handleRight() {
      this.currItemIDX < this.tag('SimilarMoviesGrid').children.length ? this.currItemIDX++ : this.currItemIDX = 0;
    }
    async handleSetSimilarMovies(movieID) {
      let similarMovies;
      if (movieID === 0) {
        similarMovies = await getUpcomingMovies();
      } else {
        similarMovies = await getSimilarMoviesByMovieID(movieID);
      }
      const movieCardsList = similarMovies.results.map((movie, idx) => ({
        flexItem: {
          minWidth: 220,
          minHeight: 320
        },
        type: MovieCard,
        movie,
        testValue: 'testvaluestring',
        shader: idx == this.currItemIDX ? {
          type: Lightning$1.shaders.RoundedRectangle,
          radius: 15
        } : {}
      }));
      this.tag('SimilarMoviesGrid').patch({
        h: 1080,
        w: 1920,
        flex: {
          direction: "column",
          justifyContent: 'center',
          wrap: true
        },
        children: movieCardsList
      });
    }
    historyState() {
      return {
        // movie: this.movie,
        similarToMovie: this._similarToMovie,
        movieID: this.movieID,
        movieDetailsMovie: this._similarToMovie
        // focusIndex: 12,
        // someVal: Math.random()
      };
    }

    pageTransition() {
      return 'up';
    }
  }

  class MovieInfoBox extends Lightning$1.Component {
    static _template() {
      // return {
      //     CardContentHorizontalLargeComponent: {
      //         type: CardContentHorizontalLarge, w: 1920 / 2, h: 1080 / 4,
      //         src: "",//tileImage,
      //         shouldCollapse: false,//args?.shouldCollapse,
      //         collapseToMetadata: false,//args?.collapseToMetadata,
      //         metadata: {
      //             details: '', title: '', description: '',
      //             provider: {
      //                 providers: [
      //                     {
      //                         type: Icon,
      //                         w: 96,
      //                         h: 48,
      //                         icon: null //xfinityLogo
      //                     }
      //                 ],
      //                 visibleCount: 3
      //             }
      //         }
      //     }
      // };

      return {
        x: 100,
        y: 100,
        w: 1920 / 2,
        h: 880,
        rect: true,
        color: 0xdd000000,
        flex: {
          direction: 'column',
          justifyContent: 'space-between',
          alignItems: 'stretch'
        },
        Top: {
          h: h => h / 2,
          flexItem: {
            width: 1920 / 2
          },
          flex: {
            direction: 'row',
            justifyContent: "space-evenly"
          },
          Metadata: {
            y: 30,
            flexItem: {
              width: 1920 / 4
            },
            flex: {
              direction: 'column',
              justifyContent: "flex-start"
            },
            Title: {
              text: {
                text: ''
              }
            },
            MetadataBTM: {
              flex: {
                direction: 'row'
              },
              ReleaseDate: {
                text: {
                  fontSize: 24,
                  text: ''
                }
              },
              Language: {
                text: {
                  fontSize: 24,
                  text: ''
                }
              }
            },
            BTNS: {
              flex: {
                direction: 'row'
              },
              AddToFavBtn: {
                type: Button,
                label: ''
              },
              SimilarMoviesBTN: {
                type: Button,
                label: 'view similar movies'
              }
            }
          },
          Poster: {
            rect: true,
            y: 30,
            w: 200 * 1.5,
            h: 300 * 1.5 - 40
          }
        },
        Bottom: {
          rect: true,
          color: 0xaa010101,
          h: h => h / 2,
          flexItem: {
            width: 1920 / 2 - 30
          },
          flex: {
            direction: 'row',
            justifyContent: "space-evenly"
          },
          BottomCol: {
            flex: {
              direction: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'stretch'
            },
            RatingAndStars: {
              Stars: {
                text: {
                  text: ''
                }
              }
            },
            Overview: {
              w: 1920 / 2 - 60,
              text: {
                wordWrap: true,
                wordWrapWidth: 1920 / 2 - 60,
                fontSize: 32,
                text: ''
              }
            }
          }
        }
      };
    }

    //   updatePosterImage(poster_path) {
    //     let newPoster;//movies/static/"images/logo.png"
    //     if (poster_path === "images/logo.png") {
    //       newPoster = Utils.asset("images/logo.png");
    //     } else {
    //       newPoster = `https://image.tmdb.org/t/p/w200/${poster_path}`
    //     }
    //     this.tag('Top.Poster').src = newPoster;
    //   }

    updatePosterImage(poster_path) {
      console.log({
        poster_path
      });
      let newPoster;
      if (poster_path === "images/logo.png") {
        newPoster = Utils.asset("images/logo.png");
      } else {
        newPoster = "https://image.tmdb.org/t/p/w200/".concat(poster_path);
      }
      this.tag('Top.Poster').src = newPoster;
    }
    _init() {
      this.tag('Top.Metadata.Title').text.text = this.movieInfoBox.title;
      this.tag('Bottom.RatingAndStars.Stars').text.text = this.movieInfoBox.vote_average + '⭐' + " out of " + this.movieInfoBox.vote_count + " votes";
      this.tag('Overview').text.text = this.movieInfoBox.overview;
      this.tag('Top.Metadata.MetadataBTM.Language').text.text = " | " + this.movieInfoBox.original_language;
      this.tag('Top.Metadata.MetadataBTM.ReleaseDate').text.text = "released: " + this.movieInfoBox.release_date;
      // this.tag('Top.Poster').src = `https://image.tmdb.org/t/p/w500/${this.movieInfoBox.poster_path}`;
      this.updatePosterImage(this.movieInfoBox.poster_path);

      // this.tag('CardContentHorizontalLargeComponent').src = `https://image.tmdb.org/t/p/w500/${this.movieInfoBox.poster_path}`;
      // this.tag('CardContentHorizontalLargeComponent').metadata.title = this.movieInfoBox.title;
      // this.tag('CardContentHorizontalLargeComponent').metadata.details = this.movieInfoBox.release_date+ " | " + this.movieInfoBox.original_language+  this.movieInfoBox.vote_average + '⭐' + " out of " + this.movieInfoBox.vote_count + " votes";
      // this.tag('CardContentHorizontalLargeComponent').metadata.description = this.movieInfoBox.overview;
    }

    updateBackgroundImage(backdrop_path) {
      let newBackDrop;
      if (backdrop_path === "images/background.png") {
        newBackDrop = Utils.asset(backdrop_path);
      } else {
        newBackDrop = "https://image.tmdb.org/t/p/w500/".concat(backdrop_path);
      }
      this.tag('Container.Background').src = newBackDrop;
    }
    updateBackgroundTitle(movieTitle) {
      this.tag('Top.Metadata.Title').text.text = movieTitle;
    }
  }

  // import {  } from '../components/layout/Button'
  class MovieDetailsPage extends Lightning$1.Component {
    static _template() {
      return {
        Container: {
          w: 1920,
          h: 1080,
          rect: true,
          src: '',
          Background: {
            w: 1920,
            h: 1080,
            rect: true,
            src: ''
          },
          MovieInfoBox: {}
        }
      };
    }
    _init() {
      this.currIDX = 0;
    }
    set params(data) {
      var _data$movieDetailsMov, _this$historyState;
      this.movieDetailsMovie = (_data$movieDetailsMov = data === null || data === void 0 ? void 0 : data.movieDetailsMovie) !== null && _data$movieDetailsMov !== void 0 ? _data$movieDetailsMov : (_this$historyState = this.historyState()) === null || _this$historyState === void 0 ? void 0 : _this$historyState.movieDetailsMovie;
      this.updateBackgroundImage(this.movieDetailsMovie.backdrop_path);
      this.updateMovieInfoBox(this.movieDetailsMovie);
      const isFav = this.checkIsFav(this.movieDetailsMovie.id);
      this.handleFavoriteButton_setText(isFav);
    }
    // focus and events
    // _getMovieInfoBoxBtns() { return this.tag('MovieInfoBox').children[0].children[0].children[0].children[2].children[0]; }

    _getFocused() {
      return this.tag('MovieInfoBox').children[0].children[0].children[0].children[2].children[this.currIDX];
    }
    _handleUp() {
      Router.focusWidget('Menu');
      //this.historyState
    }

    _handleLeft() {
      this.currIDX == 0 ? this.currIDX = 1 : this.currIDX--;
    }
    _handleRight() {
      this.currIDX == 1 ? this.currIDX = 0 : this.currIDX++;
    }
    _handleEnter() {
      this.currIDX == 0 ? this.handleFavoriteButton_Toggle() : this.handleNavigateToSimilarMovies();
    }
    checkIsFav(movieID) {
      var _storedFavs$filter;
      const storedFavs = JSON.parse(localStorage.getItem("favoriteMovies"));
      const isFav = !!(storedFavs !== null && storedFavs !== void 0 && (_storedFavs$filter = storedFavs.filter(movie => (movie === null || movie === void 0 ? void 0 : movie.id) == movieID)) !== null && _storedFavs$filter !== void 0 && _storedFavs$filter.length);
      return isFav;
    }
    handleFavoriteButton_Toggle() {
      const isFav = this.checkIsFav(this.movieDetailsMovie.id);
      this.handleFavoriteButton_setText(!isFav);
      isFav ? this.handleFavoritesList_RemoveMovie(this.movieDetailsMovie.id) : this.handleFavoritesList_AddMovie(this.movieDetailsMovie);
    }
    handleFavoriteButton_setText(newFav) {
      this.tag('MovieInfoBox').children[0].children[0].children[0].children[2].children[0].patch({
        label: newFav ? 'remove favorite' : 'add favorite'
      });
    }
    async handleFavoritesList_CreateList(_ref) {
      localStorage.setItem('favoriteMovies', []);
      // return await favoritesList_CreateList({ name, description, language })
    }

    async handleFavoritesList_GetList(listID) {
      return localStorage.getItem('favoriteMovies');
      // return await favoritesList_GetList(listID)
    }

    async handleFavoritesList_AddMovie(movie) {
      let updatedFavMovies = [...JSON.parse(localStorage.getItem('favoriteMovies')), movie];
      // updatedFavMovies.push(movie)
      localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavMovies));
      // return await favoritesList_AddMovie(listID, movieID)
    }

    async handleFavoritesList_RemoveMovie(movieID) {
      let favMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
      let updatedFavMovies = favMovies === null || favMovies === void 0 ? void 0 : favMovies.filter(movie => movie.id !== movieID);
      if (updatedFavMovies.length === 0) {
        updatedFavMovies = [{
          "adult": false,
          "backdrop_path": "images/background.png",
          "genre_ids": [16, 12, 10751, 14, 35],
          "id": 0,
          "original_language": "en",
          "original_title": "Favorite Movie Title",
          "overview": "Add movies to the favorites list using the add to favorites button on Movie Details Screen.",
          "popularity": 12929.143,
          "poster_path": "images/logo.png",
          "release_date": "2023-04-05",
          "title": "Favorite Movie Title",
          "video": false,
          "vote_average": 10,
          "vote_count": 896
        }];
      }
      localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavMovies));
      // return await favoritesList_RemoveMovie(listID, movieID)
    }

    async handleFavoritesList_LoadFromStorage() {
      // let favoritesListID;

      // const storageDOTget = Storage.get("favoritesListID");
      // // console.log({ favoritesListID, storageDOTget })
      // if (favoritesListID == null) {
      //     // const { name, description, language }     
      //     // favoritesListID = await this.handleFavoritesList_CreateList({ "name": 'movieDBFavList', "description": "movieDBfavoristsList", "language": "en" });
      //     favoritesListID = process.env.APP_MOVIEDB_FAVLISTID
      //     // console.log({ favoritesListID })
      //     Storage.set("favoritesListID", favoritesListID);
      // }
      // const favoritesList = await this.handleFavoritesList_GetList(favoritesListID);
      // return favoritesList
    }

    // ui template updates

    updateBackgroundImage(backdrop_path) {
      let newBackDrop;
      if (backdrop_path === "images/background.png") {
        newBackDrop = Utils.asset(backdrop_path);
      } else {
        newBackDrop = "https://image.tmdb.org/t/p/w500/".concat(backdrop_path);
      }
      this.tag('Container.Background').src = newBackDrop;
    }
    updateMovieInfoBox(movieInfoBox) {
      this.tag('Container.MovieInfoBox').patch({
        children: [{
          type: MovieInfoBox,
          movieInfoBox
        }]
      });
    }
    setSimilarMovies(movieID) {
      this.tag("SimilarMovies").patch({
        children: [{
          type: SimilarMovies,
          movieID,
          similarToMovie: this.movieDetailsMovie,
          movieDetailsMovie: this.movieDetailsMovie
        }]
      });
    }
    handleNavigateToSimilarMovies() {
      Router.navigate("similarmovies/".concat(this.movieDetailsMovie.title.split(" ").join('').split(':').join('_')), {
        message: 'hello simlar movies from moviedetails!',
        similarToMovie: this.movieDetailsMovie
      });
    }
    historyState() {
      return {
        movieDetailsMovie: this.movieDetailsMovie,
        similarToMovie: this.movieDetailsMovie
      };
    }
    pageTransition() {
      return 'fade';
    }
  }

  class SimilarMoviesPage extends Lightning$1.Component {
    static _template() {
      return {
        SimilarMovies: {},
        text: {
          text: 'Simliar Movies Page'
        },
        w: 1920,
        h: 1080,
        x: 0,
        y: 0,
        rect: true,
        src: ''
      };
    }
    _init() {
      this.currItemIDX = 0;
    }
    set params(data) {
      var _data$similarToMovie, _this$historyState;
      this.similarToMovie = (_data$similarToMovie = data === null || data === void 0 ? void 0 : data.similarToMovie) !== null && _data$similarToMovie !== void 0 ? _data$similarToMovie : (_this$historyState = this.historyState()) === null || _this$historyState === void 0 ? void 0 : _this$historyState.similarToMovie;
      // this.updateBackgroundImage(this.similarToMovie.backdrop_path)
      this.setSimilarMovies(this.similarToMovie.id);
    }

    // focus and events
    getCurrentIcon() {
      return this.tag('SimilarMovies').children[this.currItemIDX];
    }
    _getFocused() {
      return this.getCurrentIcon();
    }
    _handleLeft() {
      this.currItemIDX > 0;
      this.currItemIDX--;
      this.currItemIDX = this.tag('SimilarMovies').children.length;
    }
    _handleRight() {
      this.currItemIDX < this.tag('SimilarMovies').children.length ? this.currItemIDX++ : this.currItemIDX = 0;
    }
    _handleUp() {
      Router.focusWidget('Menu');
      //this.historyState
    }

    //  ui and template updates 

    // updateBackgroundImage(backdrop_path) {
    //     let newBackDrop;
    //     if (backdrop_path === "images/background.png") {
    //         newBackDrop = Utils.asset(backdrop_path);
    //     } else {
    //         newBackDrop = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    //     }
    //     this.tag('Background').src = newBackDrop;
    //     this.tag('SimilarMovies').src = newBackDrop;
    // } 

    updateBackgroundTitle(movieTitle) {}
    setSimilarMovies(movieID) {
      this.tag('SimilarMovies').patch({
        children: [{
          type: SimilarMovies,
          movieID,
          similarToMovie: this.similarToMovie
          //  movieDetailsMovie: this.similarToMovie
        }]
      });
    }

    historyState() {
      return {
        // movie: this.movie,
        similarToMovie: this.similarToMovie,
        movieDetailsMovie: this.similarToMovie
        // focusIndex: 12,
        // someVal: Math.random()
      };
    }
    // routing
    pageTransition() {
      return 'fade';
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class CollectionWrapper extends Lightning$1.Component {
    static _template() {
      return {
        Wrapper: {}
      };
    }
    _construct() {
      this._direction = CollectionWrapper.DIRECTION.row;
      this._scrollTransitionSettings = this.stage.transitions.createSettings({});
      this._spacing = 0;
      this._autoResize = false;
      this._requestingItems = false;
      this._requestThreshold = 1;
      this._requestsEnabled = false;
      this._gcThreshold = 5;
      this._gcIncrement = 0;
      this._forceLoad = false;
      this.clear();
    }
    _setup() {
      this._updateScrollTransition();
    }
    _updateScrollTransition() {
      const axis = this._direction === 1 ? 'y' : 'x';
      this.wrapper.transition(axis, this._scrollTransitionSettings);
      this._scrollTransition = this.wrapper.transition(axis);
    }
    _indexChanged(obj) {
      let {
        previousIndex: previous,
        index: target,
        dataLength: max,
        mainIndex,
        previousMainIndex,
        lines
      } = obj;
      if (!isNaN(previousMainIndex) && !isNaN(mainIndex) && !isNaN(lines)) {
        previous = previousMainIndex;
        target = mainIndex;
        max = lines;
      }
      if (this._requestsEnabled && !this._requestingItems) {
        if (target + this._requestThreshold >= max) {
          this.requestItems(false, obj);
        }
      }
      this._refocus();
      this.scrollCollectionWrapper(obj);
      if (obj.previousIndex !== obj.index) {
        this.signal('onIndexChanged', obj);
      }
    }
    requestItems() {
      let reload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      let obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (obj === undefined) {
        obj = {
          previous: 0,
          index: 0,
          max: 0
        };
      }
      this._requestingItems = true;
      this.signal('onRequestItems', obj).then(response => {
        if (response === false) {
          this.enableRequests = false;
        }
        this._requestingItems = false;
        if (reload) {
          this.clear();
        }
        const type = typeof response;
        if (Array.isArray(response) || type === 'object' || type === 'string' || type === 'number') {
          this.add(response);
        }
      });
    }
    setIndex(index) {
      const targetIndex = limitWithinRange(index, 0, this._items.length - 1);
      const previousIndex = this._index;
      this._index = targetIndex;
      this._indexChanged({
        previousIndex,
        index: targetIndex,
        dataLength: this._items.length
      });
      return previousIndex !== targetIndex;
    }
    clear() {
      this._uids = [];
      this._items = [];
      this._index = 0;
      if (this._scrollTransition) {
        this._scrollTransition.reset(0, 1);
      }
      if (this.wrapper) {
        const hadChildren = this.wrapper.children > 0;
        this.wrapper.patch({
          x: 0,
          y: 0,
          children: []
        });
        if (hadChildren) {
          this._collectGarbage(true);
        }
      }
    }
    add(item) {
      this.addAt(item);
    }
    addAt(item) {
      let index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._items.length;
      if (index >= 0 && index <= this._items.length) {
        if (!Array.isArray(item)) {
          item = [item];
        }
        const items = this._normalizeDataItems(item);
        this._items.splice(index, 0, ...items);
        this.plotItems();
        this.setIndex(this._index);
      } else {
        throw new Error('addAt: The index ' + index + ' is out of bounds ' + this._items.length);
      }
    }
    remove(target) {
      if (this.hasItems && target.assignedID) {
        const itemWrappers = this.itemWrappers;
        for (let i = 0; i < this._items.length; i++) {
          let item = this._items[i];
          if (itemWrappers[i] && itemWrappers[i].component.isAlive) {
            item = itemWrappers[i].component;
          }
          if (target.assignedID === item.assignedID) {
            return this.removeAt(i);
          }
        }
      } else {
        throw new Error('remove: item not found');
      }
    }
    removeAt(index) {
      let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (index < 0 && index >= this._items.length) {
        throw new Error('removeAt: The index ' + index + ' is out of bounds ' + this._items.length);
      }
      const item = this._items[index];
      this._items.splice(index, amount);
      this.plotItems();
      return item;
    }
    reload(item) {
      this.clear();
      this.add(item);
    }
    plotItems(items, options) {
      //placeholder
    }
    reposition() {
      let time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 70;
      if (this._repositionDebounce) {
        clearTimeout(this._repositionDebounce);
      }
      this._repositionDebounce = setTimeout(() => {
        this.repositionItems();
      }, time);
    }
    repositionItems() {
      //placeHolder
      this.signal('onItemsRepositioned');
    }
    up() {
      return this._attemptNavigation(-1, 1);
    }
    down() {
      return this._attemptNavigation(1, 1);
    }
    left() {
      return this._attemptNavigation(-1, 0);
    }
    right() {
      return this._attemptNavigation(1, 0);
    }
    first() {
      return this.setIndex(0);
    }
    last() {
      return this.setIndex(this._items.length - 1);
    }
    next() {
      return this.setIndex(this._index + 1);
    }
    previous() {
      return this.setIndex(this._index - 1);
    }
    _attemptNavigation(shift, direction) {
      if (this.hasItems) {
        return this.navigate(shift, direction);
      }
      return false;
    }
    navigate(shift) {
      let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._direction;
      if (direction !== this._direction) {
        return false;
      }
      return this.setIndex(this._index + shift);
    }
    scrollCollectionWrapper(obj) {
      let {
        previousIndex: previous,
        index: target,
        dataLength: max,
        mainIndex,
        previousMainIndex,
        lines
      } = obj;
      if (!isNaN(previousMainIndex) && !isNaN(mainIndex) && !isNaN(lines)) {
        previous = previousMainIndex;
        target = mainIndex;
        max = lines;
      }
      const {
        directionIsRow,
        main,
        mainDim,
        mainMarginFrom,
        mainMarginTo
      } = this._getPlotProperties(this._direction);
      const cw = this.currentItemWrapper;
      let bound = this[mainDim];
      if (bound === 0) {
        bound = directionIsRow ? 1920 : 1080;
      }
      const offset = Math.min(this.wrapper[main], this._scrollTransition && this._scrollTransition.targetValue || 0);
      const sizes = this._getItemSizes(cw);
      const marginFrom = sizes[mainMarginFrom] || sizes.margin || 0;
      const marginTo = sizes[mainMarginTo] || sizes.margin || 0;
      let scroll = this._scroll;
      if (!isNaN(scroll)) {
        if (scroll >= 0 && scroll <= 1) {
          scroll = bound * scroll - (cw[main] + cw[mainDim] * scroll);
        } else {
          scroll = scroll - cw[main];
        }
      } else if (typeof scroll === 'function') {
        scroll = scroll.apply(this, [cw, obj]);
      } else if (typeof scroll === 'object') {
        const {
          jump = false,
          after = false,
          backward = 0.0,
          forward = 1.0
        } = scroll;
        if (jump) {
          let mod = target % jump;
          if (mod === 0) {
            scroll = marginFrom - cw[main];
          }
          if (mod === jump - 1) {
            const actualSize = marginFrom + cw[mainDim] + marginTo;
            scroll = mod * actualSize + marginFrom - cw[main];
          }
        } else if (after) {
          scroll = 0;
          if (target >= after - 1) {
            const actualSize = marginFrom + cw[mainDim] + marginTo;
            scroll = (after - 1) * actualSize + marginFrom - cw[main];
          }
        } else {
          const backwardBound = bound * this._normalizePixelToPercentage(backward, bound);
          const forwardBound = bound * this._normalizePixelToPercentage(forward, bound);
          if (target < max - 1 && previous < target && offset + cw[main] + cw[mainDim] > forwardBound) {
            scroll = forwardBound - (cw[main] + cw[mainDim]);
          } else if (target > 0 && target < previous && offset + cw[main] < backwardBound) {
            scroll = backwardBound - cw[main];
          } else if (target === max - 1) {
            scroll = bound - (cw[main] + cw[mainDim]);
          } else if (target === 0) {
            scroll = marginFrom - cw[main];
          }
        }
      } else if (isNaN(scroll)) {
        if (previous < target && offset + cw[main] + cw[mainDim] > bound) {
          scroll = bound - (cw[main] + cw[mainDim]);
        } else if (target < previous && offset + cw[main] < 0) {
          scroll = marginFrom - cw[main];
        }
      }
      if (this.active && !isNaN(scroll) && this._scrollTransition) {
        if (this._scrollTransition.isRunning()) {
          this._scrollTransition.reset(scroll, 0.05);
        } else {
          this._scrollTransition.start(scroll);
        }
      } else if (!isNaN(scroll)) {
        this.wrapper[main] = scroll;
      }
    }
    $childInactive(_ref) {
      let {
        child
      } = _ref;
      if (typeof child === 'object') {
        const index = child.componentIndex;
        for (let key in this._items[index]) {
          if (child.component[key] !== undefined) {
            this._items[index][key] = child.component[key];
          }
        }
      }
      this._collectGarbage();
    }
    $getChildComponent(_ref2) {
      let {
        index
      } = _ref2;
      return this._items[index];
    }
    _resizeWrapper(crossSize) {
      let obj = crossSize;
      if (!isNaN(crossSize)) {
        const {
          main,
          mainDim,
          crossDim
        } = this._getPlotProperties(this._direction);
        const lastItem = this.wrapper.childList.last;
        obj = {
          [mainDim]: lastItem[main] + lastItem[mainDim],
          [crossDim]: crossSize
        };
      }
      this.wrapper.patch(obj);
      if (this._autoResize) {
        this.patch(obj);
      }
    }
    _generateUniqueID() {
      let id = '';
      while (this._uids[id] || id === '') {
        id = Math.random().toString(36).substr(2, 9);
      }
      this._uids[id] = true;
      return id;
    }
    _getPlotProperties(direction) {
      const directionIsRow = direction === 0;
      return {
        directionIsRow: directionIsRow ? true : false,
        mainDirection: directionIsRow ? 'rows' : 'columns',
        main: directionIsRow ? 'x' : 'y',
        mainDim: directionIsRow ? 'w' : 'h',
        mainMarginTo: directionIsRow ? 'marginRight' : 'marginBottom',
        mainMarginFrom: directionIsRow ? 'marginLeft' : 'marginTop',
        crossDirection: !directionIsRow ? 'columns' : 'rows',
        cross: directionIsRow ? 'y' : 'x',
        crossDim: directionIsRow ? 'h' : 'w',
        crossMarginTo: directionIsRow ? 'marginBottom' : 'marginRight',
        crossMarginFrom: directionIsRow ? 'marginTop' : 'marginLeft'
      };
    }
    _getItemSizes(item) {
      const itemType = item.type;
      if (item.component && item.component.__attached) {
        item = item.component;
      }
      return {
        w: item.w || itemType && itemType['width'],
        h: item.h || itemType && itemType['height'],
        margin: item.margin || itemType && itemType['margin'] || 0,
        marginLeft: item.marginLeft || itemType && itemType['marginLeft'],
        marginRight: item.marginRight || itemType && itemType['marginRight'],
        marginTop: item.marginTop || itemType && itemType['marginTop'],
        marginBottom: item.marginBottom || itemType && itemType['marginBottom']
      };
    }
    _collectGarbage(immediate) {
      this._gcIncrement++;
      if (immediate || this.active && this._gcThreshold !== 0 && this._gcIncrement >= this._gcThreshold) {
        this._gcIncrement = 0;
        this.stage.gc();
      }
    }
    _normalizeDataItems(array) {
      return array.map((item, index) => {
        return this._normalizeDataItem(item) || index;
      }).filter(item => {
        if (!isNaN(item)) {
          console.warn("Item at index: ".concat(item, ", is not a valid item. Removing it from dataset"));
          return false;
        }
        return true;
      });
    }
    _normalizeDataItem(item, index) {
      if (typeof item === 'string' || typeof item === 'number') {
        item = {
          label: item.toString()
        };
      }
      if (typeof item === 'object') {
        let id = this._generateUniqueID();
        return {
          assignedID: id,
          type: this.itemType,
          collectionWrapper: this,
          isAlive: false,
          ...item
        };
      }
      return index;
    }
    _normalizePixelToPercentage(value, max) {
      if (value && value > 1) {
        return value / max;
      }
      return value || 0;
    }
    _getFocused() {
      if (this.hasItems) {
        return this.currentItemWrapper;
      }
      return this;
    }
    _handleRight() {
      return this.right();
    }
    _handleLeft() {
      return this.left();
    }
    _handleUp() {
      return this.up();
    }
    _handleDown() {
      return this.down();
    }
    _inactive() {
      if (this._repositionDebounce) {
        clearTimeout(this._repositionDebounce);
      }
      this._collectGarbage(true);
    }
    static get itemType() {
      return undefined;
    }
    set forceLoad(bool) {
      this._forceLoad = bool;
    }
    get forceLoad() {
      return this._forceLoad;
    }
    get requestingItems() {
      return this._requestingItems;
    }
    set requestThreshold(num) {
      this._requestThreshold = num;
    }
    get requestThreshold() {
      return this._requestThreshold;
    }
    set enableRequests(bool) {
      this._requestsEnabled = bool;
    }
    get enableRequests() {
      return this._requestsEnabled;
    }
    set gcThreshold(num) {
      this._gcThreshold = num;
    }
    get gcThreshold() {
      return this._gcThreshold;
    }
    get wrapper() {
      return this.tag('Wrapper');
    }
    get hasItems() {
      return this.wrapper && this.wrapper.children && this.wrapper.children.length > 0;
    }
    get currentItemWrapper() {
      return this.wrapper.children[this._index];
    }
    get currentItem() {
      return this.currentItemWrapper && this.currentItemWrapper.component || undefined;
    }
    set direction(string) {
      this._direction = CollectionWrapper.DIRECTION[string] || CollectionWrapper.DIRECTION.row;
    }
    get direction() {
      return Object.keys(CollectionWrapper.DIRECTION)[this._direction];
    }
    set items(array) {
      this.clear();
      this.add(array);
    }
    get items() {
      const itemWrappers = this.itemWrappers;
      return this._items.map((item, index) => {
        if (itemWrappers[index] && itemWrappers[index].component.isAlive) {
          return itemWrappers[index].component;
        }
        return item;
      });
    }
    get length() {
      return this._items.length;
    }
    set index(index) {
      this.setIndex(index);
    }
    get itemWrappers() {
      return this.wrapper.children;
    }
    get index() {
      return this._index;
    }
    set scrollTransition(obj) {
      this._scrollTransitionSettings.patch(obj);
      if (this.active) {
        this._updateScrollTransition();
      }
    }
    get scrollTransition() {
      return this._scrollTransition;
    }
    set scroll(value) {
      this._scroll = value;
    }
    get scroll() {
      return this._scroll;
    }
    set autoResize(bool) {
      this._autoResize = bool;
    }
    get autoResize() {
      return this._autoResize;
    }
    set spacing(num) {
      this._spacing = num;
    }
    get spacing() {
      return this._spacing;
    }
  }
  CollectionWrapper.DIRECTION = {
    row: 0,
    column: 1
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Cursor extends Lightning$1.Component {
    static _template() {
      return {
        alpha: 0
      };
    }
    _construct() {
      this._blink = true;
    }
    _init() {
      this._blinkAnimation = this.animation({
        duration: 1,
        repeat: -1,
        actions: [{
          p: 'alpha',
          v: {
            0: 0,
            0.5: 1,
            1: 0
          }
        }]
      });
    }
    show() {
      if (this._blink) {
        this._blinkAnimation.start();
      } else {
        this.alpha = 1;
      }
    }
    hide() {
      if (this._blink) {
        this._blinkAnimation.stop();
      } else {
        this.alpha = 0;
      }
    }
    set blink(bool) {
      this._blink = bool;
      if (this.active) {
        if (bool) {
          this.show();
        } else {
          this.hide();
        }
      }
    }
    get blink() {
      return this._blink;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ItemWrapper extends Lightning$1.Component {
    static _template() {
      return {
        clipbox: true
      };
    }
    create() {
      if (this.children.length > 0) {
        return;
      }
      const component = this.fireAncestors('$getChildComponent', {
        index: this.componentIndex
      });
      component.isAlive = true;
      const {
        w,
        h,
        margin,
        marginTop,
        marginBottom,
        marginRight,
        marginLeft
      } = this;
      this.children = [{
        ...component,
        w,
        h,
        margin,
        marginTop,
        marginRight,
        marginLeft,
        marginBottom
      }];
      if (this.hasFocus()) {
        this._refocus();
      }
    }
    get component() {
      return this.children[0] || this.fireAncestors('$getChildComponent', {
        index: this.componentIndex
      });
    }
    _setup() {
      if (this.forceLoad) {
        this.create();
      }
    }
    _active() {
      this.create();
    }
    _inactive() {
      if (!this.forceLoad) {
        this.children[0].isAlive = false;
        this.fireAncestors('$childInactive', {
          child: this
        });
        this.childList.clear();
      }
    }
    _getFocused() {
      return this.children && this.children[0] || this;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class KeyWrapper extends Lightning$1.Component {
    static _template() {
      return {
        clipbox: true
      };
    }
    _update() {
      let currentKey = this.children && this.children[0];
      if (currentKey && currentKey.action === this._key.data.action) {
        currentKey.patch({
          ...this._key
        });
      } else {
        this.children = [{
          type: this._key.keyType,
          ...this._key
        }];
      }
      if (this.hasFocus()) {
        this._refocus();
      }
    }
    set key(obj) {
      this._key = obj;
      if (this.active) {
        this._update();
      }
    }
    get key() {
      return this._key;
    }
    _active() {
      this._update();
    }
    _inactive() {
      this.childList.clear();
    }
    _getFocused() {
      return this.children && this.children[0] || this;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const limitWithinRange = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
  };
  const defineProperties = (component, props) => {
    props.forEach(prop => {
      Object.defineProperty(component, prop, {
        set: function (value) {
          component["_".concat(prop)] = value;
        },
        get: function () {
          return component["_".concat(prop)];
        }
      });
    });
  };
  const findIndexOfObject = (array, search, targetProp) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i][targetProp] === search) {
        return i;
      }
    }
    return -1;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Carousel extends CollectionWrapper {
    static _template() {
      return {
        Wrapper: {}
      };
    }
    _construct() {
      super._construct();
      this._scroll = 0.5;
      this._scrollOffsetStart = 0;
      this._scrollOffsetEnd = 0;
      this._tresholdStart = 400;
      this._tresholdEnd = 400;
      this._dataIndex = -1;
    }
    clear() {
      super.clear();
      this._dataIndex = 0;
    }
    _normalizeDataIndex(index) {
      let items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._items;
      if (index > items.length - 1) {
        return 0;
      } else if (index < 0) {
        return items.length - 1;
      }
      return index;
    }
    plotItems() {
      const items = this._items;
      const wrapper = this.wrapper;
      const {
        main,
        mainDim,
        mainMarginFrom,
        mainMarginTo,
        cross,
        crossDim
      } = this._getPlotProperties(this._direction);
      const viewBound = this[mainDim];
      let crossPos = 0,
        crossSize = 0;
      const scroll = this._scroll;
      const scrollIsAnchored = !isNaN(scroll);
      const scrollAnchor = scrollIsAnchored ? scroll > 1 ? this._normalizePixelToPercentage(scroll) : scroll : null;
      const scrollOffsetStart = 0;
      const positiveHalf = [];
      const negativeHalf = [];
      const itemIndex = this._index;
      let isFirst = true;
      let index = itemIndex;
      let position = scrollOffsetStart;
      let currentDataIndex = null;
      if (this.currentItemWrapper) {
        currentDataIndex = this.currentItemWrapper.componentIndex;
      }
      while (viewBound - scrollOffsetStart + this._tresholdEnd > position) {
        const item = items[index];
        const sizes = this._getItemSizes(item);
        if (isFirst && scrollIsAnchored) {
          isFirst = false;
          position = (viewBound - sizes[mainDim]) * scrollAnchor;
        } else {
          position += sizes[mainMarginFrom] || sizes.margin || 0;
        }
        if (crossSize < sizes[crossDim]) {
          crossSize = sizes[crossDim];
        }
        positiveHalf.push({
          type: ItemWrapper,
          componentIndex: index,
          forceLoad: this._forceLoad,
          ...sizes,
          ["assigned".concat(main.toUpperCase())]: position,
          ["assigned".concat(cross.toUpperCase())]: crossPos,
          [main]: position,
          [cross]: crossPos
        });
        position += sizes[mainDim] + (sizes[mainMarginTo] || sizes.margin || this._spacing);
        index = this._normalizeDataIndex(index + 1, items);
      }
      position = positiveHalf[0][main] - (positiveHalf[0][mainMarginFrom] || positiveHalf[0].margin);
      index = itemIndex > 0 ? itemIndex - 1 : items.length - 1;
      let lastWidth = 0;
      while (-(scrollOffsetStart + this._tresholdStart) < position + lastWidth) {
        const item = items[index];
        const sizes = this._getItemSizes(item);
        if (crossSize < sizes[crossDim]) {
          crossSize = sizes[crossDim];
        }
        position -= sizes[mainDim] + (sizes[mainMarginTo] || sizes.margin || this._spacing);
        negativeHalf.push({
          componentIndex: index,
          type: ItemWrapper,
          ...sizes,
          ["assigned".concat(main.toUpperCase())]: position,
          ["assigned".concat(cross.toUpperCase())]: crossPos,
          [main]: position,
          [cross]: crossPos
        });
        lastWidth = sizes[mainDim];
        position -= sizes[mainMarginFrom] || sizes.margin;
        index = this._normalizeDataIndex(index - 1, items);
      }
      this._index = negativeHalf.length;
      const previousDataIndex = this._dataIndex;
      this._dataIndex = currentDataIndex || 0;
      wrapper.children = [...negativeHalf.reverse(), ...positiveHalf];
      this._indexChanged({
        previousIndex: previousDataIndex,
        index: this._dataIndex,
        dataLength: this._items.length
      });
    }
    repositionItems() {
      const children = this.wrapper.children;
      const begin = children.slice(0, this._index);
      const end = children.slice(this._index + 1);
      const {
        main,
        mainDim,
        mainMarginFrom,
        mainMarginTo,
        cross,
        crossDim
      } = this._getPlotProperties(this._direction);
      let crossPos = 0,
        crossSize = 0;
      const scroll = this._scroll;
      const scrollIsAnchored = !isNaN(scroll);
      const scrollAnchor = scrollIsAnchored ? scroll > 1 ? this._normalizePixelToPercentage(scroll) : scroll : null;
      const focusedItem = children[this._index];
      let position = focusedItem[main] + (focusedItem[mainDim] - focusedItem.component[mainDim]) * scrollAnchor;
      const focusedItemSizes = this._getItemSizes(focusedItem);
      focusedItem.patch({
        ...focusedItemSizes,
        ["assigned".concat(main.toUpperCase())]: position,
        ["assigned".concat(cross.toUpperCase())]: crossPos,
        [main]: position,
        [cross]: crossPos
      });
      position = focusedItem[main] - (focusedItem[mainMarginFrom] || focusedItem.margin);
      begin.reverse().forEach(item => {
        const sizes = this._getItemSizes(item);
        if (crossSize < sizes[crossDim]) {
          crossSize = sizes[crossDim];
        }
        position -= sizes[mainDim] + (sizes[mainMarginTo] || sizes.margin || this._spacing);
        item.patch({
          ...sizes,
          ["assigned".concat(main.toUpperCase())]: position,
          ["assigned".concat(cross.toUpperCase())]: crossPos,
          [main]: position,
          [cross]: crossPos
        });
      });
      position = focusedItem[main] + focusedItem[mainDim] + (focusedItem[mainMarginTo] || focusedItem.margin || this._spacing);
      end.forEach(item => {
        const sizes = this._getItemSizes(item);
        if (crossSize < sizes[crossDim]) {
          crossSize = sizes[crossDim];
        }
        position += sizes[mainMarginFrom] || sizes.margin || 0;
        item.patch({
          ...sizes,
          ["assigned".concat(main.toUpperCase())]: position,
          ["assigned".concat(cross.toUpperCase())]: crossPos,
          [main]: position,
          [cross]: crossPos
        });
        position += sizes[mainDim] + (sizes[mainMarginTo] || sizes.margin || this._spacing);
      });
    }
    navigate(shift) {
      let orientation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._direction;
      if (orientation !== this._direction) {
        return false;
      }
      this._cleanUp();
      const targetIndex = this._index + shift;
      const childList = this.wrapper.childList;
      const {
        main,
        mainDim,
        mainMarginFrom,
        mainMarginTo
      } = this._getPlotProperties(this._direction);
      const currentDataIndex = this.currentItemWrapper.componentIndex;
      let referenceItem = childList.last;
      if (shift < 0) {
        referenceItem = childList.first;
      }
      const targetDataIndex = this._normalizeDataIndex(referenceItem.componentIndex + shift);
      const targetItem = this._items[targetDataIndex];
      const sizes = this._getItemSizes(targetItem);
      let position = referenceItem[main] + (referenceItem[mainMarginFrom] || sizes.margin) + referenceItem[mainDim] + (sizes[mainMarginTo] || sizes.margin || this.spacing);
      if (shift < 0) {
        position = referenceItem[main] - (referenceItem[mainMarginTo] || sizes.margin) - (sizes[mainDim] + (sizes[mainMarginFrom] || sizes.margin || this._spacing));
      }
      const child = this.stage.c({
        type: ItemWrapper,
        componentIndex: targetDataIndex,
        forceLoad: this._forceLoad,
        ...sizes,
        [main]: position
      });
      childList.addAt(child, shift > 0 ? childList.length : 0);
      const newDataIndex = currentDataIndex + shift;
      if (shift > 0) {
        this._index = targetIndex;
        if (newDataIndex >= 0 && newDataIndex > this._items.length - 1) {
          this._dataIndex = 0;
        } else {
          this._dataIndex = newDataIndex;
        }
      } else {
        this._dataIndex = newDataIndex >= 0 ? newDataIndex : this._items.length - 1;
      }
      this._indexChanged({
        previousIndex: currentDataIndex,
        index: this._dataIndex,
        dataLength: this._items.length
      });
      return true;
    }
    setIndex(index) {
      this._index = index;
      this.plotItems();
      return true;
    }
    addAt(item) {
      let index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._items.length;
      if (index >= 0 && index <= this._items.length) {
        if (!Array.isArray(item)) {
          item = [item];
        }
        const items = this._normalizeDataItems(item);
        this._items.splice(index, 0, ...items);
        this.plotItems();
      } else {
        throw new Error('addAt: The index ' + index + ' is out of bounds ' + this._items.length);
      }
    }
    _cleanUp() {
      let time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
      if (this._cleanUpDebounce) {
        clearTimeout(this._cleanUpDebounce);
      }
      this._cleanUpDebounce = setTimeout(() => {
        const children = this.wrapper.children;
        const {
          main,
          mainDim,
          directionIsRow
        } = this._getPlotProperties(this._direction);
        const bound = this[mainDim];
        const viewboundMain = directionIsRow ? 1920 : 1080;
        const offset = this._scrollTransition && this._scrollTransition.targetValue || 0;
        const boundStart = -viewboundMain * 0.66;
        const boundEnd = bound + viewboundMain * 0.66;
        let rem = children.reduce((acc, child, index) => {
          if (offset + child[main] + child[mainDim] < boundStart || offset + child[main] > boundEnd) {
            acc.push(index);
          }
          return acc;
        }, []);
        if (rem.length > 0) {
          if (rem[0] === 0) {
            for (let i = 0; i < rem.length; i++) {
              if (!rem[i + 1] || rem[i + 1] - rem[i] !== 1) {
                this._index = this._index - (i + 1);
                break;
              }
            }
          }
          rem.sort((a, b) => a - b).reverse().forEach(index => {
            this.wrapper.childList.removeAt(index);
          });
        }
      }, time);
    }
    _inactive() {
      this._cleanUp(0);
      super._inactive();
    }
    set index(index) {
      this.setIndex(index);
    }
    get index() {
      return this._dataIndex;
    }
    set threshold(num) {
      this._threshold = num;
      this._thresholdStart = num;
      this._thresholdEnd = num;
    }
    get threshold() {
      return this._threshold;
    }
    set thresholdStart(num) {
      this._thresholdStart = num;
    }
    get thresholdStart() {
      return this._thresholdStart;
    }
    set thresholdEnd(num) {
      this._thresholdEnd = num;
    }
    get thresholdEnd() {
      return this._tresholdEnd;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class InputField extends Lightning$1.Component {
    static _template() {
      return {
        PreLabel: {
          renderOffscreen: true
        },
        PostLabel: {
          renderOffscreen: true
        },
        Cursor: {
          type: Cursor,
          rect: true,
          w: 4,
          h: 54,
          x: 0,
          y: 0
        }
      };
    }
    _construct() {
      this._input = '';
      this._previousInput = '';
      this._description = '';
      this._cursorX = 0;
      this._cursorIndex = 0;
      this._passwordMask = '*';
      this._passwordMode = false;
      this._autoHideCursor = true;
      this._labelPositionStatic = true;
      this._maxLabelWidth = 0;
    }
    _init() {
      this.tag('PreLabel').on('txLoaded', () => {
        this._labelTxLoaded();
      });
      this.tag('PostLabel').on('txLoaded', () => {
        this._labelTxLoaded;
      });
    }
    onInputChanged(_ref) {
      let {
        input = ''
      } = _ref;
      let targetIndex = Math.max(input.length - this._input.length + this._cursorIndex, 0);
      this._input = input;
      this._update(targetIndex);
    }
    toggleCursor() {
      let bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this._cursorVisible;
      this._cursorVisible = bool;
      this.cursor[bool ? 'show' : 'hide']();
    }
    _labelTxLoaded() {
      const preLabel = this.tag('PreLabel');
      const cursor = this.tag('Cursor');
      const postLabel = this.tag('PostLabel');
      this.h = preLabel.renderHeight || postLabel.renderHeight;
      cursor.x = preLabel.renderWidth + this._cursorX;
      postLabel.x = cursor.x + cursor.w * (1 - cursor.mountX);
      this.setSmooth('x', this._labelOffset);
      if (!this.autoHideCursor) {
        this.toggleCursor(true);
      }
    }
    _update() {
      let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      const hasInput = this._input.length > 0;
      let pre = this._description + '';
      let post = '';
      if (hasInput) {
        pre = this._input.substring(0, index);
        post = this._input.substring(index, this._input.length);
        if (this._passwordMode) {
          pre = this._passwordMask.repeat(pre.length);
          post = this._passwordMask.repeat(post.length);
        }
        this.toggleCursor(true);
      } else if (this._autoHideCursor) {
        this.toggleCursor(false);
      }
      this.patch({
        PreLabel: {
          text: {
            text: pre
          }
        },
        PostLabel: {
          text: {
            text: post
          }
        }
      });
      if (this.h === 0) {
        this.tag('PreLabel').loadTexture();
        this.h = this.tag('PreLabel').renderHeight;
      }
      this._cursorIndex = index;
    }
    _handleRight() {
      this._update(Math.min(this._input.length, this._cursorIndex + 1));
    }
    _handleLeft() {
      this._update(Math.max(0, this._cursorIndex - 1));
    }
    _firstActive() {
      this._labelTxLoaded();
      this._update();
    }
    get input() {
      return this._input;
    }
    get hasInput() {
      return this._input.length > 0;
    }
    get cursorIndex() {
      return this._cursorIndex;
    }
    set inputText(obj) {
      this._inputText = obj;
      this.tag('PreLabel').patch({
        text: obj
      });
      this.tag('PostLabel').patch({
        text: obj
      });
    }
    get inputText() {
      return this._inputText;
    }
    set description(str) {
      this._description = str;
    }
    get description() {
      return this._description;
    }
    set cursor(obj) {
      if (obj.x) {
        this._cursorX = obj.x;
        delete obj.x;
      }
      this.tag('Cursor').patch(obj);
    }
    get cursor() {
      return this.tag('Cursor');
    }
    get cursorVisible() {
      return this._cursorVisible;
    }
    set autoHideCursor(bool) {
      this._autoHideCursor = bool;
    }
    get autoHideCursor() {
      return this._autoHideCursor;
    }
    set passwordMode(val) {
      this._passwordMode = val;
    }
    get passwordMode() {
      return this._passwordMode;
    }
    set passwordMask(str) {
      this._passwordMask = str;
    }
    get passwordmask() {
      return this._passwordMask;
    }

    // the width at which the text start scrolling
    set maxLabelWidth(val) {
      this._maxLabelWidth = val;
    }
    get maxLabelWidth() {
      return this._maxLabelWidth;
    }
    set labelPositionStatic(val) {
      this._labelPositionStatic = val;
    }
    get labelPositionStatic() {
      return this._labelPositionStatic;
    }
    get _labelOffset() {
      if (this._labelPositionStatic) return 0;
      let offset = this.maxLabelWidth - this.tag('Cursor').x;
      return offset < 0 ? offset : 0;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Key extends Lightning$1.Component {
    static _template() {
      return {
        Background: {
          w: w => w,
          h: h => h,
          rect: true
        },
        Label: {
          mount: 0.5,
          x: w => w / 2,
          y: h => h / 2
        }
      };
    }
    _construct() {
      this._backgroundColors = {};
      this._labelColors = {};
    }
    set data(obj) {
      this._data = obj;
      this._update();
    }
    get data() {
      return this._data;
    }
    set labelText(obj) {
      this._labelText = obj;
      this.tag('Label').patch({
        text: obj
      });
    }
    get labelText() {
      return this._labelText;
    }
    set label(obj) {
      this.tag('Label').patch(obj);
    }
    get label() {
      return this.tag('Label');
    }
    set labelColors(obj) {
      this._labelColors = obj;
      this._update();
    }
    get labelColors() {
      return this._labelColors;
    }
    set backgroundColors(obj) {
      this._backgroundColors = obj;
      this._update();
    }
    get backgroundColors() {
      return this._backgroundColors;
    }
    set background(obj) {
      this.tag('Background').patch(obj);
    }
    get background() {
      return this.tag('Background');
    }
    _update() {
      if (!this.active) {
        return;
      }
      const {
        label = ''
      } = this._data;
      const hasFocus = this.hasFocus();
      let {
        focused,
        unfocused = 0xff000000
      } = this._backgroundColors;
      let {
        focused: labelFocused,
        unfocused: labelUnfocused = 0xffffffff
      } = this._labelColors;
      this.patch({
        Background: {
          color: hasFocus && focused ? focused : unfocused
        },
        Label: {
          text: {
            text: label
          },
          color: hasFocus && labelFocused ? labelFocused : labelUnfocused
        }
      });
    }
    _firstActive() {
      this._update();
    }
    _focus() {
      let {
        focused,
        unfocused = 0xff000000
      } = this._backgroundColors;
      let {
        focused: labelFocused,
        unfocused: labelUnfocused = 0xffffffff
      } = this._labelColors;
      this.patch({
        Background: {
          smooth: {
            color: focused || unfocused
          }
        },
        Label: {
          smooth: {
            color: labelFocused || labelUnfocused
          }
        }
      });
    }
    _unfocus() {
      let {
        unfocused = 0xff000000
      } = this._backgroundColors;
      let {
        unfocused: labelUnfocused = 0xffffffff
      } = this._labelColors;
      this.patch({
        Background: {
          smooth: {
            color: unfocused
          }
        },
        Label: {
          smooth: {
            color: labelUnfocused
          }
        }
      });
    }
    static get width() {
      return 80;
    }
    static get height() {
      return 80;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Keyboard extends Lightning$1.Component {
    static _template() {
      return {
        Keys: {
          w: w => w
        }
      };
    }
    _construct() {
      this._input = '';
      this._inputField = undefined;
      this._maxCharacters = 56;
      this.navigationWrapAround = false;
      this.resetFocus();
    }
    resetFocus() {
      this._columnIndex = 0;
      this._rowIndex = 0;
      this._previousKey = null;
    }
    _setup() {
      this._keys = this.tag('Keys');
      this._update();
    }
    _update() {
      const {
        layouts,
        buttonTypes = {},
        styling = {}
      } = this._config;
      if (!this._layout || this._layout && layouts[this._layout] === undefined) {
        console.error("Configured layout \"".concat(this._layout, "\" does not exist. Picking first available: \"").concat(Object.keys(layouts)[0], "\""));
        this._layout = Object.keys(layouts)[0];
      }
      const {
        horizontalSpacing = 0,
        verticalSpacing = 0,
        align = 'left'
      } = styling;
      let rowPosition = 0;
      const isEvent = /^[A-Z][A-Za-z0-9]{1}/;
      const hasLabel = /\:/;
      if (buttonTypes.default === undefined) {
        buttonTypes.default = Key;
      }
      this._keys.children = layouts[this._layout].map((row, rowIndex) => {
        const {
          x = 0,
          margin = 0,
          marginRight,
          marginLeft,
          marginTop,
          marginBottom,
          spacing: rowHorizontalSpacing = horizontalSpacing || 0,
          align: rowAlign = align
        } = styling["Row".concat(rowIndex + 1)] || {};
        let keyPosition = 0;
        let rowHeight = 0;
        const rowKeys = row.map((key, keyIndex) => {
          const origin = key;
          let keyType = buttonTypes.default;
          let action = 'Input';
          let label = key;
          if (isEvent.test(key)) {
            if (hasLabel.test(key)) {
              key = key.split(':');
              label = key[1].toString();
              key = key[0];
            }
            if (buttonTypes[key]) {
              keyType = buttonTypes[key];
              action = key.action || key;
            }
          }
          const keySpacing = keyType.margin || keyType.type.margin;
          const {
            w = keyType.type.width || 0,
            h = keyType.type.height || 0,
            marginLeft = keyType.type.marginLeft || keySpacing || 0,
            marginRight = keyType.type.marginRight || keySpacing || rowHorizontalSpacing
          } = keyType;
          rowHeight = h > rowHeight ? h : rowHeight;
          const currentPosition = keyPosition + marginLeft;
          keyPosition += marginLeft + w + marginRight;
          return {
            ref: "Key-{".concat(keyIndex + 1, "}"),
            type: KeyWrapper,
            keyboard: this,
            x: currentPosition,
            w,
            h,
            key: {
              data: {
                origin,
                key,
                label,
                action
              },
              w,
              h,
              ...keyType
            }
          };
        });
        let rowOffset = x + (marginLeft || margin);
        let rowMount = 0;
        if (this.w && rowAlign === 'center') {
          rowOffset = this.w / 2;
          rowMount = 0.5;
        }
        if (this.w && rowAlign === 'right') {
          rowOffset = this.w - (marginRight || margin);
          rowMount = 1;
        }
        const currentPosition = rowPosition + (marginTop || margin);
        rowPosition = currentPosition + rowHeight + (marginBottom || margin || verticalSpacing);
        return {
          ref: "Row-".concat(rowIndex + 1),
          x: rowOffset,
          mountX: rowMount,
          w: keyPosition,
          y: currentPosition,
          children: rowKeys
        };
      });
      this._refocus();
    }
    _getFocused() {
      return this.currentKeyWrapper || this;
    }
    _handleRight() {
      return this.navigate('row', 1);
    }
    _handleLeft() {
      return this.navigate('row', -1);
    }
    _handleUp() {
      return this.navigate('column', -1);
    }
    _handleDown() {
      return this.navigate('column', 1);
    }
    _handleKey(_ref) {
      let {
        key,
        code = 'CustomKey'
      } = _ref;
      if (code === 'Backspace' && this._input.length === 0) {
        return false;
      }
      if (key === ' ') {
        key = 'Space';
      }
      const targetFound = this._findKey(key);
      if (targetFound) {
        this._handleEnter();
      }
      return targetFound;
    }
    _findKey(str) {
      const rows = this._config.layouts[this._layout];
      let i = 0,
        j = 0;
      for (; i < rows.length; i++) {
        for (j = 0; j < rows[i].length; j++) {
          let key = rows[i][j];
          if (str.length > 1 && key.indexOf(str) > -1 || key.toUpperCase() === str.toUpperCase()) {
            this._rowIndex = i;
            this._columnIndex = j;
            return true;
          }
        }
      }
      return false;
    }
    _handleEnter() {
      const {
        origin,
        action
      } = this.currentKey.data;
      const event = {
        index: this._input.length,
        key: origin
      };
      if (this._inputField && this._inputField.cursorIndex) {
        event.index = this._inputField.cursorIndex;
      }
      if (action !== 'Input') {
        const split = event.key.split(':');
        const call = "on".concat(split[0]);
        const eventFunction = this[call];
        event.key = split[1];
        if (eventFunction && eventFunction.apply && eventFunction.call) {
          eventFunction.call(this, event);
        }
        this.signal(call, {
          input: this._input,
          keyboard: this,
          ...event
        });
      } else {
        this.addAt(event.key, event.index);
      }
    }
    _changeInput(input) {
      if (input.length > this._maxCharacters) {
        return;
      }
      const eventData = {
        previousInput: this._input,
        input: this._input = input
      };
      if (this._inputField && this._inputField.onInputChanged) {
        this._inputField.onInputChanged(eventData);
      }
      this.signal('onInputChanged', eventData);
    }
    focus(str) {
      this._findKey(str);
    }
    add(str) {
      this._changeInput(this._input + str);
    }
    addAt(str, index) {
      if (index > this._input.length - 1) {
        this.add(str);
      } else if (index > -1) {
        this._changeInput(this._input.substring(0, index) + str + this._input.substring(index, this._input.length));
      }
    }
    remove() {
      this._changeInput(this._input.substring(0, this._input.length - 1));
    }
    removeAt(index) {
      if (index > this._input.length - 1) {
        this.remove();
      } else if (index > -1) {
        this._changeInput(this._input.substring(0, index - 1) + this._input.substring(index, this._input.length));
      }
    }
    clear() {
      this._changeInput('');
    }
    layout(key) {
      if (key === this._layout) {
        return;
      }
      this._layout = key;
      if (this.attached) {
        this.resetFocus();
        this._update();
      }
    }
    inputField(component) {
      if (component && component.isComponent) {
        this._rowIndex = 0;
        this._columnIndex = 0;
        this._input = component.input !== undefined ? component.input : '';
        this._inputField = component;
      } else {
        this._rowIndex = 0;
        this._columnIndex = 0;
        this._input = '';
        this._inputField = undefined;
      }
    }
    navigate(direction, shift) {
      const targetIndex = (direction === 'row' ? this._columnIndex : this._rowIndex) + shift;
      const currentRow = this.rows[this._rowIndex];
      if (direction === 'row' && targetIndex > -1 && targetIndex < currentRow.children.length) {
        this._previous = null;
        return this._columnIndex = targetIndex;
      } else if (direction === 'row' && this.navigationWrapAround) {
        this._previous = null;
        let rowLen = currentRow.children.length;
        return this._columnIndex = (targetIndex % rowLen + rowLen) % rowLen;
      }
      if (direction === 'column' && targetIndex > -1 && targetIndex < this.rows.length) {
        const currentRowIndex = this._rowIndex;
        const currentColumnIndex = this._columnIndex;
        if (this._previous && this._previous.row === targetIndex) {
          const tmp = this._previous.column;
          this._previous.column = this._columnIndex;
          this._columnIndex = tmp;
          this._rowIndex = this._previous.row;
        } else {
          const targetRow = this.rows[targetIndex];
          const currentKey = this.currentKeyWrapper;
          const currentRow = this.rows[this._rowIndex];
          const currentX = currentRow.x - currentRow.w * currentRow.mountX + currentKey.x;
          const m = targetRow.children.map(key => {
            const keyX = targetRow.x - targetRow.w * targetRow.mountX + key.x;
            if (keyX <= currentX && currentX < keyX + key.w) {
              return keyX + key.w - currentX;
            }
            if (keyX >= currentX && keyX <= currentX + currentKey.w) {
              return currentX + currentKey.w - keyX;
            }
            return -1;
          });
          let acc = -1;
          let t = -1;
          for (let i = 0; i < m.length; i++) {
            if (m[i] === -1 && acc > -1) {
              break;
            }
            if (m[i] > acc) {
              acc = m[i];
              t = i;
            }
          }
          if (t > -1) {
            this._rowIndex = targetIndex;
            this._columnIndex = t;
          } // if no next row found and wraparound is on, loop back to first row
          else if (this.navigationWrapAround) {
            this._columnIndex = Math.min(this.rows[0].children.length - 1, this._columnIndex);
            return this._rowIndex = 0;
          }
        }
        if (this._rowIndex !== currentRowIndex) {
          this._previous = {
            column: currentColumnIndex,
            row: currentRowIndex
          };
          return this._rowIndex = targetIndex;
        }
      } else if (direction === 'column' && this.navigationWrapAround) {
        this._previous = {
          column: this._columnIndex,
          row: this._rowIndex
        };
        let nrRows = this.rows.length;
        this._rowIndex = (targetIndex % nrRows + nrRows) % nrRows;
        this._columnIndex = Math.min(this.rows[this._rowIndex].children.length - 1, this._columnIndex);
      }
      return false;
    }
    onSpace(_ref2) {
      let {
        index
      } = _ref2;
      this.addAt(' ', index);
    }
    onBackspace(_ref3) {
      let {
        index
      } = _ref3;
      this.removeAt(index);
    }
    onClear() {
      this.clear();
    }
    onLayout(_ref4) {
      let {
        key
      } = _ref4;
      this.layout(key);
    }
    set config(obj) {
      this._config = obj;
      if (this.active) {
        this._update();
      }
    }
    get config() {
      return this._config;
    }
    set currentInputField(component) {
      this.inputField(component);
    }
    get currentInputField() {
      return this._inputField;
    }
    set currentLayout(str) {
      this.layout(str);
    }
    get currentLayout() {
      return this._layout;
    }
    set maxCharacters(num) {
      this._maxCharacters = num;
    }
    get maxCharacters() {
      return this._maxCharacters;
    }
    get rows() {
      return this._keys && this._keys.children;
    }
    get currentKeyWrapper() {
      return this.rows && this.rows[this._rowIndex].children[this._columnIndex];
    }
    get currentKey() {
      return this.currentKeyWrapper && this.currentKeyWrapper.key;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class List extends CollectionWrapper {
    plotItems() {
      const items = this._items;
      const wrapper = this.wrapper;
      const {
        directionIsRow,
        main,
        mainDim,
        mainMarginTo,
        mainMarginFrom,
        cross,
        crossDim
      } = this._getPlotProperties(this._direction);
      let crossPos = 0,
        crossSize = 0,
        position = 0;
      const animateItems = [];
      const viewboundMain = directionIsRow ? 1920 : 1080;
      const viewboundCross = directionIsRow ? 1080 : 1920;
      const renderContext = this.core.renderContext;
      const newChildren = items.map((item, index) => {
        const sizes = this._getItemSizes(item);
        position += sizes[mainMarginFrom] || sizes.margin || 0;
        if (crossSize < sizes[crossDim]) {
          crossSize = sizes[crossDim];
        }
        const ref = "IW-".concat(item.assignedID);
        let mainPos = position;
        crossPos = item[cross] || crossPos;
        let tmp = mainPos;
        let tcp = crossPos;
        const existingItemWrapper = wrapper.tag(ref);
        if (existingItemWrapper && (existingItemWrapper.active && (crossPos !== existingItemWrapper[cross] || mainPos !== existingItemWrapper[main]) || !existingItemWrapper.active && (renderContext["p".concat(main)] + wrapper[main] + mainPos <= viewboundMain || renderContext["p".concat(cross)] + wrapper[cross] + crossPos <= viewboundCross))) {
          tmp = existingItemWrapper[main];
          tcp = existingItemWrapper[cross];
          animateItems.push(index);
        }
        position += sizes[mainDim] + (sizes[mainMarginTo] || sizes.margin || this._spacing);
        return {
          ref,
          type: ItemWrapper,
          componentIndex: index,
          forceLoad: this._forceLoad,
          ...sizes,
          ["assigned".concat(main.toUpperCase())]: mainPos,
          ["assigned".concat(cross.toUpperCase())]: crossPos,
          [main]: tmp,
          [cross]: tcp
        };
      });
      wrapper.children = newChildren;
      animateItems.forEach(index => {
        const item = wrapper.children[index];
        item.patch({
          smooth: {
            x: item.assignedX,
            y: item.assignedY
          }
        });
      });
      this._resizeWrapper(crossSize);
    }
    repositionItems() {
      const wrapper = this.wrapper;
      if (!wrapper && wrapper.children.length) {
        return true;
      }
      const {
        main,
        mainDim,
        mainMarginTo,
        mainMarginFrom,
        cross,
        crossDim
      } = this._getPlotProperties(this._direction);
      let crossPos = 0,
        crossSize = 0,
        position = 0;
      wrapper.children.forEach(item => {
        const sizes = this._getItemSizes(item);
        position += sizes[mainMarginFrom] || sizes.margin || 0;
        crossPos = item[cross] || crossPos;
        if (crossSize < sizes[crossDim]) {
          crossSize = sizes[crossDim];
        }
        const mainPos = position;
        position += sizes[mainDim] + (sizes[mainMarginTo] || sizes.margin || this.spacing);
        item.patch({
          ["assigned".concat(main.toUpperCase())]: mainPos,
          ["assigned".concat(cross.toUpperCase())]: 0,
          [main]: mainPos,
          [cross]: crossPos,
          ...sizes
        });
      });
      this._resizeWrapper(crossSize);
      super.repositionItems();
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ScrollingLabel extends Lightning$1.Component {
    static _template() {
      return {
        LabelClipper: {
          w: w => w,
          rtt: true,
          shader: {
            type: Lightning$1.shaders.FadeOut
          },
          LabelWrapper: {
            Label: {
              renderOffscreen: true
            },
            LabelCopy: {
              renderOffscreen: true
            }
          }
        }
      };
    }
    _construct() {
      this._autoStart = true;
      this._scrollAnimation = false;
      this._fade = 30;
      this._spacing = 30;
      this._label = {};
      this._align = 'left';
      this._animationSettings = {
        delay: 0.7,
        repeat: -1,
        stopMethod: 'immediate'
      };
    }
    _init() {
      const label = this.tag('Label');
      label.on('txLoaded', () => {
        this._update(label);
        this._updateAnimation(label);
        if (this._autoStart) {
          this.start();
        }
      });
    }
    _update() {
      let label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tag('Label');
      const renderWidth = label.renderWidth;
      const noScroll = renderWidth <= this.renderWidth;
      let labelPos = 0;
      if (noScroll && this._align !== 'left') {
        labelPos = (this.renderWidth - renderWidth) * ScrollingLabel.ALIGN[this._align];
      }
      this.tag('LabelClipper').patch({
        h: label.renderHeight,
        shader: {
          right: noScroll ? 0 : this._fade
        },
        LabelWrapper: {
          x: 0,
          Label: {
            x: labelPos
          },
          LabelCopy: {
            x: renderWidth + this._spacing
          }
        }
      });
    }
    _updateAnimation() {
      let label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tag('Label');
      if (this._scrollAnimation) {
        this._scrollAnimation.stopNow();
      }
      if (label.renderWidth > this.renderWidth) {
        if (!this._animationSettings.duration) {
          this._animationSettings.duration = label.renderWidth / 50;
        }
        this._scrollAnimation = this.animation({
          ...this._animationSettings,
          actions: [{
            t: 'LabelWrapper',
            p: 'x',
            v: {
              sm: 0,
              0: 0,
              1.0: -(label.renderWidth + this._spacing)
            }
          }, {
            t: 'LabelClipper',
            p: 'shader.left',
            v: {
              0: 0,
              0.2: this._fade,
              0.8: this._fade,
              1.0: 0
            }
          }]
        });
      }
    }
    start() {
      if (this._scrollAnimation) {
        this._scrollAnimation.stopNow();
        this.tag('LabelCopy').patch({
          text: this._label
        });
        this._scrollAnimation.start();
      }
    }
    stop() {
      if (this._scrollAnimation) {
        this._scrollAnimation.stopNow();
        this.tag('LabelCopy').text = '';
      }
    }
    set label(obj) {
      if (typeof obj === 'string') {
        obj = {
          text: obj
        };
      }
      this._label = {
        ...this._label,
        ...obj
      };
      this.tag('Label').patch({
        text: obj
      });
    }
    get label() {
      return this.tag('Label');
    }
    set align(pos) {
      this._align = pos;
    }
    get align() {
      return this._align;
    }
    set autoStart(bool) {
      this._autoStart = bool;
    }
    get autoStart() {
      return this._autoStart;
    }
    set repeat(num) {
      this.animationSettings = {
        repeat: num
      };
    }
    get repeat() {
      return this._animationSettings.repeat;
    }
    set delay(num) {
      this.animationSettings = {
        delay: num
      };
    }
    get delay() {
      return this._animationSettings.delay;
    }
    set duration(num) {
      this.animationSettings = {
        duration: num
      };
    }
    get duration() {
      return this._animationSettings.duration;
    }
    set animationSettings(obj) {
      this._animationSettings = {
        ...this._animationSettings,
        ...obj
      };
      if (this._scrollAnimation) {
        this._updateAnimation();
      }
    }
    get animationSettings() {
      return this._animationSettings;
    }
  }
  ScrollingLabel.ALIGN = {
    left: 0,
    center: 0.5,
    right: 1
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const calcCarouselNavigation = (dir, current, min, max) => {
    let target = current + dir;
    if (target < min) {
      target = max;
    }
    if (target > max) {
      target = min;
    }
    return target;
  };
  class Stepper extends Lightning$1.Component {
    static _template() {
      return {
        h: 80,
        w: 574,
        Focus: {
          alpha: 0,
          w: w => w,
          h: h => h,
          rect: true
        },
        Label: {
          x: 30,
          y: h => h * 0.5,
          mountY: 0.5,
          text: {
            text: '',
            fontSize: 22
          }
        },
        ValueWrapper: {
          x: w => w - 30,
          w: 200,
          h: h => h,
          mountX: 1,
          Value: {
            x: w => w * 0.5,
            y: h => h * 0.5,
            mountX: 0.5,
            mountY: 0.5,
            text: {
              text: '',
              fontSize: 22
            }
          }
        }
      };
    }
    _construct() {
      this._focusColor = 0xff009245;
      this._labelColor = 0xff9d9d9d;
      this._labelColorFocused = 0xffffffff;
      this._padding = 30;
      this._max = 100;
      this._min = 0;
      this._value = 50;
      this._options = undefined;
      this._label = 'label';
      this._focusAnimation = null;
      defineProperties(this, ['focusColor', 'labelColor', 'labelColorFocused', 'padding', 'max', 'min', 'focusAnimation']);
    }
    _update() {
      this.patch({
        Focus: {
          color: this._focusColor
        },
        Label: {
          x: this._padding,
          color: this._labelColor,
          text: {
            text: this._label
          }
        },
        ValueWrapper: {
          x: w => w - this._padding,
          Value: {
            color: this._labelColor,
            text: {
              text: this.optionValue || this.value
            }
          }
        }
      });
      if (this.hasFocus()) {
        this._focus();
      }
    }
    _createFocusAnimation() {
      this._focusAnimation = this.animation({
        duration: 0.2,
        stopMethod: 'reverse',
        actions: [{
          t: 'Focus',
          p: 'alpha',
          v: {
            0: 0,
            1: 1
          }
        }, {
          t: 'Label',
          p: 'color',
          v: {
            0: this._labelColor,
            1: this._labelColorFocused
          }
        }, {
          t: 'ValueWrapper.Value',
          p: 'color',
          v: {
            0: this._labelColor,
            1: this._labelColorFocused
          }
        }]
      });
    }
    _firstActive() {
      if (!this._focusAnimation) {
        this._createFocusAnimation();
      }
      this._update();
    }
    _navigate(dir) {
      this.value = calcCarouselNavigation(dir, this._value, this._min, this._max);
      const event = {
        value: this._value
      };
      if (this._options) {
        event.options = this._options;
      }
      this.fireAncestors('$onValueChanged', event);
      this.signal('onValueChanged', event);
    }
    _handleLeft() {
      this._navigate(-1);
    }
    _handleRight() {
      this._navigate(1);
    }
    _focus() {
      if (this._focusAnimation) {
        this._focusAnimation.start();
      }
    }
    _unfocus() {
      if (this._focusAnimation) {
        this._focusAnimation.stop();
      }
    }
    set label(str) {
      this._label = str;
      if (this.active) {
        this.tag('Label').text.text = str;
      }
    }
    get label() {
      return this._label;
    }
    set value(str) {
      this._value = str;
      if (this.active) {
        this.tag('Value').text.text = this.optionValue || this._value;
      }
    }
    get value() {
      return this._value;
    }
    get optionValue() {
      return this._options && this._options[this._value] && this._options[this._value].label || undefined;
    }
    set options(arr) {
      const refactor = arr.map(option => {
        if (typeof option === 'string') {
          return {
            label: option
          };
        }
        return option;
      });
      this._value = 0;
      this._options = refactor;
      this._max = refactor.length - 1;
      this._update();
    }
    get options() {
      return this._options;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ArrowStepper extends Stepper {
    static _template() {
      return {
        ...super._template(),
        ValueWrapper: {
          x: w => w - 30,
          w: 200,
          h: h => h,
          mountX: 1,
          ArrowLeft: {
            y: h => h * 0.5,
            mountY: 0.5
          },
          Value: {
            x: w => w * 0.5,
            y: h => h * 0.5,
            mountX: 0.5,
            mountY: 0.5,
            text: {
              text: '',
              fontSize: 22
            }
          },
          ArrowRight: {
            y: h => h * 0.5,
            x: w => w,
            mountY: 0.5,
            mountX: 1
          }
        }
      };
    }
    _update() {
      this.patch({
        Focus: {
          color: this._focusColor
        },
        Label: {
          x: this._padding,
          color: this._labelColor,
          text: {
            text: this._label
          }
        },
        ValueWrapper: {
          x: w => w - this._padding,
          ArrowLeft: {
            color: this._labelColor
          },
          Value: {
            color: this._labelColor,
            text: {
              text: this.optionValue || this.value
            }
          },
          ArrowRight: {
            color: this._labelColor
          }
        }
      });
      if (this.hasFocus()) {
        this._focus();
      }
    }
    _createFocusAnimation() {
      this._focusAnimation = this.animation({
        duration: 0.2,
        stopMethod: 'reverse',
        actions: [{
          t: 'Focus',
          p: 'alpha',
          v: {
            0: 0,
            1: 1
          }
        }, {
          t: 'ValueWrapper.ArrowLeft',
          p: 'color',
          v: {
            0: this._labelColor,
            1: this._labelColorFocused
          }
        }, {
          t: 'ValueWrapper.Value',
          p: 'color',
          v: {
            0: this._labelColor,
            1: this._labelColorFocused
          }
        }, {
          t: 'ValueWrapper.ArrowRight',
          p: 'color',
          v: {
            0: this._labelColor,
            1: this._labelColorFocused
          }
        }]
      });
    }
    _firstActive() {
      if (!this._focusAnimation) {
        this._createFocusAnimation();
      }
      const arrowLeft = this.tag('ArrowLeft');
      const arrowRight = this.tag('ArrowRight');
      if (!(arrowLeft.src !== undefined && arrowLeft.text !== null)) {
        arrowLeft.text = {
          text: '\u25c0',
          fontSize: 18
        };
      }
      if (!(arrowRight.src !== undefined && arrowRight.text !== null)) {
        arrowRight.text = {
          text: '\u25b6',
          fontSize: 18
        };
      }
      this._update();
    }
  }

  class ColorShift extends Lightning$1.Component {
    static _template() {
      return {
        w: 574,
        h: 240,
        List: {
          type: List,
          w: w => w,
          h: h => h,
          forceLoad: true,
          spacing: 0,
          direction: 'column'
        }
      };
    }
    _construct() {
      this._autoColorShift = true;
      this._focusColor = 0xff009245;
      this._labelColor = 0xff9d9d9d;
      this._labelColorFocused = 0xffffffff;
      this._options = [{
        type: 'neutral',
        label: 'normal'
      }, {
        type: 'protanopia',
        label: 'Protanopia'
      }, {
        type: 'deuteranopia',
        label: 'Deuteranopia'
      }, {
        type: 'tritanopia',
        label: 'Tritanopia'
      }, {
        type: 'monochromacy',
        label: 'Achromatopsia'
      }];
      defineProperties(this, ['focusColor', 'labelColor', 'labelColorFocused', 'options', 'autoColorShift']);
    }
    _getFocused() {
      return this.tag('List');
    }
    _shiftColors() {
      if (this._autoColorShift && this.application && this.application.colorshift) {
        this.application.colorshift(this._settings.correction, this._settings);
      }
    }
    $onValueChanged() {
      const listItems = this.tag('List').items;
      const correction = listItems[0];
      this._settings = {
        correction: correction.options[correction.value].type,
        brightness: listItems[1].value,
        contrast: listItems[2].value,
        gamma: listItems[3].value
      };
      if (this._currentCorrection && this._settings.correction !== this._currentCorrection) {
        const steppers = listItems.slice(1);
        steppers.forEach(stepper => {
          stepper.value = 50;
        });
      }
      this._currentCorrection = this._settings.correction;
      this._shiftColors();
      this.signal('onColorShift', this._settings);
    }
    _update() {
      const list = this.tag('List');
      const steppers = ['Brightness', 'Contrast', 'Gamma'];
      const options = this._options;
      const settings = this._settings;
      const colors = {
        focusColor: this._focusColor,
        labelColor: this._labelColor,
        labelColorFocused: this._labelColorFocused
      };
      this._shiftColors();
      const settingItems = steppers.map(stepper => {
        const lowerC = stepper.toLocaleLowerCase();
        return {
          type: this["".concat(lowerC, "Component")],
          label: stepper,
          value: settings[lowerC],
          w: this.finalW,
          h: 80,
          ...colors
        };
      });
      settingItems.unshift({
        type: this.correctionComponent,
        options,
        value: findIndexOfObject(options, settings.correction, 'type'),
        label: 'Color adjustment',
        w: this.finalW,
        h: 80,
        ...colors
      });
      list.clear();
      list.add(settingItems);
    }
    _firstActive() {
      if (!this._settings) {
        this._settings = {
          correction: 'neutral',
          brightness: 50,
          contrast: 50,
          gamma: 50
        };
      }
      this._update();
    }
    set settings(obj) {
      this._settings = obj;
      if (this.active) {
        const listItems = this.tag('List').items;
        listItems[0] = findIndexOfObject(this._options, obj.correction, 'type');
        listItems[1] = obj.brightness || 50;
        listItems[2] = obj.contrast || 50;
        listItems[3] = obj.gamma || 50;
      }
    }
    get settings() {
      return this._settings;
    }
    get correctionTag() {
      return this.tag('List').items[0];
    }
    get brightnessTag() {
      return this.tag('List').items[1];
    }
    get contrastTag() {
      return this.tag('List').items[2];
    }
    get gammaTag() {
      return this.tag('List').items[3];
    }
    get adjustmentTags() {
      return this.tag('List').items;
    }
    set stepperComponent(component) {
      this._stepperComponent = component;
    }
    get stepperComponent() {
      return this._stepperComponent || ArrowStepper;
    }
    set correctionComponent(component) {
      this._correctionComponent = component;
    }
    get correctionComponent() {
      return this._correctionComponent || this.stepperComponent;
    }
    set brightnessComponent(component) {
      this._brightnessComponent = component;
    }
    get brightnessComponent() {
      return this._brightnessComponent || this.stepperComponent;
    }
    set contrastComponent(component) {
      this._contrastComponent = component;
    }
    get contrastComponent() {
      return this._contrastComponent || this.stepperComponent;
    }
    set gammaComponent(component) {
      this._gammaComponent = component;
    }
    get gammaComponent() {
      return this._gammaComponent || this.stepperComponent;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class CarouselItem extends Lightning$1.Component {
    static _template() {
      return {
        Focus: {
          alpha: 0,
          x: w => w * 0.5,
          y: h => h * 0.5,
          mount: 0.5,
          w: 120,
          h: 50,
          rect: true,
          shader: {
            type: Lightning$1.shaders.RoundedRectangle,
            radius: 25
          }
        },
        Label: {
          x: w => w * 0.5,
          y: h => h * 0.5,
          mount: 0.5,
          renderOffscreen: true,
          text: {
            text: '',
            fontSize: 22
          }
        }
      };
    }
    _construct() {
      this._focusColor = 0xff009245;
      this._labelColor = 0xff9d9d9d;
      this._labelColorFocused = 0xffffffff;
      this._padding = 40;
      defineProperties(this, ['focusColor', 'labelColor', 'labelColorFocused', 'padding']);
    }
    set label(str) {
      this.tag('Label').text.text = str;
      this._label = str;
    }
    get label() {
      return this._label;
    }
    _init() {
      const label = this.tag('Label');
      label.on('txLoaded', () => {
        this.patch({
          w: label.renderWidth,
          Focus: {
            w: label.renderWidth + this._padding * 2
          }
        });
        if (this.collectionWrapper) {
          this.collectionWrapper.reposition();
        }
      });
    }
    _focus() {
      this.patch({
        Focus: {
          smooth: {
            alpha: 1
          }
        },
        Label: {
          smooth: {
            color: this._labelColorFocused
          }
        }
      });
    }
    _unfocus(target) {
      if (target.isCarouselItem === true) {
        this.patch({
          Focus: {
            smooth: {
              alpha: 0
            }
          },
          Label: {
            smooth: {
              color: this._labelColor
            }
          }
        });
      }
    }
    _firstActive() {
      this.patch({
        Focus: {
          color: this._focusColor
        },
        Label: {
          color: this._labelColor
        }
      });
      if (this.cparent.componentIndex === this.collectionWrapper.currentItemWrapper.componentIndex) {
        this._focus();
      }
    }
    get isCarouselItem() {
      return true;
    }
    static get width() {
      return 120;
    }
    static get height() {
      return 50;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2021 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ProgressBar extends Lightning$1.Component {
    static _template() {
      return {
        w: 300,
        h: 10,
        Background: {
          w: w => w,
          h: h => h,
          rect: true,
          rtt: true,
          shader: {
            type: Lightning$1.shaders.RoundedRectangle,
            radius: 5
          },
          Progress: {
            h: h => h,
            w: 10,
            rect: true,
            shader: {
              type: Lightning$1.shaders.RoundedRectangle,
              radius: 0
            }
          }
        }
      };
    }
    _construct() {
      this._progressColor = 0xff009245;
      this._progressColorFocused = undefined;
      this._backgroundColor = 0xff9d9d9d;
      this._backgroundColorFocused = undefined;
      this._backgroundRadius = 5;
      this._progressRadius = 0;
      this.value = 0.5;
      defineProperties(this, ['progressColor', 'backgroundColor', 'progressColorFocused', 'backgroundColorFocused']);
    }
    progress(p) {
      if (p > 1) {
        p = p / 100;
      }
      this._value = p;
      this.tag('Progress').w = this.w * p;
    }
    _createFocusAnimation() {
      this._focusAnimation = this.animation({
        duration: 0.2,
        stopMethod: 'reverse',
        actions: [{
          t: 'Background',
          p: 'color',
          v: {
            0: this._backgroundColor,
            1: this._backgroundColorFocused || this._backgroundColor
          }
        }, {
          t: 'Background.Progress',
          p: 'color',
          v: {
            0: this._progressColor,
            1: this._progressColorFocused || this._progressColor
          }
        }]
      });
    }
    _firstActive() {
      if (!this._focusAnimation) {
        this._createFocusAnimation();
      }
      this.patch({
        Background: {
          color: this._backgroundColor,
          shader: {
            radius: this._backgroundRadius
          },
          Progress: {
            color: this._progressColor,
            shader: {
              radius: this._progressRadius
            }
          }
        }
      });
      this.progress(this._value);
      if (this.hasFocus()) {
        this._focus();
      }
    }
    _focus() {
      if (this._focusAnimation) {
        this._focusAnimation.start();
      }
    }
    _unfocus() {
      if (this._focusAnimation) {
        this._focusAnimation.stop();
      }
    }
    set value(p) {
      this._value = p;
      if (this.active) {
        this.progress(p);
      }
    }
    get value() {
      return this._value;
    }
    set backgroundRadius(num) {
      this._backgroundRadius = num;
      if (this.active) {
        this.tag('Background').shader.radius = num;
      }
    }
    get progressRadius() {
      return this._progressRadius;
    }
    set progressRadius(num) {
      this._progressRadius = num;
      if (this.active) {
        this.tag('Progress').shader.radius = num;
      }
    }
    get progressRadius() {
      return this._progressRadius;
    }
    get backgroundTag() {
      return this.tag('Background');
    }
    get progressTag() {
      return this.tag('Progress');
    }
  }

  class FavoritesPage extends Lightning$1.Component {
    static _template() {
      return {
        x: 0,
        y: 0,
        rect: true,
        w: 1920,
        h: 1080,
        MyCarousel: {
          w: 1920,
          h: 1080,
          y: 1080 / 2 - 450 * 2 / 3,
          spacing: 50,
          type: Carousel,
          direction: 'row',
          scroll: .5,
          signals: {
            onIndexChanged: true
          }
        },
        Synopsis_Shortened: {}
      };
    }
    onIndexChanged(idxPrevidxDataLen) {
      var _this$movieList$index;
      const {
        index,
        previousIndex,
        dataLength
      } = idxPrevidxDataLen;
      const currMovieCardOBJ = (_this$movieList$index = this.movieList[index]) === null || _this$movieList$index === void 0 ? void 0 : _this$movieList$index.movie;
      this.handleChangeBackgroundImage(currMovieCardOBJ === null || currMovieCardOBJ === void 0 ? void 0 : currMovieCardOBJ.backdrop_path);
      this.handleChangeSynopsis(currMovieCardOBJ);
    }
    handleCreateMovieList(list) {
      return list === null || list === void 0 ? void 0 : list.map(movie => ({
        type: MovieCardLarge,
        animationDemoActive: {
          duration: .3,
          actions: [{
            p: 'shader.strokeColor',
            v: {
              1: 0xffffffff,
              0: 0xff000000
            }
          }, {
            p: 'scale',
            v: {
              0: 1,
              1: 1.2
            }
          }, {
            p: 'y',
            v: {
              0: 0,
              1: -100
            }
          }]
        },
        animationDemoInactive: {
          duration: .3,
          actions: [{
            p: 'shader.strokeColor',
            v: {
              0: 0xffffffff,
              1: 0xff000000
            }
          }, {
            p: 'scale',
            v: {
              1: 1,
              0: 1.2
            }
          }, {
            p: 'y',
            v: {
              1: 0,
              0: -100
            }
          }]
        },
        movie,
        testValue: 'testvaluestring'
      }));
    }
    updateBackgroundImage(backdrop_path) {}
    handleChangeBackgroundImage(backdrop_path) {
      let newBackDrop;
      if (backdrop_path === "images/background.png") {
        newBackDrop = Utils.asset(backdrop_path);
      } else {
        newBackDrop = "https://image.tmdb.org/t/p/w500/".concat(backdrop_path);
      }
      this.src = newBackDrop;
    }
    // handleChangeBackgroundImage(backdrop_path) {
    //     this.src = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    // }
    handleChangeSynopsis(currentMovie) {
      this.tag('Synopsis_Shortened').patch({
        children: [{
          type: Synopsis_Shortened,
          movie: currentMovie
        }]
      });
    }
    _getCurrentIndex() {
      return this.tag('MyCarousel');
    }
    _getFocused() {
      return this.tag('MyCarousel');
    }
    async _init() {
      var _this$favoriteMovies;
      this.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
      this.upComingMovies = await getUpcomingMovies();
      if ((this === null || this === void 0 ? void 0 : (_this$favoriteMovies = this.favoriteMovies) === null || _this$favoriteMovies === void 0 ? void 0 : _this$favoriteMovies.length) == 0) {
        this.favoriteMovies = this.upComingMovies.results;
      }
      this.movieList = this.handleCreateMovieList(this.favoriteMovies);
      this.myC = this.tag("MyCarousel");
      this.myC.autoResize = true;
      this.myC.add(this.movieList);
      this.myC.first();
    }
    _active() {
      this.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
      this.movieList = this.handleCreateMovieList(this.favoriteMovies);
      this.myC.reload(this.movieList);
    }
    _handleUp() {
      Router.focusWidget('Menu');
    } //this.historyState
  }

  var routes = {
    root: 'home',
    routes: [{
      path: '$',
      component: Boot
    }, {
      path: 'home',
      component: HomePage,
      widgets: ['Menu']
    }, {
      path: 'moviedetails/:movieID',
      component: MovieDetailsPage,
      name: 'moviedetails',
      widgets: ['Menu']
    }, {
      path: 'similarmovies/:movieID',
      component: SimilarMoviesPage,
      name: 'similarmovies',
      widgets: ['Menu']
    }, {
      path: 'favorites',
      component: FavoritesPage,
      name: 'favorites',
      widgets: ['Menu']
    }],
    beforeEachRoute(from, to) {
      {
        return true;
      }
    },
    afterEachRoute(to) {}
  };

  class Icon extends Lightning$1.Component {
    static _template() {
      return {
        y: 10
      };
    }
    _init() {
      if (this.page == 'Go Back') {
        this.patch({
          src: Utils.asset('images/goback-w.png'),
          shader: null
        });
      } // normally black use shader on focus to set highlighted == white
      else this.patch({
        src: Utils.asset('images/' + this.page + '-w.png'),
        shader: {
          type: Lightning$1.shaders.Inversion
        }
      }); // shader off if white on focus
    }

    _unfocus() {
      if (this.page == 'Go Back') {
        this.patch({
          src: Utils.asset('images/goback-w.png'),
          shader: null
        });
      } // normally black use shader on focus to set highlighted == white
      else this.patch({
        src: Utils.asset('images/' + this.page + '-w.png'),
        shader: {
          type: Lightning$1.shaders.Inversion
        }
      }); // shader off if white on focus
    }

    _focus() {
      if (this.page == 'Go Back') {
        this.patch({
          src: Utils.asset('images/goback-w.png'),
          shader: {
            type: Lightning$1.shaders.Inversion
          }
        });
      } // normally black use shader on focus to set highlighted == white
      else this.patch({
        src: Utils.asset('images/' + this.page + '-w.png'),
        shader: null
      }); // shader off if white on focus
    }
  }

  class Menu extends Lightning$1.Component {
    static _template() {
      return {
        // y: 495,//595
        y: 595,
        //495
        Background: {
          rect: true,
          w: 800,
          h: 110,
          x: 960,
          y: 540,
          mount: 0.5,
          color: 0x99000000,
          src: Utils.asset('images/background.png'),
          flex: {
            direction: 'row',
            justifyContent: 'space-evenly'
          },
          GoBack: {
            type: Icon,
            page: 'Go Back',
            // src: Utils.asset('images/video-w.png'),
            src: Utils.asset('images/goback-w.png')
            // rotation: 30 * 9 * Math.PI / 180,
            //// src: Utils.asset('images/up-arrow.png'),
            //// rotation: 30 * 9 * Math.PI / 180,
            // shader: { type: Lightning.shaders.Inversion }
            // shader: null
            // shader: { type: Lightning.shaders.Perspective, rx:
            //    30 * 9 * Math.PI / 180
            //    }
          },

          Home: {
            type: Icon,
            page: 'home',
            src: Utils.asset('images/home-w.png')
          },
          Favorites: {
            type: Icon,
            page: 'favorites',
            icon: '',
            routePath: 'favorites',
            src: Utils.asset('images/favorites-w.png')
          }
        },
        Arrow: {
          x: 960,
          y: 400,
          mount: 0.5,
          src: Utils.asset('images/up-arrow.png')
        }
      };
    }
    _init() {
      this.index = 0;
    }
    _handleLeft() {
      if (this.index == 0) {
        return;
      }
      this.index--;
    }
    _handleRight() {
      if (this.index == this.tag('Background').children.length - 1) {
        return;
      }
      this.index++;
    }
    _handleEnter() {
      Router.focusPage();
      const isFirstPage = !Router.getHistory().length;
      if (this.getCurrentIcon().__ref == 'GoBack') {
        if (isFirstPage) {
          return;
        } else {
          Router.back();
        }
      } else {
        Router.navigate(this.getCurrentIcon().page);
      }
    }
    _handleDown() {
      Router.focusPage();
    }
    _handleKey() {}
    _getFocused() {
      return this.getCurrentIcon();
    }
    getCurrentIcon() {
      return this.tag('Background').children[this.index];
    }
    _focus() {
      this.patch({
        smooth: {
          y: 495
        },
        Arrow: {
          rotation: Math.PI
        }
      });
    }
    _unfocus() {
      this.patch({
        smooth: {
          y: 595
        },
        Arrow: {
          rotation: 0
        }
      });
    }
  }

  class App extends Router.App {
    constructor() {
      super(...arguments);
      _defineProperty(this, "fallbackBackdrop", "images/background.png");
    }
    static getFonts() {
      return [{
        family: 'Regular',
        url: Utils.asset('fonts/Roboto-Regular.ttf')
      }];
    }
    static _template() {
      return {
        ...super._template(),
        Widgets: {
          Menu: {
            type: Menu
          }
        }
      };
    }
    _setup() {
      Router.startRouter(routes, this);
      let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
      if (favoriteMovies === null) {
        localStorage.setItem('favoriteMovies', JSON.stringify([{
          "adult": false,
          "backdrop_path": "images/background.png",
          "genre_ids": [16, 12, 10751, 14, 35],
          "id": 0,
          "original_language": "en",
          "original_title": "Favorite Movie Title",
          "overview": "Add movies to the favorites list using the add to favorites button on Movie Details Screen.",
          "popularity": 12929.143,
          "poster_path": "images/logo.png",
          "release_date": "2023-04-05",
          "title": "Favorite Movie Title",
          "video": false,
          "vote_average": 10,
          "vote_count": 896
        }]));
        favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
      }
    }
    _init() {}
  }

  function index () {
    return Launch(App, ...arguments);
  }

  return index;

})();
