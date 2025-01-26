const InfoModel = require("../models/info_model")

const InfoController = {
     GET: async (req, res) => {
          try {
               const { category } = req.query;
               const informations = await InfoModel.find(category ? { category } : {});
               if (informations.length > 0) {
                    res.status(200).json({ data: informations, message: "The information you are looking for is available!" });
               } else {
                    res.status(404).json({ message: "No information found!" })
               }
          } catch (error) {
               res.status(404).json({ message: error });
          }
     },
     POST: async (req, res) => {
          console.log(req.body);

          try {
               const newInformation = await InfoModel.create(req.body);
               res.status(201).json({ message: "Information added successfully!", data: newInformation });
          } catch (error) {
               res.status(404).json({ message: error })
          }
     },
     DELETE: async (req, res) => {
          try {
               const deleteInfo = await InfoModel.findByIdAndDelete(req.params.id);
               res.status(201).json({
                    message: "The product has been successfully removed!",
                    data: deleteInfo
               });
          } catch (error) {
               res.status(404).json({ message: error })
          }
     }

};

module.exports = InfoController;