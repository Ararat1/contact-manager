import isEmpty from "validator/lib/isEmpty";
import isLength from "validator/lib/isLength";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import isURL from "validator/lib/isURL";

// validate input values in <AddContact /> and <EditContact />
export class Validator {
    static isUsername(str) {
        return (
            !isEmpty(str) &&
            isAlphanumeric(str, "en-US") &&
            isLength(str, { min: 2, max: 16 })
        );
    }

    static isEmail(str) {
        return !isEmpty(str) && isEmail(str);
    }

    static isPhoneNumber(str) {
        return !isEmpty(str) && isMobilePhone(str, "am-AM");
    }

    static isNotes(str) {
        return (
            !isEmpty(str) &&
            isAlphanumeric(str, "en-US") &&
            isLength(str, { min: 2, max: 8 })
        );
    }

    static isLink(str) {
        return (
            // field might be empty, because github, linkedin and skype links are optional
            isEmpty(str) || isURL(str, {
                protocols: ["http", "https"]
            })
        )
    }
}