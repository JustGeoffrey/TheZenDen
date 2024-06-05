
// Function to display the current date and time
function displayDateTime() {
    const now = new Date();
    const time = document.querySelector(".datetime");
    time.innerHTML = ` ${now.toLocaleString()}`;
}

displayDateTime();

// Update date and time every second
setInterval(displayDateTime, 1000);


//display some info from the API endpoint to the user
const url = 'https://onlineprojectsgit.github.io/API/WDEndpoint.json';
const Hoverbutton = document.querySelector('.Hoverbutton');

// Function to display the data in the info container
function displayData(data) {
    const infoDiv = document.querySelector('.info-container');
    const { id, cohort, Name, Start, End, instructor, students } = data.info;
    const predata = infoDiv.innerHTML;

    infoDiv.innerHTML = predata + `
        <h1>${Name} (Cohort ${cohort})</h1>
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Start Date:</strong> ${Start}</p>
        <p><strong>End Date:</strong> ${End}</p>
        <h2>Instructor</h2>
        <p><strong>Name:</strong> ${instructor.name}</p>
        <p><strong>Position:</strong> ${instructor.position}</p>
        <p><strong>Cohorts:</strong> ${instructor.cohorts}</p>
        <h2>Students</h2>
        <p>Students: ${students}</p>
        <button class="Hoverbutton1">Click to Close</button>
    ` ;
    
    const Hoverbuttonclose = document.querySelector('.Hoverbutton1');
    Hoverbuttonclose.addEventListener('click', () => {
        infoDiv.innerHTML = '';
        Hoverbuttonclose.style.display = 'none';
        window.location.reload();
    })

}

// Fetch data from the API endpoint
const getinfo = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();   
            displayData(data);
        }
    } catch (error) {
        console.log(error);
    }
}

// Add event listener to the button to display info on click
Hoverbutton.addEventListener('click', () => {
    Hoverbutton.style.display = 'none';
    getinfo();
})














