//  publish messages to a Google Cloud Pub/Sub topic
const { PubSub } = require("@google-cloud/pubsub");
const logger = require("./logger.js");

const pubSubClient = new PubSub({
  projectId: process.env.GCLOUD_PROJECT_ID,
});
logger.info(
  `PubSub client initialized with project id: ${process.env.GCLOUD_PROJECT_ID}`
);
const publishMessage = async (topicName, data) => {
  try {
    const dataBuffer = Buffer.from(JSON.stringify(data));
    const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
    logger.info(`Message ${messageId} published to topic ${topicName}`);
  } catch (error) {
    logger.error(
      `Error publishing message to topic ${topicName}: ${error.message}`
    );
  }
};

module.exports = publishMessage;
