import * as bootstrap from 'bootstrap'

// Gets all of the data tooltips and activates them with the bootstrap API
[...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))