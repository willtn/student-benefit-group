(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "funfix-core", "address"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var funfix_core_1 = require("funfix-core");
    var address_1 = require("address");
    var StudentBenefitGroup = /** @class */ (function () {
        function StudentBenefitGroup(id, owner, pledge, data, members) {
            this.id = id;
            this.owner = owner;
            this.pledge = pledge;
            this.data = data;
            this.members = members;
        }
        StudentBenefitGroup.fromRaw = function (raw) {
            return new StudentBenefitGroup(raw.id, raw.owner, raw.pledge, StudentBenefitGroupData.fromRaw(raw.data), raw.members);
        };
        StudentBenefitGroup.toRaw = function (group) {
            return {
                id: group.id,
                owner: group.owner,
                pledge: group.pledge,
                data: group.data.toRaw(),
                members: group.members
            };
        };
        return StudentBenefitGroup;
    }());
    exports.StudentBenefitGroup = StudentBenefitGroup;
    var StudentBenefitGroupData = /** @class */ (function () {
        function StudentBenefitGroupData(id, name, description, website, email, facebook, twitter, address) {
            if (name === void 0) { name = funfix_core_1.Option.none(); }
            if (description === void 0) { description = funfix_core_1.Option.none(); }
            if (website === void 0) { website = funfix_core_1.Option.none(); }
            if (email === void 0) { email = funfix_core_1.Option.none(); }
            if (facebook === void 0) { facebook = funfix_core_1.Option.none(); }
            if (twitter === void 0) { twitter = funfix_core_1.Option.none(); }
            if (address === void 0) { address = new address_1.Address(''); }
            this.id = id;
            this.name = name;
            this.description = description;
            this.website = website;
            this.email = email;
            this.facebook = facebook;
            this.twitter = twitter;
            this.address = address;
        }
        StudentBenefitGroupData.fromRaw = function (raw) {
            return new StudentBenefitGroupData(raw.id, funfix_core_1.Option.of(raw.name), funfix_core_1.Option.of(raw.description), funfix_core_1.Option.of(raw.website), funfix_core_1.Option.of(raw.email), funfix_core_1.Option.of(raw.facebook), funfix_core_1.Option.of(raw.twitter), address_1.Address.fromRaw(raw.address));
        };
        StudentBenefitGroupData.toRaw = function (data) {
            return {
                address: address_1.Address.toRaw(data.address),
                description: data.description.orUndefined(),
                email: data.email.orUndefined(),
                facebook: data.facebook.orUndefined(),
                id: data.id,
                name: data.name.orUndefined(),
                twitter: data.twitter.orUndefined(),
                website: data.website.orUndefined()
            };
        };
        StudentBenefitGroupData.prototype.toRaw = function () {
            return StudentBenefitGroupData.toRaw(this);
        };
        return StudentBenefitGroupData;
    }());
    exports.StudentBenefitGroupData = StudentBenefitGroupData;
    var StudentBenefitGroupSubscription = /** @class */ (function () {
        function StudentBenefitGroupSubscription(id, owner, // subscriber
            group // subscribee
        ) {
            this.id = id;
            this.owner = owner;
            this.group = group; // subscribee
        }
        return StudentBenefitGroupSubscription;
    }());
    exports.StudentBenefitGroupSubscription = StudentBenefitGroupSubscription;
});
//# sourceMappingURL=index.js.map