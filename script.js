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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var _this = this;
var form = document.getElementById('Resume-form');
var resumeDisplay = document.getElementById('resume-display');
var downloadButton = document.getElementById('download-resume');
var shareButton = document.getElementById('share-resume');
var toggleSkillsButton = document.getElementById('toggle-skills');
form.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var Name, email, phone, Education, Experience, Skills, profilePictureInput, profilePictureFile, profilePictureBase64, resumeHTML;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                Name = document.getElementById('Name').value;
                email = document.getElementById('email').value;
                phone = document.getElementById('phone').value;
                Education = document.getElementById('Education').value;
                Experience = document.getElementById('Experience').value;
                Skills = document.getElementById('Skills').value;
                profilePictureInput = document.getElementById('profile-picture');
                profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
                profilePictureBase64 = '';
                if (!profilePictureFile) return [3 /*break*/, 2];
                return [4 /*yield*/, convertToBase64(profilePictureFile)];
            case 1:
                profilePictureBase64 = _b.sent();
                _b.label = 2;
            case 2:
                resumeHTML = "\n        <h2><b>Editable Resume</b></h2>\n        ".concat(profilePictureBase64 ? "<img src=\"".concat(profilePictureBase64, "\" alt=\"Profile Picture\" style=\"width:100px; height:100px; border-radius:50%;\">") : '', "\n        <h3><b>Personal Information</b></h3>\n        <p><b>Name:</b> <span contenteditable=\"true\">").concat(Name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p><b contenteditable=\"true\">").concat(Education, "</b></p>\n        <h3>Experience</h3>\n        <p><b contenteditable=\"true\">").concat(Experience, "</b></p>\n        <h3 id=\"skills-header\">Skills</h3>\n        <p id=\"skills-section\"><b contenteditable=\"true\">").concat(Skills, "</b></p>\n    ");
                if (resumeDisplay) {
                    resumeDisplay.innerHTML = resumeHTML;
                }
                else {
                    console.error('Resume display element is missing');
                }
                // Show the toggle button after resume is generated
                toggleSkillsButton.style.display = 'inline-block';
                return [2 /*return*/];
        }
    });
}); });
toggleSkillsButton.addEventListener('click', function () {
    var skillsSection = document.getElementById('skills-section');
    var skillsHeader = document.getElementById('skills-header');
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        skillsHeader.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        skillsHeader.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});
downloadButton.addEventListener('click', function () {
    var styles = "\n        <style>\n            body {\n                font-family: 'Times New Roman', Times, serif;\n                background-color: blanchedalmond;\n                margin: 20px;\n                padding: 0;\n            }\n            h2, h3 {\n                color: black;\n            }\n            img {\n                width: 100px;\n                height: 100px;\n                border-radius: 50%;\n            }\n            p {\n                margin: 8px 0;\n            }\n            #resume-display {\n                border: 4px solid coral;\n                border-radius: 10px;\n                padding: 20px;\n                background-color: aliceblue;\n                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n            }\n        </style>\n    ";
    var fullHTML = "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <title>My Resume</title>\n            ".concat(styles, "\n        </head>\n        <body>\n            <div id=\"resume-display\">").concat(resumeDisplay.innerHTML, "</div>\n        </body>\n        </html>\n    ");
    var blob = new Blob([fullHTML], { type: 'text/html' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    a.click();
    URL.revokeObjectURL(url);
});
shareButton.addEventListener('click', function () {
    var shareData = {
        title: 'My Resume',
        text: 'Check out my resume!',
        url: window.location.href,
    };
    if (navigator.share) {
        navigator.share(shareData).catch(function (err) { return console.error('Error sharing:', err); });
    }
    else {
        alert('Sharing is not supported on this browser.');
    }
});
// Helper function to convert file to Base64
function convertToBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { return resolve(reader.result); };
        reader.onerror = function (error) { return reject(error); };
        reader.readAsDataURL(file);
    });
}
