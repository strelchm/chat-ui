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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ModelAndView } from '../models';
/**
 * BasicErrorControllerApi - axios parameter creator
 * @export
 */
export const BasicErrorControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingDELETE: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/error`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingGET: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/error`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingHEAD: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/error`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'HEAD', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingOPTIONS: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/error`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'OPTIONS', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingPATCH: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/error`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingPOST: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/error`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingPUT: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/error`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BasicErrorControllerApi - functional programming interface
 * @export
 */
export const BasicErrorControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BasicErrorControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async errorHtmlUsingDELETE(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelAndView>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.errorHtmlUsingDELETE(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async errorHtmlUsingGET(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelAndView>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.errorHtmlUsingGET(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async errorHtmlUsingHEAD(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelAndView>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.errorHtmlUsingHEAD(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async errorHtmlUsingOPTIONS(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelAndView>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.errorHtmlUsingOPTIONS(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async errorHtmlUsingPATCH(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelAndView>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.errorHtmlUsingPATCH(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async errorHtmlUsingPOST(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelAndView>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.errorHtmlUsingPOST(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async errorHtmlUsingPUT(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelAndView>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.errorHtmlUsingPUT(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BasicErrorControllerApi - factory interface
 * @export
 */
export const BasicErrorControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BasicErrorControllerApiFp(configuration)
    return {
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingDELETE(options?: any): AxiosPromise<ModelAndView> {
            return localVarFp.errorHtmlUsingDELETE(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingGET(options?: any): AxiosPromise<ModelAndView> {
            return localVarFp.errorHtmlUsingGET(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingHEAD(options?: any): AxiosPromise<ModelAndView> {
            return localVarFp.errorHtmlUsingHEAD(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingOPTIONS(options?: any): AxiosPromise<ModelAndView> {
            return localVarFp.errorHtmlUsingOPTIONS(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingPATCH(options?: any): AxiosPromise<ModelAndView> {
            return localVarFp.errorHtmlUsingPATCH(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingPOST(options?: any): AxiosPromise<ModelAndView> {
            return localVarFp.errorHtmlUsingPOST(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary errorHtml
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        errorHtmlUsingPUT(options?: any): AxiosPromise<ModelAndView> {
            return localVarFp.errorHtmlUsingPUT(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BasicErrorControllerApi - object-oriented interface
 * @export
 * @class BasicErrorControllerApi
 * @extends {BaseAPI}
 */
export class BasicErrorControllerApi extends BaseAPI {
    /**
     * 
     * @summary errorHtml
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BasicErrorControllerApi
     */
    public errorHtmlUsingDELETE(options?: any) {
        return BasicErrorControllerApiFp(this.configuration).errorHtmlUsingDELETE(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary errorHtml
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BasicErrorControllerApi
     */
    public errorHtmlUsingGET(options?: any) {
        return BasicErrorControllerApiFp(this.configuration).errorHtmlUsingGET(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary errorHtml
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BasicErrorControllerApi
     */
    public errorHtmlUsingHEAD(options?: any) {
        return BasicErrorControllerApiFp(this.configuration).errorHtmlUsingHEAD(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary errorHtml
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BasicErrorControllerApi
     */
    public errorHtmlUsingOPTIONS(options?: any) {
        return BasicErrorControllerApiFp(this.configuration).errorHtmlUsingOPTIONS(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary errorHtml
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BasicErrorControllerApi
     */
    public errorHtmlUsingPATCH(options?: any) {
        return BasicErrorControllerApiFp(this.configuration).errorHtmlUsingPATCH(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary errorHtml
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BasicErrorControllerApi
     */
    public errorHtmlUsingPOST(options?: any) {
        return BasicErrorControllerApiFp(this.configuration).errorHtmlUsingPOST(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary errorHtml
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BasicErrorControllerApi
     */
    public errorHtmlUsingPUT(options?: any) {
        return BasicErrorControllerApiFp(this.configuration).errorHtmlUsingPUT(options).then((request) => request(this.axios, this.basePath));
    }
}
