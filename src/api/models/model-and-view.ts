/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { View } from './view';

/**
 * 
 * @export
 * @interface ModelAndView
 */
export interface ModelAndView {
    /**
     * 
     * @type {boolean}
     * @memberof ModelAndView
     */
    empty?: boolean;
    /**
     * 
     * @type {object}
     * @memberof ModelAndView
     */
    model?: object;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ModelAndView
     */
    modelMap?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof ModelAndView
     */
    reference?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelAndView
     */
    status?: ModelAndViewStatusEnum;
    /**
     * 
     * @type {View}
     * @memberof ModelAndView
     */
    view?: View;
    /**
     * 
     * @type {string}
     * @memberof ModelAndView
     */
    viewName?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ModelAndViewStatusEnum {
    ACCEPTED = 'ACCEPTED',
    ALREADY_REPORTED = 'ALREADY_REPORTED',
    BAD_GATEWAY = 'BAD_GATEWAY',
    BAD_REQUEST = 'BAD_REQUEST',
    BANDWIDTH_LIMIT_EXCEEDED = 'BANDWIDTH_LIMIT_EXCEEDED',
    CHECKPOINT = 'CHECKPOINT',
    CONFLICT = 'CONFLICT',
    CONTINUE = 'CONTINUE',
    CREATED = 'CREATED',
    DESTINATION_LOCKED = 'DESTINATION_LOCKED',
    EXPECTATION_FAILED = 'EXPECTATION_FAILED',
    FAILED_DEPENDENCY = 'FAILED_DEPENDENCY',
    FORBIDDEN = 'FORBIDDEN',
    FOUND = 'FOUND',
    GATEWAY_TIMEOUT = 'GATEWAY_TIMEOUT',
    GONE = 'GONE',
    HTTP_VERSION_NOT_SUPPORTED = 'HTTP_VERSION_NOT_SUPPORTED',
    IM_USED = 'IM_USED',
    INSUFFICIENT_SPACE_ON_RESOURCE = 'INSUFFICIENT_SPACE_ON_RESOURCE',
    INSUFFICIENT_STORAGE = 'INSUFFICIENT_STORAGE',
    INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
    I_AM_A_TEAPOT = 'I_AM_A_TEAPOT',
    LENGTH_REQUIRED = 'LENGTH_REQUIRED',
    LOCKED = 'LOCKED',
    LOOP_DETECTED = 'LOOP_DETECTED',
    METHOD_FAILURE = 'METHOD_FAILURE',
    METHOD_NOT_ALLOWED = 'METHOD_NOT_ALLOWED',
    MOVED_PERMANENTLY = 'MOVED_PERMANENTLY',
    MOVED_TEMPORARILY = 'MOVED_TEMPORARILY',
    MULTIPLE_CHOICES = 'MULTIPLE_CHOICES',
    MULTI_STATUS = 'MULTI_STATUS',
    NETWORK_AUTHENTICATION_REQUIRED = 'NETWORK_AUTHENTICATION_REQUIRED',
    NON_AUTHORITATIVE_INFORMATION = 'NON_AUTHORITATIVE_INFORMATION',
    NOT_ACCEPTABLE = 'NOT_ACCEPTABLE',
    NOT_EXTENDED = 'NOT_EXTENDED',
    NOT_FOUND = 'NOT_FOUND',
    NOT_IMPLEMENTED = 'NOT_IMPLEMENTED',
    NOT_MODIFIED = 'NOT_MODIFIED',
    NO_CONTENT = 'NO_CONTENT',
    OK = 'OK',
    PARTIAL_CONTENT = 'PARTIAL_CONTENT',
    PAYLOAD_TOO_LARGE = 'PAYLOAD_TOO_LARGE',
    PAYMENT_REQUIRED = 'PAYMENT_REQUIRED',
    PERMANENT_REDIRECT = 'PERMANENT_REDIRECT',
    PRECONDITION_FAILED = 'PRECONDITION_FAILED',
    PRECONDITION_REQUIRED = 'PRECONDITION_REQUIRED',
    PROCESSING = 'PROCESSING',
    PROXY_AUTHENTICATION_REQUIRED = 'PROXY_AUTHENTICATION_REQUIRED',
    REQUESTED_RANGE_NOT_SATISFIABLE = 'REQUESTED_RANGE_NOT_SATISFIABLE',
    REQUEST_ENTITY_TOO_LARGE = 'REQUEST_ENTITY_TOO_LARGE',
    REQUEST_HEADER_FIELDS_TOO_LARGE = 'REQUEST_HEADER_FIELDS_TOO_LARGE',
    REQUEST_TIMEOUT = 'REQUEST_TIMEOUT',
    REQUEST_URI_TOO_LONG = 'REQUEST_URI_TOO_LONG',
    RESET_CONTENT = 'RESET_CONTENT',
    SEE_OTHER = 'SEE_OTHER',
    SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
    SWITCHING_PROTOCOLS = 'SWITCHING_PROTOCOLS',
    TEMPORARY_REDIRECT = 'TEMPORARY_REDIRECT',
    TOO_EARLY = 'TOO_EARLY',
    TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS',
    UNAUTHORIZED = 'UNAUTHORIZED',
    UNAVAILABLE_FOR_LEGAL_REASONS = 'UNAVAILABLE_FOR_LEGAL_REASONS',
    UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY',
    UNSUPPORTED_MEDIA_TYPE = 'UNSUPPORTED_MEDIA_TYPE',
    UPGRADE_REQUIRED = 'UPGRADE_REQUIRED',
    URI_TOO_LONG = 'URI_TOO_LONG',
    USE_PROXY = 'USE_PROXY',
    VARIANT_ALSO_NEGOTIATES = 'VARIANT_ALSO_NEGOTIATES'
}



