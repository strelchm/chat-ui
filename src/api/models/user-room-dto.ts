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



/**
 * 
 * @export
 * @interface UserRoomDto
 */
export interface UserRoomDto {
    /**
     * 
     * @type {string}
     * @memberof UserRoomDto
     */
    blockedTime?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRoomDto
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRoomDto
     */
    roomId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRoomDto
     */
    updated?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRoomDto
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRoomDto
     */
    userRoomRole?: UserRoomDtoUserRoomRoleEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum UserRoomDtoUserRoomRoleEnum {
    BLOCKED_USER = 'BLOCKED_USER',
    MODERATOR = 'MODERATOR',
    OWNER = 'OWNER',
    USER = 'USER'
}



