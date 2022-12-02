import mongoose from "../../mongoose.js";

const favoritesSchema = new mongoose.Schema({
  userID: String,
  favPark: {
    type: { type: String, default: "Feature" },
    properties: {
      title: {
        type: String,
        unique: true
      },
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
  },
});

const Favorite = mongoose.model("Favorite", favoritesSchema, "Favorite");

export const getAllFavorites = async(user) => {
    const parks = await Favorite.find({userID: user});
    return parks;
};

export const addFavorite = async (uid, park) => {
    try{
        const newFav = Favorite.create({ userID: uid, favPark: park });
        return newFav;
    } catch (err) {
        console.error(err)
        return(err)
    }
  
};

export const removeFavorite = async (id) => {
  const removedFav = Favorite.remove({ _id: id });
  return removedFav;
};
