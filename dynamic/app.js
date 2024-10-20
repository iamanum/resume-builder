document.getElementById("resume-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    const resumeOutput = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Work Experience</h4>
        <p>${experience}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
    `;

    document.getElementById("resume").innerHTML = resumeOutput;

    // Generate a unique URL
    const uniqueURL = `https://your-vercel-url.vercel.app/${username}`; // Replace with your actual Vercel URL
    document.getElementById("share-link").innerHTML = `Share your resume: <a href="${uniqueURL}" target="_blank">${uniqueURL}</a>`;
});

// Download Resume as PDF
document.getElementById("download-resume").addEventListener("click", async function () {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // Get the resume content
    const resumeContent = document.getElementById("resume").innerHTML;

    // Split the resume content into lines
    const lines = resumeContent.split(/<br\s*\/?>/);

    // Add lines to PDF
    let y = 10;
    for (const line of lines) {
        pdf.text(line.replace(/<\/?[^>]+(>|$)/g, ""), 10, y); // Remove HTML tags
        y += 10; // Adjust line height
    }

    // Save the PDF
    pdf.save(`${document.getElementById("name").value}_resume.pdf`);
});
