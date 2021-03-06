/* For the purpose of this prototype, this Service returns data directly to the Controller.
 Normally this would not happen - it would return a promise to the Controller, and make a request to a Proxy to call the REST service.
  */

(function() {
    'use strict';

    angular
        .module('recipeApp.main')
        .factory('RecipeInfoService', RecipeInfoService);

    function RecipeInfoService() {
        var recipes = [  {
            "id": "1",
            "cookingTime": "30",
            "ingredients": [
                "2 tbsp sunflower oil",
                "4 spring onions, cut into 4cm/1½in lengths",
                "1 garlic clove, crushed",
                "piece fresh root ginger, about 1cm/½in, peeled and grated",
                "1 carrot, cut into matchsticks",
                "1 red pepper, cut into thick matchsticks",
                "100g/3½oz baby sweetcorn, halved",
                "1 courgette, cut into thick matchsticks",
                "150g/5½oz sugar-snap peas or mangetout, trimmed",
                "2 tbsp hoisin sauce",
                "2 tbsp low-salt soy sauce"
            ],
            "name": "Sapphire's stir-fry",
            "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/sachas_stir-fry_17077_16x9.jpg",
            "method": [
                "Heat a wok on a high heat and add the sunflower oil. Add the spring onions, garlic, ginger and stir-fry for 1 minute, then reduce the heat. Take care to not brown the vegetables.",
                "Add the carrot, red pepper and baby sweetcorn and stir-fry for 2 minutes. Add the courgette and sugar snap peas and stir-fry for a further 3 minutes. Toss the ingredients from the centre to the side of the wok using a wooden spatula. Do not overcrowd the wok and keep the ingredients moving.",
                "Add 1 tablespoon water, hoisin and soy sauce and cook over a high heat for a further 2 minutes or until all the vegetables are cooked but not too soft. Serve with noodles or rice."
            ],
            "summary": "New to cooking? This speedy stir-fry from CBBC is super easy to make, packed with vegetables and full of flavour."
        }, {
            "id": "2",
            "cookingTime": "60",
            "ingredients": [
                {
                    "group": "For the cake",
                    "ingredients": [
                        "225g/8oz plain flour",
                        "350g/12½oz caster sugar",
                        "85g/3oz cocoa powder",
                        "1½ tsp baking powder",
                        "1½ tsp bicarbonate of soda",
                        "2 free-range eggs",
                        "250ml/9fl oz milk",
                        "125ml/4½fl oz vegetable oil",
                        "2 tsp vanilla extract",
                        "250ml/9fl oz boiling water"
                    ]
                },
                {
                    "group": "For the chocolate icing",
                    "ingredients": [
                        "200g/7oz plain chocolate",
                        "200ml/7fl oz double cream"
                    ]
                }
            ],
            "name": "Easy chocolate cake",
            "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/easy_chocolate_cake_31070_16x9.jpg",
            "method": [
                "Preheat the oven to 180C/350F/Gas 4. Grease and line two 20cm/8in sandwich tins.",
                "For the cake, place all of the cake ingredients, except the boiling water, into a large mixing bowl. Using a wooden spoon, or electric whisk, beat the mixture until smooth and well combined.",
                "Add the boiling water to the mixture, a little at a time, until smooth. (The cake mixture will now be very liquid.)",
                "Divide the cake batter between the sandwich tins and bake in the oven for 25-35 minutes, or until the top is firm to the touch and a skewer inserted into the centre of the cake comes out clean.",
                "Remove the cakes from the oven and allow to cool completely, still in their tins, before icing.",
                "For the chocolate icing, heat the chocolate and cream in a saucepan over a low heat until the chocolate melts. Remove the pan from the heat and whisk the mixture until smooth, glossy and thickened. Set aside to cool for 1-2 hours, or until thick enough to spread over the cake.",
                "To assemble the cake, run a round-bladed knife around the inside of the cake tins to loosen the cakes. Carefully remove the cakes from the tins.",
                "Spread a little chocolate icing over the top of one of the chocolate cakes, then carefully top with the other cake.",
                "Transfer the cake to a serving plate and ice the cake all over with the chocolate icing, using a palette knife."
            ],
            "summary": "Perfect for birthdays, this is a great recipe for an easy, foolproof chocolate cake. It’s moist and fudgy and will keep well for 4-5 days."
        },
            {
                "id": "3",
                "cookingTime": "40",
                "ingredients": [
                    "4 x 225g/8oz chicken breasts, wing bone left in but skin removed",
                    {
                        "group": "For the garlic herb butter",
                        "ingredients": [
                            "handful fresh parsley, chopped",
                            "120g/4oz butter, at room temperature",
                            "2 garlic cloves, peeled and crushed",
                            "salt and freshly ground black pepper",
                            "1 tsp Dijon mustard"
                        ]
                    },
                    {
                        "group": "For the crumb coating",
                        "ingredients": [
                            "60g/2½oz plain flour",
                            "1 egg, lightly beaten",
                            "1 tbsp milk",
                            "100g/3½oz white bread, crusts removed, dried and processed into breadcrumbs",
                            "120ml/4fl oz olive oil"
                        ]
                    }
                ],
                "name": "Chicken Kiev",
                "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/chickenkievwithmashe_83483_16x9.jpg",
                "method": [
                    "Preheat the oven to 190C/370F/Gas 5.",
                    "For the chicken, remove the mini-fillet at the back of the chicken breasts and set aside. Using a sharp knife, slice open the breasts so that they can be opened up like a book from the top to the bottom. Gently bash the breasts out with a meat mallet or rolling pin so they are flat.",
                    "Repeat the flattening process with the mini-fillets. These little fillets will be used as sticking plasters to stop the butter from oozing during cooking.",
                    "For the herb butter, place the parsley, butter, garlic, Dijon mustard and the salt and pepper into a bowl and mix together well. Divide the butter mixture into four thumb-sized pieces and place into the fridge to chill and set.",
                    "Turn each flattened chicken breast over and put a roll of herb butter in the centre of each and then roll up like a cigar. Cover any holes with the flattened fillet pieces.",
                    "Dredge the breasts in flour and place into the freezer for 2-3 minutes to cool.",
                    "Meanwhile beat the egg and milk together in a bowl.",
                    "Remove the floured chicken from the freezer and dip in the egg mixture to coat thoroughly.",
                    "Roll the breasts in the breadcrumbs, making sure that they are well coated, then place in the fridge for 30 minutes.",
                    "Heat 120ml oil in a pan over a medium heat. Add the chicken breasts and fry for two minutes, until golden brown. Turn the breasts and transfer to the oven to cook for 12-14 minutes, until golden and completely cooked through.",
                    "Remove from the oven and drain onto kitchen towels.",
                    "Serve with mashed potato and green beans, with lemon wedges to garnish."
                ],
                "summary": "That 1970s classic, the chicken kiev, has retained its popularity since its introduction to Britain in the chiller aisles of Marks and Spencer. Get nostalgic, and whip one up at home with our easy chicken kiev main."
            }
        ];
        return {
            getRecipe: function (id) {
                    for (var i=0; i<recipes.length; i++) {
                        if (+recipes[i].id == +id) {
                            return recipes[i];
                        }
                    }
                    throw Error('Sorry, this recipe doesn\'t exist or may have been removed.');
            }
        };
        
    }
})();