document.getElementById("resume-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Create the resume output
    const resumeOutput = `
        <h3 contenteditable="true">${name}</h3>
        <p contenteditable="true">Email: ${email}</p>
        <p contenteditable="true">Phone: ${phone}</p>
        <h4 contenteditable="true">Education</h4>
        <p contenteditable="true">${education}</p>
        <h4 contenteditable="true">Work Experience</h4>
        <p contenteditable="true">${experience}</p>
        <h4 contenteditable="true">Skills</h4>
        <p contenteditable="true">${skills}</p>
    `;

    // Update the resume section with the output
    document.getElementById("resume").innerHTML = resumeOutput;

    // Debugging line to check if the resume is generated
    console.log("Resume generated:", resumeOutput);
});
