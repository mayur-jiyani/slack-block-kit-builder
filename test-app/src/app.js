const express = require("express");
const axios = require("axios");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.get("/send", async (req, res) => {
  const result = await axios.post(
    "https://hooks.slack.com/services/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",
    {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "stats-wotnot-staging",
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: " *conversations:* ",
            },
          ],
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Web (15 bots, 119 conversations )",
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "View all",
              emoji: true,
            },
            value: "click_me_123",
            action_id: "button-action",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: ">Bot_Automation: goofy-curran-220f6e.netlify.app  -> 61 \n>Account: sharp-bohr-fe9830.netlify.app  -> 15\n>Tara: 202-contact-load.netlify.app -> 12\n>Salim-Test: check-hello.netlify.app  -> 11\n>limeroad: test-preferance.netlify.app  -> 10\n>Demo Account: test-trigger-api.netlify.app  -> 3\n>بانساري جانबंसरी بانساري جان बंसरी : 405-account.netlify.app  -> 3\n>Custom input123: test.wotnot.io  -> 3\n>Testing: sharp-bohr-fe9830.netlify  -> 1",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "WhatsApp(1 bot, 9 conversations )",
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "View all",
              emoji: true,
            },
            value: "click_me_123",
            action_id: "button-action",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: ">Account: 917834811114  -> 9",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Facebook Messenger( bots, 28 conversations)",
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "View all",
              emoji: true,
            },
            value: "click_me_123",
            action_id: "button-action",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: ">Account: Feb 01 WotNot Prod  -> 18\n>Testing: WotNot Test Rearch  -> 4\n>Account: Dev - 2772 FB bot  -> 4\n>Account: Testing  -> 2",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Unifonic(2 bots, 3 conversations )",
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "View all",
              emoji: true,
            },
            value: "click_me_123",
            action_id: "button-action",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: ">Jack: 9665574088064  -> 2\n>limeroad: 9874561238  -> 1",
          },
        },
      ],
    }
  );
  res.json();
});

app.listen(port, () => {
  console.log("this port is running on ", port);
});
