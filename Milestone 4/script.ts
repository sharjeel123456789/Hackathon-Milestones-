// TypeScript Code
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const resumeDisplay = document.getElementById("resume-display") as HTMLElement;
    const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;
  
    let profilePictureURL: string = "";
  
    profilePictureInput.addEventListener("change", () => {
      const file = profilePictureInput.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          profilePictureURL = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    });
  
    const addField = (container: HTMLElement, template: string) => {
      const div = document.createElement("div");
      div.classList.add("entry");
      div.innerHTML = template;
      container.appendChild(div);
    };
  
    document.getElementById("add-education")?.addEventListener("click", () => {
      const template = `
        <input type="text" name="degree" placeholder="Enter Your Degree Name" required>
        <input type="text" name="institution" placeholder="Enter Your Institution Name" required>
        <input type="text" name="year" placeholder="Year" required>
      `;
      addField(document.getElementById("education-section") as HTMLElement, template);
    });
  
    document.getElementById("add-experience")?.addEventListener("click", () => {
      const template = `
        <input type="text" name="job-title" placeholder="Enter Your Job Title" required>
        <input type="text" name="company" placeholder="Enter Company Name" required>
        <input type="text" name="duration" placeholder="Duration" required>
        <textarea name="responsibilities" placeholder="Responsibilities" required></textarea>
      `;
      addField(document.getElementById("experience-section") as HTMLElement, template);
    });
  
    document.getElementById("add-skill")?.addEventListener("click", () => {
      const template = `<input type="text" name="skill" placeholder="Enter Your Skills" required>`;
      addField(document.getElementById("skills-section") as HTMLElement, template);
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
  
      const educationEntries = Array.from(document.querySelectorAll("#education-section .entry"))
        .map((entry) => {
          const degree = (entry.querySelector('[name="degree"]') as HTMLInputElement)?.value;
          const institution = (entry.querySelector('[name="institution"]') as HTMLInputElement)?.value;
          const year = (entry.querySelector('[name="year"]') as HTMLInputElement)?.value;
          return `${degree} from ${institution} (${year})`;
        });
  
      const experiences = Array.from(document.querySelectorAll("#experience-section .entry"))
        .map((entry) => {
          const jobTitle = (entry.querySelector('[name="job-title"]') as HTMLInputElement)?.value;
          const company = (entry.querySelector('[name="company"]') as HTMLInputElement)?.value;
          const duration = (entry.querySelector('[name="duration"]') as HTMLInputElement)?.value;
          const responsibilities = (entry.querySelector('[name="responsibilities"]') as HTMLTextAreaElement)?.value;
          return `<strong>${jobTitle}</strong> at ${company} (${duration}): ${responsibilities}`;
        });
  
      const skills = Array.from(document.querySelectorAll("#skills-section [name='skill']"))
        .map(skillInput => (skillInput as HTMLInputElement).value);
  
      resumeDisplay.innerHTML = `
        <h2>${name}</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture">` : ""}
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <ul>${educationEntries.map(edu => `<li>${edu}</li>`).join("")}</ul>
        <h3>Experience</h3>
        <ul>${experiences.map(exp => `<li>${exp}</li>`).join("")}</ul>
        <h3>Skills</h3>
        <ul>${skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
      `;
    });
  });
  