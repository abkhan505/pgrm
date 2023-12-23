// Check if storage empty, if empty fill with 0, else fill with localStorage item.

if (!localStorage.getItem('Cogs')) {
    localStorage.setItem('Cogs', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('cogsQ').value = localStorage.getItem('Cogs');
}

if (!localStorage.getItem('Rainbow Card')) {
    localStorage.setItem('Rainbow Card', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('rcQ').value = localStorage.getItem('Rainbow Card');
}

if (!localStorage.getItem('Black Card')) {
    localStorage.setItem('Black Card', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('bcQ').value = localStorage.getItem('Black Card');
}

if (!localStorage.getItem('Event Construct Ticket')) {
    localStorage.setItem('Event Construct Ticket', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('ecQ').value = localStorage.getItem('Event Construct Ticket');
}

if (!localStorage.getItem('Target Weapon Ticket')) {
    localStorage.setItem('Target Weapon Ticket', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('twQ').value = localStorage.getItem('Target Weapon Ticket');
}

if (!localStorage.getItem('Basic Construct Ticket')) {
    localStorage.setItem('Basic Construct Ticket', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('bcrQ').value = localStorage.getItem('Basic Construct Ticket');
}

if (!localStorage.getItem('Basic Weapon Ticket')) {
    localStorage.setItem('Basic Weapon Ticket', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('bwQ').value = localStorage.getItem('Basic Weapon Ticket');
}

if (!localStorage.getItem('CUB Ticket')) {
    localStorage.setItem('CUB Ticket', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('cubQ').value = localStorage.getItem('CUB Ticket');
}

if (!localStorage.getItem('Trade Voucher')) {
    localStorage.setItem('Trade Voucher', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('tvQ').value = localStorage.getItem('Trade Voucher');
}

if (!localStorage.getItem('PPC Scar')) {
    localStorage.setItem('PPC Scar', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('ppcQ').value = localStorage.getItem('PPC Scar');
}

if (!localStorage.getItem('Warzone Influence')) {
    localStorage.setItem('Warzone Influence', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('wziQ').value = localStorage.getItem('Warzone Influence');
}

if (!localStorage.getItem('Warzone Merit')) {
    localStorage.setItem('Warzone Merit', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('wzmQ').value = localStorage.getItem('Warzone Merit');
}

if (!localStorage.getItem('Special Support Token')) {
    localStorage.setItem('Special Support Token', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('sstQ').value = localStorage.getItem('Special Support Token');
}

if (!localStorage.getItem('United Achievement Points')) {
    localStorage.setItem('United Achievement Points', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('uaQ').value = localStorage.getItem('United Achievement Points');
}

if (!localStorage.getItem('Residence Permit')) {
    localStorage.setItem('Residence Permit', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('rpQ').value = localStorage.getItem('Residence Permit');
}

if (!localStorage.getItem('Dorm Coin')) {
    localStorage.setItem('Dorm Coin', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('dcQ').value = localStorage.getItem('Dorm Coin');
}

if (!localStorage.getItem('Decor Coin')) {
    localStorage.setItem('Decor Coin', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('decQ').value = localStorage.getItem('Decor Coin');
}

if (!localStorage.getItem('Coating Sketch')) {
    localStorage.setItem('Coating Sketch', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('csQ').value = localStorage.getItem('Coating Sketch');
}

if (!localStorage.getItem('Coating Blueprint')) {
    localStorage.setItem('Coating Blueprint', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('cbQ').value = localStorage.getItem('Coating Blueprint');
}

if (!localStorage.getItem('Leap Wafer Chip')) {
    localStorage.setItem('Leap Wafer Chip', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('lwQ').value = localStorage.getItem('Leap Wafer Chip');
}

if (!localStorage.getItem('Uniframe Single Crystal')) {
    localStorage.setItem('Uniframe Single Crystal', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('ucQ').value = localStorage.getItem('Uniframe Single Crystal');
}

if (!localStorage.getItem('EXP Pod S')) {
    localStorage.setItem('EXP Pod S', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('xpsQ').value = localStorage.getItem('EXP Pod S');
}


if (!localStorage.getItem('EXP Pod M')) {
    localStorage.setItem('EXP Pod M', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('xpmQ').value = localStorage.getItem('EXP Pod M');
}


if (!localStorage.getItem('EXP Pod L')) {
    localStorage.setItem('EXP Pod L', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('xplQ').value = localStorage.getItem('EXP Pod L');
}


if (!localStorage.getItem('EXP Pod XL')) {
    localStorage.setItem('EXP Pod XL', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('xpxlQ').value = localStorage.getItem('EXP Pod XL');
}

if (!localStorage.getItem('Memory Enhancer II')) {
    localStorage.setItem('Memory Enhancer II', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('memIIQ').value = localStorage.getItem('Memory Enhancer II');
}

if (!localStorage.getItem('Memory Enhancer III')) {
    localStorage.setItem('Memory Enhancer III', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('memIIIQ').value = localStorage.getItem('Memory Enhancer III');
}

if (!localStorage.getItem('Memory Enhancer IV')) {
    localStorage.setItem('Memory Enhancer IV', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('memIVQ').value = localStorage.getItem('Memory Enhancer IV');
}

if (!localStorage.getItem('Memory Overclock Circuit I')) {
    localStorage.setItem('Memory Overclock Circuit I', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('memoIQ').value = localStorage.getItem('Memory Overclock Circuit I');
}

if (!localStorage.getItem('Memory Overclock Circuit II')) {
    localStorage.setItem('Memory Overclock Circuit II', 0)
} else {
    // Retrieve Item from Storage
    document.getElementById('memoIIQ').value = localStorage.getItem('Memory Overclock Circuit II');
}


// Event Listener for Input

document.getElementById("cogsQ").addEventListener('change', cogsChange);

document.getElementById("rcQ").addEventListener('change', rcChange);

document.getElementById("bcQ").addEventListener('change', bcChange);

document.getElementById("ecQ").addEventListener('change', ecChange);

document.getElementById("twQ").addEventListener('change', twChange);

document.getElementById("bcrQ").addEventListener('change', bcrChange);

document.getElementById("bwQ").addEventListener('change', bwChange);

document.getElementById("cubQ").addEventListener('change', cubChange);

document.getElementById("tvQ").addEventListener('change', tvChange);

document.getElementById("ppcQ").addEventListener('change', ppcChange);

document.getElementById("wziQ").addEventListener('change', wziChange);

document.getElementById("wzmQ").addEventListener('change', wzmChange);

document.getElementById("sstQ").addEventListener('change', sstChange);

document.getElementById("uaQ").addEventListener('change', uaChange);

document.getElementById("rpQ").addEventListener('change', rpChange);

document.getElementById("dcQ").addEventListener('change', dcChange);

document.getElementById("decQ").addEventListener('change', decChange);

document.getElementById("csQ").addEventListener('change', csChange);

document.getElementById("cbQ").addEventListener('change', cbChange);

document.getElementById("lwQ").addEventListener('change', lwChange);

document.getElementById("ucQ").addEventListener('change', ucChange);

document.getElementById("xpsQ").addEventListener('change', xpsChange);

document.getElementById("xpmQ").addEventListener('change', xpmChange);

document.getElementById("xplQ").addEventListener('change', xplChange);

document.getElementById("xpxlQ").addEventListener('change', xpxlChange);

document.getElementById("memIIQ").addEventListener('change', memIIChange);

document.getElementById("memIIIQ").addEventListener('change', memIIIChange);

document.getElementById("memIVQ").addEventListener('change', memIVChange);

// Function for change

function cogsChange(){
    let cogsQ = document.getElementById('cogsQ').value
   localStorage.setItem('Cogs', cogsQ)
}

function rcChange(){
    let rcQ = document.getElementById('rcQ').value
   localStorage.setItem('Rainbow Card', rcQ)
}

function bcChange(){
    let bcQ = document.getElementById('bcQ').value
   localStorage.setItem('Black Card', bcQ)
}

function ecChange(){
    let ecQ = document.getElementById('ecQ').value
   localStorage.setItem('Event Construct Ticket', ecQ)
}

function twChange(){
    let twQ = document.getElementById('twQ').value
   localStorage.setItem('Target Weapon Ticket', twQ)
}

function bcrChange(){
    let bcrQ = document.getElementById('bcrQ').value
   localStorage.setItem('Basic Construct Ticket', bcrQ)
}

function bwChange(){
    let bwQ = document.getElementById('bwQ').value
   localStorage.setItem('Basic Weapon Ticket', bwQ)
}

function cubChange(){
    let cubQ = document.getElementById('cubQ').value
   localStorage.setItem('CUB Ticket', cubQ)
}

function tvChange(){
    let tvQ = document.getElementById('tvQ').value
   localStorage.setItem('Trade Voucher', tvQ)
}

function ppcChange(){
    let ppcQ = document.getElementById('ppcQ').value
   localStorage.setItem('PPC Scar', ppcQ)
}

function wziChange(){
    let wziQ = document.getElementById('wziQ').value
   localStorage.setItem('Warzone Influence', wziQ)
}

function wzmChange(){
    let wzmQ = document.getElementById('wzmQ').value
   localStorage.setItem('Warzone Merit', wzmQ)
}

function sstChange(){
    let sstQ = document.getElementById('sstQ').value
   localStorage.setItem('Special Support Token', sstQ)
}

function uaChange(){
    let uaQ = document.getElementById('uaQ').value
   localStorage.setItem('United Achievement Points', uaQ)
}

function rpChange(){
    let rpQ = document.getElementById('rpQ').value
   localStorage.setItem('Residence Permit', rpQ)
}

function dcChange(){
    let dcQ = document.getElementById('dcQ').value
   localStorage.setItem('Dorm Coin', dcQ)
}

function decChange(){
    let decQ = document.getElementById('decQ').value
   localStorage.setItem('Decor Coin', decQ)
}

function csChange(){
    let csQ = document.getElementById('csQ').value
   localStorage.setItem('Coating Sketch', csQ)
}

function cbChange(){
    let cbQ = document.getElementById('cbQ').value
   localStorage.setItem('Coating Blueprint', cbQ)
}

function lwChange(){
    let lwQ = document.getElementById('lwQ').value
   localStorage.setItem('Leap Wafer Chip', lwQ)
}

function ucChange(){
    let ucQ = document.getElementById('ucQ').value
   localStorage.setItem('Uniframe Single Crystal', ucQ)
}

function xpsChange(){
    let xpsQ = document.getElementById('xpsQ').value
   localStorage.setItem('EXP Pod S', xpsQ)
}

function xpmChange(){
    let xpmQ = document.getElementById('xpmQ').value
   localStorage.setItem('EXP Pod M', xpmQ)
}

function xplChange(){
    let xplQ = document.getElementById('xplQ').value
   localStorage.setItem('EXP Pod L', xplQ)
}

function xpxlChange(){
    let xpxlQ = document.getElementById('xpxlQ').value
   localStorage.setItem('EXP Pod XL', xpxlQ)
}

function memIIChange(){
    let memIIQ = document.getElementById('memIIQ').value
   localStorage.setItem('Memory Enhancer II', memIIQ)
}

function memIIIChange(){
    let memIIIQ = document.getElementById('memIIIQ').value
   localStorage.setItem('Memory Enhancer III', memIIIQ)
}

function memIVChange(){
    let memIVQ = document.getElementById('memIVQ').value
   localStorage.setItem('Memory Enhancer IV', memIVQ)
}