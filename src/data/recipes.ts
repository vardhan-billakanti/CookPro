import { Recipe } from '../types';

export const RECIPES_DATA: Recipe[] = [
  {
    id: 'egg-fried-rice',
    title: 'Classic Egg Fried Rice',
    slug: 'classic-egg-fried-rice',
    description: 'A comforting, fast weeknight staple using day-old rice, scrambled eggs, garlic, and savory soy sauce.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'Asian',
    mealType: 'Dinner',
    dietary: ['Vegetarian', 'Dairy-Free'],
    rating: 4.9,
    reviewCount: 428,
    isPopular: true,
    tags: ['Quick', 'Pantry Staple', 'Under 15 min'],
    ingredients: [
      { id: 'rice-1', name: 'White Rice', amount: 2, unit: 'cups', isOptional: false, notes: 'Day-old cold cooked rice is ideal' },
      { id: 'egg-1', name: 'Eggs', amount: 3, unit: 'large', isOptional: false },
      { id: 'garlic-1', name: 'Garlic', amount: 3, unit: 'cloves', isOptional: false, notes: 'finely minced' },
      { id: 'scallion-1', name: 'Green Onions', amount: 2, unit: 'stalks', isOptional: false, notes: 'chopped, whites and greens separated' },
      { id: 'soy-1', name: 'Soy Sauce', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'sesame-1', name: 'Toasted Sesame Oil', amount: 1, unit: 'tsp', isOptional: true },
      { id: 'oil-1', name: 'Vegetable Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'pepper-1', name: 'Black Pepper', amount: 0.5, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Whisk & Scramble Eggs',
        instruction: 'Beat eggs in a small bowl with a pinch of salt. Heat 1 tbsp oil in a wok or large skillet over high heat. Pour in eggs, gently scramble for 60 seconds until just soft set, then transfer to a plate.',
        durationMinutes: 2,
        tip: 'Do not overcook the eggs; they will cook more when combined later.'
      },
      {
        stepNumber: 2,
        title: 'Aromatics & Rice Searing',
        instruction: 'Add remaining 1 tbsp oil to the wok. Sauté minced garlic and the white parts of green onions for 30 seconds until fragrant. Add cold cooked rice and break up any clumps with a spatula.',
        durationMinutes: 4,
        tip: 'Spread rice in an even layer to get a nice light sizzle.'
      },
      {
        stepNumber: 3,
        title: 'Season & Toss Together',
        instruction: 'Drizzle soy sauce and sesame oil around the perimeter of the pan so it sizzles. Toss vigorously to coat the grains evenly.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Final Finish & Garnish',
        instruction: 'Fold in scrambled eggs, green onion greens, and cracked black pepper. Toss for 1 more minute until piping hot and serve immediately.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'creamy-tomato-pasta',
    title: 'Creamy Tomato & Basil Pasta',
    slug: 'creamy-tomato-basil-pasta',
    description: 'Silky al dente pasta tossed in a velvety garlic-infused tomato sauce enriched with cream and fragrant fresh basil.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d62811b4?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'Italian',
    mealType: 'Dinner',
    dietary: ['Vegetarian'],
    rating: 4.9,
    reviewCount: 382,
    isPopular: true,
    tags: ['Comfort Food', 'Pasta', 'Family Friendly'],
    ingredients: [
      { id: 'pasta-1', name: 'Pasta', amount: 350, unit: 'g', isOptional: false, notes: 'penne or rigatoni work best' },
      { id: 'tomatoes-1', name: 'Tomato', amount: 4, unit: 'medium', isOptional: false, notes: 'diced, or 1 can crushed tomatoes' },
      { id: 'garlic-2', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: false, notes: 'sliced thin' },
      { id: 'oliveoil-1', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'cream-1', name: 'Heavy Cream', amount: 0.5, unit: 'cup', isOptional: false },
      { id: 'parmesan-1', name: 'Parmesan Cheese', amount: 0.5, unit: 'cup', isOptional: true, notes: 'freshly grated' },
      { id: 'basil-1', name: 'Fresh Basil', amount: 10, unit: 'leaves', isOptional: true },
      { id: 'salt-1', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'chili-1', name: 'Red Pepper Flakes', amount: 0.25, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Boil the Pasta',
        instruction: 'Bring a large pot of salted water to a rolling boil. Cook pasta until al dente according to package instructions. Reserve 1/2 cup of starchy pasta water before draining.',
        durationMinutes: 10,
        tip: 'Salt the water generously like the sea.'
      },
      {
        stepNumber: 2,
        title: 'Sauté Garlic Aromatics',
        instruction: 'While pasta cooks, warm olive oil in a wide saucepan over medium-low heat. Add sliced garlic and optional red pepper flakes, sizzling gently for 90 seconds without browning.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Simmer Tomato Sauce',
        instruction: 'Add the chopped or crushed tomatoes with 1 tsp salt. Simmer for 8 minutes until sauce thickens slightly.',
        durationMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Emulsify with Cream & Cheese',
        instruction: 'Lower heat, pour in heavy cream, and stir until a smooth rose sauce forms. Add drained pasta, grated parmesan, and a splash of pasta water. Toss vigorously for 2 minutes.',
        durationMinutes: 2
      },
      {
        stepNumber: 5,
        title: 'Garnish & Serve',
        instruction: 'Tear fresh basil leaves over top and serve immediately with extra parmesan.',
        durationMinutes: 1
      }
    ]
  },
  {
    id: 'classic-shakshuka',
    title: 'North African Shakshuka',
    slug: 'north-african-shakshuka',
    description: 'Farm eggs gently poached in a simmering, spiced sauce of crushed tomatoes, sweet bell peppers, onions, and cumin.',
    image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    difficulty: 'Easy',
    servings: 3,
    cuisine: 'Mediterranean',
    mealType: 'Breakfast',
    dietary: ['Vegetarian', 'Gluten-Free', 'High-Protein'],
    rating: 4.85,
    reviewCount: 290,
    isPopular: true,
    tags: ['Brunch', 'One Pan', 'Healthy'],
    ingredients: [
      { id: 'eggs-2', name: 'Eggs', amount: 4, unit: 'large', isOptional: false },
      { id: 'tomatoes-2', name: 'Tomato', amount: 4, unit: 'medium', isOptional: false, notes: 'chopped or 1 can diced tomatoes' },
      { id: 'bellpepper-1', name: 'Bell Pepper', amount: 1, unit: 'large', isOptional: false, notes: 'diced' },
      { id: 'onion-1', name: 'Onion', amount: 1, unit: 'medium', isOptional: false, notes: 'finely chopped' },
      { id: 'garlic-3', name: 'Garlic', amount: 3, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'oliveoil-2', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'cumin-1', name: 'Ground Cumin', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'paprika-1', name: 'Smoked Paprika', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'cilantro-1', name: 'Cilantro', amount: 2, unit: 'tbsp', isOptional: true, notes: 'chopped fresh' },
      { id: 'feta-1', name: 'Feta Cheese', amount: 50, unit: 'g', isOptional: true, notes: 'crumbled' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sauté Peppers & Onions',
        instruction: 'Heat olive oil in a large deep skillet over medium heat. Add chopped onion and bell pepper. Sauté for 6-8 minutes until soft and caramelized at edges.',
        durationMinutes: 7
      },
      {
        stepNumber: 2,
        title: 'Toast the Spices',
        instruction: 'Stir in minced garlic, ground cumin, and smoked paprika. Toast for 1 minute until fragrant.',
        durationMinutes: 1
      },
      {
        stepNumber: 3,
        title: 'Simmer the Tomato Base',
        instruction: 'Pour in the chopped tomatoes, season with salt and pepper. Simmer on medium-low for 10 minutes until sauce thickens.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Poach the Eggs',
        instruction: 'Use the back of a spoon to create 4 shallow wells in the sauce. Crack an egg into each well. Cover skillet with a lid and cook on low for 5-7 minutes until whites are set and yolks remain runny.',
        durationMinutes: 6,
        tip: 'Check at 5 minutes so yolks stay velvety soft.'
      },
      {
        stepNumber: 5,
        title: 'Garnish with Herbs & Feta',
        instruction: 'Remove lid, scatter crumbled feta and fresh cilantro or parsley over top, and serve with crusty bread.',
        durationMinutes: 1
      }
    ]
  },
  {
    id: 'garlic-butter-chicken-thighs',
    title: 'Crispy Garlic Butter Chicken',
    slug: 'crispy-garlic-butter-chicken',
    description: 'Golden, pan-seared juicy chicken fillets basted in bubbling browned butter, garlic cloves, and fresh herbs.',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'American',
    mealType: 'Dinner',
    dietary: ['Gluten-Free', 'High-Protein', 'Low-Carb'],
    rating: 4.95,
    reviewCount: 512,
    isPopular: true,
    tags: ['High Protein', 'Keto', 'Skillet Dinner'],
    ingredients: [
      { id: 'chicken-1', name: 'Chicken Breast', amount: 600, unit: 'g', isOptional: false, notes: 'or boneless chicken thighs' },
      { id: 'butter-1', name: 'Butter', amount: 3, unit: 'tbsp', isOptional: false },
      { id: 'garlic-4', name: 'Garlic', amount: 5, unit: 'cloves', isOptional: false, notes: 'crushed' },
      { id: 'oliveoil-3', name: 'Olive Oil', amount: 1, unit: 'tbsp', isOptional: false },
      { id: 'paprika-2', name: 'Smoked Paprika', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'salt-2', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'pepper-2', name: 'Black Pepper', amount: 0.5, unit: 'tsp', isOptional: false },
      { id: 'lemon-1', name: 'Lemon', amount: 0.5, unit: 'whole', isOptional: true, notes: 'for finishing squeeze' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Season Chicken',
        instruction: 'Pat chicken dry with paper towels. Season both sides with salt, cracked black pepper, and smoked paprika.',
        durationMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Sear until Golden',
        instruction: 'Heat olive oil and 1 tbsp butter in a heavy skillet over medium-high heat. Place chicken in skillet and cook without moving for 5-6 minutes until deep golden crust forms.',
        durationMinutes: 6
      },
      {
        stepNumber: 3,
        title: 'Flip & Baste with Garlic Butter',
        instruction: 'Flip chicken pieces over. Lower heat to medium, add remaining 2 tbsp butter and crushed garlic. Spoon the foaming garlic butter continuously over the chicken for 5 minutes until fully cooked through.',
        durationMinutes: 5,
        tip: 'Tilt the pan slightly to collect and spoon the aromatic butter over the meat.'
      },
      {
        stepNumber: 4,
        title: 'Rest & Squeeze Lemon',
        instruction: 'Transfer to a cutting board, let rest for 3 minutes, finish with a squeeze of fresh lemon, and slice.',
        durationMinutes: 3
      }
    ]
  },
  {
    id: 'sheet-pan-chicken-fajitas',
    title: 'Sizzling Chicken Fajitas',
    slug: 'sizzling-chicken-fajitas',
    description: 'Tender spiced chicken strips with colorful caramelized bell peppers and onions, roasted to perfection on a single sheet pan.',
    image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 18,
    totalTime: 28,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'Mexican',
    mealType: 'Dinner',
    dietary: ['High-Protein', 'Dairy-Free'],
    rating: 4.88,
    reviewCount: 310,
    isPopular: true,
    tags: ['One Pan', 'Meal Prep', 'Easy Cleanup'],
    ingredients: [
      { id: 'chicken-2', name: 'Chicken Breast', amount: 500, unit: 'g', isOptional: false, notes: 'sliced into strips' },
      { id: 'bellpepper-2', name: 'Bell Pepper', amount: 2, unit: 'medium', isOptional: false, notes: 'sliced into strips' },
      { id: 'onion-2', name: 'Onion', amount: 1, unit: 'large', isOptional: false, notes: 'sliced' },
      { id: 'oliveoil-4', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'cumin-2', name: 'Ground Cumin', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'paprika-3', name: 'Smoked Paprika', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'chili-2', name: 'Red Pepper Flakes', amount: 0.5, unit: 'tsp', isOptional: true },
      { id: 'tortillas-1', name: 'Flour Tortillas', amount: 8, unit: 'small', isOptional: true },
      { id: 'lime-1', name: 'Lime', amount: 1, unit: 'whole', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Prep and Preheat',
        instruction: 'Preheat your oven to 200°C (400°F). Slice chicken, bell peppers, and onion into uniform long strips.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Toss with Spices and Oil',
        instruction: 'Place everything onto a large rimmed baking sheet. Drizzle with olive oil and sprinkle with cumin, smoked paprika, chili flakes, salt, and pepper. Toss thoroughly to coat.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Roast to Sizzling Perfection',
        instruction: 'Spread in a single even layer. Roast for 18-20 minutes until chicken is cooked through and edges of peppers are delightfully charred.',
        durationMinutes: 18
      },
      {
        stepNumber: 4,
        title: 'Serve Warm with Tortillas',
        instruction: 'Squeeze fresh lime juice over the sheet pan and serve immediately with warmed tortillas.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'fluffy-buttermilk-pancakes',
    title: 'Golden Fluffy Pancakes',
    slug: 'golden-fluffy-pancakes',
    description: 'Thick, airy, melt-in-your-mouth breakfast pancakes with crisp golden edges and a sweet buttery aroma.',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=80',
    prepTime: 8,
    cookTime: 12,
    totalTime: 20,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'American',
    mealType: 'Breakfast',
    dietary: ['Vegetarian'],
    rating: 4.92,
    reviewCount: 460,
    isPopular: true,
    tags: ['Weekend Breakfast', 'Kids Favorite', 'Pantry Friendly'],
    ingredients: [
      { id: 'flour-1', name: 'All-Purpose Flour', amount: 2, unit: 'cups', isOptional: false },
      { id: 'milk-1', name: 'Milk', amount: 1.5, unit: 'cups', isOptional: false },
      { id: 'eggs-3', name: 'Eggs', amount: 2, unit: 'large', isOptional: false },
      { id: 'butter-2', name: 'Butter', amount: 3, unit: 'tbsp', isOptional: false, notes: 'melted and cooled slightly' },
      { id: 'sugar-1', name: 'Granulated Sugar', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'baking-1', name: 'Baking Powder', amount: 1, unit: 'tbsp', isOptional: false },
      { id: 'salt-3', name: 'Salt', amount: 0.5, unit: 'tsp', isOptional: false },
      { id: 'honey-1', name: 'Honey', amount: 3, unit: 'tbsp', isOptional: true, notes: 'or maple syrup for serving' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Combine Dry Ingredients',
        instruction: 'In a large bowl, whisk together flour, sugar, baking powder, and salt.',
        durationMinutes: 2
      },
      {
        stepNumber: 2,
        title: 'Whisk Wet & Gently Fold',
        instruction: 'In another bowl, whisk milk, eggs, and melted butter. Pour wet ingredients into dry and fold gently until just combined. Some lumps are completely okay!',
        durationMinutes: 3,
        tip: 'Do not overmix batter or pancakes will be tough.'
      },
      {
        stepNumber: 3,
        title: 'Griddle the Pancakes',
        instruction: 'Heat a non-stick skillet or griddle over medium heat and lightly butter it. Pour 1/4 cup batter for each pancake. Cook until bubbles pop on surface and edges look set (about 2-3 mins).',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Flip and Golden Finish',
        instruction: 'Flip and cook for 1-2 minutes more until underside is golden brown. Stack high and drizzle with honey or maple syrup.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'crispy-potato-rosti',
    title: 'Crispy Swiss Potato Röstis',
    slug: 'crispy-swiss-potato-rostis',
    description: 'Golden skillet-fried shredded potatoes with irresistibly crisp outer edges and tender, buttery interiors.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'European',
    mealType: 'Breakfast',
    dietary: ['Vegetarian', 'Gluten-Free'],
    rating: 4.87,
    reviewCount: 195,
    isPopular: false,
    tags: ['Potatoes', 'Comfort Food', 'Crispy'],
    ingredients: [
      { id: 'potato-1', name: 'Potato', amount: 3, unit: 'large', isOptional: false, notes: 'peeled and coarsely grated' },
      { id: 'butter-3', name: 'Butter', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'oliveoil-5', name: 'Olive Oil', amount: 1, unit: 'tbsp', isOptional: false },
      { id: 'salt-4', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'pepper-3', name: 'Black Pepper', amount: 0.5, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Grate and Squeeze Moisture',
        instruction: 'Grate potatoes coarsely. Wrap in a clean kitchen towel and squeeze firmly over the sink to remove excess liquid.',
        durationMinutes: 5,
        tip: 'Getting rid of moisture is the secret to ultimate crispiness.'
      },
      {
        stepNumber: 2,
        title: 'Season',
        instruction: 'In a bowl, toss shredded potatoes with salt and freshly cracked black pepper.',
        durationMinutes: 1
      },
      {
        stepNumber: 3,
        title: 'Fry the Bottom',
        instruction: 'Melt half the butter and oil in an 8-inch non-stick skillet over medium heat. Press potato mixture down firmly in an even layer. Cook undisturbed for 8-10 minutes until bottom is deep golden brown.',
        durationMinutes: 9
      },
      {
        stepNumber: 4,
        title: 'Flip & Crisp',
        instruction: 'Slide rösti onto a large plate, add remaining butter to pan, invert plate to flip rösti back into skillet. Cook for another 6-8 minutes until crisp and golden.',
        durationMinutes: 7
      }
    ]
  },
  {
    id: 'classic-carbonara',
    title: 'Authentic Roman Carbonara',
    slug: 'authentic-roman-carbonara',
    description: 'Crispy cured bacon and al dente spaghetti bound by an ultra-creamy emulsion of egg yolks, black pepper, and pecorino or parmesan.',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    difficulty: 'Medium',
    servings: 2,
    cuisine: 'Italian',
    mealType: 'Dinner',
    dietary: ['High-Protein'],
    rating: 4.96,
    reviewCount: 640,
    isPopular: true,
    tags: ['Classic', 'Italian', 'Quick Dinner'],
    ingredients: [
      { id: 'pasta-2', name: 'Pasta', amount: 250, unit: 'g', isOptional: false, notes: 'Spaghetti or Rigatoni' },
      { id: 'bacon-1', name: 'Bacon', amount: 150, unit: 'g', isOptional: false, notes: 'diced (pancetta or guanciale also great)' },
      { id: 'eggs-4', name: 'Eggs', amount: 3, unit: 'large', isOptional: false, notes: '2 whole eggs + 1 yolk' },
      { id: 'parmesan-2', name: 'Parmesan Cheese', amount: 0.75, unit: 'cup', isOptional: false, notes: 'freshly grated' },
      { id: 'pepper-4', name: 'Black Pepper', amount: 1, unit: 'tsp', isOptional: false, notes: 'coarsely ground' },
      { id: 'garlic-5', name: 'Garlic', amount: 1, unit: 'clove', isOptional: true, notes: 'lightly smashed' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Cook Spaghetti',
        instruction: 'Boil spaghetti in salted water until 1 minute before al dente. Reserve 1/2 cup pasta cooking water.',
        durationMinutes: 9
      },
      {
        stepNumber: 2,
        title: 'Crisp the Bacon',
        instruction: 'In a wide skillet, cook diced bacon over medium heat until crispy and fat is rendered (6-8 mins). Remove pan from heat.',
        durationMinutes: 7
      },
      {
        stepNumber: 3,
        title: 'Whisk Egg & Cheese Mixture',
        instruction: 'In a bowl, whisk eggs, egg yolk, grated parmesan, and plenty of black pepper into a thick paste.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Emulsify Sauce Off-Heat',
        instruction: 'Transfer hot drained pasta directly into the skillet with the bacon fat. Let cool for 30 seconds, then pour egg mixture over pasta, stirring and tossing rapidly while adding a splash of pasta water until a creamy glossy sauce coats every strand.',
        durationMinutes: 2,
        tip: 'Never add egg mixture to boiling hot heat or it will scramble.'
      }
    ]
  },
  {
    id: 'honey-garlic-glazed-salmon',
    title: 'Honey Garlic Seared Salmon',
    slug: 'honey-garlic-seared-salmon',
    description: 'Crispy-skinned tender salmon fillets bathed in a luscious caramelized sweet honey, soy, and garlic reduction.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 12,
    totalTime: 17,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'Asian',
    mealType: 'Dinner',
    dietary: ['Gluten-Free', 'High-Protein', 'Dairy-Free'],
    rating: 4.93,
    reviewCount: 374,
    isPopular: true,
    tags: ['Seafood', 'Quick', 'Healthy Fats'],
    ingredients: [
      { id: 'salmon-1', name: 'Salmon Fillets', amount: 2, unit: 'fillets', isOptional: false },
      { id: 'garlic-6', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'honey-2', name: 'Honey', amount: 3, unit: 'tbsp', isOptional: false },
      { id: 'soy-2', name: 'Soy Sauce', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'oliveoil-6', name: 'Olive Oil', amount: 1, unit: 'tbsp', isOptional: false },
      { id: 'butter-4', name: 'Butter', amount: 1, unit: 'tbsp', isOptional: true },
      { id: 'lemon-2', name: 'Lemon', amount: 1, unit: 'tbsp', isOptional: false, notes: 'fresh juice' },
      { id: 'scallion-2', name: 'Green Onions', amount: 1, unit: 'stalk', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Whisk Glaze',
        instruction: 'In a small bowl, whisk honey, soy sauce, lemon juice, and minced garlic.',
        durationMinutes: 2
      },
      {
        stepNumber: 2,
        title: 'Sear the Salmon',
        instruction: 'Heat olive oil in a skillet over medium-high heat. Season salmon with salt and pepper. Place flesh-side down and sear for 4 minutes until golden crust forms.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Flip and Caramelize Sauce',
        instruction: 'Flip salmon fillets over. Lower heat to medium, add butter and pour in honey garlic glaze. Let the sauce bubble and thicken into a syrupy glaze for 3-4 minutes while spooning over the fish.',
        durationMinutes: 4
      },
      {
        stepNumber: 4,
        title: 'Garnish',
        instruction: 'Scatter sliced green onions over top and serve immediately with steamed rice or veggies.',
        durationMinutes: 1
      }
    ]
  },
  {
    id: 'mediterranean-chickpea-salad',
    title: 'Mediterranean Crisp Chickpea Salad',
    slug: 'mediterranean-crisp-chickpea-salad',
    description: 'Refreshing and hearty no-cook salad loaded with plump chickpeas, cucumber, cherry tomatoes, red onion, and creamy feta in a lemon vinaigrette.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    prepTime: 12,
    cookTime: 0,
    totalTime: 12,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'Mediterranean',
    mealType: 'Lunch',
    dietary: ['Vegetarian', 'Gluten-Free', 'High-Protein'],
    rating: 4.84,
    reviewCount: 220,
    isPopular: false,
    tags: ['No Cook', 'Meal Prep', 'High Fiber'],
    ingredients: [
      { id: 'chickpea-1', name: 'Canned Chickpeas', amount: 1, unit: 'can (400g)', isOptional: false, notes: 'rinsed and drained' },
      { id: 'cucumber-1', name: 'Cucumber', amount: 1, unit: 'medium', isOptional: false, notes: 'diced' },
      { id: 'cherrytomatoes-1', name: 'Cherry Tomatoes', amount: 1.5, unit: 'cups', isOptional: false, notes: 'halved' },
      { id: 'redonion-1', name: 'Red Onion', amount: 0.5, unit: 'small', isOptional: false, notes: 'finely diced' },
      { id: 'feta-2', name: 'Feta Cheese', amount: 100, unit: 'g', isOptional: true, notes: 'crumbled' },
      { id: 'oliveoil-7', name: 'Olive Oil', amount: 3, unit: 'tbsp', isOptional: false },
      { id: 'lemon-3', name: 'Lemon', amount: 2, unit: 'tbsp', isOptional: false, notes: 'fresh juice' },
      { id: 'oregano-1', name: 'Dried Oregano', amount: 0.5, unit: 'tsp', isOptional: true },
      { id: 'cilantro-2', name: 'Cilantro', amount: 2, unit: 'tbsp', isOptional: true, notes: 'or fresh parsley' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Chop Produce',
        instruction: 'Dice the cucumber, halve cherry tomatoes, and finely dice red onion.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Whisk Dressing',
        instruction: 'In a large salad bowl, whisk olive oil, lemon juice, dried oregano, salt, and black pepper together.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Combine & Marinate',
        instruction: 'Add drained chickpeas, chopped vegetables, and fresh herbs to the bowl. Toss thoroughly.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Top with Feta',
        instruction: 'Gently fold in crumbled feta cheese. Enjoy chilled or at room temperature.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'creamy-mushroom-risotto',
    title: 'Savory Creamy Mushroom Risotto',
    slug: 'savory-creamy-mushroom-risotto',
    description: 'Earthy sautéed cremini mushrooms folded into velvety arborio rice with garlic, white wine notes, and melted parmesan.',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    difficulty: 'Medium',
    servings: 3,
    cuisine: 'Italian',
    mealType: 'Dinner',
    dietary: ['Vegetarian', 'Gluten-Free'],
    rating: 4.89,
    reviewCount: 318,
    isPopular: true,
    tags: ['Gourmet', 'Comfort Food', 'Mushroom Lovers'],
    ingredients: [
      { id: 'rice-2', name: 'White Rice', amount: 1.5, unit: 'cups', isOptional: false, notes: 'Arborio or short grain rice' },
      { id: 'mushrooms-1', name: 'Mushrooms', amount: 300, unit: 'g', isOptional: false, notes: 'sliced' },
      { id: 'onion-3', name: 'Onion', amount: 1, unit: 'small', isOptional: false, notes: 'finely minced' },
      { id: 'garlic-7', name: 'Garlic', amount: 3, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'butter-5', name: 'Butter', amount: 3, unit: 'tbsp', isOptional: false },
      { id: 'parmesan-3', name: 'Parmesan Cheese', amount: 0.5, unit: 'cup', isOptional: false, notes: 'grated' },
      { id: 'oliveoil-8', name: 'Olive Oil', amount: 1, unit: 'tbsp', isOptional: false },
      { id: 'pepper-5', name: 'Black Pepper', amount: 0.5, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sear the Mushrooms',
        instruction: 'Heat 1 tbsp olive oil and 1 tbsp butter in a wide pot over medium-high heat. Add mushrooms and sauté until browned and tender (6 mins). Set half aside for topping.',
        durationMinutes: 6
      },
      {
        stepNumber: 2,
        title: 'Toast the Rice',
        instruction: 'Add remaining butter, minced onion, and garlic to the pot. Sauté for 2 minutes, then add rice and stir continuously for 2 minutes until edges look translucent.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Gradual Simmering',
        instruction: 'Add warm water or broth one ladle at a time, stirring frequently until liquid is absorbed before adding the next ladle. Continue for 18-20 minutes until rice is creamy and tender with slight bite.',
        durationMinutes: 18,
        tip: 'Constant gentle stirring releases starches to create that signature creamy texture.'
      },
      {
        stepNumber: 4,
        title: 'Mantecatura (Enrichment)',
        instruction: 'Stir in grated parmesan cheese and season with salt and pepper. Top with reserved golden mushrooms and serve immediately.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'avocado-toast-poached-egg',
    title: 'Artisan Avocado Toast & Egg',
    slug: 'artisan-avocado-toast-and-egg',
    description: 'Creamy crushed hass avocado on toasted sourdough, topped with runny soft poached eggs, chili flakes, and extra virgin olive oil.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 6,
    totalTime: 11,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'American',
    mealType: 'Breakfast',
    dietary: ['Vegetarian', 'High-Protein'],
    rating: 4.91,
    reviewCount: 388,
    isPopular: true,
    tags: ['Quick Breakfast', 'Healthy', 'Under 15 min'],
    ingredients: [
      { id: 'bread-1', name: 'Bread', amount: 2, unit: 'slices', isOptional: false, notes: 'sourdough or hearty bread' },
      { id: 'avocado-1', name: 'Avocado', amount: 1, unit: 'large', isOptional: false, notes: 'ripe' },
      { id: 'eggs-5', name: 'Eggs', amount: 2, unit: 'large', isOptional: false },
      { id: 'lemon-4', name: 'Lemon', amount: 1, unit: 'tsp', isOptional: true, notes: 'juice' },
      { id: 'oliveoil-9', name: 'Olive Oil', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'chili-3', name: 'Red Pepper Flakes', amount: 0.25, unit: 'tsp', isOptional: true },
      { id: 'salt-5', name: 'Salt', amount: 0.5, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Toast the Bread',
        instruction: 'Toast sourdough slices in a toaster or skillet with a drop of olive oil until crispy and golden brown.',
        durationMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Mash the Avocado',
        instruction: 'Scoop avocado flesh into a bowl. Add lemon juice, salt, and black pepper. Mash with a fork leaving slight texture.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Poach or Fry the Eggs',
        instruction: 'Gently poach eggs in barely simmering water for 3 minutes (or fry sunny-side up in a small skillet) until whites are firm and yolk is warm and runny.',
        durationMinutes: 4
      },
      {
        stepNumber: 4,
        title: 'Assemble & Season',
        instruction: 'Spread mashed avocado generously over warm toast. Crown each slice with an egg, sprinkle with red chili flakes and a drizzle of olive oil.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'chicken-tikka-skewers',
    title: 'Smoky Pan-Grilled Chicken Tikka',
    slug: 'smoky-pan-grilled-chicken-tikka',
    description: 'Succulent chunks of chicken marinated in spiced yogurt, ginger, garlic, garam masala, and lemon, seared to smoky perfection.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80',
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    difficulty: 'Medium',
    servings: 3,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Gluten-Free', 'High-Protein'],
    rating: 4.94,
    reviewCount: 410,
    isPopular: true,
    tags: ['High Protein', 'Flavor Packed', 'Gluten Free'],
    ingredients: [
      { id: 'chicken-3', name: 'Chicken Breast', amount: 500, unit: 'g', isOptional: false, notes: 'cut into 1-inch bite pieces' },
      { id: 'yogurt-1', name: 'Greek Yogurt', amount: 0.5, unit: 'cup', isOptional: false },
      { id: 'garlic-8', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'ginger-1', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: false, notes: 'grated' },
      { id: 'garam-1', name: 'Garam Masala', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'cumin-3', name: 'Ground Cumin', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'paprika-4', name: 'Smoked Paprika', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'lemon-5', name: 'Lemon', amount: 1, unit: 'tbsp', isOptional: false },
      { id: 'butter-6', name: 'Butter', amount: 1, unit: 'tbsp', isOptional: true, notes: 'melted for basting' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Prepare Spiced Marinade',
        instruction: 'In a bowl, mix Greek yogurt, minced garlic, grated ginger, garam masala, cumin, smoked paprika, lemon juice, and 1 tsp salt.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Marinate Chicken',
        instruction: 'Coat chicken pieces thoroughly with the yogurt marinade. Let sit at room temp for 10 minutes (or in fridge overnight).',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Pan Sear to Smoky Char',
        instruction: 'Heat a heavy cast iron skillet or grill pan over high heat with 1 tbsp oil. Place chicken pieces in pan without crowding. Sear for 5-6 minutes per side until charred edges appear and chicken is cooked through.',
        durationMinutes: 10,
        tip: 'High heat creates the authentic tandoor-style char.'
      },
      {
        stepNumber: 4,
        title: 'Butter Baste and Serve',
        instruction: 'Brush with melted butter, squeeze extra lemon, and garnish with sliced red onions.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'cheesy-french-omelette',
    title: 'Velvety Cheese & Herb Omelette',
    slug: 'velvety-cheese-and-herb-omelette',
    description: 'Soft, creamy French-style folded eggs loaded with melted cheddar cheese and fresh green herbs.',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80',
    prepTime: 4,
    cookTime: 5,
    totalTime: 9,
    difficulty: 'Easy',
    servings: 1,
    cuisine: 'French',
    mealType: 'Breakfast',
    dietary: ['Vegetarian', 'Gluten-Free', 'High-Protein', 'Low-Carb'],
    rating: 4.86,
    reviewCount: 275,
    isPopular: false,
    tags: ['Fast', 'High Protein', 'Under 10 min'],
    ingredients: [
      { id: 'eggs-6', name: 'Eggs', amount: 3, unit: 'large', isOptional: false },
      { id: 'butter-7', name: 'Butter', amount: 1.5, unit: 'tbsp', isOptional: false },
      { id: 'cheese-1', name: 'Cheddar Cheese', amount: 40, unit: 'g', isOptional: false, notes: 'shredded' },
      { id: 'scallion-3', name: 'Green Onions', amount: 1, unit: 'stalk', isOptional: true, notes: 'finely sliced' },
      { id: 'salt-6', name: 'Salt', amount: 0.25, unit: 'tsp', isOptional: false },
      { id: 'pepper-6', name: 'Black Pepper', amount: 0.25, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Beat Eggs',
        instruction: 'Vigorously beat eggs with salt and pepper using a fork until completely homogenous without separate whites.',
        durationMinutes: 2
      },
      {
        stepNumber: 2,
        title: 'Melt Butter in Pan',
        instruction: 'Melt butter in an 8-inch non-stick skillet over medium-low heat until gently foaming.',
        durationMinutes: 1
      },
      {
        stepNumber: 3,
        title: 'Stir & Swirl Curds',
        instruction: 'Pour in eggs. Rapidly stir in small circles with a silicone spatula while shaking the pan back and forth for 60 seconds until tiny velvety curds form.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Fill with Cheese & Roll',
        instruction: 'Spread eggs out flat, sprinkle cheese across the center. Fold the bottom third up and roll the omelette smoothly onto a plate seam-side down. Garnish with chopped herbs.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'garlic-parmesan-pasta',
    title: 'Aglio e Olio Garlic Pasta',
    slug: 'aglio-e-olio-garlic-pasta',
    description: 'The ultimate minimalist Italian classic: spaghetti tossed with golden toasted sliced garlic, rich olive oil, parsley, and red pepper flakes.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 12,
    totalTime: 17,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'Italian',
    mealType: 'Dinner',
    dietary: ['Vegetarian'],
    rating: 4.89,
    reviewCount: 310,
    isPopular: true,
    tags: ['Budget Friendly', 'Pantry Staple', 'Under 20 min'],
    ingredients: [
      { id: 'pasta-3', name: 'Pasta', amount: 250, unit: 'g', isOptional: false, notes: 'spaghetti' },
      { id: 'garlic-9', name: 'Garlic', amount: 6, unit: 'cloves', isOptional: false, notes: 'sliced thinly' },
      { id: 'oliveoil-10', name: 'Olive Oil', amount: 0.25, unit: 'cup', isOptional: false },
      { id: 'chili-4', name: 'Red Pepper Flakes', amount: 0.5, unit: 'tsp', isOptional: false },
      { id: 'parmesan-4', name: 'Parmesan Cheese', amount: 0.5, unit: 'cup', isOptional: true, notes: 'grated' },
      { id: 'cilantro-3', name: 'Cilantro', amount: 2, unit: 'tbsp', isOptional: true, notes: 'or Italian parsley' },
      { id: 'lemon-6', name: 'Lemon', amount: 1, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Boil Pasta',
        instruction: 'Cook spaghetti in well-salted water until al dente. Reserve 1/2 cup pasta water before draining.',
        durationMinutes: 9
      },
      {
        stepNumber: 2,
        title: 'Gently Infuse Garlic Oil',
        instruction: 'In a cold skillet, add olive oil and sliced garlic. Place over medium-low heat. Let garlic gently sizzle for 3-4 minutes until pale golden.',
        durationMinutes: 4,
        tip: 'Do not let garlic turn brown or it will taste bitter.'
      },
      {
        stepNumber: 3,
        title: 'Emulsify Sauce with Pasta Water',
        instruction: 'Add chili flakes, drained pasta, and 1/4 cup reserved pasta water to the oil. Toss vigorously over heat for 2 minutes until the oil and water emulsify into a glossy sauce.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Toss with Parmesan & Lemon',
        instruction: 'Remove from heat, toss with grated parmesan, chopped herbs, and a light splash of lemon juice.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'thai-basil-chicken',
    title: 'Fragrant Thai Basil Chicken (Pad Krapow)',
    slug: 'thai-basil-chicken-pad-krapow',
    description: 'Savory minced chicken stir-fried with fragrant garlic, chili peppers, soy sauce, and a generous fistful of fresh basil over jasmine rice.',
    image: 'https://images.unsplash.com/photo-1569058242252-623df46b5025?auto=format&fit=crop&w=1200&q=80',
    prepTime: 8,
    cookTime: 8,
    totalTime: 16,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'Asian',
    mealType: 'Dinner',
    dietary: ['Dairy-Free', 'High-Protein'],
    rating: 4.97,
    reviewCount: 489,
    isPopular: true,
    tags: ['Street Food', 'Spicy', 'Fast Weeknight'],
    ingredients: [
      { id: 'chicken-4', name: 'Chicken Breast', amount: 400, unit: 'g', isOptional: false, notes: 'minced or finely chopped' },
      { id: 'garlic-10', name: 'Garlic', amount: 5, unit: 'cloves', isOptional: false, notes: 'finely minced' },
      { id: 'basil-2', name: 'Fresh Basil', amount: 1.5, unit: 'cups', isOptional: false, notes: 'holy basil or sweet basil leaves' },
      { id: 'soy-3', name: 'Soy Sauce', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'sugar-2', name: 'Granulated Sugar', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'chili-5', name: 'Red Pepper Flakes', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'oil-2', name: 'Vegetable Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'eggs-7', name: 'Eggs', amount: 2, unit: 'large', isOptional: true, notes: 'crispy fried egg for top' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Aromatics Sizzle',
        instruction: 'Heat vegetable oil in a wok or skillet over high heat. Add minced garlic and chili flakes, stirring for 20 seconds until fragrant.',
        durationMinutes: 1
      },
      {
        stepNumber: 2,
        title: 'Stir-Fry Minced Chicken',
        instruction: 'Add minced chicken and spread across the wok. Stir-fry for 4-5 minutes, breaking up clumps, until chicken is cooked through.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Seasoning Glaze',
        instruction: 'Add soy sauce and sugar. Stir-fry for 1 minute until sauce glazes the chicken evenly.',
        durationMinutes: 1
      },
      {
        stepNumber: 4,
        title: 'Fold in Basil',
        instruction: 'Turn off the heat, dump in fresh basil leaves, and toss immediately for 30 seconds until just wilted. Serve hot over rice with a crispy fried egg.',
        durationMinutes: 1
      }
    ]
  },
  {
    id: 'loaded-beef-quesadillas',
    title: 'Crispy Cheesy Beef Quesadillas',
    slug: 'crispy-cheesy-beef-quesadillas',
    description: 'Golden, toasted flour tortillas packed with seasoned spiced ground beef, melted cheddar cheese, sautéed onions, and diced tomatoes.',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    difficulty: 'Easy',
    servings: 3,
    cuisine: 'Mexican',
    mealType: 'Lunch',
    dietary: ['High-Protein'],
    rating: 4.9,
    reviewCount: 345,
    isPopular: true,
    tags: ['Cheesy', 'Quick', 'Kid Approved'],
    ingredients: [
      { id: 'beef-1', name: 'Ground Beef', amount: 350, unit: 'g', isOptional: false },
      { id: 'tortillas-2', name: 'Flour Tortillas', amount: 4, unit: 'large', isOptional: false },
      { id: 'cheese-2', name: 'Cheddar Cheese', amount: 1.5, unit: 'cups', isOptional: false, notes: 'shredded' },
      { id: 'onion-4', name: 'Onion', amount: 0.5, unit: 'medium', isOptional: false, notes: 'diced' },
      { id: 'garlic-11', name: 'Garlic', amount: 2, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'cumin-4', name: 'Ground Cumin', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'paprika-5', name: 'Smoked Paprika', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'butter-8', name: 'Butter', amount: 1, unit: 'tbsp', isOptional: false, notes: 'for crisping tortillas' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Brown the Beef Filling',
        instruction: 'Heat a skillet over medium-high heat. Add ground beef, diced onion, and garlic. Cook for 6-8 minutes until beef is browned. Drain excess fat.',
        durationMinutes: 7
      },
      {
        stepNumber: 2,
        title: 'Season the Filling',
        instruction: 'Stir in cumin, paprika, salt, and pepper with 2 tbsp water. Simmer for 2 minutes until juicy and flavorful.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Assemble the Quesadilla',
        instruction: 'Melt a little butter in a clean wide skillet over medium heat. Lay a tortilla flat, cover half with cheese, beef mixture, and more cheese. Fold in half.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Toast to Golden Crisp',
        instruction: 'Cook 3 minutes per side until golden brown and cheese is completely melted. Slice into wedges and serve.',
        durationMinutes: 4
      }
    ]
  },
  {
    id: 'garlic-lemon-butter-shrimp',
    title: 'Sautéed Garlic Lemon Butter Shrimp',
    slug: 'sauteed-garlic-lemon-butter-shrimp',
    description: 'Plump juicy shrimp seared in sizzling garlic butter, white wine splash, fresh lemon zest, and fragrant herbs in under 10 minutes.',
    image: 'https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 6,
    totalTime: 11,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'Mediterranean',
    mealType: 'Dinner',
    dietary: ['Gluten-Free', 'High-Protein', 'Low-Carb'],
    rating: 4.95,
    reviewCount: 390,
    isPopular: true,
    tags: ['Quick', 'Seafood', 'Under 15 min'],
    ingredients: [
      { id: 'shrimp-1', name: 'Shrimp', amount: 400, unit: 'g', isOptional: false, notes: 'peeled and deveined' },
      { id: 'garlic-12', name: 'Garlic', amount: 5, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'butter-9', name: 'Butter', amount: 3, unit: 'tbsp', isOptional: false },
      { id: 'oliveoil-11', name: 'Olive Oil', amount: 1, unit: 'tbsp', isOptional: false },
      { id: 'lemon-7', name: 'Lemon', amount: 1, unit: 'whole', isOptional: false, notes: 'juice and zest' },
      { id: 'chili-6', name: 'Red Pepper Flakes', amount: 0.25, unit: 'tsp', isOptional: true },
      { id: 'cilantro-4', name: 'Cilantro', amount: 2, unit: 'tbsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sear the Shrimp',
        instruction: 'Pat shrimp dry and season with salt. Heat olive oil and 1 tbsp butter in a skillet over high heat. Add shrimp in a single layer and cook for 2 minutes undisturbed until pink underneath.',
        durationMinutes: 2
      },
      {
        stepNumber: 2,
        title: 'Garlic Butter Glaze',
        instruction: 'Flip shrimp over. Add minced garlic, remaining 2 tbsp butter, and chili flakes. Sauté for 2 minutes while spooning the garlic butter over the shrimp.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Lemon Herb Finish',
        instruction: 'Squeeze in fresh lemon juice and toss with chopped herbs. Remove from heat immediately so shrimp remains tender.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'creamy-spinach-feta-pasta',
    title: 'Creamy Spinach & Feta Rigatoni',
    slug: 'creamy-spinach-and-feta-rigatoni',
    description: 'Tender pasta enveloped in melted feta, sautéed baby spinach, garlic, olive oil, and freshly cracked black pepper.',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    difficulty: 'Easy',
    servings: 3,
    cuisine: 'Mediterranean',
    mealType: 'Dinner',
    dietary: ['Vegetarian'],
    rating: 4.88,
    reviewCount: 260,
    isPopular: false,
    tags: ['Vegetarian', 'Quick Dinner', 'Comfort Food'],
    ingredients: [
      { id: 'pasta-4', name: 'Pasta', amount: 300, unit: 'g', isOptional: false },
      { id: 'spinach-1', name: 'Spinach', amount: 200, unit: 'g', isOptional: false, notes: 'fresh baby spinach' },
      { id: 'feta-3', name: 'Feta Cheese', amount: 150, unit: 'g', isOptional: false },
      { id: 'garlic-13', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'oliveoil-12', name: 'Olive Oil', amount: 3, unit: 'tbsp', isOptional: false },
      { id: 'lemon-8', name: 'Lemon', amount: 1, unit: 'tbsp', isOptional: true, notes: 'juice' },
      { id: 'chili-7', name: 'Red Pepper Flakes', amount: 0.5, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Cook Pasta',
        instruction: 'Boil pasta in salted water until al dente. Reserve 1/2 cup pasta cooking water.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Wilt Spinach with Garlic',
        instruction: 'Warm olive oil in a deep skillet over medium heat. Sauté garlic for 1 minute, then add baby spinach by handfuls until wilted.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Melt Feta & Emulsify',
        instruction: 'Lower heat, crumble in feta cheese, add 1/4 cup pasta water and lemon juice. Stir gently until feta softens into a creamy sauce.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Combine & Season',
        instruction: 'Toss cooked pasta into the sauce until thoroughly coated. Season with black pepper and chili flakes.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'crispy-tofu-veggie-stir-fry',
    title: 'Crispy Ginger Tofu Stir-Fry',
    slug: 'crispy-ginger-tofu-stir-fry',
    description: 'Golden pan-crisped tofu cubes tossed with crunchy bell peppers, broccoli, ginger, garlic, and a savory soy-sesame glaze.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    prepTime: 12,
    cookTime: 12,
    totalTime: 24,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'Asian',
    mealType: 'Dinner',
    dietary: ['Vegan', 'Vegetarian', 'Dairy-Free', 'High-Protein'],
    rating: 4.82,
    reviewCount: 180,
    isPopular: false,
    tags: ['Vegan', 'Plant Based', 'Healthy'],
    ingredients: [
      { id: 'tofu-1', name: 'Firm Tofu', amount: 350, unit: 'g', isOptional: false, notes: 'pressed and cubed' },
      { id: 'bellpepper-3', name: 'Bell Pepper', amount: 1, unit: 'medium', isOptional: false, notes: 'chopped' },
      { id: 'broccoli-1', name: 'Broccoli', amount: 1.5, unit: 'cups', isOptional: false, notes: 'florets' },
      { id: 'ginger-2', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: false, notes: 'minced' },
      { id: 'garlic-14', name: 'Garlic', amount: 3, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'soy-4', name: 'Soy Sauce', amount: 2.5, unit: 'tbsp', isOptional: false },
      { id: 'sesame-2', name: 'Toasted Sesame Oil', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'vegetableoil-1', name: 'Vegetable Oil', amount: 2, unit: 'tbsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Crisp the Tofu',
        instruction: 'Heat 1.5 tbsp vegetable oil in a wok or skillet over high heat. Add tofu cubes and sear for 6-8 minutes, turning occasionally until golden brown on all sides. Remove to a plate.',
        durationMinutes: 7
      },
      {
        stepNumber: 2,
        title: 'Stir-Fry Vegetables',
        instruction: 'Add remaining oil, minced ginger, and garlic. Stir-fry for 30 seconds. Add broccoli florets and bell peppers, tossing vigorously for 3-4 minutes until tender-crisp.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Glaze and Finish',
        instruction: 'Return crispy tofu to wok. Pour in soy sauce and sesame oil. Toss for 1 minute until fragrant and glossy.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'classic-french-toast',
    title: 'Golden Cinnamon French Toast',
    slug: 'golden-cinnamon-french-toast',
    description: 'Thick artisan bread soaked in a rich vanilla-cinnamon egg custard, griddled in butter until golden and caramelized.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 8,
    totalTime: 13,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'French',
    mealType: 'Breakfast',
    dietary: ['Vegetarian'],
    rating: 4.93,
    reviewCount: 350,
    isPopular: true,
    tags: ['Breakfast', 'Comfort Food', 'Sweet'],
    ingredients: [
      { id: 'bread-2', name: 'Bread', amount: 4, unit: 'thick slices', isOptional: false, notes: 'brioche, challah, or sandwich bread' },
      { id: 'eggs-8', name: 'Eggs', amount: 2, unit: 'large', isOptional: false },
      { id: 'milk-2', name: 'Milk', amount: 0.5, unit: 'cup', isOptional: false },
      { id: 'cinnamon-1', name: 'Ground Cinnamon', amount: 0.5, unit: 'tsp', isOptional: false },
      { id: 'sugar-3', name: 'Granulated Sugar', amount: 1, unit: 'tbsp', isOptional: false },
      { id: 'butter-10', name: 'Butter', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'honey-3', name: 'Honey', amount: 2, unit: 'tbsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Whisk Custard',
        instruction: 'In a shallow wide bowl, whisk eggs, milk, cinnamon, and sugar until completely blended.',
        durationMinutes: 2
      },
      {
        stepNumber: 2,
        title: 'Soak Bread',
        instruction: 'Dip each bread slice into the custard mixture for 20-30 seconds per side until soaked through.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Griddle in Butter',
        instruction: 'Melt butter in a large skillet over medium heat. Cook soaked bread slices for 3-4 minutes per side until golden brown and slightly puffed.',
        durationMinutes: 6
      },
      {
        stepNumber: 4,
        title: 'Serve Warm',
        instruction: 'Transfer to plates and drizzle with warm honey or maple syrup.',
        durationMinutes: 1
      }
    ]
  },
  {
    id: 'garlic-herb-roasted-potatoes',
    title: 'Crispy Garlic Herb Roasted Potatoes',
    slug: 'crispy-garlic-herb-roasted-potatoes',
    description: 'Bite-sized potato wedges tossed in olive oil, crushed garlic, and rosemary, roasted until shatteringly crisp outside and fluffy inside.',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1200&q=80',
    prepTime: 8,
    cookTime: 30,
    totalTime: 38,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'American',
    mealType: 'Dinner',
    dietary: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'],
    rating: 4.89,
    reviewCount: 305,
    isPopular: false,
    tags: ['Side Dish', 'Roast', 'Crispy'],
    ingredients: [
      { id: 'potato-2', name: 'Potato', amount: 800, unit: 'g', isOptional: false, notes: 'cut into 1-inch cubes or wedges' },
      { id: 'oliveoil-13', name: 'Olive Oil', amount: 3, unit: 'tbsp', isOptional: false },
      { id: 'garlic-15', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: false, notes: 'finely minced' },
      { id: 'paprika-6', name: 'Smoked Paprika', amount: 0.5, unit: 'tsp', isOptional: true },
      { id: 'salt-7', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'pepper-7', name: 'Black Pepper', amount: 0.5, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Prep & Preheat',
        instruction: 'Preheat oven to 215°C (425°F). Cut potatoes into uniform 1-inch chunks.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Season & Toss',
        instruction: 'Toss potatoes with olive oil, minced garlic, paprika, salt, and pepper until thoroughly coated.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Roast to Crispness',
        instruction: 'Spread in a single layer cut-side down on a baking sheet. Roast for 30-35 minutes, flipping halfway through until deeply golden and crispy.',
        durationMinutes: 30
      }
    ]
  },
  {
    id: 'fresh-greek-salad-feta',
    title: 'Traditional Greek Village Salad',
    slug: 'traditional-greek-village-salad',
    description: 'Crisp cucumbers, vine-ripened tomatoes, thinly shaved red onion, and creamy block of feta drizzled with oregano-infused olive oil.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'Mediterranean',
    mealType: 'Lunch',
    dietary: ['Vegetarian', 'Gluten-Free'],
    rating: 4.87,
    reviewCount: 215,
    isPopular: false,
    tags: ['Fresh', 'No Cook', 'Under 15 min'],
    ingredients: [
      { id: 'tomatoes-3', name: 'Tomato', amount: 3, unit: 'ripe', isOptional: false, notes: 'cut into wedges' },
      { id: 'cucumber-2', name: 'Cucumber', amount: 1, unit: 'medium', isOptional: false, notes: 'sliced thick' },
      { id: 'redonion-2', name: 'Red Onion', amount: 0.5, unit: 'small', isOptional: false, notes: 'thinly sliced' },
      { id: 'bellpepper-4', name: 'Bell Pepper', amount: 0.5, unit: 'medium', isOptional: true, notes: 'sliced' },
      { id: 'feta-4', name: 'Feta Cheese', amount: 150, unit: 'g', isOptional: false, notes: 'whole slab or crumbled' },
      { id: 'oliveoil-14', name: 'Olive Oil', amount: 3, unit: 'tbsp', isOptional: false },
      { id: 'oregano-2', name: 'Dried Oregano', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'salt-8', name: 'Salt', amount: 0.5, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Chop Vegetables',
        instruction: 'Cut tomatoes into hearty bite-sized wedges. Slice cucumbers and thinly shave red onion.',
        durationMinutes: 6
      },
      {
        stepNumber: 2,
        title: 'Assemble Bowl',
        instruction: 'Toss tomatoes, cucumbers, red onion, and bell peppers in a shallow serving bowl. Season with sea salt.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Crown with Feta & Dress',
        instruction: 'Place feta on top, drizzle generously with extra virgin olive oil, and dust with dried oregano.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'classic-bolognese-sauce',
    title: 'Rich Slow-Simmered Bolognese',
    slug: 'rich-slow-simmered-bolognese',
    description: 'Hearty ground beef simmered in a savory tomato, onion, and garlic reduction, tossed with ribbons of al dente pasta.',
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 30,
    totalTime: 40,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'Italian',
    mealType: 'Dinner',
    dietary: ['High-Protein'],
    rating: 4.96,
    reviewCount: 520,
    isPopular: true,
    tags: ['Family Favorite', 'Make Ahead', 'Comfort Food'],
    ingredients: [
      { id: 'beef-2', name: 'Ground Beef', amount: 500, unit: 'g', isOptional: false },
      { id: 'pasta-5', name: 'Pasta', amount: 400, unit: 'g', isOptional: false, notes: 'spaghetti or tagliatelle' },
      { id: 'tomatoes-4', name: 'Canned Tomatoes', amount: 1, unit: 'can (400g)', isOptional: false },
      { id: 'onion-5', name: 'Onion', amount: 1, unit: 'medium', isOptional: false, notes: 'finely diced' },
      { id: 'garlic-16', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'oliveoil-15', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'parmesan-5', name: 'Parmesan Cheese', amount: 0.5, unit: 'cup', isOptional: true, notes: 'grated' },
      { id: 'oregano-3', name: 'Dried Oregano', amount: 1, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sauté Aromatics',
        instruction: 'Heat olive oil in a deep pot over medium heat. Sauté diced onions and garlic for 5 minutes until soft and translucent.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Brown the Beef',
        instruction: 'Add ground beef, breaking it up with a spoon. Brown thoroughly for 8 minutes until juices evaporate.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Simmer the Sauce',
        instruction: 'Pour in canned tomatoes, oregano, salt, and pepper. Cover and simmer on low for 20 minutes until rich and fragrant.',
        durationMinutes: 20
      },
      {
        stepNumber: 4,
        title: 'Toss with Pasta',
        instruction: 'Boil pasta in salted water. Drain and toss with the hot bolognese sauce. Serve with generous grated parmesan.',
        durationMinutes: 5
      }
    ]
  },
  {
    id: 'spicy-peanut-sesame-noodles',
    title: '15-Minute Spicy Peanut Sesame Noodles',
    slug: '15-minute-spicy-peanut-sesame-noodles',
    description: 'Chewy noodles tossed in a luscious peanut, soy sauce, garlic, ginger, and sesame dressing with fresh green onions.',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'Asian',
    mealType: 'Lunch',
    dietary: ['Vegan', 'Vegetarian', 'Dairy-Free'],
    rating: 4.88,
    reviewCount: 312,
    isPopular: true,
    tags: ['Quick', 'Pantry Friendly', 'Under 15 min'],
    ingredients: [
      { id: 'pasta-6', name: 'Pasta', amount: 200, unit: 'g', isOptional: false, notes: 'noodles or spaghetti' },
      { id: 'soy-5', name: 'Soy Sauce', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'sesame-3', name: 'Toasted Sesame Oil', amount: 1, unit: 'tbsp', isOptional: false },
      { id: 'garlic-17', name: 'Garlic', amount: 2, unit: 'cloves', isOptional: false, notes: 'grated' },
      { id: 'ginger-3', name: 'Ginger', amount: 1, unit: 'tsp', isOptional: false, notes: 'grated' },
      { id: 'honey-4', name: 'Honey', amount: 1, unit: 'tbsp', isOptional: false },
      { id: 'chili-8', name: 'Red Pepper Flakes', amount: 0.5, unit: 'tsp', isOptional: true },
      { id: 'scallion-4', name: 'Green Onions', amount: 2, unit: 'stalks', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Boil Noodles',
        instruction: 'Cook noodles in boiling water according to package directions. Drain and rinse briefly under warm water.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Whisk Sauce',
        instruction: 'In a serving bowl, whisk soy sauce, sesame oil, honey, grated garlic, ginger, and chili flakes together.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Toss & Garnish',
        instruction: 'Add warm noodles to the bowl and toss until every strand is coated in the savory sauce. Top with chopped green onions.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'quick-beef-broccoli-stirfry',
    title: 'Savory Beef & Broccoli Stir-Fry',
    slug: 'savory-beef-and-broccoli-stir-fry',
    description: 'Tender slices of beef and crisp broccoli florets wok-tossed in a rich garlic ginger soy sauce.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    difficulty: 'Easy',
    servings: 3,
    cuisine: 'Asian',
    mealType: 'Dinner',
    dietary: ['Dairy-Free', 'High-Protein'],
    rating: 4.91,
    reviewCount: 395,
    isPopular: true,
    tags: ['High Protein', 'Weeknight Dinner', 'Under 20 min'],
    ingredients: [
      { id: 'beef-3', name: 'Ground Beef', amount: 400, unit: 'g', isOptional: false, notes: 'or sliced beef steak' },
      { id: 'broccoli-2', name: 'Broccoli', amount: 2, unit: 'cups', isOptional: false, notes: 'cut into florets' },
      { id: 'garlic-18', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'ginger-4', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: false, notes: 'minced' },
      { id: 'soy-6', name: 'Soy Sauce', amount: 3, unit: 'tbsp', isOptional: false },
      { id: 'sesame-4', name: 'Toasted Sesame Oil', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'oil-3', name: 'Vegetable Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'rice-3', name: 'White Rice', amount: 2, unit: 'cups', isOptional: true, notes: 'cooked, for serving' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Blanch or Steam Broccoli',
        instruction: 'Steam broccoli florets in a splash of water for 2 minutes until bright green, then drain.',
        durationMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Sear the Beef',
        instruction: 'Heat vegetable oil in a wok or large skillet over high heat. Add beef and sear for 4-5 minutes until browned and caramelized.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Aromatics & Sauce Glaze',
        instruction: 'Push beef to the side, add minced garlic and ginger, cooking for 30 seconds. Add soy sauce, sesame oil, and cooked broccoli.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Combine and Serve',
        instruction: 'Toss everything together over high heat for 1 minute until glazed and piping hot. Serve over rice.',
        durationMinutes: 1
      }
    ]
  },
  {
    id: 'spanish-tortilla-espanola',
    title: 'Authentic Spanish Potato Omelette',
    slug: 'authentic-spanish-potato-omelette',
    description: 'Tender sliced potatoes and sweet caramelized onions slow-cooked in olive oil, then folded into velvety eggs.',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=1200&q=80',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    difficulty: 'Medium',
    servings: 4,
    cuisine: 'Spanish',
    mealType: 'Lunch',
    dietary: ['Vegetarian', 'Gluten-Free', 'Dairy-Free'],
    rating: 4.93,
    reviewCount: 310,
    isPopular: false,
    tags: ['Tapas', 'Traditional', 'Pantry Staple'],
    ingredients: [
      { id: 'potato-3', name: 'Potato', amount: 500, unit: 'g', isOptional: false, notes: 'peeled and sliced thin' },
      { id: 'onion-6', name: 'Onion', amount: 1, unit: 'large', isOptional: false, notes: 'sliced' },
      { id: 'eggs-9', name: 'Eggs', amount: 6, unit: 'large', isOptional: false },
      { id: 'oliveoil-16', name: 'Olive Oil', amount: 0.5, unit: 'cup', isOptional: false },
      { id: 'salt-9', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Poach Potatoes & Onions in Olive Oil',
        instruction: 'Heat olive oil in a non-stick skillet over medium-low. Add sliced potatoes and onions with salt. Gently cook for 15-18 minutes until tender but not browned.',
        durationMinutes: 16
      },
      {
        stepNumber: 2,
        title: 'Drain & Mix with Beaten Eggs',
        instruction: 'Drain potatoes and onions, reserving 2 tbsp oil. Beat eggs in a large bowl and gently fold in the warm potatoes. Let rest for 5 minutes.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Cook First Side',
        instruction: 'Heat reserved oil in skillet over medium heat. Pour in egg-potato mixture. Cook for 4-5 minutes until bottom is set and edges start pulling away.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Flip and Finish',
        instruction: 'Place a flat plate over skillet, invert swiftly, and slide tortilla back into pan. Cook for 3 minutes more until just set in center.',
        durationMinutes: 4
      }
    ]
  },
  {
    id: 'roasted-tomato-soup-grilled-cheese',
    title: 'Roasted Tomato Soup & Crispy Grilled Cheese',
    slug: 'roasted-tomato-soup-crispy-grilled-cheese',
    description: 'Velvety roasted garlic and tomato soup served alongside a golden, buttery, stringy cheddar grilled cheese sandwich.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'American',
    mealType: 'Lunch',
    dietary: ['Vegetarian'],
    rating: 4.96,
    reviewCount: 470,
    isPopular: true,
    tags: ['Comfort Food', 'Soup', 'Dipping'],
    ingredients: [
      { id: 'tomatoes-5', name: 'Tomato', amount: 6, unit: 'medium', isOptional: false, notes: 'halved' },
      { id: 'garlic-19', name: 'Garlic', amount: 5, unit: 'cloves', isOptional: false },
      { id: 'onion-7', name: 'Onion', amount: 1, unit: 'medium', isOptional: false, notes: 'chopped' },
      { id: 'oliveoil-17', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'bread-3', name: 'Bread', amount: 4, unit: 'slices', isOptional: false },
      { id: 'cheese-3', name: 'Cheddar Cheese', amount: 100, unit: 'g', isOptional: false, notes: 'sliced or shredded' },
      { id: 'butter-11', name: 'Butter', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'basil-3', name: 'Fresh Basil', amount: 5, unit: 'leaves', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Roast Tomatoes & Garlic',
        instruction: 'Place halved tomatoes, chopped onion, and garlic on a baking sheet. Drizzle with olive oil, salt, and pepper. Roast at 200°C (400°F) for 20 minutes until caramelized.',
        durationMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Blend the Soup',
        instruction: 'Transfer roasted vegetables to a blender or pot with fresh basil. Blend until velvety smooth, adding water or cream as desired for thickness.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Make Grilled Cheese',
        instruction: 'Butter the outside of bread slices. Sandwich cheddar cheese in between. Griddle in a skillet on medium heat for 3-4 minutes per side until golden and bubbly.',
        durationMinutes: 7
      },
      {
        stepNumber: 4,
        title: 'Serve Together',
        instruction: 'Ladle hot soup into bowls and dip the crunchy grilled cheese triangles directly into the soup.',
        durationMinutes: 1
      }
    ]
  },
  {
    id: 'tuscan-garlic-chicken',
    title: 'Creamy Tuscan Garlic Chicken',
    slug: 'creamy-tuscan-garlic-chicken',
    description: 'Tender pan-seared chicken breasts smothered in a rich garlic cream sauce loaded with baby spinach, tomatoes, and parmesan.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 18,
    totalTime: 28,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'Italian',
    mealType: 'Dinner',
    dietary: ['Gluten-Free', 'High-Protein', 'Low-Carb'],
    rating: 4.97,
    reviewCount: 540,
    isPopular: true,
    tags: ['Restaurant Quality', 'Keto', 'Creamy Sauce'],
    ingredients: [
      { id: 'chicken-5', name: 'Chicken Breast', amount: 600, unit: 'g', isOptional: false },
      { id: 'garlic-20', name: 'Garlic', amount: 6, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'spinach-2', name: 'Spinach', amount: 150, unit: 'g', isOptional: false, notes: 'fresh baby spinach' },
      { id: 'cherrytomatoes-2', name: 'Cherry Tomatoes', amount: 1, unit: 'cup', isOptional: false, notes: 'halved' },
      { id: 'heavycream-1', name: 'Heavy Cream', amount: 0.75, unit: 'cup', isOptional: false },
      { id: 'parmesan-6', name: 'Parmesan Cheese', amount: 0.5, unit: 'cup', isOptional: false, notes: 'grated' },
      { id: 'oliveoil-18', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'butter-12', name: 'Butter', amount: 1, unit: 'tbsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sear Chicken Breasts',
        instruction: 'Season chicken with salt, pepper, and paprika. Heat olive oil in a large skillet over medium-high heat. Sear chicken 5-6 minutes per side until golden brown and cooked through. Remove to a plate.',
        durationMinutes: 11
      },
      {
        stepNumber: 2,
        title: 'Sauté Garlic & Tomatoes',
        instruction: 'Melt butter in the same pan. Add minced garlic and halved cherry tomatoes, cooking for 2 minutes until tomatoes soften.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Simmer Cream & Wilt Spinach',
        instruction: 'Pour in heavy cream and stir in grated parmesan. Bring to a gentle simmer, then add spinach and stir until wilted (2 minutes).',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Return Chicken & Baste',
        instruction: 'Nestle seared chicken back into the luscious sauce, spooning sauce over top. Simmer for 2 more minutes and serve.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'classic-guacamole-chips',
    title: 'Fresh Lime & Cilantro Guacamole',
    slug: 'fresh-lime-and-cilantro-guacamole',
    description: 'Chunky mashed ripe avocados mixed with diced tomato, red onion, cilantro, fresh lime juice, and a pinch of cumin.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'Mexican',
    mealType: 'Snack',
    dietary: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'],
    rating: 4.91,
    reviewCount: 230,
    isPopular: false,
    tags: ['Dip', 'No Cook', 'Party Food'],
    ingredients: [
      { id: 'avocado-2', name: 'Avocado', amount: 3, unit: 'ripe', isOptional: false },
      { id: 'lime-2', name: 'Lime', amount: 1.5, unit: 'whole', isOptional: false, notes: 'fresh juice' },
      { id: 'tomato-6', name: 'Tomato', amount: 1, unit: 'medium', isOptional: false, notes: 'seeded and finely diced' },
      { id: 'redonion-3', name: 'Red Onion', amount: 0.25, unit: 'cup', isOptional: false, notes: 'finely minced' },
      { id: 'cilantro-5', name: 'Cilantro', amount: 3, unit: 'tbsp', isOptional: false, notes: 'finely chopped' },
      { id: 'garlic-21', name: 'Garlic', amount: 1, unit: 'clove', isOptional: true, notes: 'grated' },
      { id: 'salt-10', name: 'Salt', amount: 0.75, unit: 'tsp', isOptional: false },
      { id: 'tortillas-3', name: 'Flour Tortillas', amount: 4, unit: 'medium', isOptional: true, notes: 'baked or fried for chips' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Scoop and Mash Avocados',
        instruction: 'Cut avocados in half, remove pits, and scoop flesh into a bowl. Squeeze lime juice over immediately and mash with a fork to desired chunkiness.',
        durationMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Fold in Aromatics',
        instruction: 'Add diced tomato, red onion, chopped cilantro, minced garlic, and salt. Stir gently to combine.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Season to Taste',
        instruction: 'Taste and adjust lime and salt as needed. Serve immediately with warm tortilla chips.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'overnight-chia-berry-oats',
    title: 'Creamy Overnight Honey Oats',
    slug: 'creamy-overnight-honey-oats',
    description: 'Wholesome rolled oats soaked in milk, creamy Greek yogurt, cinnamon, and pure honey for an effortless nutritious breakfast.',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 0,
    totalTime: 5,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'American',
    mealType: 'Breakfast',
    dietary: ['Vegetarian', 'Gluten-Free', 'High-Protein'],
    rating: 4.88,
    reviewCount: 260,
    isPopular: false,
    tags: ['Make Ahead', 'No Cook', 'Healthy Breakfast'],
    ingredients: [
      { id: 'oats-1', name: 'Rolled Oats', amount: 1, unit: 'cup', isOptional: false },
      { id: 'milk-3', name: 'Milk', amount: 1, unit: 'cup', isOptional: false },
      { id: 'yogurt-2', name: 'Greek Yogurt', amount: 0.5, unit: 'cup', isOptional: false },
      { id: 'honey-5', name: 'Honey', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'cinnamon-2', name: 'Ground Cinnamon', amount: 0.5, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Combine in a Jar',
        instruction: 'In a mason jar or glass bowl, combine rolled oats, milk, Greek yogurt, honey, and cinnamon.',
        durationMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Stir & Chill Overnight',
        instruction: 'Stir thoroughly until mixed. Seal with a lid and refrigerate for at least 4 hours or overnight.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Serve',
        instruction: 'Give a quick stir in the morning, top with extra honey or fruits, and enjoy cold.',
        durationMinutes: 1
      }
    ]
  },
  {
    id: 'one-pan-chicken-potato-skillet',
    title: 'One-Pan Crispy Chicken & Potato Skillet',
    slug: 'one-pan-crispy-chicken-and-potato-skillet',
    description: 'Juicy golden seared chicken breasts with tender skillet-roasted potatoes, sweet caramelized onions, and olive oil.',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 22,
    totalTime: 32,
    difficulty: 'Easy',
    servings: 3,
    cuisine: 'American',
    mealType: 'Dinner',
    dietary: ['Gluten-Free', 'High-Protein', 'Dairy-Free'],
    rating: 4.95,
    reviewCount: 360,
    isPopular: true,
    tags: ['One Pan', 'High Protein', 'Family Dinner'],
    ingredients: [
      { id: 'chicken-6', name: 'Chicken Breast', amount: 500, unit: 'g', isOptional: false, notes: 'diced into bite-sized pieces' },
      { id: 'potato-4', name: 'Potato', amount: 500, unit: 'g', isOptional: false, notes: 'cubed small for even cooking' },
      { id: 'onion-8', name: 'Onion', amount: 1, unit: 'medium', isOptional: false, notes: 'sliced' },
      { id: 'oliveoil-19', name: 'Olive Oil', amount: 3, unit: 'tbsp', isOptional: false },
      { id: 'salt-11', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'pepper-8', name: 'Black Pepper', amount: 0.5, unit: 'tsp', isOptional: false },
      { id: 'paprika-7', name: 'Smoked Paprika', amount: 1, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Par-Cook & Crisp Potatoes',
        instruction: 'Heat 2 tbsp olive oil in a wide heavy skillet over medium-high heat. Add cubed potatoes, season with 1/2 tsp salt, and cook undisturbed for 6-8 minutes until golden crust develops.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Sauté Onions',
        instruction: 'Add sliced onions to the skillet. Cook together with the potatoes for 4-5 minutes until onions turn sweet and caramelized.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Sear the Chicken',
        instruction: 'Push potatoes and onions to one side, add remaining 1 tbsp olive oil and seasoned chicken pieces. Sear for 6-7 minutes until chicken is deeply browned and cooked through.',
        durationMinutes: 7
      },
      {
        stepNumber: 4,
        title: 'Toss & Serve',
        instruction: 'Toss all ingredients together in the skillet with cracked black pepper and paprika. Serve piping hot directly from the pan.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'homestyle-chicken-rice-skillet',
    title: 'Homestyle Savory Chicken & Rice',
    slug: 'homestyle-savory-chicken-and-rice',
    description: 'Tender seasoned chicken breast pieces simmered with fluffy white rice, caramelized onions, olive oil, and garlic.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'American',
    mealType: 'Dinner',
    dietary: ['Gluten-Free', 'High-Protein', 'Dairy-Free'],
    rating: 4.92,
    reviewCount: 420,
    isPopular: true,
    tags: ['Comfort Food', 'Skillet Dinner', 'Kid Friendly'],
    ingredients: [
      { id: 'chicken-7', name: 'Chicken Breast', amount: 500, unit: 'g', isOptional: false, notes: 'cut into cubes' },
      { id: 'rice-4', name: 'White Rice', amount: 1.5, unit: 'cups', isOptional: false, notes: 'rinsed' },
      { id: 'onion-9', name: 'Onion', amount: 1, unit: 'medium', isOptional: false, notes: 'finely diced' },
      { id: 'oliveoil-20', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'salt-12', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'garlic-22', name: 'Garlic', amount: 3, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'pepper-9', name: 'Black Pepper', amount: 0.5, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sear Seasoned Chicken',
        instruction: 'Heat 1 tbsp olive oil in a deep skillet or Dutch oven over medium-high heat. Season chicken with salt. Sear for 5 minutes until lightly golden. Remove to a plate.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Sauté Onions & Garlic',
        instruction: 'Add remaining olive oil to the pan. Sauté diced onions and minced garlic for 3 minutes until fragrant and translucent.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Toast Rice & Simmer',
        instruction: 'Add rinsed white rice, stirring for 2 minutes to toast the grains. Add 2.5 cups water or broth and 1 tsp salt. Bring to a boil, nestle chicken back on top, cover tightly with lid, and simmer on low for 15 minutes.',
        durationMinutes: 17
      },
      {
        stepNumber: 4,
        title: 'Fluff & Rest',
        instruction: 'Remove from heat and let sit covered for 5 minutes. Fluff rice with a fork and serve hot.',
        durationMinutes: 5
      }
    ]
  },
  {
    id: 'classic-simple-avocado-toast',
    title: 'Classic Creamy Avocado Toast',
    slug: 'classic-creamy-avocado-toast',
    description: 'Crisp golden toasted artisan bread topped with seasoned mashed ripe avocado and flaky sea salt.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 3,
    totalTime: 8,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'American',
    mealType: 'Breakfast',
    dietary: ['Vegan', 'Vegetarian', 'Dairy-Free'],
    rating: 4.9,
    reviewCount: 310,
    isPopular: true,
    tags: ['Quick Breakfast', 'Healthy', 'Under 10 min'],
    ingredients: [
      { id: 'bread-av-1', name: 'Bread', amount: 2, unit: 'slices', isOptional: false },
      { id: 'avocado-av-1', name: 'Avocado', amount: 1, unit: 'large ripe', isOptional: false },
      { id: 'salt-av-1', name: 'Salt', amount: 0.5, unit: 'tsp', isOptional: false },
      { id: 'oliveoil-av-1', name: 'Olive Oil', amount: 1, unit: 'tsp', isOptional: true },
      { id: 'lemon-av-1', name: 'Lemon', amount: 0.5, unit: 'tsp', isOptional: true, notes: 'fresh juice' },
      { id: 'chili-av-1', name: 'Red Pepper Flakes', amount: 0.25, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Toast the Bread',
        instruction: 'Toast artisan bread slices until golden brown and crispy.',
        durationMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Mash Avocado & Season',
        instruction: 'Scoop avocado into a small bowl, sprinkle with salt and optional lemon juice. Mash gently with a fork.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Spread and Garnish',
        instruction: 'Spread generously over toast slices and finish with a pinch of flaky salt and chili flakes.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'homestyle-tomato-scrambled-eggs',
    title: 'Silky Tomato Scrambled Eggs',
    slug: 'silky-tomato-scrambled-eggs',
    description: 'Juicy stewed sweet tomatoes cooked into velvety, tender scrambled eggs with onions and a pinch of salt.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 8,
    totalTime: 13,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'Asian',
    mealType: 'Breakfast',
    dietary: ['Vegetarian', 'Gluten-Free', 'Dairy-Free', 'High-Protein'],
    rating: 4.94,
    reviewCount: 380,
    isPopular: true,
    tags: ['Quick Breakfast', 'Comfort Food', 'High Protein'],
    ingredients: [
      { id: 'eggs-tse-1', name: 'Eggs', amount: 3, unit: 'large', isOptional: false },
      { id: 'tomato-tse-1', name: 'Tomato', amount: 2, unit: 'medium', isOptional: false, notes: 'cut into wedges' },
      { id: 'onion-tse-1', name: 'Onion', amount: 0.5, unit: 'medium', isOptional: false, notes: 'or green onions' },
      { id: 'oil-tse-1', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false, notes: 'or vegetable oil' },
      { id: 'salt-tse-1', name: 'Salt', amount: 0.75, unit: 'tsp', isOptional: false },
      { id: 'sugar-tse-1', name: 'Granulated Sugar', amount: 0.5, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Soft Scramble the Eggs',
        instruction: 'Beat eggs with a pinch of salt. Heat 1 tbsp oil in a skillet on medium-high. Pour in eggs, softly scramble for 45 seconds until 80% set, then remove to a bowl.',
        durationMinutes: 2
      },
      {
        stepNumber: 2,
        title: 'Simmer the Tomatoes & Onions',
        instruction: 'Add remaining oil to the pan. Sauté sliced onions for 2 minutes, then add tomato wedges and 1/2 tsp salt. Cook for 4-5 minutes until tomatoes release their sweet juices.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Combine & Finish',
        instruction: 'Return soft scrambled eggs to the pan. Gently fold eggs through the warm tomato sauce for 1 minute until heated through.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'kashmiri-mutton-rogan-josh',
    title: 'Kashmiri Mutton Rogan Josh',
    slug: 'kashmiri-mutton-rogan-josh',
    description: 'Tender succulent pieces of mutton slow-cooked in an aromatic Kashmiri spiced yogurt gravy with garlic, ginger, and garam masala.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=1200&q=80',
    prepTime: 15,
    cookTime: 45,
    totalTime: 60,
    difficulty: 'Medium',
    servings: 4,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Gluten-Free', 'High-Protein'],
    rating: 4.97,
    reviewCount: 410,
    isPopular: true,
    tags: ['Mutton', 'Curry', 'Flavor Packed', 'Festive'],
    ingredients: [
      { id: 'mutton-1', name: 'Mutton / Lamb', amount: 600, unit: 'g', isOptional: false, notes: 'curry cut bone-in or boneless mutton' },
      { id: 'onion-rj-1', name: 'Onion', amount: 2, unit: 'medium', isOptional: false, notes: 'finely sliced' },
      { id: 'yogurt-rj-1', name: 'Greek Yogurt', amount: 0.75, unit: 'cup', isOptional: false, notes: 'whisked smooth' },
      { id: 'garlic-rj-1', name: 'Garlic', amount: 5, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'ginger-rj-1', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: false, notes: 'grated' },
      { id: 'oil-rj-1', name: 'Olive Oil', amount: 3, unit: 'tbsp', isOptional: false, notes: 'or ghee' },
      { id: 'garam-rj-1', name: 'Garam Masala', amount: 1.5, unit: 'tsp', isOptional: false },
      { id: 'paprika-rj-1', name: 'Smoked Paprika', amount: 1.5, unit: 'tbsp', isOptional: false, notes: 'Kashmiri red chili powder' },
      { id: 'cumin-rj-1', name: 'Ground Cumin', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'salt-rj-1', name: 'Salt', amount: 1.25, unit: 'tsp', isOptional: false },
      { id: 'cilantro-rj-1', name: 'Cilantro', amount: 2, unit: 'tbsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Brown the Onions & Aromatics',
        instruction: 'Heat oil in a heavy Dutch oven or pressure pot over medium-high heat. Add sliced onions and sauté for 8-10 minutes until deep golden brown. Stir in minced garlic and ginger for 1 minute.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Sear the Mutton',
        instruction: 'Add the mutton pieces. Sear on high heat for 6-8 minutes, stirring continuously, until meat changes color and is lightly browned on all edges.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Whisk in Spiced Yogurt Gravy',
        instruction: 'Lower heat to low. Whisk yogurt with smoked paprika, cumin, garam masala, and salt. Pour into pot gradually, stirring constantly to prevent curdling.',
        durationMinutes: 4
      },
      {
        stepNumber: 4,
        title: 'Slow Simmer until Melt-in-Mouth Tender',
        instruction: 'Add 1 cup warm water, cover tightly, and simmer on gentle low heat for 40-45 minutes (or 20 minutes under pressure) until mutton is fork-tender and rich red oil separates on top.',
        durationMinutes: 42
      }
    ]
  },
  {
    id: 'hyderabadi-mutton-dum-biryani',
    title: 'Royal Hyderabadi Mutton Dum Biryani',
    slug: 'royal-hyderabadi-mutton-dum-biryani',
    description: 'Fragrant aged basmati rice layered with spiced marinated mutton, caramelized onions, and royal whole spices slow-steamed under dum.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    prepTime: 20,
    cookTime: 45,
    totalTime: 65,
    difficulty: 'Medium',
    servings: 4,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Gluten-Free', 'High-Protein'],
    rating: 4.98,
    reviewCount: 560,
    isPopular: true,
    tags: ['Biryani', 'Mutton', 'Royal Feast', 'Special Occasion'],
    ingredients: [
      { id: 'mutton-bir-1', name: 'Mutton / Lamb', amount: 600, unit: 'g', isOptional: false },
      { id: 'rice-bir-1', name: 'White Rice', amount: 2, unit: 'cups', isOptional: false, notes: 'aged Basmati rice, soaked for 30 mins' },
      { id: 'onion-bir-1', name: 'Onion', amount: 2, unit: 'large', isOptional: false, notes: 'thinly sliced for crispy fried onions' },
      { id: 'yogurt-bir-1', name: 'Greek Yogurt', amount: 0.75, unit: 'cup', isOptional: false },
      { id: 'garlic-bir-1', name: 'Garlic', amount: 5, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'ginger-bir-1', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: false, notes: 'minced' },
      { id: 'oil-bir-1', name: 'Olive Oil', amount: 3, unit: 'tbsp', isOptional: false, notes: 'or ghee' },
      { id: 'garam-bir-1', name: 'Garam Masala', amount: 1.5, unit: 'tsp', isOptional: false },
      { id: 'salt-bir-1', name: 'Salt', amount: 1.5, unit: 'tsp', isOptional: false },
      { id: 'cilantro-bir-1', name: 'Cilantro', amount: 0.5, unit: 'cup', isOptional: true, notes: 'fresh mint & cilantro leaves' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Marinate Mutton',
        instruction: 'In a bowl, toss mutton with yogurt, minced garlic, ginger, garam masala, and 1 tsp salt. Let sit for 20 minutes.',
        durationMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Fry Onions to Golden Birista',
        instruction: 'Heat oil/ghee in a large heavy pot. Fry sliced onions until deeply golden and crisp. Remove half for garnishing.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Par-Boil Basmati Rice',
        instruction: 'Boil soaked Basmati rice in salted rolling water for 6 minutes until 70% cooked. Drain well.',
        durationMinutes: 6
      },
      {
        stepNumber: 4,
        title: 'Layer & Dum Steam',
        instruction: 'Sear marinated mutton in the pot with remaining onions for 10 minutes until tender. Layer par-cooked rice over the mutton. Top with fried onions, cilantro, and cover with a tight foil seal. Cook on lowest flame for 25 minutes.',
        durationMinutes: 28
      }
    ]
  },
  {
    id: 'moroccan-braised-lamb-tagine',
    title: 'Slow-Braised Moroccan Lamb Tagine',
    slug: 'slow-braised-moroccan-lamb-tagine',
    description: 'Tender spiced lamb chunks simmered with sweet onions, garlic, honey, cumin, and cinnamon in a rich golden sauce.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 40,
    totalTime: 50,
    difficulty: 'Easy',
    servings: 3,
    cuisine: 'Middle Eastern',
    mealType: 'Dinner',
    dietary: ['Gluten-Free', 'Dairy-Free', 'High-Protein'],
    rating: 4.91,
    reviewCount: 290,
    isPopular: false,
    tags: ['Lamb', 'Tagine', 'Slow Cooked', 'Comfort Food'],
    ingredients: [
      { id: 'mutton-tag-1', name: 'Mutton / Lamb', amount: 500, unit: 'g', isOptional: false, notes: 'cubed lamb or mutton' },
      { id: 'onion-tag-1', name: 'Onion', amount: 1.5, unit: 'medium', isOptional: false, notes: 'sliced' },
      { id: 'garlic-tag-1', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'oil-tag-1', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'cumin-tag-1', name: 'Ground Cumin', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'cinnamon-tag-1', name: 'Ground Cinnamon', amount: 0.5, unit: 'tsp', isOptional: false },
      { id: 'honey-tag-1', name: 'Honey', amount: 1.5, unit: 'tbsp', isOptional: false },
      { id: 'salt-tag-1', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sear Lamb in Spiced Oil',
        instruction: 'Heat olive oil in a tagine or Dutch oven over medium heat. Season lamb with cumin, cinnamon, and salt. Sear pieces for 6-8 minutes until golden.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Caramelize Onions & Garlic',
        instruction: 'Add sliced onions and garlic. Sauté for 5 minutes until soft and fragrant.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Simmer with Honey',
        instruction: 'Pour in 1 cup water and drizzle honey over top. Cover tightly, reduce heat to low, and braise for 35-40 minutes until meat is falling-apart tender.',
        durationMinutes: 38
      }
    ]
  },
  {
    id: 'restaurant-paneer-butter-masala',
    title: 'Restaurant-Style Paneer Butter Masala',
    slug: 'restaurant-style-paneer-butter-masala',
    description: 'Golden soft paneer cubes simmered in a rich, buttery, velvety tomato and cream gravy with aromatic ginger and garam masala.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 18,
    totalTime: 28,
    difficulty: 'Easy',
    servings: 3,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Vegetarian', 'Gluten-Free', 'High-Protein'],
    rating: 4.96,
    reviewCount: 620,
    isPopular: true,
    tags: ['Paneer', 'Curry', 'Vegetarian', 'Creamy'],
    ingredients: [
      { id: 'paneer-pbm-1', name: 'Paneer', amount: 350, unit: 'g', isOptional: false, notes: 'cubed' },
      { id: 'butter-pbm-1', name: 'Butter', amount: 2.5, unit: 'tbsp', isOptional: false },
      { id: 'tomato-pbm-1', name: 'Tomato', amount: 4, unit: 'medium', isOptional: false, notes: 'pureed or canned crushed' },
      { id: 'heavycream-pbm-1', name: 'Heavy Cream', amount: 0.5, unit: 'cup', isOptional: false },
      { id: 'garlic-pbm-1', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'ginger-pbm-1', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: false, notes: 'minced' },
      { id: 'garam-pbm-1', name: 'Garam Masala', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'paprika-pbm-1', name: 'Smoked Paprika', amount: 1, unit: 'tsp', isOptional: false, notes: 'or red chili powder' },
      { id: 'salt-pbm-1', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'sugar-pbm-1', name: 'Granulated Sugar', amount: 0.5, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Melt Butter & Sauté Aromatics',
        instruction: 'Melt 1.5 tbsp butter in a wide saucepan over medium heat. Sauté minced garlic and ginger for 1 minute until fragrant.',
        durationMinutes: 2
      },
      {
        stepNumber: 2,
        title: 'Simmer Silky Tomato Base',
        instruction: 'Pour in tomato puree, salt, paprika, and sugar. Simmer on medium-low for 10-12 minutes until sauce thickens and butter glistens at edges.',
        durationMinutes: 12
      },
      {
        stepNumber: 3,
        title: 'Enrich with Cream & Butter',
        instruction: 'Lower heat, stir in heavy cream, garam masala, and remaining 1 tbsp butter. Stir until a silky orange rose gravy forms.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Fold in Paneer',
        instruction: 'Add cubed paneer, gently folding into the hot gravy. Simmer for 3 minutes until paneer is soft and infused with flavor.',
        durationMinutes: 3
      }
    ]
  },
  {
    id: 'dhaba-palak-paneer',
    title: 'Dhaba-Style Silky Palak Paneer',
    slug: 'dhaba-style-silky-palak-paneer',
    description: 'Soft paneer cubes folded into a vibrant, nutrient-rich spiced spinach sauce tempered with garlic, onions, and cumin.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    prepTime: 12,
    cookTime: 15,
    totalTime: 27,
    difficulty: 'Easy',
    servings: 3,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Vegetarian', 'Gluten-Free', 'High-Protein'],
    rating: 4.92,
    reviewCount: 480,
    isPopular: true,
    tags: ['Paneer', 'Spinach', 'Healthy', 'Superfood'],
    ingredients: [
      { id: 'paneer-pp-1', name: 'Paneer', amount: 300, unit: 'g', isOptional: false, notes: 'cubed' },
      { id: 'spinach-pp-1', name: 'Spinach', amount: 300, unit: 'g', isOptional: false, notes: 'fresh spinach leaves' },
      { id: 'onion-pp-1', name: 'Onion', amount: 1, unit: 'medium', isOptional: false, notes: 'finely chopped' },
      { id: 'garlic-pp-1', name: 'Garlic', amount: 5, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'ginger-pp-1', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: false, notes: 'minced' },
      { id: 'oil-pp-1', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false, notes: 'or butter/ghee' },
      { id: 'cumin-pp-1', name: 'Ground Cumin', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'garam-pp-1', name: 'Garam Masala', amount: 0.5, unit: 'tsp', isOptional: false },
      { id: 'salt-pp-1', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Blanch & Puree Spinach',
        instruction: 'Blanch spinach in boiling water for 2 minutes, then transfer immediately to cold water. Blend into a smooth, vibrant green puree.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Temper Aromatics',
        instruction: 'Heat oil in a skillet over medium heat. Sauté cumin, chopped onion, garlic, and ginger for 5 minutes until golden.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Simmer with Spinach Puree',
        instruction: 'Pour in spinach puree, salt, and garam masala. Simmer on low for 4-5 minutes.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Add Paneer',
        instruction: 'Add paneer cubes to the hot spinach gravy and gently simmer for 2 minutes. Serve warm with roti, naan, or rice.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'kadai-paneer-capsicum',
    title: 'Kadai Paneer & Crispy Bell Peppers',
    slug: 'kadai-paneer-and-crispy-bell-peppers',
    description: 'Chunky paneer and crisp colorful bell peppers stir-cooked in a robust wok-style tomato, garlic, and cumin sauce.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    difficulty: 'Easy',
    servings: 3,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Vegetarian', 'Gluten-Free', 'High-Protein'],
    rating: 4.9,
    reviewCount: 340,
    isPopular: false,
    tags: ['Paneer', 'Wok Style', 'Quick', 'Spicy'],
    ingredients: [
      { id: 'paneer-kp-1', name: 'Paneer', amount: 300, unit: 'g', isOptional: false, notes: 'cubed' },
      { id: 'bellpepper-kp-1', name: 'Bell Pepper', amount: 1.5, unit: 'large', isOptional: false, notes: 'diced into cubes' },
      { id: 'onion-kp-1', name: 'Onion', amount: 1.5, unit: 'medium', isOptional: false, notes: 'diced into petals' },
      { id: 'tomato-kp-1', name: 'Tomato', amount: 3, unit: 'medium', isOptional: false, notes: 'chopped' },
      { id: 'garlic-kp-1', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'ginger-kp-1', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: false, notes: 'minced' },
      { id: 'oil-kp-1', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'cumin-kp-1', name: 'Ground Cumin', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'garam-kp-1', name: 'Garam Masala', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'salt-kp-1', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sauté Crunchy Peppers & Onions',
        instruction: 'Heat 1 tbsp oil in a wok. Toss cubed bell peppers and onion petals over high heat for 3 minutes until slightly blistered but crisp. Set aside.',
        durationMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Cook Tomato Masala Base',
        instruction: 'Add remaining oil, cumin, garlic, and ginger. Sauté for 1 minute, then add chopped tomatoes, salt, and garam masala. Cook for 6-8 minutes until tomatoes break down into a thick sauce.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Toss Everything Together',
        instruction: 'Add paneer cubes and sautéed bell peppers. Toss vigorously for 3 minutes until paneer is piping hot and coated in spiced masala.',
        durationMinutes: 3
      }
    ]
  },
  {
    id: 'classic-homestyle-dal-tadka',
    title: 'Classic Homestyle Dal Tadka',
    slug: 'classic-homestyle-dal-tadka',
    description: 'Golden yellow lentils simmered until creamy and finished with a sizzling tempered garnish of garlic, cumin, onions, and tomatoes.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Vegan', 'Vegetarian', 'Gluten-Free', 'High-Protein'],
    rating: 4.95,
    reviewCount: 520,
    isPopular: true,
    tags: ['Lentils', 'Dal', 'Comfort Food', 'High Protein'],
    ingredients: [
      { id: 'dal-dt-1', name: 'Lentils (Dal)', amount: 1.5, unit: 'cups', isOptional: false, notes: 'yellow toor dal or moong dal' },
      { id: 'tomato-dt-1', name: 'Tomato', amount: 2, unit: 'medium', isOptional: false, notes: 'chopped' },
      { id: 'onion-dt-1', name: 'Onion', amount: 1, unit: 'medium', isOptional: false, notes: 'finely chopped' },
      { id: 'garlic-dt-1', name: 'Garlic', amount: 5, unit: 'cloves', isOptional: false, notes: 'sliced' },
      { id: 'oil-dt-1', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false, notes: 'or ghee' },
      { id: 'cumin-dt-1', name: 'Ground Cumin', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'salt-dt-1', name: 'Salt', amount: 1.25, unit: 'tsp', isOptional: false },
      { id: 'cilantro-dt-1', name: 'Cilantro', amount: 2, unit: 'tbsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Boil the Lentils',
        instruction: 'Rinse lentils well. Add to a pot with 3.5 cups water and 1 tsp salt. Simmer on medium-low for 18-20 minutes (or pressure cook 8 mins) until lentils are completely tender.',
        durationMinutes: 18
      },
      {
        stepNumber: 2,
        title: 'Prepare the Sizzling Tadka',
        instruction: 'Heat oil or ghee in a small pan over medium heat. Sauté cumin and sliced garlic for 1 minute until garlic is light golden. Add chopped onion and sauté for 4 minutes until translucent.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Add Tomatoes to Tadka',
        instruction: 'Add chopped tomatoes to the pan and cook for 3 minutes until soft.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Pour Tadka over Dal & Garnish',
        instruction: 'Pour the sizzling aromatics directly into the cooked lentils. Stir well, garnish with fresh cilantro, and serve hot with rice.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'creamy-restaurant-dal-makhani',
    title: 'Velvety Restaurant Dal Makhani',
    slug: 'velvety-restaurant-dal-makhani',
    description: 'Black lentils slow-cooked overnight with rich butter, sweet tomato puree, garlic, ginger, and velvety cream.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 35,
    totalTime: 45,
    difficulty: 'Medium',
    servings: 4,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Vegetarian', 'Gluten-Free', 'High-Protein'],
    rating: 4.97,
    reviewCount: 490,
    isPopular: true,
    tags: ['Lentils', 'Dal', 'Rich & Creamy', 'North Indian'],
    ingredients: [
      { id: 'dal-dm-1', name: 'Lentils (Dal)', amount: 1.5, unit: 'cups', isOptional: false, notes: 'black urad dal' },
      { id: 'butter-dm-1', name: 'Butter', amount: 3, unit: 'tbsp', isOptional: false },
      { id: 'heavycream-dm-1', name: 'Heavy Cream', amount: 0.5, unit: 'cup', isOptional: false },
      { id: 'tomato-dm-1', name: 'Tomato', amount: 3, unit: 'medium', isOptional: false, notes: 'pureed' },
      { id: 'garlic-dm-1', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'ginger-dm-1', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: false, notes: 'minced' },
      { id: 'salt-dm-1', name: 'Salt', amount: 1.25, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Boil Lentils until Creamy',
        instruction: 'Boil black lentils in a pot with salt and water for 25-30 minutes until soft and mashable.',
        durationMinutes: 28
      },
      {
        stepNumber: 2,
        title: 'Sauté with Butter & Aromatics',
        instruction: 'Melt 2 tbsp butter in a saucepan. Sauté garlic and ginger for 1 minute, then add tomato puree and simmer for 6 minutes.',
        durationMinutes: 7
      },
      {
        stepNumber: 3,
        title: 'Simmer & Mash',
        instruction: 'Add boiled lentils with their cooking water into the tomato base. Lightly mash lentils against the sides of the pot with a wooden spoon for maximum creaminess.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Enrich with Cream & Butter',
        instruction: 'Stir in heavy cream and remaining 1 tbsp butter. Simmer gently for 5 minutes until rich and velvety.',
        durationMinutes: 5
      }
    ]
  },
  {
    id: 'authentic-butter-chicken-makhani',
    title: 'Authentic Butter Chicken (Murgh Makhani)',
    slug: 'authentic-butter-chicken-murgh-makhani',
    description: 'Tender tandoori-style seared chicken chunks simmered in a legendary buttery tomato, garlic, and cashew cream sauce.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Gluten-Free', 'High-Protein'],
    rating: 4.99,
    reviewCount: 780,
    isPopular: true,
    tags: ['Butter Chicken', 'Curry', 'World Famous', 'Creamy'],
    ingredients: [
      { id: 'chicken-bc-1', name: 'Chicken Breast', amount: 600, unit: 'g', isOptional: false, notes: 'cubed' },
      { id: 'butter-bc-1', name: 'Butter', amount: 3, unit: 'tbsp', isOptional: false },
      { id: 'tomato-bc-1', name: 'Tomato', amount: 4, unit: 'medium', isOptional: false, notes: 'pureed or canned crushed' },
      { id: 'heavycream-bc-1', name: 'Heavy Cream', amount: 0.5, unit: 'cup', isOptional: false },
      { id: 'garlic-bc-1', name: 'Garlic', amount: 5, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'ginger-bc-1', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: false, notes: 'minced' },
      { id: 'garam-bc-1', name: 'Garam Masala', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'paprika-bc-1', name: 'Smoked Paprika', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'salt-bc-1', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sear the Chicken Pieces',
        instruction: 'Season chicken cubes with salt and paprika. Heat 1 tbsp butter in a skillet over high heat and sear chicken for 5-6 minutes until golden brown on all sides. Remove to a plate.',
        durationMinutes: 6
      },
      {
        stepNumber: 2,
        title: 'Simmer the Tomato Makhani Sauce',
        instruction: 'Melt 1 tbsp butter in the same pan. Sauté garlic and ginger for 1 minute, then pour in tomato puree and salt. Simmer on medium for 8-10 minutes until sauce thickens.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Emulsify with Cream & Butter',
        instruction: 'Lower heat, pour in heavy cream, garam masala, and remaining 1 tbsp butter. Stir until velvety and smooth.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Simmer Chicken in Sauce',
        instruction: 'Return seared chicken to the simmering makhani sauce. Cook on low for 5 minutes until chicken is tender and coated.',
        durationMinutes: 5
      }
    ]
  },
  {
    id: 'north-indian-aloo-gobi',
    title: 'North Indian Spiced Aloo Gobi',
    slug: 'north-indian-spiced-aloo-gobi',
    description: 'Tender potatoes and broccoli or cauliflower florets sautéed with caramelized onions, tomatoes, ginger, garlic, and ground cumin.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    prepTime: 10,
    cookTime: 18,
    totalTime: 28,
    difficulty: 'Easy',
    servings: 3,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'],
    rating: 4.88,
    reviewCount: 310,
    isPopular: false,
    tags: ['Aloo', 'Potato', 'Vegetarian', 'Quick Dinner'],
    ingredients: [
      { id: 'potato-ag-1', name: 'Potato', amount: 400, unit: 'g', isOptional: false, notes: 'cubed small' },
      { id: 'broccoli-ag-1', name: 'Broccoli', amount: 300, unit: 'g', isOptional: false, notes: 'or cauliflower florets' },
      { id: 'onion-ag-1', name: 'Onion', amount: 1, unit: 'medium', isOptional: false, notes: 'chopped' },
      { id: 'tomato-ag-1', name: 'Tomato', amount: 2, unit: 'medium', isOptional: false, notes: 'chopped' },
      { id: 'garlic-ag-1', name: 'Garlic', amount: 3, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'ginger-ag-1', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: false, notes: 'minced' },
      { id: 'oil-ag-1', name: 'Olive Oil', amount: 2.5, unit: 'tbsp', isOptional: false },
      { id: 'cumin-ag-1', name: 'Ground Cumin', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'garam-ag-1', name: 'Garam Masala', amount: 0.5, unit: 'tsp', isOptional: false },
      { id: 'salt-ag-1', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sauté Cumin & Aromatics',
        instruction: 'Heat olive oil in a skillet over medium heat. Sauté cumin, chopped onions, garlic, and ginger for 4 minutes until golden.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Add Potatoes & Spices',
        instruction: 'Add cubed potatoes, chopped tomatoes, and salt. Cover and cook on medium-low for 10 minutes until potatoes begin to soften.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Add Florets & Finish',
        instruction: 'Add broccoli or cauliflower florets and garam masala. Toss well, cover with lid, and cook for 6-8 minutes until all vegetables are tender-crisp.',
        durationMinutes: 8
      }
    ]
  },
  {
    id: 'chana-masala-chickpea-curry',
    title: 'Spiced Homestyle Chana Masala',
    slug: 'spiced-homestyle-chana-masala',
    description: 'Plump chickpeas simmered in a zesty, robust gravy of onions, tomatoes, garlic, ginger, and ground spices.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    prepTime: 8,
    cookTime: 15,
    totalTime: 23,
    difficulty: 'Easy',
    servings: 3,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free', 'High-Protein'],
    rating: 4.93,
    reviewCount: 440,
    isPopular: true,
    tags: ['Chickpeas', 'Chana Masala', 'High Fiber', 'Vegan'],
    ingredients: [
      { id: 'chickpea-cm-1', name: 'Canned Chickpeas', amount: 1, unit: 'can (400g)', isOptional: false, notes: 'drained and rinsed' },
      { id: 'onion-cm-1', name: 'Onion', amount: 1, unit: 'medium', isOptional: false, notes: 'chopped' },
      { id: 'tomato-cm-1', name: 'Tomato', amount: 2, unit: 'medium', isOptional: false, notes: 'chopped' },
      { id: 'garlic-cm-1', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: false, notes: 'minced' },
      { id: 'ginger-cm-1', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: false, notes: 'minced' },
      { id: 'oil-cm-1', name: 'Olive Oil', amount: 2, unit: 'tbsp', isOptional: false },
      { id: 'cumin-cm-1', name: 'Ground Cumin', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'garam-cm-1', name: 'Garam Masala', amount: 1, unit: 'tsp', isOptional: false },
      { id: 'salt-cm-1', name: 'Salt', amount: 1, unit: 'tsp', isOptional: false }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sauté Aromatics',
        instruction: 'Heat oil in a pan over medium heat. Sauté cumin, onions, garlic, and ginger for 4 minutes until translucent.',
        durationMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Simmer the Tomato Gravy',
        instruction: 'Add chopped tomatoes, garam masala, and salt. Simmer for 6 minutes until tomatoes soften into a fragrant masala.',
        durationMinutes: 6
      },
      {
        stepNumber: 3,
        title: 'Simmer Chickpeas',
        instruction: 'Add drained chickpeas and 1/2 cup water. Lightly crush a few chickpeas with the back of a spoon to thicken the gravy. Simmer on low for 8 minutes and serve.',
        durationMinutes: 8
      }
    ]
  },
  {
    id: 'aloo-gosht-mutton-potato-curry',
    title: 'Aloo Gosht (Mutton & Potato Curry)',
    slug: 'aloo-gosht-mutton-and-potato-curry',
    description: 'A comforting homestyle curry with tender spiced mutton pieces and soft golden potatoes simmered in a savory onion-gravy.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=1200&q=80',
    prepTime: 12,
    cookTime: 38,
    totalTime: 50,
    difficulty: 'Easy',
    servings: 4,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Gluten-Free', 'High-Protein', 'Dairy-Free'],
    rating: 4.96,
    reviewCount: 380,
    isPopular: true,
    tags: ['Mutton', 'Potato', 'Aloo Gosht', 'Comfort Curry'],
    ingredients: [
      { id: 'mutton-ag-1', name: 'Mutton / Lamb', amount: 500, unit: 'g', isOptional: false },
      { id: 'potato-ag-2', name: 'Potato', amount: 350, unit: 'g', isOptional: false, notes: 'peeled and halved' },
      { id: 'onion-ag-2', name: 'Onion', amount: 2, unit: 'medium', isOptional: false, notes: 'sliced' },
      { id: 'oil-ag-2', name: 'Olive Oil', amount: 2.5, unit: 'tbsp', isOptional: false, notes: 'or cooking oil' },
      { id: 'salt-ag-2', name: 'Salt', amount: 1.25, unit: 'tsp', isOptional: false },
      { id: 'garlic-ag-2', name: 'Garlic', amount: 4, unit: 'cloves', isOptional: true, notes: 'minced' },
      { id: 'ginger-ag-2', name: 'Ginger', amount: 1, unit: 'tbsp', isOptional: true, notes: 'minced' },
      { id: 'garam-ag-2', name: 'Garam Masala', amount: 1, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sauté Onions & Aromatics',
        instruction: 'Heat oil in a heavy pot or cooker. Sauté sliced onions for 6-8 minutes until golden brown.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Brown the Mutton',
        instruction: 'Add mutton pieces and salt. Sear on high heat for 6 minutes until browned.',
        durationMinutes: 6
      },
      {
        stepNumber: 3,
        title: 'Simmer with Potatoes',
        instruction: 'Add halved potatoes and 2 cups water. Cover tightly and simmer on low for 30-35 minutes until mutton is tender and potatoes are fork-soft.',
        durationMinutes: 34
      },
      {
        stepNumber: 4,
        title: 'Garnish & Serve',
        instruction: 'Sprinkle with optional garam masala and serve hot with steamed rice or flatbread.',
        durationMinutes: 2
      }
    ]
  },
  {
    id: 'homestyle-paneer-tomato-bhurji',
    title: 'Homestyle Spiced Paneer Bhurji',
    slug: 'homestyle-spiced-paneer-bhurji',
    description: 'Scrambled soft fresh paneer cooked with caramelized sweet onions, juicy ripe tomatoes, and gentle spices in under 15 minutes.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80',
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    difficulty: 'Easy',
    servings: 2,
    cuisine: 'Indian',
    mealType: 'Dinner',
    dietary: ['Vegetarian', 'Gluten-Free', 'High-Protein'],
    rating: 4.93,
    reviewCount: 360,
    isPopular: true,
    tags: ['Paneer', 'Quick Dinner', 'Under 15 min', 'High Protein'],
    ingredients: [
      { id: 'paneer-pb-1', name: 'Paneer', amount: 250, unit: 'g', isOptional: false, notes: 'crumbled or grated' },
      { id: 'onion-pb-1', name: 'Onion', amount: 1, unit: 'medium', isOptional: false, notes: 'finely chopped' },
      { id: 'tomato-pb-1', name: 'Tomato', amount: 2, unit: 'medium', isOptional: false, notes: 'chopped' },
      { id: 'oil-pb-1', name: 'Olive Oil', amount: 1.5, unit: 'tbsp', isOptional: false, notes: 'or butter' },
      { id: 'salt-pb-1', name: 'Salt', amount: 0.75, unit: 'tsp', isOptional: false },
      { id: 'garlic-pb-1', name: 'Garlic', amount: 2, unit: 'cloves', isOptional: true, notes: 'minced' },
      { id: 'cumin-pb-1', name: 'Ground Cumin', amount: 0.5, unit: 'tsp', isOptional: true }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sauté Onions',
        instruction: 'Heat oil or butter in a skillet over medium heat. Sauté chopped onions for 3-4 minutes until translucent.',
        durationMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Simmer Tomatoes',
        instruction: 'Add chopped tomatoes and salt. Cook for 4-5 minutes until tomatoes soften into a juicy masala.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Fold in Crumbled Paneer',
        instruction: 'Add crumbled paneer. Stir-cook gently for 2-3 minutes until heated through and coated in tomato gravy.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Serve Warm',
        instruction: 'Serve hot immediately with toast, roti, or paratha.',
        durationMinutes: 1
      }
    ]
  }
];

