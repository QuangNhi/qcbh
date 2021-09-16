(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"0366":function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("a04b"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=s(t),e=a(e),u)try{return l(t,e)}catch(n){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Vs})),n.d(e,"b",(function(){return Ko})),n.d(e,"c",(function(){return Fs})),n.d(e,"d",(function(){return Wo})),n.d(e,"e",(function(){return Ps})),n.d(e,"f",(function(){return Ms})),n.d(e,"g",(function(){return Qo})),n.d(e,"h",(function(){return Us}));var r=n("5606"),i=n("ffa6"),o=n("abfd"),s=n("a8e9"),a=n("c7b2");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="9.0.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new o["b"]("@firebase/firestore");function h(){return l.logLevel}function f(t,...e){if(l.logLevel<=o["a"].DEBUG){const n=e.map(g);l.debug(`Firestore (${u}): ${t}`,...n)}}function d(t,...e){if(l.logLevel<=o["a"].ERROR){const n=e.map(g);l.error(`Firestore (${u}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=o["a"].WARN){const n=e.map(g);l.warn(`Firestore (${u}): ${t}`,...n)}}function g(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(t="Unexpected state"){const e=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+t;throw d(e),new Error(e)}function v(t,e){t||m()}function y(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(c.UNAUTHENTICATED))}shutdown(){}}class I{constructor(t){this.t=t,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new _;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _,t.enqueueRetryable(()=>r(this.currentUser))};const o=e=>{t.enqueueRetryable(async()=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),await i.promise,await r(this.currentUser)})};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _)}},0),t.enqueueRetryable(async()=>{0===this.i&&(await i.promise,await r(this.currentUser))})}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new E(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new c(t)}}class S{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=c.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class k{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new S(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */A.T=-1;class C{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=O(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function N(t,e){return t<e?-1:t>e?1:0}function x(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new w(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new w(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new w(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return R.fromMillis(Date.now())}static fromDate(t){return R.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new R(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.timestamp=t}static fromTimestamp(t){return new D(t)}static min(){return new D(new R(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function P(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function j(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,e,n){void 0===e?e=0:e>t.length&&m(),void 0===n?n=t.length-e:n>t.length-e&&m(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===M.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof M?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class U extends M{construct(t,e,n){return new U(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new w(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new U(e)}static emptyPath(){return new U([])}}const F=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class V extends M{construct(t,e,n){return new V(t,e,n)}static isValidIdentifier(t){return F.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),V.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new V(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new w(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new w(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new w(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new w(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new V(e)}static emptyPath(){return new V([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.fields=t,t.sort(V.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return x(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new B(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new B(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}B.EMPTY_BYTE_STRING=new B("");const q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function H(t){if(v(!!t),"string"==typeof t){let e=0;const n=q.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:z(t.seconds),nanos:z(t.nanos)}}function z(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function G(t){return"string"==typeof t?B.fromBase64String(t):B.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function W(t){const e=t.mapValue.fields.__previous_value__;return K(e)?W(e):e}function J(t){const e=H(t.mapValue.fields.__local_write_time__.timestampValue);return new R(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return null==t}function Q(t){return 0===t&&1/t==-1/0}function Y(t){return"number"==typeof t&&Number.isInteger(t)&&!Q(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.path=t}static fromPath(t){return new Z(U.fromString(t))}static fromName(t){return new Z(U.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===U.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return U.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Z(new U(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?K(t)?4:10:m()}function et(t,e){const n=tt(t);if(n!==tt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return J(t).isEqual(J(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=H(t.timestampValue),r=H(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return G(t.bytesValue).isEqual(G(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return z(t.geoPointValue.latitude)===z(e.geoPointValue.latitude)&&z(t.geoPointValue.longitude)===z(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return z(t.integerValue)===z(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=z(t.doubleValue),r=z(e.doubleValue);return n===r?Q(n)===Q(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return x(t.arrayValue.values||[],e.arrayValue.values||[],et);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(L(n)!==L(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!et(n[i],r[i])))return!1;return!0}(t,e);default:return m()}}function nt(t,e){return void 0!==(t.values||[]).find(t=>et(t,e))}function rt(t,e){const n=tt(t),r=tt(e);if(n!==r)return N(n,r);switch(n){case 0:return 0;case 1:return N(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=z(t.integerValue||t.doubleValue),r=z(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return it(t.timestampValue,e.timestampValue);case 4:return it(J(t),J(e));case 5:return N(t.stringValue,e.stringValue);case 6:return function(t,e){const n=G(t),r=G(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=N(n[i],r[i]);if(0!==t)return t}return N(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=N(z(t.latitude),z(e.latitude));return 0!==n?n:N(z(t.longitude),z(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=rt(n[i],r[i]);if(t)return t}return N(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=N(r[s],o[s]);if(0!==t)return t;const e=rt(n[r[s]],i[o[s]]);if(0!==e)return e}return N(r.length,o.length)}(t.mapValue,e.mapValue);default:throw m()}}function it(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return N(t,e);const n=H(t),r=H(e),i=N(n.seconds,r.seconds);return 0!==i?i:N(n.nanos,r.nanos)}function ot(t){return st(t)}function st(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=H(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?G(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=st(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${st(t.fields[i])}`;return n+"}"}(t.mapValue):m();var e,n}function at(t){return!!t&&"integerValue"in t}function ct(t){return!!t&&"arrayValue"in t}function ut(t){return!!t&&"nullValue"in t}function lt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ht(t){return!!t&&"mapValue"in t}function ft(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return P(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ft(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ft(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.value=t}static empty(){return new dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ht(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ft(e)}setAll(t){let e=V.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ft(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ht(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return et(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ht(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){P(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new dt(ft(this.value))}}function pt(t){const e=[];return P(t.fields,(t,n)=>{const r=new V([t]);if(ht(n)){const t=pt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new $(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class gt{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new gt(t,0,D.min(),dt.empty(),0)}static newFoundDocument(t,e,n){return new gt(t,1,e,n,0)}static newNoDocument(t,e){return new gt(t,2,e,dt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,dt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new gt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.A=null}}function vt(t,e=null,n=[],r=[],i=null,o=null,s=null){return new mt(t,e,n,r,i,o,s)}function yt(t){const e=y(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Tt(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),X(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Dt(e.startAt)),e.endAt&&(t+="|ub:",t+=Dt(e.endAt)),e.A=t}return e.A}function bt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ot(e.value)}`;var e}).join(", ")}]`),X(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Dt(t.startAt)),t.endAt&&(e+=", endAt: "+Dt(t.endAt)),`Target(${e})`}function wt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Pt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!et(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mt(t.startAt,e.startAt)&&Mt(t.endAt,e.endAt)}function _t(t){return Z.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Et extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new It(t,e,n):"array-contains"===e?new Ot(t,n):"in"===e?new Ct(t,n):"not-in"===e?new Nt(t,n):"array-contains-any"===e?new xt(t,n):new Et(t,e,n)}static R(t,e,n){return"in"===e?new St(t,n):new kt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(rt(e,this.value)):null!==e&&tt(this.value)===tt(e)&&this.P(rt(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return m()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Tt(t){return t.field.canonicalString()+t.op.toString()+ot(t.value)}class It extends Et{constructor(t,e,n){super(t,e,n),this.key=Z.fromName(n.referenceValue)}matches(t){const e=Z.comparator(t.key,this.key);return this.P(e)}}class St extends Et{constructor(t,e){super(t,"in",e),this.keys=At("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kt extends Et{constructor(t,e){super(t,"not-in",e),this.keys=At("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function At(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>Z.fromName(t.referenceValue))}class Ot extends Et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ct(e)&&nt(e.arrayValue,this.value)}}class Ct extends Et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&nt(this.value.arrayValue,e)}}class Nt extends Et{constructor(t,e){super(t,"not-in",e)}matches(t){if(nt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!nt(this.value.arrayValue,e)}}class xt extends Et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ct(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>nt(this.value.arrayValue,t))}}class Rt{constructor(t,e){this.position=t,this.before=e}}function Dt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ot(t)).join(",")}`}class Lt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Pt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function jt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?Z.comparator(Z.fromName(s.referenceValue),n.key):rt(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Mt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!et(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Ft(t,e,n,r,i,o,s,a){return new Ut(t,e,n,r,i,o,s,a)}function Vt(t){return new Ut(t)}function $t(t){return!X(t.limit)&&"F"===t.limitType}function Bt(t){return!X(t.limit)&&"L"===t.limitType}function qt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ht(t){for(const e of t.filters)if(e.v())return e.field;return null}function zt(t){return null!==t.collectionGroup}function Gt(t){const e=y(t);if(null===e.V){e.V=[];const t=Ht(e),n=qt(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Lt(t)),e.V.push(new Lt(V.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Lt(V.keyField(),t))}}}return e.V}function Kt(t){const e=y(t);if(!e.S)if("F"===e.limitType)e.S=vt(e.path,e.collectionGroup,Gt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Gt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Lt(i.field,e))}const n=e.endAt?new Rt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Rt(e.startAt.position,!e.startAt.before):null;e.S=vt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function Wt(t,e,n){return new Ut(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jt(t,e){return wt(Kt(t),Kt(e))&&t.limitType===e.limitType}function Xt(t){return`${yt(Kt(t))}|lt:${t.limitType}`}function Qt(t){return`Query(target=${bt(Kt(t))}; limitType=${t.limitType})`}function Yt(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Z.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!jt(t.startAt,Gt(t),e))&&(!t.endAt||!jt(t.endAt,Gt(t),e))}(t,e)}function Zt(t){return(e,n)=>{let r=!1;for(const i of Gt(t)){const t=te(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function te(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?rt(r,i):m()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return m()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Q(e)?"-0":e}}function ne(t){return{integerValue:""+t}}function re(t,e){return Y(e)?ne(e):ee(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this._=void 0}}function oe(t,e,n){return t instanceof ce?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ue?le(t,e):t instanceof he?fe(t,e):function(t,e){const n=ae(t,e),r=pe(n)+pe(t.C);return at(n)&&at(t.C)?ne(r):ee(t.N,r)}(t,e)}function se(t,e,n){return t instanceof ue?le(t,e):t instanceof he?fe(t,e):n}function ae(t,e){return t instanceof de?at(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ce extends ie{}class ue extends ie{constructor(t){super(),this.elements=t}}function le(t,e){const n=ge(e);for(const r of t.elements)n.some(t=>et(t,r))||n.push(r);return{arrayValue:{values:n}}}class he extends ie{constructor(t){super(),this.elements=t}}function fe(t,e){let n=ge(e);for(const r of t.elements)n=n.filter(t=>!et(t,r));return{arrayValue:{values:n}}}class de extends ie{constructor(t,e){super(),this.N=t,this.C=e}}function pe(t){return z(t.integerValue||t.doubleValue)}function ge(t){return ct(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ue&&e instanceof ue||t instanceof he&&e instanceof he?x(t.elements,e.elements,et):t instanceof de&&e instanceof de?et(t.C,e.C):t instanceof ce&&e instanceof ce}(t.transform,e.transform)}class ve{constructor(t,e){this.version=t,this.transformResults=e}}class ye{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ye}static exists(t){return new ye(void 0,t)}static updateTime(t){return new ye(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function be(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class we{}function _e(t,e,n){t instanceof ke?function(t,e,n){const r=t.value.clone(),i=Ce(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ae?function(t,e,n){if(!be(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ce(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Oe(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ee(t,e,n){t instanceof ke?function(t,e,n){if(!be(t.precondition,e))return;const r=t.value.clone(),i=Ne(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Se(e),r).setHasLocalMutations()}(t,e,n):t instanceof Ae?function(t,e,n){if(!be(t.precondition,e))return;const r=Ne(t.fieldTransforms,n,e),i=e.data;i.setAll(Oe(t)),i.setAll(r),e.convertToFoundDocument(Se(e),i).setHasLocalMutations()}(t,e,n):function(t,e){be(t.precondition,e)&&e.convertToNoDocument(D.min())}(t,e)}function Te(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ae(r.transform,t||null);null!=i&&(null==n&&(n=dt.empty()),n.set(r.field,i))}return n||null}function Ie(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&x(t,e,(t,e)=>me(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Se(t){return t.isFoundDocument()?t.version:D.min()}class ke extends we{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ae extends we{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Oe(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ce(t,e,n){const r=new Map;v(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,se(s,a,n[i]))}return r}function Ne(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,oe(t,o,e))}return r}class xe extends we{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Re extends we{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,Pe;function je(t){switch(t){case b.OK:return m();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return m()}}function Me(t){if(void 0===t)return d("GRPC error has no .code"),b.UNKNOWN;switch(t){case Le.OK:return b.OK;case Le.CANCELLED:return b.CANCELLED;case Le.UNKNOWN:return b.UNKNOWN;case Le.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Le.INTERNAL:return b.INTERNAL;case Le.UNAVAILABLE:return b.UNAVAILABLE;case Le.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Le.NOT_FOUND:return b.NOT_FOUND;case Le.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Le.ABORTED:return b.ABORTED;case Le.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Le.DATA_LOSS:return b.DATA_LOSS;default:return m()}}(Pe=Le||(Le={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(t,e){this.comparator=t,this.root=e||Ve.EMPTY}insert(t,e){return new Ue(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(t){return new Ue(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fe(this.root,t,this.comparator,!0)}}class Fe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ve{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ve.RED,this.left=null!=r?r:Ve.EMPTY,this.right=null!=i?i:Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ve(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ve.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw m();if(this.right.isRed())throw m();const t=this.left.check();if(t!==this.right.check())throw m();return t+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1,Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw m()}get value(){throw m()}get color(){throw m()}get left(){throw m()}get right(){throw m()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ve(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(t){this.comparator=t,this.data=new Ue(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Be(this.data.getIterator())}getIteratorFrom(t){return new Be(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof $e))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new $e(this.comparator);return e.data=t,e}}class Be{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new Ue(Z.comparator);function He(){return qe}const ze=new Ue(Z.comparator);function Ge(){return ze}const Ke=new Ue(Z.comparator);function We(){return Ke}const Je=new $e(Z.comparator);function Xe(...t){let e=Je;for(const n of t)e=e.add(n);return e}const Qe=new $e(N);function Ye(){return Qe}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,tn.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ze(D.min(),n,Ye(),He(),Xe())}}class tn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new tn(B.EMPTY_BYTE_STRING,e,Xe(),Xe(),Xe())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class nn{constructor(t,e){this.targetId=t,this.O=e}}class rn{constructor(t,e,n=B.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class on{constructor(){this.F=0,this.M=cn(),this.L=B.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Xe(),e=Xe(),n=Xe();return this.M.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:m()}}),new tn(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=cn()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class sn{constructor(t){this.tt=t,this.et=new Map,this.nt=He(),this.st=an(),this.it=new $e(N)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:m()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(_t(t))if(0===n){const n=new Z(t.path);this.at(e,n,gt.newNoDocument(n,D.min()))}else v(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const i=this.dt(r);if(i){if(n.current&&_t(i.target)){const e=new Z(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,gt.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=Xe();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new Ze(t,e,this.it,this.nt,n);return this.nt=He(),this.st=an(),this.it=new $e(N),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new on,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new $e(N),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new on),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function an(){return new Ue(Z.comparator)}function cn(){return new Ue(Z.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ln=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class hn{constructor(t,e){this.databaseId=t,this.D=e}}function fn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dn(t,e){return t.D?e.toBase64():e.toUint8Array()}function pn(t,e){return fn(t,e.toTimestamp())}function gn(t){return v(!!t),D.fromTimestamp(function(t){const e=H(t);return new R(e.seconds,e.nanos)}(t))}function mn(t,e){return function(t){return new U(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function vn(t){const e=U.fromString(t);return v(Bn(e)),e}function yn(t,e){return mn(t.databaseId,e.path)}function bn(t,e){const n=vn(e);if(n.get(1)!==t.databaseId.projectId)throw new w(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(Tn(n))}function wn(t,e){return mn(t.databaseId,e)}function _n(t){const e=vn(t);return 4===e.length?U.emptyPath():Tn(e)}function En(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Tn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function In(t,e,n){return{name:yn(t,e),fields:n.value.mapValue.fields}}function Sn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:m()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.D?(v(void 0===e||"string"==typeof e),B.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),B.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?b.UNKNOWN:Me(t.code);return new w(e,t.message||"")}(s);n=new rn(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=bn(t,r.document.name),o=gn(r.document.updateTime),s=new dt({mapValue:{fields:r.document.fields}}),a=gt.newFoundDocument(i,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new en(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=bn(t,r.document),o=r.readTime?gn(r.readTime):D.min(),s=gt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new en([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=bn(t,r.document),o=r.removedTargetIds||[];n=new en([],o,i,null)}else{if(!("filter"in e))return m();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new De(r),o=t.targetId;n=new nn(o,i)}}return n}function kn(t,e){let n;if(e instanceof ke)n={update:In(t,e.key,e.value)};else if(e instanceof xe)n={delete:yn(t,e.key)};else if(e instanceof Ae)n={update:In(t,e.key,e.data),updateMask:$n(e.fieldMask)};else{if(!(e instanceof Re))return m();n={verify:yn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ce)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ue)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof he)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof de)return{fieldPath:e.field.canonicalString(),increment:n.C};throw m()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:pn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:m()}(t,e.precondition)),n}function An(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?gn(t.updateTime):gn(e);return n.isEqual(D.min())&&(n=gn(e)),new ve(n,t.transformResults||[])}(t,e))):[]}function On(t,e){return{documents:[wn(t,e.path)]}}function Cn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=wn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(lt(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NAN"}};if(ut(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(lt(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NOT_NAN"}};if(ut(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mn(t.field),op:jn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Mn(t.field),direction:Pn(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(t,e){return t.D||X(e)?e:{value:e}}(t,e.limit);return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=Dn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Dn(e.endAt)),n}function Nn(t){let e=_n(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=Rn(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(t=>function(t){return new Lt(Un(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,X(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Ln(n.startAt));let u=null;return n.endAt&&(u=Ln(n.endAt)),Ft(e,i,s,o,a,"F",c,u)}function xn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return m()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Rn(t){return t?void 0!==t.unaryFilter?[Vn(t)]:void 0!==t.fieldFilter?[Fn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Rn(t)).reduce((t,e)=>t.concat(e)):m():[]}function Dn(t){return{before:t.before,values:t.position}}function Ln(t){const e=!!t.before,n=t.values||[];return new Rt(n,e)}function Pn(t){return un[t]}function jn(t){return ln[t]}function Mn(t){return{fieldPath:t.canonicalString()}}function Un(t){return V.fromServerFormat(t.fieldPath)}function Fn(t){return Et.create(Un(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return m()}}(t.fieldFilter.op),t.fieldFilter.value)}function Vn(t){switch(t.unaryFilter.op){case"IS_NAN":Un(t.unaryFilter.field);return Et.create(r["e"],"==",{doubleValue:NaN});case"IS_NULL":Un(t.unaryFilter.field);return Et.create(r["d"],"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":Un(t.unaryFilter.field);return Et.create(r["c"],"!=",{doubleValue:NaN});case"IS_NOT_NULL":Un(t.unaryFilter.field);return Et.create(r["g"],"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return m()}}function $n(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Bn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=zn(e)),e=Hn(t.get(n),e);return zn(e)}function Hn(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function zn(t){return t+""}class Gn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Gn.store="owner",Gn.key="owner";class Kn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Kn.store="mutationQueues",Kn.keyPath="userId";class Wn{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Wn.store="mutations",Wn.keyPath="batchId",Wn.userMutationsIndex="userMutationsIndex",Wn.userMutationsKeyPath=["userId","batchId"];class Jn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,qn(e)]}static key(t,e,n){return[t,qn(e),n]}}Jn.store="documentMutations",Jn.PLACEHOLDER=new Jn;class Xn{constructor(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}Xn.store="remoteDocuments",Xn.readTimeIndex="readTimeIndex",Xn.readTimeIndexPath="readTime",Xn.collectionReadTimeIndex="collectionReadTimeIndex",Xn.collectionReadTimeIndexPath=["parentPath","readTime"];class Qn{constructor(t){this.byteSize=t}}Qn.store="remoteDocumentGlobal",Qn.key="remoteDocumentGlobalKey";class Yn{constructor(t,e,n,r,i,o,s){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}}Yn.store="targets",Yn.keyPath="targetId",Yn.queryTargetsIndexName="queryTargetsIndex",Yn.queryTargetsKeyPath=["canonicalId","targetId"];class Zn{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}Zn.store="targetDocuments",Zn.keyPath=["targetId","path"],Zn.documentTargetsIndex="documentTargetsIndex",Zn.documentTargetsKeyPath=["path","targetId"];class tr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}tr.key="targetGlobalKey",tr.store="targetGlobal";class er{constructor(t,e){this.collectionId=t,this.parent=e}}er.store="collectionParents",er.keyPath=["collectionId","parent"];class nr{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}nr.store="clientMetadata",nr.keyPath="clientId";class rr{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}rr.store="bundles",rr.keyPath="bundleId";class ir{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}ir.store="namedQueries",ir.keyPath="name";Kn.store,Wn.store,Jn.store,Xn.store,Yn.store,Gn.store,tr.store,Zn.store,nr.store,Qn.store,er.store,rr.store,ir.store;const or="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&m(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ar((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ar?e:ar.resolve(e)}catch(t){return ar.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ar.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ar.reject(e)}static resolve(t){return new ar((e,n)=>{e(t)})}static reject(t){return new ar((e,n)=>{n(t)})}static waitFor(t){return new ar((e,n)=>{let r=0,i=0,o=!1;t.forEach(t=>{++r,t.next(()=>{++i,o&&i===r&&e()},t=>n(t))}),o=!0,i===r&&e()})}static or(t){let e=ar.resolve(!1);for(const n of t)e=e.next(t=>t?ar.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&_e(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ee(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ee(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(D.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Xe())}isEqual(t){return this.batchId===t.batchId&&x(this.mutations,t.mutations,(t,e)=>Ie(t,e))&&x(this.baseMutations,t.baseMutations,(t,e)=>Ie(t,e))}}class lr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){v(t.mutations.length===n.length);let r=We();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new lr(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e,n,r,i=D.min(),o=D.min(),s=B.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(t){return new hr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t){this.Wt=t}}function dr(t){const e=Nn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Wt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{constructor(){this.Gt=new gr}addToCollectionParentIndex(t,e){return this.Gt.add(e),ar.resolve()}getCollectionParents(t,e){return ar.resolve(this.Gt.getEntries(e))}}class gr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new $e(U.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new $e(U.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new mr(t,mr.DEFAULT_COLLECTION_PERCENTILE,mr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mr.DEFAULT_COLLECTION_PERCENTILE=10,mr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mr.DEFAULT=new mr(41943040,mr.DEFAULT_COLLECTION_PERCENTILE,mr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mr.DISABLED=new mr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new vr(0)}static ie(){return new vr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yr(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==or)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){P(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return j(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.changes=new br(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:D.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:gt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ar.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}Pn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}bn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.Pn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return Z.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):zt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new Z(e)).next(t=>{let e=Ge();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let i=Ge();return this.Ht.getCollectionParents(t,r).next(o=>ar.forEach(o,o=>{const s=function(t,e){return new Ut(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.Dn(t,s,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Cn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=gt.newInvalidDocument(n),r=r.insert(n,i)),Ee(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{Yt(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=Xe();for(const o of e)for(const t of o.mutations)t instanceof Ae&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=Xe(),r=Xe();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Er(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(D.min())?this.Fn(t,e):this.On.bn(t,r).next(i=>{const s=this.Mn(e,i);return($t(e)||Bt(e))&&this.Ln(e.limitType,s,r,n)?this.Fn(t,e):(h()<=o["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Qt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(s.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new $e(Zt(t));return e.forEach((e,r)=>{Yt(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return h()<=o["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Qt(e)),this.On.getDocumentsMatchingQuery(t,e,D.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new Ue(N),this.qn=new br(t=>yt(t),wt),this.Kn=D.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new _r(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function Sr(t,e,n,r){return new Ir(t,e,n,r)}async function kr(t,e){const n=y(t);let r=n.In,i=n.Qn;const o=await n.persistence.runTransaction("Handle user change","readonly",t=>{let o;return n.In.getAllMutationBatches(t).next(s=>(o=s,r=n.persistence.getMutationQueue(e),i=new _r(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let s=Xe();for(const t of o){n.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return i.bn(t,s).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),o}function Ar(t,e){const n=y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=ar.resolve();return o.forEach(t=>{s=s.next(()=>r.getEntry(e,t)).next(e=>{const o=n.docVersions.get(t);v(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),s.next(()=>t.In.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.bn(t,r))})}function Or(t){const e=y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function Cr(t,e){const n=y(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const s=[];e.targetChanges.forEach((e,o)=>{const a=i.get(o);if(!a)return;s.push(n.ze.removeMatchingKeys(t,e.removedDocuments,o).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,o)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(o,u),function(t,e,n){return v(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&s.push(n.ze.updateTargetData(t,u))}});let a=He();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),s.push(Nr(t,o,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(D.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));s.push(e)}return ar.waitFor(s).next(()=>o.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=i,t))}function Nr(t,e,n,r,i){let o=Xe();return n.forEach(t=>o=o.add(t)),e.getEntries(t,o).next(t=>{let o=He();return n.forEach((n,s)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;s.isNoDocument()&&s.version.isEqual(D.min())?(e.removeEntry(n,c),o=o.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(s,c),o=o.insert(n,s)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),o})}function xr(t,e){const n=y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function Rr(t,e){const n=y(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(i=>i?(r=i,ar.resolve(r)):n.ze.allocateTargetId(t).next(i=>(r=new hr(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Dr(t,e,n){const r=y(t),i=r.Un.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!cr(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Lr(t,e,n){const r=y(t);let i=D.min(),o=Xe();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=y(t),i=r.qn.get(n);return void 0!==i?ar.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,Kt(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{o=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:D.min(),n?o:Xe())).next(t=>({documents:t,Gn:o})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return ar.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:gn(n.createTime)}),ar.resolve()}getNamedQuery(t,e){return ar.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:dr(t.bundledQuery),readTime:gn(t.readTime)}}(e)),ar.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.Zn=new $e(Mr.ts),this.es=new $e(Mr.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Mr(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new Mr(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new Z(new U([])),n=new Mr(e,t),r=new Mr(e,t+1),i=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),i.push(t.key)}),i}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Z(new U([])),n=new Mr(e,t),r=new Mr(e,t+1);let i=Xe();return this.es.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Mr(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Mr{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Z.comparator(t.key,e.key)||N(t.ls,e.ls)}static ns(t,e){return N(t.ls,e.ls)||Z.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new $e(Mr.ts)}checkEmpty(t){return ar.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new ur(i,e,n,r);this.In.push(o);for(const s of r)this.ds=this.ds.add(new Mr(s.key,i)),this.Ht.addToCollectionParentIndex(t,s.key.path.popLast());return ar.resolve(o)}lookupMutationBatch(t,e){return ar.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return ar.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return ar.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return ar.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Mr(e,0),r=new Mr(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);i.push(e)}),ar.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new $e(N);return e.forEach(t=>{const e=new Mr(t,0),r=new Mr(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),ar.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Z.isDocumentKey(i)||(i=i.child(""));const o=new Mr(new Z(i),0);let s=new $e(N);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.ls)),!0)},o),ar.resolve(this.gs(s))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return ar.forEach(e.mutations,r=>{const i=new Mr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new Mr(e,0),r=this.ds.firstAfterOrEqual(n);return ar.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,ar.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Ue(Z.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),o=i?i.size:0,s=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:s,readTime:n}),this.size+=s-o,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ar.resolve(n?n.document.clone():gt.newInvalidDocument(e))}getEntries(t,e){let n=He();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():gt.newInvalidDocument(t))}),ar.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=He();const i=new Z(e.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:t,value:{document:i,readTime:s}}=o.getNext();if(!e.path.isPrefixOf(t.path))break;s.compareTo(n)<=0||Yt(e,i)&&(r=r.insert(i.key,i.clone()))}return ar.resolve(r)}Es(t,e){return ar.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Vr(this)}getSize(t){return ar.resolve(this.size)}}class Vr extends wr{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),ar.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t){this.persistence=t,this.Ts=new br(t=>yt(t),wt),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.Is=0,this.As=new jr,this.targetCount=0,this.Rs=vr.se()}forEachTarget(t,e){return this.Ts.forEach((t,n)=>e(n)),ar.resolve()}getLastRemoteSnapshotVersion(t){return ar.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ar.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),ar.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),ar.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new vr(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,ar.resolve()}updateTargetData(t,e){return this.ae(e),ar.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,ar.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)}),ar.waitFor(i).next(()=>r)}getTargetCount(t){return ar.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return ar.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),ar.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),ar.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),ar.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return ar.resolve(n)}containsKey(t,e){return ar.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e){this.Ps={},this.Le=new A(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new $r(this),this.Ht=new pr,this.He=function(t,e){return new Fr(t,e)}(this.Ht,t=>this.referenceDelegate.bs(t)),this.N=new fr(e),this.Je=new Pr(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new Ur(this.Ht,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new qr(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return ar.or(Object.values(this.Ps).map(n=>()=>n.containsKey(t,e)))}}class qr extends sr{constructor(t){super(),this.currentSequenceNumber=t}}class Hr{constructor(t){this.persistence=t,this.Ds=new jr,this.Cs=null}static Ns(t){return new Hr(t)}get xs(){if(this.Cs)return this.Cs;throw m()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),ar.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),ar.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),ar.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ar.forEach(this.xs,n=>{const r=Z.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}bs(t){return 0}ks(t,e){return ar.or([()=>ar.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.activeTargetIds=Ye()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Gr{constructor(){this.yi=new zr,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new zr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.Pi=[],this.bi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}bi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);f("RestConnection","Sending: ",i,n);const o={};return this.Ui(o,r),this.qi(t,i,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw p("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+u,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Jr[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((i,o)=>{const s=new a["g"];s.listenOnce(a["c"].COMPLETE,()=>{try{switch(s.getLastErrorCode()){case a["a"].NO_ERROR:const e=s.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),o(new w(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=s.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const t=s.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(t.status);o(new w(e,t.message))}else o(new w(b.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new w(b.UNAVAILABLE,"Connection failed."));break;default:m()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);s.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a["d"]({})),this.Ui(o.initMessageHeaders,e),Object(s["o"])()||Object(s["p"])()||Object(s["l"])()||Object(s["n"])()||Object(s["r"])()||Object(s["k"])()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");f("Connection","Creating WebChannel: "+c,o);const u=r.createWebChannel(c,o);let l=!1,h=!1;const d=new Xr({vi:t=>{h?f("Connection","Not sending because WebChannel is closed:",t):(l||(f("Connection","Opening WebChannel transport."),u.open(),l=!0),f("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(u,a["f"].EventType.OPEN,()=>{h||f("Connection","WebChannel transport opened.")}),g(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,f("Connection","WebChannel transport closed"),d.$i())}),g(u,a["f"].EventType.ERROR,t=>{h||(h=!0,p("Connection","WebChannel transport errored:",t),d.$i(new w(b.UNAVAILABLE,"The operation could not be completed")))}),g(u,a["f"].EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];v(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){f("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Le[t];if(void 0!==e)return Me(e)}(t),n=i.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,d.$i(new w(e,n)),u.close()}else f("Connection","WebChannel received:",n),d.Oi(n)}}),g(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t){return new hn(t,!0)}class ti{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,n,r,i,o){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new ti(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(d(e.toString()),d("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===b.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new w(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ni extends ei{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=Sn(this.N,t),n=function(t){if(!("targetChange"in t))return D.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?D.min():e.readTime?gn(e.readTime):D.min()}(t);return this.listener.Tr(e,n)}Ir(t){const e={};e.database=En(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=_t(r)?{documents:On(t,r)}:{query:Cn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=dn(t,e.resumeToken):e.snapshotVersion.compareTo(D.min())>0&&(n.readTime=fn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=xn(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=En(this.N),e.removeTarget=t,this.wr(e)}}class ri extends ei{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.N=r,this.Rr=!1}get Pr(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.br([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=An(t.writeResults,t.commitTime),n=gn(t.commitTime);return this.listener.vr(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=En(this.N),this.wr(t)}br(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>kn(this.N,t))};this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new w(b.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(b.UNKNOWN,t.toString())})}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(b.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class oi{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(d(e),this.$r=!1):f("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei(t=>{n.enqueueAndForget(async()=>{gi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=y(t);e.Kr.add(4),await ci(e),e.Wr.set("Unknown"),e.Kr.delete(4),await ai(e)}(this))})}),this.Wr=new oi(n,r)}}async function ai(t){if(gi(t))for(const e of t.jr)await e(!0)}async function ci(t){for(const e of t.jr)await e(!1)}function ui(t,e){const n=y(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),pi(n)?di(n):Ri(n).cr()&&hi(n,e))}function li(t,e){const n=y(t),r=Ri(n);n.qr.delete(e),r.cr()&&fi(n,e),0===n.qr.size&&(r.cr()?r.lr():gi(n)&&n.Wr.set("Unknown"))}function hi(t,e){t.Gr.Y(e.targetId),Ri(t).Ir(e)}function fi(t,e){t.Gr.Y(e),Ri(t).Ar(e)}function di(t){t.Gr=new sn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),Ri(t).start(),t.Wr.Or()}function pi(t){return gi(t)&&!Ri(t).ar()&&t.qr.size>0}function gi(t){return 0===y(t).Kr.size}function mi(t){t.Gr=void 0}async function vi(t){t.qr.forEach((e,n)=>{hi(t,e)})}async function yi(t,e){mi(t),pi(t)?(t.Wr.Lr(e),di(t)):t.Wr.set("Unknown")}async function bi(t,e,n){if(t.Wr.set("Online"),e instanceof rn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await wi(t,n)}else if(e instanceof en?t.Gr.rt(e):e instanceof nn?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(D.min()))try{const e=await Or(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(B.EMPTY_BYTE_STRING,n.snapshotVersion)),fi(t,e);const r=new hr(n.target,e,1,n.sequenceNumber);hi(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await wi(t,e)}}async function wi(t,e,n){if(!cr(e))throw e;t.Kr.add(1),await ci(t),t.Wr.set("Offline"),n||(n=()=>Or(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await ai(t)})}function _i(t,e){return e().catch(n=>wi(t,n,e))}async function Ei(t){const e=y(t),n=Di(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Ti(e);)try{const t=await xr(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,Ii(e,t)}catch(t){await wi(e,t)}Si(e)&&ki(e)}function Ti(t){return gi(t)&&t.Ur.length<10}function Ii(t,e){t.Ur.push(e);const n=Di(t);n.cr()&&n.Pr&&n.br(e.mutations)}function Si(t){return gi(t)&&!Di(t).ar()&&t.Ur.length>0}function ki(t){Di(t).start()}async function Ai(t){Di(t).Sr()}async function Oi(t){const e=Di(t);for(const n of t.Ur)e.br(n.mutations)}async function Ci(t,e,n){const r=t.Ur.shift(),i=lr.from(r,e,n);await _i(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ei(t)}async function Ni(t,e){e&&Di(t).Pr&&await async function(t,e){if(n=e.code,je(n)&&n!==b.ABORTED){const n=t.Ur.shift();Di(t).hr(),await _i(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Ei(t)}var n}(t,e),Si(t)&&ki(t)}async function xi(t,e){const n=y(t);e?(n.Kr.delete(2),await ai(n)):e||(n.Kr.add(2),await ci(n),n.Wr.set("Unknown"))}function Ri(t){return t.zr||(t.zr=function(t,e,n){const r=y(t);return r.Cr(),new ni(e,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:vi.bind(null,t),Ci:yi.bind(null,t),Tr:bi.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),pi(t)?di(t):t.Wr.set("Unknown")):(await t.zr.stop(),mi(t))})),t.zr}function Di(t){return t.Hr||(t.Hr=function(t,e,n){const r=y(t);return r.Cr(),new ri(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:Ai.bind(null,t),Ci:Ni.bind(null,t),Vr:Oi.bind(null,t),vr:Ci.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Ei(t)):(await t.Hr.stop(),t.Ur.length>0&&(f("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Li{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Li(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new w(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pi(t,e){if(d("AsyncQueue",`${e}: ${t}`),cr(t))return new w(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Z.comparator(e.key,n.key):(t,e)=>Z.comparator(t.key,e.key),this.keyedMap=Ge(),this.sortedSet=new Ue(this.comparator)}static emptySet(t){return new ji(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ji))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ji;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.Jr=new Ue(Z.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):m():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ui{constructor(t,e,n,r,i,o,s,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Ui(t,e,ji.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.Xr=void 0,this.listeners=[]}}class Vi{constructor(){this.queries=new br(t=>Xt(t),Jt),this.onlineState="Unknown",this.Zr=new Set}}async function $i(t,e){const n=y(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Fi),i)try{o.Xr=await n.onListen(r)}catch(t){const n=Pi(t,`Initialization of query '${Qt(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.eo(n.onlineState),o.Xr&&e.no(o.Xr)&&zi(n)}async function Bi(t,e){const n=y(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function qi(t,e){const n=y(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.no(i)&&(r=!0);e.Xr=i}}r&&zi(n)}function Hi(t,e,n){const r=y(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function zi(t){t.Zr.forEach(t=>{t.next()})}class Gi{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ui(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Ui.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{constructor(t){this.key=t}}class Wi{constructor(t){this.key=t}}class Ji{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=Xe(),this.mutatedKeys=Xe(),this.po=Zt(t),this.Eo=new ji(this.po)}get To(){return this._o}Io(t,e){const n=e?e.Ao:new Mi,r=e?e.Eo:this.Eo;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a=$t(this.query)&&r.size===this.query.limit?r.last():null,c=Bt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=Yt(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(s=!0)),d&&(l?(o=o.add(l),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))}),$t(this.query)||Bt(this.query))for(;o.size>this.query.limit;){const t=$t(this.query)?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Eo:o,Ao:n,Ln:s,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return m()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.po(t.doc,e.doc)),this.Po(n);const o=e?this.bo():[],s=0===this.yo.size&&this.current?1:0,a=s!==this.mo;return this.mo=s,0!==i.length||a?{snapshot:new Ui(this.query,t.Eo,r,i,t.mutatedKeys,0===s,a,!1),vo:o}:{vo:o}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Mi,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}Po(t){t&&(t.addedDocuments.forEach(t=>this._o=this._o.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this._o=this._o.delete(t)),this.current=t.current)}bo(){if(!this.current)return[];const t=this.yo;this.yo=Xe(),this.Eo.forEach(t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))});const e=[];return t.forEach(t=>{this.yo.has(t)||e.push(new Wi(t))}),this.yo.forEach(n=>{t.has(n)||e.push(new Ki(n))}),e}So(t){this._o=t.Gn,this.yo=Xe();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Ui.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class Xi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Qi{constructor(t){this.key=t,this.Co=!1}}class Yi{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new br(t=>Xt(t),Jt),this.ko=new Map,this.$o=new Set,this.Oo=new Ue(Z.comparator),this.Fo=new Map,this.Mo=new jr,this.Lo={},this.Bo=new Map,this.Uo=vr.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Zi(t,e){const n=bo(t);let r,i;const o=n.xo.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Do();else{const t=await Rr(n.localStore,Kt(e)),o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await to(n,e,r,"current"===o),n.isPrimaryClient&&ui(n.remoteStore,t)}return i}async function to(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await Lr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Io(t,i)));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return fo(t,e.targetId,s.vo),s.snapshot}(t,e,n,r);const i=await Lr(t.localStore,e,!0),o=new Ji(e,i.Gn),s=o.Io(i.documents),a=tn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=o.applyChanges(s,t.isPrimaryClient,a);fo(t,n,c.vo);const u=new Xi(e,n,o);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function eo(t,e){const n=y(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(t=>!Jt(t,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Dr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),li(n.remoteStore,r.targetId),lo(n,r.targetId)}).catch(yr)):(lo(n,r.targetId),await Dr(n.localStore,r.targetId,!0))}async function no(t,e,n){const r=wo(t);try{const t=await function(t,e){const n=y(t),r=R.now(),i=e.reduce((t,e)=>t.add(e.key),Xe());let o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.bn(t,i).next(i=>{o=i;const s=[];for(const t of e){const e=Te(t,o.get(t.key));null!=e&&s.push(new Ae(t.key,e,pt(e.value.mapValue),ye.exists(!0)))}return n.In.addMutationBatch(t,r,s,e)})).then(t=>(t.applyToLocalDocumentSet(o),{batchId:t.batchId,changes:o}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new Ue(N)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await mo(r,t.changes),await Ei(r.remoteStore)}catch(t){const e=Pi(t,"Failed to persist write");n.reject(e)}}async function ro(t,e){const n=y(t);try{const t=await Cr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Fo.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?v(r.Co):t.removedDocuments.size>0&&(v(r.Co),r.Co=!1))}),await mo(n,t,e)}catch(t){await yr(t)}}function io(t,e,n){const r=y(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=y(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.eo(e)&&(r=!0)}),r&&zi(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oo(t,e,n){const r=y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),o=i&&i.key;if(o){let t=new Ue(Z.comparator);t=t.insert(o,gt.newNoDocument(o,D.min()));const n=Xe().add(o),i=new Ze(D.min(),new Map,new $e(N),t,n);await ro(r,i),r.Oo=r.Oo.remove(o),r.Fo.delete(e),go(r)}else await Dr(r.localStore,e,!1).then(()=>lo(r,e,n)).catch(yr)}async function so(t,e){const n=y(t),r=e.batch.batchId;try{const t=await Ar(n.localStore,e);uo(n,r,null),co(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mo(n,t)}catch(t){await yr(t)}}async function ao(t,e,n){const r=y(t);try{const t=await function(t,e){const n=y(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(v(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.bn(t,r))})}(r.localStore,e);uo(r,e,n),co(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mo(r,t)}catch(n){await yr(n)}}function co(t,e){(t.Bo.get(e)||[]).forEach(t=>{t.resolve()}),t.Bo.delete(e)}function uo(t,e,n){const r=y(t);let i=r.Lo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function lo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(e=>{t.Mo.containsKey(e)||ho(t,e)})}function ho(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(li(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),go(t))}function fo(t,e,n){for(const r of n)r instanceof Ki?(t.Mo.addReference(r.key,e),po(t,r)):r instanceof Wi?(f("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||ho(t,r.key)):m()}function po(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(f("SyncEngine","New document in limbo: "+n),t.$o.add(r),go(t))}function go(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new Z(U.fromString(e)),r=t.Uo.next();t.Fo.set(r,new Qi(n)),t.Oo=t.Oo.insert(n,r),ui(t.remoteStore,new hr(Kt(Vt(n.path)),r,2,A.T))}}async function mo(t,e,n){const r=y(t),i=[],o=[],s=[];r.xo.isEmpty()||(r.xo.forEach((t,a)=>{s.push(r.Ko(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Er.kn(a.targetId,t);o.push(e)}}))}),await Promise.all(s),r.No.Tr(i),await async function(t,e){const n=y(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>ar.forEach(e,e=>ar.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>ar.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!cr(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,o))}async function vo(t,e){const n=y(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await kr(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new w(b.CANCELLED,e))})}),t.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await mo(n,t.Wn)}}function yo(t,e){const n=y(t),r=n.Fo.get(e);if(r&&r.Co)return Xe().add(r.key);{let t=Xe();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.To)}return t}}function bo(t){const e=y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ro.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yo.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oo.bind(null,e),e.No.Tr=qi.bind(null,e.eventManager),e.No.jo=Hi.bind(null,e.eventManager),e}function wo(t){const e=y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=so.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ao.bind(null,e),e}class _o{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=Zr(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return Sr(this.persistence,new Tr,t.initialUser,this.N)}Go(t){return new Br(Hr.Ns,this.N)}Wo(t){return new Gr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Eo{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>io(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=vo.bind(null,this.syncEngine),await xi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Vi}createDatastore(t){const e=Zr(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Qr(r));var r;return function(t,e,n){return new ii(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>io(this.syncEngine,t,0),o=Wr.Pt()?new Wr:new Kr,new si(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new Yi(t,e,n,r,i,o);return s&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=y(t);f("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await ci(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=C.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{f("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=Pi(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function So(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await kr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ko(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ao(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=y(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=gi(n);n.Kr.add(3),await ci(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await ai(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Ao(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await So(t,new _o)),t.offlineComponents}async function Oo(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await ko(t,new Eo)),t.onlineComponents}function Co(t){return Oo(t).then(t=>t.syncEngine)}async function No(t){const e=await Oo(t),n=e.eventManager;return n.onListen=Zi.bind(null,e.syncEngine),n.onUnlisten=eo.bind(null,e.syncEngine),n}function xo(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new To({next:o=>{e.enqueueAndForget(()=>Bi(t,s));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new w(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new w(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:t=>i.reject(t)}),s=new Gi(Vt(n.path),o,{includeMetadataChanges:!0,uo:!0});return $i(t,s)}(await No(t),t.asyncQueue,e,n,r)),r.promise}function Ro(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new To({next:n=>{e.enqueueAndForget(()=>Bi(t,s)),n.fromCache&&"server"===r.source?i.reject(new w(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new Gi(n,o,{includeMetadataChanges:!0,uo:!0});return $i(t,s)}(await No(t),t.asyncQueue,e,n,r)),r.promise}class Do{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class Lo{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Lo&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e,n){if(!n)throw new w(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Mo(t,e,n,r){if(!0===e&&!0===r)throw new w(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uo(t){if(!Z.isDocumentKey(t))throw new w(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fo(t){if(Z.isDocumentKey(t))throw new w(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vo(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":m()}function $o(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vo(t);throw new w(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new w(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new w(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Mo("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bo({}),this._settingsFrozen=!1,t instanceof Lo?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new w(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(t.options.projectId)}(t))}get app(){if(!this._app)throw new w(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new w(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bo(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new T;switch(t.type){case"gapi":t.client;return v(!("object"!=typeof r["e"]||null===r["e"]||!r["e"].auth||!r["e"].auth.getAuthHeaderValueForFirstParty)),new k(r["e"],t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new w(b.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Po.get(t);e&&(f("ComponentProvider","Removing Datastore"),Po.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ho{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Go(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ho(this.firestore,t,this._key)}}class zo{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new zo(this.firestore,t,this._query)}}class Go extends zo{constructor(t,e,n){super(t,e,Vt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ho(this.firestore,null,new Z(t))}withConverter(t){return new Go(this.firestore,t,this._path)}}function Ko(t,e,...n){if(t=Object(s["i"])(t),jo("collection","path",e),t instanceof qo){const r=U.fromString(e,...n);return Fo(r),new Go(t,null,r)}{if(!(t instanceof Ho||t instanceof Go))throw new w(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=U.fromString(t.path,...n).child(U.fromString(e));return Fo(r),new Go(t.firestore,null,r)}}function Wo(t,e,...n){if(t=Object(s["i"])(t),1===arguments.length&&(e=C.I()),jo("doc","path",e),t instanceof qo){const r=U.fromString(e,...n);return Uo(r),new Ho(t,null,new Z(r))}{if(!(t instanceof Ho||t instanceof Go))throw new w(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(U.fromString(e,...n));return Uo(r),new Ho(t.firestore,t instanceof Go?t.converter:null,new Z(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jo{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new ti(this,"async_queue_retry"),this.Ea=()=>{const t=Yr();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=Yr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=Yr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise(()=>{});const e=new _;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!cr(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{throw this.ma=t,this.ga=!1,d("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=Li.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(r),r}Ta(){this.ma&&m()}verifyOperationInProgress(){}async Pa(){let t;do{t=this.fa,await t}while(t!==this.fa)}ba(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.Pa().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Pa()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class Xo extends qo{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Jo,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Zo(this),this._firestoreClient.terminate()}}function Qo(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function Yo(t){return t._firestoreClient||Zo(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zo(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Do(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Io(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new w(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new V(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(t){this._byteString=t}static fromBase64String(t){try{return new es(B.fromBase64String(t))}catch(t){throw new w(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new es(B.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new w(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new w(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=/^__.*__$/;class os{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new ke(t,this.data,e,this.fieldTransforms)}}class ss{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function as(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw m()}}class cs{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new cs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return Es(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(as(this.Da)&&is.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class us{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||Zr(t)}Ba(t,e,n,r=!1){return new cs({Da:t,methodName:e,La:n,path:V.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function ls(t){const e=t._freezeSettings(),n=Zr(t._databaseId);return new us(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hs(t,e,n,r,i,o={}){const s=t.Ba(o.merge||o.mergeFields?2:0,e,n,i);ys("Data must be an object, but it was:",s,r);const a=ms(r,s);let c,u;if(o.merge)c=new $(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=bs(e,r,n);if(!s.contains(i))throw new w(b.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ts(t,i)||t.push(i)}c=new $(t),u=s.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=s.fieldTransforms;return new os(new dt(a),c,u)}class fs extends ns{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(this._methodName+"() can only appear at the top level of your update data"):t.Fa(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof fs}}function ds(t,e,n,r){const i=t.Ba(1,e,n);ys("Data must be an object, but it was:",i,r);const o=[],a=dt.empty();P(r,(t,r)=>{const c=_s(e,t,n);r=Object(s["i"])(r);const u=i.$a(c);if(r instanceof fs)o.push(c);else{const t=gs(r,u);null!=t&&(o.push(c),a.set(c,t))}});const c=new $(o);return new ss(a,c,i.fieldTransforms)}function ps(t,e,n,r,i,o){const a=t.Ba(1,e,n),c=[bs(e,r,n)],u=[i];if(o.length%2!=0)throw new w(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<o.length;s+=2)c.push(bs(e,o[s])),u.push(o[s+1]);const l=[],h=dt.empty();for(let d=c.length-1;d>=0;--d)if(!Ts(l,c[d])){const t=c[d];let e=u[d];e=Object(s["i"])(e);const n=a.$a(t);if(e instanceof fs)l.push(t);else{const r=gs(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new $(l);return new ss(h,f,a.fieldTransforms)}function gs(t,e){if(vs(t=Object(s["i"])(t)))return ys("Unsupported field value:",e,t),ms(t,e);if(t instanceof ns)return function(t,e){if(!as(e.Da))throw e.Fa(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Fa(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=gs(i,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(s["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return re(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=R.fromDate(t);return{timestampValue:fn(e.N,n)}}if(t instanceof R){const n=new R(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:fn(e.N,n)}}if(t instanceof rs)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof es)return{bytesValue:dn(e.N,t._byteString)};if(t instanceof Ho){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:mn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa("Unsupported field value: "+Vo(t))}(t,e)}function ms(t,e){const n={};return j(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):P(t,(t,r)=>{const i=gs(r,e.Na(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function vs(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof R||t instanceof rs||t instanceof es||t instanceof Ho||t instanceof ns)}function ys(t,e,n){if(!vs(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Vo(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function bs(t,e,n){if((e=Object(s["i"])(e))instanceof ts)return e._internalPath;if("string"==typeof e)return _s(t,e);throw Es("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const ws=new RegExp("[~\\*/\\[\\]]");function _s(t,e,n){if(e.search(ws)>=0)throw Es(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ts(...e.split("."))._internalPath}catch(r){throw Es(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Es(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new w(b.INVALID_ARGUMENT,a+t+c)}function Ts(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ho(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ss(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ks("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ss extends Is{data(){return super.data()}}function ks(t,e){return"string"==typeof e?_s(t,e):e instanceof ts?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Os extends Is{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ks("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Cs extends Os{data(t={}){return super.data(t)}}class Ns{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new As(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Cs(this._firestore,this._userDataWriter,n.key,n,new As(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new w(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Cs(t._firestore,t._userDataWriter,n.doc.key,n.doc,new As(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Cs(t._firestore,t._userDataWriter,e.doc.key,e.doc,new As(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:xs(e.type),doc:r,oldIndex:i,newIndex:o}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function xs(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return m()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rs(t){if(Bt(t)&&0===t.explicitOrderBy.length)throw new w(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ds{convertValue(t,e="none"){switch(tt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(G(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw m()}}convertObject(t,e){const n={};return P(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new rs(z(t.latitude),z(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":W(t);return null==r["d"]?null:this.convertValue(r["d"],e);case"estimate":return this.convertTimestamp(J(t));default:return null}}convertTimestamp(t){const e=H(t);return new R(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=U.fromString(t);v(Bn(n));const r=new Lo(n.get(1),n.get(3)),i=new Z(n.popFirst(5));return r.isEqual(e)||d(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ps(t){t=$o(t,Ho);const e=$o(t.firestore,Xo);return xo(Yo(e),t._key).then(n=>Bs(e,t,n))}class js extends Ds{constructor(t){super(),this.firestore=t}convertBytes(t){return new es(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ho(this.firestore,null,e)}}function Ms(t){t=$o(t,zo);const e=$o(t.firestore,Xo),n=Yo(e),r=new js(e);return Rs(t._query),Ro(n,t._query).then(n=>new Ns(e,r,t,n))}function Us(t,e,n,...r){t=$o(t,Ho);const i=$o(t.firestore,Xo),o=ls(i);let a;return a="string"==typeof(e=Object(s["i"])(e))||e instanceof ts?ps(o,"updateDoc",t._key,e,n,r):ds(o,"updateDoc",t._key,e),$s(i,[a.toMutation(t._key,ye.exists(!0))])}function Fs(t){return $s($o(t.firestore,Xo),[new xe(t._key,ye.none())])}function Vs(t,e){const n=$o(t.firestore,Xo),r=Wo(t),i=Ls(t.converter,e);return $s(n,[hs(ls(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,ye.exists(!1))]).then(()=>r)}function $s(t,e){return function(t,e){const n=new _;return t.asyncQueue.enqueueAndForget(async()=>no(await Co(t),e,n)),n.promise}(Yo(t),e)}function Bs(t,e,n){const r=n.docs.get(e._key),i=new js(t);return new Os(t,i,e._key,r,new As(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qs;!function(t){u=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Xo(n,new I(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Object(r["g"])("@firebase/firestore","3.0.1",qs)}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),s=o("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?r(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),s=n("9112");for(var a in i){var c=r[a],u=c&&c.prototype;if(u&&u.forEach!==o)try{s(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)}))}}},2266:function(t,e,n){var r=n("825a"),i=n("e95a"),o=n("50c4"),s=n("0366"),a=n("9a1f"),c=n("35a1"),u=n("2a62"),l=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var h,f,d,p,g,m,v,y=n&&n.that,b=!(!n||!n.AS_ENTRIES),w=!(!n||!n.IS_ITERATOR),_=!(!n||!n.INTERRUPTED),E=s(e,y,1+b+_),T=function(t){return h&&u(h,"normal",t),new l(!0,t)},I=function(t){return b?(r(t),_?E(t[0],t[1],T):E(t[0],t[1])):_?E(t,T):E(t)};if(w)h=t;else{if(f=c(t),"function"!=typeof f)throw TypeError("Target is not iterable");if(i(f)){for(d=0,p=o(t.length);p>d;d++)if(g=I(t[d]),g&&g instanceof l)return g;return new l(!1)}h=a(t,f)}m=h.next;while(!(v=m.call(h)).done){try{g=I(v.value)}catch(S){u(h,"throw",S)}if("object"==typeof g&&g&&g instanceof l)return g}return new l(!1)}},"23cb":function(t,e,n){var r=n("a691"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d===typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"260b":function(t,e,n){"use strict";var r=n("5606");n.d(e,"a",(function(){return r["f"]}));var i="firebase",o="9.0.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,o,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},"28a0":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},"2a62":function(t,e,n){var r=n("825a");t.exports=function(t,e,n){var i,o;r(t);try{if(i=t["return"],void 0===i){if("throw"===e)throw n;return n}i=i.call(t)}catch(s){o=!0,i=s}if("throw"===e)throw n;if(o)throw i;return r(i),n}},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function s(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function m(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}m("slot,component",!0);var v=m("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(t,e){return b.call(t,e)}function _(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var E=/-(\w)/g,T=_((function(t){return t.replace(E,(function(t,e){return e?e.toUpperCase():""}))})),I=_((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),S=/\B([A-Z])/g,k=_((function(t){return t.replace(S,"-$1").toLowerCase()}));function A(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var C=Function.prototype.bind?O:A;function N(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function x(t,e){for(var n in e)t[n]=e[n];return t}function R(t){for(var e={},n=0;n<t.length;n++)t[n]&&x(e,t[n]);return e}function D(t,e,n){}var L=function(t,e,n){return!1},P=function(t){return t};function j(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return j(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return j(t[n],e[n])}))}catch(u){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if(j(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F="data-server-rendered",V=["component","directive","filter"],$=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:D,parsePlatformTagName:P,mustUseProp:L,async:!0,_lifecycleHooks:$},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function z(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^"+q.source+".$_\\d]");function K(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W,J="__proto__"in{},X="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=Q&&WXEnvironment.platform.toLowerCase(),Z=X&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,rt=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),it=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),ot={}.watch,st=!1;if(X)try{var at={};Object.defineProperty(at,"passive",{get:function(){st=!0}}),window.addEventListener("test-passive",null,at)}catch(Is){}var ct=function(){return void 0===W&&(W=!X&&!Q&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),W},ut=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function lt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,ft="undefined"!==typeof Symbol&&lt(Symbol)&&"undefined"!==typeof Reflect&&lt(Reflect.ownKeys);ht="undefined"!==typeof Set&&lt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var dt=D,pt=0,gt=function(){this.id=pt++,this.subs=[]};gt.prototype.addSub=function(t){this.subs.push(t)},gt.prototype.removeSub=function(t){y(this.subs,t)},gt.prototype.depend=function(){gt.target&&gt.target.addDep(this)},gt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},gt.target=null;var mt=[];function vt(t){mt.push(t),gt.target=t}function yt(){mt.pop(),gt.target=mt[mt.length-1]}var bt=function(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},wt={child:{configurable:!0}};wt.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,wt);var _t=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function Et(t){return new bt(void 0,void 0,void 0,String(t))}function Tt(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var It=Array.prototype,St=Object.create(It),kt=["push","pop","shift","unshift","splice","sort","reverse"];kt.forEach((function(t){var e=It[t];z(St,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var At=Object.getOwnPropertyNames(St),Ot=!0;function Ct(t){Ot=t}var Nt=function(t){this.value=t,this.dep=new gt,this.vmCount=0,z(t,"__ob__",this),Array.isArray(t)?(J?xt(t,St):Rt(t,St,At),this.observeArray(t)):this.walk(t)};function xt(t,e){t.__proto__=e}function Rt(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];z(t,o,e[o])}}function Dt(t,e){var n;if(c(t)&&!(t instanceof bt))return w(t,"__ob__")&&t.__ob__ instanceof Nt?n=t.__ob__:Ot&&!ct()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Nt(t)),e&&n&&n.vmCount++,n}function Lt(t,e,n,r,i){var o=new gt,s=Object.getOwnPropertyDescriptor(t,e);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Dt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return gt.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Mt(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!i&&Dt(e),o.notify())}})}}function Pt(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Lt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function jt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Mt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Mt(e)}Nt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Lt(t,e[n])},Nt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Dt(t[e])};var Ut=B.optionMergeStrategies;function Ft(t,e){if(!e)return t;for(var n,r,i,o=ft?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=t[n],i=e[n],w(t,n)?r!==i&&l(r)&&l(i)&&Ft(r,i):Pt(t,n,i));return t}function Vt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Ft(r,i):i}:e?t?function(){return Ft("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function $t(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Bt(n):n}function Bt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function qt(t,e,n,r){var i=Object.create(t||null);return e?x(i,e):i}Ut.data=function(t,e,n){return n?Vt(t,e,n):e&&"function"!==typeof e?t:Vt(t,e)},$.forEach((function(t){Ut[t]=$t})),V.forEach((function(t){Ut[t+"s"]=qt})),Ut.watch=function(t,e,n,r){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in x(i,t),e){var s=i[o],a=e[o];s&&!Array.isArray(s)&&(s=[s]),i[o]=s?s.concat(a):Array.isArray(a)?a:[a]}return i},Ut.props=Ut.methods=Ut.inject=Ut.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return x(i,t),e&&x(i,e),i},Ut.provide=Vt;var Ht=function(t,e){return void 0===e?t:e};function zt(t,e){var n=t.props;if(n){var r,i,o,s={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=T(i),s[o]={type:null})}else if(l(n))for(var a in n)i=n[a],o=T(a),s[o]=l(i)?i:{type:i};else 0;t.props=s}}function Gt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var s=n[o];r[o]=l(s)?x({from:o},s):{from:s}}else 0}}function Kt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Wt(t,e,n){if("function"===typeof e&&(e=e.options),zt(e,n),Gt(e,n),Kt(e),!e._base&&(e.extends&&(t=Wt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Wt(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)w(t,o)||a(o);function a(r){var i=Ut[r]||Ht;s[r]=i(t[r],e[r],n,r)}return s}function Jt(t,e,n,r){if("string"===typeof n){var i=t[e];if(w(i,n))return i[n];var o=T(n);if(w(i,o))return i[o];var s=I(o);if(w(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Xt(t,e,n,r){var i=e[t],o=!w(n,t),s=n[t],a=ee(Boolean,i.type);if(a>-1)if(o&&!w(i,"default"))s=!1;else if(""===s||s===k(t)){var c=ee(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Qt(r,i,t);var u=Ot;Ct(!0),Dt(s),Ct(u)}return s}function Qt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Zt(e.type)?r.call(t):r}}var Yt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Yt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){vt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Is){ie(Is,r,"errorCaptured hook")}}}ie(t,e,n)}finally{yt()}}function re(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&d(o)&&!o._handled&&(o.catch((function(t){return ne(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Is){ne(Is,r,i)}return o}function ie(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(Is){Is!==t&&oe(Is,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!X&&!Q||"undefined"===typeof console)throw t;console.error(t)}var se,ae=!1,ce=[],ue=!1;function le(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&lt(Promise)){var he=Promise.resolve();se=function(){he.then(le),rt&&setTimeout(D)},ae=!0}else if(tt||"undefined"===typeof MutationObserver||!lt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())se="undefined"!==typeof setImmediate&&lt(setImmediate)?function(){setImmediate(le)}:function(){setTimeout(le,0)};else{var fe=1,de=new MutationObserver(le),pe=document.createTextNode(String(fe));de.observe(pe,{characterData:!0}),se=function(){fe=(fe+1)%2,pe.data=String(fe)},ae=!0}function ge(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(Is){ne(Is,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,se()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var me=new ht;function ve(t){ye(t,me),me.clear()}function ye(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)ye(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)ye(t[r[n]],e)}}}var be=_((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function we(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return re(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)re(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function _e(t,e,n,i,s,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=be(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=we(u,a)),o(h.once)&&(u=t[c]=s(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(h=be(c),i(h.name,e[c],h.capture))}function Ee(t,e,n){var s;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),y(s.fns,c)}r(a)?s=we([c]):i(a.fns)&&o(a.merged)?(s=a,s.fns.push(c)):s=we([a,c]),s.merged=!0,t[e]=s}function Te(t,e,n){var o=e.options.props;if(!r(o)){var s={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var u in o){var l=k(u);Ie(s,c,u,l,!0)||Ie(s,a,u,l,!1)}return s}}function Ie(t,e,n,r,o){if(i(e)){if(w(e,n))return t[n]=e[n],o||delete e[n],!0;if(w(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Se(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ke(t){return a(t)?[Et(t)]:Array.isArray(t)?Oe(t):void 0}function Ae(t){return i(t)&&i(t.text)&&s(t.isComment)}function Oe(t,e){var n,s,c,u,l=[];for(n=0;n<t.length;n++)s=t[n],r(s)||"boolean"===typeof s||(c=l.length-1,u=l[c],Array.isArray(s)?s.length>0&&(s=Oe(s,(e||"")+"_"+n),Ae(s[0])&&Ae(u)&&(l[c]=Et(u.text+s[0].text),s.shift()),l.push.apply(l,s)):a(s)?Ae(u)?l[c]=Et(u.text+s):""!==s&&l.push(Et(s)):Ae(s)&&Ae(u)?l[c]=Et(u.text+s.text):(o(t._isVList)&&i(s.tag)&&r(s.key)&&i(e)&&(s.key="__vlist"+e+"_"+n+"__"),l.push(s)));return l}function Ce(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ne(t){var e=xe(t.$options.inject,t);e&&(Ct(!1),Object.keys(e).forEach((function(n){Lt(t,n,e[n])})),Ct(!0))}function xe(t,e){if(t){for(var n=Object.create(null),r=ft?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from,a=e;while(a){if(a._provided&&w(a._provided,s)){n[o]=a._provided[s];break}a=a.$parent}if(!a)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function Re(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(De)&&delete n[u];return n}function De(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Le(t){return t.isComment&&t.asyncFactory}function Pe(t,e,r){var i,o=Object.keys(e).length>0,s=t?!!t.$stable:!o,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&r&&r!==n&&a===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=je(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=Me(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),z(i,"$stable",s),z(i,"$key",a),z(i,"$hasNormal",o),i}function je(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ke(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Le(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Me(t,e){return function(){return t[e]}}function Ue(t,e){var n,r,o,s,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ft&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(s=Object.keys(t),n=new Array(s.length),r=0,o=s.length;r<o;r++)a=s[r],n[r]=e(t[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function Fe(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=x(x({},r),n)),i=o(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Ve(t){return Jt(this.$options,"filters",t,!0)||P}function $e(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Be(t,e,n,r,i){var o=B.keyCodes[e]||n;return i&&r&&!B.keyCodes[e]?$e(i,r):o?$e(o,t):r?k(r)!==e:void 0===t}function qe(t,e,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=R(n));var s=function(s){if("class"===s||"style"===s||v(s))o=t;else{var a=t.attrs&&t.attrs.type;o=r||B.mustUseProp(e,a,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=T(s),u=k(s);if(!(c in o)&&!(u in o)&&(o[s]=n[s],i)){var l=t.on||(t.on={});l["update:"+s]=function(t){n[s]=t}}};for(var a in n)s(a)}else;return t}function He(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ge(r,"__static__"+t,!1)),r}function ze(t,e,n){return Ge(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ge(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ke(t[r],e+"_"+r,n);else Ke(t,e,n)}function Ke(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function We(t,e){if(e)if(l(e)){var n=t.on=t.on?x({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Je(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Je(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Xe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Qe(t,e){return"string"===typeof t?e+t:t}function Ye(t){t._o=ze,t._n=g,t._s=p,t._l=Ue,t._t=Fe,t._q=j,t._i=M,t._m=He,t._f=Ve,t._k=Be,t._b=qe,t._v=Et,t._e=_t,t._u=Je,t._g=We,t._d=Xe,t._p=Qe}function Ze(t,e,r,i,s){var a,c=this,u=s.options;w(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=o(u._compiled),h=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=xe(u.inject,i),this.slots=function(){return c.$slots||Pe(t.scopedSlots,c.$slots=Re(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pe(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Pe(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=dn(a,t,e,n,r,h);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return dn(a,t,e,n,r,h)}}function tn(t,e,r,o,s){var a=t.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Xt(l,u,e||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var h=new Ze(r,c,s,o,t),f=a.render.call(null,h._c,h);if(f instanceof bt)return en(f,r,h.parent,a,h);if(Array.isArray(f)){for(var d=ke(f)||[],p=new Array(d.length),g=0;g<d.length;g++)p[g]=en(d[g],r,h.parent,a,h);return p}}function en(t,e,n,r,i){var o=Tt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function nn(t,e){for(var n in e)t[T(n)]=e[n]}Ye(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var r=t.componentInstance=an(t,xn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;jn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Vn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):Un(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Fn(e,!0):e.$destroy())}},on=Object.keys(rn);function sn(t,e,n,s,a){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=Tn(l,u),void 0===t))return En(l,e,n,s,a);e=e||{},Er(t),i(e.model)&&ln(t.options,e);var h=Te(e,t,a);if(o(t.options.functional))return tn(t,h,e,n,s);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}cn(e);var p=t.options.name||a,g=new bt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:a,children:s},l);return g}}}function an(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var r=on[n],i=e[r],o=rn[r];i===o||i&&i._merged||(e[r]=i?un(o,i):o)}}function un(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),s=o[r],a=e.model.callback;i(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(o[r]=[a].concat(s)):o[r]=a}var hn=1,fn=2;function dn(t,e,n,r,i,s){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),o(s)&&(i=fn),pn(t,e,n,r,i)}function pn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return _t();if(i(n)&&i(n.is)&&(e=n.is),!e)return _t();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===fn?r=ke(r):o===hn&&(r=Se(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||B.getTagNamespace(e),s=B.isReservedTag(e)?new bt(B.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Jt(t.$options,"components",e))?new bt(e,n,r,void 0,void 0,t):sn(c,n,t,r,e)):s=sn(e,n,t,r);return Array.isArray(s)?s:i(s)?(i(a)&&gn(s,a),i(n)&&mn(n),s):_t()}function gn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var s=0,a=t.children.length;s<a;s++){var c=t.children[s];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&gn(c,e,n)}}function mn(t){c(t.style)&&ve(t.style),c(t.class)&&ve(t.class)}function vn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Re(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return dn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return dn(t,e,n,r,i,!0)};var o=r&&r.data;Lt(t,"$attrs",o&&o.attrs||n,null,!0),Lt(t,"$listeners",e._parentListeners||n,null,!0)}var yn,bn=null;function wn(t){Ye(t.prototype),t.prototype.$nextTick=function(t){return ge(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Pe(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{bn=e,t=r.call(e._renderProxy,e.$createElement)}catch(Is){ne(Is,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=_t()),t.parent=i,t}}function _n(t,e){return(t.__esModule||ft&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function En(t,e,n,r,i){var o=_t();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function Tn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=bn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var s=t.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(s,n)}));var h=function(t){for(var e=0,n=s.length;e<n;e++)s[e].$forceUpdate();t&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},f=U((function(n){t.resolved=_n(n,e),a?s.length=0:h(!0)})),p=U((function(e){i(t.errorComp)&&(t.error=!0,h(!0))})),g=t(f,p);return c(g)&&(d(g)?r(t.resolved)&&g.then(f,p):d(g.component)&&(g.component.then(f,p),i(g.error)&&(t.errorComp=_n(g.error,e)),i(g.loading)&&(t.loadingComp=_n(g.loading,e),0===g.delay?t.loading=!0:u=setTimeout((function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),g.delay||200)),i(g.timeout)&&(l=setTimeout((function(){l=null,r(t.resolved)&&p(null)}),g.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function In(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||Le(n)))return n}}function Sn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Cn(t,e)}function kn(t,e){yn.$on(t,e)}function An(t,e){yn.$off(t,e)}function On(t,e){var n=yn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Cn(t,e,n){yn=t,_e(e,n||{},kn,An,On,t),yn=void 0}function Nn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;var a=s.length;while(a--)if(o=s[a],o===e||o.fn===e){s.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?N(n):n;for(var r=N(arguments,1),i='event handler for "'+t+'"',o=0,s=n.length;o<s;o++)re(n[o],e,r,e,i)}return e}}var xn=null;function Rn(t){var e=xn;return xn=t,function(){xn=e}}function Dn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Ln(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=Rn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Vn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Vn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Pn(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=_t),Vn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new rr(t,r,D,{before:function(){t._isMounted&&!t._isDestroyed&&Vn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Vn(t,"mounted")),t}function jn(t,e,r,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Ct(!1);for(var l=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var d=h[f],p=t.$options.props;l[d]=Xt(d,p,e,t)}Ct(!0),t.$options.propsData=e}r=r||n;var g=t.$options._parentListeners;t.$options._parentListeners=r,Cn(t,r,g),u&&(t.$slots=Re(o,i.context),t.$forceUpdate())}function Mn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Un(t,e){if(e){if(t._directInactive=!1,Mn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Un(t.$children[n]);Vn(t,"activated")}}function Fn(t,e){if((!e||(t._directInactive=!0,!Mn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Vn(t,"deactivated")}}function Vn(t,e){vt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)re(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),yt()}var $n=[],Bn=[],qn={},Hn=!1,zn=!1,Gn=0;function Kn(){Gn=$n.length=Bn.length=0,qn={},Hn=zn=!1}var Wn=0,Jn=Date.now;if(X&&!tt){var Xn=window.performance;Xn&&"function"===typeof Xn.now&&Jn()>document.createEvent("Event").timeStamp&&(Jn=function(){return Xn.now()})}function Qn(){var t,e;for(Wn=Jn(),zn=!0,$n.sort((function(t,e){return t.id-e.id})),Gn=0;Gn<$n.length;Gn++)t=$n[Gn],t.before&&t.before(),e=t.id,qn[e]=null,t.run();var n=Bn.slice(),r=$n.slice();Kn(),tr(n),Yn(r),ut&&B.devtools&&ut.emit("flush")}function Yn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Vn(r,"updated")}}function Zn(t){t._inactive=!1,Bn.push(t)}function tr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Un(t[e],!0)}function er(t){var e=t.id;if(null==qn[e]){if(qn[e]=!0,zn){var n=$n.length-1;while(n>Gn&&$n[n].id>t.id)n--;$n.splice(n+1,0,t)}else $n.push(t);Hn||(Hn=!0,ge(Qn))}}var nr=0,rr=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=K(e),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var t;vt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Is){if(!this.user)throw Is;ne(Is,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ve(t),yt(),this.cleanupDeps()}return t},rr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},rr.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():er(this)},rr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:D,set:D};function or(t,e,n){ir.get=function(){return this[e][n]},ir.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ir)}function sr(t){t._watchers=[];var e=t.$options;e.props&&ar(t,e.props),e.methods&&gr(t,e.methods),e.data?cr(t):Dt(t._data={},!0),e.computed&&hr(t,e.computed),e.watch&&e.watch!==ot&&mr(t,e.watch)}function ar(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||Ct(!1);var s=function(o){i.push(o);var s=Xt(o,e,n,t);Lt(r,o,s),o in t||or(t,"_props",o)};for(var a in e)s(a);Ct(!0)}function cr(t){var e=t.$options.data;e=t._data="function"===typeof e?ur(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&w(r,o)||H(o)||or(t,"_data",o)}Dt(e,!0)}function ur(t,e){vt();try{return t.call(e,e)}catch(Is){return ne(Is,e,"data()"),{}}finally{yt()}}var lr={lazy:!0};function hr(t,e){var n=t._computedWatchers=Object.create(null),r=ct();for(var i in e){var o=e[i],s="function"===typeof o?o:o.get;0,r||(n[i]=new rr(t,s||D,D,lr)),i in t||fr(t,i,o)}}function fr(t,e,n){var r=!ct();"function"===typeof n?(ir.get=r?dr(e):pr(n),ir.set=D):(ir.get=n.get?r&&!1!==n.cache?dr(e):pr(n.get):D,ir.set=n.set||D),Object.defineProperty(t,e,ir)}function dr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),gt.target&&e.depend(),e.value}}function pr(t){return function(){return t.call(this,this)}}function gr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?D:C(e[n],t)}function mr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)vr(t,n,r[i]);else vr(t,n,r)}}function vr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function yr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Pt,t.prototype.$delete=jt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return vr(r,t,e,n);n=n||{},n.user=!0;var i=new rr(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';vt(),re(e,r,[i.value],r,o),yt()}return function(){i.teardown()}}}var br=0;function wr(t){t.prototype._init=function(t){var e=this;e._uid=br++,e._isVue=!0,t&&t._isComponent?_r(e,t):e.$options=Wt(Er(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Dn(e),Sn(e),vn(e),Vn(e,"beforeCreate"),Ne(e),sr(e),Ce(e),Vn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function _r(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Er(t){var e=t.options;if(t.super){var n=Er(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Tr(t);i&&x(t.extendOptions,i),e=t.options=Wt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Tr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Ir(t){this._init(t)}function Sr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=N(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function kr(t){t.mixin=function(t){return this.options=Wt(this.options,t),this}}function Ar(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Wt(n.options,t),s["super"]=n,s.options.props&&Or(s),s.options.computed&&Cr(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,V.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=x({},s.options),i[r]=s,s}}function Or(t){var e=t.options.props;for(var n in e)or(t.prototype,"_props",n)}function Cr(t){var e=t.options.computed;for(var n in e)fr(t.prototype,n,e[n])}function Nr(t){V.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function xr(t){return t&&(t.Ctor.options.name||t.tag)}function Rr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Dr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&Lr(n,o,r,i)}}}function Lr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,y(n,e)}wr(Ir),yr(Ir),Nn(Ir),Ln(Ir),wn(Ir);var Pr=[String,RegExp,Array],jr={name:"keep-alive",abstract:!0,props:{include:Pr,exclude:Pr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:xr(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&Lr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Lr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Dr(t,(function(t){return Rr(e,t)}))})),this.$watch("exclude",(function(e){Dr(t,(function(t){return!Rr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=In(t),n=e&&e.componentOptions;if(n){var r=xr(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!Rr(o,r))||s&&r&&Rr(s,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,y(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},Mr={KeepAlive:jr};function Ur(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:dt,extend:x,mergeOptions:Wt,defineReactive:Lt},t.set=Pt,t.delete=jt,t.nextTick=ge,t.observable=function(t){return Dt(t),t},t.options=Object.create(null),V.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,x(t.options.components,Mr),Sr(t),kr(t),Ar(t),Nr(t)}Ur(Ir),Object.defineProperty(Ir.prototype,"$isServer",{get:ct}),Object.defineProperty(Ir.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ir,"FunctionalRenderContext",{value:Ze}),Ir.version="2.6.14";var Fr=m("style,class"),Vr=m("input,textarea,option,select,progress"),$r=function(t,e,n){return"value"===n&&Vr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Br=m("contenteditable,draggable,spellcheck"),qr=m("events,caret,typing,plaintext-only"),Hr=function(t,e){return Jr(e)||"false"===e?"false":"contenteditable"===t&&qr(e)?e:"true"},zr=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Gr="http://www.w3.org/1999/xlink",Kr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Wr=function(t){return Kr(t)?t.slice(6,t.length):""},Jr=function(t){return null==t||!1===t};function Xr(t){var e=t.data,n=t,r=t;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Qr(r.data,e));while(i(n=n.parent))n&&n.data&&(e=Qr(e,n.data));return Yr(e.staticClass,e.class)}function Qr(t,e){return{staticClass:Zr(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Yr(t,e){return i(t)||i(e)?Zr(t,ti(e)):""}function Zr(t,e){return t?e?t+" "+e:t:e||""}function ti(t){return Array.isArray(t)?ei(t):c(t)?ni(t):"string"===typeof t?t:""}function ei(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=ti(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ni(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),si=function(t){return ii(t)||oi(t)};function ai(t){return oi(t)?"svg":"math"===t?"math":void 0}var ci=Object.create(null);function ui(t){if(!X)return!0;if(si(t))return!1;if(t=t.toLowerCase(),null!=ci[t])return ci[t];var e=document.createElement(t);return t.indexOf("-")>-1?ci[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ci[t]=/HTMLUnknownElement/.test(e.toString())}var li=m("text,number,password,search,email,tel,url");function hi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function fi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function di(t,e){return document.createElementNS(ri[t],e)}function pi(t){return document.createTextNode(t)}function gi(t){return document.createComment(t)}function mi(t,e,n){t.insertBefore(e,n)}function vi(t,e){t.removeChild(e)}function yi(t,e){t.appendChild(e)}function bi(t){return t.parentNode}function wi(t){return t.nextSibling}function _i(t){return t.tagName}function Ei(t,e){t.textContent=e}function Ti(t,e){t.setAttribute(e,"")}var Ii=Object.freeze({createElement:fi,createElementNS:di,createTextNode:pi,createComment:gi,insertBefore:mi,removeChild:vi,appendChild:yi,parentNode:bi,nextSibling:wi,tagName:_i,setTextContent:Ei,setStyleScope:Ti}),Si={create:function(t,e){ki(e)},update:function(t,e){t.data.ref!==e.data.ref&&(ki(t,!0),ki(e))},destroy:function(t){ki(t,!0)}};function ki(t,e){var n=t.data.ref;if(i(n)){var r=t.context,o=t.componentInstance||t.elm,s=r.$refs;e?Array.isArray(s[n])?y(s[n],o):s[n]===o&&(s[n]=void 0):t.data.refInFor?Array.isArray(s[n])?s[n].indexOf(o)<0&&s[n].push(o):s[n]=[o]:s[n]=o}}var Ai=new bt("",{},[]),Oi=["create","activate","update","remove","destroy"];function Ci(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Ni(t,e)||o(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function Ni(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o||li(r)&&li(o)}function xi(t,e,n){var r,o,s={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(s[o]=r);return s}function Ri(t){var e,n,s={},c=t.modules,u=t.nodeOps;for(e=0;e<Oi.length;++e)for(s[Oi[e]]=[],n=0;n<c.length;++n)i(c[n][Oi[e]])&&s[Oi[e]].push(c[n][Oi[e]]);function l(t){return new bt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,r,s,a,c){if(i(t.elm)&&i(a)&&(t=a[c]=Tt(t)),t.isRootInsert=!s,!p(t,e,n,r)){var l=t.data,h=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),E(t),b(t,h,e),i(l)&&_(t,e),y(n,t.elm,r)):o(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,r)):(t.elm=u.createTextNode(t.text),y(n,t.elm,r))}}function p(t,e,n,r){var s=t.data;if(i(s)){var a=i(t.componentInstance)&&s.keepAlive;if(i(s=s.hook)&&i(s=s.init)&&s(t,!1),i(t.componentInstance))return g(t,e),y(n,t.elm,r),o(a)&&v(t,e,n,r),!0}}function g(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(_(t,e),E(t)):(ki(t),e.push(t))}function v(t,e,n,r){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,i(o=a.data)&&i(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](Ai,a);e.push(a);break}y(n,t.elm,r)}function y(t,e,n){i(t)&&(i(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function b(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0,e,r)}else a(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function _(t,n){for(var r=0;r<s.create.length;++r)s.create[r](Ai,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(Ai,t),i(e.insert)&&n.push(t))}function E(t){var e;if(i(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}i(e=xn)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function T(t,e,n,r,i,o){for(;r<=i;++r)d(n[r],o,t,e,!1,n,r)}function I(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<s.destroy.length;++e)s.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)I(t.children[n])}function S(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(k(r),I(r)):f(r.elm))}}function k(t,e){if(i(e)||i(t.data)){var n,r=s.remove.length+1;for(i(e)?e.listeners+=r:e=h(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,e),n=0;n<s.remove.length;++n)s.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else f(t.elm)}function A(t,e,n,o,s){var a,c,l,h,f=0,p=0,g=e.length-1,m=e[0],v=e[g],y=n.length-1,b=n[0],w=n[y],_=!s;while(f<=g&&p<=y)r(m)?m=e[++f]:r(v)?v=e[--g]:Ci(m,b)?(C(m,b,o,n,p),m=e[++f],b=n[++p]):Ci(v,w)?(C(v,w,o,n,y),v=e[--g],w=n[--y]):Ci(m,w)?(C(m,w,o,n,y),_&&u.insertBefore(t,m.elm,u.nextSibling(v.elm)),m=e[++f],w=n[--y]):Ci(v,b)?(C(v,b,o,n,p),_&&u.insertBefore(t,v.elm,m.elm),v=e[--g],b=n[++p]):(r(a)&&(a=xi(e,f,g)),c=i(b.key)?a[b.key]:O(b,e,f,g),r(c)?d(b,o,t,m.elm,!1,n,p):(l=e[c],Ci(l,b)?(C(l,b,o,n,p),e[c]=void 0,_&&u.insertBefore(t,l.elm,m.elm)):d(b,o,t,m.elm,!1,n,p)),b=n[++p]);f>g?(h=r(n[y+1])?null:n[y+1].elm,T(t,h,n,p,y,o)):p>y&&S(e,f,g)}function O(t,e,n,r){for(var o=n;o<r;o++){var s=e[o];if(i(s)&&Ci(t,s))return o}}function C(t,e,n,a,c,l){if(t!==e){i(e.elm)&&i(a)&&(e=a[c]=Tt(e));var h=e.elm=t.elm;if(o(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?R(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;i(d)&&i(f=d.hook)&&i(f=f.prepatch)&&f(t,e);var p=t.children,g=e.children;if(i(d)&&w(e)){for(f=0;f<s.update.length;++f)s.update[f](t,e);i(f=d.hook)&&i(f=f.update)&&f(t,e)}r(e.text)?i(p)&&i(g)?p!==g&&A(h,p,g,n,l):i(g)?(i(t.text)&&u.setTextContent(h,""),T(h,null,g,0,g.length-1,n)):i(p)?S(p,0,p.length-1):i(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),i(d)&&i(f=d.hook)&&i(f=f.postpatch)&&f(t,e)}}}function N(t,e,n){if(o(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var x=m("attrs,class,staticClass,staticStyle,key");function R(t,e,n,r){var s,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,o(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(s=c.hook)&&i(s=s.init)&&s(e,!0),i(s=e.componentInstance)))return g(e,n),!0;if(i(a)){if(i(u))if(t.hasChildNodes())if(i(s=c)&&i(s=s.domProps)&&i(s=s.innerHTML)){if(s!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!R(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(e,u,n);if(i(c)){var d=!1;for(var p in c)if(!x(p)){d=!0,_(e,n);break}!d&&c["class"]&&ve(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!r(e)){var c=!1,h=[];if(r(t))c=!0,d(e,h);else{var f=i(t.nodeType);if(!f&&Ci(t,e))C(t,e,h,null,null,a);else{if(f){if(1===t.nodeType&&t.hasAttribute(F)&&(t.removeAttribute(F),n=!0),o(n)&&R(t,e,h))return N(e,h,!0),t;t=l(t)}var p=t.elm,g=u.parentNode(p);if(d(e,h,p._leaveCb?null:g,u.nextSibling(p)),i(e.parent)){var m=e.parent,v=w(e);while(m){for(var y=0;y<s.destroy.length;++y)s.destroy[y](m);if(m.elm=e.elm,v){for(var b=0;b<s.create.length;++b)s.create[b](Ai,m);var _=m.data.hook.insert;if(_.merged)for(var E=1;E<_.fns.length;E++)_.fns[E]()}else ki(m);m=m.parent}}i(g)?S([t],0,0):i(t.tag)&&I(t)}}return N(e,h,c),e.elm}i(t)&&I(t)}}var Di={create:Li,update:Li,destroy:function(t){Li(t,Ai)}};function Li(t,e){(t.data.directives||e.data.directives)&&Pi(t,e)}function Pi(t,e){var n,r,i,o=t===Ai,s=e===Ai,a=Mi(t.data.directives,t.context),c=Mi(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Fi(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Fi(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Fi(u[n],"inserted",e,t)};o?Ee(e,"insert",h):h()}if(l.length&&Ee(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Fi(l[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||Fi(a[n],"unbind",t,t,s)}var ji=Object.create(null);function Mi(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=ji),i[Ui(r)]=r,r.def=Jt(e.$options,"directives",r.name,!0);return i}function Ui(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Fi(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Is){ne(Is,n.context,"directive "+t.name+" "+e+" hook")}}var Vi=[Si,Di];function $i(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var o,s,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(o in i(l.__ob__)&&(l=e.data.attrs=x({},l)),l)s=l[o],a=u[o],a!==s&&Bi(c,o,s,e.data.pre);for(o in(tt||nt)&&l.value!==u.value&&Bi(c,"value",l.value),u)r(l[o])&&(Kr(o)?c.removeAttributeNS(Gr,Wr(o)):Br(o)||c.removeAttribute(o))}}function Bi(t,e,n,r){r||t.tagName.indexOf("-")>-1?qi(t,e,n):zr(e)?Jr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):Br(e)?t.setAttribute(e,Hr(e,n)):Kr(e)?Jr(n)?t.removeAttributeNS(Gr,Wr(e)):t.setAttributeNS(Gr,e,n):qi(t,e,n)}function qi(t,e,n){if(Jr(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Hi={create:$i,update:$i};function zi(t,e){var n=e.elm,o=e.data,s=t.data;if(!(r(o.staticClass)&&r(o.class)&&(r(s)||r(s.staticClass)&&r(s.class)))){var a=Xr(e),c=n._transitionClasses;i(c)&&(a=Zr(a,ti(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Gi,Ki={create:zi,update:zi},Wi="__r",Ji="__c";function Xi(t){if(i(t[Wi])){var e=tt?"change":"input";t[e]=[].concat(t[Wi],t[e]||[]),delete t[Wi]}i(t[Ji])&&(t.change=[].concat(t[Ji],t.change||[]),delete t[Ji])}function Qi(t,e,n){var r=Gi;return function i(){var o=e.apply(null,arguments);null!==o&&to(t,i,n,r)}}var Yi=ae&&!(it&&Number(it[1])<=53);function Zi(t,e,n,r){if(Yi){var i=Wn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Gi.addEventListener(t,e,st?{capture:n,passive:r}:n)}function to(t,e,n,r){(r||Gi).removeEventListener(t,e._wrapper||e,n)}function eo(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Gi=e.elm,Xi(n),_e(n,i,Zi,to,Qi,e.context),Gi=void 0}}var no,ro={create:eo,update:eo};function io(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,o,s=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in i(c.__ob__)&&(c=e.data.domProps=x({},c)),a)n in c||(s[n]="");for(n in c){if(o=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),o===a[n])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===n&&"PROGRESS"!==s.tagName){s._value=o;var u=r(o)?"":String(o);oo(s,u)&&(s.value=u)}else if("innerHTML"===n&&oi(s.tagName)&&r(s.innerHTML)){no=no||document.createElement("div"),no.innerHTML="<svg>"+o+"</svg>";var l=no.firstChild;while(s.firstChild)s.removeChild(s.firstChild);while(l.firstChild)s.appendChild(l.firstChild)}else if(o!==a[n])try{s[n]=o}catch(Is){}}}}function oo(t,e){return!t.composing&&("OPTION"===t.tagName||so(t,e)||ao(t,e))}function so(t,e){var n=!0;try{n=document.activeElement!==t}catch(Is){}return n&&t.value!==e}function ao(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return g(n)!==g(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var co={create:io,update:io},uo=_((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function lo(t){var e=ho(t.style);return t.staticStyle?x(t.staticStyle,e):e}function ho(t){return Array.isArray(t)?R(t):"string"===typeof t?uo(t):t}function fo(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=lo(i.data))&&x(r,n)}(n=lo(t.data))&&x(r,n);var o=t;while(o=o.parent)o.data&&(n=lo(o.data))&&x(r,n);return r}var po,go=/^--/,mo=/\s*!important$/,vo=function(t,e,n){if(go.test(e))t.style.setProperty(e,n);else if(mo.test(n))t.style.setProperty(k(e),n.replace(mo,""),"important");else{var r=bo(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},yo=["Webkit","Moz","ms"],bo=_((function(t){if(po=po||document.createElement("div").style,t=T(t),"filter"!==t&&t in po)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<yo.length;n++){var r=yo[n]+e;if(r in po)return r}}));function wo(t,e){var n=e.data,o=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var s,a,c=e.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},h=u||l,f=ho(e.data.style)||{};e.data.normalizedStyle=i(f.__ob__)?x({},f):f;var d=fo(e,!0);for(a in h)r(d[a])&&vo(c,a,"");for(a in d)s=d[a],s!==h[a]&&vo(c,a,null==s?"":s)}}var _o={create:wo,update:wo},Eo=/\s+/;function To(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Eo).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Io(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Eo).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function So(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&x(e,ko(t.name||"v")),x(e,t),e}return"string"===typeof t?ko(t):void 0}}var ko=_((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Ao=X&&!et,Oo="transition",Co="animation",No="transition",xo="transitionend",Ro="animation",Do="animationend";Ao&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(No="WebkitTransition",xo="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ro="WebkitAnimation",Do="webkitAnimationEnd"));var Lo=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Po(t){Lo((function(){Lo(t)}))}function jo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),To(t,e))}function Mo(t,e){t._transitionClasses&&y(t._transitionClasses,e),Io(t,e)}function Uo(t,e,n){var r=Vo(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===Oo?xo:Do,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),t.addEventListener(a,l)}var Fo=/\b(transform|all)(,|$)/;function Vo(t,e){var n,r=window.getComputedStyle(t),i=(r[No+"Delay"]||"").split(", "),o=(r[No+"Duration"]||"").split(", "),s=$o(i,o),a=(r[Ro+"Delay"]||"").split(", "),c=(r[Ro+"Duration"]||"").split(", "),u=$o(a,c),l=0,h=0;e===Oo?s>0&&(n=Oo,l=s,h=o.length):e===Co?u>0&&(n=Co,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?Oo:Co:null,h=n?n===Oo?o.length:c.length:0);var f=n===Oo&&Fo.test(r[No+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function $o(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Bo(e)+Bo(t[n])})))}function Bo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function qo(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=So(t.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){var s=o.css,a=o.type,u=o.enterClass,l=o.enterToClass,h=o.enterActiveClass,f=o.appearClass,d=o.appearToClass,p=o.appearActiveClass,m=o.beforeEnter,v=o.enter,y=o.afterEnter,b=o.enterCancelled,w=o.beforeAppear,_=o.appear,E=o.afterAppear,T=o.appearCancelled,I=o.duration,S=xn,k=xn.$vnode;while(k&&k.parent)S=k.context,k=k.parent;var A=!S._isMounted||!t.isRootInsert;if(!A||_||""===_){var O=A&&f?f:u,C=A&&p?p:h,N=A&&d?d:l,x=A&&w||m,R=A&&"function"===typeof _?_:v,D=A&&E||y,L=A&&T||b,P=g(c(I)?I.enter:I);0;var j=!1!==s&&!et,M=Go(R),F=n._enterCb=U((function(){j&&(Mo(n,N),Mo(n,C)),F.cancelled?(j&&Mo(n,O),L&&L(n)):D&&D(n),n._enterCb=null}));t.data.show||Ee(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,F)})),x&&x(n),j&&(jo(n,O),jo(n,C),Po((function(){Mo(n,O),F.cancelled||(jo(n,N),M||(zo(P)?setTimeout(F,P):Uo(n,a,F)))}))),t.data.show&&(e&&e(),R&&R(n,F)),j||M||F()}}}function Ho(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var o=So(t.data.transition);if(r(o)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var s=o.css,a=o.type,u=o.leaveClass,l=o.leaveToClass,h=o.leaveActiveClass,f=o.beforeLeave,d=o.leave,p=o.afterLeave,m=o.leaveCancelled,v=o.delayLeave,y=o.duration,b=!1!==s&&!et,w=Go(d),_=g(c(y)?y.leave:y);0;var E=n._leaveCb=U((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(Mo(n,l),Mo(n,h)),E.cancelled?(b&&Mo(n,u),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),b&&(jo(n,u),jo(n,h),Po((function(){Mo(n,u),E.cancelled||(jo(n,l),w||(zo(_)?setTimeout(E,_):Uo(n,a,E)))}))),d&&d(n,E),b||w||E())}}function zo(t){return"number"===typeof t&&!isNaN(t)}function Go(t){if(r(t))return!1;var e=t.fns;return i(e)?Go(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Ko(t,e){!0!==e.data.show&&qo(e)}var Wo=X?{create:Ko,activate:Ko,remove:function(t,e){!0!==t.data.show?Ho(t,e):e()}}:{},Jo=[Hi,Ki,ro,co,_o,Wo],Xo=Jo.concat(Vi),Qo=Ri({nodeOps:Ii,modules:Xo});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&os(t,"input")}));var Yo={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Ee(n,"postpatch",(function(){Yo.componentUpdated(t,e,n)})):Zo(t,e,n.context),t._vOptions=[].map.call(t.options,ns)):("textarea"===n.tag||li(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",rs),t.addEventListener("compositionend",is),t.addEventListener("change",is),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Zo(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,ns);if(i.some((function(t,e){return!j(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return es(t,i)})):e.value!==e.oldValue&&es(e.value,i);o&&os(t,"change")}}}};function Zo(t,e,n){ts(t,e,n),(tt||nt)&&setTimeout((function(){ts(t,e,n)}),0)}function ts(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=M(r,ns(s))>-1,s.selected!==o&&(s.selected=o);else if(j(ns(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function es(t,e){return e.every((function(e){return!j(e,t)}))}function ns(t){return"_value"in t?t._value:t.value}function rs(t){t.target.composing=!0}function is(t){t.target.composing&&(t.target.composing=!1,os(t.target,"input"))}function os(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function ss(t){return!t.componentInstance||t.data&&t.data.transition?t:ss(t.componentInstance._vnode)}var as={bind:function(t,e,n){var r=e.value;n=ss(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,qo(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=ss(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?qo(n,(function(){t.style.display=t.__vOriginalDisplay})):Ho(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},cs={model:Yo,show:as},us={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function ls(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?ls(In(e.children)):t}function hs(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[T(o)]=i[o];return e}function fs(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function ds(t){while(t=t.parent)if(t.data.transition)return!0}function ps(t,e){return e.key===t.key&&e.tag===t.tag}var gs=function(t){return t.tag||Le(t)},ms=function(t){return"show"===t.name},vs={name:"transition",props:us,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(gs),n.length)){0;var r=this.mode;0;var i=n[0];if(ds(this.$vnode))return i;var o=ls(i);if(!o)return i;if(this._leaving)return fs(t,i);var s="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?s+"comment":s+o.tag:a(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var c=(o.data||(o.data={})).transition=hs(this),u=this._vnode,l=ls(u);if(o.data.directives&&o.data.directives.some(ms)&&(o.data.show=!0),l&&l.data&&!ps(o,l)&&!Le(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=x({},c);if("out-in"===r)return this._leaving=!0,Ee(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),fs(t,i);if("in-out"===r){if(Le(o))return u;var f,d=function(){f()};Ee(c,"afterEnter",d),Ee(c,"enterCancelled",d),Ee(h,"delayLeave",(function(t){f=t}))}}return i}}},ys=x({tag:String,moveClass:String},us);delete ys.mode;var bs={props:ys,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Rn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=hs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var f=r[h];f.data.transition=s,f.data.pos=f.elm.getBoundingClientRect(),n[f.key]?u.push(f):l.push(f)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(ws),t.forEach(_s),t.forEach(Es),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;jo(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(xo,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(xo,t),n._moveCb=null,Mo(n,e))})}})))},methods:{hasMove:function(t,e){if(!Ao)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Io(n,t)})),To(n,e),n.style.display="none",this.$el.appendChild(n);var r=Vo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function ws(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function _s(t){t.data.newPos=t.elm.getBoundingClientRect()}function Es(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Ts={Transition:vs,TransitionGroup:bs};Ir.config.mustUseProp=$r,Ir.config.isReservedTag=si,Ir.config.isReservedAttr=Fr,Ir.config.getTagNamespace=ai,Ir.config.isUnknownElement=ui,x(Ir.options.directives,cs),x(Ir.options.components,Ts),Ir.prototype.__patch__=X?Qo:D,Ir.prototype.$mount=function(t,e){return t=t&&X?hi(t):void 0,Pn(this,t,e)},X&&setTimeout((function(){B.devtools&&ut&&ut.emit("init",Ir)}),0),e["a"]=Ir}).call(this,n("c8ba"))},"2cf4":function(t,e,n){var r,i,o,s,a=n("da84"),c=n("d039"),u=n("0366"),l=n("1be4"),h=n("cc12"),f=n("1cdc"),d=n("605d"),p=a.setImmediate,g=a.clearImmediate,m=a.process,v=a.MessageChannel,y=a.Dispatch,b=0,w={},_="onreadystatechange";try{r=a.location}catch(k){}var E=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},T=function(t){return function(){E(t)}},I=function(t){E(t.data)},S=function(t){a.postMessage(String(t),r.protocol+"//"+r.host)};p&&g||(p=function(t){var e=[],n=arguments.length,r=1;while(n>r)e.push(arguments[r++]);return w[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},i(b),b},g=function(t){delete w[t]},d?i=function(t){m.nextTick(T(t))}:y&&y.now?i=function(t){y.now(T(t))}:v&&!f?(o=new v,s=o.port2,o.port1.onmessage=I,i=u(s.postMessage,s,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&r&&"file:"!==r.protocol&&!c(S)?(i=S,a.addEventListener("message",I,!1)):i=_ in h("script")?function(t){l.appendChild(h("script"))[_]=function(){l.removeChild(this),E(t)}}:function(t){setTimeout(T(t),0)}),t.exports={set:p,clear:g}},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l?(r=l.split("."),i=r[0]<4?1:r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"2f62":function(t,e,n){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,"b",(function(){return D}));var i="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function u(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){u(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var g=function(t){this.register([],t,!1)};function m(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;m(t.concat(r),e.getChild(r),n.modules[r])}}g.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},g.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},g.prototype.update=function(t){m([],this.root,t)},g.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new d(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&u(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},g.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},g.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var y=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&R(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new g(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),E(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:v.config.devtools;l&&s(this)},b={state:{configurable:!0}};function w(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;T(t,n,[],t._modules.root,!0),E(t,n,e)}function E(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};u(i,(function(e,n){o[n]=f(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:o}),v.config.silent=s,t.strict&&C(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),v.nextTick((function(){return r.$destroy()})))}function T(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=N(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){v.set(a,c,r.state)}))}var u=r.context=I(t,s,n);r.forEachMutation((function(e,n){var r=s+n;k(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;A(t,r,i,u)})),r.forEachGetter((function(e,n){var r=s+n;O(t,r,e,u)})),r.forEachChild((function(r,o){T(t,e,n.concat(o),r,i)}))}function I(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=x(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,i){var o=x(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return S(t,e)}},state:{get:function(){return N(t.state,n)}}}),i}function S(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function k(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function A(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return h(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function O(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function C(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function N(t,e){return e.reduce((function(t,e){return t[e]}),t)}function x(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function R(t){v&&t===v||(v=t,r(v))}b.state.get=function(){return this._vm._data.$$state},b.state.set=function(t){0},y.prototype.commit=function(t,e,n){var r=this,i=x(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},y.prototype.dispatch=function(t,e){var n=this,r=x(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return w(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return w(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),T(this,this.state,t,this._modules.get(t),n.preserveState),E(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=N(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),_(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,b);var D=V((function(t,e){var n={};return U(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=$(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),L=V((function(t,e){var n={};return U(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=$(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),P=V((function(t,e){var n={};return U(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||$(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),j=V((function(t,e){var n={};return U(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=$(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),M=function(t){return{mapState:D.bind(null,t),mapGetters:P.bind(null,t),mapMutations:L.bind(null,t),mapActions:j.bind(null,t)}};function U(t){return F(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function F(t){return Array.isArray(t)||l(t)}function V(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function $(t,e,n){var r=t._modulesNamespaceMap[n];return r}function B(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var o=t.actionFilter;void 0===o&&(o=function(t,e){return!0});var s=t.actionTransformer;void 0===s&&(s=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=c(t.state);"undefined"!==typeof l&&(a&&t.subscribe((function(t,o){var s=c(o);if(n(t,h,s)){var a=z(),u=i(t),f="mutation "+t.type+a;q(l,f,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),H(l)}h=s})),u&&t.subscribeAction((function(t,n){if(o(t,n)){var r=z(),i=s(t),a="action "+t.type+r;q(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),H(l)}})))}}function q(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function H(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function z(){var t=new Date;return" @ "+K(t.getHours(),2)+":"+K(t.getMinutes(),2)+":"+K(t.getSeconds(),2)+"."+K(t.getMilliseconds(),3)}function G(t,e){return new Array(e+1).join(t)}function K(t,e){return G("0",e-t.toString().length)+t}var W={Store:y,install:R,version:"3.6.2",mapState:D,mapMutations:L,mapGetters:P,mapActions:j,createNamespacedHelpers:M,createLogger:B};e["a"]=W}).call(this,n("c8ba"))},3022:function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},i=/%[sdj%]/g;e.format=function(t){if(!E(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,o=r.length,s=String(t).replace(i,(function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}})),c=r[n];n<o;c=r[++n])b(c)||!k(c)?s+=" "+c:s+=" "+a(c);return s},e.deprecate=function(n,r){if("undefined"!==typeof t&&!0===t.noDeprecation)return n;if("undefined"===typeof t)return function(){return e.deprecate(n,r).apply(this,arguments)};var i=!1;function o(){if(!i){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),i=!0}return n.apply(this,arguments)}return o};var o,s={};function a(t,n){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),y(n)?r.showHidden=n:n&&e._extend(r,n),I(r.showHidden)&&(r.showHidden=!1),I(r.depth)&&(r.depth=2),I(r.colors)&&(r.colors=!1),I(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),h(r,t,r.depth)}function c(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function u(t,e){return t}function l(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}function h(t,n,r){if(t.customInspect&&n&&C(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t);return E(i)||(i=h(t,i,r)),i}var o=f(t,n);if(o)return o;var s=Object.keys(n),a=l(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),O(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return d(n);if(0===s.length){if(C(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(S(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(A(n))return t.stylize(Date.prototype.toString.call(n),"date");if(O(n))return d(n)}var u,y="",b=!1,w=["{","}"];if(v(n)&&(b=!0,w=["[","]"]),C(n)){var _=n.name?": "+n.name:"";y=" [Function"+_+"]"}return S(n)&&(y=" "+RegExp.prototype.toString.call(n)),A(n)&&(y=" "+Date.prototype.toUTCString.call(n)),O(n)&&(y=" "+d(n)),0!==s.length||b&&0!=n.length?r<0?S(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),u=b?p(t,n,r,a,s):s.map((function(e){return g(t,n,r,a,e,b)})),t.seen.pop(),m(u,y,w)):w[0]+y+w[1]}function f(t,e){if(I(e))return t.stylize("undefined","undefined");if(E(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return _(e)?t.stylize(""+e,"number"):y(e)?t.stylize(""+e,"boolean"):b(e)?t.stylize("null","null"):void 0}function d(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,i){for(var o=[],s=0,a=e.length;s<a;++s)P(e,String(s))?o.push(g(t,e,n,r,String(s),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(g(t,e,n,r,i,!0))})),o}function g(t,e,n,r,i,o){var s,a,c;if(c=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},c.get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),P(r,i)||(s="["+i+"]"),a||(t.seen.indexOf(c.value)<0?(a=b(n)?h(t,c.value,null):h(t,c.value,n-1),a.indexOf("\n")>-1&&(a=o?a.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return"   "+t})).join("\n"))):a=t.stylize("[Circular]","special")),I(s)){if(o&&i.match(/^\d+$/))return a;s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function m(t,e,n){var r=t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return r>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function v(t){return Array.isArray(t)}function y(t){return"boolean"===typeof t}function b(t){return null===t}function w(t){return null==t}function _(t){return"number"===typeof t}function E(t){return"string"===typeof t}function T(t){return"symbol"===typeof t}function I(t){return void 0===t}function S(t){return k(t)&&"[object RegExp]"===x(t)}function k(t){return"object"===typeof t&&null!==t}function A(t){return k(t)&&"[object Date]"===x(t)}function O(t){return k(t)&&("[object Error]"===x(t)||t instanceof Error)}function C(t){return"function"===typeof t}function N(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function x(t){return Object.prototype.toString.call(t)}function R(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(I(o)&&(o=Object({NODE_ENV:"production",BASE_URL:"/"}).NODE_DEBUG||""),n=n.toUpperCase(),!s[n])if(new RegExp("\\b"+n+"\\b","i").test(o)){var r=t.pid;s[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else s[n]=function(){};return s[n]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=v,e.isBoolean=y,e.isNull=b,e.isNullOrUndefined=w,e.isNumber=_,e.isString=E,e.isSymbol=T,e.isUndefined=I,e.isRegExp=S,e.isObject=k,e.isDate=A,e.isError=O,e.isFunction=C,e.isPrimitive=N,e.isBuffer=n("d60a");var D=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function L(){var t=new Date,e=[R(t.getHours()),R(t.getMinutes()),R(t.getSeconds())].join(":");return[t.getDate(),D[t.getMonth()],e].join(" ")}function P(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",L(),e.format.apply(e,arguments))},e.inherits=n("28a0"),e._extend=function(t,e){if(!e||!k(e))return t;var n=Object.keys(e),r=n.length;while(r--)t[n[r]]=e[n[r]];return t};var j="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function M(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}function U(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var i=n.pop();if("function"!==typeof i)throw new TypeError("The last argument must be of type Function");var o=this,s=function(){return i.apply(o,arguments)};e.apply(this,n).then((function(e){t.nextTick(s,null,e)}),(function(e){t.nextTick(M,e,s)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}e.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(j&&t[j]){var e=t[j];if("function"!==typeof e)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,j,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,i)}catch(s){n(s)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),j&&Object.defineProperty(e,j,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=j,e.callbackify=U}).call(this,n("4362"))},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("3f8c"),o=n("b622"),s=o("iterator");t.exports=function(t){if(void 0!=t)return t[s]||t["@@iterator"]||i[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=s(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);s(String,"String",(function(t){c(this,{type:a,string:i(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),i=n("1c0b"),o=n("b622"),s=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[s])?e:i(n)}},"485a":function(t,e,n){var r=n("861d");t.exports=function(t,e){var n,i;if("string"===e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if("string"!==e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),s=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),l=o(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"50c4":function(t,e,n){var r=n("a691"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5135:function(t,e,n){var r=n("7b0b"),i={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return i.call(r(t),e)}},5606:function(t,e,n){"use strict";n.d(e,"a",(function(){return K})),n.d(e,"b",(function(){return B})),n.d(e,"c",(function(){return $})),n.d(e,"d",(function(){return q})),n.d(e,"e",(function(){return J})),n.d(e,"f",(function(){return W})),n.d(e,"g",(function(){return X}));var r=n("ffa6"),i=n("abfd"),o=n("a8e9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.0",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",E="@firebase/installations",T="@firebase/installations-compat",I="@firebase/messaging",S="@firebase/messaging-compat",k="@firebase/performance",A="@firebase/performance-compat",O="@firebase/remote-config",C="@firebase/remote-config-compat",N="@firebase/storage",x="@firebase/storage-compat",R="@firebase/firestore",D="@firebase/firestore-compat",L="firebase",P="9.0.0",j="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[E]:"fire-iid",[T]:"fire-iid-compat",[I]:"fire-fcm",[S]:"fire-fcm-compat",[k]:"fire-perf",[A]:"fire-perf-compat",[O]:"fire-rc",[C]:"fire-rc-compat",[N]:"fire-gcs",[x]:"fire-gcs-compat",[R]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},U=new Map,F=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $(t){const e=t.name;if(F.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;F.set(e,t);for(const n of U.values())V(n,t);return!0}function B(t,e){return t.container.getProvider(e)}function q(t,e,n=j){B(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},z=new o["b"]("app","Firebase",H);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=P;function W(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:j,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw z.create("bad-app-name",{appName:String(i)});const s=U.get(i);if(s){if(Object(o["g"])(t,s.options)&&Object(o["g"])(n,s.config))return s;throw z.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of F.values())a.addComponent(r);const c=new G(t,n,a);return U.set(i,c),c}function J(t=j){const e=U.get(t);if(!e)throw z.create("no-app",{appName:t});return e}function X(t,e,n){var i;let o=null!==(i=M[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}$(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(t){$(new r["a"]("platform-logger",t=>new s(t),"PRIVATE")),X(c,u,t),X("fire-js","")}Q()},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.17.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=o.f;return n?e.concat(n(t)):e}},"577e":function(t,e,n){var r=n("d9b5");t.exports=function(t){if(r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),s=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,h=Object.defineProperty;t.exports=!l||i((function(){if(r&&1!==l({b:1},l(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||o(l({},e)).join("")!=i}))?function(t,e){var n=c(t),i=arguments.length,l=1,h=s.f,f=a.f;while(i>l){var d,p=u(arguments[l++]),g=h?o(p).concat(h(p)):o(p),m=g.length,v=0;while(m>v)d=g[v++],r&&!f.call(p,d)||(n[d]=p[d])}return n}:l},6547:function(t,e,n){var r=n("a691"),i=n("577e"),o=n("1d80"),s=function(t){return function(e,n){var s,a,c=i(o(e)),u=r(n),l=c.length;return u<0||u>=l?t?"":void 0:(s=c.charCodeAt(u),s<55296||s>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):s:t?c.slice(u,u+2):a-56320+(s-55296<<10)+65536)}};t.exports={codeAt:s(!1),charAt:s(!0)}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),h=n("c6cd"),f=n("f772"),d=n("d012"),p="Object already initialized",g=a.WeakMap,m=function(t){return o(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var y=h.state||(h.state=new g),b=y.get,w=y.has,_=y.set;r=function(t,e){if(w.call(y,t))throw new TypeError(p);return e.facade=t,_.call(y,t,e),e},i=function(t){return b.call(y,t)||{}},o=function(t){return w.call(y,t)}}else{var E=f("state");d[E]=!0,r=function(t,e){if(l(t,E))throw new TypeError(p);return e.facade=t,u(t,E,e),e},i=function(t){return l(t,E)?t[E]:{}},o=function(t){return l(t,E)}}t.exports={set:r,get:i,has:o,enforce:m,getterFor:v}},"6eeb":function(t,e,n){var r=n("da84"),i=n("9112"),o=n("5135"),s=n("ce4e"),a=n("8925"),c=n("69f3"),u=c.get,l=c.enforce,h=String(String).split("String");(t.exports=function(t,e,n,a){var c,u=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||i(n,"name",e),c=l(n),c.source||(c.source=h.join("string"==typeof e?e:""))),t!==r?(u?!d&&t[e]&&(f=!0):delete t[e],f?t[e]=n:i(t,e,n)):f?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var t=s.length;while(t--)delete w[d][s[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:o(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("9ed3"),o=n("e163"),s=n("d2bb"),a=n("d44e"),c=n("9112"),u=n("6eeb"),l=n("b622"),h=n("c430"),f=n("3f8c"),d=n("ae93"),p=d.IteratorPrototype,g=d.BUGGY_SAFARI_ITERATORS,m=l("iterator"),v="keys",y="values",b="entries",w=function(){return this};t.exports=function(t,e,n,l,d,_,E){i(n,e,l);var T,I,S,k=function(t){if(t===d&&x)return x;if(!g&&t in C)return C[t];switch(t){case v:return function(){return new n(this,t)};case y:return function(){return new n(this,t)};case b:return function(){return new n(this,t)}}return function(){return new n(this)}},A=e+" Iterator",O=!1,C=t.prototype,N=C[m]||C["@@iterator"]||d&&C[d],x=!g&&N||k(d),R="Array"==e&&C.entries||N;if(R&&(T=o(R.call(new t)),p!==Object.prototype&&T.next&&(h||o(T)===p||(s?s(T,p):"function"!=typeof T[m]&&c(T,m,w)),a(T,A,!0,!0),h&&(f[A]=w))),d==y&&N&&N.name!==y&&(O=!0,x=function(){return N.call(this)}),h&&!E||C[m]===x||c(C,m,x),f[e]=x,d)if(I={values:k(y),keys:_?x:k(v),entries:k(b)},E)for(S in I)(g||O||!(S in C))&&u(C,S,I[S]);else r({target:e,proto:!0,forced:g||O},I);return I}},"7f9a":function(t,e,n){var r=n("da84"),i=n("8925"),o=r.WeakMap;t.exports="function"===typeof o&&/native code/.test(i(o))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,e,n){var r=n("c6cd"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */function r(t,e){0}function i(t,e){for(var n in e)t[n]=e[n];return t}var o=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},a=/%2C/g,c=function(t){return encodeURIComponent(t).replace(o,s).replace(a,",")};function u(t){try{return decodeURIComponent(t)}catch(e){0}return t}function l(t,e,n){void 0===e&&(e={});var r,i=n||f;try{r=i(t||"")}catch(a){r={}}for(var o in e){var s=e[o];r[o]=Array.isArray(s)?s.map(h):h(s)}return r}var h=function(t){return null==t||"object"===typeof t?t:String(t)};function f(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=u(n.shift()),i=n.length>0?u(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return c(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(c(e)):r.push(c(e)+"="+c(t)))})),r.join("&")}return c(e)+"="+c(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var p=/\/?$/;function g(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=m(o)}catch(a){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:b(e,i),matched:t?y(t):[]};return n&&(s.redirectedFrom=b(n,i)),Object.freeze(s)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var v=g(null,{path:"/"});function y(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function b(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||d;return(n||"/")+o(r)+i}function w(t,e,n){return e===v?t===e:!!e&&(t.path&&e.path?t.path.replace(p,"")===e.path.replace(p,"")&&(n||t.hash===e.hash&&_(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&_(t.query,e.query)&&_(t.params,e.params))))}function _(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var o=t[n],s=r[i];if(s!==n)return!1;var a=e[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?_(o,a):String(o)===String(a)}))}function E(t,e){return 0===t.path.replace(p,"/").indexOf(e.path.replace(p,"/"))&&(!e.hash||t.hash===e.hash)&&T(t.query,e.query)}function T(t,e){for(var n in e)if(!(n in t))return!1;return!0}function I(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,s=e.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,f=!1;while(o&&o._routerRoot!==o){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(s.routerViewDepth=h,f){var p=l[c],g=p&&p.component;return g?(p.configProps&&k(g,s,p.route,p.configProps),a(g,s,r)):a()}var m=u.matched[h],v=m&&m.components[c];if(!m||!v)return l[c]=null,a();l[c]={component:v},s.registerRouteInstance=function(t,e){var n=m.instances[c];(e&&n!==t||!e&&n===t)&&(m.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance),I(u)};var y=m.props&&m.props[c];return y&&(i(l[c],{route:u,configProps:y}),k(v,s,u,y)),a(v,s,r)}};function k(t,e,n,r){var o=e.props=A(n,r);if(o){o=e.props=i({},o);var s=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(s[a]=o[a],delete o[a])}}function A(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function O(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function C(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function N(t){return t.replace(/\/\//g,"/")}var x=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},R=Q,D=U,L=F,P=B,j=X,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function U(t,e){var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var c=n[0],u=n[1],l=n.index;if(s+=t.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=t[o],f=n[2],d=n[3],p=n[4],g=n[5],m=n[6],v=n[7];s&&(r.push(s),s="");var y=null!=f&&null!=h&&h!==f,b="+"===m||"*"===m,w="?"===m||"*"===m,_=n[2]||a,E=p||g;r.push({name:d||i++,prefix:f||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!v,pattern:E?H(E):v?".*":"[^"+q(_)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function F(t,e){return B(U(t,e),e)}function V(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function $(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function B(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",G(e)));return function(e,r){for(var i="",o=e||{},s=r||{},a=s.pretty?V:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(x(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(l=a(h[f]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===f?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?$(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function q(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function H(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function G(t){return t&&t.sensitive?"":"i"}function K(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function W(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(Q(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",G(n));return z(o,e)}function J(t,e,n){return X(U(t,n),e,n)}function X(t,e,n){x(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"===typeof a)o+=q(a);else{var c=q(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=q(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",z(new RegExp("^"+o,G(n)),e)}function Q(t,e,n){return x(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?K(t,e):x(t)?W(t,e,n):J(t,e,n)}R.parse=D,R.compile=L,R.tokensToFunction=P,R.tokensToRegExp=j;var Y=Object.create(null);function Z(t,e,n){e=e||{};try{var r=Y[t]||(Y[t]=R.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function tt(t,e,n,r){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=i({},t);var s=o.params;return s&&"object"===typeof s&&(o.params=i({},s)),o}if(!o.path&&o.params&&e){o=i({},o),o._normalized=!0;var a=i(i({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=Z(c,a,"path "+e.path)}else 0;return o}var u=C(o.path||""),h=e&&e.path||"/",f=u.path?O(u.path,h,n||o.append):h,d=l(u.query,o.query,r&&r.options.parseQuery),p=o.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:f,query:d,hash:p}}var et,nt=[String,Object],rt=[String,Array],it=function(){},ot={name:"RouterLink",props:{to:{type:nt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:rt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,f=null==l?"router-link-active":l,d=null==h?"router-link-exact-active":h,p=null==this.activeClass?f:this.activeClass,m=null==this.exactActiveClass?d:this.exactActiveClass,v=a.redirectedFrom?g(null,tt(a.redirectedFrom),null,n):a;u[m]=w(r,v,this.exactPath),u[p]=this.exact||this.exactPath?u[m]:E(r,v);var y=u[m]?this.ariaCurrentValue:null,b=function(t){st(t)&&(e.replace?n.replace(s,it):n.push(s,it))},_={click:st};Array.isArray(this.event)?this.event.forEach((function(t){_[t]=b})):_[this.event]=b;var T={class:u},I=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[p],isExactActive:u[m]});if(I){if(1===I.length)return I[0];if(I.length>1||!I.length)return 0===I.length?t():t("span",{},I)}if("a"===this.tag)T.on=_,T.attrs={href:c,"aria-current":y};else{var S=at(this.$slots.default);if(S){S.isStatic=!1;var k=S.data=i({},S.data);for(var A in k.on=k.on||{},k.on){var O=k.on[A];A in _&&(k.on[A]=Array.isArray(O)?O:[O])}for(var C in _)C in k.on?k.on[C].push(_[C]):k.on[C]=b;var N=S.data.attrs=i({},S.data.attrs);N.href=c,N["aria-current"]=y}else T.on=_}return t(this.tag,T,this.$slots.default)}};function st(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function at(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=at(e.children)))return e}}function ct(t){if(!ct.installed||et!==t){ct.installed=!0,et=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",S),t.component("RouterLink",ot);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ut="undefined"!==typeof window;function lt(t,e,n,r,i){var o=e||[],s=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){ht(o,s,a,t,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function ht(t,e,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=dt(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:ft(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?N(o+"/"+r.path):void 0;ht(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],f=0;f<h.length;++f){var d=h[f];0;var p={path:d,children:r.children};ht(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function ft(t,e){var n=R(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:N(e.path+"/"+t)}function pt(t,e){var n=lt(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t){lt(t,r,i,o)}function a(t,e){var n="object"!==typeof t?o[t]:void 0;lt([e||t],r,i,o,n),n&&n.alias.length&&lt(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,o,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,s){var a=tt(t,n,!1,e),c=a.name;if(c){var u=o[c];if(!u)return f(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Z(u.path,a.params,'named route "'+c+'"'),f(u,a,s)}if(a.path){a.params={};for(var d=0;d<r.length;d++){var p=r[d],g=i[p];if(gt(g.regex,a.path,a.params))return f(g,a,s)}}return f(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(g(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return f(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,d=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,d=s.hasOwnProperty("params")?s.params:d,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:d},void 0,n)}if(c){var p=mt(c,t),m=Z(p,d,'redirect route with path "'+p+'"');return u({_normalized:!0,path:m,query:l,hash:h},void 0,n)}return f(null,n)}function h(t,e,n){var r=Z(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return e.params=i.params,f(s,e)}return f(null,e)}function f(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):g(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function gt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?u(r[i]):r[i])}return!0}function mt(t,e){return O(t,e.parent?e.parent.path:"/",!0)}var vt=ut&&window.performance&&window.performance.now?window.performance:Date;function yt(){return vt.now().toFixed(3)}var bt=yt();function wt(){return bt}function _t(t){return bt=t}var Et=Object.create(null);function Tt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=i({},window.history.state);return n.key=wt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",kt),function(){window.removeEventListener("popstate",kt)}}function It(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var o=At(),s=i.call(t,e,n,r?o:null);s&&("function"===typeof s.then?s.then((function(t){Lt(t,o)})).catch((function(t){0})):Lt(s,o))}))}}function St(){var t=wt();t&&(Et[t]={x:window.pageXOffset,y:window.pageYOffset})}function kt(t){St(),t.state&&t.state.key&&_t(t.state.key)}function At(){var t=wt();if(t)return Et[t]}function Ot(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function Ct(t){return Rt(t.x)||Rt(t.y)}function Nt(t){return{x:Rt(t.x)?t.x:window.pageXOffset,y:Rt(t.y)?t.y:window.pageYOffset}}function xt(t){return{x:Rt(t.x)?t.x:0,y:Rt(t.y)?t.y:0}}function Rt(t){return"number"===typeof t}var Dt=/^#\d/;function Lt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Dt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=xt(i),e=Ot(r,i)}else Ct(t)&&(e=Nt(t))}else n&&Ct(t)&&(e=Nt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Pt=ut&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function jt(t,e){St();var n=window.history;try{if(e){var r=i({},n.state);r.key=wt(),n.replaceState(r,"",t)}else n.pushState({key:_t(yt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function Mt(t){jt(t,!0)}function Ut(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var Ft={redirected:2,aborted:4,cancelled:8,duplicated:16};function Vt(t,e){return Ht(t,e,Ft.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Gt(e)+'" via a navigation guard.')}function $t(t,e){var n=Ht(t,e,Ft.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Bt(t,e){return Ht(t,e,Ft.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function qt(t,e){return Ht(t,e,Ft.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Ht(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var zt=["params","query","hash"];function Gt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Kt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Wt(t,e){return Kt(t)&&t._isRouter&&(null==e||t.type===e)}function Jt(t){return function(e,n,r){var i=!1,o=0,s=null;Xt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var c,u=te((function(e){Zt(e)&&(e=e.default),t.resolved="function"===typeof e?e:et.extend(e),n.components[a]=e,o--,o<=0&&r()})),l=te((function(t){var e="Failed to resolve async component "+a+": "+t;s||(s=Kt(t)?t:new Error(e),r(s))}));try{c=t(u,l)}catch(f){l(f)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Xt(t,e){return Qt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Qt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Zt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function te(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var ee=function(t,e){this.router=t,this.base=ne(e),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ne(t){if(!t)if(ut){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function re(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ie(t,e,n,r){var i=Xt(t,(function(t,r,i,o){var s=oe(t,e);if(s)return Array.isArray(s)?s.map((function(t){return n(t,r,i,o)})):n(s,r,i,o)}));return Qt(r?i.reverse():i)}function oe(t,e){return"function"!==typeof t&&(t=et.extend(t)),t.options[e]}function se(t){return ie(t,"beforeRouteLeave",ce,!0)}function ae(t){return ie(t,"beforeRouteUpdate",ce)}function ce(t,e){if(e)return function(){return t.apply(e,arguments)}}function ue(t){return ie(t,"beforeRouteEnter",(function(t,e,n,r){return le(t,n,r)}))}function le(t,e,n){return function(r,i,o){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)}))}}ee.prototype.listen=function(t){this.cb=t},ee.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ee.prototype.onError=function(t){this.errorCbs.push(t)},ee.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(s){throw this.errorCbs.forEach((function(t){t(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Wt(t,Ft.redirected)&&o===v||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},ee.prototype.confirmTransition=function(t,e,n){var i=this,o=this.current;this.pending=t;var s=function(t){!Wt(t)&&Kt(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):(r(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)},a=t.matched.length-1,c=o.matched.length-1;if(w(t,o)&&a===c&&t.matched[a]===o.matched[c])return this.ensureURL(),s($t(o,t));var u=re(this.current.matched,t.matched),l=u.updated,h=u.deactivated,f=u.activated,d=[].concat(se(h),this.router.beforeHooks,ae(l),f.map((function(t){return t.beforeEnter})),Jt(f)),p=function(e,n){if(i.pending!==t)return s(Bt(o,t));try{e(t,o,(function(e){!1===e?(i.ensureURL(!0),s(qt(o,t))):Kt(e)?(i.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(Vt(o,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(r){s(r)}};Ut(d,p,(function(){var n=ue(f),r=n.concat(i.router.resolveHooks);Ut(r,p,(function(){if(i.pending!==t)return s(Bt(o,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){I(t)}))}))}))},ee.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},ee.prototype.setupListeners=function(){},ee.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=v,this.pending=null};var he=function(t){function e(e,n){t.call(this,e,n),this._startLocation=fe(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(Tt());var i=function(){var n=t.current,i=fe(t.base);t.current===v&&i===t._startLocation||t.transitionTo(i,(function(t){r&&It(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){jt(N(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Mt(N(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(fe(this.base)!==this.current.fullPath){var e=N(this.base+this.current.fullPath);t?jt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return fe(this.base)},e}(ee);function fe(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(N(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,r){t.call(this,e,n),r&&pe(this.base)||ge()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(Tt());var i=function(){var e=t.current;ge()&&t.transitionTo(me(),(function(n){r&&It(t.router,n,e,!0),Pt||be(n.fullPath)}))},o=Pt?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){be(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;me()!==e&&(t?ye(e):be(e))},e.prototype.getCurrentLocation=function(){return me()},e}(ee);function pe(t){var e=fe(t);if(!/^\/#/.test(e))return window.location.replace(N(t+"/#"+e)),!0}function ge(){var t=me();return"/"===t.charAt(0)||(be("/"+t),!1)}function me(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ve(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ye(t){Pt?jt(ve(t)):window.location.hash=t}function be(t){Pt?Mt(ve(t)):window.location.replace(ve(t))}var we=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Wt(t,Ft.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ee),_e=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Pt&&!1!==t.fallback,this.fallback&&(e="hash"),ut||(e="abstract"),this.mode=e,e){case"history":this.history=new he(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},Ee={currentRoute:{configurable:!0}};function Te(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ie(t,e,n){var r="hash"===n?"#"+e:e;return t?N(t+"/"+r):r}_e.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},Ee.currentRoute.get=function(){return this.history&&this.history.current},_e.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof he||n instanceof de){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=Pt&&i;o&&"fullPath"in t&&It(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},_e.prototype.beforeEach=function(t){return Te(this.beforeHooks,t)},_e.prototype.beforeResolve=function(t){return Te(this.resolveHooks,t)},_e.prototype.afterEach=function(t){return Te(this.afterHooks,t)},_e.prototype.onReady=function(t,e){this.history.onReady(t,e)},_e.prototype.onError=function(t){this.history.onError(t)},_e.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},_e.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},_e.prototype.go=function(t){this.history.go(t)},_e.prototype.back=function(){this.go(-1)},_e.prototype.forward=function(){this.go(1)},_e.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},_e.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=tt(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Ie(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},_e.prototype.getRoutes=function(){return this.matcher.getRoutes()},_e.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},_e.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_e.prototype,Ee),_e.install=ct,_e.version="3.5.2",_e.isNavigationFailure=Wt,_e.NavigationFailureType=Ft,_e.START_LOCATION=v,ut&&window.Vue&&window.Vue.use(_e),e["a"]=_e},"8cb0":function(t,e,n){(function(t){var e=t.Markdown=function(t){switch(typeof t){case"undefined":this.dialect=e.dialects.Gruber;break;case"object":this.dialect=t;break;default:if(!(t in e.dialects))throw new Error("Unknown Markdown dialect '"+String(t)+"'");this.dialect=e.dialects[t];break}this.em_state=[],this.strong_state=[],this.debug_indent=""};function r(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function i(){var t=n("3022");return"Markdown.mk_block( "+t.inspect(this.toString())+", "+t.inspect(this.trailing)+", "+t.inspect(this.lineNumber)+" )"}t.parse=function(t,n){var r=new e(n);return r.toTree(t)},t.toHTML=function(e,n,r){var i=t.toHTMLTree(e,n,r);return t.renderJsonML(i)},t.toHTMLTree=function(t,e,n){"string"===typeof t&&(t=this.parse(t,e));var r=d(t),i={};r&&r.references&&(i=r.references);var o=v(t,i,n);return y(o),o};var o=e.mk_block=function(t,e,n){1==arguments.length&&(e="\n\n");var o=new String(t);return o.trailing=e,o.inspect=i,o.toSource=r,void 0!=n&&(o.lineNumber=n),o};function s(t){var e=0,n=-1;while(-1!==(n=t.indexOf("\n",n+1)))e++;return e}function c(t,e){var n=t+"_state",r="strong"==t?"em_state":"strong_state";function i(t){this.len_after=t,this.name="close_"+e}return function(o,s){if(this[n][0]==e)return this[n].shift(),[o.length,new i(o.length-e.length)];var a=this[r].slice(),c=this[n].slice();this[n].unshift(e);var u=this.processInline(o.substr(e.length)),l=u[u.length-1];this[n].shift();if(l instanceof i){u.pop();var h=o.length-l.len_after;return[h,[t].concat(u)]}return this[r]=a,this[n]=c,[e.length,e]}}function u(t){var e=t.split(""),n=[""],r=!1;while(e.length){var i=e.shift();switch(i){case" ":r?n[n.length-1]+=i:n.push("");break;case"'":case'"':r=!r;break;case"\\":i=e.shift();default:n[n.length-1]+=i;break}}return n}e.prototype.split_blocks=function(t,e){t=t.replace(/(\r\n|\n|\r)/g,"\n");var n,r=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,i=[],a=1;null!=(n=/^(\s*\n)/.exec(t))&&(a+=s(n[0]),r.lastIndex=n[0].length);while(null!==(n=r.exec(t)))"\n#"==n[2]&&(n[2]="\n",r.lastIndex--),i.push(o(n[1],n[2],a)),a+=s(n[0]);return i},e.prototype.processBlock=function(t,e){var n=this.dialect.block,r=n.__order__;if("__call__"in n)return n.__call__.call(this,t,e);for(var i=0;i<r.length;i++){var o=n[r[i]].call(this,t,e);if(o)return(!h(o)||o.length>0&&!h(o[0]))&&this.debug(r[i],"didn't return a proper array"),o}return[]},e.prototype.processInline=function(t){return this.dialect.inline.__call__.call(this,String(t))},e.prototype.toTree=function(t,e){var n=t instanceof Array?t:this.split_blocks(t),r=this.tree;try{this.tree=e||this.tree||["markdown"];while(n.length){var i=this.processBlock(n.shift(),n);i.length&&this.tree.push.apply(this.tree,i)}return this.tree}finally{e&&(this.tree=r)}},e.prototype.debug=function(){var t=Array.prototype.slice.call(arguments);t.unshift(this.debug_indent),"undefined"!==typeof print&&print.apply(print,t),"undefined"!==typeof console&&"undefined"!==typeof console.log&&console.log.apply(null,t)},e.prototype.loop_re_over_block=function(t,e,n){var r,i=e.valueOf();while(i.length&&null!=(r=t.exec(i)))i=i.substr(r[0].length),n.call(this,r);return i},e.dialects={},e.dialects.Gruber={block:{atxHeader:function(t,e){var n=t.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(n){var r=["header",{level:n[1].length}];return Array.prototype.push.apply(r,this.processInline(n[2])),n[0].length<t.length&&e.unshift(o(t.substr(n[0].length),t.trailing,t.lineNumber+2)),[r]}},setextHeader:function(t,e){var n=t.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(n){var r="="===n[2]?1:2,i=["header",{level:r},n[1]];return n[0].length<t.length&&e.unshift(o(t.substr(n[0].length),t.trailing,t.lineNumber+2)),[i]}},code:function(t,e){var n=[],r=/^(?: {0,3}\t| {4})(.*)\n?/;if(t.match(r)){t:do{var i=this.loop_re_over_block(r,t.valueOf(),(function(t){n.push(t[1])}));if(i.length){e.unshift(o(i,t.trailing));break t}if(!e.length)break t;if(!e[0].match(r))break t;n.push(t.trailing.replace(/[^\n]/g,"").substring(2)),t=e.shift()}while(1);return[["code_block",n.join("\n")]]}},horizRule:function(t,e){var n=t.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(n){var r=[["hr"]];return n[1]&&r.unshift.apply(r,this.processBlock(n[1],[])),n[3]&&e.unshift(o(n[3])),r}},lists:function(){var t="[*+-]|\\d+\\.",e=/[*+-]/,n=new RegExp("^( {0,3})("+t+")[ \t]+"),r="(?: {0,3}\\t| {4})";function i(e){return new RegExp("(?:^("+r+"{0,"+e+"} {0,3})("+t+")\\s+)|(^"+r+"{0,"+(e-1)+"}[ ]{0,4})")}function s(t){return t.replace(/ {0,3}\t/g,"    ")}function a(t,e,n,r){if(e)t.push(["para"].concat(n));else{var i=t[t.length-1]instanceof Array&&"para"==t[t.length-1][0]?t[t.length-1]:t;r&&t.length>1&&n.unshift(r);for(var o=0;o<n.length;o++){var s=n[o],a="string"==typeof s;a&&i.length>1&&"string"==typeof i[i.length-1]?i[i.length-1]+=s:i.push(s)}}}function c(t,e){var n=new RegExp("^("+r+"{"+t+"}.*?\\n?)*$"),i=new RegExp("^"+r+"{"+t+"}","gm"),s=[];while(e.length>0){if(!n.exec(e[0]))break;var a=e.shift(),c=a.replace(i,"");s.push(o(c,a.trailing,a.lineNumber))}return s}function u(t,e,n){var r=t.list,i=r[r.length-1];if(!(i[1]instanceof Array&&"para"==i[1][0]))if(e+1==n.length)i.push(["para"].concat(i.splice(1,i.length-1)));else{var o=i.pop();i.push(["para"].concat(i.splice(1,i.length-1)),o)}}return function(t,r){var o=t.match(n);if(o){var h,f,d=[],p=O(o),g=!1,m=[d[0].list];while(1){for(var v=t.split(/(?=\n)/),y="",b=0;b<v.length;b++){var w="",_=v[b].replace(/^\n/,(function(t){return w=t,""})),E=i(d.length);if(o=_.match(E),void 0!==o[1]){y.length&&(a(h,g,this.processInline(y),w),g=!1,y=""),o[1]=s(o[1]);var T=Math.floor(o[1].length/4)+1;if(T>d.length)p=O(o),h.push(p),h=p[1]=["listitem"];else{var I=!1;for(f=0;f<d.length;f++)if(d[f].indent==o[1]){p=d[f].list,d.splice(f+1,d.length-(f+1)),I=!0;break}I||(T++,T<=d.length?(d.splice(T,d.length-T),p=d[T-1].list):(p=O(o),h.push(p))),h=["listitem"],p.push(h)}w=""}_.length>o[0].length&&(y+=w+_.substr(o[0].length))}y.length&&(a(h,g,this.processInline(y),w),g=!1,y="");var S=c(d.length,r);S.length>0&&(l(d,u,this),h.push.apply(h,this.toTree(S,[])));var k=r[0]&&r[0].valueOf()||"";if(!k.match(n)&&!k.match(/^ /))break;t=r.shift();var A=this.dialect.block.horizRule(t,r);if(A){m.push.apply(m,A);break}l(d,u,this),g=!0}return m}function O(t){var n=e.exec(t[2])?["bulletlist"]:["numberlist"];return d.push({list:n,indent:t[1]}),n}}}(),blockquote:function(t,e){if(t.match(/^>/m)){var n=[];if(">"!=t[0]){var r=t.split(/\n/),i=[],s=t.lineNumber;while(r.length&&">"!=r[0][0])i.push(r.shift()),s++;var a=o(i.join("\n"),"\n",t.lineNumber);n.push.apply(n,this.processBlock(a,[])),t=o(r.join("\n"),t.trailing,s)}while(e.length&&">"==e[0][0]){var c=e.shift();t=o(t+t.trailing+c,c.trailing,t.lineNumber)}var u=t.replace(/^> ?/gm,""),l=(this.tree,this.toTree(u,["blockquote"])),h=d(l);return h&&h.references&&(delete h.references,f(h)&&l.splice(1,1)),n.push(l),n}},referenceDefn:function(t,e){var n=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(t.match(n)){d(this.tree)||this.tree.splice(1,0,{});var r=d(this.tree);void 0===r.references&&(r.references={});var i=this.loop_re_over_block(n,t,(function(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1));var e=r.references[t[1].toLowerCase()]={href:t[2]};void 0!==t[4]?e.title=t[4]:void 0!==t[5]&&(e.title=t[5])}));return i.length&&e.unshift(o(i,t.trailing)),[]}},para:function(t,e){return[["para"].concat(this.processInline(t))]}}},e.dialects.Gruber.inline={__oneElement__:function(t,e,n){var r;e=e||this.dialect.inline.__patterns__;var i,o=new RegExp("([\\s\\S]*?)("+(e.source||e)+")");return r=o.exec(t),r?r[1]?[r[1].length,r[1]]:(r[2]in this.dialect.inline&&(i=this.dialect.inline[r[2]].call(this,t.substr(r.index),r,n||[])),i=i||[r[2].length,r[2]],i):[t.length,t]},__call__:function(t,e){var n,r=[];function i(t){"string"==typeof t&&"string"==typeof r[r.length-1]?r[r.length-1]+=t:r.push(t)}while(t.length>0)n=this.dialect.inline.__oneElement__.call(this,t,e,r),t=t.substr(n.shift()),l(n,i);return r},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(t){return this.dialect.inline.__escape__.exec(t)?[2,t.charAt(1)]:[1,"\\"]},"![":function(t){var e=t.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1)),e[2]=this.dialect.inline.__call__.call(this,e[2],/\\/)[0];var n={alt:e[1],href:e[2]||""};return void 0!==e[4]&&(n.title=e[4]),[e[0].length,["img",n]]}return e=t.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),e?[e[0].length,["img_ref",{alt:e[1],ref:e[2].toLowerCase(),original:e[0]}]]:[2,"!["]},"[":function(t){var n=String(t),r=e.DialectHelpers.inline_until_char.call(this,t.substr(1),"]");if(!r)return[1,"["];var i,o,s=1+r[0],a=r[1];t=t.substr(s);var c=t.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(c){var u=c[1];if(s+=c[0].length,u&&"<"==u[0]&&">"==u[u.length-1]&&(u=u.substring(1,u.length-1)),!c[3])for(var l=1,h=0;h<u.length;h++)switch(u[h]){case"(":l++;break;case")":0==--l&&(s-=u.length-h,u=u.substring(0,h));break}return u=this.dialect.inline.__call__.call(this,u,/\\/)[0],o={href:u||""},void 0!==c[3]&&(o.title=c[3]),i=["link",o].concat(a),[s,i]}return c=t.match(/^\s*\[(.*?)\]/),c?(s+=c[0].length,o={ref:(c[1]||String(a)).toLowerCase(),original:n.substr(0,s)},i=["link_ref",o].concat(a),[s,i]):1==a.length&&"string"==typeof a[0]?(o={ref:a[0].toLowerCase(),original:n.substr(0,s)},i=["link_ref",o,a[0]],[s,i]):[1,"["]},"<":function(t){var e;return null!=(e=t.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?e[3]?[e[0].length,["link",{href:"mailto:"+e[3]},e[3]]]:"mailto"==e[2]?[e[0].length,["link",{href:e[1]},e[1].substr("mailto:".length)]]:[e[0].length,["link",{href:e[1]},e[1]]]:[1,"<"]},"`":function(t){var e=t.match(/(`+)(([\s\S]*?)\1)/);return e&&e[2]?[e[1].length+e[2].length,["inlinecode",e[3]]]:[1,"`"]},"  \n":function(t){return[3,["linebreak"]]}},e.dialects.Gruber.inline["**"]=c("strong","**"),e.dialects.Gruber.inline["__"]=c("strong","__"),e.dialects.Gruber.inline["*"]=c("em","*"),e.dialects.Gruber.inline["_"]=c("em","_"),e.buildBlockOrder=function(t){var e=[];for(var n in t)"__order__"!=n&&"__call__"!=n&&e.push(n);t.__order__=e},e.buildInlinePatterns=function(t){var e=[];for(var n in t)if(!n.match(/^__.*__$/)){var r=n.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");e.push(1==n.length?r:"(?:"+r+")")}e=e.join("|"),t.__patterns__=e;var i=t.__call__;t.__call__=function(t,n){return void 0!=n?i.call(this,t,n):i.call(this,t,e)}},e.DialectHelpers={},e.DialectHelpers.inline_until_char=function(t,e){var n=0,r=[];while(1){if(t.charAt(n)==e)return n++,[n,r];if(n>=t.length)return null;var i=this.dialect.inline.__oneElement__.call(this,t.substr(n));n+=i[0],r.push.apply(r,i.slice(1))}},e.subclassDialect=function(t){function e(){}function n(){}return e.prototype=t.block,n.prototype=t.inline,{block:new e,inline:new n}},e.buildBlockOrder(e.dialects.Gruber.block),e.buildInlinePatterns(e.dialects.Gruber.inline),e.dialects.Maruku=e.subclassDialect(e.dialects.Gruber),e.dialects.Maruku.processMetaHash=function(t){for(var e=u(t),n={},r=0;r<e.length;++r)if(/^#/.test(e[r]))n.id=e[r].substring(1);else if(/^\./.test(e[r]))n["class"]?n["class"]=n["class"]+e[r].replace(/./," "):n["class"]=e[r].substring(1);else if(/\=/.test(e[r])){var i=e[r].split(/\=/);n[i[0]]=i[1]}return n},e.dialects.Maruku.block.document_meta=function(t,e){if(!(t.lineNumber>1)&&t.match(/^(?:\w+:.*\n)*\w+:.*$/)){d(this.tree)||this.tree.splice(1,0,{});var n=t.split(/\n/);for(p in n){var r=n[p].match(/(\w+):\s*(.*)$/),i=r[1].toLowerCase(),o=r[2];this.tree[1][i]=o}return[]}},e.dialects.Maruku.block.block_meta=function(t,e){var n=t.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(n){var r,i=this.dialect.processMetaHash(n[2]);if(""===n[1]){var o=this.tree[this.tree.length-1];if(r=d(o),"string"===typeof o)return;for(a in r||(r={},o.splice(1,0,r)),i)r[a]=i[a];return[]}var s=t.replace(/\n.*$/,""),c=this.processBlock(s,[]);for(a in r=d(c[0]),r||(r={},c[0].splice(1,0,r)),i)r[a]=i[a];return c}},e.dialects.Maruku.block.definition_list=function(t,e){var n,r=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"];if(a=t.match(r)){var o=[t];while(e.length&&r.exec(e[0]))o.push(e.shift());for(var s=0;s<o.length;++s){var a=o[s].match(r),c=a[1].replace(/\n$/,"").split(/\n/),u=a[2].split(/\n:\s+/);for(n=0;n<c.length;++n)i.push(["dt",c[n]]);for(n=0;n<u.length;++n)i.push(["dd"].concat(this.processInline(u[n].replace(/(\n)\s+/,"$1"))))}return[i]}},e.dialects.Maruku.block.table=function(t,e){var n,r,i=function(t,e){e=e||"\\s",e.match(/^[\\|\[\]{}?*.+^$]$/)&&(e="\\"+e);var n,r=[],i=new RegExp("^((?:\\\\.|[^\\\\"+e+"])*)"+e+"(.*)");while(n=t.match(i))r.push(n[1]),t=n[2];return r.push(t),r},o=/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,s=/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/;if(r=t.match(o))r[3]=r[3].replace(/^\s*\|/gm,"");else if(!(r=t.match(s)))return;var a=["table",["thead",["tr"]],["tbody"]];r[2]=r[2].replace(/\|\s*$/,"").split("|");var c=[];for(l(r[2],(function(t){t.match(/^\s*-+:\s*$/)?c.push({align:"right"}):t.match(/^\s*:-+\s*$/)?c.push({align:"left"}):t.match(/^\s*:-+:\s*$/)?c.push({align:"center"}):c.push({})})),r[1]=i(r[1].replace(/\|\s*$/,""),"|"),n=0;n<r[1].length;n++)a[1][1].push(["th",c[n]||{}].concat(this.processInline(r[1][n].trim())));return l(r[3].replace(/\|\s*$/gm,"").split("\n"),(function(t){var e=["tr"];for(t=i(t,"|"),n=0;n<t.length;n++)e.push(["td",c[n]||{}].concat(this.processInline(t[n].trim())));a[2].push(e)}),this),[a]},e.dialects.Maruku.inline["{:"]=function(t,e,n){if(!n.length)return[2,"{:"];var r=n[n.length-1];if("string"===typeof r)return[2,"{:"];var i=t.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!i)return[2,"{:"];var o=this.dialect.processMetaHash(i[1]),s=d(r);for(var a in s||(s={},r.splice(1,0,s)),o)s[a]=o[a];return[i[0].length,""]},e.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,e.buildBlockOrder(e.dialects.Maruku.block),e.buildInlinePatterns(e.dialects.Maruku.inline);var l,h=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)};l=Array.prototype.forEach?function(t,e,n){return t.forEach(e,n)}:function(t,e,n){for(var r=0;r<t.length;r++)e.call(n||t,t[r],r,t)};var f=function(t){for(var e in t)if(hasOwnProperty.call(t,e))return!1;return!0};function d(t){return h(t)&&t.length>1&&"object"===typeof t[1]&&!h(t[1])?t[1]:void 0}function g(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function m(t){if("string"===typeof t)return g(t);var e=t.shift(),n={},r=[];!t.length||"object"!==typeof t[0]||t[0]instanceof Array||(n=t.shift());while(t.length)r.push(m(t.shift()));var i="";for(var o in n)i+=" "+o+'="'+g(n[o])+'"';return"img"==e||"br"==e||"hr"==e?"<"+e+i+"/>":"<"+e+i+">"+r.join("")+"</"+e+">"}function v(t,e,n){var r;n=n||{};var i=t.slice(0);"function"===typeof n.preprocessTreeNode&&(i=n.preprocessTreeNode(i,e));var o=d(i);if(o){for(r in i[1]={},o)i[1][r]=o[r];o=i[1]}if("string"===typeof i)return i;switch(i[0]){case"header":i[0]="h"+i[1].level,delete i[1].level;break;case"bulletlist":i[0]="ul";break;case"numberlist":i[0]="ol";break;case"listitem":i[0]="li";break;case"para":i[0]="p";break;case"markdown":i[0]="html",o&&delete o.references;break;case"code_block":i[0]="pre",r=o?2:1;var s=["code"];s.push.apply(s,i.splice(r,i.length-r)),i[r]=s;break;case"inlinecode":i[0]="code";break;case"img":i[1].src=i[1].href,delete i[1].href;break;case"linebreak":i[0]="br";break;case"link":i[0]="a";break;case"link_ref":i[0]="a";var a=e[o.ref];if(!a)return o.original;delete o.ref,o.href=a.href,a.title&&(o.title=a.title),delete o.original;break;case"img_ref":i[0]="img";a=e[o.ref];if(!a)return o.original;delete o.ref,o.src=a.href,a.title&&(o.title=a.title),delete o.original;break}if(r=1,o){for(var c in i[1]){r=2;break}1===r&&i.splice(r,1)}for(;r<i.length;++r)i[r]=v(i[r],e,n);return i}function y(t){var e=d(t)?2:1;while(e<t.length)"string"===typeof t[e]?e+1<t.length&&"string"===typeof t[e+1]?t[e]+=t.splice(e+1,1)[0]:++e:(y(t[e]),++e)}t.renderJsonML=function(t,e){e=e||{},e.root=e.root||!1;var n=[];if(e.root)n.push(m(t));else{t.shift(),!t.length||"object"!==typeof t[0]||t[0]instanceof Array||t.shift();while(t.length)n.push(m(t.shift()))}return n.join("\n\n")}})(function(){return e}())},"8ddc":function(t,e,n){e.markdown=n("8cb0"),e.parse=e.markdown.toHTML},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),i=/#|\.prototype\./,o=function(t,e){var n=a[s(t)];return n==u||n!=c&&("function"==typeof e?r(e):!!e)},s=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(R){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),s=new C(r||[]);return o._invoke=S(t,n,s),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(R){return{type:"throw",arg:R}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={};function m(){}function v(){}function y(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(N([])));_&&_!==n&&r.call(_,o)&&(b=_);var E=y.prototype=m.prototype=Object.create(b);function T(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function n(i,o,s,a){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function S(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return x()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=k(s,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function N(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:x}}function x(){return{value:e,done:!0}}return v.prototype=y,c(E,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},T(I.prototype),c(I.prototype,s,(function(){return this})),t.AsyncIterator=I,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new I(u(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},T(E),c(E,a,"Generator"),c(E,o,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(t,e,n){var r=n("825a"),i=n("35a1");t.exports=function(t,e){var n=arguments.length<2?i(t):e;if("function"!=typeof n)throw TypeError(String(t)+" is not iterable");return r(n.call(t))}},"9ab4":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"e",(function(){return l})),n.d(e,"g",(function(){return h}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},o.apply(this,arguments)};function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function a(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{c(r.next(t))}catch(e){o(e)}}function a(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(s,a)}c((r=r.apply(t,e||[])).next())}))}function c(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function u(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function h(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("a04b"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=s(e),o(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:o(1,n)}),s(t,u,!1,!0),a[u]=c,t}},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:String(e)}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("4840"),u=n("cdf9"),l=n("6eeb"),h=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:h},{finally:function(t){var e=c(this,a("Promise")),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then((function(){return n}))}:t,n?function(n){return u(e,t()).then((function(){throw n}))}:t)}}),!i&&"function"==typeof o){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&l(o.prototype,"finally",f,{unsafe:!0})}},a8e9:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return E})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return R})),n.d(e,"g",(function(){return A})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return j})),n.d(e,"j",(function(){return f})),n.d(e,"k",(function(){return g})),n.d(e,"l",(function(){return v})),n.d(e,"m",(function(){return k})),n.d(e,"n",(function(){return y})),n.d(e,"o",(function(){return d})),n.d(e,"p",(function(){return m})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return b})),n.d(e,"s",(function(){return C})),n.d(e,"t",(function(){return N}));var r=n("9ab4"),i=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},o=function(t){var e=[],n=0,r=0;while(n<t.length){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){o=t[n++];var s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var o=t[i],s=i+1<t.length,a=s?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=o>>2,h=(3&o)<<4|a>>4,f=(15&a)<<2|u>>6,d=63&u;c||(d=64,s||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var o=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;var c=i<t.length,u=c?n[t.charAt(i)]:64;++i;var l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==o||null==a||null==u||null==h)throw Error();var f=o<<2|a>>4;if(r.push(f),64!==u){var d=a<<4&240|u>>2;if(r.push(d),64!==h){var p=u<<6&192|h;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){var e=i(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var l=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"===typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n={alg:"none",type:"JWT"},i=e||"demo-project",o=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object(r["a"])({iss:"https://securetoken.google.com/"+i,aud:i,iat:o,exp:o+3600,auth_time:o,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),u="";return[c(JSON.stringify(n)),c(JSON.stringify(a)),u].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function p(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function g(){var t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){return f().indexOf("Electron/")>=0}function y(){var t=f();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b(){return f().indexOf("MSAppHost/")>=0}function w(){return!p()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _="FirebaseError",E=function(t){function e(n,r,i){var o=t.call(this,r)||this;return o.code=n,o.customData=i,o.name=_,Object.setPrototypeOf(o,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,T.prototype.create),o}return Object(r["c"])(e,t),e}(Error),T=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,o=this.errors[t],s=o?I(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").",c=new E(i,a,r);return c},t}();function I(t,e){return t.replace(S,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var S=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function A(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,o=n;i<o.length;i++){var s=o[i];if(!r.includes(s))return!1;var a=t[s],c=e[s];if(O(a)&&O(c)){if(!A(a,c))return!1}else if(a!==c)return!1}for(var u=0,l=r;u<l.length;u++){s=l[u];if(!n.includes(s))return!1}return!0}function O(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){for(var e=[],n=function(t,n){Array.isArray(n)?n.forEach((function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,i=Object.entries(t);r<i.length;r++){var o=i[r],s=o[0],a=o[1];n(s,a)}return e.length?"&"+e.join("&"):""}function N(t){var e={},n=t.replace(/^\?/,"").split("&");return n.forEach((function(t){if(t){var n=t.split("="),r=n[0],i=n[1];e[decodeURIComponent(r)]=decodeURIComponent(i)}})),e}function x(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,e){e||(e=0);var n=this.W_;if("string"===typeof t)for(var r=0;r<16;r++)n[r]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(r=0;r<16;r++)n[r]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,s,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=l^c&(u^l),s=1518500249):(o=c^u^l,s=1859775393):r<60?(o=c&u|l&(c|u),s=2400959708):(o=c^u^l,s=3395469782);i=(a<<5|a>>>27)+o+h+s+n[r]&4294967295;h=l,l=u,u=4294967295&(c<<30|c>>>2),c=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},t.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);var n=e-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;while(r<e){if(0===o)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<e)if(i[o]=t[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=e}},t.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)t[r]=this.chain_[n]>>i&255,++r;return t}})();function R(t,e){var n=new D(t,e);return n.subscribe.bind(n)}var D=function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=L(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),o},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))},t}();function L(t,e){if("object"!==typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"===typeof t[i])return!0}return!1}function P(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},abfd:function(t,e,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i;n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d}));var o,s=[];(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(o||(o={}));var a={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},c=o.INFO,u=(i={},i[o.DEBUG]="log",i[o.VERBOSE]="log",i[o.INFO]="info",i[o.WARN]="warn",i[o.ERROR]="error",i),l=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(e<t.logLevel)){var o=(new Date).toISOString(),s=u[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,r(["["+o+"]  "+t.name+":"],n))}},h=function(){function t(t){this.name=t,this._logLevel=c,this._logHandler=l,this._userLogHandler=null,s.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in o))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"===typeof t?a[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.DEBUG],t)),this._logHandler.apply(this,r([this,o.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.VERBOSE],t)),this._logHandler.apply(this,r([this,o.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.INFO],t)),this._logHandler.apply(this,r([this,o.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.WARN],t)),this._logHandler.apply(this,r([this,o.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.ERROR],t)),this._logHandler.apply(this,r([this,o.ERROR],t))},t}();function f(t){s.forEach((function(e){e.setLogLevel(t)}))}function d(t,e){for(var n=function(n){var r=null;e&&e.level&&(r=a[e.level]),n.userLogHandler=null===t?null:function(e,n){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];var a=i.map((function(t){if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((function(t){return t})).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:o[n].toLowerCase(),message:a,args:i,type:e.name})}},r=0,i=s;r<i.length;r++){var c=i[r];n(c)}}},ae93:function(t,e,n){"use strict";var r,i,o,s=n("d039"),a=n("e163"),c=n("9112"),u=n("5135"),l=n("b622"),h=n("c430"),f=l("iterator"),d=!1,p=function(){return this};[].keys&&(o=[].keys(),"next"in o?(i=a(a(o)),i!==Object.prototype&&(r=i)):d=!0);var g=void 0==r||s((function(){var t={};return r[f].call(t)!==t}));g&&(r={}),h&&!g||u(r,f)||c(r,f,p),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,o,s,a,c,u,l,h=n("da84"),f=n("06cf").f,d=n("2cf4").set,p=n("1cdc"),g=n("d4c3"),m=n("a4b4"),v=n("605d"),y=h.MutationObserver||h.WebKitMutationObserver,b=h.document,w=h.process,_=h.Promise,E=f(h,"queueMicrotask"),T=E&&E.value;T||(r=function(){var t,e;v&&(t=w.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?s():o=void 0,n}}o=void 0,t&&t.enter()},p||v||m||!y||!b?!g&&_&&_.resolve?(u=_.resolve(void 0),u.constructor=_,l=u.then,s=function(){l.call(u,r)}):s=v?function(){w.nextTick(r)}:function(){d.call(h,r)}:(a=!0,c=b.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),t.exports=T||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,s()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||s;t.exports=function(t){return o(u,t)&&(a||"string"==typeof u[t])||(a&&o(l,t)?u[t]=l[t]:u[t]=h("Symbol."+t)),u[t]}},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,h=6==t,f=7==t,d=5==t||h;return function(p,g,m,v){for(var y,b,w=o(p),_=i(w),E=r(g,m,3),T=s(_.length),I=0,S=v||a,k=e?S(p,T):n||f?S(p,0):void 0;T>I;I++)if((d||I in _)&&(y=_[I],b=E(y,I,w),t))if(e)k[I]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return I;case 2:c.call(k,y)}else switch(t){case 4:return!1;case 7:c.call(k,y)}return h?-1:u||l?l:k}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},c04e:function(t,e,n){var r=n("861d"),i=n("d9b5"),o=n("485a"),s=n("b622"),a=s("toPrimitive");t.exports=function(t,e){if(!r(t)||i(t))return t;var n,s=t[a];if(void 0!==s){if(void 0===e&&(e="default"),n=s.call(t,e),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),o(t,e)}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c7b2:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return xr})),n.d(e,"b",(function(){return Dr})),n.d(e,"c",(function(){return Rr})),n.d(e,"d",(function(){return Pr})),n.d(e,"e",(function(){return Lr})),n.d(e,"f",(function(){return jr})),n.d(e,"g",(function(){return Mr})),n.d(e,"h",(function(){return Cr})),n.d(e,"i",(function(){return Nr}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var s,c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},u=u||{},l=c||self;function h(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:y,b.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var T=0,I={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=T)){var t=p(this);delete I[t]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var S=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},k=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"===typeof t?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function A(t){t:{for(var e=zn,n=t.length,r="string"===typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function O(t){return Array.prototype.concat.apply([],arguments)}function C(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function N(t){return/^[\s\xa0]*$/.test(t)}var x,R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function D(t,e){return-1!=t.indexOf(e)}function L(t,e){return t<e?-1:t>e?1:0}t:{var P=l.navigator;if(P){var j=P.userAgent;if(j){x=j;break t}}x=""}function M(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function U(t){var e={};for(var n in t)e[n]=t[n];return e}var F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(var o=0;o<F.length;o++)n=F[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $(t){return $[" "](t),t}function B(t){var e=et;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}$[" "]=h;var q,H=D(x,"Opera"),z=D(x,"Trident")||D(x,"MSIE"),G=D(x,"Edge"),K=G||z,W=D(x,"Gecko")&&!(D(x.toLowerCase(),"webkit")&&!D(x,"Edge"))&&!(D(x,"Trident")||D(x,"MSIE"))&&!D(x,"Edge"),J=D(x.toLowerCase(),"webkit")&&!D(x,"Edge");function X(){var t=l.document;return t?t.documentMode:void 0}t:{var Q="",Y=function(){var t=x;return W?/rv:([^\);]+)(\)|;)/.exec(t):G?/Edge\/([\d\.]+)/.exec(t):z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):J?/WebKit\/(\S+)/.exec(t):H?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Y&&(Q=Y?Y[1]:""),z){var Z=X();if(null!=Z&&Z>parseFloat(Q)){q=String(Z);break t}}q=Q}var tt,et={};function nt(){return B((function(){for(var t=0,e=R(String(q)).split("."),n=R("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var o=e[i]||"",s=n[i]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==o[0].length&&0==s[0].length)break;t=L(0==o[1].length?0:parseInt(o[1],10),0==s[1].length?0:parseInt(s[1],10))||L(0==o[2].length,0==s[2].length)||L(o[2],s[2]),o=o[3],s=s[3]}while(0==t)}return 0<=t}))}if(l.document&&z){var rt=X();tt=rt||(parseInt(q,10)||void 0)}else tt=void 0;var it=tt,ot=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",h,e),l.removeEventListener("test",h,e)}catch(n){}return t}();function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function at(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(W){t:{try{$(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ct[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&at.Z.h.call(this)}}st.prototype.h=function(){this.defaultPrevented=!0},_(at,st);var ct={2:"touch",3:"pen",4:"mouse"};at.prototype.h=function(){at.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),lt=0;function ht(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++lt,this.ca=this.fa=!1}function ft(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function dt(t){this.src=t,this.g={},this.h=0}function pt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=S(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ft(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function gt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==r)return i}return-1}dt.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=gt(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new ht(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var mt="closure_lm_"+(1e6*Math.random()|0),vt={};function yt(t,e,n,r,i){if(r&&r.once)return _t(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)yt(t,e[o],n,r,i);return null}return n=Ot(n),t&&t[ut]?t.N(e,n,d(r)?!!r.capture:!!r,i):bt(t,e,n,!1,r,i)}function bt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=d(i)?!!i.capture:!!i,a=kt(t);if(a||(t[mt]=a=new dt(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=wt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ot||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(It(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function wt(){function t(n){return e.call(t.src,t.listener,n)}var e=St;return t}function _t(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)_t(t,e[o],n,r,i);return null}return n=Ot(n),t&&t[ut]?t.O(e,n,d(r)?!!r.capture:!!r,i):bt(t,e,n,!0,r,i)}function Et(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)Et(t,e[o],n,r,i);else r=d(r)?!!r.capture:!!r,n=Ot(n),t&&t[ut]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=gt(o,n,r,i),-1<n&&(ft(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=kt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gt(e,n,r,i)),(n=-1<t?e[t]:null)&&Tt(n))}function Tt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ut])pt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(It(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=kt(e))?(pt(n,t),0==n.h&&(n.src=null,e[mt]=null)):ft(t)}}}function It(t){return t in vt?vt[t]:vt[t]="on"+t}function St(t,e){if(t.ca)t=!0;else{e=new at(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Tt(t),t=n.call(r,e)}return t}function kt(t){return t=t[mt],t instanceof dt?t:null}var At="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ot(t){return"function"===typeof t?t:(t[At]||(t[At]=function(e){return t.handleEvent(e)}),t[At])}function Ct(){E.call(this),this.i=new dt(this),this.P=this,this.I=null}function Nt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var i=e;e=new st(r,t),V(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=xt(s,r,!0,e)&&i}if(s=e.g=t,i=xt(s,r,!0,e)&&i,i=xt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=xt(s,r,!1,e)&&i}function xt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&pt(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_(Ct,E),Ct.prototype[ut]=!0,Ct.prototype.removeEventListener=function(t,e,n,r){Et(this,t,e,n,r)},Ct.prototype.M=function(){if(Ct.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ft(n[r]);delete e.g[t],e.h--}}this.I=null},Ct.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Rt=l.JSON.stringify;function Dt(){var t=Bt,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Lt,Pt=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=jt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),jt=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new Mt}),(function(t){return t.reset()})),Mt=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function Ut(t){l.setTimeout((function(){throw t}),0)}function Ft(t,e){Lt||Vt(),$t||(Lt(),$t=!0),Bt.add(t,e)}function Vt(){var t=l.Promise.resolve(void 0);Lt=function(){t.then(qt)}}var $t=!1,Bt=new Pt;function qt(){for(var t;t=Dt();){try{t.h.call(t.g)}catch(n){Ut(n)}var e=jt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$t=!1}function Ht(t,e){Ct.call(this),this.h=t||1,this.g=e||l,this.j=b(this.kb,this),this.l=Date.now()}function zt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Gt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function Kt(t){t.g=Gt((function(){t.g=null,t.i&&(t.i=!1,Kt(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}_(Ht,Ct),s=Ht.prototype,s.da=!1,s.S=null,s.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Nt(this,"tick"),this.da&&(zt(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){Ht.Z.M.call(this),zt(this),delete this.g};var Wt=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return i(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:Kt(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(E);function Jt(t){E.call(this),this.h=t,this.g={}}_(Jt,E);var Xt=[];function Qt(t,e,n,r){Array.isArray(n)||(n&&(Xt[0]=n.toString()),n=Xt);for(var i=0;i<n.length;i++){var o=yt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Yt(t){M(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Tt(t)}),t),t.g={}}function Zt(){this.g=!0}function te(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function ee(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function ne(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ie(t,n)+(r?" "+r:"")}))}function re(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ie(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Rt(n)}catch(a){return e}}Jt.prototype.M=function(){Jt.Z.M.call(this),Yt(this)},Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Zt.prototype.Aa=function(){this.g=!1},Zt.prototype.info=function(){};var oe={},se=null;function ae(){return se=se||new Ct}function ce(t){st.call(this,oe.Ma,t)}function ue(t){var e=ae();Nt(e,new ce(e,t))}function le(t,e){st.call(this,oe.STAT_EVENT,t),this.stat=e}function he(t){var e=ae();Nt(e,new le(e,t))}function fe(t,e){st.call(this,oe.Na,t),this.size=e}function de(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",_(ce,st),oe.STAT_EVENT="statevent",_(le,st),oe.Na="timingevent",_(fe,st);var pe={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ge={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function me(){}function ve(t){return t.h||(t.h=t.i())}function ye(){}me.prototype.h=null;var be,we={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function _e(){st.call(this,"d")}function Ee(){st.call(this,"c")}function Te(){}function Ie(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Jt(this),this.P=ke,t=K?125:void 0,this.W=new Ht(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Se}function Se(){this.i=null,this.g="",this.h=!1}_(_e,st),_(Ee,st),_(Te,me),Te.prototype.g=function(){return new XMLHttpRequest},Te.prototype.i=function(){return{}},be=new Te;var ke=45e3,Ae={},Oe={};function Ce(t,e,n){t.K=1,t.v=tn(We(e)),t.s=n,t.U=!0,Ne(t,null)}function Ne(t,e){t.F=Date.now(),Le(t),t.A=We(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),mn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Se,t.g=Er(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Wt(b(t.Ia,t,t.g),t.O)),Qt(t.V,t.g,"readystatechange",t.gb),e=t.H?U(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ue(1),te(t.j,t.u,t.A,t.m,t.X,t.s)}function xe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Re(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if(r=De(t,n),r==Oe){4==e&&(t.o=4,he(14),i=!1),ne(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ae){t.o=4,he(15),ne(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}ne(t.j,t.m,r,null),Fe(t,r)}xe(t)&&r!=Oe&&r!=Ae&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,he(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),pr(e),e.L=!0,he(11))):(ne(t.j,t.m,n,"[Invalid Chunked Response]"),Ue(t),Me(t))}function De(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Oe:(n=Number(e.substring(n,r)),isNaN(n)?Ae:(r+=1,r+n>e.length?Oe:(e=e.substr(r,n),t.C=r+n,e)))}function Le(t){t.Y=Date.now()+t.P,Pe(t,t.P)}function Pe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=de(b(t.eb,t),e)}function je(t){t.B&&(l.clearTimeout(t.B),t.B=null)}function Me(t){0==t.l.G||t.I||vr(t.l,t)}function Ue(t){je(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,zt(t.W),Yt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||In(n.i,t)))if(n.I=t.N,!t.J&&In(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(o){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;mr(n),ir(n)}dr(n),he(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=de(b(n.ab,n),6e3));if(1>=Tn(n.i)&&n.ka){try{n.ka()}catch(o){}n.ka=void 0}}else br(n,11)}else if((t.J||n.g==t)&&mr(n),!N(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var o=i[e];if(n.U=o[0],o=o[1],2==n.G)if("c"==o[0]){n.J=o[1],n.la=o[2];var s=o[3];null!=s&&(n.ma=s,n.h.info("VER="+n.ma));var a=o[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=o[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=t.g;if(u){var l=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(D(l,"spdy")||D(l,"quic")||D(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(Sn(h,h.h),h.h=null))}if(r.D){var f=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.sa=f,Ze(r.F,r.D,f))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var d=t;if(r.oa=_r(r,r.H?r.la:null,r.W),d.J){kn(r.i,d);var p=d,g=r.K;g&&p.setTimeout(g),p.B&&(je(p),Le(p)),r.g=d}else fr(r);0<n.l.length&&ar(n)}else"stop"!=o[0]&&"close"!=o[0]||br(n,7);else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?br(n,7):rr(n):"noop"!=o[0]&&n.j&&n.j.wa(o),n.A=0)}ue(4)}catch(o){}}function Ve(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function $e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)k(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(f(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Ve(t),i=r.length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function Be(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Be)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function qe(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];He(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],He(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function He(t,e){return Object.prototype.hasOwnProperty.call(t,e)}s=Ie.prototype,s.setTimeout=function(t){this.P=t},s.gb=function(t){t=t.target;var e=this.L;e&&3==Qn(t)?e.l():this.Ia(t)},s.Ia=function(t){try{if(t==this.g)t:{var e=Qn(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||K||this.g&&(this.h.h||this.g.ga()||Yn(this.g)))){this.I||4!=e||7==n||ue(8==n||0>=r?3:2),je(this);var i=this.g.ba();this.N=i;e:if(xe(this)){var o=Yn(this.g);t="";var s=o.length,a=4==Qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ue(this),Me(this);var c="";break e}this.h.i=new l.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,t+=this.h.i.decode(o[n],{stream:a&&n==s-1});o.splice(0,s),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,ee(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var u,h=this.g;if((u=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(u)){var f=u;break e}}f=null}if(!(i=f)){this.i=!1,this.o=3,he(12),Ue(this),Me(this);break t}ne(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fe(this,i)}this.U?(Re(this,e,c),K&&this.i&&3==e&&(Qt(this.V,this.W,"tick",this.fb),this.W.start())):(ne(this.j,this.m,c,null),Fe(this,c)),4==e&&Ue(this),this.i&&!this.I&&(4==e?vr(this.l,this):(this.i=!1,Le(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,he(12)):(this.o=0,he(13)),Ue(this),Me(this)}}}catch(e){}},s.fb=function(){if(this.g){var t=Qn(this.g),e=this.g.ga();this.C<e.length&&(je(this),Re(this,t,e),this.i&&4!=t&&Le(this))}},s.cancel=function(){this.I=!0,Ue(this)},s.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(re(this.j,this.A),2!=this.K&&(ue(3),he(17)),Ue(this),this.o=2,Me(this)):Pe(this,this.Y-t)},s=Be.prototype,s.R=function(){qe(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},s.T=function(){return qe(this),this.g.concat()},s.get=function(t,e){return He(this.h,t)?this.h[t]:e},s.set=function(t,e){He(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},s.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var ze=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ge(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ke){this.g=void 0!==e?e:t.g,Je(this,t.j),this.s=t.s,Xe(this,t.i),Qe(this,t.m),this.l=t.l,e=t.h;var n=new fn;n.i=e.i,e.g&&(n.g=new Be(e.g),n.h=e.h),Ye(this,n),this.o=t.o}else t&&(n=String(t).match(ze))?(this.g=!!e,Je(this,n[1]||"",!0),this.s=rn(n[2]||""),Xe(this,n[3]||"",!0),Qe(this,n[4]),this.l=rn(n[5]||"",!0),Ye(this,n[6]||"",!0),this.o=rn(n[7]||"")):(this.g=!!e,this.h=new fn(null,this.g))}function We(t){return new Ke(t)}function Je(t,e,n){t.j=n?rn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xe(t,e,n){t.i=n?rn(e,!0):e}function Qe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ye(t,e,n){e instanceof fn?(t.h=e,yn(t.h,t.g)):(n||(e=on(e,ln)),t.h=new fn(e,t.g))}function Ze(t,e,n){t.h.set(e,n)}function tn(t){return Ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function en(t){return t instanceof Ke?We(t):new Ke(t,void 0)}function nn(t,e,n,r){var i=new Ke(null,void 0);return t&&Je(i,t),e&&Xe(i,e),n&&Qe(i,n),r&&(i.l=r),i}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,sn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,an,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,an,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?un:cn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,hn)),t.join("")};var an=/[#\/\?@]/g,cn=/[#\?:]/g,un=/[#\?]/g,ln=/[#\?@]/g,hn=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function dn(t){t.g||(t.g=new Be,t.h=0,t.i&&Ge(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function pn(t,e){dn(t),e=vn(t,e),He(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,He(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&qe(t)))}function gn(t,e){return dn(t),e=vn(t,e),He(t.g.h,e)}function mn(t,e,n){pn(t,e),0<n.length&&(t.i=null,t.g.set(vn(t,e),C(n)),t.h+=n.length)}function vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yn(t,e){e&&!t.j&&(dn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(pn(this,e),mn(this,n,t))}),t)),t.j=e}s=fn.prototype,s.add=function(t,e){dn(this),this.i=null,t=vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){dn(this),this.g.forEach((function(n,r){k(n,(function(n){t.call(e,n,r,this)}),this)}),this)},s.T=function(){dn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},s.R=function(t){dn(this);var e=[];if("string"===typeof t)gn(this,t)&&(e=O(e,this.g.get(vn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=O(e,t[n])}return e},s.set=function(t,e){return dn(this),this.i=null,t=vn(this,t),gn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.i=t.join("&")};var bn=function(){function t(t,e){this.h=t,this.g=e}return t}();function wn(t){this.l=t||_n,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(l.g&&l.g.Ea&&l.g.Ea()&&l.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _n=10;function En(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Tn(t){return t.h?1:t.g?t.g.size:0}function In(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Sn(t,e){t.g?t.g.add(e):t.h=e}function kn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function An(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var i=o(t.g.values()),s=i.next();!s.done;s=i.next()){var a=s.value;r=r.concat(a.D)}}catch(c){e={error:c}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return C(t.i)}function On(){}function Cn(){this.g=new On}function Nn(t,e,n){var r=n||"";try{$e(t,(function(t,n){var i=t;d(t)&&(i=Rt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function xn(t,e){var n=new Zt;if(l.Image){var r=new Image;r.onload=w(Rn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(Rn,n,r,"TestLoadImage: error",!1,e),r.onabort=w(Rn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(Rn,n,r,"TestLoadImage: timeout",!1,e),l.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Rn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function Dn(t){this.l=t.$b||null,this.j=t.ib||!1}function Ln(t,e){Ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wn.prototype.cancel=function(){var t,e;if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=o(this.g.values()),r=n.next();!r.done;r=n.next()){var i=r.value;i.cancel()}}catch(s){t={error:s}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},On.prototype.stringify=function(t){return l.JSON.stringify(t,void 0)},On.prototype.parse=function(t){return l.JSON.parse(t,void 0)},_(Dn,me),Dn.prototype.g=function(){return new Ln(this.l,this.j)},Dn.prototype.i=function(t){return function(){return t}}({}),_(Ln,Ct);var Pn=0;function jn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Mn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Un(t)}function Un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Ln.prototype,s.open=function(t,e){if(this.readyState!=Pn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Un(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||l).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Mn(this)),this.readyState=Pn},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof l.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mn(this):Un(this),3==this.readyState&&jn(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,Mn(this))},s.Ta=function(t){this.g&&(this.response=t,Mn(this))},s.ha=function(){this.g&&Mn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Fn=l.JSON.parse;function Vn(t){Ct.call(this),this.headers=new Be,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}_(Vn,Ct);var $n="",Bn=/^https?$/i,qn=["POST","PUT"];function Hn(t){return z&&nt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function zn(t){return"content-type"==t.toLowerCase()}function Gn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kn(t),Jn(t)}function Kn(t){t.D||(t.D=!0,Nt(t,"complete"),Nt(t,"error"))}function Wn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Qn(t)||2!=t.ba()))if(t.v&&4==Qn(t))Gt(t.Fa,0,t);else if(Nt(t,"readystatechange"),4==Qn(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var o=String(t.H).match(ze)[1]||null;if(!o&&l.self&&l.self.location){var s=l.self.location.protocol;o=s.substr(0,s.length-1)}i=!Bn.test(o?o.toLowerCase():"")}e=i}if(e)Nt(t,"complete"),Nt(t,"success");else{t.m=6;try{var a=2<Qn(t)?t.g.statusText:""}catch(c){a=""}t.j=a+" ["+t.ba()+"]",Kn(t)}}finally{Jn(t)}}}function Jn(t,e){if(t.g){Xn(t);var n=t.g,r=t.C[0]?h:null;t.g=null,t.C=null,e||Nt(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function Xn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(l.clearTimeout(t.A),t.A=null)}function Qn(t){return t.g?t.g.readyState:0}function Yn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $n:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Zn(t){var e="";return M(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function tr(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Zn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ze(t,e,n))}function er(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nr(t){this.za=0,this.l=[],this.h=new Zt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=er("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=er("baseRetryDelayMs",5e3,t),this.$a=er("retryDelaySeedMs",1e4,t),this.Ya=er("forwardChannelMaxRetries",2,t),this.ra=er("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new wn(t&&t.concurrentRequestLimit),this.Ca=new Cn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function rr(t){if(or(t),3==t.G){var e=t.V++,n=We(t.F);Ze(n,"SID",t.J),Ze(n,"RID",e),Ze(n,"TYPE","terminate"),lr(t,n),e=new Ie(t,t.h,e,void 0),e.K=2,e.v=tn(We(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(e.v.toString(),"")),!n&&l.Image&&((new Image).src=e.v,n=!0),n||(e.g=Er(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Le(e)}wr(t)}function ir(t){t.g&&(pr(t),t.g.cancel(),t.g=null)}function or(t){ir(t),t.u&&(l.clearTimeout(t.u),t.u=null),mr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&l.clearTimeout(t.m),t.m=null)}function sr(t,e){t.l.push(new bn(t.Za++,e)),3==t.G&&ar(t)}function ar(t){En(t.i)||t.m||(t.m=!0,Ft(t.Ha,t),t.C=0)}function cr(t,e){return!(Tn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=de(b(t.Ha,t,e),yr(t,t.C)),t.C++,!0))}function ur(t,e){var n;n=e?e.m:t.V++;var r=We(t.F);Ze(r,"SID",t.J),Ze(r,"RID",n),Ze(r,"AID",t.U),lr(t,r),t.o&&t.s&&tr(r,t.o,t.s),n=new Ie(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=hr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Sn(t.i,n),Ce(n,r,e)}function lr(t,e){t.j&&$e({},(function(t,n){Ze(e,n,t)}))}function hr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?b(t.j.Oa,t.j,t):null;t:for(var i=t.l,o=-1;;){var s=["count="+n];-1==o?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);for(var a=!0,c=0;c<n;c++){var u=i[c].h,l=i[c].g;if(u-=o,0>u)o=Math.max(0,i[c].h-100),a=!1;else try{Nn(l,s,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=s.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function fr(t){t.g||t.u||(t.Y=1,Ft(t.Ga,t),t.A=0)}function dr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=de(b(t.Ga,t),yr(t,t.A)),t.A++,!0)}function pr(t){null!=t.B&&(l.clearTimeout(t.B),t.B=null)}function gr(t){t.g=new Ie(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=We(t.oa);Ze(e,"RID","rpc"),Ze(e,"SID",t.J),Ze(e,"CI",t.N?"0":"1"),Ze(e,"AID",t.U),lr(t,e),Ze(e,"TYPE","xmlhttp"),t.o&&t.s&&tr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=tn(We(e)),n.s=null,n.U=!0,Ne(n,t)}function mr(t){null!=t.v&&(l.clearTimeout(t.v),t.v=null)}function vr(t,e){var n=null;if(t.g==e){mr(t),pr(t),t.g=null;var r=2}else{if(!In(t.i,e))return;n=e.D,kn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ae(),Nt(r,new fe(r,n,e,i)),ar(t)}else fr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&cr(t,e)||2==r&&dr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}function yr(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function br(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=b(t.jb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||Je(n,"https"),tn(n)),xn(n.toString(),r)}else he(2);t.G=0,t.j&&t.j.va(e),wr(t),or(t)}function wr(t){t.G=0,t.I=-1,t.j&&(0==An(t.i).length&&0==t.l.length||(t.i.i.length=0,C(t.l),t.l.length=0),t.j.ua())}function _r(t,e,n){var r=en(n);if(""!=r.i)e&&Xe(r,e+"."+r.i),Qe(r,r.m);else{var i=l.location;r=nn(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&M(t.aa,(function(t,e){Ze(r,e,t)})),e=t.D,n=t.sa,e&&n&&Ze(r,e,n),Ze(r,"VER",t.ma),lr(t,r),r}function Er(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Vn(new Dn({ib:!0})):new Vn(t.qa),e.L=t.H,e}function Tr(){}function Ir(){if(z&&!(10<=Number(it)))throw Error("Environmental error: no available transport.")}function Sr(t,e){Ct.call(this),this.g=new nr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!N(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!N(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Or(this)}function kr(t){_e.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ar(){Ee.call(this),this.status=1}function Or(t){this.g=t}s=Vn.prototype,s.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ve(this.u):ve(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void Gn(this,o)}t=n||"";var i=new Be(this.headers);r&&$e(r,(function(t,e){i.set(e,t)})),r=A(i.T()),n=l.FormData&&t instanceof l.FormData,!(0<=S(qn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=Hn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=Gt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Gn(this,o)}},s.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Nt(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Nt(this,"complete"),Nt(this,"abort"),Jn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jn(this,!0)),Vn.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?Wn(this):this.cb())},s.cb=function(){Wn(this)},s.ba=function(){try{return 2<Qn(this)?this.g.status:-1}catch(a){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},s.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Fn(e)}},s.Da=function(){return this.m},s.La=function(){return"string"===typeof this.j?this.j:String(this.j)},s=nr.prototype,s.ma=8,s.G=1,s.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},s.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new Ie(this,this.h,t,void 0),n=this.s;if(this.P&&(n?(n=U(n),V(n,this.P)):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var o=this.l[i];if(o="__data__"in o.g&&(o=o.g.__data__,"string"===typeof o)?o.length:void 0,void 0===o)break;if(r+=o,4096<r){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=hr(this,e,r),i=We(this.F),Ze(i,"RID",t),Ze(i,"CVER",22),this.D&&Ze(i,"X-HTTP-Session-Id",this.D),lr(this,i),this.o&&n&&tr(i,this.o,n),Sn(this.i,e),this.Ra&&Ze(i,"TYPE","init"),this.ja?(Ze(i,"$req",r),Ze(i,"SID","null"),e.$=!0,Ce(e,i,null)):Ce(e,i,r),this.G=2}}else 3==this.G&&(t?ur(this,t):0==this.l.length||En(this.i)||ur(this))},s.Ga=function(){if(this.u=null,gr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=de(b(this.bb,this),t)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,he(10),ir(this),gr(this))},s.ab=function(){null!=this.v&&(this.v=null,ir(this),dr(this),he(19))},s.jb=function(t){t?(this.h.info("Successfully pinged google.com"),he(2)):(this.h.info("Failed to ping google.com"),he(1))},s=Tr.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},Ir.prototype.g=function(t,e){return new Sr(t,e)},_(Sr,Ct),Sr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ft(b(t.hb,t,e))),he(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=_r(t,null,t.W),ar(t)},Sr.prototype.close=function(){rr(this.g)},Sr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,sr(this.g,e)}else this.v?(e={},e.__data__=Rt(t),sr(this.g,e)):sr(this.g,t)},Sr.prototype.M=function(){this.g.j=null,delete this.j,rr(this.g),delete this.g,Sr.Z.M.call(this)},_(kr,_e),_(Ar,Ee),_(Or,Tr),Or.prototype.xa=function(){Nt(this.g,"a")},Or.prototype.wa=function(t){Nt(this.g,new kr(t))},Or.prototype.va=function(t){Nt(this.g,new Ar(t))},Or.prototype.ua=function(){Nt(this.g,"b")},Ir.prototype.createWebChannel=Ir.prototype.g,Sr.prototype.send=Sr.prototype.u,Sr.prototype.open=Sr.prototype.m,Sr.prototype.close=Sr.prototype.close,pe.NO_ERROR=0,pe.TIMEOUT=8,pe.HTTP_ERROR=6,ge.COMPLETE="complete",ye.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",Ct.prototype.listen=Ct.prototype.N,Vn.prototype.listenOnce=Vn.prototype.O,Vn.prototype.getLastError=Vn.prototype.La,Vn.prototype.getLastErrorCode=Vn.prototype.Da,Vn.prototype.getStatus=Vn.prototype.ba,Vn.prototype.getResponseJson=Vn.prototype.Qa,Vn.prototype.getResponseText=Vn.prototype.ga,Vn.prototype.send=Vn.prototype.ea;var Cr=function(){return new Ir},Nr=function(){return ae()},xr=pe,Rr=ge,Dr=oe,Lr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Pr=Dn,jr=ye,Mr=Vn}).call(this,n("c8ba"))},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(e.length>c)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("5135"),o=n("b622"),s=o("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},d9b5:function(t,e,n){var r=n("d066"),i=n("fdbf");t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return"function"==typeof e&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("e260"),s=n("9112"),a=n("b622"),c=a("iterator"),u=a("toStringTag"),l=o.values;for(var h in i){var f=r[h],d=f&&f.prototype;if(d){if(d[c]!==l)try{s(d,c,l)}catch(g){d[c]=l}if(d[u]||s(d,u,h),i[h])for(var p in o)if(d[p]!==o[p])try{s(d,p,o[p])}catch(g){d[p]=o[p]}}}},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("5135"),i=n("7b0b"),o=n("f772"),s=n("e177"),a=o("IE_PROTO"),c=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("fea9"),f=n("6eeb"),d=n("e2cc"),p=n("d2bb"),g=n("d44e"),m=n("2626"),v=n("861d"),y=n("1c0b"),b=n("19aa"),w=n("8925"),_=n("2266"),E=n("1c7e"),T=n("4840"),I=n("2cf4").set,S=n("b575"),k=n("cdf9"),A=n("44de"),O=n("f069"),C=n("e667"),N=n("69f3"),x=n("94ca"),R=n("b622"),D=n("6069"),L=n("605d"),P=n("2d00"),j=R("species"),M="Promise",U=N.get,F=N.set,V=N.getterFor(M),$=h&&h.prototype,B=h,q=$,H=u.TypeError,z=u.document,G=u.process,K=O.f,W=K,J=!!(z&&z.createEvent&&u.dispatchEvent),X="function"==typeof PromiseRejectionEvent,Q="unhandledrejection",Y="rejectionhandled",Z=0,tt=1,et=2,nt=1,rt=2,it=!1,ot=x(M,(function(){var t=w(B),e=t!==String(B);if(!e&&66===P)return!0;if(c&&!q["finally"])return!0;if(P>=51&&/native code/.test(t))return!1;var n=new B((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[j]=r,it=n.then((function(){}))instanceof r,!it||!e&&D&&!X})),st=ot||!E((function(t){B.all(t)["catch"]((function(){}))})),at=function(t){var e;return!(!v(t)||"function"!=typeof(e=t.then))&&e},ct=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;S((function(){var r=t.value,i=t.state==tt,o=0;while(n.length>o){var s,a,c,u=n[o++],l=i?u.ok:u.fail,h=u.resolve,f=u.reject,d=u.domain;try{l?(i||(t.rejection===rt&&ft(t),t.rejection=nt),!0===l?s=r:(d&&d.enter(),s=l(r),d&&(d.exit(),c=!0)),s===u.promise?f(H("Promise-chain cycle")):(a=at(s))?a.call(s,h,f):h(s)):f(r)}catch(p){d&&!c&&d.exit(),f(p)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&lt(t)}))}},ut=function(t,e,n){var r,i;J?(r=z.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!X&&(i=u["on"+t])?i(r):t===Q&&A("Unhandled promise rejection",n)},lt=function(t){I.call(u,(function(){var e,n=t.facade,r=t.value,i=ht(t);if(i&&(e=C((function(){L?G.emit("unhandledRejection",r,n):ut(Q,n,r)})),t.rejection=L||ht(t)?rt:nt,e.error))throw e.value}))},ht=function(t){return t.rejection!==nt&&!t.parent},ft=function(t){I.call(u,(function(){var e=t.facade;L?G.emit("rejectionHandled",e):ut(Y,e,t.value)}))},dt=function(t,e,n){return function(r){t(e,r,n)}},pt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=et,ct(t,!0))},gt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw H("Promise can't be resolved itself");var r=at(e);r?S((function(){var n={done:!1};try{r.call(e,dt(gt,n,t),dt(pt,n,t))}catch(i){pt(n,i,t)}})):(t.value=e,t.state=tt,ct(t,!1))}catch(i){pt({done:!1},i,t)}}};if(ot&&(B=function(t){b(this,B,M),y(t),r.call(this);var e=U(this);try{t(dt(gt,e),dt(pt,e))}catch(n){pt(e,n)}},q=B.prototype,r=function(t){F(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:Z,value:void 0})},r.prototype=d(q,{then:function(t,e){var n=V(this),r=K(T(this,B));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=L?G.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=Z&&ct(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=U(t);this.promise=t,this.resolve=dt(gt,e),this.reject=dt(pt,e)},O.f=K=function(t){return t===B||t===o?new i(t):W(t)},!c&&"function"==typeof h&&$!==Object.prototype)){s=$.then,it||(f($,"then",(function(t,e){var n=this;return new B((function(t,e){s.call(n,t,e)})).then(t,e)}),{unsafe:!0}),f($,"catch",q["catch"],{unsafe:!0}));try{delete $.constructor}catch(mt){}p&&p($,q)}a({global:!0,wrap:!0,forced:ot},{Promise:B}),g(B,M,!1,!0),m(M),o=l(M),a({target:M,stat:!0,forced:ot},{reject:function(t){var e=K(this);return e.reject.call(void 0,t),e.promise}}),a({target:M,stat:!0,forced:c||ot},{resolve:function(t){return k(c&&this===o?B:this,t)}}),a({target:M,stat:!0,forced:st},{all:function(t){var e=this,n=K(e),r=n.resolve,i=n.reject,o=C((function(){var n=y(e.resolve),o=[],s=0,a=1;_(t,(function(t){var c=s++,u=!1;o.push(void 0),a++,n.call(e,t).then((function(t){u||(u=!0,o[c]=t,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=K(e),r=n.reject,i=C((function(){var i=y(e.resolve);_(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]})),n.d(e,"f",(function(){return r["f"]})),n.d(e,"g",(function(){return r["g"]})),n.d(e,"h",(function(){return r["h"]}))},e893:function(t,e,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=s.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return ce})),n.d(e,"b",(function(){return ar})),n.d(e,"c",(function(){return de})),n.d(e,"d",(function(){return le})),n.d(e,"e",(function(){return ue})),n.d(e,"f",(function(){return pe})),n.d(e,"g",(function(){return fe}));var r=n("a8e9"),i=n("5606"),o=n("9ab4"),s=n("abfd"),a=n("ffa6");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=new r["b"]("auth","Firebase",c()),l=new s["b"]("@firebase/auth");function h(t,...e){l.logLevel<=s["a"].ERROR&&l.error(`Auth (${i["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw p(t,...e)}function d(t,...e){return p(t,...e)}function p(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u.create(t,...e)}function g(t,e,...n){if(!t)throw p(e,...n)}function m(t){const e="INTERNAL ASSERTION FAILED: "+t;throw h(e),new Error(e)}function v(t,e){t||m(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Map;function b(t){v(t instanceof Function,"Expected a class definition");let e=y.get(t);return e?(v(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,y.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){const n=Object(i["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["g"])(i,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const o=n.initialize({options:e});return o}function _(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(b);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function T(){return"http:"===I()||"https:"===I()}function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.shortDelay=t,this.longDelay=e,v(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["o"])()||Object(r["p"])()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){v(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void m("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void m("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void m("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded"},x=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function D(t,e,n,i,o={}){return L(t,o,()=>{let o={},s={};i&&("GET"===e?s=i:o={body:JSON.stringify(i)});const a=Object(r["s"])(Object.assign({key:t.config.apiKey},s)).slice(1),c=new(C.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),C.fetch()(j(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function L(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),e);try{const e=new M(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw U(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,n=e.split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw U(t,"email-already-in-use",o);const s=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");f(t,s)}}catch(o){if(o instanceof r["c"])throw o;f(t,"network-request-failed")}}async function P(t,e,n,r,i={}){const o=await D(t,e,n,r,i);return"mfaPendingCredential"in o&&f(t,"multi-factor-auth-required",{serverResponse:o}),o}function j(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?O(t.config,i):`${t.config.apiScheme}://${i}`}class M{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(d(this.auth,"timeout")),x.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=d(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(t,e){return D(t,"POST","/v1/accounts:delete",e)}async function V(t,e){return D(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e=!1){const n=Object(r["i"])(t),i=await n.getIdToken(e),o=H(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:$(q(o.auth_time)),issuedAtTime:$(q(o.iat)),expirationTime:$(q(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function q(t){return 1e3*Number(t)}function H(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["d"])(n);return t?JSON.parse(t):(h("Failed to decode base64 JWT payload"),null)}catch(o){return h("Caught error parsing JWT payload as JSON",o),null}}function z(t){const e=H(t);return g(e,"internal-error"),g("undefined"!==typeof e.exp,"internal-error"),g("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&K(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function K({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t){var e;const n=t.auth,r=await t.getIdToken(),i=await G(t,V(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?Z(o.providerUserInfo):[],a=Y(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new J(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Q(t){const e=Object(r["i"])(t);await X(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Y(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function Z(t){return t.map(t=>{var{providerId:e}=t,n=Object(o["f"])(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t,e){const n=await L(t,{},()=>{const n=Object(r["s"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=j(t,i,"/v1/token","key="+o);return C.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){g(t.idToken,"internal-error"),g("undefined"!==typeof t.idToken,"internal-error"),g("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):z(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return g(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await tt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new et;return n&&(g("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new et,this.toJSON())}_performRefresh(){return m("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){g("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class rt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Object(o["f"])(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new W(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new J(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await G(this,this.stsTokenManager.getToken(this.auth,t));return g(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return B(this,t)}reload(){return Q(this)}_assign(t){this!==t&&(g(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new rt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await G(this,F(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:T}=e;g(b&&T,t,"internal-error");const I=et.fromJSON(this.name,T);g("string"===typeof b,t,"internal-error"),nt(l,t.name),nt(h,t.name),g("boolean"===typeof w,t,"internal-error"),g("boolean"===typeof _,t,"internal-error"),nt(f,t.name),nt(d,t.name),nt(p,t.name),nt(m,t.name),nt(v,t.name),nt(y,t.name);const S=new rt({uid:b,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:v,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map(t=>Object.assign({},t))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new et;r.updateFromServerResponse(e);const i=new rt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await X(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}it.type="NONE";const ot=it;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e,n){return`firebase:${t}:${e}:${n}`}class at{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=st(this.userKey,r.apiKey,i),this.fullPersistenceKey=st("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new at(b(ot),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||b(ot);const o=st(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=rt._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(o)}catch(c){}})),new at(i,t,n)):new at(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ft(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ut(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pt(e))return"Blackberry";if(gt(e))return"Webos";if(lt(e))return"Safari";if((e.includes("chrome/")||ht(e))&&!e.includes("edge/"))return"Chrome";if(dt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ut(t=Object(r["j"])()){return/firefox\//i.test(t)}function lt(t=Object(r["j"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ht(t=Object(r["j"])()){return/crios\//i.test(t)}function ft(t=Object(r["j"])()){return/iemobile/i.test(t)}function dt(t=Object(r["j"])()){return/android/i.test(t)}function pt(t=Object(r["j"])()){return/blackberry/i.test(t)}function gt(t=Object(r["j"])()){return/webos/i.test(t)}function mt(t=Object(r["j"])()){return/iphone|ipad|ipod/i.test(t)}function vt(t=Object(r["j"])()){var e;return mt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function yt(){return Object(r["n"])()&&10===document.documentMode}function bt(t=Object(r["j"])()){return mt(t)||dt(t)||gt(t)||pt(t)||/windows phone/i.test(t)||ft(t)}function wt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,e=[]){let n;switch(t){case"Browser":n=ct(Object(r["j"])());break;case"Worker":n=`${ct(Object(r["j"])())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new It(this),this.idTokenSubscription=new It(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=b(e)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await at.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(t);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await X(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["i"])(t):null;return e&&g(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&g(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(b(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&b(t)||this._popupRedirectResolver;g(e,this,"argument-error"),this.redirectPersistenceManager=await at.create(this,[b(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=_t(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Tt(t){return Object(r["i"])(t)}class It{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["f"])(t=>this.observer=t)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return m("not implemented")}_getIdTokenResponse(t){return m("not implemented")}_linkToIdToken(t,e){return m("not implemented")}_getReauthenticationResolver(t){return m("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e){return D(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function At(t,e){return P(t,"POST","/v1/accounts:signInWithPassword",R(t,e))}async function Ot(t,e){return D(t,"POST","/v1/accounts:sendOobCode",R(t,e))}async function Ct(t,e){return Ot(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nt(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}async function xt(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends St{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Rt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Rt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return At(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return kt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(t,e){return P(t,"POST","/v1/accounts:signInWithIdp",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="http://localhost";class Pt extends St{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Pt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Object(o["f"])(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Pt(n,r);return Object.assign(s,i),s}_getIdTokenResponse(t){const e=this.buildRequest();return Dt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Dt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Dt(t,e)}buildRequest(){const t={requestUri:Lt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["s"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(t,e){return D(t,"POST","/v1/accounts:sendVerificationCode",R(t,e))}async function Mt(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e))}async function Ut(t,e){const n=await P(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e));if(n.temporaryProof)throw U(t,"account-exists-with-different-credential",n);return n}const Ft={["USER_NOT_FOUND"]:"user-not-found"};async function Vt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return P(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,n),Ft)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends St{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new $t({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new $t({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Mt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ut(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Vt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new $t({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qt(t){const e=Object(r["t"])(Object(r["h"])(t))["link"],n=e?Object(r["t"])(Object(r["h"])(e))["deep_link_id"]:null,i=Object(r["t"])(Object(r["h"])(t))["deep_link_id"],o=i?Object(r["t"])(Object(r["h"])(i))["link"]:null;return o||i||n||e||t}class Ht{constructor(t){var e,n,i,o,s,a;const c=Object(r["t"])(Object(r["h"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Bt(null!==(i=c["mode"])&&void 0!==i?i:null);g(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=qt(t);try{return new Ht(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(){this.providerId=zt.PROVIDER_ID}static credential(t,e){return Rt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Ht.parseLink(e);return g(n,"argument-error"),Rt._fromEmailAndCode(t,n.code,n.tenantId)}}zt.PROVIDER_ID="password",zt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",zt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Gt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt extends Kt{constructor(){super("facebook.com")}static credential(t){return Pt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch(e){return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Kt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Pt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Jt.credential(e,n)}catch(r){return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com",Jt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Kt{constructor(){super("github.com")}static credential(t){return Pt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch(e){return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com",Xt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends Kt{constructor(){super("twitter.com")}static credential(t,e){return Pt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Qt.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yt(t,e){return P(t,"POST","/v1/accounts:signUp",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.TWITTER_SIGN_IN_METHOD="twitter.com",Qt.PROVIDER_ID="twitter.com";class Zt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await rt._fromIdTokenResponse(t,n,r),o=te(n),s=new Zt({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=te(n);return new Zt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,ee.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new ee(t,e,n,r)}}function ne(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw ee._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(t,e,n=!1){const r=await G(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ie(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await G(t,ne(r,i,e,t),n);g(o.idToken,r,"internal-error");const s=H(o.idToken);g(s,r,"internal-error");const{sub:a}=s;return g(t.uid===a,r,"user-mismatch"),Zt._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e,n=!1){const r="signIn",i=await ne(t,r,e),o=await Zt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function se(t,e){return oe(Tt(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(t,e,n){var r;g((null===(r=n.url)||void 0===r?void 0:r.length)>0,t,"invalid-continue-uri"),g("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(g(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iosBundleId=n.iOS.bundleId),n.android&&(g(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(t,e,n){const r=Tt(t),i=await Yt(r,{returnSecureToken:!0,email:e,password:n}),o=await Zt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function ue(t,e,n){return se(Object(r["i"])(t),zt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function le(t,e){const n=Object(r["i"])(t),i=await t.getIdToken(),o={requestType:"VERIFY_EMAIL",idToken:i};e&&ae(n.auth,o,e);const{email:s}=await Ct(n.auth,o);s!==t.email&&await t.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function he(t,e){return D(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const i=Object(r["i"])(t),o=await i.getIdToken(),s={idToken:o,displayName:e,photoUrl:n,returnSecureToken:!0},a=await G(i,he(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:t})=>"password"===t);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function de(t,e,n,i){return Object(r["i"])(t).onAuthStateChanged(e,n,i)}function pe(t){return Object(r["i"])(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ge(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:t.tenantId},e))}new WeakMap;const me="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(me,"1"),this.storage.removeItem(me),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){const t=Object(r["j"])();return lt(t)||mt(t)}const be=1e3,we=10;class _e extends ve{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ye()&&wt(),this.fallbackToPolling=bt(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);yt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,we):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},be)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}_e.type="LOCAL";const Ee=_e;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends ve{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Te.type="SESSION";const Ie=Te;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new ke(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async t=>t(e.origin,i)),a=await Se(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ae(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke.receivers=[];class Oe{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=Ae("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function Ne(t){Ce().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return"undefined"!==typeof Ce()["WorkerGlobalScope"]&&"function"===typeof Ce()["importScripts"]}async function Re(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function De(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Le(){return xe()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="firebaseLocalStorageDb",je=1,Me="firebaseLocalStorage",Ue="fbase_key";class Fe{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ve(t,e){return t.transaction([Me],e?"readwrite":"readonly").objectStore(Me)}function $e(){const t=indexedDB.deleteDatabase(Pe);return new Fe(t).toPromise()}function Be(){const t=indexedDB.open(Pe,je);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Me,{keyPath:Ue})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Me)?e(n):(n.close(),await $e(),e(await Be()))})})}async function qe(t,e,n){const r=Ve(t,!0).put({[Ue]:e,value:n});return new Fe(r).toPromise()}async function He(t,e){const n=Ve(t,!1).get(e),r=await new Fe(n).toPromise();return void 0===r?null:r.value}function ze(t,e){const n=Ve(t,!0).delete(e);return new Fe(n).toPromise()}const Ge=800,Ke=3;class We{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Be()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Ke)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xe()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ke._getInstance(Le()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Re(),!this.activeServiceWorker)return;this.sender=new Oe(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&De()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Be();return await qe(t,me,"1"),await ze(t,me),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qe(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>He(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>ze(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Ve(t,!1).getAll();return new Fe(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ge)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}We.type="LOCAL";const Je=We;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:t.tenantId},e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qe(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ye(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=d("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Qe().appendChild(r)})}function Ze(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ze("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tn="recaptcha";async function en(t,e,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,t,"argument-error"),g(n.type===tn,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){g("enroll"===e.type,t,"internal-error");const n=await ge(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,t,"missing-multi-factor-info");const s=await Xe(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await jt(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{constructor(t){this.providerId=nn.PROVIDER_ID,this.auth=Tt(t)}verifyPhoneNumber(t,e){return en(this.auth,t,Object(r["i"])(e))}static credential(t,e){return $t._fromVerification(t,e)}static credentialFromResult(t){const e=t;return nn.credentialFromTaggedObject(e)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?$t._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(t,e){return e?b(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.PROVIDER_ID="phone",nn.PHONE_SIGN_IN_METHOD="phone";class on extends St{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Dt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Dt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function sn(t){return oe(t.auth,new on(t),t.bypassAuthState)}function an(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ie(n,new on(t),t.bypassAuthState)}async function cn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),re(n,new on(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sn;case"linkViaPopup":case"linkViaRedirect":return cn;case"reauthViaPopup":case"reauthViaRedirect":return an;default:f(this.auth,"internal-error")}}resolve(t){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new A(2e3,1e4);class hn extends un{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return g(t,this.auth,"internal-error"),t}async onExecution(){v(1===this.filter.length,"Popup operations only handle one event");const t=Ae();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(d(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(d(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(d(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,ln.get())};t()}}hn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fn="pendingRedirect",dn=new Map;class pn extends un{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=dn.get(this.auth._key());if(!t){try{const e=await gn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}dn.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function gn(t,e){const n=vn(e),r="true"===await mn(t)._get(n);return await mn(t)._remove(n),r}function mn(t){return b(t._redirectPersistence)}function vn(t){return st(fn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(t,e,n=!1){const r=Tt(t),i=rn(r,e),o=new pn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn=6e5;class wn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Tn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!En(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(d(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=bn&&this.cachedEventUids.clear(),this.cachedEventUids.has(_n(t))}saveEventToCache(t){this.cachedEventUids.add(_n(t)),this.lastProcessedEventTime=Date.now()}}function _n(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function En({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Tn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return En(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e={}){return D(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kn=/^https?/;async function An(t){if(t.config.emulator)return;const{authorizedDomains:e}=await In(t);for(const r of e)try{if(On(r))return}catch(n){}f(t,"unauthorized-domain")}function On(t){const e=E(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!kn.test(n))return!1;if(Sn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new A(3e4,6e4);function Nn(){const t=Ce().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function xn(t){return new Promise((e,n)=>{var r,i,o;function s(){Nn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nn(),n(d(t,"network-request-failed"))},timeout:Cn.get()})}if(null===(i=null===(r=Ce().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Ce().gapi)||void 0===o?void 0:o.load)){const e=Ze("iframefcb");return Ce()[e]=()=>{gapi.load?s():n(d(t,"network-request-failed"))},Ye("https://apis.google.com/js/api.js?onload="+e)}s()}}).catch(t=>{throw Rn=null,t})}let Rn=null;function Dn(t){return Rn=Rn||xn(t),Rn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new A(5e3,15e3),Pn="__/auth/iframe",jn="emulator/auth/iframe",Mn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Un=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fn(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?O(e,jn):`https://${t.config.authDomain}/${Pn}`,o={apiKey:e.apiKey,appName:t.name,v:i["a"]},s=Un.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["s"])(o).slice(1)}`}async function Vn(t){const e=await Dn(t),n=Ce().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Fn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mn,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=d(t,"network-request-failed"),o=Ce().setTimeout(()=>{r(i)},Ln.get());function s(){Ce().clearTimeout(o),n(e)}e.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bn=500,qn=600,Hn="_blank",zn="http://localhost";class Gn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Kn(t,e,n,i=Bn,o=qn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},$n),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["j"])().toLowerCase();n&&(c=ht(l)?Hn:n),ut(l)&&(e=e||zn,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(vt(l)&&"_self"!==c)return Wn(e||"",c),new Gn(null);const f=window.open(e||"",c,h);g(f,t,"popup-blocked");try{f.focus()}catch(d){}return new Gn(f)}function Wn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="__/auth/handler",Xn="emulator/auth/handler";function Qn(t,e,n,o,s,a){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(e instanceof Gt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r["m"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Kt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Yn(t)}?${Object(r["s"])(u).slice(1)}`}function Yn({config:t}){return t.emulator?O(t,Xn):`https://${t.authDomain}/${Jn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="webStorageSupport";class tr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ie,this._completeRedirectFn=yn}async _openPopup(t,e,n,r){var i;v(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Qn(t,e,n,E(),r);return Kn(t,o,Ae())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Ne(Qn(t,e,n,E(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(v(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await Vn(t),n=new wn(t);return e.register("authEvent",e=>{g(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Zn,{type:Zn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Zn];void 0!==i&&e(!!i),f(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=An(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bt()||lt()||mt()}}const er=tr;var nr="@firebase/auth",rr="0.17.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sr(t){Object(i["c"])(new a["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(e=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_t(t)},s=new Et(e,r);return _(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",t=>{const e=Tt(t.getProvider("auth").getImmediate());return(t=>new ir(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(nr,rr,or(t))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t=Object(i["e"])()){const e=Object(i["b"])(t,"auth");return e.isInitialized()?e.getImmediate():w(t,{popupRedirectResolver:er,persistence:[Je,Ee,Ie]})}sr("Browser")},f069:function(t,e,n){"use strict";var r=n("1c0b"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f5df:function(t,e,n){var r=n("00ee"),i=n("c6b6"),o=n("b622"),s=o("toStringTag"),a="Arguments"==i(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),s))?n:a?i(e):"Object"==(r=i(e))&&"function"==typeof e.callee?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise},ffa6:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var r=n("9ab4"),i=n("a8e9"),o=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),s="[DEFAULT]",a=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new i["a"];if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(d){}try{for(var i=Object(r["h"])(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=Object(r["e"])(o.value,2),c=a[0],l=a[1],h=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:h});l.resolve(f)}catch(d){}}}catch(p){e={error:p}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=s),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return Object(r["b"])(this,void 0,void 0,(function(){var t;return Object(r["d"])(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Object(r["g"])(Object(r["g"])([],Object(r["e"])(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),Object(r["e"])(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=s),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=s),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.options,o=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var c=Object(r["h"])(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=Object(r["e"])(u.value,2),h=l[0],f=l[1],d=this.normalizeInstanceIdentifier(h);s===d&&f.resolve(a)}}catch(p){e={error:p}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return a},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i,o=this.onInitCallbacks.get(e);if(o)try{for(var s=Object(r["h"])(o),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(t,e)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=s),this.component?this.component.multipleInstances?t:s:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function c(t){return t===s?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new a(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()}}]);
//# sourceMappingURL=chunk-vendors.7057bf33.js.map