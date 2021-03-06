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


import { UserRoomDto } from './user-room-dto';

/**
 * 
 * @export
 * @interface RoomDto
 */
export interface RoomDto {
    /**
     * 
     * @type {string}
     * @memberof RoomDto
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomDto
     */
    type?: RoomDtoTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RoomDto
     */
    updated?: string;
    /**
     * 
     * @type {Set<UserRoomDto>}
     * @memberof RoomDto
     */
    userRooms?: Set<UserRoomDto>;
}

/**
    * @export
    * @enum {string}
    */
export enum RoomDtoTypeEnum {
    BOT = 'BOT',
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}



