// 1. Function Declaration - Produce Widgets
function produceWidgets(widgetType, batchSize) {
    // Function Parameters: widgetType (type of widget), batchSize (number of widgets in this batch)
    console.log(`Producing ${batchSize} units of ${widgetType}.`);
    let totalProduced = batchSize;
    return totalProduced; // Return the total number of widgets produced in this batch
}

// 2. Function Declaration - Quality Control
function qualityControl(defectiveWidgets, totalProduced) {
    // Function Parameters: defectiveWidgets (number of defective widgets), totalProduced (total widgets produced)
    let goodWidgets = totalProduced - defectiveWidgets;
    console.log(`${defectiveWidgets} widgets failed quality control.`);
    console.log(`Number of good widgets ready for shipment: ${goodWidgets}`);
    return goodWidgets;
}

// 3. Function Declaration - Shipping
function shipWidgets(goodWidgets) {
    // Function Parameter: goodWidgets (widgets that passed quality control)
    console.log(`Shipping ${goodWidgets} widgets to customers.`);
}

// 4. Using the Functions (Calling with Arguments)
let totalProducedWidgets = produceWidgets("WidgetA", 500);  // Arguments: "WidgetA", 500
let goodWidgets = qualityControl(50, totalProducedWidgets);  // Arguments: 50 (defective), totalProducedWidgets (500)
shipWidgets(goodWidgets);  // Arguments: goodWidgets (450)
