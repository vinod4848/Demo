/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { OderDto } from 'src/dto/oders.dto';
import { OdersService } from './Oders.service';
export declare class OdersControlle {
    private readonly service;
    constructor(service: OdersService);
    Add(body: OderDto): Promise<import("../models/oders.models").Oder & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    FindAll(): import("mongoose").Query<(import("../models/oders.models").Oder & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("../models/oders.models").Oder & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../models/oders.models").OderDocument>;
    FindOne(id: string): import("mongoose").Query<import("../models/oders.models").Oder & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, import("../models/oders.models").Oder & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../models/oders.models").OderDocument>;
    Update(id: string, body: OderDto): import("mongoose").Query<import("../models/oders.models").Oder & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, import("../models/oders.models").Oder & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../models/oders.models").OderDocument>;
    Delete(id: string): import("mongoose").Query<any, import("../models/oders.models").Oder & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../models/oders.models").OderDocument>;
}
