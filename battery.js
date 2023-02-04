class Model {
    // consturct a model object with the given model name (string) and power (int)
    constructor(modelName, power) {
        this.modelName = modelName;
        this.power = power;
    }

    // returns its brand name
    getBrandName() {
        return this.brand;
    }

    // returns its model name
    getModelName() {
        return this.modelName;
    }

    // returns its power value
    getPower() {
        return this.power;
    }
}

var cakonModels = [new Model("ABC 3000M", 35.5), new Model("ABC 5000M", 37.2), new Model("ABC 7000M", 39.7), new Model("ABC 9000M", 10.9), new Model("ABC 9900M", 15.7)];
var mnModels = [new Model("UIK 110C", 62.3), new Model("UIK 210C", 64.3), new Model("UIK 230C", 26.3), new Model("UIK 250C", 15.3), new Model("UIK 270C", 20.3)];
var vanyModels = [new Model("CEV 1100P", 22), new Model("CEV 1300P", 23), new Model("CEV 1500P", 24), new Model("CEV 1700P", 25), new Model("CEV 1900P", 26)];
const modelMap = new Map([["Cakon", cakonModels], ["Go MN", mnModels], ["VANY", vanyModels]]);

const brand = document.getElementById("brand-name");
const model = document.getElementById("model-name");
const powerInput = document.getElementById("power-input");

// MODIFIES: model
// EFFECTS: creates a new option tag, assigns it a proper description and value, and appends it to HTML.
function addOption(inner, value) {
    let option = document.createElement("option");
    option.innerHTML = inner;
    option.value = value;
    model.append(option);
}

// REQUIRES: brandName is one of the options chosen fron brand section
// MODIFIES: model
// EFFECTS:  given the brandName, retrieves the associated array of models and renders them as options.
function displayModel(brandName) {
    if (brandName == "select") return;

    let models = modelMap.get(brandName);
    models.forEach(function(ele){
        addOption(ele.getModelName(), ele.getPower());
    });
}

// updates the total power input needed by taking the sum of the model power and accessories power.
function calculateTotalPower() {
    if (powerInput.value.length != 0 && model.value != "select") {
        // by putting "+" sign before the variable, it converts a string into a number.
        let totalPower = +(powerInput.value) + +model.value;
        console.log(totalPower);
    }
}

// When brand name is selected, list off all the model options associated with the brand
brand.addEventListener("change", function(event){
    model.innerHTML = "";
    addOption("Select", "select");

    let name = event.currentTarget.value;
    displayModel(name);
});

// When either model option or power input is changed, updates the total power needed.
model.addEventListener("change", calculateTotalPower);
powerInput.addEventListener("change", calculateTotalPower);




