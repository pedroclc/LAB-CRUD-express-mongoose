import express from "express";
import AlbumModel from "../models/album.model";

const router = express.Router();

//POST /albums
router.post("/create", async (request, response) => {
  try {
    const postAlbum = await AlbumModel.create(request.body);
    return response.status(201).json(postAlbum);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: "algo deu errado no POST" });
  }
});
// GET /albums
router.get("/", async (request, response) => {
  try {
    const getAlbums = await AlbumModel.find();

    return response.status(200).json(getAlbums);
  } catch (error) {
    console.log(error);

    return response.status(500).json({ msg: "algo deu errado no GET" });
  }
});

//GET /albums/:albumId
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const getSpecificAlbum = await AlbumModel.findById(id);

    return response.status(200).json(getSpecificAlbum);
  } catch (error) {
    console.log(error);

    return response.status(500).json({ msg: "algo deu errado no GET by Id" });
  }
});

//PUT /albums/:albumId
router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const updateAlbum = await AlbumModel.findByIdAndUpdate(
      id,
      { ...request.body },
      { new: true, runValidators: true }
    );

    return response.status(200).json(updateAlbum);
  } catch (error) {
    console.log(error);

    return response.status(500).json({ msg: "algo deu errado no PUT" });
  }
});

//DELETE /albums/:albumId
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const deleteAlbum = await AlbumModel.findByIdAndDelete(id);

    return response.status(200).json(deleteAlbum);
  } catch (error) {
    console.log(error);

    return response.status(500).json({ msg: "algo deu errado no DELETE" });
  }
});

export default router;
