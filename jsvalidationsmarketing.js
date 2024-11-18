(function () {
    const validations = {
        // Regular expressions for validations
        htmlAndSpecialChars: /^[a-zA-Z0-9\s.,!?'"()\-:;]+$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phoneNumber: /^[+\d]+$/,
        noHTMLTags: /^(?!.*<[^>]*>).*$/,
    };

    const validationRules = {
        debugger;
        // Mapping of IDs to their validation rules
        "3f746946-34b4-442c-a677-e232cdd2bc40": { // First Name
            regex: validations.htmlAndSpecialChars,
            message: "First name should not contain HTML tags or special characters like $, \" etc.",
        },
        "e1dfc514-f301-4cb2-855a-4c8fa8331207": { // Last Name
            regex: validations.htmlAndSpecialChars,
            message: "Last name should not contain HTML tags or special characters like $, \" etc.",
        },
        "7f685ebb-7c54-4cff-a1bc-772562d25c38": { // Business Email Address
            regex: validations.email,
            message: "Please enter a valid email address.",
        },
        "ac9ddb60-616f-4f12-b4e2-9202f688ed2f": { // Company Name
            regex: validations.noHTMLTags,
            message: "Company name should not contain HTML tags.",
        },
        "7646c7aa-3a6d-4b55-9a82-4d7a255a7eb3": { // Job Title
            regex: validations.htmlAndSpecialChars,
            message: "Job title should not contain HTML tags or special characters like $, \" etc.",
        },
        "ac6a065d-364e-40d6-9a19-d9bf1ed4aa3e": { // Phone Number
            regex: validations.phoneNumber,
            message: "Phone number should contain only numbers and '+' sign.",
        },
        "f826b004-72ef-460c-bcc5-bd50e3b038bd": { // Website
            regex: validations.noHTMLTags,
            message: "Website should not contain HTML tags.",
        },
        "fc0308ab-609e-45c8-9f5e-9eca3511dc39": { // City
            regex: validations.htmlAndSpecialChars,
            message: "City should not contain HTML tags or special characters like $, \" etc.",
        },
        "7e08df96-7b9a-ee11-be37-000d3a258ab3": { // Your Message
            regex: validations.noHTMLTags,
            message: "Message should not contain HTML tags.",
        },
    };

    const validateField = (field, rule) => {
        const value = field.value.trim();
        if (!rule.regex.test(value)) {
            field.setCustomValidity(rule.message);
            field.reportValidity();
            return false;
        }
        field.setCustomValidity("");
        return true;
    };

    const attachValidations = () => {
        Object.keys(validationRules).forEach((fieldId) => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener("input", () => {
                    validateField(field, validationRules[fieldId]);
                });
            }
        });
    };

    // Initialize validations on DOMContentLoaded
    debugger;
    document.addEventListener("DOMContentLoaded", attachValidations);
})();
