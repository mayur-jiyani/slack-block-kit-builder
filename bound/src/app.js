const { App } = require("@slack/bolt");

const express = require("express");
const axios = require("axios");

const app = express();

const apps = new App({
  signingSecret: "bed25748395796530b3c9bcb261015d1",
  token: "xoxb-3122491632292-3118500451878-GhXpmoYrHUAeIVSvknwlxxHS",
});

const options = {
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
        action_id: "button-action_1",
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
};

app.use(express.json());

/* Add functionality here */
app.get("/send", async (req, res) => {
  const result = await axios.post(
    "https://hooks.slack.com/services/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",
    options
  );
  res.json();
});

app.post("/", async (req, res) => {
  console.log("hello");
});

// Handle interactions from messages with a `callback_id` of `welcome_button`
// app.action("welcome_button", (payload, respond) => {
//   // `payload` contains information about the action
//   // see: https://api.slack.com/docs/interactive-message-field-guide#action_url_invocation_payload
//   console.log(payload);

//   // `respond` is a function that can be used to follow up on the action with a message
//   respond({
//     text: "Success!",
//   });

//   // The return value is used to update the message where the action occurred immediately.
//   // Use this to items like buttons and menus that you only want a user to interact with once.
//   return {
//     text: "Processing...",
//   };
// });

// Handle interactions from messages containing an action block with an `action_id` of `select_coffee`
apps.action({ action_id: "button-action_1" }, (payload, respond) => {
  console.log("button clicked");
  respond({
    type: "header",
    text: {
      type: "plain_text",
      text: "stats-wotnot-staging",
    },
  });

  // `payload` contains information about the action
  // Block Kit Builder can be used to explore the payload shape for various action blocks:
  // https://api.slack.com/tools/block-kit-builder
  // `respond` and return value are the same as above.
});

(async () => {
  // Start the app
  await apps.start(process.env.PORT || 3000);
  const result = await axios.post(
    "https://hooks.slack.com/services/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",
    options
  );

  console.log("Bolt app is running!");
})();

app.listen(() => {
  console.log("this port is running on ", 4000);
});
