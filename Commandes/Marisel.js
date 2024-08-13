const { zokou } = require('../framework/zokou');

const isIdeaCommandEnabled = true; // Variable to enable or disable the "idea" command

zokou({ commandName: "idea", category: "AI", reaction: "👨‍🏫", active: isIdeaCommandEnabled }, async (dest, zk, commandOptions) => {
  const { ms, arg, reply } = commandOptions;
  const message = arg.join(' ');

  // Greetings
  const greetings = ["Hello!", "Hi!", "Greetings!", "Hey!", "Nice to see you!"];
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Introduction
  const introduction = [
    "I'm Assistant, a helpful bot. I'm here to assist you with any questions or tasks.",
    "Welcome! I'm Assistant, your friendly bot here to help you with anything you need.",
    "Hi! I'm Assistant, your personal AI assistant. How can I help you today?",
    "Hello! I'm Assistant, ready to assist you with your requests and tasks."
  ];
  const randomIntroduction = introduction[Math.floor(Math.random() * introduction.length)];

  // Project Suggestions
  const project = [
    "You should start a new project related to your passion!",
    "How about working on a creative project that excites you?",
    "Consider starting a project that aligns with your interests and goals.",
    "Why not embark on a project that challenges and inspires you?"
  ];
  const randomProject = project[Math.floor(Math.random() * project.length)];

  // Suggestions for "presently"
  const presently = [
    "Right now, you could learn a new skill or hobby.",
    "At the moment, you could explore new books or movies.",
    "Currently, you could try practicing mindfulness or meditation.",
    "Presently, you could focus on improving your physical fitness."
  ];
  const randomPresently = presently[Math.floor(Math.random() * presently.length)];

  // Custom response for the "idea" command when it is enabled
  const customResponse = `This is a custom response for the 'idea' command when it is enabled.
Response generated on ${new Date().toLocaleString()}.`;

  // Check if the "idea" command is enabled
  if (isIdeaCommandEnabled) {
    // Add a 60-second delay for the response
    setTimeout(() => {
      reply("I am at your service, how can I assist you?");
    }, 60000); // 60 seconds (60000 milliseconds)
  } else {
    // Send a response indicating that the command is disabled
    reply("Sorry, the 'idea' command is currently disabled.");
    return;
  }

  // Check the content of the message and generate a response accordingly
  if (message.includes('project')) {
    reply(` ${randomGreeting} ${randomProject} ${randomIntroduction}`);
  } else if (message.includes('book')) {
    reply(` ${randomGreeting} How about writing a book on a subject you know well? ${randomIntroduction}`);
  } else if (message.includes('travel')) {
    reply(` ${randomGreeting} Plan a trip to a destination you've always wanted to visit! ${randomIntroduction}`);
  } else if (message.includes('presently')) {
    reply(` ${randomGreeting} ${randomPresently} ${randomIntroduction}`);
  } else {
    reply(` ${randomGreeting} I have an idea for you, but I need more information. Can you give me more details? ${randomIntroduction}`);
  }
});
