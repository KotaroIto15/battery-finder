class Model {
    constructor(modelName, power) {
        this.modelName = modelName;
        this.power = power;
    }

    getBrandName() {
        return this.brand;
    }

    getModelName() {
        return this.modelName;
    }

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

function addOption(inner, value) {
    let option = document.createElement("option");
    option.innerHTML = inner;
    option.value = value;
    model.append(option);
}

function displayModel(brandName) {
    let models = modelMap.get(brandName);
    models.forEach(function(ele){
        addOption(ele.getModelName(), ele.getPower());
    });
}

brand.addEventListener("change", function(event){
    model.innerHTML = "";
    addOption("Select", "select");

    let name = event.currentTarget.value;
    if (name !== "select") displayModel(name);
});

powerInput.addEventListener("change", function(){
    console.log(model.value);
});




