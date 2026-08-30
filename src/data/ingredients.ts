import { IngredientDef } from '../types';

export const MASTER_INGREDIENTS: IngredientDef[] = [
  // Meats & Seafood
  { id: 'chicken_breast', name: 'Chicken Breast', category: 'Meat & Seafood', aliases: ['chicken', 'boneless chicken', 'chicken breasts', 'chicken fillets', 'chicken thighs'], isPopular: true },
  { id: 'mutton', name: 'Mutton / Lamb', category: 'Meat & Seafood', aliases: ['mutton', 'lamb', 'goat meat', 'minced mutton', 'lamb chops', 'mutton pieces', 'boneless lamb'], isPopular: true },
  { id: 'ground_beef', name: 'Ground Beef', category: 'Meat & Seafood', aliases: ['minced beef', 'beef mince', 'ground meat', 'beef'], isPopular: true },
  { id: 'bacon', name: 'Bacon', category: 'Meat & Seafood', aliases: ['streaky bacon', 'bacon strips', 'smoked bacon'] },
  { id: 'salmon', name: 'Salmon Fillets', category: 'Meat & Seafood', aliases: ['salmon', 'fresh salmon', 'salmon steak', 'fish', 'fish fillets'], isPopular: true },
  { id: 'shrimp', name: 'Shrimp', category: 'Meat & Seafood', aliases: ['prawns', 'raw shrimp', 'jumbo shrimp', 'prawn'], isPopular: true },
  { id: 'tofu', name: 'Firm Tofu', category: 'Meat & Seafood', aliases: ['tofu', 'extra firm tofu', 'bean curd'] },

  // Dairy & Paneer
  { id: 'paneer', name: 'Paneer', category: 'Dairy & Eggs', aliases: ['paneer cubes', 'indian cottage cheese', 'cottage cheese'], isPopular: true },
  { id: 'eggs', name: 'Eggs', category: 'Dairy & Eggs', aliases: ['egg', 'large eggs', 'fresh eggs', 'farm eggs'], isPopular: true },
  { id: 'milk', name: 'Milk', category: 'Dairy & Eggs', aliases: ['whole milk', 'cow milk', '2% milk', 'dairy milk'], isPopular: true },
  { id: 'butter', name: 'Butter', category: 'Dairy & Eggs', aliases: ['unsalted butter', 'salted butter', 'ghee', 'clarified butter'], isPopular: true },
  { id: 'cheese', name: 'Cheddar Cheese', category: 'Dairy & Eggs', aliases: ['cheese', 'shredded cheddar', 'cheddar'], isPopular: true },
  { id: 'parmesan', name: 'Parmesan Cheese', category: 'Dairy & Eggs', aliases: ['parmigiano reggiano', 'grated parmesan', 'parmesan'], isPopular: true },
  { id: 'mozzarella', name: 'Mozzarella', category: 'Dairy & Eggs', aliases: ['fresh mozzarella', 'shredded mozzarella', 'pizza cheese'] },
  { id: 'heavy_cream', name: 'Heavy Cream', category: 'Dairy & Eggs', aliases: ['whipping cream', 'double cream', 'cream', 'fresh cream'] },
  { id: 'yogurt', name: 'Greek Yogurt', category: 'Dairy & Eggs', aliases: ['plain yogurt', 'greek yoghurt', 'yogurt', 'curd', 'dahi'], isPopular: true },
  { id: 'feta', name: 'Feta Cheese', category: 'Dairy & Eggs', aliases: ['crumbled feta', 'greek feta'] },

  // Produce
  { id: 'tomato', name: 'Tomato', category: 'Produce', aliases: ['tomatoes', 'fresh tomato', 'ripe tomatoes', 'diced tomatoes'], isPopular: true },
  { id: 'cherry_tomato', name: 'Cherry Tomatoes', category: 'Produce', aliases: ['cherry tomato', 'baby tomatoes'] },
  { id: 'onion', name: 'Onion', category: 'Produce', aliases: ['onions', 'yellow onion', 'white onion', 'sweet onion'], isPopular: true },
  { id: 'red_onion', name: 'Red Onion', category: 'Produce', aliases: ['red onions', 'purple onion'] },
  { id: 'garlic', name: 'Garlic', category: 'Produce', aliases: ['garlic cloves', 'fresh garlic', 'minced garlic', 'garlic paste'], isPopular: true },
  { id: 'ginger', name: 'Ginger', category: 'Produce', aliases: ['fresh ginger', 'ginger root', 'minced ginger', 'ginger paste'], isPopular: true },
  { id: 'potato', name: 'Potato', category: 'Produce', aliases: ['potatoes', 'russet potato', 'baking potato', 'aloo'], isPopular: true },
  { id: 'spinach', name: 'Spinach', category: 'Produce', aliases: ['baby spinach', 'fresh spinach', 'palak'], isPopular: true },
  { id: 'bell_pepper', name: 'Bell Pepper', category: 'Produce', aliases: ['bell peppers', 'red bell pepper', 'green bell pepper', 'capsicum', 'shimla mirch'], isPopular: true },
  { id: 'mushrooms', name: 'Mushrooms', category: 'Produce', aliases: ['mushroom', 'cremini mushrooms', 'button mushrooms'], isPopular: true },
  { id: 'avocado', name: 'Avocado', category: 'Produce', aliases: ['avocados', 'ripe avocado', 'hass avocado'], isPopular: true },
  { id: 'lemon', name: 'Lemon', category: 'Produce', aliases: ['lemons', 'fresh lemon', 'lemon juice'], isPopular: true },
  { id: 'lime', name: 'Lime', category: 'Produce', aliases: ['limes', 'fresh lime', 'lime juice'] },
  { id: 'carrots', name: 'Carrots', category: 'Produce', aliases: ['carrot', 'fresh carrots'] },
  { id: 'broccoli', name: 'Broccoli', category: 'Produce', aliases: ['broccoli florets', 'fresh broccoli'] },
  { id: 'cilantro', name: 'Cilantro', category: 'Produce', aliases: ['fresh cilantro', 'coriander leaves', 'fresh coriander', 'dhania'], isPopular: true },
  { id: 'basil', name: 'Fresh Basil', category: 'Produce', aliases: ['basil leaves', 'sweet basil', 'basil'] },
  { id: 'scallions', name: 'Green Onions', category: 'Produce', aliases: ['scallions', 'spring onions', 'green onion'] },
  { id: 'cucumber', name: 'Cucumber', category: 'Produce', aliases: ['cucumbers', 'english cucumber'] },
  { id: 'green_peas', name: 'Green Peas', category: 'Produce', aliases: ['peas', 'frozen peas', 'matar'] },

  // Grains, Pulses & Pantry
  { id: 'rice', name: 'White Rice', category: 'Pantry & Grains', aliases: ['rice', 'jasmine rice', 'basmati rice', 'cooked rice', 'biryani rice'], isPopular: true },
  { id: 'lentils', name: 'Lentils (Dal)', category: 'Pantry & Grains', aliases: ['lentils', 'yellow lentils', 'red lentils', 'toor dal', 'moong dal', 'masoor dal', 'dal', 'chana dal', 'urad dal'], isPopular: true },
  { id: 'pasta', name: 'Pasta', category: 'Pantry & Grains', aliases: ['spaghetti', 'penne', 'fettuccine', 'rigatoni', 'noodles'], isPopular: true },
  { id: 'bread', name: 'Bread', category: 'Pantry & Grains', aliases: ['sandwich bread', 'sourdough bread', 'toast slices', 'naan', 'roti', 'pita bread'], isPopular: true },
  { id: 'tortillas', name: 'Flour Tortillas', category: 'Pantry & Grains', aliases: ['tortilla', 'corn tortillas', 'taco shells'] },
  { id: 'flour', name: 'All-Purpose Flour', category: 'Pantry & Grains', aliases: ['flour', 'plain flour', 'wheat flour', 'maida', 'atta'], isPopular: true },
  { id: 'canned_tomatoes', name: 'Canned Tomatoes', category: 'Pantry & Grains', aliases: ['diced tomatoes', 'crushed tomatoes', 'tomato puree'] },
  { id: 'canned_chickpeas', name: 'Canned Chickpeas', category: 'Pantry & Grains', aliases: ['chickpeas', 'garbanzo beans', 'chole', 'chana'] },
  { id: 'canned_black_beans', name: 'Black Beans', category: 'Pantry & Grains', aliases: ['canned black beans', 'black beans', 'rajma'] },
  { id: 'oats', name: 'Rolled Oats', category: 'Pantry & Grains', aliases: ['oatmeal', 'quick oats', 'oats'] },

  // Oils & Condiments
  { id: 'olive_oil', name: 'Olive Oil', category: 'Oils & Condiments', aliases: ['extra virgin olive oil', 'cooking oil'], isPopular: true },
  { id: 'vegetable_oil', name: 'Vegetable Oil', category: 'Oils & Condiments', aliases: ['canola oil', 'neutral oil', 'sunflower oil', 'mustard oil', 'oil'] },
  { id: 'soy_sauce', name: 'Soy Sauce', category: 'Oils & Condiments', aliases: ['light soy sauce', 'tamari', 'dark soy sauce'], isPopular: true },
  { id: 'sesame_oil', name: 'Toasted Sesame Oil', category: 'Oils & Condiments', aliases: ['sesame oil'] },
  { id: 'honey', name: 'Honey', category: 'Oils & Condiments', aliases: ['pure honey', 'raw honey'], isPopular: true },

  // Baking & Spices
  { id: 'salt', name: 'Salt', category: 'Baking & Spices', aliases: ['kosher salt', 'sea salt', 'table salt'], isPopular: true },
  { id: 'black_pepper', name: 'Black Pepper', category: 'Baking & Spices', aliases: ['ground black pepper', 'fresh cracked pepper', 'pepper'], isPopular: true },
  { id: 'cumin', name: 'Ground Cumin', category: 'Baking & Spices', aliases: ['cumin powder', 'cumin seeds', 'jeera'], isPopular: true },
  { id: 'garam_masala', name: 'Garam Masala', category: 'Baking & Spices', aliases: ['garam masala powder', 'all spice'], isPopular: true },
  { id: 'paprika', name: 'Smoked Paprika', category: 'Baking & Spices', aliases: ['paprika', 'sweet paprika', 'red chili powder', 'chili powder'], isPopular: true },
  { id: 'chili_flakes', name: 'Red Pepper Flakes', category: 'Baking & Spices', aliases: ['chili flakes', 'crushed red pepper'] },
  { id: 'oregano', name: 'Dried Oregano', category: 'Baking & Spices', aliases: ['oregano'] },
  { id: 'cinnamon', name: 'Ground Cinnamon', category: 'Baking & Spices', aliases: ['cinnamon powder', 'cinnamon stick'] },
  { id: 'sugar', name: 'Granulated Sugar', category: 'Baking & Spices', aliases: ['sugar', 'white sugar', 'brown sugar'] },
];

export const POPULAR_HERO_INGREDIENTS = [
  'Chicken',
  'Mutton',
  'Paneer',
  'Eggs',
  'Rice',
  'Tomato',
  'Potato',
  'Onion',
  'Pasta',
  'Lentils',
  'Garlic',
  'Spinach',
  'Olive Oil',
];
