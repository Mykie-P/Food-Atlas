const recipes = [
    {
        id: 1,
        title: "Salmon Terrine",
        cuisine: "French Cuisine",
        description: "Salmon Terrine is a savory dish made with layers of fresh or smoked salmon, often combined with cream cheese, herbs, and other complementary ingredients like dill, lemon zest, or capers. The mixture is typically set in a mold and chilled, resulting in a firm yet creamy texture. This elegant appetizer is sliced into portions and served cold, often accompanied by crackers, toast, or a light salad, making it a popular choice for festive gatherings or gourmet occasions.",
        prepTime: "20 minutes",
        cookTime: "10 minutes",
        additionalTime: "3 hours and 10 minutes",
        totalTime: "3 hours and 40 minutes",
        ingredients: [
            "1.25 quart water",
            "2 teaspoons salt",
            "1 (12 ounce) fresh salmon fillet",
            "8 ounces smoked salmon, chopped",
            "⅓ cup chopped green onion",
            "2 tablespoons chopped fresh parsley",
            "1 teaspoon chopped fresh tarragon, or to taste",
            "7 tablespoons butter, softened",
            "½ cup mayonnaise",
            "1 tablespoon Dijon mustard",
            "1 tablespoon fresh lemon juice, or to taste",
            "½ teaspoon black pepper"
        ],
        instructions: [
            "Step 1: Bring water to a boil in a large saucepan and add salt. Add salmon fillet, reduce to a simmer, and cook until just cooked through, 6 to 8 minutes. Transfer salmon to a plate using a slotted spoon and let cool 10 minutes. Flake salmon into a large bowl, discarding skin, and toss with smoked salmon, green onion, parsley, and tarragon.",
            "Step 2: Whisk together butter, mayonnaise, mustard, lemon juice, and pepper in a bowl until smooth. Add mayonnaise mixture to salmon mixture and gently stir until well combined.",
            "Step 3: Cover and chill 3 hours. Serve with toasted baguette slices or crackers."
        ],
        tips: "This can be made up to one day ahead. We liked the flavor and texture best at room temperature.",
        imagesrc: "salmonterrine.png",
        rating: 5
    },


    {
        id: 2,
        title: "Pepperoni Pizza",
        cuisine: "Italian Cuisine",
        description: "Pepperoni pizza is a classic pizza option and is one of the most well-loved pizzas",
        prepTime: "20 minutes",
        cookTime: "20 minutes",
        totalTime: "40 minutes",
        ingredients: [
            "½ cup water",
            "½ (12 ounce) can Contadina Tomato Paste",
            "1 teaspoon dried oregano, crushed",
            "1 teaspoon dried basil, crushed",
            "½ teaspoon garlic powder",
            "½ teaspoon onion powder",
            "½ teaspoon sugar",
            "½ teaspoon salt",
            "¼ teaspoon black pepper",
            "3 ¼ cups all-purpose flour",
            "2 (.25 ounce) envelopes",
            "1 tablespoon sugar",
            "1 ½ teaspoons salt",
            "1 ⅓ cups very warm water (120 degrees F to 130 degrees F)",
            "⅓ cup oil",
            "1 cup shredded mozzarella cheese",
            "1 (6 ounce) package Hormel Pepperoni"
        ],
        instructions: [
            "Step 1: Preheat the oven to 425 degrees F (220 degrees C). Grease two 12-inch pizza pans.",
            "Step 2: Make sauce: Whisk together water, tomato paste, oregano, basil, garlic powder, onion powder, sugar, salt, and pepper in a medium bowl until smooth. Set aside.",
            "Step 3: Make crust: Combine 2 cups flour, yeast, sugar, and salt in a large bowl. Add warm water and oil; mix until well blended, about 1 minute. Gradually add remaining flour, a little at a time, until a soft, sticky dough forms.",
            "Step 4: Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. (If using RapidRise yeast, let dough rest, covered, for 10 minutes.)",
            "Step 5: Divide dough in half. Lightly flour your hands, then pat each piece of dough onto the prepared pizza pans.",
            "Step 6: Top dough with sauce, cheese, and pepperoni.",
            "Step 7: Bake in the preheated oven until crusts are browned and cheese is bubbly, 18 to 20 minutes. Rotate pizza pans between the top and bottom oven racks halfway through baking."
        ],
        tips: "This recipe only uses half of a 12-ounce can of tomato paste. You can store the leftover tomato paste in the freezer.",
        imagesrc: "pepperonipizza.png",
        rating: 5
        },

        {
        id: 3,
        title: "Ramen",
        cuisine: "Japanese Cuisine",
        description: "The pork bones are cooked for hours over high heat so the collagen from the bones has time to transform into gelatin, which gives bone broth its silky texture",
        prepTime: "1 hour",
        cookTime: "7 hours",
        totalTime: "16 hours",
        ingredients: [
        "1 pound split pig's trotters",
        "2 green onions",
        "½ yellow onion, unpeeled, quartered",
        "1 1-inch piece ginger, unpeeled",
        "Sea salt, to taste",
        "Soy sauce, to taste",
         "7 ounces fresh ramen noodles",
        "4 slices chashu pork (pork belly or loin cooked in soy sauce and mirin)",
        "¼ cup enoki mushrooms",
        "2 pieces menma (fermented bamboo shoots)",
        "2 pieces nori",
        "1 shoyu tamago (soy sauce egg) or soft boiled egg, halved",
        "¼ cup green onions, thinly sliced",
        "1 tablespoon coarsely ground sesame seeds",
         "Mayu (black garlic oil) or chili oil, to taste"
        ],
        instructions: [
        "Make the pork broth. Transfer the trotters to a large stock pot and cover with cold water. Bring to a boil over high heat, then remove from the heat and drain in a colander, discarding the liquid.",
        "Using chopsticks, clean the bones under cold running water to remove any red or brown blood or organ pieces.",
        "Transfer the cleaned bones to a clean stock pot.",
        "In a large cast iron skillet over medium-high heat, toast the green onions, yellow onion, and ginger, turning occasionally, until the aromatics are charred in places.",
        "Add charred aromatics to the stock pot with the cleaned bones and cover with cold water.",
        "Bring to a boil over high heat, skimming off any scum that floats to the surface. Continue to boil and skim for 20 minutes, then cover and reduce to a simmer.",
        "Continue simmering, adding enough water as needed to keep bones and aromatics covered, until broth is opaque, about 6 hours.",
        "Uncover and bring to a boil. Let broth reduce to desired thickness.",
        "Strain the broth through a fine-mesh strainer and refrigerate overnight.",
        "When cool, bone broth should be very thick and gelatinous, and there should be a layer of fat on top of the broth.",
        "In a stock pot, bring pork bone broth and pork fat to a simmer over medium heat.",
        "Season to taste with salt and soy sauce.",
        "Meanwhile, bring a large pot of water to a boil.",
        "Cook ramen noodles in boiling water according to package directions.",
        "Divide the ramen noodles between two bowls and ladle the pork broth over the noodles.",
        "Top each bowl with two slices of chashu pork, enoki mushrooms, and menma.",
        "Tuck a nori sheet in between the side of the bowl and an egg half.",
        "Sprinkle the bowls with green onions and sesame seeds, and drizzle with mayu and/or chili oil, as desired."
        ],
        imagesrc: "ramen.png",
        rating: 5
        },

        {
            id: 4,
            title: "Chicken Adobo",
            cuisine: "Filipino Cuisine",
            description: "The taste of juicy chicken in a succulent, umami adobo sauce makes chicken adobo a comfort food for all ages. From kids to adults, we can’t get enough of this mouthwatering meal!",
            prepTime: "15 mins",
            cookTime: "45 mins",    
            totalTime: "1 hr",
            ingredients: [
              "2 tablespoons vegetable oil",
              "1 (3 pound) chicken, cut into pieces",
              "1 large onion, quartered and sliced",
              "2 tablespoons minced garlic",
              "⅔ cup low sodium soy sauce",
              "⅓ cup white vinegar",
              "1 tablespoon garlic powder",
              "2 teaspoons black pepper",
              "1 bay leaf"
            ],
            instructions: [
              "Heat vegetable oil in a large skillet over medium-high heat. Cook chicken pieces until golden brown, 2 to 3 minutes per side. Transfer chicken to a plate and set aside.",
              "Add onion and garlic to the skillet; cook until softened and brown, about 3 to 5 minutes.",
              "Pour in soy sauce and vinegar and season with garlic powder, black pepper, and bay leaf.",
              "Return chicken to pan, increase heat to high, and bring to a boil. Reduce heat to medium-low, cover, and simmer until chicken is tender and cooked through, 35 to 40 minutes."
            ],
            rating: 5
          },

        {
            id: 5,
            title: "Bibimbap",
            cuisine: "South Korean Cuisine",
            description: "This bibimbap recipe makes a popular and delicious Korean meal. Meaning mixed rice, bibimbap is a delicious rice bowl topped with vegetables, beef, a whole egg, and gochujang (red chili pepper paste). Traditionally, bibimbap was eaten on the eve of the Lunar New Year, to use up any leftovers before the start of the new year.",
            prepTime: "30 mins",
            cookTime: "30 mins",
            totalTime: "1 hr",
            servings: 4,
            ingredients: [
              "1 English cucumber, cut into matchsticks",
              "¼ cup gochujang (Korean hot pepper paste) (Optional)",
              "1 bunch fresh spinach, cut into thin strips",
              "1 tablespoon soy sauce",
              "2 teaspoons olive oil, divided",
              "2 carrots, cut into matchsticks",
              "1 clove garlic, minced",
              "1 pinch red pepper flakes",
              "1 pound thinly-sliced beef top round steak",
              "4 large eggs",
              "4 cups cooked white rice",
              "4 teaspoons toasted sesame oil, divided",
              "1 teaspoon sesame seeds",
              "2 teaspoons gochujang (Korean hot pepper paste), divided (Optional)"
            ],
            instructions: [
              "Stir together cucumber pieces and gochujang paste in a bowl; set aside.",
              "Bring about 2 cups water to a boil in a large nonstick skillet and stir in spinach; cook until bright green and wilted, 2 to 3 minutes.",
              "Drain spinach and squeeze out as much moisture as possible; set spinach aside in a bowl and stir in soy sauce.",
              "Heat 1 teaspoon olive oil in a large nonstick skillet; cook and stir carrots until softened, about 3 minutes.",
              "Stir in garlic and cook just until fragrant, about 1 minute. Stir in cucumber mixture; sprinkle with red pepper flakes. Set carrot mixture aside in a bowl.",
              "Brown beef in a clean nonstick skillet over medium heat, about 5 minutes per side; set aside.",
              "Heat remaining 1 teaspoon olive oil in another nonstick skillet over medium-low heat. Fry eggs just on one side until yolks are runny, but whites are firm, 2 to 4 minutes.",
              "Divide cooked rice into 4 large serving bowls; top with spinach mixture, a few pieces of beef, and cucumber mixture. Place 1 egg atop each serving. Drizzle each bowl with 1 teaspoon sesame oil, a sprinkle of sesame seeds, and a small amount of gochujang paste if desired."
            ]
        },

        {
            id: 6,
            title: "Chicken Curry",
            cuisine: "Indian Cuisine",
            description: "This is a really good recipe for spicy Indian chicken curry. It's pretty easy to make and tastes really good!",
            prepTime: "20 mins",
            cookTime: "40 mins",
            totalTime: "1 hr",
            ingredients: [
              "2 pounds skinless, boneless chicken breast halves",
              "2 teaspoons salt",
              "½ cup cooking oil",
              "1 ½ cups chopped onion",
              "1 tablespoon minced garlic",
              "1 ½ teaspoons minced fresh ginger root",
              "1 tablespoon curry powder",
              "1 teaspoon ground cumin",
              "1 teaspoon ground turmeric",
              "1 teaspoon ground coriander",
              "1 teaspoon cayenne pepper",
              "1 tablespoon water",
              "1 (15 ounce) can crushed tomatoes",
              "1 cup plain yogurt",
              "1 tablespoon chopped fresh cilantro",
              "1 teaspoon salt",
              "½ cup water",
              "1 teaspoon garam masala",
              "1 tablespoon chopped fresh cilantro",
              "1 tablespoon fresh lemon juice"
            ],
            instructions: [
              "Gather all ingredients.",
              "Sprinkle the chicken breasts with 2 teaspoons salt. Heat oil in a large skillet over high heat; partially cook the chicken in the hot oil in batches until completely browned on all sides. Transfer browned chicken breasts to a plate and set aside.",
              "Reduce the heat to medium and add onion, garlic, and ginger to the oil remaining in the skillet. Cook and stir until onion turns soft and translucent, 5 to 8 minutes. Stir curry powder, cumin, turmeric, coriander, cayenne, and 1 tablespoon of water into the onion mixture; allow to heat together for about 1 minute while stirring.",
              "Add tomatoes, yogurt, 1 tablespoon chopped cilantro, and 1 teaspoon salt to the mixture; stir to combine.",
              "Return chicken breast to the skillet along with any juices on the plate. Pour in ½ cup water and bring to a boil, turning the chicken to coat with the sauce. Sprinkle garam masala and 1 tablespoon cilantro over the chicken.",
              "Cover the skillet and simmer until chicken breasts are no longer pink in the center and the juices run clear, about 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). Drizzle with lemon juice to serve."
            ]
        },
        {
            id: 7,
            title: "Tacos",
            cuisine: "Mexican Cuisine",
            description: "These carne asada tacos made with tender strips of flank steak, served on soft corn tortillas are as good as you get at a taqueria. So delicious topped with onion relish and homemade tomato salsa!",
            prepTime: "30 mins",
            cookTime: "30 mins",
            additionalTime: "1 hr",
            totalTime: "2 hrs",
            servings: 16,
            ingredients: [
              "3 pounds flank steak",
              "Marinade:",
              "½ cup soy sauce",
              "½ cup olive oil",
              "⅓ cup white vinegar",
              "4 cloves garlic, minced",
              "2 limes, juiced",
              "1 teaspoon salt",
              "1 teaspoon ground black pepper",
              "1 teaspoon ground white pepper",
              "1 teaspoon garlic powder",
              "1 teaspoon chili powder",
              "1 teaspoon dried oregano",
              "1 teaspoon ground cumin",
              "1 teaspoon paprika",
              "Onion Relish:",
              "1 white onion, chopped",
              "½ cup chopped fresh cilantro",
              "1 lime, juiced",
              "Salsa:",
              "4 dried New Mexico chile pods",
              "2 large tomatoes, chopped",
              "1 white onion, quartered",
              "4 cloves garlic, peeled",
              "2 jalapeno peppers, chopped",
              "1 pinch salt and black pepper",
              "Other:",
              "1 (32 ounce) package corn tortillas",
              "2 cups grated cotija cheese (Optional)",
              "2 limes, cut into wedges"
            ],
            instructions: [
              "Lay flank steak in a large glass baking dish.",
              "Make the marinade: Whisk soy sauce, oil, vinegar, 4 cloves of garlic, juice of two limes, salt, black pepper, white pepper, garlic powder, chili powder, oregano, cumin, and paprika together in a bowl until well blended; pour over steak, turning to coat both sides. Cover the dish with plastic wrap and marinate in the refrigerator for 1 to 8 hours.",
              "Make the relish: Stir onion, cilantro, and lime juice together in a small bowl. Set aside.",
              "Make the salsa: Preheat the oven to 450 degrees F (230 degrees C). Heat a skillet over medium-high heat. Add chile pods and toast for a few minutes; transfer pods to a bowl of water and soak for 30 minutes.",
              "Place tomatoes, 1 onion, 4 cloves of garlic, and jalapeños onto a baking sheet. Roast in the preheated oven until vegetables are toasted, about 20 minutes.",
              "Transfer vegetables into a blender or food processor. Add soaked chiles, salt, and pepper; puree until smooth.",
              "Remove steak from the marinade and shake off excess. Discard the remaining marinade. Cut the marinated flank steak into cubes or strips. Heat vegetable oil in a large skillet over medium-high heat. Add steak; cook and stir until cooked through and most of the liquid has evaporated.",
              "Warm tortillas in a dry skillet over low heat for about a minute on each side.",
              "Place some steak on each tortilla; top with relish and prepared salsa. Sprinkle with cotija cheese. Garnish with lime wedges and serve."
            ]
        },
        {
            id: 7,
            title: "Tacos",
            cuisine: "Mexican Cuisine",
            description: "These carne asada tacos made with tender strips of flank steak, served on soft corn tortillas are as good as you get at a taqueria. So delicious topped with onion relish and homemade tomato salsa!",
            prepTime: "30 mins",
            cookTime: "30 mins",
            additionalTime: "1 hr",
            totalTime: "2 hrs",
            servings: 16,
            ingredients: [
              "3 pounds flank steak",
              "Marinade:",
              "½ cup soy sauce",
              "½ cup olive oil",
              "⅓ cup white vinegar",
              "4 cloves garlic, minced",
              "2 limes, juiced",
              "1 teaspoon salt",
              "1 teaspoon ground black pepper",
              "1 teaspoon ground white pepper",
              "1 teaspoon garlic powder",
              "1 teaspoon chili powder",
              "1 teaspoon dried oregano",
              "1 teaspoon ground cumin",
              "1 teaspoon paprika",
              "Onion Relish:",
              "1 white onion, chopped",
              "½ cup chopped fresh cilantro",
              "1 lime, juiced",
              "Salsa:",
              "4 dried New Mexico chile pods",
              "2 large tomatoes, chopped",
              "1 white onion, quartered",
              "4 cloves garlic, peeled",
              "2 jalapeno peppers, chopped",
              "1 pinch salt and black pepper",
              "Other:",
              "1 (32 ounce) package corn tortillas",
              "2 cups grated cotija cheese (Optional)",
              "2 limes, cut into wedges"
            ],
            instructions: [
              "Lay flank steak in a large glass baking dish.",
              "Make the marinade: Whisk soy sauce, oil, vinegar, 4 cloves of garlic, juice of two limes, salt, black pepper, white pepper, garlic powder, chili powder, oregano, cumin, and paprika together in a bowl until well blended; pour over steak, turning to coat both sides. Cover the dish with plastic wrap and marinate in the refrigerator for 1 to 8 hours.",
              "Make the relish: Stir onion, cilantro, and lime juice together in a small bowl. Set aside.",
              "Make the salsa: Preheat the oven to 450 degrees F (230 degrees C). Heat a skillet over medium-high heat. Add chile pods and toast for a few minutes; transfer pods to a bowl of water and soak for 30 minutes.",
              "Place tomatoes, 1 onion, 4 cloves of garlic, and jalapeños onto a baking sheet. Roast in the preheated oven until vegetables are toasted, about 20 minutes.",
              "Transfer vegetables into a blender or food processor. Add soaked chiles, salt, and pepper; puree until smooth.",
              "Remove steak from the marinade and shake off excess. Discard the remaining marinade. Cut the marinated flank steak into cubes or strips. Heat vegetable oil in a large skillet over medium-high heat. Add steak; cook and stir until cooked through and most of the liquid has evaporated.",
              "Warm tortillas in a dry skillet over low heat for about a minute on each side.",
              "Place some steak on each tortilla; top with relish and prepared salsa. Sprinkle with cotija cheese. Garnish with lime wedges and serve."
            ]
        },
        {
            id: 8,
            title: "Kebab",
            cuisine: "Turkish Cuisine",
            description: "These lamb seekh kebabs are a spicy and extremely flavorful recipe that will surely be a hit at any outdoor party.",
            prepTime: "15 mins",
            cookTime: "10 mins",
            additionalTime: "2 hrs",
            totalTime: "2 hrs 25 mins",
            servings: 8,
            ingredients: [
              "2 pounds lean ground lamb",
              "2 medium onions, finely chopped",
              "½ cup fresh mint leaves, finely chopped",
              "½ cup cilantro, finely chopped",
              "1 tablespoon ginger paste",
              "1 tablespoon green chile paste",
              "2 teaspoons ground cumin",
              "2 teaspoons ground coriander",
              "2 teaspoons paprika",
              "2 teaspoons salt",
              "1 teaspoon cayenne pepper",
              "8 skewers",
              "¼ cup vegetable oil for brushing, or as needed"
            ],
            instructions: [
              "Mix ground lamb, onions, mint, cilantro, ginger paste, and chile paste together in a large bowl. Season with cumin, coriander, paprika, salt, and cayenne. Cover and chill in the refrigerator for 2 hours. Soak skewers in cold water.",
              "Divide lamb mixture into 8 equal portions; mold portions onto skewers to form a sausage shape. Refrigerate skewers until you are ready to grill.",
              "Preheat an outdoor grill for high heat and brush the grate liberally with oil.",
              "Cook skewers on the preheated grill, turning frequently, until nicely browned on all sides and meat is no longer pink in the center, about 10 minutes. An instant-read thermometer inserted into the center should read at least 160 degrees F (71 degrees C)."
            ],
            tips: [
              "Nutrition data for this recipe includes the full amount of vegetable oil. The actual amount of oil consumed will vary."
            ]
        },
        {
            id: 9,
            title: "Pad Thai",
            cuisine: "Thai",
            description: "This Sukhothai pad thai can be made with shrimp, chicken, or pork instead of tofu. You can also look for items in the Asian foods section at your local grocery store. Adjust the pad thai sauce ingredients to taste.",
            prepTime: "20 mins",
            cookTime: "10 mins",
            totalTime: "30 mins",
            servings: 8,
            ingredients: [
              "½ cup white sugar",
              "½ cup distilled white vinegar",
              "¼ cup soy sauce",
              "2 tablespoons tamarind pulp",
              "1 (12 ounce) package dried rice noodles",
              "½ cup vegetable oil",
              "1 ½ teaspoons minced garlic",
              "4 eggs",
              "1 (12 ounce) package firm tofu, cut into 1/2 inch strips",
              "1 ½ tablespoons white sugar",
              "1 ½ teaspoons salt",
              "1 ½ cups ground peanuts",
              "1 ½ teaspoons ground, dried oriental radish",
              "½ cup chopped fresh chives",
              "1 tablespoon paprika",
              "2 cups fresh bean sprouts",
              "1 lime, cut into wedges"
            ],
            instructions: [
              "To prepare pad thai sauce: In a medium saucepan over medium heat, blend sugar, vinegar, soy sauce, and tamarind pulp.",
              "To make pad thai: Soak rice noodles in cold water until soft; drain. In a large skillet or wok over medium heat, warm oil and add garlic and eggs; scramble eggs.",
              "Add tofu and stir until well mixed; add noodles and stir until cooked.",
              "Stir in pad thai sauce, 1 1/2 tablespoons sugar, and 1 1/2 teaspoons salt. Stir in peanuts and ground radish.",
              "Remove from heat and add chives and paprika.",
              "Serve with lime and bean sprouts on the side."
            ]
        },
        {
            id: 10,
            title: "Mapo Tofu",
            cuisine: "Chinese",
            description: "A simple, delicious Chinese mapo tofu recipe (mabo dobu is the Japanese adaptation) that has been passed on for years.",
            prepTime: "25 mins",
            cookTime: "15 mins",
            totalTime: "40 mins",
            servings: 4,
            ingredients: [
              "1 tablespoon cold water",
              "1 teaspoon cornstarch",
              "½ pound ground pork",
              "1 tablespoon vegetable oil",
              "1 tablespoon minced garlic",
              "1 tablespoon minced fresh ginger root",
              "1 (16 ounce) package firm tofu, cut into 1 inch pieces",
              "5 tablespoons soy sauce",
              "2 tablespoons hot bean sauce",
              "1 teaspoon white sugar",
              "3 green onions, chopped",
              "1 teaspoon sesame oil"
            ],
            instructions: [
              "Mix water and cornstarch in a small bowl; set aside.",
              "Brown ground pork in a small skillet over medium-high heat, about 5 minutes. Drain fat.",
              "Heat oil over medium-high heat in a large skillet or wok. Cook garlic and ginger in oil until fragrant, about 1 minute.",
              "Stir in tofu and cook for 2 minutes. Season with soy sauce, hot bean sauce, and sugar; stir to combine.",
              "Stir in cooked pork and green onion. Sprinkle with cornstarch and water mixture; cook and stir until thickened, about 2 minutes.",
              "Stir sesame oil into the thickened mapo tofu."
            ]
        },
    
        {
            id: 11,
            title: "Green Beans Almondine",
            cuisine: "French Cuisine",
            servings: 4,
            ingredients: [
              "1 pound fresh green beans",
              "1 ½ ounces slivered almonds",
              "2 tablespoons butter",
              "2 cloves garlic, minced, or more to taste",
              "salt and ground black pepper to taste"
            ],
            description: "none",
            instructions: [
              "Step 1: Place beans into a microwave-safe casserole dish with enough water to cover the bottom. Microwave on high power until almost tender, 8 to 10 minutes. Drain in a colander and refresh under cold running water to keep them bright green in color.",
              "Step 2: Heat a frying pan over medium heat. Add almonds and cook until just starting to turn golden, about 3 to 5 minutes, watching closely so as to not burn. Take pan off of heat and add butter to melt. Return to heat and add garlic. Mix in green beans, season with salt and pepper, and continue to stir until heated through, 3 to 5 minutes."
            ],
            prepTime: "10 mins",
            cookTime: "15 mins",
            totalTime: "25 mins",
            imagesrc: "Green Beans Almondine.png"
          },
          {
            id: 12,
            title: "Fondant Potatoes",
            cuisine: "French Cuisine",
            servings: 6,
            ingredients: [
              "3 large whole russet potatoes",
              "2 tablespoons high-heat-resistant vegetable oil, such as grapeseed oil",
              "salt and ground black pepper to taste",
              "3 tablespoons butter",
              "4 sprigs thyme, plus more for garnish",
              "½ cup chicken broth, or more as needed"
            ],
            description: "none",
            instructions: [
              "Step 1: Preheat the oven to 425 degrees F (220 degrees C).",
              "Step 2: Cut off ends of russet potatoes. Stand potatoes on end, and peel them from top to bottom with a sharp knife to make each potato into a uniform cylinder. Cut each cylinder in half crosswise to make 6 potato cylinders about 2 inches long.",
              "Step 3: Place potatoes into a bowl of cold water for about 5 minutes to remove starch from the outsides.",
              "Step 4: Heat vegetable oil in a heavy oven-proof skillet over high heat until it shimmers slightly.",
              "Step 5: Pat dry potatoes with paper towels. Place potato cylinders with the best-looking ends into the hot oil. Reduce heat to medium-high, and pan-fry potatoes until well-browned, 5 to 6 minutes. Season with salt and black pepper.",
              "Step 6: Flip potatoes and repeat on the other ends. As they cook, use a paper towel held with tongs to carefully blot out the oil from the skillet. Add butter and thyme sprigs to the skillet.",
              "Step 7: Pick up a thyme sprig with tongs and use it to paint butter over the top of the potatoes. Cook until butter foams and foam turns from white to a pale tan color. Season with more salt and pepper. Pour chicken stock into skillet.",
              "Step 8: Transfer the skillet to the preheated oven and cook until potatoes are tender and creamy inside, about 30 minutes. If potatoes aren't tender, add 1/4 cup more stock and cook for 10 more minutes.",
              "Step 9: Place potatoes on a serving platter. Spoon thyme-scented butter remaining in skillet over potatoes. Garnish with thyme sprigs. Let cool about 5 minutes before serving."
            ],
            prepTime: "15 mins",
            cookTime: "40 mins",
            additionalTime: "10 mins",
            totalTime: "1 hr 5 mins",
            imagesrc: "Fondant Potatoes.png"
          },
          {
            id: 13,
            title: "French 75 (Soixante Quinze)",
            cuisine: "French Cuisine",
            servings: 1,
            ingredients: [
              "2 fluid ounces lemon juice",
              "2 fluid ounces gin",
              "2 teaspoons simple syrup",
              "1 cup ice cubes",
              "4 fluid ounces chilled Champagne",
              "1 lemon or orange slice for garnish",
              "1 maraschino cherry for garnish"
            ],
            description: "none",
            instructions: [
              "Step 1: Combine lemon juice, gin, and simple syrup in a Collins glass. Add ice cubes, fill with Champagne, and stir.",
              "Step 2: Garnish with a slice of lemon or orange and a maraschino cherry."
            ],
            prepTime: "5 mins",
            totalTime: "5 mins",
            imagesrc: "French 75 (Soixante Quinze).png"
          },
          {
            id: 14,
            title: "Mimosa",
            cuisine: "French Cuisine",
            servings: 2,
            ingredients: [
              "¼ cup orange juice, chilled",
              "¾ cup Champagne or sparkling wine, chilled"
            ],
            description: "none",
            instructions: [
              "Step 1: Gather the ingredients.",
              "Step 2: Divide orange juice evenly into two flute glasses.",
              "Step 3: Top with chilled Champagne and serve."
            ],
            prepTime: "5 mins",
            totalTime: "5 mins",
            imagesrc: "Mimosa.png"
          },
          {
            id: 15,
            title: "Crème Brûlée",
            cuisine: "French Cuisine",
            servings: 5,
            ingredients: [
              "6 egg yolks",
              "6 tablespoons white sugar, divided",
              "½ teaspoon vanilla extract",
              "2 ½ cups heavy cream",
              "2 tablespoons brown sugar"
            ],
            description: "none",
            instructions: [
              "Step 1: Preheat the oven to 300 degrees F (150 degrees C).",
              "Step 2: Whisk egg yolks, 4 tablespoons white sugar, and vanilla extract in a mixing bowl until thick and creamy; set aside.",
              "Step 3: Pour cream into a saucepan and stir over low heat until it almost comes to a boil.",
              "Step 4: Whisk cream into egg yolk mixture; beat until combined.",
              "Step 5: Pour mixture into the top pan of a double boiler. Stir over simmering water until mixture lightly coats the back of a spoon, about 3 minutes.",
              "Step 6: Pour into a shallow heat-proof dish.",
              "Step 7: Bake in the preheated oven until custard is set, about 30 minutes. Let cool to room temperature, then refrigerate until chilled, at least 1 hour or overnight.",
              "Step 8: Turn the oven to broil.",
              "Step 9: Combine remaining 2 tablespoons white sugar and brown sugar in a small bowl. Sprinkle mixture evenly over custard.",
              "Step 10: Place dish under the broiler until sugar melts and caramelizes, about 2 minutes. Watch carefully so as not to burn.",
              "Step 11: Allow to cool slightly, then refrigerate until custard is set again, about 10 minutes."
            ],
            prepTime: "10 mins",
            cookTime: "30 mins",
            additionalTime: "1 hr 10 mins",
            totalTime: "1 hr 50 mins",
            imagesrc: "Creme Brulee.png"
          },
          {
            id: 16,
            title: "Apple Tarte Tatin",
            cuisine: "French Cuisine",
            servings: 6,
            ingredients: [
              "3 tablespoons butter",
              "¾ cup white sugar",
              "3 large Granny Smith apples - peeled, cored, and quartered",
              "1 tablespoon all-purpose flour",
              "1 (9-inch) unbaked pie crust"
            ],
            description: "none",
            instructions: [
              "Step 1: Preheat the oven to 425 degrees F (220 degrees C).",
              "Step 2: Coat a 10-inch oven-proof skillet with butter. Sprinkle sugar evenly over the top of the butter.",
              "Step 3: Place apple quarters, rounded sides down, on top of the butter and sugar in a circular pattern.",
              "Step 4: Place skillet over medium-high heat and cook until butter melts and sugar dissolves and begins to caramelize. Continue to cook until apples soften and caramel begins to brown, 10 to 12 minutes. Remove from heat.",
              "Step 5: Sprinkle work surface with flour and roll pie dough into an 11-inch circle. Pinch edge to create a ruffle around crust.",
              "Step 6: Place crust on top of apples and tuck in edges around apples.",
              "Step 7: Bake in the preheated oven until crust is golden brown, about 20 minutes. Allow to cool for 5 minutes. Place a plate over the top of the pan and carefully invert to release tarte from the pan. Scrape any remaining apples stuck to the pan back on top of crust."
            ],
            prepTime: "15 mins",
            cookTime: "30 mins",
            additionalTime: "5 mins",
            totalTime: "50 mins",
            imagesrc: "Apple Tarte Tatin.png"
        },
    
        {
            id: 17,
            title: "Bouillabaisse",
            cuisine: "French Cuisine",
            servings: 6,
            ingredients: [
              "2 tablespoons olive oil",
              "1 onion, chopped",
              "1 leek, chopped",
              "1 fennel bulb, chopped",
              "4 cloves garlic, minced",
              "1 bay leaf",
              "1 tablespoon fresh thyme",
              "1 teaspoon saffron threads",
              "1 (14.5-ounce) can diced tomatoes",
              "4 cups fish stock",
              "½ cup white wine",
              "2 pounds assorted fish fillets, such as cod, haddock, or sea bass",
              "½ pound large shrimp, peeled and deveined",
              "¼ pound mussels, cleaned",
              "Salt and freshly ground black pepper, to taste"
            ],
            description: "none",
            instructions: [
              "Step 1: Heat olive oil in a large pot over medium heat. Add onion, leek, fennel, and garlic and sauté until softened, about 8 minutes.",
              "Step 2: Stir in bay leaf, thyme, saffron, tomatoes, fish stock, and white wine. Bring to a boil, then reduce heat and simmer for 20 minutes.",
              "Step 3: Add fish fillets, shrimp, and mussels to the pot. Cover and cook until fish flakes easily and shrimp turns pink, about 5-7 minutes. Season with salt and pepper to taste.",
              "Step 4: Serve with toasted baguette slices and rouille sauce, if desired."
            ],
            prepTime: "15 mins",
            cookTime: "30 mins",
            totalTime: "45 mins",
            imagesrc: "Bouillabaisse.png"
          },
          {
            id: 18,
            title: "Quiche Lorraine",
            cuisine: "French Cuisine",
            servings: 8,
            ingredients: [
              "1 pre-made pie crust",
              "1 tablespoon butter",
              "½ cup chopped onion",
              "1 cup cooked bacon, crumbled",
              "1 ½ cups shredded Gruyère cheese",
              "1 ½ cups heavy cream",
              "4 large eggs",
              "½ teaspoon salt",
              "¼ teaspoon freshly ground black pepper",
              "¼ teaspoon ground nutmeg"
            ],
            description: "none",
            instructions: [
              "Step 1: Preheat the oven to 375 degrees F (190 degrees C).",
              "Step 2: Melt butter in a skillet over medium heat. Add onion and cook until softened, about 5 minutes. Set aside to cool slightly.",
              "Step 3: Spread crumbled bacon and onion evenly over the bottom of the pie crust. Top with shredded Gruyère cheese.",
              "Step 4: In a bowl, whisk together the cream, eggs, salt, pepper, and nutmeg. Pour the mixture over the bacon and cheese in the pie crust.",
              "Step 5: Bake in the preheated oven for 35 to 40 minutes, until the quiche is set and lightly browned on top. Let cool for 5 minutes before serving."
            ],
            prepTime: "10 mins",
            cookTime: "40 mins",
            totalTime: "50 mins",
            imagesrc: "Quiche Lorraine.png"
          },
          {
            id: 19,
            title: "Ratatouille",
            cuisine: "French Cuisine",
            servings: 4,
            ingredients: [
              "2 tablespoons olive oil",
              "1 onion, chopped",
              "1 zucchini, sliced",
              "1 eggplant, sliced",
              "1 bell pepper, chopped",
              "1 (14.5-ounce) can diced tomatoes",
              "2 cloves garlic, minced",
              "1 tablespoon fresh basil, chopped",
              "1 tablespoon fresh thyme",
              "Salt and freshly ground black pepper, to taste"
            ],
            description: "none",
            instructions: [
              "Step 1: Heat olive oil in a large skillet over medium heat. Add onion and sauté until softened, about 5 minutes.",
              "Step 2: Add zucchini, eggplant, and bell pepper to the skillet. Cook for about 10 minutes, stirring occasionally.",
              "Step 3: Stir in tomatoes, garlic, basil, thyme, salt, and pepper. Simmer for an additional 10 minutes until vegetables are tender.",
              "Step 4: Serve warm as a side dish or over rice or pasta."
            ],
            prepTime: "10 mins",
            cookTime: "20 mins",
            totalTime: "30 mins",
            imagesrc: "Ratatouille.png"
          }
    ];

document.addEventListener('DOMContentLoaded', function () {
    const recipeContainer = document.querySelector('.recipe_container');

    // Function to display recipe details
    function displayRecipeDetails(recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        if (recipe) {
            const recipeBox = document.querySelector('.recipe-box');
            recipeBox.innerHTML = `
                <div class="image-section">
                    <img alt="${recipe.title}" src="${recipe.title.toLowerCase().replace(/\s+/g, '')}.png" />
                </div>
                <div class="content-section">
                    <h1>${recipe.title}</h1>
                    <h2>${recipe.cuisine} Cuisine <span style="font-size: 16px; padding-left: 10px; color: #4A5568;">Appetizer</span></h2>
                    <p>${recipe.description || 'No description available.'}</p>
                    <div class="time-info">
                        <li><span class="time-label">Prep Time:</span> <span class="time-value">${recipe.prepTime}</span></li>
                        <li><span class="time-label">Cook Time:</span> <span class="time-value">${recipe.cookTime}</span></li>
                        <li><span class="time-label">Additional Time:</span> <span class="time-value">${recipe.additionalTime}</span></li>
                        <li><span class="time-label">Total Time:</span> <span class="time-value">${recipe.totalTime}</span></li>
                    </div>
                    <div class="wishlist">
                        <i class="far fa-heart"></i> Add To Wishlist
                    </div>
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul>
                            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="instructions-section">
                    <h3>Instructions</h3>
                    <ul>
                        ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                    <p><strong>Tips:</strong> ${recipe.tips || 'No tips available.'}</p>
                    <div class="rating">
                        <strong>Rating</strong>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>

                    <div class="comments">
                    <button class="comment_btn">Comments</button>
                    <div class="comments-popup">
                        <div class="comments-section">
                            <h2>Comments</h2>
                            <div class="comment" data-comment-id="1">
                                <img alt="Profile picture of Glenn Greer" src="salmonterrine.png"/>
                                <div class="comment-content">
                                    <p class="date">30 Jan, 2022</p>
                                    <h3>Glenn Greer</h3>
                                    <p>"This proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables a better understanding."</p>
                                </div>
                                <div class="reply-button" data-reply-id="1">
                                    <i class="fas fa-reply"></i> Reply
                                </div>
                            </div>
                            <div class="comment" data-comment-id="2">
                                <img alt="Profile picture of Glenn Greer" src="salmonterrine.png"/>
                                <div class="comment-content">
                                    <p class="date">30 Jan, 2022</p>
                                    <h3>Glenn Greer</h3>
                                    <p>"Yeah, I think maybe you do. Right, gimme a Pepsi free. Of course, the Enchantment Under The Sea Dance they're supposed to go to this, that's where they kiss for the first time. You'll find out. Are you sure about this storm?"</p>
                                </div>
                                <div class="reply-button" data-reply-id="2">
                                    <i class="fas fa-reply"></i> Reply
                                </div>
                            </div>
                            <div class="reply" data-reply-id="3">
                                <img alt="Profile picture of Glenn Greer" src="salmonterrine.png"/>
                                <div class="reply-content">
                                    <p class="date">30 Jan, 2022</p>
                                    <h3>Glenn Greer</h3>
                                    <p>"Cheese slices goat cottage cheese roquefort cream cheese pecorino cheesy feet when the cheese comes out everybody's happy."</p>
                                </div>
                                <div class="reply-button" data-reply-id="3">
                                    <i class="fas fa-reply"></i> Reply
                                </div>
                            </div>
                        </div>
                        <div class="leave-comment">
                            <h3>Leave Comment</h3>
                            <p>Your email address will not be published. Required fields are marked.</p>
                            <div class="inputs">
                                <input placeholder="Full Name" type="text" />
                                <input placeholder="Enter Email Address" type="email" />
                                <input placeholder="Enter URL" type="url" />
                            </div>
                            <textarea placeholder="Your Comment" rows="5"></textarea>
                            <div class="save-info">
                                <input id="save-info" type="checkbox" />
                                <span class="save-text">Save my name, email, and website in this browser for the next time I comment.</span>
                            </div>
                            <div class="button-container">
                                <button>Post Comment</button>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
                
                <div class="close">
                    <button class="close-button"></button>
                </div>
            `;
            recipeContainer.classList.add('active');
            const closeButton = document.querySelector('.close-button');

            // Close button functionality
            closeButton.addEventListener('click', function () {
                recipeContainer.classList.remove('active');
            });

            // Comments button functionality
            const commentButton = document.querySelector('.comment_btn');
            const commentsPopup = document.querySelector('.comments-popup');

            // Toggle comments visibility
            commentButton.addEventListener('click', () => {
                commentsPopup.classList.toggle('active');
            });

            // Close the popup when clicking outside
            document.addEventListener('click', (event) => {
                if (!commentsPopup.contains(event.target) && event.target !== commentButton) {
                    commentsPopup.classList.remove('active');
                }
            });
        }
    }

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("view-recipe-button")) {
            const recipeId = parseInt(event.target.getAttribute("data-id"));
            displayRecipeDetails(recipeId);
        }
    });
});

// Add an event listener to the French button
const frenchBtn = document.querySelector('.french-btn');
const topRecipesContainer = document.getElementById('top_recipes_container');

frenchBtn.addEventListener('click', () => {
    // Get the French recipes
    const frenchRecipes = recipes.filter(recipe => recipe.cuisine === "French Cuisine");

    // Create the HTML for the French recipes
    const frenchRecipesHtml = frenchRecipes.map(recipe => {
        return `
            <div class="card">
                <img src="${recipe.imagesrc}" class="icon">
                <div class="card-content">
                    <h2>${recipe.title}</h2>
                    <p>${recipe.cuisine}</p>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="view-recipe-button" data-id="${recipe.id}">View Recipe</div>
                </div>
            </div>
        `;
    }).join('');

    // Update the top recipes container with the French recipes
    topRecipesContainer.innerHTML = `
        <h1>French Cuisine</h1>
        <div class="header">
            <div>
                <img src="leaf.png">
            </div>
            <p>French cuisine blends tradition and finesse into unforgettable culinary delights.</p>
        </div>
        <div class="grid">
            ${frenchRecipesHtml}
        </div>
    `;
});
