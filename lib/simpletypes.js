/**
 * Created by sparx on 23/12/14.
 *
 * A collection of util functions to ensure type safety.
 *
 */


"use strict";

/**
 * check if property is a real boolean type
 *
 * @param {*} property - property to check
 * @returns {boolean} true for Boolean type, false for any other
 */
function isBoolean(property) {

    return (property === false || property === true);
}
module.exports.isBoolean = isBoolean;

/**
 * check if property is a string
 *
 * @method isString
 * @param {*} property - property to check
 * @returns {boolean}
 */
function isString(property) {

    return (typeof property === 'string');
}
module.exports.isString = isString;

/**
 * check if property is an Integer
 *
 * @method isInteger
 * @param {*} property - property to check
 * @returns {boolean}
 */
function isInteger(property) {

    return (!isNaN(property) &&
    (property % 1 === 0) && !isBoolean(property) && !isString(property) &&
    Object.prototype.toString.call(property) !== '[object Array]' &&
    property !== null);
}
module.exports.isInteger = isInteger;

/**
 * check if property is an Float. Returns false for Integers.
 *
 * @method isFloat
 * @param {*} property - property to check
 * @returns {boolean}
 */
function isFloat(property) {
    return (!isNaN(property) &&
    (property % 1 !== 0) && !isBoolean(property) && !isString(property) &&
    Object.prototype.toString.call(property) !== '[object Array]');
}
module.exports.isFloat = isFloat;


/**
 * check if property is either an Integer or an Float
 *
 * @method isNumber
 * @param {*} property - property to check
 * @returns {*}
 */
function isNumber(property) {
    return (isInteger(property) || isFloat(property));
}
module.exports.isNumber = isNumber;

/**
 * check if property is null
 *
 * @method isNull
 * @param {*} property - property to check
 * @returns {boolean}
 */
function isNull(property) {
    return property === null;
}
module.exports.isNull = isNull;

/**
 * check if property is undefined
 *
 * @method isUndefined
 * @param {*} property - property to check
 * @returns {boolean}
 */
function isUndefined(property){
    return (typeof property === "undefined");
}
module.exports.isUndefined = isUndefined;

/**
 *  check if property is empty.
 *
 *  returns true for:
 *  - null
 *  - false
 *  - empty String
 *  - 0
 *  - 0.0
 *  - empty Array
 *
 * @method isEmpty
 * @param {*} property - property to check
 * @returns {boolean}
 */
function isEmpty(property){
    return (property === 0 || property === 0.0 || property === "" || property === null || property === false ||
        (Object.prototype.toString.call(property) === '[object Array]' && property.length === 0));
}
module.exports.isEmpty = isEmpty;
