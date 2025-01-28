const form = document.getElementById('Resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
const downloadButton = document.getElementById('download-resume') as HTMLButtonElement;
const shareButton = document.getElementById('share-resume') as HTMLButtonElement;
const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;

form.addEventListener('submit', async (event: Event) => {
    event.preventDefault();

    const Name = (document.getElementById('Name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const Education = (document.getElementById('Education') as HTMLTextAreaElement).value;
    const Experience = (document.getElementById('Experience') as HTMLTextAreaElement).value;
    const Skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
    const profilePictureFile = profilePictureInput.files?.[0];

    let profilePictureBase64 = '';
    if (profilePictureFile) {
        profilePictureBase64 = await convertToBase64(profilePictureFile);
    }

    const resumeHTML = `
        <h2><b>Editable Resume</b></h2>
        ${profilePictureBase64 ? `<img src="${profilePictureBase64}" alt="Profile Picture" style="width:100px; height:100px; border-radius:50%;">` : ''}
        <h3><b>Personal Information</b></h3>
        <p><b>Name:</b> <span contenteditable="true">${Name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
        <h3>Education</h3>
        <p><b contenteditable="true">${Education}</b></p>
        <h3>Experience</h3>
        <p><b contenteditable="true">${Experience}</b></p>
        <h3 id="skills-header">Skills</h3>
        <p id="skills-section"><b contenteditable="true">${Skills}</b></p>
    `;

    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    } else {
        console.error('Resume display element is missing');
    }

    // Show the toggle button after resume is generated
    toggleSkillsButton.style.display = 'inline-block';
});

toggleSkillsButton.addEventListener('click', () => {
    const skillsSection = document.getElementById('skills-section') as HTMLParagraphElement;
    const skillsHeader = document.getElementById('skills-header') as HTMLHeadingElement;
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        skillsHeader.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        skillsHeader.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});

downloadButton.addEventListener('click', () => {
    const styles = `
        <style>
            body {
                font-family: 'Times New Roman', Times, serif;
                background-color: blanchedalmond;
                margin: 20px;
                padding: 0;
            }
            h2, h3 {
                color: black;
            }
            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
            p {
                margin: 8px 0;
            }
            #resume-display {
                border: 4px solid coral;
                border-radius: 10px;
                padding: 20px;
                background-color: aliceblue;
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
            }
        </style>
    `;

    const fullHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Resume</title>
            ${styles}
        </head>
        <body>
            <div id="resume-display">${resumeDisplay.innerHTML}</div>
        </body>
        </html>
    `;

    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    a.click();
    URL.revokeObjectURL(url);
});

shareButton.addEventListener('click', () => {
    const shareData = {
        title: 'My Resume',
        text: 'Check out my resume!',
        url: window.location.href,
    };

    if (navigator.share) {
        navigator.share(shareData).catch((err) => console.error('Error sharing:', err));
    } else {
        alert('Sharing is not supported on this browser.');
    }
});

// Helper function to convert file to Base64
function convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}
