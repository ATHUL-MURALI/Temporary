// import express, { response } from 'express';
// import * as dotenv from 'dotenv';
// import OpenAI from 'openai';

// // the below code is not working so importing other way
// // import { Configuration, OpenAIApi } from 'openai'; 
// // dont need the Configuration bec can be done directly now
// // so the below code is changed
// // const config = new Configuration({
// //     apiKey: process.env.OPENAI_API_KEY,
// // });
// // const openai = new OpenAIApi(config);

// dotenv.config();

// const router = express.Router();

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// router.route('/').get((req,res) => {
//     res.status(200).json({message: "Hello from DALL.E Routes"})
// })

// router.route('/').post(async(req,res) => {
//     try {
//         const { prompt } = req.body;
//         const response = await openai.createImage({
//             prompt,
//             n: 1,
//             size: '1024x1024',
//             response_format: 'b64_json'
//           });

//         const image = response.data.data[0].b64_json;

//         res.status(200).json({ photo: image });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Something Went Wrong" })
//     }
// })

// export default router;

import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi} from 'openai';

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" })
  }
})

export default router;