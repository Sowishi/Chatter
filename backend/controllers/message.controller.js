import Converstaion from "../models/conversation.model.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverID } = req.params;
    const senderID = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderID, receiverID] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderID, receiverID],
      });
    }

    const newMessage = new Message({
      senderID,
      receiverID,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in messages controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChat } = req.params;
    const senderID = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderID, userToChat] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    return res.status(200).json(conversation);
  } catch (error) {
    console.log("Error in messages controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
