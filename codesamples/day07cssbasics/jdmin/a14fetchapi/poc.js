const apiUrl = 'https://6748939d5801f51535917f99.mockapi.io/machine/v1/machine'; // Replace with your MockAPI endpoint

// Form elements
const machineForm = document.getElementById('machine-form');
const machineList = document.getElementById('machine-list');
const machineName = document.getElementById('machine-name');
const machineType = document.getElementById('machine-type');
const messageDiv = document.getElementById('message');

// Fetch machines and display them
const fetchMachines = async () => {
    try {
        const response = fetch(apiUrl);// let us decide to talk with the server..
        console.log(response);
        if (!response.ok) {
            throw new Error(`Error fetching machines: ${response.status}`);
        }
        const machines = await response.json();  //wait for server to respond..
        displayMachines(machines);
    } catch (error) {
        displayMessage(`Failed to load machines. ${error.message}`);
    }
};

// Display machines in list
const displayMachines = (machines) => {
    machineList.innerHTML = '';
    machines.forEach((machine) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${machine.name} (${machine.type})
            <button class="delete" onclick="deleteMachine(${machine.id})">Delete</button>
            <button onclick="editMachine(${machine.id})">Edit</button>
        `;
        machineList.appendChild(li);
    });
};

// Add or update machine
const handleSubmit = async (event) => {
    event.preventDefault();

    const name = machineName.value;
    const type = machineType.value;
    const id = document.getElementById('machine-id').value;

    const machineData = {
        name,
        type,
    };

    try {
        if (id) {
            // Update existing machine
            const response = await fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(machineData),
            });
            if (!response.ok) throw new Error('Failed to update machine');
            const updatedMachine = await response.json();
            displayMessage(`Machine updated: ${updatedMachine.name}`);
        } else {
            // Add new machine
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(machineData),
            });
            if (!response.ok) throw new Error('Failed to add machine');
            const newMachine = await response.json();
            displayMessage(`Machine added: ${newMachine.name}`);
        }
        machineName.value = '';
        machineType.value = '';
        document.getElementById('machine-id').value = '';
        fetchMachines(); // Refresh the list
    } catch (error) {
        displayMessage(error.message);
    }
};

// Delete machine
const deleteMachine = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete machine');
        displayMessage(`Machine deleted`);
        fetchMachines(); // Refresh the list
    } catch (error) {
        displayMessage(error.message);
    }
};

// Edit machine
const editMachine = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`);
        if (!response.ok) throw new Error('Failed to fetch machine');
        const machine = await response.json();
        machineName.value = machine.name;
        machineType.value = machine.type;
        document.getElementById('machine-id').value = machine.id;
    } catch (error) {
        displayMessage(error.message);
    }
};

// Display message
const displayMessage = (message) => {
    messageDiv.innerText = message;
    setTimeout(() => {
        messageDiv.innerText = '';
    }, 3000);
};

// Initialize the app
const init = () => {
    machineForm.addEventListener('submit', handleSubmit);
    fetchMachines();
};

init();
