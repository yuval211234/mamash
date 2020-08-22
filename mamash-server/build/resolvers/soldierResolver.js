"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const soldier_1 = require("../types/soldier");
const soldierTsFileDal_1 = require("../ts-file-dal/soldierTsFileDal");
let SoldierResolver = class SoldierResolver {
    constructor() {
        this.soldierDal = soldierTsFileDal_1.soldierTsFileDal;
    }
    soldiers(teamId) {
        let soldiers = [];
        if (teamId) {
            soldiers = this.soldierDal.getSoldiersByTeam(teamId);
        }
        else {
            soldiers = this.soldierDal.getAllSoldiers();
        }
        return soldiers;
    }
    updateSoldierStatus(id, newStatus, reason) {
        return this.soldierDal.changeSoldierStatusById(id, newStatus, reason);
    }
    async resetAllSoldiersByTeam(id) {
        return this.soldierDal.resetAllSoldiersByTeam(id);
    }
    async resetAllSoldiers() {
        return this.soldierDal.resetAllSoldiers();
    }
};
__decorate([
    type_graphql_1.Query(returns => [soldier_1.Soldier]),
    __param(0, type_graphql_1.Arg("teamId", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SoldierResolver.prototype, "soldiers", null);
__decorate([
    type_graphql_1.Mutation(returns => Boolean),
    __param(0, type_graphql_1.Arg("id")),
    __param(1, type_graphql_1.Arg("newStatus")),
    __param(2, type_graphql_1.Arg("reason")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], SoldierResolver.prototype, "updateSoldierStatus", null);
__decorate([
    type_graphql_1.Mutation(returns => Boolean),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SoldierResolver.prototype, "resetAllSoldiersByTeam", null);
__decorate([
    type_graphql_1.Mutation(returns => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SoldierResolver.prototype, "resetAllSoldiers", null);
SoldierResolver = __decorate([
    type_graphql_1.Resolver(soldier_1.Soldier),
    __metadata("design:paramtypes", [])
], SoldierResolver);
exports.SoldierResolver = SoldierResolver;
