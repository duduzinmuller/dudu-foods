const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const createBurguers = async (
  desertsCategoryId: string,
  juicesCategoryId: string,
) => {
  const burguersCategory = await prismaClient.category.create({
    data: {
      name: "Hambúrgueres",
      imageUrl:
        "https://utfs.io/f/92918634-fc03-4425-bc1f-d1fbc8933586-vzk6us.png",
    },
  });

  const burguerRestaurants = [
    {
      name: "The Burguer King",
      imageUrl:
        "https://utfs.io/f/020e448e-a7d8-433f-9622-cb3b68f34d48-p3apya.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      name: "Omni Burguer",
      imageUrl:
        "https://utfs.io/f/d0c54665-78d0-41af-98a4-8d1f459c622c-p3apy9.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      name: "The Burguer Queen",
      imageUrl:
        "https://utfs.io/f/d9834f2e-bc37-4c64-981b-cabf03018322-p3apy8.png",
      deliveryFee: 0,
      deliveryTimeMinutes: 45,
      categories: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      name: "Burguer House",
      imageUrl:
        "https://utfs.io/f/9c193fc1-9dcb-4394-8be4-d783266134dc-p3apy7.png",
      deliveryFee: 10,
      deliveryTimeMinutes: 20,
      categories: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
  ];

  for (const item of burguerRestaurants) {
    const restaurant = await prismaClient.restaurant.create({
      data: item,
    });

    await createDeserts(restaurant.id, desertsCategoryId);
    await createJuices(restaurant.id, juicesCategoryId);

    console.log(`Created ${restaurant.name}`);

    const burguerProducts = [
      {
        name: "Cheese Burguer",
        price: 30,
        description:
          "Nosso Cheese Burguer é preparado com um hambúrguer suculento de carne bovina 100% selecionada, coberto com uma generosa fatia de queijo cheddar derretido, alface crocante, tomate fresco e molho especial da casa, tudo isso servido em um pão artesanal levemente tostado. Uma explosão de sabor clássico que agrada todos os paladares.",
        discountPercentage: 10,
        imageUrl:
          "https://utfs.io/f/ae177fa1-129c-4f43-9928-aa8ac1080a18-yqapzx.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        name: "Double Cheese Burguer",
        price: 40,
        description:
          "Para quem busca intensidade, o Double Cheese Burguer traz dois hambúrgueres altos e suculentos, queijo cheddar duplo, cebola caramelizada, picles, alface e tomate, tudo envolto em um pão macio com gergelim. Uma experiência robusta e irresistível para os amantes de hambúrguer.",
        discountPercentage: 7,
        imageUrl:
          "https://utfs.io/f/dca007fe-0025-422e-9328-16d40f0a1792-yqapzy.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        name: "Bacon Burguer",
        price: 35,
        description:
          "O Bacon Burguer é feito com hambúrguer de carne bovina grelhada, coberto com fatias generosas de bacon crocante, queijo prato, alface, tomate e um toque de maionese defumada. O equilíbrio perfeito entre o sabor defumado do bacon e a suculência da carne.",
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/4cb1ca21-0748-4296-a23d-88e52687506a-yqapzz.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        name: "Double Bacon Burguer",
        price: 45,
        description:
          "O Double Bacon Burguer é a escolha dos apaixonados por bacon: dois hambúrgueres altos, queijo prato derretido, bacon em dobro, cebola roxa, tomate, alface americana e molho barbecue artesanal. Uma combinação intensa e marcante para quem não abre mão de sabor.",
        discountPercentage: 10,
        imageUrl:
          "https://utfs.io/f/ed9fde1e-0675-4829-8001-a775e2825dc6-yqaq00.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        name: "Chicken Burguer",
        price: 30,
        description:
          "Nosso Chicken Burguer traz um hambúrguer de frango empanado crocante, alface americana, tomate, queijo mussarela e maionese temperada, tudo servido em pão de batata fofinho. Uma opção leve, saborosa e cheia de textura.",
        discountPercentage: 7,
        imageUrl:
          "https://utfs.io/f/0aff860a-3e05-42fd-9b2a-53d03c744949-yqaq01.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        name: "Double Chicken Burguer",
        price: 40,
        description:
          "O Double Chicken Burguer é feito com dois hambúrgueres de frango empanados, queijo duplo, alface, tomate, molho especial e pão de batata. Uma explosão de crocância e sabor para quem quer mais proteína e suculência.",
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/d2157790-fcb7-4d09-b074-80af4bfb9892-yqaq02.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
    ];

    for (const product of burguerProducts) {
      await prismaClient.product.create({
        data: product,
      });

      console.log(`Created ${product.name}`);
    }
  }
};

const createPizzas = async (
  desertsCategoryId: string,
  juicesCategoryId: string,
) => {
  const pizzasCategory = await prismaClient.category.create({
    data: {
      name: "Pizzas",
      imageUrl:
        "https://utfs.io/f/d9ca0163-6bc8-42dc-bbb3-377636849cd8-mtj7yz.png",
    },
  });

  const pizzaRestaurants = [
    {
      name: "Pizza Hut",
      imageUrl:
        "https://utfs.io/f/f50301c9-7968-4d76-b4a3-b8ed24e2089c-5p2j0.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      name: "Omni Pizza",
      imageUrl:
        "https://utfs.io/f/8a9eb9dc-6434-4246-91c9-1c0a60a6e5f0-5p2j1.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      name: "The Pizza Queen",
      imageUrl:
        "https://utfs.io/f/e83dc871-19e3-4d39-8163-fb2f1e24b6b1-5p2j2.png",
      deliveryFee: 0,
      deliveryTimeMinutes: 45,
      categories: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      name: "Pizza House",
      imageUrl:
        "https://utfs.io/f/a73ec63a-7fc8-4a23-8d03-62debee79e6a-5p2j3.png",
      deliveryFee: 10,
      deliveryTimeMinutes: 20,
      categories: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
  ];

  for (const item of pizzaRestaurants) {
    const restaurant = await prismaClient.restaurant.create({
      data: item,
    });

    await createDeserts(restaurant.id, desertsCategoryId);
    await createJuices(restaurant.id, juicesCategoryId);

    console.log(`Created ${restaurant.name}`);

    const pizzaProducts = [
      {
        name: "Pepperoni Pizza",
        price: 45,
        description:
          "Nossa Pepperoni Pizza é feita com massa fina e crocante, molho de tomate artesanal, queijo muçarela de alta qualidade e generosas fatias de pepperoni levemente picante. Assada no forno à lenha, oferece aroma irresistível e sabor marcante a cada fatia.",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/645ba997-00b1-44ed-9928-b9eb41e93896-berpub.jpg",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
      {
        name: "Margarita Pizza",
        price: 40,
        description:
          "A Margarita Pizza traz a simplicidade e o frescor da culinária italiana: massa artesanal, molho de tomate fresco, queijo muçarela, rodelas de tomate e folhas de manjericão colhidas na hora. Uma pizza leve, aromática e cheia de sabor.",
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/4ee1f69b-e0a3-4166-bae5-b666996bcd3b-berpua.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
      {
        name: "Hawaiian Pizza",
        price: 45,
        description:
          "A Hawaiian Pizza é uma combinação tropical de queijo muçarela, presunto defumado e abacaxi fresco, tudo sobre uma massa fina e crocante. O contraste entre o doce do abacaxi e o salgado do presunto cria uma experiência única e refrescante.",
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/0bb7a869-f369-4506-94ea-6cc23c8dd92f-berpu9.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
      {
        name: "Vegetarian Pizza",
        price: 35,
        description:
          "A Vegetarian Pizza é feita com uma seleção de legumes frescos: abobrinha, berinjela, pimentão, cebola roxa e tomate, tudo sobre molho de tomate caseiro e queijo muçarela. Uma opção leve, colorida e cheia de sabor para quem busca uma refeição saudável.",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/1bb04a24-361c-4e3a-ad2f-81255f2d53b9-berpux.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
      {
        name: "Meat Lovers Pizza",
        price: 50,
        description:
          "A Meat Lovers Pizza é perfeita para os carnívoros: leva calabresa, pepperoni, presunto, bacon e carne moída, tudo sobre uma base de queijo muçarela e molho de tomate especial. Uma pizza robusta, farta e extremamente saborosa.",
        discountPercentage: 10,
        imageUrl:
          "https://utfs.io/f/ead919ee-2e3d-423f-b294-e525f9d6a5b7-berpuy.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
    ];

    for (const product of pizzaProducts) {
      await prismaClient.product.create({
        data: product,
      });

      console.log(`Created ${product.name}`);
    }
  }
};

const createJapanese = async (
  desertsCategoryId: string,
  juicesCategoryId: string,
) => {
  const japaneseCategory = await prismaClient.category.create({
    data: {
      name: "Japonesa",
      imageUrl:
        "https://utfs.io/f/ccc2351a-49b0-4613-a233-3b3b3bd6a47c-yd9ii3.png",
    },
  });

  const japaneseRestaurants = [
    {
      name: "Sushi House",
      imageUrl:
        "https://utfs.io/f/7f52b936-9f7a-40cc-b22f-b62727ddb9cc-fu3r05.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: japaneseCategory.id,
        },
      },
    },
    {
      name: "Omni Sushi",
      imageUrl:
        "https://utfs.io/f/f809b477-7cf1-47f5-8664-0a4566225867-fu3r06.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: japaneseCategory.id,
        },
      },
    },
    {
      name: "The Sushi Queen",
      imageUrl:
        "https://utfs.io/f/42bb722a-0b76-40e8-8251-cee9093bed38-fu3r07.png",
      deliveryFee: 0,
      deliveryTimeMinutes: 45,
      categories: {
        connect: {
          id: japaneseCategory.id,
        },
      },
    },
    {
      name: "Sushi House",
      imageUrl:
        "https://utfs.io/f/de37be82-23bf-4901-aeea-b93c281bf401-fu3r08.png",
      deliveryFee: 10,
      deliveryTimeMinutes: 20,
      categories: {
        connect: {
          id: japaneseCategory.id,
        },
      },
    },
  ];

  for (const item of japaneseRestaurants) {
    const restaurant = await prismaClient.restaurant.create({
      data: item,
    });

    console.log(`Created ${restaurant.name}`);

    await createDeserts(restaurant.id, desertsCategoryId);
    await createJuices(restaurant.id, juicesCategoryId);

    const japaneseProducts = [
      {
        name: "Sushi Combo",
        price: 30,
        description:
          "O Sushi Combo traz uma seleção de sushis tradicionais: nigiri de salmão, uramaki de pepino, hossomaki de atum e hot roll crocante. Feito com arroz temperado, peixe fresco e alga nori, é ideal para quem quer experimentar um pouco de tudo.",
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/5ef70d5c-892b-424d-8655-6bc2716411e1-1lryd0.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        name: "Sashimi Combo",
        price: 40,
        description:
          "O Sashimi Combo oferece fatias generosas de salmão, atum e peixe branco, servidas sobre gelo e acompanhadas de molho shoyu, gengibre e wasabi. Uma experiência autêntica para quem aprecia a pureza e frescor dos peixes.",
        discountPercentage: 10,
        imageUrl:
          "https://utfs.io/f/e8b2fb18-d636-477f-8bed-cfe85358246f-1lryd1.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        name: "Nigiri Combo",
        price: 35,
        description:
          "O Nigiri Combo traz uma variedade de nigiris: salmão, atum, peixe branco e camarão, todos montados sobre arroz japonês temperado e finalizados com um toque de wasabi. Uma explosão de sabores do Japão em cada mordida.",
        discountPercentage: 7,
        imageUrl:
          "https://utfs.io/f/fd9458a3-153b-4833-aca1-61a882da1ce6-1lryd2.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        name: "Temaki Combo",
        price: 45,
        description:
          "O Temaki Combo inclui temakis de salmão, atum e camarão, recheados com arroz, cebolinha, gergelim e molho tarê. Os cones de alga nori são montados na hora para garantir crocância e frescor.",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/eec36a13-de2d-48ed-92d2-4f74477dad83-1lryd3.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        name: "Uramaki Combo",
        price: 30,
        description:
          "O Uramaki Combo traz uramakis variados: salmão, pepino, kani e cream cheese, todos enrolados com arroz por fora e cobertos com gergelim. Uma opção deliciosa para quem gosta de sabores suaves e texturas diferentes.",
        discountPercentage: 10,
        imageUrl:
          "https://utfs.io/f/c04a5df1-c1ac-4e28-ba48-27d856caa553-1lryd4.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        name: "Hosomaki Combo",
        price: 40,
        description:
          "O Hosomaki Combo apresenta rolinhos finos recheados com salmão, pepino e atum, enrolados em alga nori e arroz temperado. Uma opção leve, delicada e perfeita para quem aprecia a simplicidade da culinária japonesa.",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/fd147569-14c6-428d-9a54-df64c61c6bb6-1lryd5.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
    ];

    for (const product of japaneseProducts) {
      await prismaClient.product.create({
        data: product,
      });

      console.log(`Created ${product.name}`);
    }
  }
};

const createBrazilian = async (
  desertsCategoryId: string,
  juicesCategoryId: string,
) => {
  const brazilianCategory = await prismaClient.category.create({
    data: {
      name: "Brasileira",
      imageUrl:
        "https://utfs.io/f/d84e3a7a-fcf6-4d3d-86bf-d62c0b1febdc-m1yv44.png",
    },
  });

  const brazilianRestaurants = [
    {
      name: "Churrascaria House",
      imageUrl:
        "https://utfs.io/f/5a090f6e-520f-418a-a42a-043b512314a2-n9n78u.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: brazilianCategory.id,
        },
      },
    },
    {
      name: "Omni Churrascaria",
      imageUrl:
        "https://utfs.io/f/87338583-660e-47f1-a80d-6ea804298bd5-n9n78v.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: brazilianCategory.id,
        },
      },
    },
    {
      name: "The Churrascaria Queen",
      imageUrl:
        "https://utfs.io/f/b26b00ca-5041-46cb-9b68-a1856ed064ad-n9n78w.png",
      deliveryFee: 0,
      deliveryTimeMinutes: 45,
      categories: {
        connect: {
          id: brazilianCategory.id,
        },
      },
    },
    {
      name: "Churrascaria House",
      imageUrl:
        "https://utfs.io/f/c1f279ea-ac09-4e4f-9757-30018cb4c7bc-n9n78x.png",
      deliveryFee: 10,
      deliveryTimeMinutes: 20,
      categories: {
        connect: {
          id: brazilianCategory.id,
        },
      },
    },
  ];

  for (const item of brazilianRestaurants) {
    const restaurant = await prismaClient.restaurant.create({
      data: item,
    });

    console.log(`Created ${restaurant.name}`);

    await createDeserts(restaurant.id, desertsCategoryId);
    await createJuices(restaurant.id, juicesCategoryId);

    const brazilianProducts = [
      {
        name: "Camarão Citrus",
        price: 40,
        description:
          "Camarões frescos salteados ao molho cítrico de laranja e limão, acompanhados de arroz branco soltinho e legumes salteados na manteiga. Um prato sofisticado, leve e com um toque tropical.",
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/cecdeeb8-10e6-4be8-8553-0a120717d194-xf34p9.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        name: "Picanha Especial",
        price: 45,
        description:
          "Picanha nobre grelhada no ponto certo, servida com farofa crocante, vinagrete, arroz branco e batatas rústicas. Um clássico brasileiro que conquista pelo sabor e suculência da carne.",
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/089299df-fcb9-446a-a8cc-75e4e26b7357-xf34p8.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        name: "Macarrão com Carne",
        price: 35,
        description:
          "Macarrão tipo espaguete ao molho de tomate caseiro, servido com tiras de carne bovina grelhada e finalizado com queijo parmesão ralado. Uma refeição completa, saborosa e reconfortante.",
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/891eb8aa-635e-4cb3-b7fd-eb8d1c9f14e1-xf34p7.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        name: "Carne com Salada",
        price: 35,
        description:
          "Carne bovina grelhada, servida com salada fresca de folhas verdes, tomate, cenoura ralada e molho de iogurte. Uma opção leve, nutritiva e cheia de sabor para o dia a dia.",
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/43d9e18a-4ba9-47b6-9a87-6d4fedbd6f41-xf34ol.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        name: "Filé Mignon com Fritas",
        price: 40,
        description:
          "Filé mignon alto e macio, grelhado na manteiga, acompanhado de batatas fritas crocantes e arroz branco. Uma combinação clássica e irresistível para os amantes de carne.",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/0cfa51a6-1a88-4114-a6c6-bf607a5a1cb0-xf34ok.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        name: "Frango ao Molho",
        price: 40,
        description:
          "Peito de frango grelhado, servido com molho cremoso de ervas finas, arroz branco e legumes salteados. Uma refeição equilibrada, leve e cheia de sabor.",
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/9158a622-4b87-4ec6-a726-569dee27a093-xf34oj.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
    ];

    for (const product of brazilianProducts) {
      await prismaClient.product.create({
        data: product,
      });

      console.log(`Created ${product.name}`);
    }
  }
};

const createDeserts = async (restaurantId: string, categoryId: string) => {
  await prismaClient.restaurant.update({
    where: {
      id: restaurantId,
    },
    data: {
      categories: {
        connect: {
          id: categoryId,
        },
      },
    },
  });

  const desertProducts = [
    {
      name: "Sorvete Especial",
      price: 30,
      description:
        "Sorvete artesanal de baunilha, extremamente cremoso, servido com calda quente de chocolate meio amargo e finalizado com castanhas crocantes. Uma sobremesa refrescante e sofisticada para qualquer ocasião.",
      discountPercentage: 10,
      imageUrl:
        "https://utfs.io/f/b703fcaa-eb9c-4257-a08e-fba0f0e12fc1-pr8gxl.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Bolo de Chocolate",
      price: 40,
      description:
        "Bolo de chocolate fofinho, recheado com ganache cremosa e coberto com raspas de chocolate belga. Uma explosão de sabor para os chocólatras de plantão.",
      discountPercentage: 7,
      imageUrl:
        "https://utfs.io/f/029befff-aba7-49b3-91c4-8da022e699b0-pr8gxm.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Petit Gateau",
      price: 55,
      description:
        "Petit gateau de chocolate com casquinha crocante por fora e recheio quente e cremoso por dentro, servido com uma bola de sorvete de creme. Uma sobremesa clássica francesa que derrete na boca.",
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/98f262f6-dc35-428b-bac9-ac443f9f41bb-pr8gxn.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Bolo de Morango",
      price: 35,
      description:
        "Bolo de massa leve, recheado com creme de baunilha e morangos frescos, coberto com chantilly artesanal. Uma sobremesa delicada, refrescante e perfeita para dias quentes.",
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/6e6ad97a-f1f1-4d4b-bb40-f5ff25ba97d4-pr8gxo.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Biscoito de Chocolate",
      price: 30,
      description:
        "Biscoitos crocantes de chocolate, recheados com gotas de chocolate meio amargo e finalizados com uma pitada de flor de sal. Perfeitos para acompanhar um café ou chá.",
      discountPercentage: 7,
      imageUrl:
        "https://utfs.io/f/4b8d0b7c-daa9-46f6-aebd-385cf5e086f7-pr8gxp.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Torta de Morango",
      price: 45,
      description:
        "Torta de massa crocante, recheada com creme de confeiteiro e coberta com morangos frescos e geleia artesanal. Uma sobremesa elegante, colorida e cheia de sabor.",
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/4caadde1-0a1c-45a6-895b-4bfb6986099d-pr8gxq.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
  ];

  for (const product of desertProducts) {
    await prismaClient.product.create({
      data: product,
    });

    console.log(`Created ${product.name}`);
  }
};

const createJuices = async (restaurantId: string, categoryId: string) => {
  await prismaClient.restaurant.update({
    where: {
      id: restaurantId,
    },
    data: {
      categories: {
        connect: {
          id: categoryId,
        },
      },
    },
  });

  const juiceProducts = [
    {
      name: "Suco de Cenoura",
      price: 15,
      description:
        "Suco natural de cenoura, preparado na hora, rico em vitamina A e com sabor adocicado e refrescante. Uma opção saudável para acompanhar qualquer refeição.",
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/5126e950-40ca-4ef1-a166-16274fec16bc-6b2vea.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Suco Cítrico",
      price: 20,
      description:
        "Suco feito com uma mistura de laranja, limão e tangerina, resultando em uma bebida cítrica, levemente ácida e extremamente refrescante. Ideal para dias quentes e para fortalecer a imunidade.",
      discountPercentage: 7,
      imageUrl:
        "https://utfs.io/f/6dbe915d-af87-4f2a-b841-864ba9427da8-6b2ve9.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Suco de Limão",
      price: 12,
      description:
        "Suco de limão tahiti, preparado com água gelada e um toque de açúcar, resultando em uma bebida leve, ácida e muito refrescante. Perfeito para acompanhar pratos leves ou petiscos.",
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/03aa4137-c949-4d2c-bdf2-bad6dd1f565e-6b2ve7.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Suco de Laranja",
      price: 12,
      description:
        "Suco de laranja natural, feito com frutas frescas e selecionadas, sem adição de conservantes. Uma fonte de energia, vitamina C e sabor para o seu dia.",
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/ce2b8e30-b922-4b1e-bdde-656348cd25c3-6b2ve6.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Suco de Abacaxi",
      price: 12,
      description:
        "Suco de abacaxi gelado, preparado com a fruta fresca, levemente adoçado e servido com pedras de gelo. Refrescante, digestivo e perfeito para o verão.",
      discountPercentage: 7,
      imageUrl:
        "https://utfs.io/f/c4202826-7014-4368-8941-fa1af9b9c8b2-6b2ve5.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Suco de Melancia",
      price: 12,
      description:
        "Suco de melancia docinho, feito com a fruta fresca e servido bem gelado. Uma bebida leve, hidratante e perfeita para refrescar o seu dia.",
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/a9ba878f-79a8-4c25-883c-5c2e1670b256-6b2ve4.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
  ];

  for (const product of juiceProducts) {
    await prismaClient.product.create({
      data: product,
    });

    console.log(`Created ${product.name}`);
  }
};

const main = async () => {
  const desertsCategory = await prismaClient.category.create({
    data: {
      name: "Sobremesas",
      imageUrl:
        "https://utfs.io/f/0f81c141-4787-4a81-abce-cbd9c6596c7a-xayf5d.png",
    },
  });

  const juicesCategory = await prismaClient.category.create({
    data: {
      name: "Sucos",
      imageUrl:
        "https://utfs.io/f/9f3013bf-0778-4d80-a330-4da2682deaf9-o41y62.png",
    },
  });

  await createBurguers(desertsCategory.id, juicesCategory.id);
  await createPizzas(desertsCategory.id, juicesCategory.id);
  await createJapanese(desertsCategory.id, juicesCategory.id);
  await createBrazilian(desertsCategory.id, juicesCategory.id);
};

main()
  .then(() => {
    console.log("Seed do banco de dados realizado com sucesso!");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
