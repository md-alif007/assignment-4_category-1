function validEmail(email) {

    if (typeof (email) !== "string") {
        return "Invalid";
    }

    if (
        email.startsWith("@") ||
        email.startsWith("+") ||
        email.startsWith("_") ||
        email.startsWith("-") ||
        email.startsWith(".")
    ) {
        return false;
    }

    if (!email.includes("@") || email.indexOf("@") === 0) {
        return false;
    }

    if (email.includes(" ")) {
        return false;
    }

    if (!email.endsWith(".com")) {
        return false;
    }
}


