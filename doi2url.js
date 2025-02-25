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
Object.defineProperty(exports, "__esModule", { value: true });
exports.doi2url = doi2url;
/**
 * doi2url
 * returns information about a DOI
 * ex: doi2url('https://doi.org/10.1038/s41591-024-03173-6')
 * @param url string
 * @returns string
 */
function doi2url(url) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const [_, doi] = url.split('doi.org/');
        try {
            const response = yield fetch(`https://doi.org/api/handles/${doi}`);
            const data = yield response.json();
            if (data.values) {
                const info = data.values.find(({ type }) => type === 'URL');
                const url = ((_a = info === null || info === void 0 ? void 0 : info.data) === null || _a === void 0 ? void 0 : _a.value) || null;
                return url;
            }
            return null;
        }
        catch (e) {
            return null;
        }
    });
}
