/* English copy. Same ids as data.js; only text lives here (weights and drink logic stay in data.js).
   Anything missing here falls back to the Hebrew. */
window.SLOTH_EN = {
  questions: {
    type: {
      title: "What kind of burner are you?",
      hint: "Don't lie. The sloth saw you at yesterday's selfie marathon.",
      options: {
        pony: "Sparkle pony: outfit from Shein, selfie already posted",
        mapatz: "Build crew: got here a month early and built the city",
        psych: "Psychonaut: I saw colors that don't have names yet",
        party: "Party animal: one more set, then bed (lie)",
        spirit: "Spiritual: I became one with the desert, it knows my name",
        builder: "Art builder: zip ties in my pocket, dust in my eyelashes",
        virgin: "First burn: why is everyone hugging me?",
        veteran: "Old-timer: back in 2014 it was real",
        gifter: "Gifter: I've got a handmade keychain for everyone",
        ranger: "Ranger: I've seen everything, and I have no questions",
        campmom: "Camp parent: I have sunscreen, band-aids and electrolytes",
        lost: "Lost: went out for ice two days ago",
        moop: "MOOP hunter: picked up three sequins on the way here"
      }
    },
    day: {
      title: "How long have you been on the playa?",
      hint: "In playa time, not default time.",
      options: {
        build: "Build week. Haven't seen anyone in clean clothes yet",
        d1: "Day one. My lips are still moisturized",
        d3: "Day three. The dust is part of my personality now",
        d5: "Day five. Lost a shoe and all sense of time",
        burnnight: "Burn night. I saved my energy (not really)",
        exodus: "Last day. Packing up, but slowly",
        nocount: "No idea. I counted sunrises, then stopped",
        forever: "Since August. I'm not on the playa, I am the playa"
      }
    },
    sleep: {
      title: "How much did you sleep last night?",
      hint: "Sleeping on the playa is like sleeping inside a salt shaker.",
      options: {
        aircon: "Eight hours, in a tent with A/C",
        didge: "Three hours, and someone played the didgeridoo",
        sunrise: "I didn't. I was at sunrise",
        artcar: "Fell asleep on an art car, woke up in another camp",
        shadecar: "Two hours, in the shade of an art car that drove off",
        hammock: "In a stranger camp's hammock. They don't know",
        earplugs: "With earplugs, and still heard techno",
        dome: "In a geodesic dome with twenty other people",
        queue: "Standing up, in the toilet line"
      }
    },
    need: {
      title: "What do you need right now?",
      hint: "This decides hot coffee or a cocktail.",
      options: {
        brain: "To put my brain back in my body",
        shade: "Shade, a chair, and zero responsibility",
        sunset: "Something cold before sunset",
        night: "To open the night",
        human: "To become a human again",
        talk: "A deep talk with a stranger about the taste of coffee",
        hug: "A warm hug, but in a cup",
        cool: "Something to cool my soul",
        bubbles: "Bubbles. Lots of bubbles",
        fuel: "Fuel for the dance floor"
      }
    },
    flavor: {
      title: "Which flavor matches your aura?",
      hint: "Pick one. We believe in you, roughly.",
      options: {
        fruity: "Fruity and tart, like camp drama",
        spicy: "Spiced, like a 4 a.m. talk with the neighbors",
        choc: "Chocolate, because you deserve it",
        nutty: "Nutty and classic, like the veteran who's come every year since 2014",
        fresh: "Fresh and herbal, like the shower you didn't have",
        fruity2: "Fruity, like the colors of your outfit",
        spicy2: "Spiced and warm, like sand at noon",
        choc2: "Bittersweet, like leaving the playa",
        nutty2: "Caramel and nutty, like a gift you made at home",
        fresh2: "Citrusy and herbal, like a breeze at noon (rare)"
      }
    }
  },

  drinks: {
    "spice-route": { name: "Hot V60", tagline: "Cardamom and florals. Coffee that arrives on foot.", bitters: "cardamom bitters" },
    "black-forest": { name: "Hot V60", tagline: "Chocolate, berries and lime. Dark, but with light at the end.", bitters: "chocolate bitters" },
    "galaxy-brain": { name: "Hot V60", tagline: "Passion fruit and lychee. The coffee that thinks it knows something.", bitters: "lime bitters" },
    "lost-weekend": { name: "Hot V60", tagline: "Dried fruit, wine and Peychaud's. We don't judge.", bitters: "Peychaud's bitters" },
    "old-fashioned": { name: "Hot V60", tagline: "Nutty, creamy, steady. The uncle of coffees.", bitters: "Angostura bitters" },
    "honey-trap": { name: "Hot V60", tagline: "Caramel and stone fruit. Looks innocent.", bitters: "coffee bitters" },
    "tonic-cascara": { name: "Desert Tonic · Cascara",
      tagline: "Fruity, tart, almost tea. It all comes from one plant, including the regrets.",
      syrup: "cascara syrup", bitters: "cardamom bitters", cookie: "berry biscotti" },
    "tonic-orange": { name: "Desert Tonic · Orange-Cardamom",
      tagline: "Citrus oil and spice, warm and round. Polite, until the second sip.",
      syrup: "orange-cardamom syrup", bitters: "chocolate bitters", cookie: "chocolate-coffee sablé" },
    "tonic-louisa": { name: "Desert Tonic · Lemon Verbena",
      tagline: "Herbal, citrusy, crisp. Maybe it's there, maybe it isn't.",
      syrup: "lemon verbena syrup", bitters: "lime bitters", cookie: "spelt diamant cookies" }
  },

  roast: {
    type: {
      pony: "Great selfie. You return the cup yourself, it's called participation.",
      mapatz: "You built this city. The least you can do is drink slowly.",
      psych: "Coffee won't change your consciousness. It'll just bring it back to your body.",
      party: "Sunrise was two hours ago and you're still wearing a glow stick. Respect.",
      spirit: "You became one with the desert. The desert asks you to drink water.",
      builder: "Your art is standing. You barely are.",
      virgin: "Everyone's hugging you because they're glad you came. So are we. Slowly.",
      veteran: "Yes, it was better back then. The coffee was worse, though.",
      gifter: "You gave everyone a gift. This coffee is yours.",
      ranger: "You looked after everyone all night. Our turn to look after you.",
      campmom: "You took care of everyone. Did anyone ask how you are? We're asking.",
      lost: "The ice is across town. But you're here now, so sit.",
      moop: "The playa thanks you. It also asks you to return the cup."
    },
    day: {
      build: "Build week: no event yet, plenty of dust.",
      d1: "Day one: moisture in your skin, hope in your eyes.",
      d3: "Day three: the dust knows you by name.",
      d5: "Day five: you talk to the dust, and it answers.",
      burnnight: "Burn night: the effigy burns, you're just warming up.",
      exodus: "Last day: default is waiting. It can wait one more coffee.",
      nocount: "Unknown day: we don't know either. That's fine.",
      forever: "Since August: default sent a letter, it misses you."
    }
  },

  ui: {
    title: "Sloth Café – what should I drink?",
    brand: "Sloth Café",
    slogan: "The Slowest Brew on the Playa",
    welcomeText: "Five questions. Zero pressure. We're not in a hurry, and neither are you.",
    start: "Let's go (slowly)",
    back: "Back",
    progress: "Question {n} of {total}",
    resultIntro: "The sloth has decided",
    showBar: "Tell the bar the name or show them the screen",
    again: "Another round (slowly)",
    tagCocktail: "Cocktail",
    tagCoffeeOnly: "Hot coffee",
    cookieLabel: "Goes well with:",
    recipeCoffee: "filter coffee",
    recipeTonic: "tonic",
    recipeSpirit: "gin or juniper syrup"
  }
};
