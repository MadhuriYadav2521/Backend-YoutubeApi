import express from "express"
import { Channel, aboutChannel, playlist, relatedVideos, searchVideo, trending, videoComments, videoInfoById } from "../controllers/youtubeController.js";

var router = express.Router();

router.get('/aboutChannel',aboutChannel)
router.get('/Channel',Channel)
router.get('/relatedVideos',relatedVideos)
router.get('/videoComments',videoComments)
router.get('/trending',trending)
router.get('/videoInfoById',videoInfoById)
router.get('/playlist',playlist)
router.get('/searchVideo',searchVideo)








export default router;