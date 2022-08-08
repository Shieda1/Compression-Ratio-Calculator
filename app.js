// https://calculator.swiftutors.com/compression-ratio-calculator.html

// check the calculation

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const v6 = document.getElementById('v6');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const compressionRatioRadio = document.getElementById('compressionRatioRadio');
const cylinderDiameterRadio = document.getElementById('cylinderDiameterRadio');
const strokeLengthRadio = document.getElementById('strokeLengthRadio');
const headGasketThicknessRadio = document.getElementById('headGasketThicknessRadio');
const deckHeightRadio = document.getElementById('deckHeightRadio');
const pistonTopVolumeRadio = document.getElementById('pistonTopVolumeRadio');
const combustionChamberRadio = document.getElementById('combustionChamberRadio');

let compressionRatio;
let cylinderDiameter = v1;
let strokeLength = v2;
let headGasketThickness = v3;
let deckHeight = v4;
let pistonTopVolume = v5;
let combustionChamber = v6;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');
const variable6 = document.getElementById('variable6');

compressionRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Cylinder Diameter (in)';
  variable2.textContent = 'Stroke Length (in)';
  variable3.textContent = 'Head Gasket Thickness (in)';
  variable4.textContent = 'Deck Height (in)';
  variable5.textContent = 'Piston Top Volume (cc)';
  variable6.textContent = 'Combustion Chamber (cc)';
  cylinderDiameter = v1;
  strokeLength = v2;
  headGasketThickness = v3;
  deckHeight = v4;
  pistonTopVolume = v5;
  combustionChamber = v6;
  result.textContent = '';
});

cylinderDiameterRadio.addEventListener('click', function() {
  variable1.textContent = 'Compression Ratio';
  variable2.textContent = 'Stroke Length (in)';
  variable3.textContent = 'Head Gasket Thickness (in)';
  variable4.textContent = 'Deck Height (in)';
  variable5.textContent = 'Piston Top Volume (cc)';
  variable6.textContent = 'Combustion Chamber (cc)';
  compressionRatio = v1;
  strokeLength = v2;
  headGasketThickness = v3;
  deckHeight = v4;
  pistonTopVolume = v5;
  combustionChamber = v6;
  result.textContent = '';
});

strokeLengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Compression Ratio';
  variable2.textContent = 'Cylinder Diameter (in)';
  variable3.textContent = 'Head Gasket Thickness (in)';
  variable4.textContent = 'Deck Height (in)';
  variable5.textContent = 'Piston Top Volume (cc)';
  variable6.textContent = 'Combustion Chamber (cc)';
  compressionRatio = v1;
  cylinderDiameter = v2;
  headGasketThickness = v3;
  deckHeight = v4;
  pistonTopVolume = v5;
  combustionChamber = v6;
  result.textContent = '';
});

headGasketThicknessRadio.addEventListener('click', function() {
  variable1.textContent = 'Compression Ratio';
  variable2.textContent = 'Cylinder Diameter (in)';
  variable3.textContent = 'Stroke Length (in)';
  variable4.textContent = 'Deck Height (in)';
  variable5.textContent = 'Piston Top Volume (cc)';
  variable6.textContent = 'Combustion Chamber (cc)';
  compressionRatio = v1;
  cylinderDiameter = v2;
  strokeLength = v3;
  deckHeight = v4;
  pistonTopVolume = v5;
  combustionChamber = v6;
  result.textContent = '';
});

deckHeightRadio.addEventListener('click', function() {
  variable1.textContent = 'Compression Ratio';
  variable2.textContent = 'Cylinder Diameter (in)';
  variable3.textContent = 'Stroke Length (in)';
  variable4.textContent = 'Head Gasket Thickness (in)';
  variable5.textContent = 'Piston Top Volume (cc)';
  variable6.textContent = 'Combustion Chamber (cc)';
  compressionRatio = v1;
  cylinderDiameter = v2;
  strokeLength = v3;
  headGasketThickness = v4;
  pistonTopVolume = v5;
  combustionChamber = v6;
  result.textContent = '';
});

pistonTopVolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Compression Ratio';
  variable2.textContent = 'Cylinder Diameter (in)';
  variable3.textContent = 'Stroke Length (in)';
  variable4.textContent = 'Head Gasket Thickness (in)';
  variable5.textContent = 'Deck Height (in)';
  variable6.textContent = 'Combustion Chamber (cc)';
  compressionRatio = v1;
  cylinderDiameter = v2;
  strokeLength = v3;
  headGasketThickness = v4;
  deckHeight = v5;
  combustionChamber = v6;
  result.textContent = '';
});

combustionChamberRadio.addEventListener('click', function() {
  variable1.textContent = 'Compression Ratio';
  variable2.textContent = 'Cylinder Diameter (in)';
  variable3.textContent = 'Stroke Length (in)';
  variable4.textContent = 'Head Gasket Thickness (in)';
  variable5.textContent = 'Piston Top Volume (cc)';
  variable6.textContent = 'Combustion Chamber (cc)';
  compressionRatio = v1;
  cylinderDiameter = v2;
  strokeLength = v3;
  headGasketThickness = v4;
  pistonTopVolume = v5;
  deckHeight = v6;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(compressionRatioRadio.checked)
    result.textContent = `Compression Ratio = ${computeCompressionRatio().toFixed(2)}`;

  else if(cylinderDiameterRadio.checked)
    result.textContent = `Cylinder Diameter = ${computeCylinderDiameter().toFixed(2)} in`;

  else if(strokeLengthRadio.checked)
    result.textContent = `Stroke Length = ${computeStrokeLength().toFixed(2)} in`;

  else if(headGasketThicknessRadio.checked)
    result.textContent = `Head Gasket Thickness = ${computeHeadGasketThickness().toFixed(2)} in`;

  else if(deckHeightRadio.checked)
    result.textContent = `Deck Height = ${computeDeckHeight().toFixed(2)} in`;

  else if(pistonTopVolumeRadio.checked)
    result.textContent = `Piston Top Volume = ${computePistonTopVolume().toFixed(2)} cc`;

  else if(combustionChamberRadio.checked)
    result.textContent = `Combustion Chamber = ${computeCombustionChamber().toFixed(2)} cc`;
})

// calculation

function computeCompressionRatio() {
  return (Number(cylinderDiameter.value) + Number(strokeLength.value)) / (Number(headGasketThickness.value) + Number(deckHeight.value) + Number(pistonTopVolume.value) + Number(combustionChamber.value));
}

function computeCylinderDiameter() {
  return Number(costofGoodsManufactured.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeStrokeLength() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeHeadGasketThickness() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeDeckHeight() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) + Number(endingWorkinProcessInventory.value);
}

function computePistonTopVolume() {
  return Number(directMaterialsCost.value) + Number(directLaborCost.value) + Number(factoryOverheadCost.value) + Number(openingWorkinProcessInventory.value) - Number(costofGoodsManufactured.value);
}

function computeCombustionChamber() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) + Number(endingWorkinProcessInventory.value);
}