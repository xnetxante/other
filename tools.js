/* Central User Script Tools
@description        Tools For All Scripts
@version            Version 1.0
@author             Xante

/* Change Log */ {
    /* NewDate (version) */ /* coder
    - Changes
    */

    /* Sept 25, 2024 (1.0) */ /* Xante
    - Created this Script
    */


}

/* Info on functions */ {
/* Add Table dataArray Example */ /*

//              Headers
addRow('myTableClass', [
    { data: 'Header1', id: 'header1', colSpan: 2 },
    { data: 'Header2', id: 'header2' },
    { data: 'Header3', colSpan: 3 }
], 'th');

//              Plain Cells
addRow('myTableClass', [
    { data: 'Value1', id: 'class1', colSpan: 2 },
    { data: 'Value2', id: 'class2' },
    { data: 'Value3', colSpan: 3 }
], 'td');

*/

/* addRowcells Example */ /*
//              Also these can be used

    addRowcells('atsettings', 'th', 'Admin Tool Settings', '', 6)
    addRowcells('atsettings', 'td', 'Login Log Days', 'ipLogDays')
    addRowcells('atsettings', 'td', 'Vaction Log Days', 'vacationLogDays')

*/






}



/* Clear Info Page */ function clearInfoBox() {
    var infobox = document.querySelector('.infobox');
    infobox.innerHTML = "";
}


/* Add Table to div .infobox */ const addTable = (className, parentClass = 'infobox') => {
    const parent = document.querySelector(`.${parentClass}`);
    if (parent) {
        const table = document.querySelector(`.${className}`) ||
            Object.assign(document.createElement('table'), { className: className, style: { width: '200px' } });
        parent.appendChild(table);
    } else {
        console.error(`Element with class "${parentClass}" not found.`);
    }
};

/* Select Table by Class */ const selectTable = (className) => {
    return document.querySelector(`.${className}`);
};

/* Get Local Storage Item */ const getStorageItem = (key) => {
    return localStorage.getItem(key) || '';
};




/* Add Table Row dataArray */ const addRow = (tableClass, dataArray, elementType = 'td') => {
    const table = selectTable(tableClass);
    const newRow = table.insertRow();

    dataArray.forEach((cellData) => {
        if (cellData.data || cellData.id) {
            const cell = document.createElement(elementType);
            cell.innerHTML = cellData.data;

            if (cellData.colSpan) {
                cell.colSpan = cellData.colSpan;
            }

            if (cellData.id) {
                cell.classList.add(cellData.id.toLowerCase());
            }

            if (cellData.style) {
                Object.assign(cell.style, cellData.style);  // Apply styles if provided
            }

            newRow.appendChild(cell);
        }
    });
};

/* Add Row Cells */ const addRowcells = (tableClass, elementType = 'td', cellContent, cellId = '', colSpan = 1, cellStyles = {}) => {
    const table = selectTable(tableClass);
    const newRow = table.insertRow();

    // Create the first cell with the provided content
    const cell = document.createElement(elementType);
    cell.innerHTML = cellContent || ''; // Default to empty string if no content

    if (colSpan > 1) {
        cell.colSpan = colSpan;
    }

    if (Object.keys(cellStyles).length > 0) {
        Object.assign(cell.style, cellStyles);  // Apply styles if provided
    }

    newRow.appendChild(cell);

    // If an id is provided, create a second cell with that class and apply styles
    if (cellId) {
        const idCell = document.createElement(elementType);
        idCell.classList.add(cellId.toLowerCase());

        if (Object.keys(cellStyles).length > 0) {
            Object.assign(idCell.style, cellStyles);  // Apply styles to id cell as well
        }

        newRow.appendChild(idCell);
    }
};
/* Add Input Field to Class */ const addInput = (classId, inputType = 'text', placeholder = '') => {
    const container = document.querySelector(`.${classId}`);
    if (container) {
        const inputElement = document.createElement('input');
        inputElement.type = inputType;
        inputElement.placeholder = placeholder;
        inputElement.name = classId; // Set the name for local storage retrieval

        if (inputType === 'checkbox') {
            // Set the checked property for checkboxes
            inputElement.checked = getStorageItem(classId) === 'true'; // Assuming storage returns a string
        } else {
            // For other input types, set the value
            inputElement.value = getStorageItem(classId); // Retrieve and set the value from local storage
        }

        container.appendChild(inputElement);
    } else {
        console.error(`Element with class "${classId}" not found.`);
    }
};

// Function to add a button that reads inputs and updates local storage
/* Add Submit Button */const addButtonRow = (tableClass) => {
    const table = selectTable(tableClass);
    const newRow = table.insertRow();
    const cell = newRow.insertCell();

    cell.colSpan = 999; // Set colSpan to 999 for full width
    cell.style.textAlign = 'right'; // Right-align the cell

    const button = document.createElement('button');
    button.textContent = 'Update Settings';
    button.onclick = () => {
        const inputs = table.querySelectorAll('input');

        inputs.forEach(input => {
            const key = input.name; // Use the class ID as the key
            let value;

            // Check if the input type is checkbox
            if (input.type === 'checkbox') {
                value = input.checked ? 'true' : 'false'; // Convert boolean to string
            } else {
                value = input.value.trim(); // Trim and store the value for other types
            }

            localStorage.setItem(key, value); // Update local storage
        });

        // Refresh the page after updating settings
        location.reload();
    };

    cell.appendChild(button); // Append button to the cell
};
