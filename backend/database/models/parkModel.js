import mongoose from "../../mongoose.js";

const parkSchema = new mongoose.Schema({
  type: { type: String, default: "Feature" },
  properties: {
    title: String,
    quadrant: String,
    address: String,
    description: String,
    fenced: String,
    riverAccess: Boolean,
    agilityEquiptment: Boolean,
  },
  geometry: {
    coordinates: [Number, Number],
    type: { type: String, default: "Point" },
  },
});

const Park = mongoose.model("Park", parkSchema);

async function addNewPark(park) {
  const dogPark = new Park({
    type: "Feature",
    properties: {
      title: park.properties.title,
      quadrant: park.properties.quadrant,
      address: park.properties.address,
      description: park.properties.description,
      fenced: park.properties.fenced,
      riverAccess: park.properties.riverAccess,
      agilityEquiptment: park.properties.agilityEquiptment,
    },
    geometry: {
      coordinates: [park.geometry.coordinates[0], park.geometry.coordinates[1]],
      type: "Point",
    },
  });
  await dogPark.save();
  console.log("saved new dog park");
}
//parkData.map(addNewPark);

export const getAllParks = async () => {
  const parks = await Park.find();
  return parks;
};

export const getSomeParks = async(id) => {
  const parks = await Park.find(id)
  return parks
}