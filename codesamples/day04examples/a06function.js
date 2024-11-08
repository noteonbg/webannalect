// Array of batches produced with a number of widgets for each batch
let batches = [
    { batchId: 1, widgetsProduced: 500 },
    { batchId: 2, widgetsProduced: 300 },
    { batchId: 3, widgetsProduced: 150 },
    { batchId: 4, widgetsProduced: 100 }
];

// 1. Anonymous Function for Summing Total Widgets Produced using Array.reduce()
let totalWidgetsProduced = batches.reduce(function(total, batch) {
    return total + batch.widgetsProduced;
}, 0);

console.log(`Total widgets produced: ${totalWidgetsProduced}`);  // Output: 1050

// 2. Anonymous Function for Filtering Defective Widgets
let defectiveWidgets = [
    { widgetId: 1, defective: false },
    { widgetId: 2, defective: true },
    { widgetId: 3, defective: false },
    { widgetId: 4, defective: true },
    { widgetId: 5, defective: false }
];

// Filter defective widgets using an anonymous function
let defectiveWidgetsList = defectiveWidgets.filter(function(widget) {
    return widget.defective;  // Keep only defective widgets
});

console.log(`Defective widgets:`);
defectiveWidgetsList.forEach(function(widget) {
    console.log(`Widget ID: ${widget.widgetId}`);
});

// 3. Anonymous Function as a Callback in setTimeout (Simulating Production Delay)
setTimeout(function() {
    console.log("Production delay finished. Ready for next batch!");
}, 2000);

// 4. Anonymous Function in Event Listener (Simulating Button Click for Quality Control)
document.getElementById("qualityCheckButton").addEventListener("click", function() {
    console.log("Performing quality check...");
});
