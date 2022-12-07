import type { NextApiRequest, NextApiResponse } from "next";
import { openAIApi } from "../../config/openAiConfig";

type ImageType = {
  prompt: string;
  size: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt, size } = req.body as ImageType;

  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

  try {
    switch (req.method) {
      case "POST":
        const response = await openAIApi.createImage({
          prompt,
          n: 1,
          size: imageSize,
        });

        const imageUrl = response.data.data[0].url;

        res.status(200).json({ success: true, image: imageUrl, size });
        break;
      default:
        res.status(405).end();
        break;
    }
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }

    res.status(400).json({
      success: false,
      error: "The image could not be generated",
    });
  }
}
