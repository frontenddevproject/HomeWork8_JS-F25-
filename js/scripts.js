class Samsung {

	constructor(type, model, color, screenSize,  processor, totalStorageCapacity, RAM, price) {
		this.type = type;
		this.model = model;
		this.color = color;
		this.screenSize = screenSize;
		this.processor = processor;
		this.totalStorageCapacity = totalStorageCapacity;
		this.RAM = RAM;
		this.price = price;

		return this;
	}

	aboutPhone() {
		console.log(this);
	}
}

const samsungS23 = new Samsung("Smartphone", "S23", "black", [6.1, "inches"] , "Qualcomm Snapdragon 8 Gen2", [256, "Gb"], [8, "Gb"], [String.fromCodePoint(0x20AC), 1010]);
const samsungS23Plus = new Samsung("Smartphone", "S23Plus", "black", [6.6, "inches"] , "Qualcomm Snapdragon 8 Gen2", [256, "Gb"], [8, "Gb"], [String.fromCodePoint(0x20AC), 1200]);
samsungS23.aboutPhone();
samsungS23Plus.aboutPhone();

class SamsungS23Ultra extends Samsung {
	constructor(type, model, color, screenSize,  processor, totalStorageCapacity, RAM, stilus, price) {
		super(type, model, color, screenSize,  processor, totalStorageCapacity, RAM, price);

		this.stilus = stilus;

		return this;
	}
	aboutPhone() {
		console.table(this);
	}
}

const samsungS23Ultra = new SamsungS23Ultra("Smartphone", "S23Ultra", "black", [6.8, "inches"] , "Qualcomm Snapdragon 8 Gen2", [256, "Gb"], [8, "Gb"], true, [String.fromCodePoint(0x20AC), 1400]);

samsungS23Ultra.aboutPhone();


// // function check (phoneClass, arr) {
// // 	let newArr = [];
// // 	for (let key in arr) {
// // 		if (key instanceof phoneClass) {
// // 			newArr = newArr.push(key);
// // 		}
// // 	}
// // 	return newArr;
// // }

// console.log(check(Samsung, [SamsungS23Ultra, {name: "Alex"}, [1, 2, 3], "asdad", samsungS23, 56, samsungS23Plus, samsungS23Ultra]));
