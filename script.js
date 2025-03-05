document.addEventListener('DOMContentLoaded', () => {
    const currencyInputs = document.querySelectorAll('.currency-input');
    const paymentType = document.getElementById('paymentType');
    const paymentTypeLabel = document.getElementById('paymentTypeLabel');
    const exportPDFButton = document.getElementById('exportPDF');
    
    // Currency formatting function
    function formatCurrency(input) {
        // Remove non-numeric characters
        let value = input.value.replace(/[^\d.]/g, '');
        
        // Convert to number with two decimal places
        if (value !== '') {
            const numValue = parseFloat(value);
            if (!isNaN(numValue)) {
                input.value = '$' + numValue.toFixed(2);
            }
        }
    }

    // Add event listeners to currency inputs
    currencyInputs.forEach(input => {
        input.addEventListener('blur', () => formatCurrency(input));
        
        // Allow only numeric input
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9.]/g, '');
        });
    });

    // Payment type label toggle
    paymentType.addEventListener('change', (e) => {
        paymentTypeLabel.textContent = e.target.value === 'copay' 
            ? 'Co-pay: Fixed dollar amount' 
            : 'Co-insurance: Percentage of total cost';
    });

    // Print Dialog Export
    exportPDFButton.addEventListener('click', () => {
        // Validate required fields before printing
        const patientName = document.getElementById('patientName').value.trim();
        const insuranceProvider = document.getElementById('insuranceProvider').value.trim();
        
        if (!patientName || !insuranceProvider) {
            alert('Please fill in Patient Name and Insurance Provider before printing.');
            return;
        }

        // Trigger print dialog
        window.print();
    });

    // Clear Form functionality
    const clearFormButton = document.getElementById('clearForm');
    clearFormButton.addEventListener('click', () => {
        document.getElementById('verificationForm').reset();
        
        // Reset payment type label
        paymentTypeLabel.textContent = 'Co-pay: Fixed dollar amount';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const currencyInputs = document.querySelectorAll('.currency-input');
    const paymentType = document.getElementById('paymentType');
    const paymentTypeLabel = document.getElementById('paymentTypeLabel');
    const exportPDFButton = document.getElementById('exportPDF');
    const visitLimit = document.getElementById('visitLimit');
    const visitRemaining = document.getElementById('visitRemaining');
    
    // Currency formatting function
    function formatCurrency(input) {
        // Remove non-numeric characters
        let value = input.value.replace(/[^\d.]/g, '');
        
        // Convert to number with two decimal places
        if (value !== '') {
            const numValue = parseFloat(value);
            if (!isNaN(numValue)) {
                input.value = '$' + numValue.toFixed(2);
            }
        }
    }

    // Add event listeners to currency inputs
    currencyInputs.forEach(input => {
        input.addEventListener('blur', () => formatCurrency(input));
        
        // Allow only numeric input
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9.]/g, '');
        });
    });

    // Remove numeric-only restriction for visit inputs
    visitLimit.removeAttribute('type');
    visitRemaining.removeAttribute('type');

    // Placeholder hints for visit inputs
    visitLimit.setAttribute('placeholder', 'Total Visits (e.g., 12, Unlimited)');
    visitRemaining.setAttribute('placeholder', 'Available Visits (e.g., 6, Unlimited)');

    // Payment type label toggle
    paymentType.addEventListener('change', (e) => {
        paymentTypeLabel.textContent = e.target.value === 'copay' 
            ? 'Co-pay: Fixed dollar amount' 
            : 'Co-insurance: Percentage of total cost';
    });

    // Print Dialog Export
    exportPDFButton.addEventListener('click', () => {
        // Validate required fields before printing
        const patientName = document.getElementById('patientName').value.trim();
        const insuranceProvider = document.getElementById('insuranceProvider').value.trim();
        
        if (!patientName || !insuranceProvider) {
            alert('Please fill in Patient Name and Insurance Provider before printing.');
            return;
        }

        // Add custom print title for browsers that support it
        document.title = `${patientName} - Insurance Benefits`;

        // Trigger print dialog
        window.print();
    });

    // Clear Form functionality
    const clearFormButton = document.getElementById('clearForm');
    clearFormButton.addEventListener('click', () => {
        document.getElementById('verificationForm').reset();
        
        // Reset payment type label
        paymentTypeLabel.textContent = 'Co-pay: Fixed dollar amount';
    });
});