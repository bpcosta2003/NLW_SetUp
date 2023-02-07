"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var firstHabitId = "0730ffac-d039-4194-9571-01aa2aa0efbd";
var firstHabitCreationDate = new Date("2022-12-31T03:00:00.000");
var secondHabitId = "00880d75-a933-4fef-94ab-e05744435297";
var secondHabitCreationDate = new Date("2023-01-03T03:00:00.000");
var thirdHabitId = "fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00";
var thirdHabitCreationDate = new Date("2023-01-08T03:00:00.000");
function run() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.habit.deleteMany()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.day.deleteMany()];
                case 2:
                    _a.sent();
                    /**
                     * Create habits
                     */
                    return [4 /*yield*/, Promise.all([
                            prisma.habit.create({
                                data: {
                                    id: firstHabitId,
                                    title: "Beber 2L água",
                                    created_at: firstHabitCreationDate,
                                    weekDays: {
                                        create: [{ week_day: 1 }, { week_day: 2 }, { week_day: 3 }]
                                    }
                                }
                            }),
                            prisma.habit.create({
                                data: {
                                    id: secondHabitId,
                                    title: "Exercitar",
                                    created_at: secondHabitCreationDate,
                                    weekDays: {
                                        create: [{ week_day: 3 }, { week_day: 4 }, { week_day: 5 }]
                                    }
                                }
                            }),
                            prisma.habit.create({
                                data: {
                                    id: thirdHabitId,
                                    title: "Dormir 8h",
                                    created_at: thirdHabitCreationDate,
                                    weekDays: {
                                        create: [
                                            { week_day: 1 },
                                            { week_day: 2 },
                                            { week_day: 3 },
                                            { week_day: 4 },
                                            { week_day: 5 },
                                        ]
                                    }
                                }
                            }),
                        ])];
                case 3:
                    /**
                     * Create habits
                     */
                    _a.sent();
                    return [4 /*yield*/, Promise.all([
                            /**
                             * Habits (Complete/Available): 1/1
                             */
                            prisma.day.create({
                                data: {
                                    /** Monday */
                                    date: new Date("2023-01-02T03:00:00.000z"),
                                    dayHabits: {
                                        create: {
                                            habit_id: firstHabitId
                                        }
                                    }
                                }
                            }),
                            /**
                             * Habits (Complete/Available): 1/1
                             */
                            prisma.day.create({
                                data: {
                                    /** Friday */
                                    date: new Date("2023-01-06T03:00:00.000z"),
                                    dayHabits: {
                                        create: {
                                            habit_id: firstHabitId
                                        }
                                    }
                                }
                            }),
                            /**
                             * Habits (Complete/Available): 2/2
                             */
                            prisma.day.create({
                                data: {
                                    /** Wednesday */
                                    date: new Date("2023-01-04T03:00:00.000z"),
                                    dayHabits: {
                                        create: [{ habit_id: firstHabitId }, { habit_id: secondHabitId }]
                                    }
                                }
                            }),
                        ])];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
run()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })["catch"](function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
