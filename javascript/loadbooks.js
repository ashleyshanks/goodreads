"use strict";

console.log("script loaded");

const books = [
  {
    id: 1,
    title: "Orbital",
    author: "Samantha Harvey",
    description:
      "A slender novel of epic power and the winner of the Booker Prize 2024, Orbital deftly snapshots one day in the lives of six women and men traveling through space. Selected for one of the last space station missions of its kind before the program is dismantled, these astronauts and cosmonauts—from America, Russia, Italy, Britain, and Japan—have left their lives behind to travel at a speed of over seventeen thousand miles an hour as the earth reels below. We glimpse moments of their earthly lives through brief communications with family, their photos and talismans; we watch them whip up dehydrated meals, float in gravity-free sleep, and exercise in regimented routines to prevent atrophying muscles; we witness them form bonds that will stand between them and utter solitude. Most of all, we are with them as they behold and record their silent blue planet. Their experiences of sixteen sunrises and sunsets and the bright, blinking constellations of the galaxy are at once breathtakingly awesome and surprisingly intimate.Profound and contemplative, Orbital is a moving elegy to our environment and planet.",
    genre: ["fiction", "science fiction"],
    pages: 224,
    publisher: "Atlantic Monthly Press",
    pubDate: "2023-12-05",
    ISBN: 802161545,
    rating: 4.1,
    ratingCount: 19040,
    used: false,
  },
  {
    id: 2,
    title: "A Prayer for the Crown-Shy",
    author: "Becky Chambers",
    description:
      "After touring the rural areas of Panga, Sibling Dex (a Tea Monk of some renown) and Mosscap (a robot sent on a quest to determine what humanity really needs) turn their attention to the villages and cities of the little moon they call home.They hope to find the answers they seek, while making new friends, learning new concepts, and experiencing the entropic nature of the universe.Becky Chambers's new series continues to ask: in a world where people have what they want, does having more even matter?",
    genre: ["fiction", "science fiction"],
    pages: 160,
    publisher: "Tordotcom",
    pubDate: "2022-07-12",
    ISBN: 1250236231,
    rating: 4.6,
    ratingCount: 8257,
    used: false,
  },
  {
    id: 3,
    title: "Red Rising",
    author: "Pierce Brown",
    description:
      "Darrow is a Red, a member of the lowest caste in the color-coded society of the future. Like his fellow Reds, he works all day, believing that he and his people are making the surface of Mars livable for future generations. Yet he toils willingly, trusting that his blood and sweat will one day result in a better world for his children.But Darrow and his kind have been betrayed. Soon he discovers that humanity reached the surface generations ago. Vast cities and lush wilds spread across the planet. Darrow—and Reds like him—are nothing more than slaves to a decadent ruling class.Inspired by a longing for justice, and driven by the memory of lost love, Darrow sacrifices everything to infiltrate the legendary Institute, a proving ground for the dominant Gold caste, where the next generation of humanity’s overlords struggle for power.  He will be forced to compete for his life and the very future of civilization against the best and most brutal of Society’s ruling class. There, he will stop at nothing to bring down his enemies . . . even if it means he has to become one of them to do so.",
    genre: ["fiction", "science fiction"],
    pages: 416,
    publisher: "",
    pubDate: "2014-07-15",
    ISBN: 34553980,
    rating: 4.6,
    ratingCount: 92628,
    used: false,
  },
  {
    id: 4,
    title: "You Are a Magnet",
    author: "Amber Lyon",
    description:
      "We each hold the power to attract the life we want, the one we deserve, the one we dream of. Yet so many of us get stuck in a cycle of self-doubt, insecurities, and old patterns of behavior that hold us back.Through simple guiding principles and practical exercises, Amber Lyon shows you how to embrace your true worth, surrender the doubts that have held you back and enhance your inner magnetism. You are a Magnet shares powerful magnetic mindset shifts, that will change your perspective on yourself, your life and what’s possible for you. With each principle you will learn how to navigate self doubt, set a clear vision for whats next and learn how to make that vision a tangible reality.",
    genre: ["non-fiction", "self-help"],
    pages: 320,
    publisher: "Balance",
    pubDate: "2024-06-11",
    ISBN: 306835614,
    rating: 4.7,
    ratingCount: 130,
    used: false,
  },
  {
    id: 5,
    title: "The Martian",
    author: "Andy Weir",
    description:
      "Six days ago, astronaut Mark Watney became one of the first people to walk on Mars.Now, he’s sure he’ll be the first person to die there.After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that he’s alive—and even if he could get word out, his supplies would be gone long before a rescue could arrive.Chances are, though, he won’t have time to starve to death. The damaged machinery, unforgiving environment, or plain-old “human error” are much more likely to kill him first.But Mark isn’t ready to give up yet. Drawing on his ingenuity, his engineering skills—and a relentless, dogged refusal to quit—he steadfastly confronts one seemingly insurmountable obstacle after the next. Will his resourcefulness be enough to overcome the impossible odds against him?",
    genre: ["fiction", "science fiction"],
    pages: 387,
    publisher: "Ballantine Books",
    pubDate: "2014-10-28",
    ISBN: 553418025,
    rating: 4.6,
    ratingCount: 180718,
    used: false,
  },
  {
    id: 6,
    title: "Project Hail Mary",
    author: "Andy Weir",
    description:
      "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish.Except that right now, he doesn’t know that. He can’t even remember his own name, let alone the nature of his assignment or how to complete it.All he knows is that he’s been asleep for a very, very long time. And he’s just been awakened to find himself millions of miles from home, with nothing but two corpses for company.His crewmates dead, his memories fuzzily returning, Ryland realizes that an impossible task now confronts him. Hurtling through space on this tiny ship, it’s up to him to puzzle out an impossible scientific mystery—and conquer an extinction-level threat to our species.And with the clock ticking down and the nearest human being light-years away, he’s got to do it all alone.Or does he?",
    genre: ["fiction", "science fiction"],
    pages: 496,
    publisher: "Ballantine Books",
    pubDate: "2021-05-04",
    ISBN: 593135202,
    rating: 4.7,
    ratingCount: 197505,
    used: false,
  },
  {
    id: 7,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description:
      "Project: A Friendship That Changed Our MindsIn his mega bestseller, Thinking, Fast and Slow, Daniel Kahneman, world-famous psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think.System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. The impact of overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the profound effect of cognitive biases on everything from playing the stock market to planning our next vacation?each of these can be understood only by knowing how the two systems shape our judgments and decisions.Engaging the reader in a lively conversation about how we think, Kahneman reveals where we can and cannot trust our intuitions and how we can tap into the benefits of slow thinking. He offers practical and enlightening insights into how choices are made in both our business and our personal lives?and how we can use different techniques to guard against the mental glitches that often get us into trouble. Topping bestseller lists for almost ten years, Thinking, Fast and Slow is a contemporary classic, an essential book that has changed the lives of millions of readers.",
    genre: ["non-fiction", "psychology"],
    pages: 160,
    publisher: "Farrar",
    pubDate: "2013-04-02",
    ISBN: 374533555,
    rating: 4.6,
    ratingCount: 47846,
    used: false,
  },
  {
    id: 8,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    description:
      "Even the smartest among us can feel inept as we fail to figure out which light switch or oven burner to turn on, or whether to push, pull, or slide a door. The fault, argues this ingenious -- even liberating -- book, lies not in ourselves, but in product design that ignores the needs of users and the principles of cognitive psychology. The problems range from ambiguous and hidden controls to arbitrary relationships between controls and functions, coupled with a lack of feedback or other assistance and unreasonable demands on memorization.",
    genre: ["non-fiction", "design"],
    pages: 368,
    publisher: "Basic Books",
    pubDate: "2013-11-05",
    ISBN: 9780465050659,
    rating: 4.6,
    ratingCount: 8257,
    used: false,
  },
  {
    id: 9,
    title: "Oddbody",
    author: "Rose Keating",
    description:
      "In her debut collection, Rose Keating takes you on a bold journey through the intricacies of sex, shame, and womanhood. With ten enchanting short stories, she crafts an emotional masterpiece that challenges us to reflect on the movement and needs of our bodies. Strange yet utterly mesmerizing, Oddbody is a provocative exploration that feels both surprising and sincerely authentic.In “Oddbody,” a woman finds herself navigating a codependent relationship with a ghost, while “Squirm” portrays a daughter tending to her father as he devours himself from the inside out. “Pineapple” introduces us to a woman who opts to have feather wings surgically attached to her back. In “Eggshells,” a waitress gives birth to an egg during her breakfast shift. Each narrative in this collection is immersive, bizarre, and deeply empathetic, shining a light on women who dare to defy societal norms and invite you to question the conventions and milestones that determine success.",
    genre: ["fiction"],
    pages: 208,
    publisher: "Simon & Schuster",
    pubDate: "2025-07-01",
    ISBN: 1668061503,
    rating: 3.9,
    ratingCount: 24,
    used: false,
  },
  {
    id: 10,
    title: "If Cats Disappeared from the World",
    author: "Genki Kawamura",
    description:
      "This timeless tale from Genki Kawamura (producer of the Japanese blockbuster animated movie Your Name) is a moving story of loss and reconciliation, and of one man’s journey to discover what really matters most in life.The young postman’s days are numbered. Estranged from his family and living alone with only his cat, Cabbage, to keep him company, he was unprepared for the doctor’s diagnosis that he has only months to live. But before he can tackle his bucket list, the devil shows up to make him an offer: In exchange for making one thing in the world disappear, the postman will be granted one extra day of life. And so begins a very strange week that brings the young postman and his beloved cat to the brink of existence.With each object that disappears, the postman reflects on the life he’s lived, his joys and regrets, and the people he’s loved and lost.",
    genre: ["fiction", "supernatural"],
    pages: 176,
    publisher: "",
    pubDate: "2025-02-25",
    ISBN: 1250257689,
    rating: 4.2,
    ratingCount: 7200,
    used: false,
  },
  {
    id: 11,
    title: "The Martian Chronicles",
    author: "Ray Bradbury",
    description:
      "Mars was a distant shore, and the men spread upon it in waves... Each wave different, and each wave stronger.In a much-celebrated literary career that spanned seven decades, Ray Bradbury produced an astonishing body of work: unforgettable novels, including Fahrenheit 451 and Something Wicked This Way Comes; essays, theatrical works, screenplays and teleplays; The Illustrated Man, Dandelion Wine, The October Country, and numerous other superb short story collections. But of all the dazzling stars in the vast Bradbury universe, none shines more luminous than these masterful chronicles of Earth’s settlement of the fourth world from the sun.Bradbury’s Mars is a place of hope, dreams, and metaphor—of crystal pillars and fossil seas—where a fine dust settles on the great, empty cities of a silently destroyed civilization. It is here the invaders have come to despoil and commercialize, to grow and to learn—first a trickle, then a torrent, rushing from a world with no future toward a promise of tomorrow. The Earthman conquers Mars ... and then is conquered by it, lulled by dangerous lies of comfort and familiarity, and enchanted by the lingering glamour of an ancient, mysterious native race.The Martian Chronicles is a classic work of twentieth-century literature whose extraordinary power and imagination remain undimmed by time’s passage. In connected, chronological stories, a true grandmaster once again enthralls, delights, and challenges us with his vision and his heart—starkly and stunningly exposing in brilliant spacelight our strength, our weakness, our folly, and our poignant humanity on a strange and breathtaking world where humanity does not belong.",
    genre: ["fiction", "science fiction"],
    pages: 288,
    publisher: "William Morrow",
    pubDate: "2025-07-15",
    ISBN: 63445328,
    rating: 4.5,
    ratingCount: 7819,
    used: false,
  },
  {
    id: 12,
    title: "The Forever War",
    author: "Joe Haldeman",
    description:
      "The Earth's leaders have drawn a line in the interstellar sand--despite the fact that the fierce alien enemy they would oppose is inscrutable, unconquerable, and very far away. A reluctant conscript drafted into an elite Military unit, Private William Mandella has been propelled through space and time to fight in the distant thousand-year conflict; to perform his duties and do whatever it takes to survive the ordeal and return home. But 'home' may be even more terrifying than battle, because, thanks to the time dilation caused by space travel, Mandella is aging months while the Earth he left behind is aging centuries...",
    genre: ["fiction", "science fiction"],
    pages: 264,
    publisher: "St.Martin's Griffin",
    pubDate: "2009-02-17",
    ISBN: 312536631,
    rating: 4.4,
    ratingCount: 18165,
    used: false,
  },
  {
    id: 13,
    title: "Neverwhere",
    author: "Neil Gaiman",
    description:
      "Under the streets of London there’s aworld most people could never even dream of. A city of monsters and saints,murderers and angels. This is the city of the people who have fallen betweenthe cracks. A single act of kindness to a ragged girl he finds injured on thestreet catapults young businessman Richard Mayhew out of his workaday life intoa world that is both familiar and threateningly bizarre.Displaying bold creativity and narrativegenius, Neverwhere is a dark, funny, and seductive tale that has becomea contemporary literary touchstone.",
    genre: ["fiction"],
    pages: 464,
    publisher: "William Morrow Paperbacks",
    pubDate: "2021-01-19",
    ISBN: 63070723,
    rating: 4.4,
    ratingCount: 18165,
    used: false,
  },
  {
    id: 14,
    title: "Childhood’s End",
    author: "Arthur C. Clarke",
    description:
      "Without warning, giant silver ships from deep space appear in the skies above every major city on Earth. Manned by the Overlords, in fifty years, they eliminate ignorance, disease, and poverty. Then this golden age ends--and then the age of Mankind begins....",
    genre: ["fiction", "science fiction"],
    pages: 224,
    publisher: "Del Rey",
    pubDate: "1987-05-12",
    ISBN: 345347951,
    rating: 4.4,
    ratingCount: 14865,
    used: false,
  },
  {
    id: 15,
    title: "Do Androids Dream Of Electric Sheep?",
    author: "Philip K. Dick",
    description:
      "By 2021, the World War has killed millions, driving entire species into extinction and sending mankind off-planet. Those who remain covet any living creature, and for people who can’t afford one, companies built incredibly realistic simulacra: horses, birds, cats, sheep. They’ve even built humans. Immigrants to Mars receive androids so sophisticated they are indistinguishable from true men or women. Fearful of the havoc these artificial humans can wreak, the government bans them from Earth. Driven into hiding, unauthorized androids live among human beings, undetected. Rick Deckard, an officially sanctioned bounty hunter, is commissioned to find rogue androids and “retire” them. But when cornered, androids fight back—with lethal force.",
    genre: ["fiction", "science fiction"],
    pages: 240,
    publisher: "Random House Worlds",
    pubDate: "1996-05-28",
    ISBN: 345347951,
    rating: 4.4,
    ratingCount: 24739,
    used: false,
  },
  {
    id: 16,
    title: "House of Leaves",
    author: "Mark Z. Danielewski",
    description:
      "Years ago, when House of Leaves was first being passed around, it was nothing more than a badly bundled heap of paper, parts of which would occasionally surface on the Internet. No one could have anticipated the small but devoted following this terrifying story would soon command. Starting with an odd assortment of marginalized youth—musicians, tattoo artists, programmers, strippers, environmentalists, and adrenaline junkies—the book eventually made its way into the hands of older generations, who not only found themselves in those strangely arranged pages but also discovered a way back into the lives of their estranged children.Now made available in book form, complete with the original colored words, vertical footnotes, and second and third appendices, the story remains unchanged. Similarly, the cultural fascination with House of Leaves remains as fervent and as imaginative as ever. The novel has gone on to inspire doctorate-level courses and masters theses, cultural phenomena like the online urban legend of “the backrooms,” and incredible works of art in entirely unrealted mediums from music to video games. Neither Pulitzer Prize-winning photojournalist Will Navidson nor his companion Karen Green was prepared to face the consequences of the impossibility of their new home, until the day their two little children wandered off and their voices eerily began to return another story—of creature darkness, of an ever-growing abyss behind a closet door, and of that unholy growl which soon enough would tear through their walls and consume all their dreams.",
    genre: ["fiction", "horror"],
    pages: 709,
    publisher: "Pantheon",
    pubDate: "2000-03-07",
    ISBN: 375703764,
    rating: 4.4,
    ratingCount: 24739,
    used: false,
  },
  {
    id: 17,
    title: "Stranger in a Strange Land",
    author: "Robert A. Heinlein",
    description:
      "Raised by Martians on Mars, Valentine Michael Smith is a human who has never seen another member of his species. Sent to Earth, he is a stranger who must learn what it is to be a man. But his own beliefs and his powers far exceed the limits of humankind, and as he teaches them about grokking and water-sharing, he also inspires a transformation that will alter Earth’s inhabitants forever...",
    genre: ["fiction", "science fiction"],
    pages: 608,
    publisher: "Ace",
    pubDate: "2018-07-13",
    ISBN: 198480278,
    rating: 4.3,
    ratingCount: 11709,
    used: false,
  },
  {
    id: 18,
    title: "The October Country",
    author: "Ray Bradbury",
    description:
      "This classic collection features:The Emissary: The faithful dog was the sick boy’s only connection with the world outside—and beyond . . .The Small Assassin: A fine, healthy baby boy was the new mother’s dream come true—or her worst nightmare . . .The Scythe: Just when his luck had run out, Drew Erickson inherited a farm from a stranger; and with the bequest came deadly responsibilities . . .The Jar: A chilling story that combines love, death . . . and a matter of identity in a bottle of fear.The Wonderful Death of Dudley Stone: A most remarkable case of murder—the deceased was delighted . . . Plus fourteen more unforgettable tales!",
    genre: ["fiction", "supernatural"],
    pages: 352,
    publisher: "Del Rey",
    pubDate: "1996-09-24",
    ISBN: 345407857,
    rating: 4.5,
    ratingCount: 1874,
    used: false,
  },
  {
    id: 20,
    title: "I, Robot",
    author: "Isaac Asimov",
    description:
      "I, Robot, the first and most widely read book in Asimov’s Robot series, forever changed the world’s perception of artificial intelligence. Here are stories of robots gone mad, of mind-reading robots, and robots with a sense of humor. Of robot politicians, and robots who secretly run the world—all told with the dramatic blend of science fact and science fiction that has become Asimov’s trademark.The Three Laws of Robotics:1) A robot may not injure a human being or, through inaction, allow a human being to come to harm.2) A robot must obey orders given to it by human beings except where such orders would conflict with the First Law.3) A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.With these three, simple directives, Isaac Asimov formulated the laws governing robots’ behavior. In I, Robot, Asimov chronicles the development of the robot from its primitive origins in the present to its ultimate perfection in the not-so-distant future—a future in which humanity itself may be rendered obsolete.",
    genre: ["fiction", "science fiction"],
    pages: 256,
    publisher: "Del Rey",
    pubDate: "2008-04-29",
    ISBN: 55338256,
    rating: 4.5,
    ratingCount: 12493,
    used: false,
  },
  {
    id: 21,
    title: "The Restaurant at the End of the Universe",
    author: "Douglas Adams",
    description:
      "Facing annihilation at the hands of the warlike Vogons? Time for a cup of tea! Join the cosmically displaced Arthur Dent and his uncommon comrades in arms in their desperate search for a place to eat, as they hurtle across space powered by pure improbability.Among Arthur’s motley shipmates are Ford Prefect, a longtime friend and expert contributor to The Hitchhiker’s Guide to the Galaxy; Zaphod Beeblebrox, the three-armed, two-headed ex-president of the galaxy; Tricia McMillan, a fellow Earth refugee who’s gone native (her name is Trillian now); and Marvin, the moody android. Their destination? The ultimate hot spot for an evening of apocalyptic entertainment and fine dining, where the food speaks for itself (literally).Will they make it? The answer: hard to say. But bear in mind that The Hitchhiker’s Guide deleted the term “Future Perfect” from its pages, since it was discovered not to be!",
    genre: ["fiction", "science fiction"],
    pages: 256,
    publisher: "Del Rey",
    pubDate: "",
    ISBN: 345391810,
    rating: 4.5,
    ratingCount: 6986,
    used: false,
  },
  {
    id: 19,
    title: "Tailchaser’s Song",
    author: "Tad Williams",
    description:
      "Meet Fritti Tailchaser, a ginger tom cat of rare courage and curiosity, a born survivor in a world of heroes and villains, of powerful feline gods and whiskery legends about those strange furless, erect creatures called M’an.Join Tailchaser on his magical quest to rescue his catfriend Hushpad—a quest that will take him all the way to cat hell and beyond...",
    genre: ["fiction", "fantasy"],
    pages: 352,
    publisher: "DAW",
    pubDate: "2024-05-21",
    ISBN: 756415519,
    rating: 4.6,
    ratingCount: 814,
    used: false,
  },
  {
    id: 22,
    title: "The War of the Worlds",
    author: "H.G. Wells",
    description:
      "No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man’s and yet as mortal as his own....So begins The War of the Worlds, the science fiction classic that first proposed the possibility of intelligent life on other planets and has enthralled readers for generations. This compelling tale describes the Martian invasion of earth. When huge, tireless creatures land in England, complete chaos erupts. Using their fiery heat rays and crushing strength, the aliens just may succeed in silencing all opposition. Is life on earth doomed? Will mankind survive? A timeless view of a universe turned upside down, The War of the Worlds is an ingenious and imaginative look into the possibilities of the future and the secrets yet to be revealed.",
    genre: ["fiction", "science fiction"],
    pages: 224,
    publisher: "Signet",
    pubDate: "2007-09-04",
    ISBN: 451530659,
    rating: 4.5,
    ratingCount: 892,
    used: false,
  },
  {
    id: 23,
    title: "A Psalm for the Wild-Built",
    author: "Becky Chambers",
    description:
      "It's been centuries since the robots of Panga gained self-awareness and laid down their tools; centuries since they wandered, en masse, into the wilderness, never to be seen again; centuries since they faded into myth and urban legend.One day, the life of a tea monk is upended by the arrival of a robot, there to honor the old promise of checking in. The robot cannot go back until the question of 'what do people need?' is answered.But the answer to that question depends on who you ask, and how.They're going to need to ask it a lot.Becky Chambers's new series asks: in a world where people have what they want, does having more matter?",
    genre: ["fiction", "science fiction"],
    pages: 160,
    publisher: "Tordotcom",
    pubDate: "2021-06-13",
    ISBN: 1250236215,
    rating: 4.5,
    ratingCount: 17789,
    used: false,
  },
  {
    id: 24,
    title: "Someone You Can Build a Nest In",
    author: "John Wiswell",
    description:
      "Shesheshen is a shapeshifter, who happily resides as an amorphous lump at the bottom of a ruined manor. When her rest is interrupted by impolite monster hunters, she constructs a body from the remains of past meals: a metal chain for a backbone, borrowed bones for limbs, and a bear trap as an extra mouth.Badly hurt by the hunters, Shesheshen’s nursed back to health by Homily, a warm-hearted human. Homily is kind and would make a great co-parent: an ideal place to lay Shesheshen’s eggs so their young can devour Homily from the inside out. But as they grow close, Shesheshen realizes that eating her girlfriend isn’t an option.Just as Shesheshen’s about to confess her identity, Homily reveals something else: she’s hunting a shapeshifting monster that supposedly cursed her family. Has Shesheshen seen it anywhere?Shesheshen didn’t curse anyone, so now she has to figure out why Homily’s twisted family thinks she did. As Shesheshen’s hunt for the monster becomes increasingly deadly, the bigger challenge remains: learning how to build a life with, rather than in, the woman she loves.",
    genre: ["fiction", "supernatural"],
    pages: 336,
    publisher: "DAW",
    pubDate: "2025-04-29",
    ISBN: 756419743,
    rating: 4.4,
    ratingCount: 1484,
    used: false,
  },
  {
    id: 25,
    title: "Kin",
    author: "Tayari Jones",
    description:
      "Vernice and Annie, two motherless daughters raised in Honeysuckle, Louisiana, have been best friends and neighbors since earliest childhood but are fated to live starkly different lives. Raised by a fierce aunt determined to give her a stable home in the wake of her mother’s death, Vernice leaves Honeysuckle at eighteen for Spelman College, where she joins a sisterhood of powerfully connected Black women and discovers a world of affluence, manners, aspiration, and inequality. Annie, abandoned by her mother as a child and fixated on the idea of finding her and filling the bottomless hole left by her absence, sets off on a journey that will take her into a world of peril and adversity, as well as love and adventure, culminating in a battle for her life.A novel about mothers and daughters, friendship and sisterhood, and the complexities of being a woman in the American South, Kin is an exuberant, emotionally rich, unforgettable work from one of the brightest and most irresistible voices in contemporary fiction.",
    genre: ["fiction"],
    pages: 368,
    publisher: "Knopf",
    pubDate: "2026-02-24",
    ISBN: 525659188,
    rating: 4.5,
    ratingCount: 65,
    used: false,
  },
  {
    id: 26,
    title: "Dear Debbie",
    author: "Freida McFadden",
    description:
      "Sometimes, enough is enough…Debbie Mullen is losing it. For years, she has compiled all of her best advice into her column, Dear Debbie, where the wives of New England come for sympathy and neighborly advice. Through her work, Debbie has heard from countless women who are ignored, belittled, or even abused by their husbands. And Debbie does her best to guide them in the right direction. Or at least, she did. These days, Debbie's life seems to be spiraling out of control. She just lost her job. Something strange is happening with her teenage daughters. And her husband is keeping secrets, according to the tracking app she installed on his phone. Now, Debbie's done being the bigger person. She's done being reasonable and practical. It's time to take her own advice. And now it's time for payback against all the people in her life who deserve it the most.",
    genre: ["fiction", "thriller"],
    pages: 336,
    publisher: "Poisoned Pen Press",
    pubDate: "2026-01-27",
    ISBN: 1464249628,
    rating: 4.2,
    ratingCount: 81155,
    used: false,
  },
  {
    id: 27,
    title: "Heart the Lover",
    author: "Lily King",
    description:
      "You knew I’d write a book about you someday.Our narrator understands good love stories—their secrets and subtext, their highs and free falls. But her greatest love story, the one she lived, never followed the simple rules.In the fall of her senior year of college, she meets two star students from her 17th-Century Lit class: Sam and Yash. Best friends living off campus in the elegant house of a professor on sabbatical, the boys invite her into their intoxicating world of academic fervor, rapid-fire banter and raucous card games. They nickname her Jordan, and she quickly discovers the pleasures of friendship, love and her own intellectual ambition. But youthful passion is unpredictable, and soon she finds herself at the center of a charged and intricate triangle. As graduation comes and goes, choices made will alter these three lives forever.Decades later, the vulnerable days of Jordan's youth seem comfortably behind her. But when a surprise visit and unexpected news bring the past crashing into the present, she returns to a world she left behind and must confront the decisions and deceptions of her younger self.Written with the superb wit and emotional sensitivity fans and critics of Lily King have come to adore, Heart the Lover is a deeply moving love story that celebrates literature, forgiveness, and the transformative bonds that shape our lives. Wise, unforgettable, and with a delightful connective thread to Writers & Lovers, this is King at her very best, affirming her as a masterful chronicler of the human experience and one of the finest novelists at work today.",
    genre: ["fiction", "romance"],
    pages: 256,
    publisher: "Grove Press",
    pubDate: "2025-09-30",
    ISBN: 1250236231,
    rating: 4.6,
    ratingCount: 8257,
    used: false,
  },
];

renderPrevRead(books);

// --populate five books into previously read if not done already--

function renderPrevRead(books) {
  console.log("renderPrevRead called successfully");
  console.log("arg passed as..");
  console.log(books);
  let count = 0;
  let prevRead = [];
  while (count < 5) {
    let bookID = `b${Math.floor(Math.random() * 27) + 1}`;
    //loop through books obj array to find matching book
    for (const book of books) {
      if (book.id === bookID) {
        if (!book.used) {
          prevRead.push({ id: book.id, dateRead: null, myRating: null });
          count++;
          book.used = true;
        }
      }
    }
  }
  //--add info into temp prev read obj array--
  for (const book of prevRead) {
    book.dateRead = `2025-${Math.floor(Math.random() * 11) + 1}-${
      Math.floor(Math.random() * 29) + 1
    }`;
    book.myRating = Math.round(Math.random() * 5);
  }

  console.log("prevRead...");
  console.log(prevRead);
  return prevRead;
}

//get data
// let dataLoadedSuccess = false;

// const initializeBookData = () => {
//   //attempt to load curr read, prev read, recommendeded
//   const currReading = JSON.parse(localStorage.getItem("currReading")) || [];
//   const prevRead = JSON.parse(localStorage.getItem("prevRead")) || [];
//   const recommended = JSON.parse(localStorage.getItem("recommended")) || [];

//   return { currReading, prevRead, recommended };
// };

// let { currReading, prevRead, recommended } = initializeBookData();
// let books = {};

//check to see if items existed in local storage

// const getBooks = async () => {
//   if (
//     currReading.length === 0 ||
//     prevRead.length === 0 ||
//     recommended.length === 0
//   ) {
//     try {
//       //load unsuccessful
//       //create copy of books.json
//       console.log("entered try block");
//       const response = await fetch(
//         "https://ashleyshanks.github.io/goodreads/books.json"
//       );
//       const books = await response.json();
//       // instead of returning, call functions that use books
//       console.log("calling renderPrevRead");
//       renderPrevRead(books);
//     } catch (exception) {
//       console.log(exception);
//     }
//   } else {
//     //load successful
//     //load copy of book obj array
//     dataLoadedSuccess = true;
//     return JSON.parse(localStorage.getItem("books"));
//   }
// };

// getBooks();
//--populate five books into previously read if not done already--
// function renderPrevRead(books) {
//   console.log("renderPrevRead called successfully");
//   console.log("arg passed as..");
//   console.log(books);
//   let count = 0;
//   prevRead = [];
//   while (count < 5) {
//     let bookID = `b${Math.floor(Math.random() * 27) + 1}`;
//     //loop through books obj array to find matching book
//     for (const book of books) {
//       if (book.id === bookID) {
//         if (!book.used) {
//           prevRead.push({ id: book.id, dateRead: null, myRating: null });
//           count++;
//           book.used = true;
//         }
//       }
//     }
//   }
//   //--add info into temp prev read obj array--
//   for (const book of prevRead) {
//     book.dateRead = `2025-${Math.floor(Math.random() * 11) + 1}-${
//       Math.floor(Math.random() * 29) + 1
//     }`;
//     book.myRating = Math.round(Math.random() * 5);
//   }

//   console.log("prevRead...");
//   console.log(prevRead);
//   return prevRead;
// }

//FIX ME
// const loadData = async () => {
//   console.log("check");
//   books = await getBooks();

//   if (!dataLoadedSuccess) {
//     prevRead = renderPrevRead(books);
//   }

//   console.log("prevRead is..");
//   console.log(prevRead);
// };

// loadData();

//if it is successful, load copy of book obj array
//if not //make boolean booksloaded false recopy og
//book obj array for all are unused, and begin below functions

//--populate 2 books into currently reading if curr read obj does not exist--
//start count at 0
//loop until count is 2
//get a random number 1-27
//make sure this number b# is not used
//add to curr read obj array
//mark as used
//add to count
//save these books into a temp curr read obj array
//save book total pages into temp var
//get random number for pages read using pages var
//--done--

//--populate 2 books into recommended if recc array is not filled--
//start counter at 0
//while loop through books array until count is 2
//check to make sure book is not used
//for first book, save genres list in temp var
//add first book id into recommended array
//add to count
//mark as used in original book obj
//if genres list var exists, go into a second loop through book obj array
//check book is not used
//check book genre matches genre var
//if it not used and matches genre var, add to recc array
//add count
//--done--

//save curr read, prev, recommended, and book obj array copy
//make sure this save only lasts until site is closed

//end primary functions, below will not be saved

//--populate 3 books into what community is reading--
//start 0 count
//loop through book obj arr until count is 3
//get random number 1-27
//check to see if book w random number id is used
//if not used, add to comm read array
//mark as used
//add to count

//populate html
// grab the doc nodes you need
//populate prev read, curr read, reccom, comm read
