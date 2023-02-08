"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OdersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const oders_models_1 = require("../models/oders.models");
const Oders_controller_1 = require("./Oders.controller");
const Oders_service_1 = require("./Oders.service");
let OdersModule = class OdersModule {
};
OdersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: oders_models_1.Oder.name, schema: oders_models_1.OderSchema }]),
        ],
        controllers: [Oders_controller_1.OdersControlle],
        providers: [Oders_service_1.OdersService],
    })
], OdersModule);
exports.OdersModule = OdersModule;
//# sourceMappingURL=oders.module.js.map