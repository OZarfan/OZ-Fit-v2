"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// tests/acceptance.ts
var import_strict = __toESM(require("node:assert/strict"), 1);
var import_node_fs = __toESM(require("node:fs"), 1);

// node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e2) {
      return obj[e2];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results2) {
    const arrayValue = [];
    for (const s of results2) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check2, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check2(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check2, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check2(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check2 of this._def.checks) {
      if (check2.kind === "min") {
        if (input.data.length < check2.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check2.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "max") {
        if (input.data.length > check2.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check2.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "length") {
        const tooBig = input.data.length > check2.value;
        const tooSmall = input.data.length < check2.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check2.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check2.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check2.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check2.message
            });
          }
          status.dirty();
        }
      } else if (check2.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "regex") {
        check2.regex.lastIndex = 0;
        const testResult = check2.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "trim") {
        input.data = input.data.trim();
      } else if (check2.kind === "includes") {
        if (!input.data.includes(check2.value, check2.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check2.value, position: check2.position },
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check2.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check2.kind === "startsWith") {
        if (!input.data.startsWith(check2.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check2.value },
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "endsWith") {
        if (!input.data.endsWith(check2.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check2.value },
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "datetime") {
        const regex = datetimeRegex(check2);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "time") {
        const regex = timeRegex(check2);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "ip") {
        if (!isValidIP(input.data, check2.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "jwt") {
        if (!isValidJWT(input.data, check2.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "cidr") {
        if (!isValidCidr(input.data, check2.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check2.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check2);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check2) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check2]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check2 of this._def.checks) {
      if (check2.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "min") {
        const tooSmall = check2.inclusive ? input.data < check2.value : input.data <= check2.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check2.value,
            type: "number",
            inclusive: check2.inclusive,
            exact: false,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "max") {
        const tooBig = check2.inclusive ? input.data > check2.value : input.data >= check2.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check2.value,
            type: "number",
            inclusive: check2.inclusive,
            exact: false,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check2.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check2.value,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check2.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check2);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check2) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check2]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check2 of this._def.checks) {
      if (check2.kind === "min") {
        const tooSmall = check2.inclusive ? input.data < check2.value : input.data <= check2.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check2.value,
            inclusive: check2.inclusive,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "max") {
        const tooBig = check2.inclusive ? input.data > check2.value : input.data >= check2.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check2.value,
            inclusive: check2.inclusive,
            message: check2.message
          });
          status.dirty();
        }
      } else if (check2.kind === "multipleOf") {
        if (input.data % check2.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check2.value,
            message: check2.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check2);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check2) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check2]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check2 of this._def.checks) {
      if (check2.kind === "min") {
        if (input.data.getTime() < check2.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check2.message,
            inclusive: true,
            exact: false,
            minimum: check2.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check2.kind === "max") {
        if (input.data.getTime() > check2.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check2.message,
            inclusive: true,
            exact: false,
            maximum: check2.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check2);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check2) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check2]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results2) {
      for (const result of results2) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results2) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results2.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a2, b2) {
  const aType = getParsedType(a2);
  const bType = getParsedType(b2);
  if (a2 === b2) {
    return { valid: true, data: a2 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b2);
    const sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a2, ...b2 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b2[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a2.length !== b2.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b2[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b2) {
    return { valid: true, data: a2 };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results2) => {
        return ParseStatus.mergeArray(status, results2);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e2) => {
          error.addIssue(makeArgsIssue(args, e2));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e2) => {
          error.addIssue(makeReturnsIssue(result, e2));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a2, b2) {
    return new _ZodPipeline({
      in: a2,
      out: b2,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p2 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p22 = typeof p2 === "string" ? { message: p2 } : p2;
  return p22;
}
function custom(check2, _params = {}, fatal) {
  if (check2)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check2(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// lib/legacy.ts
var e = (id, ar, en, group, pattern, eq2, reps, rest, arCue, enCue, unit = "stack", compound = false) => ({ id, ar, en, group, pattern, eq: eq2, reps, rest, arCue, enCue, unit, compound });
var legacyExercises = [
  e("Dumbbell_Shoulder_Press", "\u0636\u063A\u0637 \u0643\u062A\u0641 \u062F\u0645\u0628\u0644 \u062C\u0627\u0644\u0633", "Seated dumbbell shoulder press", "shoulders", "press", "dumbbell", [8, 12], 120, "\u062B\u0628\u062A \u0627\u0644\u0638\u0647\u0631 \u0648\u0627\u0631\u0641\u0639 \u0628\u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u062F\u0648\u0646 \u062A\u0642\u0648\u0633 \u0632\u0627\u0626\u062F.", "Keep back supported; press in a comfortable range without over-arching.", "each", true),
  e("Romanian_Deadlift", "\u0631\u0648\u0645\u0627\u0646\u064A\u0627\u0646 \u062F\u064A\u062F\u0644\u0641\u062A", "Romanian deadlift", "legs", "hinge", "barbell", [8, 12], 150, "\u062A\u0639\u0644\u0651\u0645 \u0645\u0641\u0635\u0644\u0629 \u0627\u0644\u0648\u0631\u0643 \u0628\u062D\u0645\u0644 \u062E\u0641\u064A\u0641 \u0645\u0639 \u0645\u062F\u0631\u0628. \u0627\u062F\u0641\u0639 \u0627\u0644\u062D\u0648\u0636 \u0644\u0644\u062E\u0644\u0641 \u0648\u0627\u0644\u0628\u0627\u0631 \u0642\u0631\u064A\u0628 \u062F\u0648\u0646 \u062A\u0642\u0648\u0633.", "Learn the hip hinge with light load and coaching. Push hips back, keeping bar close and spine steady.", "total", true),
  e("Leverage_Chest_Press", "\u0636\u063A\u0637 \u0635\u062F\u0631 \u0628\u0627\u0644\u062C\u0647\u0627\u0632", "Leverage chest press", "chest", "push", "machine", [8, 12], 120, "\u0627\u0644\u0645\u0642\u0627\u0628\u0636 \u0639\u0646\u062F \u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0635\u062F\u0631. \u0627\u062F\u0641\u0639 \u062F\u0648\u0646 \u0631\u0641\u0639 \u0627\u0644\u0643\u062A\u0641\u064A\u0646\u060C \u0648\u0627\u0631\u062C\u0639 \u0628\u062A\u062D\u0643\u0645.", "Set handles at mid-chest. Press without shrugging; return with control.", "total", true),
  e("Machine_Bench_Press", "\u0636\u063A\u0637 \u0635\u062F\u0631 \u062C\u0627\u0644\u0633", "Machine chest press", "chest", "push", "machine", [8, 12], 120, "\u0627\u0636\u0628\u0637 \u0627\u0644\u0645\u0642\u0639\u062F \u0648\u0627\u0644\u0645\u0642\u0627\u0628\u0636 \u0644\u0645\u062F\u0649 \u0645\u0631\u064A\u062D. \u0644\u0627 \u062A\u062F\u0641\u0639 \u0627\u0644\u0631\u0623\u0633 \u0641\u064A \u0627\u0644\u0645\u0633\u0646\u062F.", "Adjust seat and handles for a comfortable range. Keep your head relaxed.", "stack", true),
  e("Dumbbell_Bench_Press", "\u0636\u063A\u0637 \u0635\u062F\u0631 \u062F\u0645\u0628\u0644", "Dumbbell bench press", "chest", "push", "dumbbell", [8, 12], 120, "\u062B\u0628\u062A \u0627\u0644\u0642\u062F\u0645\u064A\u0646 \u0648\u0627\u0644\u0638\u0647\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0646\u0634. \u0623\u0646\u0632\u0644 \u0627\u0644\u062F\u0645\u0628\u0644 \u0628\u062A\u062D\u0643\u0645 \u062F\u0648\u0646 \u0627\u0631\u062A\u062F\u0627\u062F.", "Keep feet planted and back supported. Lower with control, without bouncing.", "each", true),
  e("Incline_Dumbbell_Press", "\u0636\u063A\u0637 \u0635\u062F\u0631 \u0645\u0627\u0626\u0644 \u062F\u0645\u0628\u0644", "Incline dumbbell press", "chest", "incline", "dumbbell", [8, 12], 120, "\u0627\u062E\u062A\u0631 \u0645\u064A\u0644\u064B\u0627 \u0645\u0631\u064A\u062D\u064B\u0627. \u062B\u0628\u0651\u062A \u0627\u0644\u0631\u0633\u063A \u0648\u0627\u062F\u0641\u0639 \u062F\u0648\u0646 \u0645\u0628\u0627\u0644\u063A\u0629 \u0641\u064A \u062A\u0642\u0648\u0633 \u0627\u0644\u0638\u0647\u0631.", "Use a comfortable incline. Keep wrists aligned and avoid excessive arching.", "each", true),
  e("Leverage_Incline_Chest_Press", "\u0636\u063A\u0637 \u0635\u062F\u0631 \u0645\u0627\u0626\u0644 \u062C\u0647\u0627\u0632", "Incline chest press machine", "chest", "incline", "machine", [8, 12], 120, "\u0627\u0644\u0645\u0642\u0627\u0628\u0636 \u0628\u0645\u062D\u0627\u0630\u0627\u0629 \u0623\u0639\u0644\u0649 \u0627\u0644\u0635\u062F\u0631. \u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u0638\u0647\u0631 \u0645\u062F\u0639\u0648\u0645\u064B\u0627.", "Align handles with upper chest and keep your back supported.", "total", true),
  e("Butterfly", "\u062A\u062C\u0645\u064A\u0639 \u0635\u062F\u0631 \u062C\u0647\u0627\u0632", "Pec deck", "chest", "fly", "machine", [10, 15], 90, "\u0627\u062C\u0645\u0639 \u0627\u0644\u0630\u0631\u0627\u0639\u064A\u0646 \u0628\u0645\u062F\u0649 \u0645\u0631\u064A\u062D. \u0644\u0627 \u062A\u062F\u0641\u0639 \u0627\u0644\u0643\u062A\u0641\u064A\u0646 \u0644\u0644\u0623\u0645\u0627\u0645 \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u064A\u0629.", "Bring arms together through a comfortable range without rolling shoulders forward."),
  e("Seated_Cable_Rows", "\u0633\u062D\u0628 \u0623\u0631\u0636\u064A \u0643\u0627\u0628\u0644", "Seated cable row", "back", "row", "cable", [8, 12], 120, "\u0627\u0633\u062D\u0628 \u0627\u0644\u0645\u0642\u0628\u0636 \u0646\u062D\u0648 \u0627\u0644\u0628\u0637\u0646. \u062A\u062C\u0646\u0628 \u0627\u0644\u062A\u0623\u0631\u062C\u062D \u0648\u0631\u0641\u0639 \u0627\u0644\u0643\u062A\u0641\u064A\u0646.", "Pull towards the abdomen. Avoid swinging or shrugging.", "stack", true),
  e("Leverage_Iso_Row", "\u0633\u062D\u0628 \u062C\u0647\u0627\u0632 \u0645\u0633\u0646\u0648\u062F", "Supported machine row", "back", "row", "machine", [8, 12], 120, "\u062B\u0628\u062A \u0627\u0644\u0635\u062F\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0646\u062F \u0648\u0627\u0633\u062D\u0628 \u0628\u0627\u0644\u0645\u0631\u0641\u0642\u064A\u0646. \u0627\u0631\u062C\u0639 \u0628\u062A\u062D\u0643\u0645.", "Keep chest on the pad and pull through your elbows. Return with control.", "total", true),
  e("Wide-Grip_Lat_Pulldown", "\u0633\u062D\u0628 \u0639\u0627\u0644\u064A \u0623\u0645\u0627\u0645\u064A", "Front lat pulldown", "back", "vertical", "cable", [8, 12], 120, "\u0627\u0633\u062D\u0628 \u0623\u0645\u0627\u0645 \u0627\u0644\u0648\u062C\u0647 \u0646\u062D\u0648 \u0623\u0639\u0644\u0649 \u0627\u0644\u0635\u062F\u0631. \u0644\u0627 \u062A\u0633\u062D\u0628 \u062E\u0644\u0641 \u0627\u0644\u0631\u0642\u0628\u0629 \u0648\u0644\u0627 \u062A\u062A\u0623\u0631\u062C\u062D.", "Pull in front towards upper chest. Never pull behind your neck; avoid swinging.", "stack", true),
  e("Leg_Press", "\u0636\u063A\u0637 \u0631\u062C\u0644", "Leg press", "legs", "knee", "machine", [10, 15], 150, "\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062D\u0648\u0636 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0646\u062F. \u062A\u0648\u0642\u0641 \u0642\u0628\u0644 \u0627\u0644\u062A\u0641\u0627\u0641 \u0623\u0633\u0641\u0644 \u0627\u0644\u0638\u0647\u0631 \u0648\u0644\u0627 \u062A\u0642\u0641\u0644 \u0627\u0644\u0631\u0643\u0628\u062A\u064A\u0646 \u0628\u0639\u0646\u0641.", "Keep pelvis on the pad. Stop before your lower back rounds; avoid forceful knee lockout.", "total", true),
  e("Seated_Leg_Curl", "\u062E\u0644\u0641\u064A\u0629 \u0631\u062C\u0644 \u062C\u0627\u0644\u0633", "Seated leg curl", "legs", "curl", "machine", [10, 15], 90, "\u062D\u0627\u0630\u0650 \u0627\u0644\u0631\u0643\u0628\u0629 \u0645\u0639 \u0645\u062D\u0648\u0631 \u0627\u0644\u062C\u0647\u0627\u0632 \u0648\u062B\u0628\u0651\u062A \u0648\u0633\u0627\u062F\u0629 \u0627\u0644\u0641\u062E\u0630. \u0627\u062B\u0646\u0650 \u0627\u0644\u0631\u0643\u0628\u062A\u064A\u0646 \u0628\u062A\u062D\u0643\u0645.", "Align knees with the machine pivot and secure thigh pad. Curl with control."),
  e("Lying_Leg_Curls", "\u062E\u0644\u0641\u064A\u0629 \u0631\u062C\u0644 \u0646\u0627\u064A\u0645", "Lying leg curl", "legs", "curl", "machine", [10, 15], 90, "\u0627\u0636\u0628\u0637 \u0627\u0644\u0648\u0633\u0627\u062F\u0629 \u0623\u0639\u0644\u0649 \u0627\u0644\u0643\u0639\u0628 \u0648\u062B\u0628\u0651\u062A \u0627\u0644\u062D\u0648\u0636. \u0644\u0627 \u062A\u0642\u0648\u0633 \u0627\u0644\u0638\u0647\u0631 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u0641\u0639.", "Place pad above heels; keep hips down. Avoid arching your back."),
  e("Leg_Extensions", "\u0623\u0645\u0627\u0645\u064A\u0629 \u0631\u062C\u0644", "Leg extension", "legs", "extension", "machine", [10, 15], 90, "\u062D\u0627\u0630\u0650 \u0627\u0644\u0631\u0643\u0628\u0629 \u0645\u0639 \u0645\u062D\u0648\u0631 \u0627\u0644\u062C\u0647\u0627\u0632. \u0627\u0631\u0641\u0639 \u0648\u0623\u0646\u0632\u0644 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D.", "Align knees with the pivot. Extend and lower in a comfortable controlled range."),
  e("Butt_Lift_Bridge", "\u062C\u0633\u0631 \u0627\u0644\u062D\u0648\u0636", "Glute bridge", "legs", "hip", "body", [10, 15], 90, "\u0627\u062F\u0641\u0639 \u0628\u0627\u0644\u0642\u062F\u0645\u064A\u0646 \u0648\u0627\u0631\u0641\u0639 \u0627\u0644\u062D\u0648\u0636 \u062F\u0648\u0646 \u062A\u0642\u0648\u0633 \u0632\u0627\u0626\u062F. \u062A\u0648\u0642\u0641 \u0625\u0630\u0627 \u0623\u062B\u0627\u0631 \u0623\u0639\u0631\u0627\u0636\u064B\u0627.", "Push through feet and lift hips without over-arching. Stop if symptoms occur.", "body"),
  e("Seated_Calf_Raise", "\u0633\u0645\u0627\u0646\u0629 \u062C\u0627\u0644\u0633", "Seated calf raise", "legs", "calf", "machine", [12, 20], 75, "\u0627\u0631\u0641\u0639 \u0627\u0644\u0643\u0639\u0628\u064A\u0646 \u0648\u0627\u0646\u0632\u0644\u0647\u0645\u0627 \u0628\u0628\u0637\u0621. \u062A\u062C\u0646\u0628 \u0627\u0644\u0627\u0631\u062A\u062F\u0627\u062F.", "Raise and lower heels slowly without bouncing.", "total"),
  e("Calf_Press_On_The_Leg_Press_Machine", "\u0633\u0645\u0627\u0646\u0629 \u0639\u0644\u0649 \u062C\u0647\u0627\u0632 \u0627\u0644\u0631\u062C\u0644", "Leg press calf raise", "legs", "calf", "machine", [12, 20], 75, "\u062A\u062D\u0631\u0643 \u0645\u0646 \u0627\u0644\u0643\u0627\u062D\u0644 \u0645\u0639 \u062A\u062B\u0628\u064A\u062A \u0627\u0644\u0631\u0643\u0628\u062A\u064A\u0646\u060C \u0648\u0627\u0633\u062A\u0639\u0645\u0644 \u0623\u0642\u0641\u0627\u0644 \u0627\u0644\u062C\u0647\u0627\u0632 \u0643\u0645\u0627 \u064A\u0648\u0636\u062D \u0627\u0644\u0645\u062F\u0631\u0628.", "Move at the ankle with knees stable; follow the machine safety instructions.", "total"),
  e("Seated_Side_Lateral_Raise", "\u0631\u0641\u0631\u0641\u0629 \u062C\u0627\u0646\u0628\u064A \u062C\u0627\u0644\u0633", "Seated lateral raise", "shoulders", "lateral", "dumbbell", [10, 15], 90, "\u0627\u0631\u0641\u0639 \u0627\u0644\u0630\u0631\u0627\u0639\u064A\u0646 \u0625\u0644\u0649 \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u062F\u0648\u0646 \u0647\u0632 \u0627\u0644\u062C\u0633\u0645 \u0623\u0648 \u0631\u0641\u0639 \u0627\u0644\u0643\u062A\u0641\u064A\u0646.", "Raise through a comfortable range without swinging or shrugging.", "each"),
  e("Side_Lateral_Raise", "\u0631\u0641\u0631\u0641\u0629 \u062C\u0627\u0646\u0628\u064A \u062F\u0645\u0628\u0644", "Dumbbell lateral raise", "shoulders", "lateral", "dumbbell", [10, 15], 90, "\u0627\u062B\u0646\u0650 \u0627\u0644\u0645\u0631\u0641\u0642\u064A\u0646 \u0642\u0644\u064A\u0644\u064B\u0627 \u0648\u0627\u0631\u0641\u0639 \u0628\u062A\u062D\u0643\u0645. \u0644\u0627 \u062A\u062D\u062A\u0627\u062C \u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0631\u062A\u0641\u0627\u0639 \u0645\u0624\u0644\u0645.", "Keep a slight elbow bend and lift with control. Avoid painful range.", "each"),
  e("Cable_Seated_Lateral_Raise", "\u0631\u0641\u0631\u0641\u0629 \u062E\u0644\u0641\u064A \u0643\u0627\u0628\u0644 \u0645\u0646\u062D\u0646\u064A \u062C\u0627\u0644\u0633", "Seated bent-over cable rear fly", "shoulders", "rear", "cable", [10, 15], 90, "\u0627\u0633\u062A\u062E\u062F\u0645 \u062D\u0645\u0644\u064B\u0627 \u062E\u0641\u064A\u0641\u064B\u0627 \u0648\u062B\u0628\u0651\u062A \u0627\u0644\u062C\u0630\u0639. \u0627\u0631\u0641\u0639 \u062F\u0648\u0646 \u0647\u0632 \u0627\u0644\u0643\u062A\u0641\u064A\u0646.", "Use a light load and steady torso. Raise without shrugging."),
  e("Reverse_Machine_Flyes", "\u0631\u0641\u0631\u0641\u0629 \u062E\u0644\u0641\u064A \u062C\u0647\u0627\u0632", "Reverse pec deck", "shoulders", "rear", "machine", [10, 15], 90, "\u062B\u0628\u062A \u0627\u0644\u0635\u062F\u0631 \u0648\u0627\u0641\u062A\u062D \u0627\u0644\u0630\u0631\u0627\u0639\u064A\u0646 \u062F\u0648\u0646 \u0634\u062F \u0627\u0644\u0631\u0623\u0633 \u0644\u0644\u062E\u0644\u0641.", "Keep chest supported; open arms without pulling your head back."),
  e("Triceps_Pushdown", "\u062A\u0631\u0627\u064A \u0643\u0627\u0628\u0644 \u0628\u0627\u0631", "Triceps pushdown", "arms", "triceps", "cable", [10, 15], 90, "\u062B\u0628\u062A \u0627\u0644\u0645\u0631\u0641\u0642\u064A\u0646 \u0628\u062C\u0627\u0646\u0628 \u0627\u0644\u062C\u0633\u0645 \u0648\u0645\u062F \u0627\u0644\u0630\u0631\u0627\u0639\u064A\u0646 \u062F\u0648\u0646 \u062A\u0623\u0631\u062C\u062D.", "Keep elbows by your sides; extend without swinging."),
  e("Triceps_Pushdown_-_Rope_Attachment", "\u062A\u0631\u0627\u064A \u062D\u0628\u0644", "Rope triceps pushdown", "arms", "triceps", "cable", [10, 15], 90, "\u062B\u0628\u062A \u0627\u0644\u0630\u0631\u0627\u0639\u064A\u0646 \u0627\u0644\u0639\u0644\u0648\u064A\u064A\u0646 \u0648\u0627\u062F\u0641\u0639 \u0627\u0644\u062D\u0628\u0644 \u0644\u0644\u0623\u0633\u0641\u0644 \u0628\u062A\u062D\u0643\u0645.", "Keep upper arms steady; push the rope down with control."),
  e("Machine_Triceps_Extension", "\u062A\u0631\u0627\u064A \u062C\u0647\u0627\u0632", "Machine triceps extension", "arms", "triceps", "machine", [10, 15], 90, "\u0627\u0636\u0628\u0637 \u0627\u0644\u0645\u0642\u0639\u062F \u0648\u0645\u062D\u0648\u0631 \u0627\u0644\u0645\u0631\u0641\u0642 \u0648\u0645\u062F \u062F\u0648\u0646 \u0627\u0646\u062F\u0641\u0627\u0639.", "Align elbow with pivot and extend without jerking."),
  e("Hammer_Curls", "\u0628\u0627\u064A \u0647\u0627\u0645\u0631 \u062F\u0645\u0628\u0644", "Hammer curl", "arms", "biceps", "dumbbell", [10, 15], 90, "\u0627\u0644\u0643\u0641\u0627\u0646 \u0645\u062A\u0642\u0627\u0628\u0644\u0627\u0646. \u0627\u062B\u0646\u0650 \u0627\u0644\u0645\u0631\u0641\u0642\u064A\u0646 \u062F\u0648\u0646 \u062A\u0623\u0631\u062C\u062D \u0627\u0644\u062C\u0630\u0639.", "Keep palms facing each other. Curl without torso swing.", "each"),
  e("EZ-Bar_Curl", "\u0628\u0627\u064A \u0628\u0627\u0631 \u0645\u062A\u0639\u0631\u062C", "EZ-bar curl", "arms", "biceps", "barbell", [10, 15], 90, "\u062B\u0628\u062A \u0627\u0644\u0645\u0631\u0641\u0642\u064A\u0646 \u0648\u0627\u0644\u0631\u0633\u063A\u064A\u0646 \u0641\u064A \u0648\u0636\u0639 \u0645\u0631\u064A\u062D. \u0644\u0627 \u062A\u0633\u0627\u0639\u062F \u0627\u0644\u062D\u0631\u0643\u0629 \u0628\u0638\u0647\u0631\u0643.", "Keep elbows steady and wrists comfortable. Avoid using your back.", "total"),
  e("Machine_Preacher_Curls", "\u0628\u0627\u064A \u062C\u0647\u0627\u0632 \u0645\u0633\u0646\u0648\u062F", "Machine preacher curl", "arms", "biceps", "machine", [10, 15], 90, "\u062B\u0628\u062A \u0623\u0639\u0644\u0649 \u0627\u0644\u0630\u0631\u0627\u0639 \u0639\u0644\u0649 \u0627\u0644\u0648\u0633\u0627\u062F\u0629. \u0644\u0627 \u062A\u0642\u0641\u0644 \u0627\u0644\u0645\u0631\u0641\u0642\u064A\u0646 \u0628\u0639\u0646\u0641.", "Rest upper arms on the pad. Avoid forceful elbow lockout."),
  e("Standing_Biceps_Cable_Curl", "\u0628\u0627\u064A \u0643\u0627\u0628\u0644", "Cable curl", "arms", "biceps", "cable", [10, 15], 90, "\u0627\u062B\u0646\u0650 \u0627\u0644\u0645\u0631\u0641\u0642\u064A\u0646 \u0645\u0639 \u062B\u0628\u0627\u062A \u0627\u0644\u062C\u0630\u0639 \u062B\u0645 \u0627\u0631\u062C\u0639 \u0628\u0628\u0637\u0621.", "Curl with a steady torso and lower slowly."),
  e("Dead_Bug", "\u062F\u064A\u062F \u0628\u0627\u062C \u0644\u0644\u062C\u0630\u0639", "Dead bug", "core", "core", "body", [6, 10], 60, "\u062D\u0631\u0651\u0643 \u0627\u0644\u0623\u0637\u0631\u0627\u0641 \u0628\u0627\u0644\u062A\u0628\u0627\u062F\u0644 \u0628\u0645\u062F\u0649 \u064A\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u062B\u0628\u0627\u062A \u0627\u0644\u062C\u0630\u0639. \u0643\u0644 \u062C\u0647\u0629 \u062A\u064F\u0639\u062F \u0645\u0646\u0641\u0635\u0644\u0629.", "Alternate limbs through a range that keeps your trunk steady. Count each side separately.", "body"),
  e("Bicycling_Stationary", "\u0639\u062C\u0644\u0629 \u062B\u0627\u0628\u062A\u0629", "Stationary bike", "cardio", "cardio", "cardio", [5, 12], 60, "\u0627\u0636\u0628\u0637 \u0627\u0644\u0645\u0642\u0639\u062F \u0648\u062B\u0628\u0651\u062A \u0627\u0644\u0642\u062F\u0645\u064A\u0646. \u0627\u0628\u062F\u0623 \u0628\u0633\u0647\u0648\u0644\u0629 \u062A\u0633\u0645\u062D \u0628\u0627\u0644\u0643\u0644\u0627\u0645.", "Adjust seat, secure feet and start at a pace that allows conversation.", "body"),
  e("Walking_Treadmill", "\u0645\u0634\u064A \u0639\u0644\u0649 \u0627\u0644\u0633\u064A\u0631", "Treadmill walk", "cardio", "cardio", "cardio", [5, 12], 60, "\u0627\u0628\u062F\u0623 \u0628\u0628\u0637\u0621 \u0648\u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0634\u0628\u0643 \u0627\u0644\u0623\u0645\u0627\u0646. \u0627\u062E\u062A\u0631 \u0633\u0631\u0639\u0629 \u062A\u0633\u0645\u062D \u0628\u0627\u0644\u0643\u0644\u0627\u0645.", "Start slowly with the safety clip. Choose a conversational pace.", "body")
];
for (const e2 of legacyExercises) {
  if (e2.id === "Walking_Treadmill" || e2.id === "Bicycling_Stationary") {
    e2.mode = "minutes";
    e2.loadedAreas = ["knee", "hip", "ankle", "back"];
  }
  if (e2.id === "Leverage_Iso_Row") e2.loadedAreas = ["shoulder", "elbow", "neck"];
  e2.aliases = e2.id === "Wide-Grip_Lat_Pulldown" ? ["\u0644\u0627\u062A \u0628\u0648\u0644 \u062F\u0627\u0648\u0646", "\u0633\u062D\u0628 \u0639\u0627\u0644\u064A"] : e2.id === "Leg_Press" ? ["\u0644\u064A\u062C \u0628\u0631\u064A\u0633"] : e2.id === "Reverse_Machine_Flyes" ? ["\u0628\u0627\u0643 \u0641\u0644\u0627\u064A"] : e2.id === "Leverage_Iso_Row" ? ["\u0627\u064A\u0647 \u0631\u064A\u0645", "\u0633\u062D\u0628 \u062C\u0647\u0627\u0632"] : [];
}

// lib/extra.ts
var extraExercises = [
  {
    "id": "Goblet_Squat",
    "ar": "\u0633\u0643\u0648\u0627\u062A \u0643\u064A\u062A\u0644 \u0628\u064A\u0644 \u0623\u0645\u0627\u0645 \u0627\u0644\u0635\u062F\u0631",
    "en": "Goblet Squat",
    "group": "legs",
    "pattern": "knee",
    "eq": "kettlebell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0628\u062F\u0623 \u0645\u0646 \u063A\u064A\u0631 \u062D\u0645\u0644 \u0623\u0648 \u0628\u062D\u0645\u0644 \u062E\u0641\u064A\u0641. \u062B\u0628\u0651\u062A \u0627\u0644\u0642\u062F\u0645 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D\u060C \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Start unloaded or light. Keep feet stable and move with control through a comfortable range.",
    "unit": "total",
    "compound": true,
    "aliases": [
      "\u0633\u0643\u0648\u0627\u062A \u0643\u064A\u062A\u0644 \u0628\u064A\u0644 \u0623\u0645\u0627\u0645 \u0627\u0644\u0635\u062F\u0631",
      "Goblet Squat"
    ]
  },
  {
    "id": "Smith_Machine_Squat",
    "ar": "\u0633\u0643\u0648\u0627\u062A \u0633\u0645\u064A\u062B",
    "en": "Smith Machine Squat",
    "group": "legs",
    "pattern": "knee",
    "eq": "machine",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062A\u0639\u0644\u0645 \u0627\u0644\u062D\u0631\u0643\u0629 \u0628\u062D\u0645\u0644 \u062E\u0641\u064A\u0641. \u062B\u0628\u0651\u062A \u0627\u0644\u0642\u062F\u0645 \u0648\u0627\u062A\u062D\u0631\u0643 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D\u061B \u0627\u0633\u062A\u062E\u062F\u0645 \u0623\u0642\u0641\u0627\u0644 \u0627\u0644\u062C\u0647\u0627\u0632 \u0648\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0645\u062F\u0631\u0628.",
    "enCue": "Learn with a light load. Keep feet stable and use a comfortable range, safety stops and coaching.",
    "unit": "total",
    "compound": true,
    "aliases": [
      "\u0633\u0643\u0648\u0627\u062A \u0633\u0645\u064A\u062B",
      "Smith Machine Squat"
    ]
  },
  {
    "id": "Hack_Squat",
    "ar": "\u0647\u0627\u0643 \u0633\u0643\u0648\u0627\u062A",
    "en": "Hack Squat",
    "group": "legs",
    "pattern": "knee",
    "eq": "machine",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062A\u0639\u0644\u0645 \u0627\u0644\u062D\u0631\u0643\u0629 \u0628\u062D\u0645\u0644 \u062E\u0641\u064A\u0641. \u062B\u0628\u0651\u062A \u0627\u0644\u0642\u062F\u0645 \u0648\u0627\u062A\u062D\u0631\u0643 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D\u061B \u0627\u0633\u062A\u062E\u062F\u0645 \u0623\u0642\u0641\u0627\u0644 \u0627\u0644\u062C\u0647\u0627\u0632 \u0648\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0645\u062F\u0631\u0628.",
    "enCue": "Learn with a light load. Keep feet stable and use a comfortable range, safety stops and coaching.",
    "unit": "stack",
    "compound": true,
    "aliases": [
      "\u0647\u0627\u0643 \u0633\u0643\u0648\u0627\u062A",
      "Hack Squat"
    ]
  },
  {
    "id": "Bodyweight_Squat",
    "ar": "\u0633\u0643\u0648\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u062C\u0633\u0645",
    "en": "Bodyweight Squat",
    "group": "legs",
    "pattern": "knee",
    "eq": "body",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0628\u062F\u0623 \u0645\u0646 \u063A\u064A\u0631 \u062D\u0645\u0644 \u0623\u0648 \u0628\u062D\u0645\u0644 \u062E\u0641\u064A\u0641. \u062B\u0628\u0651\u062A \u0627\u0644\u0642\u062F\u0645 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D\u060C \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Start unloaded or light. Keep feet stable and move with control through a comfortable range.",
    "unit": "body",
    "compound": true,
    "aliases": [
      "\u0633\u0643\u0648\u0627\u062A \u0648\u0632\u0646 \u0627\u0644\u062C\u0633\u0645",
      "Bodyweight Squat"
    ]
  },
  {
    "id": "Barbell_Squat",
    "ar": "\u0633\u0643\u0648\u0627\u062A \u0628\u0627\u0631",
    "en": "Barbell Squat",
    "group": "legs",
    "pattern": "knee",
    "eq": "barbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062A\u0639\u0644\u0645 \u0627\u0644\u062D\u0631\u0643\u0629 \u0628\u062D\u0645\u0644 \u062E\u0641\u064A\u0641. \u062B\u0628\u0651\u062A \u0627\u0644\u0642\u062F\u0645 \u0648\u0627\u062A\u062D\u0631\u0643 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D\u061B \u0627\u0633\u062A\u062E\u062F\u0645 \u0623\u0642\u0641\u0627\u0644 \u0627\u0644\u062C\u0647\u0627\u0632 \u0648\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0645\u062F\u0631\u0628.",
    "enCue": "Learn with a light load. Keep feet stable and use a comfortable range, safety stops and coaching.",
    "unit": "total",
    "compound": true,
    "aliases": [
      "\u0633\u0643\u0648\u0627\u062A \u0628\u0627\u0631",
      "Barbell Squat"
    ]
  },
  {
    "id": "Dumbbell_Lunges",
    "ar": "\u0644\u0627\u0646\u062C\u0632 \u062F\u0645\u0628\u0644",
    "en": "Dumbbell Lunges",
    "group": "legs",
    "pattern": "knee",
    "eq": "dumbbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0628\u062F\u0623 \u0645\u0646 \u063A\u064A\u0631 \u062D\u0645\u0644 \u0623\u0648 \u0628\u062D\u0645\u0644 \u062E\u0641\u064A\u0641. \u062B\u0628\u0651\u062A \u0627\u0644\u0642\u062F\u0645 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D\u060C \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Start unloaded or light. Keep feet stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": true,
    "aliases": [
      "\u0644\u0627\u0646\u062C\u0632 \u062F\u0645\u0628\u0644",
      "Dumbbell Lunges"
    ]
  },
  {
    "id": "Dumbbell_Rear_Lunge",
    "ar": "\u0644\u0627\u0646\u062C\u0632 \u062E\u0644\u0641\u064A \u062F\u0645\u0628\u0644",
    "en": "Dumbbell Rear Lunge",
    "group": "legs",
    "pattern": "knee",
    "eq": "dumbbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0628\u062F\u0623 \u0645\u0646 \u063A\u064A\u0631 \u062D\u0645\u0644 \u0623\u0648 \u0628\u062D\u0645\u0644 \u062E\u0641\u064A\u0641. \u062B\u0628\u0651\u062A \u0627\u0644\u0642\u062F\u0645 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D\u060C \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Start unloaded or light. Keep feet stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": true,
    "aliases": [
      "\u0644\u0627\u0646\u062C\u0632 \u062E\u0644\u0641\u064A \u062F\u0645\u0628\u0644",
      "Dumbbell Rear Lunge"
    ]
  },
  {
    "id": "Dumbbell_Step_Ups",
    "ar": "\u0637\u0644\u0648\u0639 \u0628\u0646\u0634 \u0628\u0627\u0644\u062F\u0645\u0628\u0644",
    "en": "Dumbbell Step Ups",
    "group": "legs",
    "pattern": "knee",
    "eq": "dumbbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0628\u062F\u0623 \u0645\u0646 \u063A\u064A\u0631 \u062D\u0645\u0644 \u0623\u0648 \u0628\u062D\u0645\u0644 \u062E\u0641\u064A\u0641. \u062B\u0628\u0651\u062A \u0627\u0644\u0642\u062F\u0645 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D\u060C \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Start unloaded or light. Keep feet stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": true,
    "aliases": [
      "\u0637\u0644\u0648\u0639 \u0628\u0646\u0634 \u0628\u0627\u0644\u062F\u0645\u0628\u0644",
      "Dumbbell Step Ups"
    ]
  },
  {
    "id": "Split_Squat_with_Dumbbells",
    "ar": "\u0633\u0643\u0648\u0627\u062A \u0628\u0644\u063A\u0627\u0631\u064A \u062F\u0645\u0628\u0644",
    "en": "Split Squat with Dumbbells",
    "group": "legs",
    "pattern": "knee",
    "eq": "dumbbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0628\u062F\u0623 \u0645\u0646 \u063A\u064A\u0631 \u062D\u0645\u0644 \u0623\u0648 \u0628\u062D\u0645\u0644 \u062E\u0641\u064A\u0641. \u062B\u0628\u0651\u062A \u0627\u0644\u0642\u062F\u0645 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D\u060C \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Start unloaded or light. Keep feet stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": true,
    "aliases": [
      "\u0633\u0643\u0648\u0627\u062A \u0628\u0644\u063A\u0627\u0631\u064A \u062F\u0645\u0628\u0644",
      "Split Squat with Dumbbells"
    ]
  },
  {
    "id": "Thigh_Adductor",
    "ar": "\u0636\u0645 \u0627\u0644\u0641\u062E\u0630 \u062C\u0647\u0627\u0632",
    "en": "Thigh Adductor",
    "group": "legs",
    "pattern": "adductor",
    "eq": "machine",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u0636\u0645 \u0627\u0644\u0641\u062E\u0630",
      "Thigh Adductor"
    ]
  },
  {
    "id": "Thigh_Abductor",
    "ar": "\u0641\u062A\u062D \u0627\u0644\u0641\u062E\u0630 \u062C\u0647\u0627\u0632",
    "en": "Thigh Abductor",
    "group": "legs",
    "pattern": "abductor",
    "eq": "machine",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u0641\u062A\u062D \u0627\u0644\u0641\u062E\u0630",
      "Thigh Abductor"
    ]
  },
  {
    "id": "Barbell_Hip_Thrust",
    "ar": "\u0647\u064A\u0628 \u062B\u0631\u0633\u062A \u0628\u0627\u0631",
    "en": "Barbell Hip Thrust",
    "group": "legs",
    "pattern": "hip",
    "eq": "barbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "total",
    "compound": true,
    "aliases": [
      "\u0647\u064A\u0628 \u062B\u0631\u0633\u062A \u0628\u0627\u0631",
      "Barbell Hip Thrust"
    ]
  },
  {
    "id": "Barbell_Glute_Bridge",
    "ar": "\u062C\u0633\u0631 \u0627\u0644\u062D\u0648\u0636 \u0628\u0627\u0644\u0628\u0627\u0631",
    "en": "Barbell Glute Bridge",
    "group": "legs",
    "pattern": "hip",
    "eq": "barbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "total",
    "compound": true,
    "aliases": [
      "\u062C\u0633\u0631 \u0627\u0644\u062D\u0648\u0636 \u0628\u0627\u0644\u0628\u0627\u0631",
      "Barbell Glute Bridge"
    ]
  },
  {
    "id": "Single_Leg_Glute_Bridge",
    "ar": "\u062C\u0633\u0631 \u0627\u0644\u062D\u0648\u0636 \u0631\u062C\u0644 \u0648\u0627\u062D\u062F\u0629",
    "en": "Single Leg Glute Bridge",
    "group": "legs",
    "pattern": "hip",
    "eq": "body",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u062C\u0633\u0631 \u0627\u0644\u062D\u0648\u0636 \u0631\u062C\u0644 \u0648\u0627\u062D\u062F\u0629",
      "Single Leg Glute Bridge"
    ]
  },
  {
    "id": "Standing_Leg_Curl",
    "ar": "\u062E\u0644\u0641\u064A\u0629 \u0631\u062C\u0644 \u0648\u0627\u0642\u0641 \u062C\u0647\u0627\u0632",
    "en": "Standing Leg Curl",
    "group": "legs",
    "pattern": "curl",
    "eq": "machine",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u062E\u0644\u0641\u064A\u0629 \u0631\u062C\u0644 \u0648\u0627\u0642\u0641",
      "Standing Leg Curl"
    ]
  },
  {
    "id": "Stiff-Legged_Dumbbell_Deadlift",
    "ar": "\u062F\u064A\u062F\u0644\u0641\u062A \u062F\u0645\u0628\u0644 \u0631\u0643\u0628\u0629 \u0634\u0628\u0647 \u0645\u0641\u0631\u0648\u062F\u0629",
    "en": "Stiff-Legged Dumbbell Deadlift",
    "group": "legs",
    "pattern": "hinge",
    "eq": "dumbbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": true,
    "aliases": [
      "\u062F\u064A\u062F\u0644\u0641\u062A \u062F\u0645\u0628\u0644 \u0631\u0643\u0628\u0629 \u0634\u0628\u0647 \u0645\u0641\u0631\u0648\u062F\u0629",
      "Stiff Legged Dumbbell Deadlift"
    ]
  },
  {
    "id": "Standing_Calf_Raises",
    "ar": "\u0633\u0645\u0627\u0646\u0629 \u0648\u0627\u0642\u0641 \u062C\u0647\u0627\u0632",
    "en": "Standing Calf Raises",
    "group": "legs",
    "pattern": "calf",
    "eq": "machine",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u0633\u0645\u0627\u0646\u0629 \u0648\u0627\u0642\u0641",
      "Standing Calf Raises"
    ]
  },
  {
    "id": "Smith_Machine_Calf_Raise",
    "ar": "\u0633\u0645\u0627\u0646\u0629 \u0633\u0645\u064A\u062B",
    "en": "Smith Machine Calf Raise",
    "group": "legs",
    "pattern": "calf",
    "eq": "machine",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "total",
    "compound": false,
    "aliases": [
      "\u0633\u0645\u0627\u0646\u0629 \u0633\u0645\u064A\u062B",
      "Smith Machine Calf Raise"
    ]
  },
  {
    "id": "Barbell_Bench_Press_-_Medium_Grip",
    "ar": "\u0628\u0646\u0634 \u0628\u0627\u0631 \u0645\u0633\u062A\u0648\u064A",
    "en": "Barbell Bench Press - Medium Grip",
    "group": "chest",
    "pattern": "push",
    "eq": "barbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "total",
    "compound": true,
    "aliases": [
      "\u0628\u0646\u0634 \u0628\u0627\u0631 \u0645\u0633\u062A\u0648\u064A",
      "Barbell Bench Press   Medium Grip"
    ]
  },
  {
    "id": "Barbell_Incline_Bench_Press_-_Medium_Grip",
    "ar": "\u0628\u0646\u0634 \u0628\u0627\u0631 \u0645\u0627\u0626\u0644",
    "en": "Barbell Incline Bench Press - Medium Grip",
    "group": "chest",
    "pattern": "incline",
    "eq": "barbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "total",
    "compound": true,
    "aliases": [
      "\u0628\u0646\u0634 \u0628\u0627\u0631 \u0645\u0627\u0626\u0644",
      "Barbell Incline Bench Press   Medium Grip"
    ]
  },
  {
    "id": "Decline_Dumbbell_Bench_Press",
    "ar": "\u0628\u0646\u0634 \u062F\u0645\u0628\u0644 \u0645\u0627\u0626\u0644 \u0644\u062A\u062D\u062A",
    "en": "Decline Dumbbell Bench Press",
    "group": "chest",
    "pattern": "decline",
    "eq": "dumbbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": true,
    "aliases": [
      "\u0628\u0646\u0634 \u062F\u0645\u0628\u0644 \u0645\u0627\u0626\u0644 \u0644\u062A\u062D\u062A",
      "Decline Dumbbell Bench Press"
    ]
  },
  {
    "id": "Leverage_Decline_Chest_Press",
    "ar": "\u0635\u062F\u0631 \u062C\u0647\u0627\u0632 \u0645\u0627\u0626\u0644 \u0644\u062A\u062D\u062A",
    "en": "Leverage Decline Chest Press",
    "group": "chest",
    "pattern": "decline",
    "eq": "machine",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": true,
    "aliases": [
      "\u0635\u062F\u0631  \u0645\u0627\u0626\u0644 \u0644\u062A\u062D\u062A",
      "Leverage Decline Chest Press"
    ]
  },
  {
    "id": "Smith_Machine_Bench_Press",
    "ar": "\u0628\u0646\u0634 \u0645\u0633\u062A\u0648\u064A \u0633\u0645\u064A\u062B",
    "en": "Smith Machine Bench Press",
    "group": "chest",
    "pattern": "push",
    "eq": "machine",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "total",
    "compound": true,
    "aliases": [
      "\u0628\u0646\u0634 \u0645\u0633\u062A\u0648\u064A \u0633\u0645\u064A\u062B",
      "Smith Machine Bench Press"
    ]
  },
  {
    "id": "Smith_Machine_Incline_Bench_Press",
    "ar": "\u0628\u0646\u0634 \u0645\u0627\u0626\u0644 \u0633\u0645\u064A\u062B",
    "en": "Smith Machine Incline Bench Press",
    "group": "chest",
    "pattern": "incline",
    "eq": "machine",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "total",
    "compound": true,
    "aliases": [
      "\u0628\u0646\u0634 \u0645\u0627\u0626\u0644 \u0633\u0645\u064A\u062B",
      "Smith Machine Incline Bench Press"
    ]
  },
  {
    "id": "Smith_Machine_Decline_Press",
    "ar": "\u0628\u0646\u0634 \u0633\u0645\u064A\u062B \u0645\u0627\u0626\u0644 \u0644\u062A\u062D\u062A",
    "en": "Smith Machine Decline Press",
    "group": "chest",
    "pattern": "decline",
    "eq": "machine",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "total",
    "compound": true,
    "aliases": [
      "\u0628\u0646\u0634 \u0633\u0645\u064A\u062B \u0645\u0627\u0626\u0644 \u0644\u062A\u062D\u062A",
      "Smith Machine Decline Press"
    ]
  },
  {
    "id": "Cable_Chest_Press",
    "ar": "\u0636\u063A\u0637 \u0635\u062F\u0631 \u0643\u0627\u0628\u0644",
    "en": "Cable Chest Press",
    "group": "chest",
    "pattern": "push",
    "eq": "cable",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": true,
    "aliases": [
      "\u0636\u063A\u0637 \u0635\u062F\u0631 \u0643\u0627\u0628\u0644",
      "Cable Chest Press"
    ]
  },
  {
    "id": "Incline_Cable_Chest_Press",
    "ar": "\u0636\u063A\u0637 \u0635\u062F\u0631 \u0645\u0627\u0626\u0644 \u0643\u0627\u0628\u0644",
    "en": "Incline Cable Chest Press",
    "group": "chest",
    "pattern": "incline",
    "eq": "cable",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": true,
    "aliases": [
      "\u0636\u063A\u0637 \u0635\u062F\u0631 \u0645\u0627\u0626\u0644 \u0643\u0627\u0628\u0644",
      "Incline Cable Chest Press"
    ]
  },
  {
    "id": "Cable_Crossover",
    "ar": "\u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0643\u0627\u0628\u0644",
    "en": "Cable Crossover",
    "group": "chest",
    "pattern": "fly",
    "eq": "cable",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0643\u0627\u0628\u0644",
      "Cable Crossover"
    ]
  },
  {
    "id": "Low_Cable_Crossover",
    "ar": "\u062A\u062C\u0645\u064A\u0639 \u0643\u0627\u0628\u0644 \u0645\u0646 \u062A\u062D\u062A",
    "en": "Low Cable Crossover",
    "group": "chest",
    "pattern": "fly",
    "eq": "cable",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u062A\u062C\u0645\u064A\u0639 \u0643\u0627\u0628\u0644 \u0645\u0646 \u062A\u062D\u062A",
      "Low Cable Crossover"
    ]
  },
  {
    "id": "Dumbbell_Flyes",
    "ar": "\u062A\u0641\u062A\u064A\u062D \u0635\u062F\u0631 \u062F\u0645\u0628\u0644",
    "en": "Dumbbell Flyes",
    "group": "chest",
    "pattern": "fly",
    "eq": "dumbbell",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": false,
    "aliases": [
      "\u062A\u0641\u062A\u064A\u062D \u0635\u062F\u0631 \u062F\u0645\u0628\u0644",
      "Dumbbell Flyes"
    ]
  },
  {
    "id": "Incline_Dumbbell_Flyes",
    "ar": "\u062A\u0641\u062A\u064A\u062D \u062F\u0645\u0628\u0644 \u0645\u0627\u0626\u0644",
    "en": "Incline Dumbbell Flyes",
    "group": "chest",
    "pattern": "fly",
    "eq": "dumbbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": true,
    "aliases": [
      "\u062A\u0641\u062A\u064A\u062D \u062F\u0645\u0628\u0644 \u0645\u0627\u0626\u0644",
      "Incline Dumbbell Flyes"
    ]
  },
  {
    "id": "Decline_Dumbbell_Flyes",
    "ar": "\u062A\u0641\u062A\u064A\u062D \u062F\u0645\u0628\u0644 \u0645\u0627\u0626\u0644 \u0644\u062A\u062D\u062A",
    "en": "Decline Dumbbell Flyes",
    "group": "chest",
    "pattern": "fly",
    "eq": "dumbbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": true,
    "aliases": [
      "\u062A\u0641\u062A\u064A\u062D \u062F\u0645\u0628\u0644 \u0645\u0627\u0626\u0644 \u0644\u062A\u062D\u062A",
      "Decline Dumbbell Flyes"
    ]
  },
  {
    "id": "Close-Grip_Front_Lat_Pulldown",
    "ar": "\u0633\u062D\u0628 \u0639\u0627\u0644\u064A \u0642\u0628\u0636\u0629 \u0636\u064A\u0642\u0629",
    "en": "Close-Grip Front Lat Pulldown",
    "group": "back",
    "pattern": "vertical",
    "eq": "cable",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0633\u062D\u0628 \u0642\u062F\u0627\u0645 \u0627\u0644\u0648\u062C\u0647 \u0645\u0646 \u063A\u064A\u0631 \u062A\u0623\u0631\u062C\u062D. \u0627\u062E\u062A\u0627\u0631 \u0645\u062F\u0649 \u0645\u0631\u064A\u062D.",
    "enCue": "Pull in front without swinging; choose a comfortable range.",
    "unit": "stack",
    "compound": true,
    "aliases": [
      "\u0633\u062D\u0628 \u0639\u0627\u0644\u064A \u0642\u0628\u0636\u0629 \u0636\u064A\u0642\u0629",
      "Close Grip Front Lat Pulldown"
    ]
  },
  {
    "id": "V-Bar_Pulldown",
    "ar": "\u0633\u062D\u0628 \u0639\u0627\u0644\u064A \u0642\u0628\u0636\u0629 \u0645\u062D\u0627\u064A\u062F\u0629 V",
    "en": "V-Bar Pulldown",
    "group": "back",
    "pattern": "vertical",
    "eq": "cable",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0633\u062D\u0628 \u0642\u062F\u0627\u0645 \u0627\u0644\u0648\u062C\u0647 \u0645\u0646 \u063A\u064A\u0631 \u062A\u0623\u0631\u062C\u062D. \u0627\u062E\u062A\u0627\u0631 \u0645\u062F\u0649 \u0645\u0631\u064A\u062D.",
    "enCue": "Pull in front without swinging; choose a comfortable range.",
    "unit": "stack",
    "compound": true,
    "aliases": [
      "\u0633\u062D\u0628 \u0639\u0627\u0644\u064A \u0642\u0628\u0636\u0629 \u0645\u062D\u0627\u064A\u062F\u0629 V",
      "V Bar Pulldown"
    ]
  },
  {
    "id": "Underhand_Cable_Pulldowns",
    "ar": "\u0633\u062D\u0628 \u0639\u0627\u0644\u064A \u0642\u0628\u0636\u0629 \u0645\u0642\u0644\u0648\u0628\u0629",
    "en": "Underhand Cable Pulldowns",
    "group": "back",
    "pattern": "vertical",
    "eq": "cable",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0633\u062D\u0628 \u0642\u062F\u0627\u0645 \u0627\u0644\u0648\u062C\u0647 \u0645\u0646 \u063A\u064A\u0631 \u062A\u0623\u0631\u062C\u062D. \u0627\u062E\u062A\u0627\u0631 \u0645\u062F\u0649 \u0645\u0631\u064A\u062D.",
    "enCue": "Pull in front without swinging; choose a comfortable range.",
    "unit": "stack",
    "compound": true,
    "aliases": [
      "\u0633\u062D\u0628 \u0639\u0627\u0644\u064A \u0642\u0628\u0636\u0629 \u0645\u0642\u0644\u0648\u0628\u0629",
      "Underhand Cable Pulldowns"
    ]
  },
  {
    "id": "Band_Assisted_Pull-Up",
    "ar": "\u0639\u0642\u0644\u0629 \u0628\u0645\u0633\u0627\u0639\u062F\u0629 \u0645\u0637\u0627\u0637",
    "en": "Band Assisted Pull-Up",
    "group": "back",
    "pattern": "vertical",
    "eq": "band",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0633\u062D\u0628 \u0642\u062F\u0627\u0645 \u0627\u0644\u0648\u062C\u0647 \u0645\u0646 \u063A\u064A\u0631 \u062A\u0623\u0631\u062C\u062D. \u0627\u062E\u062A\u0627\u0631 \u0645\u062F\u0649 \u0645\u0631\u064A\u062D.",
    "enCue": "Pull in front without swinging; choose a comfortable range.",
    "unit": "body",
    "compound": true,
    "aliases": [
      "\u0639\u0642\u0644\u0629 \u0628\u0645\u0633\u0627\u0639\u062F\u0629 \u0645\u0637\u0627\u0637",
      "Band Assisted Pull Up"
    ],
    "assisted": true
  },
  {
    "id": "One-Arm_Dumbbell_Row",
    "ar": "\u0633\u062D\u0628 \u062F\u0645\u0628\u0644 \u064A\u062F \u0648\u0627\u062D\u062F\u0629",
    "en": "One-Arm Dumbbell Row",
    "group": "back",
    "pattern": "row",
    "eq": "dumbbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0633\u062D\u0628 \u0628\u0627\u0644\u0643\u0648\u0639 \u0645\u0646 \u063A\u064A\u0631 \u062A\u0623\u0631\u062C\u062D \u0623\u0648 \u0634\u062F \u0627\u0644\u0631\u0642\u0628\u0629. \u0627\u0631\u062C\u0639 \u0628\u062A\u062D\u0643\u0645.",
    "enCue": "Pull through the elbows without swinging or straining the neck; return with control.",
    "unit": "each",
    "compound": true,
    "aliases": [
      "\u0633\u062D\u0628 \u062F\u0645\u0628\u0644 \u064A\u062F \u0648\u0627\u062D\u062F\u0629",
      "One Arm Dumbbell Row"
    ]
  },
  {
    "id": "Dumbbell_Incline_Row",
    "ar": "\u0633\u062D\u0628 \u062F\u0645\u0628\u0644 \u0635\u062F\u0631 \u0645\u0633\u0646\u0648\u062F",
    "en": "Dumbbell Incline Row",
    "group": "back",
    "pattern": "row",
    "eq": "dumbbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0633\u062D\u0628 \u0628\u0627\u0644\u0643\u0648\u0639 \u0645\u0646 \u063A\u064A\u0631 \u062A\u0623\u0631\u062C\u062D \u0623\u0648 \u0634\u062F \u0627\u0644\u0631\u0642\u0628\u0629. \u0627\u0631\u062C\u0639 \u0628\u062A\u062D\u0643\u0645.",
    "enCue": "Pull through the elbows without swinging or straining the neck; return with control.",
    "unit": "each",
    "compound": true,
    "aliases": [
      "\u0633\u062D\u0628 \u062F\u0645\u0628\u0644 \u0635\u062F\u0631 \u0645\u0633\u0646\u0648\u062F",
      "Dumbbell Incline Row"
    ],
    "loadedAreas": [
      "shoulder",
      "elbow",
      "neck"
    ]
  },
  {
    "id": "Bent_Over_Barbell_Row",
    "ar": "\u0633\u062D\u0628 \u0628\u0627\u0631 \u0645\u0646\u062D\u0646\u064A",
    "en": "Bent Over Barbell Row",
    "group": "back",
    "pattern": "row",
    "eq": "barbell",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0633\u062D\u0628 \u0628\u0627\u0644\u0643\u0648\u0639 \u0645\u0646 \u063A\u064A\u0631 \u062A\u0623\u0631\u062C\u062D \u0623\u0648 \u0634\u062F \u0627\u0644\u0631\u0642\u0628\u0629. \u0627\u0631\u062C\u0639 \u0628\u062A\u062D\u0643\u0645.",
    "enCue": "Pull through the elbows without swinging or straining the neck; return with control.",
    "unit": "total",
    "compound": true,
    "aliases": [
      "\u0633\u062D\u0628 \u0628\u0627\u0631 \u0645\u0646\u062D\u0646\u064A",
      "Bent Over Barbell Row"
    ]
  },
  {
    "id": "Leverage_High_Row",
    "ar": "\u0633\u062D\u0628 \u0639\u0627\u0644\u064A \u062C\u0647\u0627\u0632",
    "en": "Leverage High Row",
    "group": "back",
    "pattern": "row",
    "eq": "machine",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0633\u062D\u0628 \u0628\u0627\u0644\u0643\u0648\u0639 \u0645\u0646 \u063A\u064A\u0631 \u062A\u0623\u0631\u062C\u062D \u0623\u0648 \u0634\u062F \u0627\u0644\u0631\u0642\u0628\u0629. \u0627\u0631\u062C\u0639 \u0628\u062A\u062D\u0643\u0645.",
    "enCue": "Pull through the elbows without swinging or straining the neck; return with control.",
    "unit": "stack",
    "compound": true,
    "aliases": [
      "\u0633\u062D\u0628 \u0639\u0627\u0644\u064A",
      "Leverage High Row"
    ],
    "loadedAreas": [
      "shoulder",
      "elbow",
      "neck"
    ]
  },
  {
    "id": "Straight-Arm_Pulldown",
    "ar": "\u0633\u062D\u0628 \u0643\u0627\u0628\u0644 \u0630\u0631\u0627\u0639 \u0645\u0641\u0631\u0648\u062F",
    "en": "Straight-Arm Pulldown",
    "group": "back",
    "pattern": "pullover",
    "eq": "cable",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u0633\u062D\u0628 \u0643\u0627\u0628\u0644 \u0630\u0631\u0627\u0639 \u0645\u0641\u0631\u0648\u062F",
      "Straight Arm Pulldown"
    ]
  },
  {
    "id": "Seated_One-arm_Cable_Pulley_Rows",
    "ar": "\u0633\u062D\u0628 \u0623\u0631\u0636\u064A \u0643\u0627\u0628\u0644 \u064A\u062F \u0648\u0627\u062D\u062F\u0629",
    "en": "Seated One-arm Cable Pulley Rows",
    "group": "back",
    "pattern": "row",
    "eq": "cable",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u0633\u062D\u0628 \u0628\u0627\u0644\u0643\u0648\u0639 \u0645\u0646 \u063A\u064A\u0631 \u062A\u0623\u0631\u062C\u062D \u0623\u0648 \u0634\u062F \u0627\u0644\u0631\u0642\u0628\u0629. \u0627\u0631\u062C\u0639 \u0628\u062A\u062D\u0643\u0645.",
    "enCue": "Pull through the elbows without swinging or straining the neck; return with control.",
    "unit": "stack",
    "compound": true,
    "aliases": [
      "\u0633\u062D\u0628 \u0623\u0631\u0636\u064A \u0643\u0627\u0628\u0644 \u064A\u062F \u0648\u0627\u062D\u062F\u0629",
      "Seated One arm Cable Pulley Rows"
    ]
  },
  {
    "id": "Leverage_Shoulder_Press",
    "ar": "\u0636\u063A\u0637 \u0643\u062A\u0641 \u062C\u0647\u0627\u0632",
    "en": "Leverage Shoulder Press",
    "group": "shoulders",
    "pattern": "press",
    "eq": "machine",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": true,
    "aliases": [
      "\u0636\u063A\u0637 \u0643\u062A\u0641",
      "Leverage Shoulder Press"
    ]
  },
  {
    "id": "Smith_Machine_Overhead_Shoulder_Press",
    "ar": "\u0636\u063A\u0637 \u0643\u062A\u0641 \u0633\u0645\u064A\u062B",
    "en": "Smith Machine Overhead Shoulder Press",
    "group": "shoulders",
    "pattern": "press",
    "eq": "machine",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "total",
    "compound": true,
    "aliases": [
      "\u0636\u063A\u0637 \u0643\u062A\u0641 \u0633\u0645\u064A\u062B",
      "Smith Machine Overhead Shoulder Press"
    ]
  },
  {
    "id": "Cable_Rear_Delt_Fly",
    "ar": "\u0631\u0641\u0631\u0641\u0629 \u062E\u0644\u0641\u064A \u0643\u0627\u0628\u0644",
    "en": "Cable Rear Delt Fly",
    "group": "shoulders",
    "pattern": "rear",
    "eq": "cable",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u0631\u0641\u0631\u0641\u0629 \u062E\u0644\u0641\u064A \u0643\u0627\u0628\u0644",
      "Cable Rear Delt Fly"
    ]
  },
  {
    "id": "Face_Pull",
    "ar": "\u0641\u064A\u0633 \u0628\u0648\u0644 \u062D\u0628\u0644",
    "en": "Face Pull",
    "group": "shoulders",
    "pattern": "rear",
    "eq": "cable",
    "reps": [
      8,
      12
    ],
    "rest": 120,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": true,
    "aliases": [
      "\u0641\u064A\u0633 \u0628\u0648\u0644 \u062D\u0628\u0644",
      "Face Pull"
    ]
  },
  {
    "id": "Seated_Bent-Over_Rear_Delt_Raise",
    "ar": "\u0631\u0641\u0631\u0641\u0629 \u062E\u0644\u0641\u064A \u062F\u0645\u0628\u0644 \u062C\u0627\u0644\u0633",
    "en": "Seated Bent-Over Rear Delt Raise",
    "group": "shoulders",
    "pattern": "rear",
    "eq": "dumbbell",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": false,
    "aliases": [
      "\u0631\u0641\u0631\u0641\u0629 \u062E\u0644\u0641\u064A \u062F\u0645\u0628\u0644 \u062C\u0627\u0644\u0633",
      "Seated Bent Over Rear Delt Raise"
    ]
  },
  {
    "id": "Front_Dumbbell_Raise",
    "ar": "\u0631\u0641\u0631\u0641\u0629 \u0623\u0645\u0627\u0645\u064A \u062F\u0645\u0628\u0644",
    "en": "Front Dumbbell Raise",
    "group": "shoulders",
    "pattern": "front",
    "eq": "dumbbell",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": false,
    "aliases": [
      "\u0631\u0641\u0631\u0641\u0629 \u0623\u0645\u0627\u0645\u064A \u062F\u0645\u0628\u0644",
      "Front Dumbbell Raise"
    ]
  },
  {
    "id": "Dumbbell_Bicep_Curl",
    "ar": "\u0628\u0627\u064A \u062F\u0645\u0628\u0644",
    "en": "Dumbbell Bicep Curl",
    "group": "arms",
    "pattern": "biceps",
    "eq": "dumbbell",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": false,
    "aliases": [
      "\u0628\u0627\u064A \u062F\u0645\u0628\u0644",
      "Dumbbell Bicep Curl"
    ]
  },
  {
    "id": "Incline_Dumbbell_Curl",
    "ar": "\u0628\u0627\u064A \u062F\u0645\u0628\u0644 \u0645\u0627\u0626\u0644",
    "en": "Incline Dumbbell Curl",
    "group": "arms",
    "pattern": "biceps",
    "eq": "dumbbell",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": false,
    "aliases": [
      "\u0628\u0627\u064A \u062F\u0645\u0628\u0644 \u0645\u0627\u0626\u0644",
      "Incline Dumbbell Curl"
    ]
  },
  {
    "id": "Concentration_Curls",
    "ar": "\u0628\u0627\u064A \u062A\u0631\u0643\u064A\u0632 \u062F\u0645\u0628\u0644",
    "en": "Concentration Curls",
    "group": "arms",
    "pattern": "biceps",
    "eq": "dumbbell",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": false,
    "aliases": [
      "\u0628\u0627\u064A \u062A\u0631\u0643\u064A\u0632 \u062F\u0645\u0628\u0644",
      "Concentration Curls"
    ]
  },
  {
    "id": "Cable_Hammer_Curls_-_Rope_Attachment",
    "ar": "\u0628\u0627\u064A \u0647\u0627\u0645\u0631 \u062D\u0628\u0644",
    "en": "Cable Hammer Curls - Rope Attachment",
    "group": "arms",
    "pattern": "biceps",
    "eq": "cable",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u0628\u0627\u064A \u0647\u0627\u0645\u0631 \u062D\u0628\u0644",
      "Cable Hammer Curls   Rope Attachment"
    ]
  },
  {
    "id": "Preacher_Curl",
    "ar": "\u0628\u0627\u064A \u0628\u0627\u0631 \u0639\u0644\u0649 \u0633\u0643\u0648\u062A",
    "en": "Preacher Curl",
    "group": "arms",
    "pattern": "biceps",
    "eq": "barbell",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "total",
    "compound": false,
    "aliases": [
      "\u0628\u0627\u064A \u0628\u0627\u0631 \u0639\u0644\u0649 \u0633\u0643\u0648\u062A",
      "Preacher Curl"
    ]
  },
  {
    "id": "Barbell_Curl",
    "ar": "\u0628\u0627\u064A \u0628\u0627\u0631 \u0645\u0633\u062A\u0642\u064A\u0645",
    "en": "Barbell Curl",
    "group": "arms",
    "pattern": "biceps",
    "eq": "barbell",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "total",
    "compound": false,
    "aliases": [
      "\u0628\u0627\u064A \u0628\u0627\u0631 \u0645\u0633\u062A\u0642\u064A\u0645",
      "Barbell Curl"
    ]
  },
  {
    "id": "Cable_Rope_Overhead_Triceps_Extension",
    "ar": "\u062A\u0631\u0627\u064A \u062D\u0628\u0644 \u0641\u0648\u0642 \u0627\u0644\u0631\u0623\u0633",
    "en": "Cable Rope Overhead Triceps Extension",
    "group": "arms",
    "pattern": "triceps",
    "eq": "cable",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u062A\u0631\u0627\u064A \u062D\u0628\u0644 \u0641\u0648\u0642 \u0627\u0644\u0631\u0623\u0633",
      "Cable Rope Overhead Triceps Extension"
    ]
  },
  {
    "id": "Seated_Triceps_Press",
    "ar": "\u062A\u0631\u0627\u064A \u062F\u0645\u0628\u0644 \u0641\u0648\u0642 \u0627\u0644\u0631\u0623\u0633 \u062C\u0627\u0644\u0633",
    "en": "Seated Triceps Press",
    "group": "arms",
    "pattern": "triceps",
    "eq": "dumbbell",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u062A\u0631\u0627\u064A \u062F\u0645\u0628\u0644 \u0641\u0648\u0642 \u0627\u0644\u0631\u0623\u0633 \u062C\u0627\u0644\u0633",
      "Seated Triceps Press"
    ]
  },
  {
    "id": "Lying_Triceps_Press",
    "ar": "\u062A\u0631\u0627\u064A \u062F\u0645\u0628\u0644 \u0646\u0627\u064A\u0645",
    "en": "Lying dumbbell triceps extension",
    "group": "arms",
    "pattern": "triceps",
    "eq": "dumbbell",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "each",
    "compound": false,
    "aliases": [
      "\u062A\u0631\u0627\u064A \u062F\u0645\u0628\u0644 \u0646\u0627\u064A\u0645",
      "Lying Triceps Press"
    ]
  },
  {
    "id": "Reverse_Grip_Triceps_Pushdown",
    "ar": "\u062A\u0631\u0627\u064A \u0643\u0627\u0628\u0644 \u0642\u0628\u0636\u0629 \u0645\u0642\u0644\u0648\u0628\u0629",
    "en": "Reverse Grip Triceps Pushdown",
    "group": "arms",
    "pattern": "triceps",
    "eq": "cable",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u062A\u0631\u0627\u064A \u0643\u0627\u0628\u0644 \u0642\u0628\u0636\u0629 \u0645\u0642\u0644\u0648\u0628\u0629",
      "Reverse Grip Triceps Pushdown"
    ]
  },
  {
    "id": "Triceps_Pushdown_-_V-Bar_Attachment",
    "ar": "\u062A\u0631\u0627\u064A \u0643\u0627\u0628\u0644 \u0645\u0642\u0628\u0636 V",
    "en": "Triceps Pushdown - V-Bar Attachment",
    "group": "arms",
    "pattern": "triceps",
    "eq": "cable",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062E\u062A\u0627\u0631 \u062D\u0645\u0644 \u062E\u0641\u064A\u0641\u060C \u062B\u0628\u0651\u062A \u062C\u0633\u0645\u0643 \u0648\u0627\u062A\u062D\u0631\u0643 \u0628\u062A\u062D\u0643\u0645 \u0641\u064A \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0645\u0646 \u063A\u064A\u0631 \u0627\u0646\u062F\u0641\u0627\u0639.",
    "enCue": "Choose a light load, keep your body stable and move with control through a comfortable range.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u062A\u0631\u0627\u064A \u0643\u0627\u0628\u0644 \u0645\u0642\u0628\u0636 V",
      "Triceps Pushdown   V Bar Attachment"
    ]
  },
  {
    "id": "Plank",
    "ar": "\u0628\u0644\u0627\u0646\u0643",
    "en": "Plank",
    "group": "core",
    "pattern": "core",
    "eq": "body",
    "reps": [
      15,
      30
    ],
    "rest": 90,
    "arCue": "\u0627\u062A\u0646\u0641\u0633 \u0648\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u062A\u062D\u0643\u0645 \u0627\u0644\u062C\u0630\u0639. \u0642\u0644\u0651\u0644 \u0627\u0644\u0645\u062F\u0649 \u0644\u0648 \u0628\u062A\u0639\u0648\u0636 \u0628\u0636\u0647\u0631\u0643.",
    "enCue": "Breathe and control the trunk; reduce range if your back compensates.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0628\u0644\u0627\u0646\u0643",
      "Plank"
    ],
    "loadedAreas": [
      "shoulder",
      "elbow",
      "back",
      "hip",
      "ankle",
      "neck"
    ],
    "mode": "seconds"
  },
  {
    "id": "Knee_Hip_Raise_On_Parallel_Bars",
    "ar": "\u0631\u0641\u0639 \u0627\u0644\u0631\u0643\u0628 \u0639\u0644\u0649 \u0643\u0631\u0633\u064A \u0627\u0644\u0628\u0637\u0646",
    "en": "Knee/Hip Raise On Parallel Bars",
    "group": "core",
    "pattern": "core",
    "eq": "machine",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062A\u0646\u0641\u0633 \u0648\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u062A\u062D\u0643\u0645 \u0627\u0644\u062C\u0630\u0639. \u0642\u0644\u0651\u0644 \u0627\u0644\u0645\u062F\u0649 \u0644\u0648 \u0628\u062A\u0639\u0648\u0636 \u0628\u0636\u0647\u0631\u0643.",
    "enCue": "Breathe and control the trunk; reduce range if your back compensates.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0631\u0641\u0639 \u0627\u0644\u0631\u0643\u0628 \u0639\u0644\u0649 \u0643\u0631\u0633\u064A \u0627\u0644\u0628\u0637\u0646",
      "Knee/Hip Raise On Parallel Bars"
    ],
    "loadedAreas": [
      "shoulder",
      "elbow",
      "back",
      "hip"
    ]
  },
  {
    "id": "Hanging_Leg_Raise",
    "ar": "\u0631\u0641\u0639 \u0627\u0644\u0631\u0643\u0628 \u0645\u062A\u0639\u0644\u0642",
    "en": "Hanging Knee Raise",
    "group": "core",
    "pattern": "core",
    "eq": "machine",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062B\u0646\u0650 \u0627\u0644\u0631\u0643\u0628 \u0648\u0627\u0631\u0641\u0639\u0647\u0627 \u0628\u062A\u062D\u0643\u0645 \u0645\u0646 \u063A\u064A\u0631 \u0645\u0631\u062C\u062D\u0629\u060C \u0632\u064A \u0627\u0644\u0648\u0636\u0639\u064A\u0629 \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629.",
    "enCue": "Bend and raise the knees with control, without swinging, as shown.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0631\u0641\u0639 \u0627\u0644\u0631\u062C\u0644\u064A\u0646 \u0645\u062A\u0639\u0644\u0642",
      "Hanging Leg Raise"
    ],
    "loadedAreas": [
      "shoulder",
      "elbow",
      "back",
      "hip",
      "neck"
    ]
  },
  {
    "id": "Ab_Crunch_Machine",
    "ar": "\u0643\u0631\u0627\u0646\u0634 \u062C\u0647\u0627\u0632",
    "en": "Ab Crunch Machine",
    "group": "core",
    "pattern": "core",
    "eq": "machine",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062A\u0646\u0641\u0633 \u0648\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u062A\u062D\u0643\u0645 \u0627\u0644\u062C\u0630\u0639. \u0642\u0644\u0651\u0644 \u0627\u0644\u0645\u062F\u0649 \u0644\u0648 \u0628\u062A\u0639\u0648\u0636 \u0628\u0636\u0647\u0631\u0643.",
    "enCue": "Breathe and control the trunk; reduce range if your back compensates.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u0643\u0631\u0627\u0646\u0634",
      "Ab Crunch Machine"
    ]
  },
  {
    "id": "Cable_Crunch",
    "ar": "\u0643\u0631\u0627\u0646\u0634 \u0643\u0627\u0628\u0644",
    "en": "Cable Crunch",
    "group": "core",
    "pattern": "core",
    "eq": "cable",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062A\u0646\u0641\u0633 \u0648\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u062A\u062D\u0643\u0645 \u0627\u0644\u062C\u0630\u0639. \u0642\u0644\u0651\u0644 \u0627\u0644\u0645\u062F\u0649 \u0644\u0648 \u0628\u062A\u0639\u0648\u0636 \u0628\u0636\u0647\u0631\u0643.",
    "enCue": "Breathe and control the trunk; reduce range if your back compensates.",
    "unit": "stack",
    "compound": false,
    "aliases": [
      "\u0643\u0631\u0627\u0646\u0634 \u0643\u0627\u0628\u0644",
      "Cable Crunch"
    ]
  },
  {
    "id": "Reverse_Crunch",
    "ar": "\u0643\u0631\u0627\u0646\u0634 \u0639\u0643\u0633\u064A",
    "en": "Reverse Crunch",
    "group": "core",
    "pattern": "core",
    "eq": "body",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062A\u0646\u0641\u0633 \u0648\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u062A\u062D\u0643\u0645 \u0627\u0644\u062C\u0630\u0639. \u0642\u0644\u0651\u0644 \u0627\u0644\u0645\u062F\u0649 \u0644\u0648 \u0628\u062A\u0639\u0648\u0636 \u0628\u0636\u0647\u0631\u0643.",
    "enCue": "Breathe and control the trunk; reduce range if your back compensates.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0643\u0631\u0627\u0646\u0634 \u0639\u0643\u0633\u064A",
      "Reverse Crunch"
    ]
  },
  {
    "id": "Crunches",
    "ar": "\u0643\u0631\u0627\u0646\u0634 \u0623\u0631\u0636\u064A",
    "en": "Crunches",
    "group": "core",
    "pattern": "core",
    "eq": "body",
    "reps": [
      10,
      15
    ],
    "rest": 90,
    "arCue": "\u0627\u062A\u0646\u0641\u0633 \u0648\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u062A\u062D\u0643\u0645 \u0627\u0644\u062C\u0630\u0639. \u0642\u0644\u0651\u0644 \u0627\u0644\u0645\u062F\u0649 \u0644\u0648 \u0628\u062A\u0639\u0648\u0636 \u0628\u0636\u0647\u0631\u0643.",
    "enCue": "Breathe and control the trunk; reduce range if your back compensates.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0643\u0631\u0627\u0646\u0634 \u0623\u0631\u0636\u064A",
      "Crunches"
    ]
  },
  {
    "id": "Cat_Stretch",
    "ar": "\u062D\u0631\u0643\u0629 \u0627\u0644\u0642\u0637\u0629 \u0644\u0644\u0636\u0647\u0631",
    "en": "Cat Stretch",
    "group": "mobility",
    "pattern": "mobility",
    "eq": "body",
    "reps": [
      15,
      30
    ],
    "rest": 90,
    "arCue": "\u062D\u0631\u0643\u0629 \u0647\u0627\u062F\u064A\u0629 \u0645\u0646 \u063A\u064A\u0631 \u0646\u0637 \u0623\u0648 \u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0623\u0644\u0645. \u0627\u0644\u0625\u0637\u0627\u0644\u0629 \u0645\u0631\u064A\u062D\u0629 \u0645\u0634 \u0645\u0624\u0644\u0645\u0629.",
    "enCue": "Move gently without bouncing or pushing into pain; a stretch should be comfortable.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u062D\u0631\u0643\u0629 \u0627\u0644\u0642\u0637\u0629 \u0644\u0644\u0636\u0647\u0631",
      "Cat Stretch"
    ],
    "loadedAreas": [
      "back",
      "neck",
      "shoulder",
      "elbow",
      "knee",
      "hip"
    ],
    "mode": "seconds"
  },
  {
    "id": "Kneeling_Hip_Flexor",
    "ar": "\u0625\u0637\u0627\u0644\u0629 \u0623\u0645\u0627\u0645 \u0627\u0644\u062D\u0648\u0636 \u0631\u0627\u0643\u0639",
    "en": "Kneeling Hip Flexor",
    "group": "mobility",
    "pattern": "mobility",
    "eq": "body",
    "reps": [
      15,
      30
    ],
    "rest": 90,
    "arCue": "\u062D\u0631\u0643\u0629 \u0647\u0627\u062F\u064A\u0629 \u0645\u0646 \u063A\u064A\u0631 \u0646\u0637 \u0623\u0648 \u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0623\u0644\u0645. \u0627\u0644\u0625\u0637\u0627\u0644\u0629 \u0645\u0631\u064A\u062D\u0629 \u0645\u0634 \u0645\u0624\u0644\u0645\u0629.",
    "enCue": "Move gently without bouncing or pushing into pain; a stretch should be comfortable.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0625\u0637\u0627\u0644\u0629 \u0623\u0645\u0627\u0645 \u0627\u0644\u062D\u0648\u0636 \u0631\u0627\u0643\u0639",
      "Kneeling Hip Flexor"
    ],
    "loadedAreas": [
      "knee",
      "hip",
      "back"
    ],
    "mode": "seconds"
  },
  {
    "id": "Seated_Floor_Hamstring_Stretch",
    "ar": "\u0625\u0637\u0627\u0644\u0629 \u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0641\u062E\u0630 \u062C\u0627\u0644\u0633",
    "en": "Seated Floor Hamstring Stretch",
    "group": "mobility",
    "pattern": "mobility",
    "eq": "body",
    "reps": [
      15,
      30
    ],
    "rest": 90,
    "arCue": "\u062D\u0631\u0643\u0629 \u0647\u0627\u062F\u064A\u0629 \u0645\u0646 \u063A\u064A\u0631 \u0646\u0637 \u0623\u0648 \u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0623\u0644\u0645. \u0627\u0644\u0625\u0637\u0627\u0644\u0629 \u0645\u0631\u064A\u062D\u0629 \u0645\u0634 \u0645\u0624\u0644\u0645\u0629.",
    "enCue": "Move gently without bouncing or pushing into pain; a stretch should be comfortable.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0625\u0637\u0627\u0644\u0629 \u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0641\u062E\u0630 \u062C\u0627\u0644\u0633",
      "Seated Floor Hamstring Stretch"
    ],
    "loadedAreas": [
      "hip",
      "back",
      "knee"
    ],
    "mode": "seconds"
  },
  {
    "id": "Calf_Stretch_Hands_Against_Wall",
    "ar": "\u0625\u0637\u0627\u0644\u0629 \u0627\u0644\u0633\u0645\u0627\u0646\u0629 \u0639\u0644\u0649 \u0627\u0644\u062D\u0627\u0626\u0637",
    "en": "Calf Stretch Hands Against Wall",
    "group": "mobility",
    "pattern": "mobility",
    "eq": "body",
    "reps": [
      15,
      30
    ],
    "rest": 90,
    "arCue": "\u062D\u0631\u0643\u0629 \u0647\u0627\u062F\u064A\u0629 \u0645\u0646 \u063A\u064A\u0631 \u0646\u0637 \u0623\u0648 \u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0623\u0644\u0645. \u0627\u0644\u0625\u0637\u0627\u0644\u0629 \u0645\u0631\u064A\u062D\u0629 \u0645\u0634 \u0645\u0624\u0644\u0645\u0629.",
    "enCue": "Move gently without bouncing or pushing into pain; a stretch should be comfortable.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0625\u0637\u0627\u0644\u0629 \u0627\u0644\u0633\u0645\u0627\u0646\u0629 \u0639\u0644\u0649 \u0627\u0644\u062D\u0627\u0626\u0637",
      "Calf Stretch Hands Against Wall"
    ],
    "loadedAreas": [
      "ankle",
      "shoulder",
      "elbow",
      "knee"
    ],
    "mode": "seconds"
  },
  {
    "id": "Shoulder_Stretch",
    "ar": "\u0625\u0637\u0627\u0644\u0629 \u0627\u0644\u0643\u062A\u0641",
    "en": "Shoulder Stretch",
    "group": "mobility",
    "pattern": "mobility",
    "eq": "body",
    "reps": [
      15,
      30
    ],
    "rest": 90,
    "arCue": "\u062D\u0631\u0643\u0629 \u0647\u0627\u062F\u064A\u0629 \u0645\u0646 \u063A\u064A\u0631 \u0646\u0637 \u0623\u0648 \u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0623\u0644\u0645. \u0627\u0644\u0625\u0637\u0627\u0644\u0629 \u0645\u0631\u064A\u062D\u0629 \u0645\u0634 \u0645\u0624\u0644\u0645\u0629.",
    "enCue": "Move gently without bouncing or pushing into pain; a stretch should be comfortable.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0625\u0637\u0627\u0644\u0629 \u0627\u0644\u0643\u062A\u0641",
      "Shoulder Stretch"
    ],
    "loadedAreas": [
      "shoulder",
      "elbow",
      "neck"
    ],
    "mode": "seconds"
  },
  {
    "id": "Triceps_Stretch",
    "ar": "\u0625\u0637\u0627\u0644\u0629 \u0627\u0644\u062A\u0631\u0627\u064A\u0633\u0628\u0633",
    "en": "Triceps Stretch",
    "group": "mobility",
    "pattern": "mobility",
    "eq": "body",
    "reps": [
      15,
      30
    ],
    "rest": 90,
    "arCue": "\u062D\u0631\u0643\u0629 \u0647\u0627\u062F\u064A\u0629 \u0645\u0646 \u063A\u064A\u0631 \u0646\u0637 \u0623\u0648 \u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0623\u0644\u0645. \u0627\u0644\u0625\u0637\u0627\u0644\u0629 \u0645\u0631\u064A\u062D\u0629 \u0645\u0634 \u0645\u0624\u0644\u0645\u0629.",
    "enCue": "Move gently without bouncing or pushing into pain; a stretch should be comfortable.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0625\u0637\u0627\u0644\u0629 \u0627\u0644\u062A\u0631\u0627\u064A\u0633\u0628\u0633",
      "Triceps Stretch"
    ],
    "loadedAreas": [
      "shoulder",
      "elbow",
      "neck"
    ],
    "mode": "seconds"
  },
  {
    "id": "Chest_And_Front_Of_Shoulder_Stretch",
    "ar": "\u0625\u0637\u0627\u0644\u0629 \u0627\u0644\u0635\u062F\u0631 \u0648\u0627\u0644\u0643\u062A\u0641 \u0627\u0644\u0623\u0645\u0627\u0645\u064A",
    "en": "Chest And Front Of Shoulder Stretch",
    "group": "mobility",
    "pattern": "mobility",
    "eq": "body",
    "reps": [
      15,
      30
    ],
    "rest": 90,
    "arCue": "\u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u062A\u0633\u062A\u062E\u062F\u0645 \u0639\u0635\u0627 \u062E\u0641\u064A\u0641\u0629\u060C \u0645\u0634 \u0628\u0627\u0631 \u0628\u0623\u0648\u0632\u0627\u0646. \u0645\u062F\u0649 \u0645\u0631\u064A\u062D \u0641\u0642\u0637\u061B \u062A\u062E\u0637\u0651\u0627\u0647 \u0644\u0648 \u0627\u0644\u0639\u0635\u0627 \u0645\u0634 \u0645\u062A\u0627\u062D\u0629.",
    "enCue": "Photo uses a light dowel, not a loaded bar. Use a comfortable range; skip if a dowel is unavailable.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0625\u0637\u0627\u0644\u0629 \u0627\u0644\u0635\u062F\u0631 \u0648\u0627\u0644\u0643\u062A\u0641 \u0627\u0644\u0623\u0645\u0627\u0645\u064A",
      "Chest And Front Of Shoulder Stretch"
    ],
    "loadedAreas": [
      "shoulder",
      "elbow",
      "neck"
    ],
    "mode": "seconds"
  },
  {
    "id": "Elliptical_Trainer",
    "ar": "\u0625\u0644\u064A\u0628\u062A\u0643\u0627\u0644",
    "en": "Elliptical Trainer",
    "group": "cardio",
    "pattern": "cardio",
    "eq": "cardio",
    "reps": [
      5,
      12
    ],
    "rest": 90,
    "arCue": "\u0627\u0628\u062F\u0623 \u0628\u0633\u0647\u0648\u0644\u0629 \u062A\u0642\u062F\u0631 \u062A\u062A\u0643\u0644\u0645 \u0645\u0639\u0627\u0647\u0627. \u0638\u0628\u0651\u0637 \u0627\u0644\u062C\u0647\u0627\u0632 \u0648\u062E\u0641\u0651\u0636 \u0627\u0644\u0633\u0631\u0639\u0629 \u0644\u0648 \u062A\u0639\u0628\u062A.",
    "enCue": "Start at an easy conversational pace; adjust the machine and slow down when needed.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0625\u0644\u064A\u0628\u062A\u0643\u0627\u0644",
      "Elliptical Trainer"
    ],
    "loadedAreas": [
      "knee",
      "hip",
      "ankle",
      "shoulder",
      "elbow",
      "back"
    ],
    "mode": "minutes"
  },
  {
    "id": "Rowing_Stationary",
    "ar": "\u062C\u0647\u0627\u0632 \u062A\u062C\u062F\u064A\u0641",
    "en": "Rowing, Stationary",
    "group": "cardio",
    "pattern": "cardio",
    "eq": "cardio",
    "reps": [
      5,
      12
    ],
    "rest": 90,
    "arCue": "\u0627\u0628\u062F\u0623 \u0628\u0633\u0647\u0648\u0644\u0629 \u062A\u0642\u062F\u0631 \u062A\u062A\u0643\u0644\u0645 \u0645\u0639\u0627\u0647\u0627. \u0638\u0628\u0651\u0637 \u0627\u0644\u062C\u0647\u0627\u0632 \u0648\u062E\u0641\u0651\u0636 \u0627\u0644\u0633\u0631\u0639\u0629 \u0644\u0648 \u062A\u0639\u0628\u062A.",
    "enCue": "Start at an easy conversational pace; adjust the machine and slow down when needed.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u062A\u062C\u062F\u064A\u0641",
      "Rowing, Stationary"
    ],
    "loadedAreas": [
      "knee",
      "hip",
      "back",
      "shoulder",
      "elbow",
      "neck",
      "ankle"
    ],
    "mode": "minutes"
  },
  {
    "id": "Step_Mill",
    "ar": "\u062C\u0647\u0627\u0632 \u0627\u0644\u0633\u0644\u0645",
    "en": "Step Mill",
    "group": "cardio",
    "pattern": "cardio",
    "eq": "cardio",
    "reps": [
      5,
      12
    ],
    "rest": 90,
    "arCue": "\u0627\u0628\u062F\u0623 \u0628\u0633\u0647\u0648\u0644\u0629 \u062A\u0642\u062F\u0631 \u062A\u062A\u0643\u0644\u0645 \u0645\u0639\u0627\u0647\u0627. \u0638\u0628\u0651\u0637 \u0627\u0644\u062C\u0647\u0627\u0632 \u0648\u062E\u0641\u0651\u0636 \u0627\u0644\u0633\u0631\u0639\u0629 \u0644\u0648 \u062A\u0639\u0628\u062A.",
    "enCue": "Start at an easy conversational pace; adjust the machine and slow down when needed.",
    "unit": "body",
    "compound": false,
    "aliases": [
      "\u0627\u0644\u0633\u0644\u0645",
      "Step Mill"
    ],
    "loadedAreas": [
      "knee",
      "hip",
      "ankle",
      "back"
    ],
    "mode": "minutes"
  }
];

// lib/fitness.ts
var goals = { muscle: ["\u0628\u0646\u0627\u0621 \u0639\u0636\u0644\u0627\u062A", "Build muscle"], weight: ["\u0632\u064A\u0627\u062F\u0629 \u0648\u0632\u0646", "Gain weight"], loss: ["\u062E\u0633\u0627\u0631\u0629 \u062F\u0647\u0648\u0646", "Fat loss"], strength: ["\u0632\u064A\u0627\u062F\u0629 \u0642\u0648\u0629", "Strength"], endurance: ["\u062A\u062D\u0645\u0644 \u0639\u0636\u0644\u064A", "Endurance"], fitness: ["\u0644\u064A\u0627\u0642\u0629 \u0639\u0627\u0645\u0629", "Fitness"], mobility: ["\u0645\u0631\u0648\u0646\u0629 \u0648\u062D\u0631\u0643\u0629", "Mobility"] };
var equipment = { machine: ["\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0645\u0642\u0627\u0648\u0645\u0629", "Machines"], cable: ["\u0627\u0644\u0643\u0627\u0628\u0644\u0627\u062A", "Cables"], dumbbell: ["\u0627\u0644\u062F\u0645\u0628\u0644 \u0648\u0627\u0644\u0628\u0646\u0634", "Dumbbells & bench"], barbell: ["\u0628\u0627\u0631 \u0648\u0631\u0627\u0643", "Barbell & rack"], cardio: ["\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0644\u064A\u0627\u0642\u0629", "Cardio"], body: ["\u0648\u0632\u0646 \u0627\u0644\u062C\u0633\u0645 / \u0645\u0627\u062A", "Bodyweight / mat"], kettlebell: ["\u0643\u064A\u062A\u0644 \u0628\u064A\u0644", "Kettlebell"], band: ["\u0645\u0637\u0627\u0637 + \u0628\u0627\u0631 \u0639\u0642\u0644\u0629", "Band + pull-up bar"] };
var areas = { shoulder: ["\u0643\u062A\u0641", "Shoulder"], elbow: ["\u0643\u0648\u0639 / \u0631\u0633\u063A", "Elbow / wrist"], back: ["\u0623\u0633\u0641\u0644 \u0627\u0644\u0636\u0647\u0631", "Lower back"], hip: ["\u062D\u0648\u0636", "Hip"], knee: ["\u0631\u0643\u0628\u0629", "Knee"], ankle: ["\u0643\u0627\u062D\u0644", "Ankle"], neck: ["\u0631\u0642\u0628\u0629", "Neck"] };
var f = external_exports.number().finite();
var ids = external_exports.array(external_exports.string().max(100)).max(150).default([]);
var weekday = f.int().min(0).max(6);
var goal = external_exports.enum(["muscle", "weight", "loss", "strength", "endurance", "fitness", "mobility"]);
var eq = external_exports.enum(["machine", "cable", "dumbbell", "barbell", "cardio", "body", "kettlebell", "band"]);
var injurySchema = external_exports.object({ area: external_exports.enum(["shoulder", "elbow", "back", "hip", "knee", "ankle", "neck"]), reportedAt: external_exports.string().default(""), status: external_exports.enum(["active", "improving", "recovered"]).default("active"), reviewed: external_exports.boolean().default(false), history: external_exports.array(external_exports.object({ status: external_exports.string(), at: external_exports.string() })).default([]) });
var rehabSchema = external_exports.object({ id: external_exports.string(), name: external_exports.string().min(1).max(100), sets: f.int().min(1).max(20), reps: f.int().min(0).max(100), hold: f.min(0).max(600), frequency: external_exports.string().max(100), notes: external_exports.string().max(1e3), placement: external_exports.enum(["before", "after", "separate"]), days: external_exports.array(weekday).default([]) });
var gymSchema = external_exports.object({ id: external_exports.string(), name: external_exports.string().min(1).max(80), equipment: external_exports.array(eq).min(1), exerciseIds: ids, exact: external_exports.boolean().default(false), bars: external_exports.array(f.min(0).max(100)).default([20]), plates: external_exports.array(external_exports.object({ kg: f.positive().max(100), pairs: f.int().min(1).max(30) })).default([{ kg: 1.25, pairs: 2 }, { kg: 2.5, pairs: 2 }, { kg: 5, pairs: 2 }, { kg: 10, pairs: 2 }, { kg: 20, pairs: 2 }]) });
var profileSchema = external_exports.object({ id: external_exports.string().max(80), name: external_exports.string().trim().min(1).max(60), age: f.int().min(18).max(90), birthDate: external_exports.string().max(10).default(""), weight: f.min(30).max(300), height: f.min(120).max(230), measuredAt: external_exports.string().max(10), goal, secondaryGoals: external_exports.array(goal).max(6).default([]), experience: external_exports.enum(["beginner", "returning", "regular"]), days: external_exports.array(weekday).min(2).max(6), availableDays: external_exports.array(weekday).min(2).max(7).default([0, 2, 4]), sessionsPerWeek: f.int().min(2).max(6).default(3), weekStartsOn: weekday.default(6), minutes: f.int().min(30).max(100), dayMinutes: external_exports.record(external_exports.string(), f.int().min(30).max(100)).default({}), equipment: external_exports.array(eq).min(1), priority: external_exports.enum(["balanced", "chest", "back", "legs", "shoulders", "arms", "core"]), health: external_exports.enum(["none", "injury", "medical", "unknown"]), restrictions: external_exports.string().max(2e3), urgentSymptoms: external_exports.boolean().default(false), injuries: external_exports.array(injurySchema).max(7).default([]), sex: external_exports.enum(["male", "female", "unspecified"]), activity: external_exports.enum(["low", "moderate", "high"]), sleep: f.min(0).max(16), diet: external_exports.enum(["mixed", "vegetarian"]), allergies: external_exports.string().max(500), allergenTags: external_exports.array(external_exports.string()).default([]), foodReview: external_exports.boolean().default(false), split: external_exports.enum(["upper", "ppl", "bro", "full", "arnold"]), stage: f.int().min(0).max(2), createdAt: external_exports.string().max(40), rehab: external_exports.string().max(3e3).default(""), prescribedRehab: external_exports.array(rehabSchema).max(30).default([]), nutritionEnabled: external_exports.boolean().default(false), preferredExerciseIds: ids, dislikedExerciseIds: ids, gyms: external_exports.array(gymSchema).max(10).default([]), activeGymId: external_exports.string().default(""), upperIncrement: f.positive().max(10).default(1), lowerIncrement: f.positive().max(20).default(2.5), remindersEnabled: external_exports.boolean().default(false), reminderTime: external_exports.string().default("18:00"), lastBackupSessionCount: f.int().min(0).default(0), shareNameEnabled: external_exports.boolean().default(false), comebackDismissed: external_exports.string().default(""), planHistory: external_exports.array(external_exports.object({ effectiveFrom: external_exports.string(), days: external_exports.array(weekday) })).default([]) });
var patternLoads = { push: ["shoulder", "elbow", "neck"], incline: ["shoulder", "elbow", "neck"], decline: ["shoulder", "elbow", "neck"], fly: ["shoulder", "elbow"], row: ["shoulder", "elbow", "back", "neck"], vertical: ["shoulder", "elbow", "neck"], knee: ["knee", "hip", "ankle", "back"], curl: ["knee", "hip"], extension: ["knee"], hip: ["hip", "back", "knee"], hinge: ["hip", "back", "knee", "neck"], calf: ["ankle", "knee"], adductor: ["hip"], abductor: ["hip"], press: ["shoulder", "elbow", "back", "neck"], lateral: ["shoulder", "neck"], rear: ["shoulder", "neck", "elbow"], triceps: ["elbow", "shoulder"], biceps: ["elbow", "shoulder"], core: ["back", "hip", "neck"], front: ["shoulder", "neck"], pullover: ["shoulder", "elbow", "back", "neck"] };
var exercises = [...legacyExercises, ...extraExercises].map((e2) => ({ ...e2, loadedAreas: e2.loadedAreas ?? patternLoads[e2.pattern] ?? Object.keys(areas), aliases: [e2.ar, e2.en, ...e2.aliases ?? []], mode: e2.mode ?? "reps" }));
var byId = Object.fromEntries(exercises.map((e2) => [e2.id, e2]));
var slotSchema = external_exports.object({ key: external_exports.string().max(80), exId: external_exports.string().max(100), sets: f.int().min(1).max(6), low: f.min(1).max(120), high: f.min(1).max(120), rest: f.min(0).max(600) });
var setSchema = external_exports.object({ id: external_exports.string().max(80), slotKey: external_exports.string().max(80), exId: external_exports.string().max(100), weight: f.min(0).max(1500), reps: f.int().min(1).max(120), rir: f.int().min(0).max(10), at: external_exports.string().max(40), gymId: external_exports.string().default("") });
var restStateSchema = external_exports.object({ deadline: f.min(0).nullable(), totalSeconds: f.min(0).max(600) });
var sessionSchema = external_exports.object({ restState: restStateSchema.optional(), id: external_exports.string().max(80), date: external_exports.string().max(10), weekday, startedAt: external_exports.string().max(40), finishedAt: external_exports.string().max(40).nullable(), title: external_exports.string().max(100), titleEn: external_exports.string().max(100), targetMinutes: f.min(1).max(240), slots: external_exports.array(slotSchema).max(30), sets: external_exports.array(setSchema).max(250), skipped: external_exports.array(external_exports.string().max(80)).max(30), notes: external_exports.string().max(2e3), effort: f.min(0).max(10), extras: external_exports.array(external_exports.object({ kind: external_exports.string().max(100), minutes: f.min(0).max(120) })).max(50), swaps: external_exports.array(external_exports.object({ slot: external_exports.string(), from: external_exports.string(), to: external_exports.string(), reason: external_exports.string(), at: external_exports.string() })).max(100), gymId: external_exports.string().default(""), goalSnapshot: external_exports.string().default(""), painByArea: external_exports.record(external_exports.string(), f.min(0).max(10)).default({}), rehabDone: external_exports.array(external_exports.string()).default([]), comeback: external_exports.boolean().default(false), blocks: external_exports.array(external_exports.object({ id: external_exports.string(), kind: external_exports.string(), minutes: f, exId: external_exports.string(), optional: external_exports.boolean().default(false) })).default([]) });
var reportSchema = external_exports.object({ id: external_exports.string().max(80), fileKey: external_exports.string().max(180), date: external_exports.string().max(10), weight: f.min(0).max(300).nullable(), fat: f.min(0).max(70).nullable(), muscle: f.min(0).max(150).nullable(), bmr: f.min(0).max(5e3).nullable(), confirmed: external_exports.boolean(), raw: external_exports.string().max(1e4) });
var bundleSchema = external_exports.object({ profile: profileSchema, sessions: external_exports.array(sessionSchema).max(1e3), reports: external_exports.array(reportSchema).max(200), rehabLogs: external_exports.array(external_exports.object({ id: external_exports.string(), date: external_exports.string(), at: external_exports.string(), prescription: rehabSchema })).max(3e3).default([]) });
var accountSchema = external_exports.object({ profiles: external_exports.array(bundleSchema).max(20), activeId: external_exports.string().max(80), schemaVersion: external_exports.literal(2).default(2) });
function migrate(data) {
  const d = JSON.parse(JSON.stringify(data));
  if (d.schemaVersion > 2) throw Error("FUTURE");
  for (const b2 of d.profiles ?? []) {
    const p2 = b2.profile;
    p2.availableDays ??= p2.days;
    p2.sessionsPerWeek ??= p2.days.length;
    p2.weekStartsOn ??= 6;
    p2.planHistory ??= [{ effectiveFrom: localDate(), days: [...p2.days] }];
  }
  d.schemaVersion = 2;
  return accountSchema.parse(d);
}
function ageAt(date, ref = /* @__PURE__ */ new Date()) {
  const d = /* @__PURE__ */ new Date(date + "T00:00:00");
  if (!date || !Number.isFinite(+d)) return 0;
  let a2 = ref.getFullYear() - d.getFullYear();
  if (ref.getMonth() < d.getMonth() || ref.getMonth() === d.getMonth() && ref.getDate() < d.getDate()) a2--;
  return a2;
}
var localDate = (d = /* @__PURE__ */ new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
var activeGym = (p2) => p2.gyms.find((g) => g.id === p2.activeGymId);
var safeMode = (p2) => p2.health !== "none" || p2.injuries.some((i) => i.status !== "recovered");
function eligible(e2, p2) {
  const g = activeGym(p2);
  const eqs2 = g?.equipment ?? p2.equipment;
  if (e2.eq !== "body" && !eqs2.includes(e2.eq)) return false;
  if (g?.exact && e2.eq !== "body" && !g.exerciseIds.includes(e2.id)) return false;
  if (p2.dislikedExerciseIds.includes(e2.id)) return false;
  if (p2.injuries.some((i) => i.status === "active" && e2.loadedAreas?.includes(i.area))) return false;
  if (p2.injuries.some((i) => i.status === "improving" && e2.loadedAreas?.includes(i.area) && (!i.reviewed || !["machine", "cable"].includes(e2.eq)))) return false;
  return true;
}
function alternatives(id, p2) {
  const e2 = byId[id];
  return e2 ? exercises.filter((x) => x.id !== id && x.group === e2.group && x.pattern === e2.pattern && eligible(x, p2)).sort((a2, b2) => score(b2, p2) - score(a2, p2)) : [];
}
function score(e2, p2) {
  return (p2.preferredExerciseIds.includes(e2.id) ? 20 : 0) + (safeMode(p2) && ["machine", "cable"].includes(e2.eq) ? 8 : 0) + (e2.eq === "machine" ? 2 : 0);
}
function chooseDays(available, count, start = 6) {
  const a2 = [...new Set(available)].sort((x, y) => (x - start + 7) % 7 - (y - start + 7) % 7);
  if (count > a2.length) throw Error("DAYS");
  let best = [], bestScore = -Infinity;
  for (let mask = 0; mask < 1 << a2.length; mask++) {
    const v = a2.filter((_, i) => mask >> i & 1);
    if (v.length !== count) continue;
    const sorted = [...v].sort((x, y) => x - y);
    const gaps = sorted.map((x, i) => (sorted[(i + 1) % sorted.length] - x + 7) % 7);
    const sc = gaps.reduce((s, g) => s + Math.min(g, 2) * 10 - (g - 7 / count) ** 2, 0);
    if (sc > bestScore) {
      best = v;
      bestScore = sc;
    }
  }
  return best;
}
var patterns = { upper: [["push", "row", "vertical", "lateral", "triceps", "biceps"], ["knee", "curl", "hip", "calf", "core"], ["incline", "vertical", "row", "rear", "biceps", "triceps"], ["knee", "curl", "hip", "extension", "calf", "core"]], ppl: [["push", "incline", "press", "lateral", "triceps"], ["vertical", "row", "rear", "biceps", "core"], ["knee", "curl", "hip", "calf", "core"]], bro: [["push", "incline", "fly", "triceps"], ["vertical", "row", "rear", "biceps"], ["knee", "curl", "hip", "calf", "core"], ["press", "lateral", "rear", "biceps", "triceps"]], full: [["knee", "push", "row", "hip", "core"], ["curl", "incline", "vertical", "lateral", "calf"], ["knee", "push", "row", "hip", "biceps", "triceps"]], arnold: [["push", "incline", "vertical", "row"], ["press", "lateral", "biceps", "triceps", "rear"], ["knee", "curl", "hip", "calf", "core"]] };
var titles = { upper: [["\u0639\u0644\u0648\u064A A", "Upper A"], ["\u0633\u0641\u0644\u064A A", "Lower A"], ["\u0639\u0644\u0648\u064A B", "Upper B"], ["\u0633\u0641\u0644\u064A B", "Lower B"]], ppl: [["\u062F\u0641\u0639", "Push"], ["\u0633\u062D\u0628", "Pull"], ["\u0631\u062C\u0644 \u0648\u0628\u0637\u0646", "Legs & core"]], bro: [["\u0635\u062F\u0631 \u0648\u062A\u0631\u0627\u064A", "Chest & triceps"], ["\u0636\u0647\u0631 \u0648\u0628\u0627\u064A", "Back & biceps"], ["\u0631\u062C\u0644 \u0648\u0628\u0637\u0646", "Legs & core"], ["\u0643\u062A\u0641 \u0648\u062F\u0631\u0627\u0639", "Shoulders & arms"]], full: [["\u062C\u0633\u0645 \u0643\u0627\u0645\u0644 A", "Full body A"], ["\u062C\u0633\u0645 \u0643\u0627\u0645\u0644 B", "Full body B"], ["\u062C\u0633\u0645 \u0643\u0627\u0645\u0644 C", "Full body C"]], arnold: [["\u0635\u062F\u0631 \u0648\u0636\u0647\u0631", "Chest & back"], ["\u0643\u062A\u0641 \u0648\u062F\u0631\u0627\u0639", "Shoulders & arms"], ["\u0631\u062C\u0644 \u0648\u0628\u0637\u0646", "Legs & core"]] };
var injuryCardioMap = { shoulder: { candidates: ["Bicycling_Stationary"], duration: [3, 5], intensity: "easy, conversational pace", reviewed: false }, elbow: { candidates: ["Walking_Treadmill"], duration: [3, 5], intensity: "easy, conversational pace", reviewed: false }, back: { candidates: [], duration: [3, 5], intensity: "easy, conversational pace", reviewed: false }, hip: { candidates: [], duration: [3, 5], intensity: "easy, conversational pace", reviewed: false }, knee: { candidates: [], duration: [3, 5], intensity: "easy, conversational pace", reviewed: false }, ankle: { candidates: [], duration: [3, 5], intensity: "easy, conversational pace", reviewed: false }, neck: { candidates: [], duration: [3, 5], intensity: "easy, conversational pace", reviewed: false } };
function restFor(e2, p2) {
  return safeMode(p2) ? Math.max(120, e2.rest) : p2.goal === "strength" && e2.compound ? 180 : p2.goal === "endurance" ? Math.max(60, Math.min(90, e2.rest)) : e2.rest;
}
function makePlan(p2) {
  const chosen = patterns[p2.split];
  const used = /* @__PURE__ */ new Set();
  return [...p2.days].sort((a2, b2) => (a2 - p2.weekStartsOn + 7) % 7 - (b2 - p2.weekStartsOn + 7) % 7).map((weekday2, i) => {
    const minutes = p2.dayMinutes[String(weekday2)] ?? p2.minutes;
    const safe = safeMode(p2);
    let pats = [...chosen[i % chosen.length]];
    if (p2.split === "upper" && p2.days.length === 5 && i === 4) pats = ["push", "row", "knee", "curl", "core"];
    if (p2.split === "bro" && p2.days.length === 3 && i === 0) pats.push("lateral");
    const slots = [];
    const missing = [];
    if (!p2.urgentSymptoms) for (const pat of pats) {
      const opts = exercises.filter((e3) => e3.pattern === pat && eligible(e3, p2)).sort((a2, b2) => score(b2, p2) - score(a2, p2) + (used.has(a2.id) ? 5 : 0) - (used.has(b2.id) ? 5 : 0));
      const e2 = opts[0];
      if (!e2) {
        missing.push(pat);
        continue;
      }
      used.add(e2.id);
      const strength = p2.goal === "strength" && e2.compound;
      slots.push({ key: `d${weekday2}-s${slots.length}`, exId: e2.id, sets: safe ? 1 : p2.stage === 2 ? 3 : 2, low: e2.mode === "seconds" ? 15 : safe ? 10 : strength ? 5 : p2.goal === "endurance" ? 12 : e2.reps[0], high: e2.mode === "seconds" ? 30 : safe ? 12 : strength ? 8 : p2.goal === "endurance" ? 18 : e2.reps[1], rest: restFor(e2, p2) });
    }
    if (p2.priority !== "balanced") slots.sort((a2, b2) => Number(byId[b2.exId].group === p2.priority) - Number(byId[a2.exId].group === p2.priority));
    const blocks = [];
    const allGoals = [p2.goal, ...p2.secondaryGoals];
    if (!p2.urgentSymptoms && !safe && allGoals.some((g) => ["loss", "fitness", "endurance"].includes(g))) {
      const candidates = exercises.filter((e3) => e3.group === "cardio" && eligible(e3, p2));
      const e2 = candidates[i % candidates.length];
      if (e2) blocks.push({ id: "cardio", kind: "cardio", minutes: Math.min(minutes < 45 ? 6 : 12, p2.goal === "loss" ? 12 : p2.goal === "endurance" ? 10 : 8), exId: e2.id, optional: false });
      else missing.push("cardio");
    }
    if (!p2.urgentSymptoms && !safe && allGoals.includes("mobility")) {
      const candidates = exercises.filter((e2) => e2.group === "mobility" && eligible(e2, p2));
      if (candidates.length) for (let j = 0; j < Math.min(2, candidates.length); j++) blocks.push({ id: "mobility-" + j, kind: "mobility", minutes: 3, exId: candidates[(i * 2 + j) % candidates.length].id, optional: false });
      else missing.push("mobility");
    }
    let estimate = () => Math.ceil(5 + blocks.reduce((n, b2) => n + b2.minutes, 0) + slots.reduce((n, s) => n + s.sets * 0.75 + (s.sets - 1) * s.rest / 60 + 1.25, 0));
    while (estimate() > minutes && slots.some((s) => s.sets > 2)) {
      slots.findLast((s) => s.sets > 2).sets--;
    }
    while (estimate() > minutes && slots.length > 1) {
      slots.pop();
    }
    const title = titles[p2.split][i % titles[p2.split].length];
    return { weekday: weekday2, title: title[0], titleEn: title[1], slots, blocks, minutes: estimate(), warning: !slots.length, missing, conservative: safe };
  });
}
function nutrition(p2) {
  if (!p2.nutritionEnabled || p2.health === "medical" || p2.health === "unknown") return null;
  const bmi = p2.weight / (p2.height / 100) ** 2;
  if (bmi < 18.5 && p2.goal === "loss") return null;
  const age = p2.birthDate ? ageAt(p2.birthDate) : p2.age;
  const rest = 10 * p2.weight + 6.25 * p2.height - 5 * age + (p2.sex === "male" ? 5 : p2.sex === "female" ? -161 : -78);
  const factor = p2.activity === "low" ? 1.4 : p2.activity === "moderate" ? 1.6 : 1.8;
  const maintenance = rest * factor;
  const multiplier = p2.goal === "loss" ? 0.85 : ["weight", "muscle"].includes(p2.goal) ? 1.1 : 1;
  const target = Math.round(maintenance * multiplier / 25) * 25;
  const protein = Math.round(p2.weight * 1.6);
  const fat = Math.round(target * 0.28 / 9);
  const carbs = Math.round((target - 4 * protein - 9 * fat) / 4);
  return carbs >= 0 ? { bmi, rest: Math.round(rest), factor, maintenance: Math.round(maintenance), target, protein, fat, carbs, multiplier, rough: p2.sex === "unspecified" } : null;
}
function e1rm(s) {
  const e2 = byId[s.exId];
  return e2 && !e2.assisted && e2.mode === "reps" && e2.unit !== "body" && s.weight > 0 && s.reps <= 12 ? s.weight * (1 + s.reps / 30) : null;
}
function prTypes(s, previous) {
  const e2 = byId[s.exId];
  if (!e2 || e2.mode !== "reps" || e2.assisted) return [];
  const old = previous.filter((x) => x.exId === s.exId && x.gymId === s.gymId);
  if (!old.length) return ["baseline"];
  const r = [];
  if (s.weight > Math.max(...old.map((x) => x.weight))) r.push("weight");
  const same = old.filter((x) => x.weight === s.weight);
  if (same.length && s.reps > Math.max(...same.map((x) => x.reps))) r.push("reps");
  const rm = e1rm(s);
  if (rm && rm > Math.max(...old.map((x) => e1rm(x) ?? 0))) r.push("rm");
  return r;
}
function loadAdvice(id, b2) {
  const p2 = b2.profile, e2 = byId[id], g = activeGym(p2);
  const recent = b2.sessions.filter((s) => s.finishedAt && s.gymId === (g?.id ?? "") && s.sets.some((x) => x.exId === id)).slice(-3);
  const last = recent.at(-1);
  if (!last || !e2) return { increase: false, next: null, plateau: false };
  const sets = last.sets.filter((x) => x.exId === id);
  const base = sets.at(-1).weight;
  const top = recent.slice(-2);
  const qualifies = top.length === 2 && top.every((s) => {
    const slot = s.slots.find((x) => x.exId === id);
    const xs = s.sets.filter((x) => x.exId === id);
    return slot && xs.length >= slot.sets && xs.every((x) => x.reps >= slot.high && x.rir >= 2) && !Object.values(s.painByArea).some((v) => v > 0);
  });
  const increase = qualifies && !safeMode(p2) && e2.unit !== "body" && !e2.assisted;
  let jump = e2.group === "legs" ? p2.lowerIncrement : p2.upperIncrement;
  jump = Math.min(jump, Math.max(0.25, base * 0.05));
  const next = increase ? Math.round((base + jump) * 4) / 4 : null;
  const comparable = recent.length === 3 && recent.every((s) => {
    const sl = s.slots.find((x) => x.exId === id), ref = last.slots.find((x) => x.exId === id);
    return sl && ref && sl.low === ref.low && sl.high === ref.high && sl.sets === ref.sets && s.goalSnapshot === last.goalSnapshot && s.sets.filter((x) => x.exId === id).length >= sl.sets;
  });
  const vals = recent.map((s) => Math.max(...s.sets.filter((x) => x.exId === id).map((x) => x.weight * (1 + x.reps / 30))));
  const plateau = comparable && vals[2] <= vals[1] && vals[1] <= vals[0];
  return { increase, next, plateau };
}
function weekStart(date = /* @__PURE__ */ new Date(), start = 6) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - (d.getDay() - start + 7) % 7);
  return d;
}
function adherence(b2, now = /* @__PURE__ */ new Date()) {
  return [3, 2, 1, 0].map((w) => {
    const start = weekStart(now, b2.profile.weekStartsOn);
    start.setDate(start.getDate() - 7 * w);
    let planned = 0, done = 0;
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      if (d > now) continue;
      const key = localDate(d);
      const h = b2.profile.planHistory.filter((h2) => h2.effectiveFrom <= key).at(-1);
      if (h?.days.includes(d.getDay())) planned++;
      if (b2.sessions.some((s) => s.date === key && s.finishedAt)) done++;
    }
    return { date: localDate(start), planned, done, percent: planned ? Math.min(100, Math.round(done / planned * 100)) : null };
  });
}
function comebackDue(b2, now = /* @__PURE__ */ new Date()) {
  const today = localDate(now);
  if (b2.profile.comebackDismissed === today || !b2.sessions.some((s) => s.finishedAt)) return false;
  const last = b2.sessions.filter((s) => s.finishedAt).at(-1);
  for (let n = 1; n <= 14; n++) {
    const d = /* @__PURE__ */ new Date(last.date + "T12:00:00");
    d.setDate(d.getDate() + n);
    if (b2.profile.days.includes(d.getDay()) && !b2.sessions.some((s) => s.finishedAt && s.date === localDate(d))) return (+now - +d) / 864e5 >= 4;
  }
  return false;
}
function plateTotal(bar, plates) {
  return bar + 2 * plates.reduce((n, p2) => n + p2.kg * p2.pairs, 0);
}
function plateSolve(target, bar, plates) {
  if (target < bar) return { total: bar, plates: [], exact: false };
  const max = Math.round((target - bar) * 50);
  let states = /* @__PURE__ */ new Map([[0, []]]);
  for (const p2 of [...plates].sort((a2, b2) => b2.kg - a2.kg)) {
    const next = new Map(states);
    for (const [n, list] of states) for (let c = 1; c <= p2.pairs; c++) {
      const k = n + Math.round(p2.kg * 100) * c;
      if (k <= max && !next.has(k)) next.set(k, [...list, { kg: p2.kg, pairs: c }]);
    }
    states = next;
  }
  const best = Math.max(...states.keys());
  return { total: bar + best / 50, plates: states.get(best), exact: Math.abs(bar + best / 50 - target) < 1e-3 };
}

// lib/meals.ts
var foods = [
  { id: "ful", ar: "\u0641\u0648\u0644 \u0645\u0637\u0628\u0648\u062E \u0628\u062F\u0648\u0646 \u0632\u064A\u062A", en: "Cooked fava beans, no oil", p: 7.6, c: 19.7, f: 0.4, allergens: ["legumes"], veg: true },
  { id: "eggs", ar: "\u0628\u064A\u0636 \u0645\u0633\u0644\u0648\u0642", en: "Boiled eggs", p: 12.6, c: 1.1, f: 10.6, allergens: ["eggs"], veg: true },
  { id: "areesh", ar: "\u062C\u0628\u0646\u0629 \u0642\u0631\u064A\u0634 \u0642\u0644\u064A\u0644\u0629 \u0627\u0644\u062F\u0633\u0645", en: "Low-fat areesh cheese", p: 13, c: 4, f: 3, allergens: ["milk"], veg: true },
  { id: "chicken", ar: "\u0635\u062F\u0631 \u0641\u0631\u0627\u062E \u0645\u0637\u0628\u0648\u062E \u0628\u062F\u0648\u0646 \u062C\u0644\u062F", en: "Cooked skinless chicken breast", p: 31, c: 0, f: 3.6, allergens: [], veg: false },
  { id: "rice", ar: "\u0623\u0631\u0632 \u0645\u0637\u0628\u0648\u062E \u0628\u062F\u0648\u0646 \u0632\u064A\u062A", en: "Cooked rice, no oil", p: 2.7, c: 28, f: 0.3, allergens: [], veg: true },
  { id: "bread", ar: "\u0639\u064A\u0634 \u0628\u0644\u062F\u064A", en: "Baladi bread", p: 9, c: 55, f: 1.5, allergens: ["wheat"], veg: true },
  { id: "lentils", ar: "\u0639\u062F\u0633 \u0645\u0637\u0628\u0648\u062E \u0628\u062F\u0648\u0646 \u0632\u064A\u062A", en: "Cooked lentils, no oil", p: 9, c: 20, f: 0.4, allergens: ["legumes"], veg: true },
  { id: "yogurt", ar: "\u0632\u0628\u0627\u062F\u064A \u0633\u0627\u062F\u0629", en: "Plain yogurt", p: 5, c: 7, f: 3, allergens: ["milk"], veg: true },
  { id: "banana", ar: "\u0645\u0648\u0632 \u0628\u062F\u0648\u0646 \u0642\u0634\u0631", en: "Peeled banana", p: 1.1, c: 23, f: 0.3, allergens: [], veg: true },
  { id: "oil", ar: "\u0632\u064A\u062A \u0632\u064A\u062A\u0648\u0646 (\u064A\u0634\u0645\u0644 \u0627\u0644\u0637\u0628\u062E)", en: "Olive oil (including cooking)", p: 0, c: 0, f: 100, allergens: [], veg: true },
  { id: "salad", ar: "\u0633\u0644\u0637\u0629 \u062E\u0636\u0627\u0631 \u0628\u062F\u0648\u0646 \u0632\u064A\u062A", en: "Vegetable salad, no oil", p: 1, c: 5, f: 0.2, allergens: [], veg: true },
  { id: "taameya", ar: "\u0637\u0639\u0645\u064A\u0629 \u0645\u0642\u0644\u064A\u0629 \u2014 \u062A\u0642\u062F\u064A\u0631 \u0648\u0635\u0641\u0629", en: "Fried taameya \u2014 recipe estimate", p: 13, c: 32, f: 18, allergens: ["legumes", "sesame", "wheat"], veg: true },
  { id: "koshari", ar: "\u0643\u0634\u0631\u064A \u2014 \u062A\u0642\u062F\u064A\u0631 \u0648\u0635\u0641\u0629", en: "Koshari \u2014 recipe estimate", p: 5, c: 28, f: 5, allergens: ["wheat", "legumes"], veg: true },
  { id: "molokhia", ar: "\u0645\u0644\u0648\u062E\u064A\u0629 \u0628\u062F\u0648\u0646 \u0633\u0645\u0646\u0629 \u2014 \u062A\u0642\u062F\u064A\u0631", en: "Molokhia without ghee \u2014 estimate", p: 3, c: 5, f: 1, allergens: [], veg: true }
];
function mealPlan(p2) {
  const n = nutrition(p2);
  if (!n || p2.allergies.trim() && !p2.foodReview) return null;
  const allowed = foods.filter((f2) => (p2.diet !== "vegetarian" || f2.veg) && !f2.allergens.some((a2) => p2.allergenTags.includes(a2)));
  const names = p2.diet === "vegetarian" ? ["ful", "eggs", "areesh", "rice", "lentils", "yogurt", "banana", "oil", "salad"] : ["ful", "eggs", "chicken", "rice", "yogurt", "banana", "oil", "salad"];
  let fs2 = names.map((id) => allowed.find((f2) => f2.id === id)).filter(Boolean);
  if (fs2.length < 4) return null;
  const grams = fs2.map((f2) => f2.id === "oil" ? 20 : f2.id === "salad" ? 200 : 150);
  const totals = () => fs2.reduce((v, f2, i) => ({ protein: v.protein + f2.p * grams[i] / 100, carbs: v.carbs + f2.c * grams[i] / 100, fat: v.fat + f2.f * grams[i] / 100 }), { protein: 0, carbs: 0, fat: 0 });
  const err = () => {
    const v = totals();
    return ((v.protein - n.protein) / n.protein) ** 2 + ((v.carbs - n.carbs) / n.carbs) ** 2 + ((v.fat - n.fat) / n.fat) ** 2;
  };
  for (let iter = 0; iter < 500; iter++) {
    let improved = false;
    for (let i = 0; i < grams.length; i++) {
      const orig = grams[i], step = fs2[i].id === "oil" ? 1 : 5;
      let best = err(), newG = orig;
      for (const delta of [-step, step]) {
        grams[i] = Math.max(fs2[i].id === "oil" ? 0 : 50, Math.min(fs2[i].id === "oil" ? 60 : fs2[i].id === "rice" ? 650 : fs2[i].id === "chicken" ? 350 : 400, orig + delta));
        const e2 = err();
        if (e2 < best) {
          best = e2;
          newG = grams[i];
        }
      }
      grams[i] = newG;
      improved ||= newG !== orig;
    }
    if (!improved) break;
  }
  const total = totals();
  return { items: fs2.map((f2, i) => ({ ...f2, grams: grams[i], meal: ["ful", "eggs", "areesh"].includes(f2.id) ? 0 : ["yogurt", "banana"].includes(f2.id) ? 2 : 1 })), ...total, calories: 4 * total.protein + 4 * total.carbs + 9 * total.fat, close: Math.abs(total.protein - n.protein) / n.protein < 0.15 && Math.abs(total.carbs - n.carbs) / n.carbs < 0.15 && Math.abs(total.fat - n.fat) / n.fat < 0.15 };
}

// local-state.ts
var KEY = "oz-fit-html-state-v1";
async function localState(_url, init) {
  const raw = localStorage.getItem(KEY);
  const current = raw ? JSON.parse(raw) : { data: { profiles: [], activeId: "", schemaVersion: 2 }, revision: 0 };
  const migrated = migrate(current.data);
  if (raw && current.data.schemaVersion !== 2 && !localStorage.getItem(KEY + "-pre-v2")) localStorage.setItem(KEY + "-pre-v2", raw);
  if (init?.method === "PUT") {
    const next = JSON.parse(init.body);
    const data = accountSchema.parse(next.data);
    if (next.revision !== current.revision) return { ok: false, status: 409, json: async () => ({}) };
    const updated = { data, revision: current.revision + 1 };
    localStorage.setItem(KEY, JSON.stringify(updated));
    return { ok: true, status: 200, json: async () => ({ revision: updated.revision }) };
  }
  return { ok: true, status: 200, json: async () => ({ data: migrated, revision: current.revision }) };
}

// tests/acceptance.ts
var results = [];
var check = (name, fn) => {
  fn();
  results.push({ name, status: "passed" });
  console.log("PASS", name);
};
var oldProfile = { id: "qa", name: "Synthetic QA", age: 30, birthDate: "", weight: 70, height: 175, measuredAt: "2026-09-19", goal: "muscle", experience: "beginner", days: [0, 1, 3, 5], minutes: 45, equipment: ["machine", "cable", "dumbbell", "barbell", "cardio"], priority: "balanced", health: "none", restrictions: "", sex: "male", activity: "low", sleep: 7, diet: "mixed", allergies: "", split: "upper", stage: 0, createdAt: "2026-09-19", nutritionEnabled: true, rehab: "Original therapist free text" };
var a = migrate({ profiles: [{ profile: oldProfile, sessions: [], reports: [] }], activeId: "qa" });
var p = a.profiles[0].profile;
check("Old profile migration preserves days, free-text rehab, identity and defaults", () => {
  import_strict.default.deepEqual(p.days, oldProfile.days);
  import_strict.default.deepEqual(p.availableDays, p.days);
  import_strict.default.equal(p.sessionsPerWeek, 4);
  import_strict.default.equal(p.rehab, oldProfile.rehab);
  import_strict.default.deepEqual(p.injuries, []);
  import_strict.default.deepEqual(migrate(a), a);
});
check("108 unique exercises, old IDs preserved, two assets each, area tags and aliases", () => {
  import_strict.default.equal(exercises.length, 108);
  import_strict.default.equal(new Set(exercises.map((e2) => e2.id)).size, 108);
  for (const e2 of exercises) {
    (0, import_strict.default)(e2.loadedAreas?.length);
    (0, import_strict.default)(e2.aliases?.length);
    for (const n of [0, 1]) (0, import_strict.default)(import_node_fs.default.existsSync(`public/exercises/${e2.id}-${n}.webp`));
  }
});
check("3 sessions selected only from 5 available days", () => {
  const d = chooseDays([0, 1, 2, 4, 6], 3, 6);
  import_strict.default.equal(d.length, 3);
  (0, import_strict.default)(d.every((x) => [0, 1, 2, 4, 6].includes(x)));
});
check("Conservative injury / unknown plan; active areas excluded from plans and swaps", () => {
  for (const h of ["injury", "unknown"]) {
    const q = { ...p, health: h, injuries: [{ area: "knee", status: "active", reportedAt: "2026-09-29", reviewed: false, history: [] }] };
    const plan = makePlan(q);
    (0, import_strict.default)(plan.some((d) => d.slots.length));
    for (const slot of plan.flatMap((d) => d.slots)) {
      (0, import_strict.default)(!byId[slot.exId].loadedAreas?.includes("knee"));
      import_strict.default.equal(slot.sets, 1);
      (0, import_strict.default)(slot.rest >= 120);
      for (const e2 of alternatives(slot.exId, q)) (0, import_strict.default)(!e2.loadedAreas?.includes("knee"));
    }
  }
});
check("Recovered area restores selection; acute symptoms preserve explanatory day shells", () => {
  const knee = { area: "knee", status: "recovered", reportedAt: "", reviewed: false, history: [] };
  (0, import_strict.default)(makePlan({ ...p, injuries: [knee] }).flatMap((d) => d.slots).some((s) => byId[s.exId].loadedAreas?.includes("knee")));
  const urgent = makePlan({ ...p, urgentSymptoms: true });
  (0, import_strict.default)(urgent.length);
  (0, import_strict.default)(urgent.every((d) => d.slots.length === 0 && d.warning));
});
check("Goal cardio, mobility blocks and duration caps; ordinary beginner min2 sets", () => {
  for (const g of Object.keys(goals)) {
    for (const minutes of [30, 45, 60]) {
      const plan = makePlan({ ...p, goal: g, minutes });
      (0, import_strict.default)(plan.every((d) => d.minutes <= minutes));
      (0, import_strict.default)(plan.flatMap((d) => d.slots).every((s) => s.sets >= 2));
      if (["loss", "fitness", "endurance"].includes(g)) (0, import_strict.default)(plan.some((d) => d.blocks.some((b2) => b2.kind === "cardio")));
      if (g === "mobility") (0, import_strict.default)(plan.some((d) => d.blocks.some((b2) => b2.kind === "mobility")));
    }
  }
});
check("Preferred/disliked/exact gym selection and core rotation", () => {
  const id = "Machine_Bench_Press";
  const q = { ...p, preferredExerciseIds: [id] };
  (0, import_strict.default)(makePlan(q)[0].slots.some((s) => s.exId === id));
  (0, import_strict.default)(!makePlan({ ...q, dislikedExerciseIds: [id] }).flatMap((d) => d.slots).some((s) => s.exId === id));
  const ids2 = makePlan(p).flatMap((d) => d.slots).filter((s) => byId[s.exId].group === "core").map((s) => s.exId);
  import_strict.default.equal(new Set(ids2).size, ids2.length);
  const gym = { id: "g", name: "One machine", equipment: ["machine"], exerciseIds: [id], exact: true, bars: [20], plates: [{ kg: 5, pairs: 2 }] };
  const slots = makePlan({ ...p, gyms: [gym], activeGymId: "g" }).flatMap((d) => d.slots);
  (0, import_strict.default)(slots.every((s) => byId[s.exId].eq === "body" || s.exId === id));
});
var coverage = [];
var eqs = Object.keys(equipment);
for (let mask = 1; mask < 1 << eqs.length; mask++) {
  const available = eqs.filter((_, i) => mask >> i & 1);
  const q = { ...p, equipment: available };
  for (const slot of makePlan(q).flatMap((d) => d.slots)) if (!alternatives(slot.exId, q).length) coverage.push({ equipment: available, id: slot.exId });
}
results.push({ name: "Alternative coverage across all 255 equipment category combinations", status: coverage.length ? "partial" : "passed", slotsWithoutAlternative: coverage.length, explanation: "Unsupported combinations use explicit no-alternative/move-to-end state; never invent a movement equivalent." });
check("Nutrition unspecified-sex fallback and correct percentage/macro arithmetic", () => {
  for (const sex of ["male", "female", "unspecified"]) {
    for (const goal2 of ["loss", "weight", "strength"]) {
      const n = nutrition({ ...p, sex, goal: goal2 });
      (0, import_strict.default)(n);
      (0, import_strict.default)(Math.abs(n.protein * 4 + n.carbs * 4 + n.fat * 9 - n.target) < 8);
      import_strict.default.equal(n.multiplier, goal2 === "loss" ? 0.85 : goal2 === "weight" ? 1.1 : 1);
    }
  }
  import_strict.default.equal(nutrition({ ...p, health: "medical" }), null);
  import_strict.default.equal(nutrition({ ...p, weight: 35, goal: "loss" }), null);
});
check("Meal vegetarian/allergen filtering, accurate displayed totals and unresolved allergy block", () => {
  const meal = mealPlan({ ...p, diet: "vegetarian", allergenTags: ["milk", "eggs"], allergies: "", foodReview: false });
  (0, import_strict.default)(meal);
  (0, import_strict.default)(meal.items.every((x) => x.veg && !x.allergens.some((a2) => ["milk", "eggs"].includes(a2))));
  (0, import_strict.default)(Math.abs(meal.calories - (meal.protein * 4 + meal.carbs * 4 + meal.fat * 9)) < 0.01);
  import_strict.default.equal(mealPlan({ ...p, allergies: "unrecognized allergy", foodReview: false }), null);
});
function session(i, weight = 20, reps = 12) {
  const slots = makePlan(p)[0].slots;
  return sessionSchema.parse({ id: "s" + i, date: `2026-09-${String(10 + i * 2).padStart(2, "0")}`, weekday: 0, startedAt: "2026-09-10T12:00:00Z", finishedAt: "2026-09-10T13:00:00Z", title: "QA", titleEn: "QA", targetMinutes: 45, slots, sets: Array.from({ length: slots[0].sets }, (_, n) => ({ id: `s${i}-${n}`, slotKey: slots[0].key, exId: slots[0].exId, weight, reps, rir: 3, at: "2026-09-10T12:00:00Z" })), skipped: [], notes: "", effort: 5, extras: [], swaps: [], goalSnapshot: "muscle" });
}
var b = { ...a.profiles[0], sessions: [0, 1, 2, 3].map((i) => session(i)) };
check("4-session progression, plateau and PR accuracy", () => {
  const id = b.sessions[0].slots[0].exId;
  const adv = loadAdvice(id, b);
  (0, import_strict.default)(adv.increase);
  (0, import_strict.default)(adv.next > 20 && adv.next <= 21);
  (0, import_strict.default)(adv.plateau);
  const record = { ...b.sessions[0].sets[0], weight: 22 };
  (0, import_strict.default)(prTypes(record, b.sessions.flatMap((s) => s.sets)).includes("weight"));
  (0, import_strict.default)(!prTypes(b.sessions[0].sets[0], b.sessions.flatMap((s) => s.sets)).includes("weight"));
});
check("Plate arithmetic both directions, finite quantities, round-down", () => {
  import_strict.default.equal(plateTotal(20, [{ kg: 10, pairs: 2 }, { kg: 5, pairs: 1 }]), 70);
  const s = plateSolve(72, 20, [{ kg: 10, pairs: 2 }, { kg: 5, pairs: 1 }]);
  import_strict.default.equal(s.total, 70);
  import_strict.default.equal(s.exact, false);
  import_strict.default.equal(plateSolve(70, 20, [{ kg: 10, pairs: 2 }, { kg: 5, pairs: 1 }]).exact, true);
  import_strict.default.equal(plateSolve(15, 20, []).total, 20);
});
check("Comeback after missed scheduled session; no fabricated historic adherence", () => {
  (0, import_strict.default)(comebackDue(b, /* @__PURE__ */ new Date("2026-09-29T12:00:00")));
  const weeks = adherence({ ...b, profile: { ...p, planHistory: [] } }, /* @__PURE__ */ new Date("2026-09-29"));
  (0, import_strict.default)(weeks.every((w) => w.planned === 0 && w.percent === null));
});
check("Physio candidate map exists and remains disabled without actual review", () => {
  (0, import_strict.default)(Object.values(injuryCardioMap).every((v) => v.reviewed === false));
  (0, import_strict.default)(import_node_fs.default.readFileSync("lib/fitness.ts", "utf8").includes("MUST be reviewed by a qualified physiotherapist before release"));
});
check("Batch1 optional rest state preserves old envelopes, identities and historical zero RIR", () => {
  const historical = JSON.parse(JSON.stringify({ profiles: [b], activeId: p.id, schemaVersion: 2 }));
  historical.profiles[0].sessions[0].sets[0].rir = 0;
  historical.profiles[0].sessions[0].sets[0].exId = "unknown-historical-exercise";
  const raw = JSON.stringify(historical), loaded = migrate(historical);
  import_strict.default.equal(JSON.stringify(historical), raw);
  import_strict.default.deepEqual(loaded, historical);
  import_strict.default.equal(loaded.profiles[0].sessions[0].sets[0].id, b.sessions[0].sets[0].id);
  for (const deadline of [Date.now() + 12e4, null]) {
    const next = JSON.parse(raw);
    next.profiles[0].sessions[0].restState = { deadline, totalSeconds: 120 };
    import_strict.default.deepEqual(migrate(next), next);
    import_strict.default.deepEqual(migrate(migrate(next)), next);
  }
  const future = { ...historical, schemaVersion: 3 };
  import_strict.default.throws(() => migrate(future), /FUTURE/);
  const invalid = JSON.parse(raw);
  invalid.profiles[0].sessions[0].restState = { deadline: "bad", totalSeconds: 120 };
  import_strict.default.throws(() => migrate(invalid));
});
var store = /* @__PURE__ */ new Map();
globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, v) };
async function storage() {
  store.set(KEY, JSON.stringify({ data: { profiles: [{ profile: oldProfile, sessions: [], reports: [] }], activeId: "qa" }, revision: 5 }));
  const loaded = await (await localState("/api/state")).json();
  (0, import_strict.default)(loaded.data.schemaVersion === 2);
  (0, import_strict.default)(store.has(KEY + "-pre-v2"));
  const result = await localState("/api/state", { method: "PUT", body: JSON.stringify({ data: loaded.data, revision: 5 }) });
  (0, import_strict.default)(result.ok);
  (0, import_strict.default)(!(await localState("/api/state", { method: "PUT", body: JSON.stringify({ data: loaded.data, revision: 5 }) })).ok);
  results.push({ name: "Same localStorage key, pre-migration backup, persistence and revision409", status: "passed" });
  const backup = store.get(KEY + "-pre-v2");
  const saved = store.get(KEY);
  store.set(KEY, "not json");
  await import_strict.default.rejects(() => localState("/api/state"));
  import_strict.default.equal(store.get(KEY), "not json");
  const future = JSON.stringify({ data: { ...a, schemaVersion: 3 }, revision: 9 });
  store.set(KEY, future);
  await import_strict.default.rejects(() => localState("/api/state"));
  import_strict.default.equal(store.get(KEY), future);
  store.set(KEY, JSON.stringify({ data: { profiles: [{ profile: oldProfile, sessions: [], reports: [] }], activeId: "qa" }, revision: 9 }));
  await localState("/api/state");
  import_strict.default.equal(store.get(KEY + "-pre-v2"), backup);
  store.set(KEY, saved);
  const before = store.get(KEY);
  const bad = JSON.parse(saved);
  bad.data.profiles[0].sessions = [{ ...b.sessions[0], restState: { deadline: -1, totalSeconds: 120 } }];
  await import_strict.default.rejects(() => localState("/api/state", { method: "PUT", body: JSON.stringify(bad) }));
  import_strict.default.equal(store.get(KEY), before);
  import_strict.default.equal(store.get(KEY + "-pre-v2"), backup);
  results.push({ name: "Batch1 corruption/future-version protection, rejected writes and original migration backup preserved", status: "passed" });
  import_node_fs.default.writeFileSync("tests/results.json", JSON.stringify({ results, coverage }, null, 2));
  import_node_fs.default.writeFileSync("tests/fixture.json", JSON.stringify({ data: { ...a, profiles: [b] }, revision: 0 }));
  console.log("PASS storage migration and409; coverage gaps", coverage.length);
}
void storage();
