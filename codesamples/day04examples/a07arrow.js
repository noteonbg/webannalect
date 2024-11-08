// 1. Using Arrow Function to Sum Total Widgets Produced
let totalWidgetsProduced = batches.reduce((total, batch) => total + batch.widgetsProduced, 0);
console.log(`Total widgets produced: ${totalWidgetsProduced}`);  // Output: 1050

// 2. Using Arrow Function to Filter Defective Widgets
let defectiveWidgetsList = defectiveWidgets.filter(widget => widget.defective);
console.log(`Defective widgets:`);
defectiveWidgetsList.forEach(widget => console.log(`Widget ID: ${widget.widgetId}`));

// 3. Arrow Function in setTimeout (Simulating Production Delay)
setTimeout(() => {
    console.log("Production delay finished. Ready for next batch!");
}, 2000);

// 4. Arrow Function in Event Listener (Simulating Button Click for Quality Control)
document.getElementById("qualityCheckButton").addEventListener("click", () => {
    console.log("Performing quality check...");
});
