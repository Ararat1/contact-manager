import escape from "validator/lib/escape";
import trim from "validator/lib/trim";
import normalizeEmail from "validator/lib/normalizeEmail";

// format input values in <AddContact /> and <EditContact />
export class FormatText {
    static email(str) {
        return trim(escape(normalizeEmail(str)));
    }

    static text(str) {
        return trim(escape(str));
    }

    static telNumber(str) {
        return trim(str);
    }
}