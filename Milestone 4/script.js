// TypeScript Code
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c;
    var form = document.getElementById("resume-form");
    var resumeDisplay = document.getElementById("resume-display");
    var profilePictureInput = document.getElementById("profile-picture");
    var profilePictureURL = "";
    profilePictureInput.addEventListener("change", function () {
        var _a;
        var file = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                profilePictureURL = reader_1.result;
            };
            reader_1.readAsDataURL(file);
        }
    });
    var addField = function (container, template) {
        var div = document.createElement("div");
        div.classList.add("entry");
        div.innerHTML = template;
        container.appendChild(div);
    };
    (_a = document.getElementById("add-education")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var template = "\n        <input type=\"text\" name=\"degree\" placeholder=\"Enter Your Degree Name\" required>\n        <input type=\"text\" name=\"institution\" placeholder=\"Enter Your Institution Name\" required>\n        <input type=\"text\" name=\"year\" placeholder=\"Year\" required>\n      ";
        addField(document.getElementById("education-section"), template);
    });
    (_b = document.getElementById("add-experience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        var template = "\n        <input type=\"text\" name=\"job-title\" placeholder=\"Enter Your Job Title\" required>\n        <input type=\"text\" name=\"company\" placeholder=\"Enter Company Name\" required>\n        <input type=\"text\" name=\"duration\" placeholder=\"Duration\" required>\n        <textarea name=\"responsibilities\" placeholder=\"Responsibilities\" required></textarea>\n      ";
        addField(document.getElementById("experience-section"), template);
    });
    (_c = document.getElementById("add-skill")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        var template = "<input type=\"text\" name=\"skill\" placeholder=\"Enter Your Skills\" required>";
        addField(document.getElementById("skills-section"), template);
    });
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var educationEntries = Array.from(document.querySelectorAll("#education-section .entry"))
            .map(function (entry) {
            var _a, _b, _c;
            var degree = (_a = entry.querySelector('[name="degree"]')) === null || _a === void 0 ? void 0 : _a.value;
            var institution = (_b = entry.querySelector('[name="institution"]')) === null || _b === void 0 ? void 0 : _b.value;
            var year = (_c = entry.querySelector('[name="year"]')) === null || _c === void 0 ? void 0 : _c.value;
            return "".concat(degree, " from ").concat(institution, " (").concat(year, ")");
        });
        var experiences = Array.from(document.querySelectorAll("#experience-section .entry"))
            .map(function (entry) {
            var _a, _b, _c, _d;
            var jobTitle = (_a = entry.querySelector('[name="job-title"]')) === null || _a === void 0 ? void 0 : _a.value;
            var company = (_b = entry.querySelector('[name="company"]')) === null || _b === void 0 ? void 0 : _b.value;
            var duration = (_c = entry.querySelector('[name="duration"]')) === null || _c === void 0 ? void 0 : _c.value;
            var responsibilities = (_d = entry.querySelector('[name="responsibilities"]')) === null || _d === void 0 ? void 0 : _d.value;
            return "<strong>".concat(jobTitle, "</strong> at ").concat(company, " (").concat(duration, "): ").concat(responsibilities);
        });
        var skills = Array.from(document.querySelectorAll("#skills-section [name='skill']"))
            .map(function (skillInput) { return skillInput.value; });
        resumeDisplay.innerHTML = "\n        <h2>".concat(name, "</h2>\n        ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\">") : "", "\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <ul>").concat(educationEntries.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(""), "</ul>\n        <h3>Experience</h3>\n        <ul>").concat(experiences.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(""), "</ul>\n        <h3>Skills</h3>\n        <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</ul>\n      ");
    });
});
